// 別HTMLから要素を読み込む
//
// 使い方
//
// jQueryを使用しているため、読み込みが必要
//   例: <script src="https://code.jquery.com/jquery.min.js"></script>
// このファイルを読み込む
//   例: <script src="/static/js/load_contents.js"></script>
// 読み込みたいタグに
//   class="load_content"
// を追加し、読み込むHTMLのパスを
//   data-load_file="xxxx.html"
// のように指定する
//
// 例
//   <div class="load_content" data-load_file="/header.html"></div>
//
// 読み込みに失敗した場合は赤文字でエラーが表示される
//

$(document).ready(function () {
    $('.load_content').each(function () {
        var $this = $(this);
        var filePath = $this.data('load_file');

        if (!filePath) {
            $this.html('<span style="color: red;">Error: No "load_file" data attribute found.</span>');
            console.error('Error: No "load_file" data attribute found for element:', $this);
            return;
        }

        $.ajax({
            url: filePath,
            method: 'GET',
            success: function (data) {
                $this.html(data);
            },
            error: function (xhr, status, error) {
                $this.html('<span style="color: red;">Failed to load content from "' + filePath + '". Reason: ' + error + '</span>');
                console.error('Error loading content from "' + filePath + '":', status, error);
            }
        });
    });
});
