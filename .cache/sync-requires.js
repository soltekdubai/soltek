
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/workspaces/soltek/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/workspaces/soltek/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/workspaces/soltek/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/workspaces/soltek/src/pages/index.js")),
  "component---src-pages-services-js": preferDefault(require("/workspaces/soltek/src/pages/services.js"))
}

