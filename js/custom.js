
$(document).ready(function() {

 	$('.menu').click(function() {
		if($(this).is('.active:not(.back)')) {
			 $(this).addClass('back');
		} else if ($(this).is('.back')) {
			$(this).removeClass('back');
		} else {
			$(this).addClass('active');
		}
    });
    
    $(".navbar-nav>li>a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
        $(".menu").addClass("back");
      });

      $(".options-menu").on("click", function () {
        $('aside').toggleClass('opt-menu-show');
      });

    }); /*END JQuery*/