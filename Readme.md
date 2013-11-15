
# focusable-elements

  Get focusable elements

## Installation

  Install with [component(1)](http://component.io):

    $ component install stephenmathieson/focusable-elements

## API

### `focusableElements(container)`

  Get all focusable elements within `container`.

## Example

[Maintain focus](http://www.w3.org/TR/wai-aria-practices/#trap_focus) within your modal:

```js
var focusable = require('focusable-elements');

var modal = document.getElementsById('my-modal');
var elements = focusable(modal);

modal.addEventListener('keydown', function (e) {
  // ignore non-tabs
  if (9 !== e.which) return;

  // focus the last element 
  if (e.shiftKey && elements[0] === e.target) {
    e.preventDefault();
    elements[elements.length - 1].focus();
    return;
  }

  // focus the first element
  if (!e.shiftKey && elements[elements.length - 1] === e.target) {
    e.preventDefault();
    elements[0].focus();
    return;
  }
});

```

## License

  MIT
