//動畫開始 ======================================
// $(document).ready(function () {
//   $("body").addClass("animationStart");
// });
//關閉動畫 ======================================
function stopAni() {
  setTimeout(function () {
    // $(".board_box").css({
    //   animation: "none",
    //   opacity: "1",
    // });
    $("body").removeClass("animationStart");
  }, 7000);
}
stopAni();
//資料載入 ======================================
function fetchAll(openItem) {
  fetch("./../data.json", {})
    .then((response) => {
      // 這裡會得到一個 ReadableStream 的物件
      // console.log(response);
      // 可以透過 blob(), json(), text() 轉成可用的資訊
      return response.json();
    })
    .then((jsonData) => {
      jsonData.forEach((element) => {
        if (element.section == openItem) {
          $(".optionLists").empty();

          $(".itmeName").text(element.itemname);
          for (var i = 0; i < element.num; i++) {
            $(".optionLists").append(
              '<li><div class="title">' +
                element.des[i].option +
                "</div><p>" +
                element.des[i].describe +
                "</p></li>"
            );
          }
        }
      });
    })
    .catch((err) => {
      console.log("錯誤:", err);
    });
}
//資料帶入燈箱 ================================
function lbOpen(clickBoard) {
  var openItem = clickBoard;
  fetchAll(openItem);
  $(".info_cover").addClass("show");
  $("html").addClass("lbShow");
}
function lbClose() {
  $(".info_cover").removeClass("show");
  $("html").removeClass("lbShow");
}

//開燈箱 ======================================
$(".board").click(function () {
  clickBoard = $(this).data("no");
  lbOpen(clickBoard);
});
$(".closeBtn").click(function () {
  lbClose();
});
//白標滑鼠移入與移出 底下物件會上升 ===================
$(".board")
  .mouseenter(function (e) {
    $(this).parents(".board_box").addClass("up");
  })
  .mouseleave(function () {
    $(this).parents(".board_box").removeClass("up");
    if ($(this).parents(".board_box").hasClass("chosed")) {
      $(this).parents(".board_box").addClass("up");
    }
  });

//點擊nav 同步將相關物件上升 ===================
function clickNavHandler(sections) {
  if ($(sections).hasClass("chosed")) {
    $(sections).removeClass("up chosed");
    return;
  }
  $(".board_box").removeClass("up chosed");
  $(sections).addClass("up chosed");
}
//點擊nav addclass ===================
$(".navigation a").click(function () {
  $(this).toggleClass("active").siblings().removeClass("active");
});
