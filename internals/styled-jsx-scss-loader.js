/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Thomas Strobl @tom2strobl
*/
module.exports = function(source) {
  this.cacheable && this.cacheable();
  this.value = source;
  return `import css from 'styled-jsx/css'; export default css\`${JSON.stringify(source)}\``;
}
