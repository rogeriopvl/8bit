# 8Bit | ![CI status](https://github.com/rogeriopvl/8bit/actions/workflows/test.yml/badge.svg?branch=master)

8Bit is a javascript module that converts an image into a pixelated version using canvas.

You can find a demo [here](https://jsfiddle.net/fLajrmun/2/).

## Install

### NPM

    npm install 8bit

### Bower

    bower install 8bit

### Direct file link

    <script type="text/javascript" src="https://cdn.rawgit.com/rogeriopvl/8bit/master/8bit.js"></script>

## Usage

```javascript
var eightBit = require('8bit'); // only needed for NPM installs

var img = new Image();
img.onload = function () {
    eightBit(document.getElementById('mycanvas'), img, 10);
};
img.src = 'http://foobar.com/your_image.png';
```

### API

- `eightBit(canvas, image, scaleFactor)`
    - `canvas` - canvas element that will be used to place the pixelated version of the image
    - `image` - image HTMLElement to pixelate
    - `scaleFactor` - Number between 0 and 100, lower is more pixelated.

## License

MIT (see LICENSE file)
