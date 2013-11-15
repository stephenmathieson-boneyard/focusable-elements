
var isFocusable = require('is-focusable');
var descendants = require('descendants');

module.exports = elements;

/**
 * Get all focusable elements within `container`
 *
 * @api public
 * @param {HTMLElement} container
 * @return {Array}
 */

function elements(container) {
  var children = descendants(container);
  var focusable = [];
  for (var i = 0, len = children.length; i < len; i++) {
    if (isFocusable(children[i])) focusable.push(children[i]);
  }
  return focusable;
}
