var selector = 0;
var cselector = 0;
var temp1 = true;

function testfunction(){
    //$('.startwindow').css("display", "none");
    $('.startwindow').fadeOut(500);
    $('.contentwindow').delay(600).fadeIn(); 
    $('.aboutwindow').css("display", "none");
    $('.contactwindow').css("display", "none");
    $('#buttoncontent').addClass("active");
    $('#buttonabout').removeClass("active");
    $('#buttonhome').removeClass("active");
    $('#buttoncontact').removeClass("active");
    console.log("success")
  };

function restorefunction(){
  $('.startwindow').css("display", "unset");
  $('.contentwindow').css("display", "none");
  $('.aboutwindow').css("display", "none");
  $('.contactwindow').css("display", "none");
  $('#buttonhome').addClass("active");
  $('#buttonabout').removeClass("active");
  $('#buttoncontent').removeClass("active");
  $('#buttoncontact').removeClass("active");
  console.log("success")
};

function aboutus(){
  $('.startwindow').css("display", "none");
  $('.contentwindow').css("display", "none");
  $('.aboutwindow').css("display", "unset");
  $('.contactwindow').css("display", "none");
  $('#buttonabout').addClass("active");
  $('#buttonhome').removeClass("active");
  $('#buttoncontent').removeClass("active");
  $('#buttoncontact').removeClass("active");
  console.log("success")
};
  
function contact(){
  $('.startwindow').css("display", "none");
  $('.contentwindow').css("display", "none");
  $('.aboutwindow').css("display", "none");
  $('.contactwindow').css("display", "unset");
  $('#buttonabout').removeClass("active");
  $('#buttonhome').removeClass("active");
  $('#buttoncontent').removeClass("active");
  $('#buttoncontact').addClass("active");
  console.log("success")
};

function fadeOutAll(){
  $("#member1").fadeOut(500);
  $("#member2").fadeOut(500);
  $("#member3").fadeOut(500);
  $("#member4").fadeOut(500);
}

function fadeOutAllCards(){
  $("#card1").fadeOut(500); 
  $("#card5").fadeOut(500);
  $("#card2").fadeOut(500);
  $("#card3").fadeOut(500);
  $("#card4").fadeOut(500);
}

function cardFadeSelector(card, pCard){
  $(card).fadeOut(500);
  $(pCard).fadeOut(500);
}
function cardSwitch(id){
  switch(id){
    case 0:
      fadeOutAllCards();
      $("#card1").delay(499).fadeIn();
      break;
    case 1:
      fadeOutAllCards();
      $("#card2").delay(499).fadeIn();
      break;
    case 2:
      fadeOutAllCards();
      $("#card3").delay(499).fadeIn();
      break;
    case 3:
      fadeOutAllCards();
      $("#card4").delay(499).fadeIn();
      break;
      case 3:
        fadeOutAllCards();
        $("#card5").delay(499).fadeIn();
        break;
    default:
      console.log("Error 1")
  } 
}


function memberswitch(id){
  switch(id){
    case 0:
      fadeOutAll();
      $("#member4").delay(500).fadeIn();
      break;
    case 1:
      fadeOutAll();
      $("#member2").delay(500).fadeIn();
      break;
    case 2:
      fadeOutAll();
      $("#member3").delay(500).fadeIn();
      break;
    case 3:
      fadeOutAll();
      $("#member1").delay(500).fadeIn();
      break;
    default:
      console.log("Error 1")
  }  
};

  $(document).ready(function(){
    //ready actions
    fadeOutAll();
    fadeOutAllCards();
    $(".membersContainer").fadeOut();
    $("#card1").fadeIn();
    
    //click functions
    $(".cyclebutton1").click(function(){
      testfunction();
      isOnAboutUs = false;
      $("#myVideo").fadeOut();
    });
    $(".cyclebutton2").click(function(){
      aboutus();
      isOnAboutUs = true;
      $("#myVideo").fadeIn();
    });
    $(".cyclebutton3").click(function(){
      restorefunction();
      isOnAboutUs = false;
      $("#myVideo").fadeIn();
    });
    $(".cyclebutton4").click(function(){
      contact();
      isOnAboutUs = false;
      $("#myVideo").fadeIn();
    });
        
    //other actions

    $(document).ready(function() { 
      $('#arrow1').click(function() {
        $(".aboutUsBody").fadeOut(500);
        $(".membersContainer").delay(500).fadeIn();
        if(temp1){
          memberswitch(selector);
        }
      });
      $('#arrow2').click(function() {
        $(".aboutUsBody").delay(500).fadeIn();
        fadeOutAll()
        $(".membersContainer").fadeOut(500);
      });
      $('#arrowL').click(function(){
        if(selector <= 0){
          selector = 3
        } else {
          selector = selector - 1
        }
        console.log(selector);
        memberswitch(selector);
      });
      $('#arrowR').click(function(){
        if(selector >= 3){
          selector = 0
        } else {
          selector = selector + 1
        }
        console.log(selector);
        memberswitch(selector);
      });

      $('#arrowCL').click(function(){
        if(cselector <= 0){
          cselector = 4
        } else {
          cselector = cselector - 1
        }
        console.log(cselector);
        cardSwitch(cselector);
      });
      $('#arrowCR').click(function(){
        if(cselector >= 4){
          cselector = 0
        } else {
          cselector = cselector + 1
        }
        console.log(cselector);
        cardSwitch(cselector);
      });

    });
    
    //
    //      

  });
  