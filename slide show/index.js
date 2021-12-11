let imageSrc = [
  "https://wallpaperbat.com/img/186655-thor-2019-wallpaper.jpg",
  "https://wallpapercave.com/wp/wp3091187.jpg",
  "https://images.hdqwalls.com/download/spider-man-neon-x9-1920x1080.jpg",
  "https://4.bp.blogspot.com/-V2xa5ezxDaY/XMmyWIL3rwI/AAAAAAAACGI/80n_DQxOGCg_yxJDFIjahbbBlb9D3twowCKgBGAs/w0/iron-man-uhdpaper.com-4K-210.jpg",
  "https://c4.wallpaperflare.com/wallpaper/433/383/588/wwe-rock-wallpaper-preview.jpg",
];
let i = 0;
let imageTurn;
const turn = () => {
  console.log(i);
  if (i < imageSrc.length) {
    document.getElementById("image").src = imageSrc[i];
    i++;
  } else {
    i = 0;
  }
};
imageTurn = setInterval(turn, 2000);
function pauseTurn() {
  clearInterval(imageTurn);
}
function resumeTurn() {
  imageTurn = setInterval(turn, 2000);
}
function previousTurn() {
  clearInterval(imageTurn);
  if (i > 0) {
    i = i - 1;
    document.getElementById("image").src = imageSrc[i];
  } else {
    i = 4;
    document.getElementById("image").src = imageSrc[i];
  }

  imageTurn = setInterval(turn, 2000);
}
function nextTurn() {
  console.log(i);
  clearInterval(imageTurn);
  if (i >= 4) {
    i = 0;
    document.getElementById("image").src = imageSrc[i];
  } else {
    i = i + 1;
    document.getElementById("image").src = imageSrc[i];
  }
  console.log(i);
  imageTurn = setInterval(turn, 2000);
}

function slide() {
  x = document.getElementById("image");
  x.className = "fade";
}
