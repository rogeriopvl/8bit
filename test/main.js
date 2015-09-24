var test = require('tape');

var eightBit = require('../8bit.js');

test('exists as a function', function (t) {
  t.plan(1);
  t.equals(typeof eightBit, 'function');
});

test('passed canvas is resized to the image size', function (t) {
  t.plan(2);

  var fakeCanvas = {
    getContext: function () {
      return {
        drawImage: function () {}
      };
    }
  };
  var fakeImage = { width: 300, height: 200 };

  eightBit(fakeCanvas, fakeImage, 30);

  t.equals(fakeCanvas.width, 300);
  t.equals(fakeCanvas.height, 200);
});

test('should call context.drawImage two times', function (t) {
  t.plan(1);

  var fakeCanvas = {
    drawImageCalls: 0,
    getContext: function () {
      var self = this;
      return {
        drawImage: function () { self.drawImageCalls++; }
      };
    }
  };
  var fakeImage = { width: 300, height: 200 };

  eightBit(fakeCanvas, fakeImage, 30);

  t.equals(fakeCanvas.drawImageCalls, 2);
});
