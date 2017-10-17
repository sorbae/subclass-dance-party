var makeFlyingDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeBlinkyDancer.prototype)
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('flyer');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.setPosition(top, left);
};

makeFlyingDancer.prototype = Object.create(makeDancer.prototype);
makeFlyingDancer.prototype.constructor = makeFlyingDancer;

makeFlyingDancer.prototype.fly = function(timeBetweenSteps) {
  var styleSettings = {
    width: '20%',
    animation: 'fly ' + timeBetweenSteps + 's infinite alternate'
  };
  this.$node.css(styleSettings);
};