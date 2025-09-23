/**
 * Redirects URLs with "/?/" to clean URLs for SPA routing.
 * Example: "/?/" -> "/"
 * Example: "/?/about" -> "/about"
 */

;(function (l) {
  // Check if there is a "/?/" in the URL
  if (l.search[1] === '/') {
    var decoded = l.search
      .slice(1)
      .split('&')
      .map(function (s) {
        return s.replace(/~and~/g, '&')
      })
      .join('?')

    // Change URL without reloading the page
    window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash)
  }
})(window.location)
