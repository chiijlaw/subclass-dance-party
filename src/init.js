

$(document).ready(function() {
  window.dancers = [];
  var sorted = false;

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
    window.dancers.push(dancer.$node);
    $("body").append(dancer.$node);

  });
  
  $('.lineUp').on('click', function(event) {
    $(".snoop").animate({ top: "400px" }, 2000);
    $(".pencil").animate({ top: "100px" }, 2000);
    $(".cat").animate({ top: "600px" }, 2000);
    $(".blinky").animate({ top: "300px" }, 2000);
  });

  $('.center').on('click', function(event) {
    $(".dancer").animate({top: "300px"}, 2000); 
  });

  $('.conga').on('click', function(event) {
    var topDir = -1;
    var leftDir = -1;
    var conga = function() {
      if (sorted === false) {
        window.dancers.sort(function(a, b) {
          return a.position().left - b.position().left;
        });
        sorted = true;
      }
      for (var i = 0; i < window.dancers.length; i++) {
        if (i >= window.dancers.length - 1) {
          var oldLeft = window.dancers[i].position().left;
          var oldTop = window.dancers[i].position().top;
          if (oldTop < 10) {
            topDir = 1;
          } else if (oldLeft < 10) {
            leftDir = 1;
          } else if (oldTop > 600) {
            topDir = -1;
          } else if (oldLeft > 800) {
            leftDir = -1;
          }
          var newPos = {top: (oldTop += Math.random() * 80 * topDir) + 'px', left: (oldLeft += Math.random() * 100 * leftDir) + 'px'};
        } else {
          var newPos = window.dancers[i + 1].position();
        }
        $(window.dancers[i]).animate(newPos, 1224);
      }
      setTimeout(conga.bind(this), 1224);
    };
    conga.call(this);
  });

  $(document).on({
    mouseenter: function () {
      $(this).animate({ width: "200px", height: "auto" }, 1000);
    },

    mouseleave: function () {
      $(this).animate({ width: "100px", height: "auto" }, 1000);
    }
  }, '.dancer');

  


});