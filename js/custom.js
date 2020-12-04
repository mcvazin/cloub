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

  /*select-center*/
  //  Implementation
var getTextWidth = function(text,textClass) {
  var span = document.createElement('span') 
  span.style.opacity = 0
  span.style.display = 'inline-block'
  span.innerHTML = text
  if(textClass) span.classList.add(textClass)
  var body = document.querySelector('body').appendChild(span)
  var width = span.offsetWidth
  span.remove()
  return width
}

var getSelectOptionIndentToCenter = function (selectElement,textClass) {
  var selectChoice = selectElement.querySelector('option:checked')
  var emptySpace = selectElement.offsetWidth - getTextWidth(selectChoice.innerHTML,textClass)
  return emptySpace / 2
}

var mutateSelectCenterOption = function (selectElement,textClass,offset) {
  var centerOffset = getSelectOptionIndentToCenter(selectElement,textClass)
  selectElement.style.textIndent = (centerOffset - offset) + 'px'
}

//  Wrapper

var $$ = $$ ? $$ : function(selector,scope) {
  var scope = scope ? scope : document
  return Array.prototype.slice.call(scope.querySelectorAll(selector))
}

var mutateMultiSelectCenterOption = function(selector,textClass,offset) {
  $$(selector).map(function(selectElement){
    selectElement.addEventListener('change',function(event){
      mutateSelectCenterOption(event.target,offset)
    })
    mutateSelectCenterOption(selectElement,textClass,offset)
  }) 
}

// Example 

mutateMultiSelectCenterOption('select','minimal',10)


  /*select-center*/
}); /*END JQuery*/
