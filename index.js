var fs = require('fs');
var template = fs.readFileSync(__dirname + '/view.html', 'utf8');

module.exports = HeaderComponent;

function HeaderComponent(parent) {

  var dom = appendToDom(parent, template);
  var eyes = getEyes(dom);

  return {
    lookAt: function(screenX, screenY) {
      eyes.forEach(function(eye) {
        eye.lookAt(screenX, screenY);
      });
    }
  };

  function appendToDom(parent, template) {
    var dom = parent.ownerDocument.createElement('div');
    dom.innerHTML = template;
    parent.appendChild(dom);
    return dom;
  }

  function getEyes(dom) {
    var eyes = dom.querySelectorAll('.eye');
    var models = [];
    for (var i = 0; i < eyes.length; ++i) {
      var eye = eyes[i];
      models.push({
        pupil: eye.querySelector('.pupil'),
        position: eye.getBoundingClientRect(),
        lookAt: lookAt
      });
    }

    return models;

    function lookAt(x, y) {
      var cx = this.position.left + this.position.width / 2;
      var cy = this.position.top + this.position.height / 2;
      var angle = Math.atan2(y - cy, x - cx);
      var dx = 100 * Math.cos(angle) - 100;
      var dy = 100 * Math.sin(angle);

      this.pupil.setAttributeNS(null, 'transform', 'translate(' + dx + ',' + dy + ')');
    }
  }
}
