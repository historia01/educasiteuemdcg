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
      $("#myVideo").fadeOut();
    });
    $(".cyclebutton2").click(function(){
      aboutus();
      $("#myVideo").fadeIn();
    });
    $(".cyclebutton3").click(function(){
      restorefunction();
      $("#myVideo").fadeIn();
    });
    $(".cyclebutton4").click(function(){
      contact();
      $("#myVideo").fadeIn();
    });
  });
  