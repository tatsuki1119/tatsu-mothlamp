$(function () {
    var btn = $("#menu_btn");
    btn.on("mousedown touchend", function (event) {
        // ボタンクリック、タップ
        event.preventDefault();
        if ($("#menu_list_area").is(":visible")) {
            btn.text("MENU");
        } else {
            btn.text("CLOSE");
        }
        // 表示トグル
        $("#menu_list_area").stop(true, false).fadeToggle();
    });

    var startPos = 0;
    var winScrollTop = 0;
    $(window).on("scroll", function () {
        // スクロール時
        if ($(window).width() < 768) {
            // スマホ表示
            btn.text("MENU");
            $('#menu_list').fadeIn();
            $("#menu_list_area").fadeOut();
        } else {
            // PC表示
            winScrollTop = $(window).scrollTop();
            if (winScrollTop <= 0) {
                // 画面一番上では表示
                $('#menu_list').fadeIn()
            } else if (winScrollTop >= startPos) {
                // 下スクロールで消す
                $('#menu_list').fadeOut();
            } else {
                // 上スクロールで出す
                $('#menu_list').fadeIn();
            }
            startPos = winScrollTop;
        }
    });
})
