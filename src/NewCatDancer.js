var makeCatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<iframe src="https://giphy.com/embed/3ohhwv7Jwy0qBaroZO" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/dance-3ohhwv7Jwy0qBaroZO"></a></p>');
};

makeCatDancer.prototype = Object.create(makeDancer.prototype);
makeCatDancer.prototype.constructor = makeCatDancer;

makeCatDancer.prototype.step = function() {
  
  
  makeDancer.prototype.step.call(this);
};