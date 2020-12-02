$(document).ready(function () {
  $(".menu").click(function () {
    if ($(this).is(".active:not(.back)")) {
      $(this).addClass("back");
    } else if ($(this).is(".back")) {
      $(this).removeClass("back");
    } else {
      $(this).addClass("active");
    }

    if ($("body").hasClass("lock-scroll")) {
      $("body").removeClass("lock-scroll");
    } else {
      $("body").addClass("lock-scroll");
    }
  });

  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
    $(".menu").addClass("back");
  });

  $(".options-menu").on("click", function () {
    $("aside").toggleClass("opt-menu-show");
  });
 
  $(".pc-close-aside").on("click", function () {
    $("main").toggleClass("main-pc-full-width");
    $("aside").toggleClass("aside-pc-close");
    
  });

  $(".user-manager").on("click", function () {
    $(".manager-contacts").toggleClass("show-contact");
  });
}); /*END JQuery*/
