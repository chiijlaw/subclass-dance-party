var makeSnoopDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<iframe src="https://giphy.com/embed/TeBpzQZRaBIC4" width="234" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/dancing-transparent-TeBpzQZRaBIC4"></a></p>');
};

makeSnoopDancer.prototype = Object.create(makeDancer.prototype);
makeSnoopDancer.prototype.constructor = makeSnoopDancer;

makeSnoopDancer.prototype.step = function() {
  
  
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
};