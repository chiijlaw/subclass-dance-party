var makePencilDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<iframe src="https://giphy.com/embed/26DMUltMNOQYp3nry" width="264" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/dance-dancing-26DMUltMNOQYp3nry"></a></p>');
};

makePencilDancer.prototype = Object.create(makeDancer.prototype);
makePencilDancer.prototype.constructor = makePencilDancer;

makePencilDancer.prototype.step = function() {
  
  
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
};