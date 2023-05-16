/**
 * 8bit
 *
 * A module that converts an image into a pixelated version (just like
 * 8bit artwork).
 *
 * @author rogeriopvl <https://github.com/rogeriopvl>
 * @license MIT
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.eightBit = factory();
  }
} (this, function () {
  /**
   * Draws a pixelated version of an image in a given canvas
   * @param {object} canvas - a canvas object
   * @param {object} image - an image HTMLElement object
   * @param {number} scale - the scale factor: between 0 and 100
   */
  var eightBit = function (canvas, image, scale) {
    scale *= 0.01;

    var hRatio = canvas.width / image.width;
    var vRatio = canvas.height / image.height;
    var ratio  = Math.min (hRatio, vRatio);
    
    image.width *= ratio;
    image.height *= ratio;

    canvas.width = image.width;
    canvas.height = image.height;

    var scaledW = canvas.width * scale;
    var scaledH = canvas.height * scale;

    var tempCanvas = document.createElement('canvas');
    tempCanvas.width = scaledW;
    tempCanvas.height = scaledH;

    var tempCtx = tempCanvas.getContext('2d');
    tempCtx.mozImageSmoothingEnabled = false;
    tempCtx.webkitImageSmoothingEnabled = false;
    tempCtx.imageSmoothingEnabled = false;

    tempCtx.drawImage(image, 0, 0, scaledW, scaledH);

    var ctx = canvas.getContext('2d');
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(tempCanvas, 0, 0, scaledW, scaledH, 0, 0, canvas.width, canvas.height);
  };

  return eightBit;
}));
