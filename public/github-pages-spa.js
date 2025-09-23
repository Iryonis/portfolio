/**
 * Redirect script for GitHub Pages SPA hosting.
 * It encodes the URL path into a query parameter to avoid 404 errors on page reloads.
 * Example: "/portfolio/about" -> "/portfolio/?/about"
 */
;(function () {
  const l = window.location
  const pathSegmentsToKeep = 1

  const pathSegments = l.pathname.split('/').slice(1)

  if (pathSegments.length <= pathSegmentsToKeep) {
    // If at root or only base path, redirect to base path with trailing slash
    l.replace(l.origin + '/portfolio/')
    return
  }

  // Build the optimized redirect
  const basePath = '/' + pathSegments.slice(0, pathSegmentsToKeep).join('/')
  const routePath = pathSegments.slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~')
  const searchParams = l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : ''

  const redirectUrl = l.origin + basePath + '/?/' + routePath + searchParams + l.hash

  l.replace(redirectUrl)
})()
