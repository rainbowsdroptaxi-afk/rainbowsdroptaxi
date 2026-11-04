setTimeout(() => {
  /*============================================================
Template Name   : Edubo
Description     : LMS And Education Course HTML5 Template
Author          : LunarTemp
Version         : 1.0
==============================================================*/

  (function ($) {
    "use strict";

    // multi level dropdown menu
    $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
      if (!$(this).next().hasClass("show")) {
        $(this).parents(".dropdown-menu").first().find(".show").removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass("show");

      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function (e) {
          $(".dropdown-submenu .show").removeClass("show");
        });
      return false;
    });


    // data-background
    $(document).on("ready", function () {
      $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
      });
    });

    // sidebar popup
    $(".sidebar-btn").on("click", function () {
      $(".sidebar-popup").addClass("open");
      $(".sidebar-wrapper").addClass("open");
    });
    $(".close-sidebar-popup, .sidebar-popup").on("click", function () {
      $(".sidebar-popup").removeClass("open");
      $(".sidebar-wrapper").removeClass("open");
    });

    // wow init
    new WOW().init();


    // testimonial-slider
    $(".testimonial-slider").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

    // preloader
    $(window).on("load", function () {
      $(".preloader").fadeOut("slow");
    });

    // fun fact counter
    $(".counter").countTo();
    $(".counter-box").appear(
      function () {
        $(".counter").countTo();
      },
      {
        accY: -100,
      }
    );


    // progress bar
    $(document).ready(function () {
      var progressBar = $(".progress");
      if (progressBar.length) {
        progressBar.each(function () {
          var Self = $(this);
          Self.appear(function () {
            var progressValue = Self.data("value");
            Self.find(".progress-bar").animate(
              {
                width: progressValue + "%",
              },
              1000
            );
          });
        });
      }
    });

    // case filter
    $(window).on("load", function () {
      if ($(".filter-box").children().length > 0) {
        $(".filter-box").isotope({
          itemSelector: ".filter-item",
          masonry: {
            columnWidth: 1,
          },
        });

        $(".filter-btn").on("click", "li", function () {
          var filterValue = $(this).attr("data-filter");
          $(".filter-box").isotope({ filter: filterValue });
        });

        $(".filter-btn li").each(function () {
          $(this).on("click", function () {
            $(this).siblings("li.active").removeClass("active");
            $(this).addClass("active");
          });
        });
      }
    });

    // scroll to top
    $(window).scroll(function () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $("#scroll-top").addClass("active");
      } else {
        $("#scroll-top").removeClass("active");
      }
    });

    $("#scroll-top").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 1500);
      return false;
    });

    // navbar fixed top
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $(".navbar").addClass("fixed-top");
      } else {
        $(".navbar").removeClass("fixed-top");
      }
    });

    // countdown
    $("[data-countdown]").each(function () {
      let finalDate = $(this).data("countdown");
      $(this).countdown(finalDate, function (event) {
        $(this).html(
          event.strftime(
            '<div class="time-wrap">' +
            '<span class="time"><span>%-D</span><span class="unit">Day%!D</span></span>' +
            ' <span class="divider">:</span> ' +
            '<span class="time"><span>%H</span><span class="unit">Hour%!H</span></span>' +
            ' <span class="divider">:</span> ' +
            '<span class="time"><span>%M</span><span class="unit">Min%!M</span></span>' +
            ' <span class="divider">:</span> ' +
            '<span class="time"><span>%S</span><span class="unit">Sec%!S</span></span>' +
            "</div>"
          )
        );
      });
    });

    // copywrite date
    let date = new Date().getFullYear();
    $("#date").html(date);



    // profile image btn
    $(".profile-img-btn").on("click", function () {
      $(".profile-img-file").click();
    });

    // form images upload
    $(".form-img-upload").on("click", function () {
      $(".form-img-file").click();
    });

    //cart quantity
    $(".plus-btn").on("click", function () {
      var i = $(this).closest(".cart-qty").children(".quantity").get(0).value++,
        c = $(this).closest(".cart-qty").children(".minus-btn");
      i > 0 && c.removeAttr("disabled");
    }),
      $(".minus-btn").on("click", function () {
        2 == $(this).closest(".cart-qty").children(".quantity").get(0).value-- && $(this).attr("disabled", "disabled");
      });

    // invoice print
    $(".invoice-print-btn").on("click", function () {
      $(".invoice-print-btn").hide();
      $(".invoice-container").removeClass("not-print");
      window.print();
      $(".invoice-container").addClass("not-print");
      $(".invoice-print-btn").show();
    });

    // bootstrap tooltip enable
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
  })(jQuery);

}, 1000);