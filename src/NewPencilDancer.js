var makePencilDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'pencil.gif');
  this.$node.attr('class', 'dancer giphy-embed pencil');
  //this.$node.append('<iframe src="https://giphy.com/embed/26DMUltMNOQYp3nry" width="264" height="480" frameBorder="0" class="giphy-embed" id="pencil" allowFullScreen></iframe>');
};

makePencilDancer.prototype = Object.create(makeDancer.prototype);
makePencilDancer.prototype.constructor = makePencilDancer;

makePencilDancer.prototype.step = function() {
  
  
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
};