const slider1 = document.getElementById('slider1');
const slider2 = document.getElementById('slider2');

let position1 = 0;
let position2 = 0;
const speed = 1.5;

window.onload = () => {
  // 画像が読み込まれてから scrollWidth を使う
  position2 = -slider2.scrollWidth / 2;

  function scrollSliders() {
    // 1行目（右→左）
    position1 += speed;
    if (position1 >= slider1.scrollWidth / 2) position1 = 0;
    slider1.style.transform = `translateX(-${position1}px)`;

    // 2行目（左→右）
    position2 += speed;
    if (position2 >= 0) position2 = -slider2.scrollWidth / 2;
    slider2.style.transform = `translateX(${position2}px)`;

    requestAnimationFrame(scrollSliders);
  }

  scrollSliders();
};


