# looker-on

Since many people think `npm` is all about javascript, here is a package which renders pair of SVG eyes, styled with CSS and hosted on `npm`. Here is a `6:15` minutes video showing how to use it: https://www.youtube.com/watch?v=27GYm6nRv6E

# how to use this?

With [npm](https://npmjs.org) do:

```
npm install looker-on
```

Then create instance of looker and attach it to dom:

```js
// your index.js file
var Looker = require('looker-on');
new Looker(document.body);
```

``` html
<!DOCTYPE html>
<html lang="en">

<head>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <script src='bundle.js'></script>
</body>

</html>
```

`style.css` and `bundle.js` are produced by [parcelify](https://www.npmjs.org/package/parcelify) and [browserify](http://browserify.org/):

```
parcelify index.js -c style.css
browserify index.js > bundle.js
```

Now you can open `index.html` and observe two eyes observing you.

# bonus

You can make these eyes track position of the mouse cursor by changing `index.js` to

``` js
// your index.js file
var Looker = require('looker-on');
var observer = new Looker(document.body);
document.body.addEventListener('mousemove', function (e) {
  observer.lookAt(e.clientX, e.clientY);
}, false);

```

# is it worth the effort?

Yes. With almost 100k packages on npm, this is well worth the effort of familiarizing yourself with tools.

# license

MIT
