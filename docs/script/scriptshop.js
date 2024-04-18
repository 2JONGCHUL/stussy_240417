console.clear();

// 헤더 영역
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
