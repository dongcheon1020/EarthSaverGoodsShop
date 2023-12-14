$(window).on("scroll", function () {
  var scrollPos = $(window).scrollTop();
  var windowHeight = $(window).height();
  var scale = 1 + scrollPos / windowHeight; // 확대 비율 계산

  // 투명도 업데이트 (스크롤이 맨 위에 있을 때 1, 아래로 내려갈수록 감소)
  $(".mainbanner video").css("opacity", 1 - scrollPos / windowHeight);

  // 확대 효과 적용
  $(".mainbanner video").css("transform", "scale(" + scale + ")");
});

$(document).ready(function () {
  $(".viewall-bt-close").hide();
  // mainbnner
  var nowBannerIndex = 0;

  // $(".mainbanner-item").eq(0).siblings().hide();

  // setInterval(function () {
  //   nowBannerIndex = nowBannerIndex + 1;
  //   if (nowBannerIndex >= 8) {
  //     nowBannerIndex = 0;
  //   }
  //   $(".mainbanner-item").eq(nowBannerIndex).fadeIn().siblings().fadeOut();
  // }, 3000);

  /*
  function mainBanner() {
    if (nowBannerIndex >= maxBannerIndex) {
      $(".mainbanner-item").eq(nowBannerIndex).fadeOut(1000);
      $(".mainbanner-item").eq(0).fadeIn(1000);
      nowBannerIndex = 0;
    } else {
      $(".mainbanner-item").eq(nowBannerIndex).fadeOut(1000);
      $(".mainbanner-item")
        .eq(nowBannerIndex + 1)
        .fadeIn(1000);
      nowBannerIndex += 1;
    }
  }

  

  setInterval(mainBanner, 3000); */
  // mainbnner end
  //shpping-ranking-slide-container
  //인기상품
  //.shpping-ranking-bg
  // else if (posX2 < $(window).width() - $("#slide_wrap ul").width()) {
  //   $("#slide_wrap ul")
  //     .stop()
  //     .stop()
  //     .stop()
  //     .animate(
  //       { left: $(window).width() - $("#slide_wrap ul").width() },
  //       300
  //     );
  // }
  // alert($(".shopping-ranking-slider").width());
  // alert($(window).width() - $(".shopping-ranking-slider").width());

  var slideNum1 = $(window).width() - $(".shopping-ranking-slider").width();
  var slideNum2 =
    ($(window).width() - $(".shpping-ranking-slide-container").width()) / 2;
  var aotoslideSpacing = slideNum2 / 2 / 3;
  var autoStopminNum = slideNum2 / 4;

  var slideNumUp = slideNum1 - slideNum2 - aotoslideSpacing;
  var slideNumbtnum = slideNum1 - slideNum2;
  var slideMaxWidth = 5300;

  $(".shopping-ranking-slider").draggable({
    axis: "x",
    drag: function () {
      if (
        $(".shopping-ranking-slider").position().left >
        0 + aotoslideSpacing
      ) {
        $(".shopping-ranking-slider").stop().stop().animate({ left: "0" }, 200);
      }
      if (
        $(".shopping-ranking-slider").position().left <
        slideNumUp - aotoslideSpacing
      ) {
        $(".shopping-ranking-slider")
          .stop()
          .stop()
          .animate({ left: slideNumUp - 20 }, 200);
      }
      if (slideMaxWidth < $(window).width()) {
        $(".shopping-ranking-slider").stop().stop().animate({ left: "0" }, 200);
      }
    },
    stop: function () {
      slider_num = $(".shopping-ranking-slider").position().left;

      // auto stop
      if (
        $(".shopping-ranking-slider").position().left >= slideNum2 * -1 &&
        $(".shopping-ranking-slider").position().left <= autoStopminNum * -1
      ) {
        $(".shopping-ranking-slider").animate({ left: rankSlideWidth * -1 });
      }

      // auto stop end
    },
  });

  var rankSlideWidth = $(".shopping-ranking-slider").width() / 8;
  var $slider = $(".shopping-ranking-slider").position().left;
  var slider_num = 0;
  // 버튼

  //right
  $(".shpping-ranking-bt-right").click(function () {
    slider_num -= rankSlideWidth;
    $(".shpping-ranking-bt-left").css({ transform: "scale(1)" });
    if (slider_num <= slideNumUp) {
      $(".shpping-ranking-bt-right").css({ transform: "scale(0)" });
      slider_num = slideNumUp - 20;
    }
    $(".shopping-ranking-slider").animate({ left: slider_num }), 300;
  });

  //left
  $(".shpping-ranking-bt-left").click(function () {
    slider_num += rankSlideWidth;
    $(".shpping-ranking-bt-right").css({ transform: "scale(1)" });
    if (slider_num >= -10) {
      slider_num = 0;
      $(".shpping-ranking-bt-left").css({ transform: "scale(0)" });
    }
    $(".shopping-ranking-slider").animate({ left: slider_num }), 300;
  });

  // 버튼 end

  //인기상품 end

  // global item
  $(".shopping-quick-link-item").click(function () {
    $(this)
      .css({ "font-weight": "bold", "text-decoration": "underline" })
      .siblings()
      .css({ "font-weight": "normal", "text-decoration": "none" });
  });

  // 전체상품보기
  var quickLink =
    $(".shopping-viewall-link").width() -
    $(".viewall-quick-slide").width() -
    20;

  $(".viewall-quick-slide").draggable({
    axis: "x",
    drag: function () {
      if ($(".viewall-quick-slide").position().left > 0) {
        $(".viewall-quick-slide").stop().stop().animate({ left: 0 });
      }
      if ($(".viewall-quick-slide").position().left < quickLink) {
        $(".viewall-quick-slide")
          .stop()
          .stop()
          .animate({ left: quickLink + 20 });
      }
    },
  });

  $(".viewall-quick-ranking-item").click(function () {
    $(this).css({ color: "#000" }).siblings().css({ color: "#6e6e73" });
  });
  $(".viewall-quick-slide-item").click(function () {
    $(this)
      .css({ "box-shadow": "2px 4px 12px rgba(0, 0, 0, 0.16)", opacity: "1" })
      .siblings()
      .css({ "box-shadow": "none", opacity: "0.6" });
  });
  var viewMore = $(".reusable-contents").height();
  var viewClose = 1050;
  $(".viewall-bt-more").click(function () {
    $(".shopping-viewall").animate({ height: viewMore + "px" }, 800);
    $(this).fadeOut().siblings(".viewall-bt").fadeIn(800);
  });
  $(".viewall-bt-close").click(function () {
    $(".shopping-viewall").animate({ height: viewClose + "px" }, 800);
    $(this).fadeOut().siblings(".viewall-bt").fadeIn(800);
  });
  // 전체상품보기 end
  let logo = $(".logo-img, .logo-text, video");

  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          $(entry.target).css({
            opacity: "1",
            transform: "translateY(0)",
          });
          if (entry.target.tagName.toLowerCase() === "video") {
            entry.target.play();
          }
        } else {
          $(entry.target).css({
            opacity: "0",
            transform: "translateY(100px)",
          });
          if (entry.target.tagName.toLowerCase() === "video") {
            entry.target.pause();
          }
        }
      });
    },
    {
      rootMargin: "0px",
      threshold: 0,
    }
  );

  logo.each((index, logo) => {
    observer.observe(logo);
  });

  $(".discount-slide-link-item").click(function () {
    $(this)
      .css({ "background-color": "#fff", width: "20px" })
      .siblings()
      .css({ "background-color": "#1d1d1f", width: "8px" });
  });

  let videoImg = [
    "../images/video1.mp4",
    "../images/video2.mp4",
    "../images/video3.mp4",
  ];
  let video = 0;
  $(".videodot").click(function () {
    $(this).parents().siblings("video").attr("src", videoImg[$(this).index()]);
  });

  let discountImg = [
    "../images/dci1.jpg",
    "../images/dci2.jpg",
    "../images/dci3.jpg",
  ];
  $(".discount-img-dot1").click(function () {
    $(this).parents().siblings("img").attr("src", discountImg[$(this).index()]);
  });
  const discountImg1 = [
    "../images/ss1.jpg",
    "../images/ss2.jpg",
    "../images/ss3.jpg",
  ];
  $(".discount-img-dot2").click(function () {
    $(this)
      .parents()
      .siblings("img")
      .attr("src", discountImg1[$(this).index()]);
  });
});
discountImg1.forEach((src) => {
  const img = new Image();
  img.src = src;
});
