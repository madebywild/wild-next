/* eslint-disable */

function checkFeatures() {
  // https://github.com/w3c/csswg-drafts/issues/3559#issuecomment-1758459996
  var supportsFlexGap = typeof CSS !== "undefined" ? CSS.supports("inset: 0") : false;

  if (!supportsFlexGap) {
    window.location.href = "/unsupported-browser/index.html";
  }
}

if (typeof window !== "undefined") {
  checkFeatures();
}
