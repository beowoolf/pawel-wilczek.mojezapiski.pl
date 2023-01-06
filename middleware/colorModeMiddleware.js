export default function (ctx) {
  const colorModeTheme = ctx.app.$cookies.get('colorModeTheme')
  //   console.log('Kolor z ciasteczek cookies to: ' + colorModeTheme)
  if (colorModeTheme) ctx.app.$colorMode.preference = colorModeTheme
}
