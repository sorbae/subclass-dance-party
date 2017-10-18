$(document).ready(function() {
  window.dancers = [];
  
  var addLineUpMethod = function(className, method, xOffSet, yOffSet) {
    window.dancers.forEach(function(dancer) {
      xOffSet = xOffSet || 0;
      yOffSet = yOffSet || 0;
      if (dancer.$node.hasClass(className)) {
        dancer.setPosition(100 + xOffSet, 70 + yOffSet);
        dancer.$node.addClass(method);
        xOffSet += 50;
        yOffSet += 50;
      }
    });
  };

  // var findCollisions = function(dancers) {
  //   var positions = dancers.forEach(function(dancer) {
  //     return [window.dancers[i].top, window.dancers[i].left];
  //   });
  //   var collisions = positions.filter(function(dancer) {
      
  //   });
  // };
  
  var findCollisions = function() {
    setTimeout(function() {
      findCollisions();
    }, 10);
    window.dancers.forEach(function(firstDancer) {
      let dancer1X = firstDancer.$node.position().top;
      let dancer1Y = firstDancer.$node.position().left;
      console.log(dancer1X, dancer1Y);
      window.dancers.forEach(function(secondDancer) {
        let dancer2X = secondDancer.$node.position().top;
        let dancer2Y = secondDancer.$node.position().left;
        let distX = dancer2X - dancer1X;
        let distY = dancer2Y - dancer2Y;
        let distanceBetween = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
        if (distanceBetween < 100) {
          console.log(true);
          return true;
        }
      });
    });
    console.log(false);
    return false;
  };

  findCollisions();
  

  $('.lineUp').on('click', function(event) {
    addLineUpMethod('blinky', 'zoom', 100, 100);
    addLineUpMethod('bouncy', 'rotate', 100, 400);
    addLineUpMethod('flyer', 'glow', 100, 800);

  });
  
  $('.shuffle').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      dancer.setPosition($("body").height() * Math.random(), $("body").width() * Math.random(), Math.random() * 1000);
      dancer.$node.removeClass('zoom');
      dancer.$node.removeClass('rotate');
      dancer.$node.removeClass('glow');
    });
  });
  

  $('body').on('mouseover', 'span', function(event) {
    $(this).toggleClass('flip');
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
});

