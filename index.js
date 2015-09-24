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

    canvas.width = image.width;
    canvas.height = image.height;

    var scaledW = canvas.width * scale;
    var scaledH = canvas.height * scale;

    var ctx = canvas.getContext('2d');

    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(image, 0, 0, scaledW, scaledH);
    ctx.drawImage(canvas, 0, 0, scaledW, scaledH, 0, 0, image.width, image.height);
  };

  return eightBit;
}));
