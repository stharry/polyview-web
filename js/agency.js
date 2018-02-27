(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function (e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function (e) {
    $(".navbar").removeClass("d-none");
  })

  // Stopping the youtube video when closing the video modal
  $('#video-modal').on('hidden.bs.modal', function () {
    $('.youtube_player_iframe').each(function () {
      this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
    });
  })

  $('#video-btn').click(function () {
    var currentSrc = $('.youtube_player_iframe').attr("src");
    $('.youtube_player_iframe').attr("src", currentSrc + "&autoplay=1");
  })

  $(document).ready(function () {

    // Making all the h4 inside the feature column to have the same size
    var maxHeight = 0;
    $(".feature > h4.section-subheading", this).each(function () {
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
      }
    });
    $(".feature > h4.section-subheading", this).height(maxHeight);

    // Making all the paragraphs inside the feature column to have the same size
    maxHeight = 0;
    $(".feature > p.section-paragraph", this).each(function () {
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
      }
    });
    $(".feature > p.section-paragraph", this).height(maxHeight);

  });

})(jQuery); // End of use strict
