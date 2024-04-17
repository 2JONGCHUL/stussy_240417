console.clear();

// 헤더 영역
function headerScroll() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
      $(".menu").removeClass("hover");
    }
  });
}
headerScroll();

function headerHover() {
  $("#header").hover(
    function () {
      $(".menu").addClass("hover");
      console.log("실행");
    },
    function () {
      $(".menu").removeClass("hover");
    }
  );
}
headerHover();

function navhover() {
  $(".st-menu__nav > ul > li").hover(
    function () {
      $(".st-menu-box > .st-menu__nav > ul > li > a").addClass("hover");
    },
    function () {
      $(".st-menu-box > .st-menu__nav > ul > li > a").removeClass("hover");
    }
  );
}
navhover();

// 사이드메뉴 시작
function Sidebar__click() {
  $(".ss-sidemenu-icon").click(function () {
    SideBar__show();
  });
  $(`.st-sidemenu, .st-sidemenu-close`).click(function () {
    SideBar__hide();
  });

  $(".st-sidemenu-box").click(function (e) {
    e.stopPropagation(); // 이벤트 버블링 현상 방지
    // return false;
  });
}
Sidebar__click();

// 사이드바 노출
function SideBar__show() {
  $(".st-sidemenu-box").addClass("active");
  $(".st-sidemenu").addClass("active");
  $("html").addClass("st-sidemenu-box-actived");
  $(".menu").removeClass("hover");
}

// 사이드바 숨김
function SideBar__hide() {
  $(".st-sidemenu-box").removeClass("active");
  $(".st-sidemenu").removeClass("active");
  $("html").removeClass("st-sidemenu-box-actived");
}

function sideMenu__init() {
  $(".st-sidemenu-navbox > ul ul").stop().slideUp();

  $(".st-sidemenu-navbox > ul > li").click(function () {
    let $this = $(this);
    let has = $this.hasClass("active");

    // $this.siblings(".active").find(" > ul").slideUp(300); // ul 클릭 시 다른 ul은 접힌다
    // $this.siblings(".active").find(".active").removeClass("active");
    // $this.siblings(".active").removeClass("active");

    if (has) {
      $this.find(" > ul").stop().slideUp(300);
      $this.find("active").removeClass("active");
      $this.removeClass("active");
    } else {
      $this.find(" > ul").stop().slideDown(300);
      $this.addClass("active");
    }

    $(".st-sidemenu-navbox ul").click(function (e) {
      // e.stopPropagation();
      return false;
    });
  });
}
sideMenu__init();

// search 메뉴
function search_click() {
  $(".ss-search-icon").click(function () {
    $("#search").addClass("active");
    $(".menu").addClass("hover");
  });
}

function search_close_click() {
  $(".ss-search-close").click(function () {
    $("#search").removeClass("active");
  });
}
search_click();
search_close_click();

// 섹션1 video swiper
function Stussy_main_Section_Vedio() {
  const swiper = new Swiper(".st_section1 .swiper", {
    loop: true, // 슬라이드 반복여부
    slidesPerView: 1, // 한 페이지에 보여질 슬라이드 개수
    // 슬라이드 간의 간격(여백)
    slidesPerGroup: 1, // 한번 넘길 때 몇 개의 슬라이드를 넘길건지
    speed: 50, // 슬라이드 전환 속도
    effect: "fade", // 슬라이드 전환 효과
    // loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    fadeEffect: { crossFade: true },
    autoplay: {
      // 슬라이드 자동재생
      delay: 13500, // 2초에 한번씩 슬라이드 전환
    },
  });
}
Stussy_main_Section_Vedio();

// 섹션4 collaboration item slide swiper
function Stussy_collaboration_slide() {
  const swiperlslide = new Swiper(".section4-leftswiperbox .swiper", {
    loop: true, // 슬라이드 반복여부
    slidesPerView: 1, // 한 페이지에 보여질 슬라이드 개수
    slidesPerGroup: 1, // 한번 넘길 때 몇 개의 슬라이드를 넘길건지
    speed: 1000, // 슬라이드 전환 속도
    effect: "fade", // 슬라이드 전환 효과
    fadeEffect: { crossFade: true },
    autoplay: {
      // 슬라이드 자동재생
      delay: 4000, // 4초에 한번씩 슬라이드 전환
    },
  });

  const swiperrslide = new Swiper(".section4-rightswiperbox .swiper", {
    direction: "vertical",
    loop: true, // 슬라이드 반복여부
    slidesPerView: 4, // 한 페이지에 보여질 슬라이드 개수
    slidesPerGroup: 1, // 한번 넘길 때 몇 개의 슬라이드를 넘길건지
    speed: 1000, // 슬라이드 전환 속도
    autoplay: {
      // 슬라이드 자동재생
      delay: 4000, // 4초에 한번씩 슬라이드 전환
    },
  });

  swiperlslide.controller.control = swiperrslide;
  swiperrslide.controller.control = swiperlslide;
}

Stussy_collaboration_slide();

function btn_top_click() {
  $(".top-btn").click(function () {
    window.scrollTo({ top: 0 });
  });
}

btn_top_click();

function Popup_init() {
  $(".shop-btn").click(function () {
    $(".shop-pop-up").addClass("active");
    $("html").addClass("st-sidemenu-box-actived");
  });
  $(`.shop-pop-up, .pop-up-close`).click(function () {
    $(".shop-pop-up").removeClass("active");
    $("html").removeClass("st-sidemenu-box-actived");
  });
  $(".shop-pop-up-box").click(function (e) {
    // e.stopPropagation();
    return false;
  });
}

Popup_init();

function section4_leftswiperbox() {
  if (matchMedia("screen and (max-width: 1279px)").matches) {
    $(".section4-leftswiperbox").attr("data-aos", "fade-down");
  }

  if (matchMedia("screen and (max-width: 1000px)").matches) {
    $(".itembox-bannerbox").attr("data-aos", "fade-up");
    $(".itembox-items").attr("data-aos", "fade-up");
  }
} // 1279px 이하일 때 left_con 의 애니메이션 효과를 fade-down 으로 바꾼다.
// section4_leftswiperbox();
