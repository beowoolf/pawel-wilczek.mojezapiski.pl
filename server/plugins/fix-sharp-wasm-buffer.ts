/**
 * FreeBSD uses sharp-wasm32. Its toBuffer() returns a SharedArrayBuffer-backed
 * view; IPX then builds a Fetch Response and Passenger/Node silently UTF-8-mangles
 * high bytes to EF BF BD (images return HTTP 200 but won't decode).
 *
 * Copy onto a normal ArrayBuffer immediately after sharp produces the buffer —
 * beforeResponse is too late because IPX uses the Fetch handler path.
 *
 * @see https://github.com/lovell/sharp/issues/4576
 */
export default defineNitroPlugin(async () => {
  const sharpMod = await import('sharp')
  const sharp = sharpMod.default
  const proto = Object.getPrototypeOf(sharp()) as {
    toBuffer: (this: unknown, ...args: unknown[]) => unknown
  }

  if ((proto.toBuffer as { __ipxWasmPatched?: boolean }).__ipxWasmPatched) {
    return
  }

  const originalToBuffer = proto.toBuffer

  function copyBuffer(buf: unknown): unknown {
    // Prefer a plain Uint8Array (fresh ArrayBuffer) — safer for Fetch Response
    // bodies than a Node Buffer, which some hosts still string-coerce.
    if (Buffer.isBuffer(buf) || buf instanceof Uint8Array) {
      return new Uint8Array(buf)
    }
    if (
      buf &&
      typeof buf === 'object' &&
      'data' in buf &&
      ((buf as { data: unknown }).data instanceof Uint8Array ||
        Buffer.isBuffer((buf as { data: unknown }).data))
    ) {
      const typed = buf as { data: Uint8Array }
      return { ...typed, data: new Uint8Array(typed.data) }
    }
    return buf
  }

  function patchedToBuffer(this: unknown, ...args: unknown[]) {
    const result = originalToBuffer.apply(this, args)
    if (result && typeof (result as Promise<unknown>).then === 'function') {
      return (result as Promise<unknown>).then(copyBuffer)
    }
    return copyBuffer(result)
  }

  ;(patchedToBuffer as { __ipxWasmPatched?: boolean }).__ipxWasmPatched = true
  proto.toBuffer = patchedToBuffer
})
