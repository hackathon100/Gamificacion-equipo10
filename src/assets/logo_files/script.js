//$(document).ready(function() {

  // wait until DOM is ready
  document.addEventListener("DOMContentLoaded", function(event) {

    function ground() {

      var tl = new TimelineMax({
        repeat: -1
      });

      tl.to("#ground", 50, {
          backgroundPosition: "1301px 0px",
          force3D:true,
          rotation:0.01,
          z:0.01,
          autoRound:false,
          ease: Linear.easeNone
        });

      return tl;
    }

    function clouds() {

      var tl = new TimelineMax({
        repeat: -1
      });

      tl.to("#clouds", 52, {
        backgroundPosition: "-2247px bottom",
        force3D:true,
        rotation:0.01,
        z:0.01,
        //autoRound:false,
        ease: Linear.easeNone
      });
      
      return tl;
    }

    var masterTL = new TimelineMax({
      repeat: -1
    });
    
    // window load event makes sure image is 
  // loaded before running animation
  window.onload = function() {
    
    masterTL
    .add(ground(),0)
    .add(clouds(),0)
    .timeScale(0.7)
    .progress(1).progress(0)
    .play();

  };
    
  });

$( document ).ready(function() {


    $(".operador").click(function(){
        var cantidad =  $(".canti-pro").val();
        if ($(this).hasClass("mas")) {
          cantidad = parseInt(cantidad) +1;   
        }else{
          if (cantidad>0) {
            cantidad = parseInt(cantidad) - 1;
          };
        };

        $(".canti-pro").val(cantidad);
      });


    $("#submitformdata").submit(function() { 
        $.ajax({ 
            type: 'POST',
            url:  $(this).attr('action') + '/wp-content/themes/didactitheme/pdf/examples/exemple00.php',
            data: $(this).serialize(),
            success: function(data) {   
                $(".resp_cotiza").html(data);   
            }
        })        
        return false;   
    });


});




/*scroll*/

var is_OSX = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
var is_iOS = navigator.platform.match(/(iPhone|iPod|iPad)/i) ? true : false;

var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
var is_iPhone = navigator.platform == "iPhone";
var is_iPod = navigator.platform == "iPod";
var is_iPad = navigator.platform == "iPad";

if (!is_OSX) {
  new SmoothScroll();
};

function SmoothScroll(el) {
  console.log("scroll");
  var t = this, h = document.documentElement;
  el = el || window;
  t.rAF = false;
  t.target = 0;
  t.scroll = 0;
  t.animate = function() {
    t.scroll += (t.target - t.scroll) * 0.1;
    if (Math.abs(t.scroll.toFixed(5) - t.target) <= 0.47131) {
      cancelAnimationFrame(t.rAF);
      t.rAF = false;
    }
    if (el == window) scrollTo(0, t.scroll);
    else el.scrollTop = t.scroll;
    if (t.rAF) t.rAF = requestAnimationFrame(t.animate);
  };
  el.onmousewheel = function(e) {
    //e.preventDefault();
    e.stopPropagation();
    var scrollEnd = (el == window) ? h.scrollHeight - h.clientHeight : el.scrollHeight - el.clientHeight;
    t.target += (e.wheelDelta > 0) ? -70 : 70;
    if (t.target < 0) t.target = 0;
    if (t.target > scrollEnd) t.target = scrollEnd;
    if (!t.rAF) t.rAF = requestAnimationFrame(t.animate);
  };
  el.onscroll = function() {
    if (t.rAF) return;
    t.target = (el == window) ? pageYOffset || h.scrollTop : el.scrollTop;
    t.scroll = t.target;
  };
}


//});
$(document).ready(function(){
  url = window.location.href;
  segment = url.split('/');
  $('header li').each(function(){
    var find = $.inArray($(this).children('a').data('id'),segment);
    if (find>0) {
      $(this).addClass('current');
    };
  });
  var findGen=$.inArray('category',segment);
  if (findGen>0) {
    $('header li').first().addClass('current');
    console.log(findGen);
  }else{
    findGen=$.inArray('product',segment);
    if (findGen>0) {
      $('header li').first().addClass('current');
    }
  };

  $(function () {
    $('.toltip_img').tooltip();
  });
});