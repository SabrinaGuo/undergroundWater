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
//開燈箱 ======================================
$(".board").click(function () {
  $(".info_cover").addClass("show");
});
$(".closeBtn").click(function () {
  $(".info_cover").removeClass("show");
});
//關閉動畫 ======================================
function stopAni() {
  setTimeout(function () {
    $(".board_box").css({
      animation: "none",
      opacity: "1",
    });
  }, 7000);
}
stopAni();
