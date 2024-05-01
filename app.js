document.addEventListener('DOMContentLoaded', function () {
    const coordinatesDisplay = document.getElementById('coordinates');
    const image = document.getElementById('image');
  
    function updateCoordinates() {
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const normalizedY = (window.screenY + window.innerHeight / 2 - screenHeight / 2) / (screenHeight / 2);
      const scaledY = Math.max(-1, Math.min(1, normalizedY)); // スケールを-1から1までに保つ
      const imageIndex = getImageIndex(scaledY);
      image.src = `image/image${imageIndex}.jpg`;
    }
  
    function getImageIndex(y) {
      // yを0から1のスケールに変換し、10段階の画像インデックスに変換
      const index = Math.floor((1 - (y + 1) / 2) * 10);
      return Math.max(0, Math.min(9, index)); // インデックスが0から9の範囲内に保たれるように
    }
  
    updateCoordinates();
    setInterval(updateCoordinates, 100); // 100ミリ秒ごとに座標を更新
  
    window.addEventListener('resize', updateCoordinates);
    window.addEventListener('scroll', updateCoordinates);
  });
  