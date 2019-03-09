$(function(){

    $(window).scroll(function(){ 
    var scrollt = document.documentElement.scrollTop + document.body.scrollTop; 
    if( scrollt >400 ){  
    $("#top").fadeIn(500);   
      }
    else{      
    $("#top").stop().fadeOut(400);   
      }

    });

    $("#top").click(function(){ 

    $("html,body").animate({scrollTop:"0px"},200);

      });

    });

$(function(){

    $(window).scroll(function(){ 
    var scrollt = document.documentElement.scrollTop + document.body.scrollTop; 
    if( scrollt >500 )
      $("#song").fadeIn(800);        
    // else    
    //   $("#song").stop().fadeOut(400);   
      
    });

  });

var H = 0;
$(document).bind('mousemove', function(e) {
    e.preventDefault();

    var drawSize = 30;
    var drawType = "✮";
    var floatTypes = Array('floatOne', 'floatTwo', 'floatThree', 'floatFour', 'floatFive');
    var floatType = floatTypes[Math.floor(Math.random() * floatTypes.length)];
    var xPos = e.originalEvent.pageX;
    var yPos = e.originalEvent.pageY;

    // if (yPos < 600 && (xPos/document.body.clientWidth<0.45|| xPos/document.body.clientWidth>0.65 || yPos<60||yPos>440))
    if (yPos/document.body.clientHeight < 1) 
    {
      $('#star').append('<div class="mouseDraw" style="position:absolute;z-index:10;font-size:' + drawSize + 'px;left:' + xPos + 'px;top:' + yPos + 'px;-webkit-animation:' + floatType + ' .9s 1;-moz-animation:' + floatType + ' .9s 1;-o-animation:' + floatType + ' .9s 1;animation:' + floatType + ' .9s 1;color:hsla(' + H + ',100%,70%,0.6)">' + drawType + '</div>');
    }

    $('.mouseDraw').each(function() {
        var div = $(this);
        setTimeout(function() {
            $(div).remove();
        }, 800);
    });
    
});
setInterval(function() {
    if (H <= 360) {
        H++;
    } else {
        H = 0;
    }
}, 10);


    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    if(flag == true){
        document.write("<script src=js/type.js></script>")
        // document.write("<script src=js/type_words.js></script>")
        //alert("引用电脑端文件");

    }else{
        //alert("引用手机端文件");
        $("#scene").remove()
        // $("#scene2").remove()
        $("#movie").remove();
        $("#song").remove();
    }

