var makeSnoopDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node.append('<iframe src="https://giphy.com/embed/TeBpzQZRaBIC4" width="234" height="480" frameBorder="0" class="giphy-embed dancer" id="snoop" ></iframe>');
  this.$node.attr('src', 'snoop.gif');
  this.$node.attr('class', 'dancer giphy-embed snoop');
  //this.$node.append('<img src = snoop.gif></img>');
  
};

makeSnoopDancer.prototype = Object.create(makeDancer.prototype);
makeSnoopDancer.prototype.constructor = makeSnoopDancer;

makeSnoopDancer.prototype.step = function() {
  
  
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
};