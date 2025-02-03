$(document).ready(function () {
    // モーダルを開くボタン
    $(".open_modal_btn").click(function (event) {
        event.preventDefault();
        // モーダルとオーバーレイを表示
        var $modal = $(this).closest('.gid_modal').find(".modal")
        var $overlay = $(this).closest('.gid_modal').find(".modal_overlay")
        $modal.fadeIn();
        $overlay.fadeIn();
    });

    // 開いたオーバーレイ部分を触ると閉じる
    $(".modal_overlay").click(function () {
        var $modal = $(this).closest('.gid_modal').find(".modal")
        $modal.fadeOut();
        $(this).fadeOut();
    });

    $(".modal").click(function (event) {
        event.stopPropagation(); // モーダル内のクリックイベントが親要素に伝播しないように
    });

    // スクロール時
    $(window).on("scroll", function () {
        $(".modal").fadeOut();
        $(".modal_overlay").fadeOut();
    });
});
