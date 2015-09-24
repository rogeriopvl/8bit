# 8Bit [![Build Status](https://travis-ci.org/rogeriopvl/8bit.svg)](https://travis-ci.org/rogeriopvl/8bit)

8Bit is a javascript module that converts an image into a pixelated version using canvas

## Install

### NPM

    npm install 8bit

### Bower

    bower install 8bit

### Direct file link

    <script type="text/javascript" src="https://raw.githubusercontent.com/rogeriopvl/8bit/master/8bit.js"></script>

## Usage

    var eightBit = require('8bit'); // only needed for NPM installs

    var img = new Image();
    img.onload = function () {
        eightBit(document.getElementById('mycanvas'), img, 10);
    };
    img.src = 'http://foobar.com/your_image.png';

### API

- `eightBit(canvas, image, scaleFactor)`
    - `canvas` - canvas element that will be used to place the pixelated version of the image
    - `image` - image HTMLElement to pixelate
    - `scaleFactor` - Number between 0 and 100, lower is more pixelated.

## License

MIT (see LICENSE file)
