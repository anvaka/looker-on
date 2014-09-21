(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var HeaderComponent = require('../');

var helloWorld = new HeaderComponent(document.body);

helloWorld.on('click', function () {
  new HeaderComponent(document.body);
});

},{"../":2}],2:[function(require,module,exports){

var template = "<h2 class='my-header'>\n  Hello world!\n</h2>\n";

module.exports = HeaderComponent;

function HeaderComponent(parent) {
  var header = appendToDom(parent, template);

  return {
    on: function(name, cb) {
      header.addEventListener(name, cb, false);
    },

    text: function(newText) {
      if (typeof newText === 'string') header.innerText = newText;

      newText = header.innerText;
      return newText;
    }
  };

  function appendToDom(parent, template) {
    var dom = document.createElement('div');
    dom.innerHTML = template;
    parent.appendChild(dom);
    return dom.querySelector('.my-header');
  }
}

},{}]},{},[1])