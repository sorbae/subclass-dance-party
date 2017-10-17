var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeBlinkyDancer.prototype)
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncy');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.setPosition(500, left);
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.bounce = function(top, left, timeBetweenSteps) {
  var styleSettings = {
    width: '20%',
    animation: 'bounce ' + timeBetweenSteps + 's infinite alternate'
  };
  this.$node.css(styleSettings);
};