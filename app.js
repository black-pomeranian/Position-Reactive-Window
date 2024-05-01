document.addEventListener('DOMContentLoaded', function () {
    const coordinatesDisplay = document.getElementById('coordinates');
  
    function updateCoordinates() {
      const x = window.screenX;
      const y = window.screenY;
      coordinatesDisplay.textContent = `ウィンドウの座標: X=${x}, Y=${y}`;
    }
  
    // 座標の初期表示と定期的な更新
    updateCoordinates();
    setInterval(updateCoordinates, 100); // 100ミリ秒ごとに座標を更新
  
    // ウィンドウのリサイズ時にも座標を更新
    window.addEventListener('resize', updateCoordinates);
    window.addEventListener('scroll', updateCoordinates);
  });
  