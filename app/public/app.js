// the color and pulse/speed variabes that will be manipulated as the user goes through the questions

// the starting value is the "default" in which will be added to or subtracted from. For now I'm making them scales of 10, so 5 is the center. 
var color = 5;
var pulse = 5;


$(document).ready(function () {
  $(".q2").hide();
  $(".q3").hide();
  $(".q4").hide();
  $(".q5").hide();
  $("#a-hug").hide();
  $("#coffee").hide();
  $("#talk").hide();
  $("#cry").hide();
  $("#love-btn").hide();
  $("#me-btn").hide();
  $("#happy-btn").hide();
  $("#calm-btn").hide();
  $(".q6").hide();
  $(".q7").hide();
  $(".q6-finish").hide();



  // all the adding/subtracting are minimized for testing. There'll be more logic added to it later!

  // QUESTION 1

  setTimeout(function () {
    $("#pickacolor").css("margin-top", "48%")
  }, 0)

  setTimeout(function () {
    $("#pickacolor").css("margin-top", "55%")
  }, 2500)



  $("#blob1").click(function () {
    color++
    pulse--

    $("#blob1").addClass("picked-color")


    $("#blob2").fadeOut();
    $("#blob3").fadeOut();
    $("#blob4").fadeOut();
    $("#blob5").fadeOut();
    $("#blob6").fadeOut();
    $("#blob7").fadeOut();
    $("#blob8").fadeOut();
    $("#howufeeling").fadeOut();

    $(".q2").fadeIn();
  })

  $("#blob2").click(function () {
    color++

    pulse++
    $("#blob2").addClass("picked-color")


    $("#blob1").fadeOut();
    $("#blob3").fadeOut();
    $("#blob4").fadeOut();
    $("#blob5").fadeOut();
    $("#blob6").fadeOut();
    $("#blob7").fadeOut();
    $("#blob8").fadeOut();
    $("#howufeeling").fadeOut();

    $(".q2").fadeIn();
  })



  $("#blob3").click(function () {

    color++
    pulse--

    $("#blob3").addClass("picked-color")


    $("#blob1").fadeOut();
    $("#blob2").fadeOut();
    $("#blob4").fadeOut();
    $("#blob5").fadeOut();
    $("#blob6").fadeOut();
    $("#blob7").fadeOut();
    $("#blob8").fadeOut();
    $("#howufeeling").fadeOut();

    $(".q2").fadeIn();
  })

  $("#blob4").click(function () {
    color++
    pulse--

    $("#blob4").addClass("picked-color")


    $("#blob1").fadeOut();
    $("#blob2").fadeOut();
    $("#blob3").fadeOut();
    $("#blob5").fadeOut();
    $("#blob6").fadeOut();
    $("#blob7").fadeOut();
    $("#blob8").fadeOut();
    $("#howufeeling").fadeOut();

    $(".q2").fadeIn();
  })

  $("#blob5").click(function () {
    color++
    pulse--

    $("#blob5").addClass("picked-color")


    $("#blob1").fadeOut();
    $("#blob2").fadeOut();
    $("#blob3").fadeOut();
    $("#blob4").fadeOut();
    $("#blob6").fadeOut();
    $("#blob7").fadeOut();
    $("#blob8").fadeOut();
    $("#howufeeling").fadeOut();

    $(".q2").fadeIn();

  })

  $("#blob6").click(function () {
    color++
    pulse--

    $("#blob6").addClass("picked-color")


    $("#blob1").fadeOut();
    $("#blob2").fadeOut();
    $("#blob3").fadeOut();
    $("#blob4").fadeOut();
    $("#blob5").fadeOut();
    $("#blob7").fadeOut();
    $("#blob8").fadeOut();
    $("#howufeeling").fadeOut();

    $(".q2").fadeIn();
  })

  $("#blob7").click(function () {
    color++
    pulse--
    $("#blob7").addClass("picked-color")


    $("#blob1").fadeOut();
    $("#blob2").fadeOut();
    $("#blob3").fadeOut();
    $("#blob4").fadeOut();
    $("#blob5").fadeOut();
    $("#blob6").fadeOut();
    $("#blob8").fadeOut();
    $("#howufeeling").fadeOut();

    $(".q2").fadeIn();
  })

  $("#blob8").click(function () {
    color--
    pulse--
    $("#blob8").addClass("picked-color")


    $("#blob1").fadeOut();
    $("#blob2").fadeOut();
    $("#blob3").fadeOut();
    $("#blob4").fadeOut();
    $("#blob5").fadeOut();
    $("#blob6").fadeOut();
    $("#blob7").fadeOut();
    $("#howufeeling").fadeOut();

    $(".q2").fadeIn();

  })


  // QUESTION 2

  $("#rb1").mouseenter(function () {
    $(this).attr('src', 'css/assets/q2/radiobtns/radiobtn-hug_1.gif')

    $("#a-hug").fadeIn();
  })

  $("#rb1").mouseleave(function () {
    $(this).attr('src', 'css/assets/q2/radiobtns/radiobtn-circle.png')

    $(".caption2").append("")
    $("#a-hug").fadeOut();

  })


  $("#rb1").click(function () {
    color--
    pulse--

    $(".q2").hide();
    $(".q3").fadeIn();
  })

  $("#rb2").mouseenter(function () {
    $(this).attr('src', 'css/assets/q2/radiobtns/radiobtn-coffee_1.gif')

    $("#coffee").fadeIn();

  })

  $("#rb2").mouseleave(function () {
    $(this).attr('src', 'css/assets/q2/radiobtns/radiobtn-circle.png')
    $("#coffee").fadeOut();

  })


  $("#rb2").click(function () {
    $(".q2").hide();
    $(".q3").fadeIn();
    color++
    pulse++
  })

  $("#rb3").mouseenter(function () {
    $(this).attr('src', 'css/assets/q2/radiobtns/radiobtn-talk_2.gif')

    $("#talk").fadeIn();

  })

  $("#rb3").mouseleave(function () {
    $(this).attr('src', 'css/assets/q2/radiobtns/radiobtn-circle.png')
    $("#talk").fadeOut();

  })


  $("#rb3").click(function () {
    $(".q2").hide();
    $(".q3").fadeIn();
    color--
    pulse++
  })


  $("#rb4").mouseenter(function () {
    $(this).attr('src', 'css/assets/q2/radiobtns/radiobtn-cry_1.gif')
    $("#cry").fadeIn();
  })

  $("#rb4").mouseleave(function () {
    $(this).attr('src', 'css/assets/q2/radiobtns/radiobtn-circle.png')
    $("#cry").fadeOut();
  })

  $("#rb4").click(function () {
    $(".q2").hide();
    $(".q3").fadeIn();
    color--
    pulse++
  })


  // QUESTION 3
  // * this one doesn't do anything to color and pulse yet

  var os = 0;



  $(document).keydown(function (e) {
    if (e.keyCode == 79) {
      $("#so").append("o")
      os++;


      if (os === 12) {
        $("#so").append("<br>")
        resetOs();
      }
      // console.log("o was pressed!")
    } else if (e.keyCode == 13) {
      // console.log("enter next next")
      $(".q3").hide();
      $(".q4").fadeIn();
    } else {
      // console.log("no no no")
    }
  })

  function resetOs() {
    os = 0
  }

  // QUESTION 4
  // * this one doesn't do anything to color and pulse yet either

  var lastScrollTop = 0;
  var minutes = 0;
  var hours = 0;
  $(document).scroll(function (event) {

    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      minutes++;
      $(".counter").empty()
      $(".counter").append(minutes + " minutes")

      if (minutes > 59) {
        hours++
        $(".counter").empty()
        $(".counter").append(hours + ":" + minutes)
      }

    } else {
      minutes--;
      $(".counter").empty()
      $(".counter").append(minutes + " minutes")

      if (minutes < 0) {
        $(".counter").empty()
        $(".counter").append("0 minutes")
      }
    }
    lastScrollTop = st;
    //  console.log(counter)

    // click time when done. on hover, do something lol 

    $(".how-long").click(function () {
      $(".q4").hide();
      $(".q5").fadeIn();
      console.log("clicked")
    })


  });


  // QUESTION 5


  $("#love-text").mouseenter(function () {

    $("#whatfeeling").css("background-color", "#F4C2C2")

    $("#love-btn").fadeIn();

    $("#love-text").mousemove(function (e) {

      $("#love-btn").offset({
        left: e.pageX + 5,
        top: e.pageY - 10

      })

    })

  })

  $("#love-text").click(function () {
    $(".q5").hide();
    $(".q6").fadeIn();
    color++
    pulse++
  })

  $("#love-text").mouseleave(function () {
    $("#love-btn").fadeOut();
  })



  $("#me-text").mouseenter(function () {

    $("#whatfeeling").css("background-color", "#FFFFFF")

    $("#me-btn").fadeIn();

    $("#me-text").mousemove(function (e) {

      $("#me-btn").offset({
        left: e.pageX + 5,
        top: e.pageY - 10

      })

    })

    $("#me-text").click(function () {
      $(".q5").hide();
      $(".q6").fadeIn();
      color--
      pulse++
    })

  })

  $("#me-text").mouseleave(function () {
    $("#me-btn").fadeOut();
  })





  $("#happy-text").mouseenter(function () {

    $("#whatfeeling").css("background-color", "#FFF200")

    $("#happy-btn").fadeIn();

    $("#happy-text").mousemove(function (e) {

      $("#happy-btn").offset({
        left: e.pageX + 5,
        top: e.pageY - 10

      })

    })

    $("#happy-text").click(function () {
      $(".q5").hide();
      $(".q6").fadeIn();
      color++
      pulse--
    })

  })

  $("#happy-text").mouseleave(function () {
    $("#happy-btn").fadeOut();
  })




  $("#calm-text").mouseenter(function () {
    $("#whatfeeling").css("background-color", "#B9DFF4")

    $("#calm-btn").fadeIn();

    $("#calm-text").mousemove(function (e) {

      $("#calm-btn").offset({
        left: e.pageX + 5,
        top: e.pageY - 10

      })

    })

  })

  $("#calm-text").click(function () {
    $(".q5").hide();
    setTimeout(function() {
      $(".q6").fadeIn();
    }, 2500)
    color--
    pulse++
  })

  $("#calm-text").mouseleave(function () {
    $("#calm-btn").fadeOut();
  })


  // QUESTION 6

  $("#text-gifs").click(function() {
    $(this).attr('src', 'css/assets/q6/ilu_3.gif')

    $("#text-gifs").click(function() {
      $(this).attr('src', 'css/assets/q6/notyourfault.gif')

      $("#text-gifs").click(function() {
        $(this).attr('src', 'css/assets/q6/igotu.gif')

        setTimeout( function() {
          $(".texts").hide();
          $(".q6-finish").show();
        }, 3000)

      })

    })

  })

  $("#beokay").mouseenter(function () {
    $("#beokay").css("transform", "scale(1.1)")
  });


  $("#beokay").mouseleave(function () {
    $("#beokay").css("transform", "scale(1)")
  });

  $("#beokay").click(function() {
    color++
    pulse--

    $(".q6").hide();
    $(".q7").fadeIn();
  })

  $("#ilu").mouseenter(function () {
    $("#ilu").css("transform", "scale(1.1)")
  });

  $("#ilu").mouseleave(function () {
    $("#ilu").css("transform", "scale(1)")
  });

  $("#ilu").click(function() {
    color--
    pulse--

    $(".q6").hide();
    $(".q7").fadeIn();
  })

  $("#notyourfault").mouseenter(function () {
    $("#notyourfault").css("transform", "scale(1.1)")
  });

  $("#notyourfault").mouseleave(function () {
    $("#notyourfault").css("transform", "scale(1)")
  });


  $("#notyourfault").click(function() {
    color++
    pulse++

    $(".q6").hide();
    $(".q7").fadeIn();
  })

  $("#igotu").mouseenter(function () {
    $("#igotu").css("transform", "scale(1.1)")
  });

  $("#igotu").mouseleave(function () {
    $("#igotu").css("transform", "scale(1)")
  });


  $("#igotu").click(function() {
    color--
    pulse--

    $(".q6").hide();
    $(".q7").fadeIn();
  })





});


// so when you reach the end of the questions, you should get a number for color and pulse. 
// These are the variables I'm trying to send to the server! 😯

console.log("color: ", color)
console.log("pulse: ", pulse)





