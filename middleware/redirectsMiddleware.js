export default function (ctx) {
  const statusCode = 301 // na razie tymczasowe o kodzie 302, ale produkcyjnie będziemy używać kodu 301
  const fullPath = ctx.route.fullPath
  if (
    [
      '/akademiadotnet',
      '/ciss',
      '/devmentors',
      '/educativo',
      '/kuvi',
      '/videopoint',
    ].includes(fullPath)
  )
    ctx.redirect(statusCode, fullPath + '/')
  if (
    [
      '/akademiadotnet/',
      '/ciss/',
      '/devmentors/',
      '/educativo/',
      '/kuvi/',
      '/videopoint/',
    ].includes(fullPath)
  )
    ctx.redirect(statusCode, '/moje-kwalifikacje/')
  if (fullPath === '/certyfikat_en-179.pdf') ctx.redirect(statusCode, '/ciss/')
}
