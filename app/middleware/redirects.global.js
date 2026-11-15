const qualificationPaths = [
  '/akademiadotnet',
  '/ciss',
  '/devmentors',
  '/educativo',
  '/kuvi',
  '/videopoint',
]

export default defineNuxtRouteMiddleware((to) => {
  const path = to.path.length > 1 ? to.path.replace(/\/$/, '') : to.path

  if (qualificationPaths.includes(path)) {
    return navigateTo('/moje-kwalifikacje/', { redirectCode: 301 })
  }
})
