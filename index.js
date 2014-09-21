var fs = require('fs');
var template = fs.readFileSync(__dirname + '/view.html', 'utf8');

module.exports = HeaderComponent;

function HeaderComponent(parent) {
  var header = appendToDom(parent, template);

  return {
    on: function(name, cb) {
      header.addEventListener(name, cb, false);
    }
  };

  function appendToDom(parent, template) {
    var dom = document.createElement('div');
    dom.innerHTML = template;
    parent.appendChild(dom);
    return dom.querySelector('.my-header');
  }
}
