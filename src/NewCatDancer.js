var makeCatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('src', 'cat.gif');
  this.$node.attr('class', 'dancer giphy-embed cat');
  //this.$node.append('<iframe src="https://giphy.com/embed/3ohhwv7Jwy0qBaroZO" width="480" height="480" frameBorder="0" class="giphy-embed" id="cat" allowFullScreen></iframe>');
};

makeCatDancer.prototype = Object.create(makeDancer.prototype);
makeCatDancer.prototype.constructor = makeCatDancer;

makeCatDancer.prototype.step = function() {
  
  
  makeDancer.prototype.step.call(this);
};