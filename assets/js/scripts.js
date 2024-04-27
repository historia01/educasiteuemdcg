var isOnAboutUs = false;

function testfunction(){
    $('.startwindow').css("display", "none");
    $('.contentwindow').css("display", "unset");
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


  $(document).ready(function(){
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
        
    $(window).on('scroll', function() {
      if ($(window).scrollTop() + $(window).height() >= $(document).height() - 5 && 
          isOnAboutUs) { // Check if the user is on the About Us section

        // Your action here: reached the bottom (with tolerance) and isOnAboutUs is true
        console.log("Bottom reached and the user is on the About Us section!");

        // Example action (you might not need this if your action
        // is independent of the About Us section being visible):
        // isOnAboutUs = false; // Reset the flag 
      }
    });

  });
  