


$(document).ready(function(){
    $('.primary-banner .scroll-down').click(function(){
        $('body,html').animate({
            scrollTop: $('.section-1').offset().top
        },700);
    });

    $('.header .my-work-cta .cta').click(function(){
        $('body,html').animate({
            scrollTop: $('.section-2').offset().top
        },700);
    });

});


(function( $ ){
    var $window = $(window);
    var windowHeight = $window.height();

    $window.resize(function () {
        windowHeight = $window.height();
    });

    $.fn.parallax = function(xpos, speedFactor, outerHeight) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;
        
        //get the starting position of each element to have parallax applied to it      
        $this.each(function(){
            firstTop = $this.offset().top;
        });

        if (outerHeight) {
            getHeight = function(jqo) {
                return jqo.outerHeight(true);
            };
        } else {
            getHeight = function(jqo) {
                return jqo.height();
            };
        }
            
        // setup defaults if arguments aren't specified
        if (arguments.length < 1 || xpos === null) xpos = "50%";
        if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null) outerHeight = true;
        
        // function to be called whenever the window is scrolled or resized
        function update(){
            var pos = $window.scrollTop();              

            $this.each(function(){
                var $element = $(this);
                var top = $element.offset().top;
                var height = getHeight($element);

                // Check if totally above or totally below viewport
                if (top + height < pos || top > pos + windowHeight) {
                    return;
                }

                $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
            });
        }       

        $window.bind('scroll', update).resize(update);
        update();
    };
})(jQuery);


$(document).ready(function(){

 
     $('.primary-banner').parallax("50%", 0.21);
     $('.section-1').parallax("50%", 0.08);
     $('.section-2').parallax("50%", 0.08);
     $('.section-3').parallax("50%", 0.08);
     $('.section-4').parallax("50%", 0.08);
     $('.section-5').parallax("50%", 0.08);
     $('.section-6').parallax("50%", 0.08);
     $('.section-7').parallax("50%", 0.08);

          
     
});







$(document).ready(function(){
var sorthandler2=function(){
var $this=$(this);
var sort=$this.attr('data-item-class');
var toShow = $('.' + sort);
$('.popup-content').hide();
toShow.fadeIn( "slow" );
}
$('#filter-select li').on('click', sorthandler2);
$("#filter-select li").click(function(){
$(this).siblings().removeClass('active');
$(this).addClass('active');
});



$('.popup-container .design-container .open-popup').click(function(){
    $(this).parent().addClass('active');
    $('body').addClass('popup-open');
});

$('.popup-container .close-image').click(function(){
    $('.popup-container .design-container').removeClass('active');
    $('body').removeClass('popup-open');
});



  var $sticky = $('.portfolio-bar');
  var $stickyrStopper = $('.footer');
  if (!!$sticky.offset()) { // make sure ".sticky" element exists

    var generalSidebarHeight = $sticky.innerHeight() + 350;
    var stickyTop = $sticky.offset().top;
    var stickOffset = 0;
    var stickyStopperPosition = $stickyrStopper.offset().top;
    var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
    var diff = stopPoint + stickOffset;

    $(window).scroll(function(){ // scroll event
      var windowTop = $(window).scrollTop(); // returns number

      if (stopPoint < windowTop) {
          $sticky.css({ position: 'absolute',opacity:'0'});
      } else if (stickyTop < windowTop+stickOffset) {
          $sticky.css({ position: 'fixed', top: stickOffset,opacity:'1' });
      } else {
          $sticky.css({position: 'absolute', top: 'initial',opacity:'1'});
      }
    });

  }


});



