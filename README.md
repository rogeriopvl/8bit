# 8Bit

8Bit is a javascript module that converts an image into a pixelated version using canvas

## Install

### NPM

    npm install 8bit

## Usage

    var eightBit = require('8bit');

    var img = new Image();
    img.onload = function () {
        eightBit(document.getElementById('mycanvas'), img, 10);
    };
    img.src = 'http://foobar.com/your_image.png';

## License

MIT (see LICENSE file)
