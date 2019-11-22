// depression: deep blue, purple, green, slow consistent tempo
// anxiety: orange, pink, yellow pulsating waves that gets slower and slower
// stress: white, green massaging pulse


// var depression = 0;
// var anxiety = 0;
// var stress = 0; 



// two global variables that count throughtout- color count (rgb...?) & pulse speed count (speed from 1-10)
var colorTest123


var ct1 = 0;
var ct2 = 0;
var ct3 = 0;

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


  // $("#rb2").hide()

// q1 blobs- on hover, expand blob otherwise move them, on hover, animate blob (move them)

  setTimeout(function() {
    $("#pickacolor").css("margin-top", "48%")
  }, 0)

  setTimeout(function() {
    $("#pickacolor").css("margin-top", "55%")
  }, 2500)



// on click add point then move on to next question


$("#blob1").click(function () {
  ct1++

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
  ct2++

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

  ct3++

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
  ct1++

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
  ct2++

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
  ct3++

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
  ct1++
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
  ct2++
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


// on hover play gif question2 
$("#rb1").mouseenter( function() {
  $(this).attr('src', 'css/assets/q2/radiobtns/radiobtn-hug_1.gif')

  $("#a-hug").fadeIn();
})

$("#rb1").mouseleave( function() {
  $(this).attr('src', 'css/assets/q2/radiobtns/radiobtn-circle.png')

  $(".caption2").append("")
  $("#a-hug").fadeOut();

})


$("#rb1").click(function() {
  ct1++

  $(".q2").hide();
  $(".q3").fadeIn();
})

$("#rb2").mouseenter( function() {
  $(this).attr('src', 'css/assets/q2/radiobtns/radiobtn-coffee_1.gif')

  $("#coffee").fadeIn();

})

$("#rb2").mouseleave( function() {
  $(this).attr('src', 'css/assets/q2/radiobtns/radiobtn-circle.png')
  $("#coffee").fadeOut();
  ct++
})


$("#rb2").click(function() {
  $(".q2").hide();
  $(".q3").fadeIn();

  ct2++
})

$("#rb3").mouseenter( function() {
  $(this).attr('src', 'css/assets/q2/radiobtns/radiobtn-talk_2.gif')

  $("#talk").fadeIn();

})

$("#rb3").mouseleave( function() {
  $(this).attr('src', 'css/assets/q2/radiobtns/radiobtn-circle.png')
  $("#talk").fadeOut();

})


$("#rb3").click(function() {
  $(".q2").hide();
  $(".q3").fadeIn();
  ct3++
})


$("#rb4").mouseenter( function() {
  $(this).attr('src', 'css/assets/q2/radiobtns/radiobtn-cry_1.gif')
  $("#cry").fadeIn();
})

$("#rb4").mouseleave( function() {
  $(this).attr('src', 'css/assets/q2/radiobtns/radiobtn-circle.png')
  $("#cry").fadeOut();
})

$("#rb4").click(function() {
  $(".q2").hide();
  $(".q3").fadeIn();
  ct1++
})



// question 3 "im soooooo tired"

// on press "o", append o's. 


// every 12 o's add break
var os = 0;
var oCount = 0;


$(document).keydown(function (e){
  if (e.keyCode == 79) {
    $("#so").append("o")
    os++;
    oCount++

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

// question 4

var lastScrollTop = 0;
var minutes = 0;
var hours = 0;
$(document).scroll(function(event){
  
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
     minutes++;
     $(".counter").empty()
     $(".counter").append(minutes+ " minutes")

     if (minutes > 59) {
       hours++
       $(".counter").empty()
       $(".counter").append(hours+":"+ minutes)
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

$(".how-long").click(function() {
  $(".q4").hide();
  $(".q5").fadeIn();
  console.log("clicked")
})


});


// question 5
// change cursor color on hover

$("#love-text").mouseenter(function() {

  $("#whatfeeling").css("background-color", "#F4C2C2")

  $("#love-btn").fadeIn();

  $("#love-text").mousemove(function (e) {

    $("#love-btn").offset({
        left: e.pageX +5,
        top: e.pageY - 10

    })

})

})

$("#love-text").click(function() {
  $(".q5").hide();
  $(".q6").fadeIn();

})

$("#love-text").mouseleave(function () {
  $("#love-btn").fadeOut();
})



$("#me-text").mouseenter(function() {

  $("#whatfeeling").css("background-color", "#FFFFFF")

  $("#me-btn").fadeIn();

  $("#me-text").mousemove(function (e) {

    $("#me-btn").offset({
        left: e.pageX +5,
        top: e.pageY - 10

    })

})

$("#me-text").click(function() {
  $(".q5").hide();
  $(".q6").fadeIn();

})

})

$("#me-text").mouseleave(function () {
  $("#me-btn").fadeOut();
})





$("#happy-text").mouseenter(function() {

  $("#whatfeeling").css("background-color", "#FFF200")

  $("#happy-btn").fadeIn();

  $("#happy-text").mousemove(function (e) {

    $("#happy-btn").offset({
        left: e.pageX +5,
        top: e.pageY - 10

    })

})

$("#happy-text").click(function() {
  $(".q5").hide();
  $(".q6").fadeIn();

})

})

$("#happy-text").mouseleave(function () {
  $("#happy-btn").fadeOut();
})




$("#calm-text").mouseenter(function() {
  $("#whatfeeling").css("background-color", "#B9DFF4")

  $("#calm-btn").fadeIn();

  $("#calm-text").mousemove(function (e) {

    $("#calm-btn").offset({
        left: e.pageX +5,
        top: e.pageY - 10

    })

})

})

$("#calm-text").click(function() {
  $(".q5").hide();
  $(".q6").fadeIn();

})

$("#calm-text").mouseleave(function () {
  $("#calm-btn").fadeOut();
})


// question 6

// on key down, next gif in array
$(document).keydown(function (e){
  if (e.keyCode == 40) {
    $("#text-gifs").attr('src', 'assets/q6/ilu.gif')

  }

  
});



// $(".submit").click(function(e) {
 
//   e.preventDefault();
 
 
//   console.log("this is working. send test number 250")
//   // set color variable
//   colorTest = 250;

//   var newColor = {
//     color: 250,
//   }


//   console.log(newColor)

// //   finalColor.push(newColor);
// // console.log(finalColor)


//   // var finalColor = {
//   //   color: $("#finalColor").val()
//   // };
//   // console.log(finalColor)

//   $.post("/data/colorData", newColor,
//   function(data) {

//  if (data) {
//           alert("done");
//         }
//   })


// })






});


var newColor = 200;
finalColor.push(newColor)
module.exports(newColor)




// console.log color counts and pulse speed
// these variables feed to arduino.
// console.log()

// var colorTest = 200;


