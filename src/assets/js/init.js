let $ = (window.jQuery = require("jquery"));

$(document).ready(function() {
  initFP();
  swiper();
  initClickReveal();
  initClickInfo();
  stagger("first-section");
});

function initClickInfo() {
  $(".info-button").click(function() {
    $(".side-info").toggleClass("info-clicked");
    $(".side-info-wrap").toggleClass("info-wrap-clicked");
    $(".info-button").toggleClass("info-btn-clicked");
    $(".contact-form").toggleClass("form-clicked");
    $(".info-item").toggleClass("fadeInLeft");
    $(".info-item").toggleClass("fadeOutLeft");
    if ($(".side-info").hasClass("info-clicked")) {
      $(".info-button i.show").hide();
      $(".info-button i.close")
        .delay(600)
        .show();
    } else {
      $(".info-button i.close").hide();
      $(".info-button i.show")
        .delay(600)
        .show();
    }
  });
}

function initClickReveal() {
  let el = $(".reveal-cover");

  $(".book-cover")
    .css("animation-delay", "400ms")
    .addClass("fadeIn");
  el.click(() => {
    el.toggleClass("clicked");
    if (el.hasClass("clicked")) {
      el.find(".open").hide();
      el.find(".close").show();
    } else {
      el.find(".close").hide();
      el.find(".open").show();
    }
    $(".book-title, .book-slogan, .buttons")
      .css("animation-delay", "0ms")
      .toggleClass("fadeOutLeft");
    $(".overlay")
      .css("animation-delay", "0ms")
      .toggleClass("fadeOut");
  });
}

function initFP() {
  $("#main-content").fullpage({
    css3: false,
    controlArrows: false,
    slidesNavigation: true,
    showActiveTooltip: true,
    onLeave: function(index, nextIndex, direction) {
      if (index === 1 && nextIndex === 2) {
        stagger("second-section");
        $(".book-cover").removeClass("book-up");
      } else if (index === 2 && nextIndex === 1) {
        $(".book-cover").addClass("book-up");
      } else if (index === 2 && nextIndex === 3) {
        stagger("third-section");
      } else if (index === 3 && nextIndex === 4) {
        stagger("forth-section");
      } else if (index === 4 && nextIndex === 5) {
        stagger("fifth-section");
      }
    },
  });
  // let reps = setInterval(() => {
  //   $.fn.fullpage.moveSlideRight();
  // }, 4000);
}

let threshold = 50;
let mainEl = $("#main-content");
let xDown, xUp, yDown, yUp;

function swiper() {
  mainEl
    .on("mousedown touchstart", function(e) {
      xDown = e.pageX;
      yDown = e.pageY;
    })
    .on("mouseup touchend", function(e) {
      xUp = e.pageX;
      yUp = e.pageY;

      if (xDown != xUp || yDown != yUp) {
        if (mainEl.offset().top === 0) {
          if (xUp - xDown > threshold && Math.abs(yDown - yUp) < threshold * 2) $.fn.fullpage.moveSlideLeft();
          if (xDown - xUp > threshold && Math.abs(yDown - yUp) < threshold * 2) $.fn.fullpage.moveSlideRight();
        }
        if (yDown - yUp > threshold && Math.abs(xDown - xUp) < threshold * 2) $.fn.fullpage.moveSectionDown();
        if (yUp - yDown > threshold && Math.abs(xDown - xUp) < threshold * 2) $.fn.fullpage.moveSectionUp();
      }
    });
}

function stagger(className) {
  if (className === "first-section") {
    $(".first-section .name")
      .children(".animated")
      .addClass("bounceInDown")
      .each((index, el) => {
        $(el).css("animation-delay", 100 + 50 * index + "ms");
      });
  } else if (className === "second-section") {
    if ($(window).width() < 801) {
      $(".book-bg").addClass("fadeInUp");
      $(".overlay")
        .css("animation-delay", "2700ms")
        .addClass("fadeIn");
      $(".book-title")
        .css("animation-delay", "2700ms")
        .addClass("bounceInLeft");
      $(".book-slogan")
        .css("animation-delay", "3500ms")
        .addClass("fadeInDown");
      $(".buttons .animated")
        .css("animation-delay", "4000ms")
        .addClass("zoomInDown");
      $(".reveal-cover")
        .css("animation-delay", "4500ms")
        .addClass("zoomIn");
    } else {
      $(".book-title")
        .css("animation-delay", "700ms")
        .addClass("bounceInLeft");
      $(".book-slogan")
        .css("animation-delay", "1200ms")
        .addClass("fadeInDown");
      $(".buttons .animated")
        .css("animation-delay", "1500ms")
        .addClass("zoomInDown");
    }
  } else if (className === "third-section") {
    $(".heading")
      .css("animation-delay", "200ms")
      .addClass("fadeInDown");
    $(".sl-car")
      .css("animation-delay", "200ms")
      .addClass("fadeInUp");
  } else if (className === "forth-section") {
    $(".bio-wrap")
      .css("animation-delay", "200ms")
      .addClass("slideInUp");
    $(".bio-picture")
      .css("animation-delay", "200ms")
      .addClass("slideInUp");
  }
}
