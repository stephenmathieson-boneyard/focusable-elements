
describe('focusable-elements', function () {
  var focusableElements = require('focusable-elements');
  var assert = require('assert');

  function test(id) {
    var container = document.getElementById(id);
    var focusable = focusableElements(container);
    for (var i = 0, len = focusable.length; i < len; i++) {
      assert(-1 === focusable[i].className.indexOf('no'));
    }
  }

  after(function () {
    document.getElementById('fixture').style.display = 'none';
  });

  it('should find all focusable anchors', function () {
    test('anchors');
  });

  it('should find all focusable inputs', function () {
    test('inputs');
  });

  it('should find all focusable select boxes', function () {
    test('selects');
  });

  it('should find all focusable buttons', function () {
    test('buttons');
  });

  it('should find all focusable textareas', function () {
    test('textareas');
  });

  it('should find all non-natively focusable elements', function () {
    test('divs');
  });

  it('should get all focusable elements', function () {
    test('fixture');
  });
});
