// 変数の宣言が必要

// var pwaConfig = {
//     backgroundImagePath: 'path/to/background-image',
//     centerImagePath: 'path/to/center-image',
//     textColor: 'white'
// };


(function () {
    function createSplashImage() {
        var screenWidth = window.screen.width * window.devicePixelRatio;
        var screenHeight = window.screen.height * window.devicePixelRatio;

        var canvas = document.createElement('canvas');
        canvas.width = screenWidth;
        canvas.height = screenHeight;
        var context = canvas.getContext('2d');

        // 背景画像をcoverスタイルで描画
        var backgroundImage = new Image();
        backgroundImage.crossOrigin = 'anonymous';
        backgroundImage.onload = function () {
            var aspectRatio = backgroundImage.width / backgroundImage.height;
            var targetWidth = screenWidth;
            var targetHeight = screenWidth / aspectRatio;

            if (targetHeight < screenHeight) {
                targetHeight = screenHeight;
                targetWidth = screenHeight * aspectRatio;
            }

            var offsetX = (screenWidth - targetWidth) / 2;
            var offsetY = (screenHeight - targetHeight) / 2;

            context.drawImage(backgroundImage, offsetX, offsetY, targetWidth, targetHeight);

            // 中央の画像を描画
            var centerImage = new Image();
            centerImage.crossOrigin = 'anonymous';
            centerImage.onload = function () {
                // 中央の画像の縦横比を保ちつつ、横幅の1/3に縮小
                var centerAspectRatio = centerImage.width / centerImage.height;
                var targetCenterWidth = screenWidth / 3;
                var targetCenterHeight = targetCenterWidth / centerAspectRatio;

                var centerX = (screenWidth - targetCenterWidth) / 2;
                var centerY = (screenHeight - targetCenterHeight) / 2;

                context.drawImage(centerImage, centerX, centerY, targetCenterWidth, targetCenterHeight);

                var splashDataURL = canvas.toDataURL();
                setSplashImage(splashDataURL);
            };
            centerImage.src = pwaConfig.centerImagePath;  // 中央画像の読み込み
        };
        backgroundImage.src = pwaConfig.backgroundImagePath;  // 背景画像の読み込み
    }

    function setSplashImage(dataURL) {
        var splashLink = document.createElement('link');
        splashLink.setAttribute('rel', 'apple-touch-startup-image');
        // splashLink.setAttribute('media', '(orientation: portrait)');
        splashLink.setAttribute('href', dataURL);
        document.head.appendChild(splashLink);

        // // 画面にスプラッシュ画像を表示する
        // var splashImage = new Image();
        // splashImage.src = dataURL;
        // document.body.appendChild(splashImage);
    }

    createSplashImage();
})();
