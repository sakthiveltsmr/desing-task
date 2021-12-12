function copy() {
  var copy = document.getElementById("myinput");
  copy.select();
  document.execCommand("copy");
  document.getElementById("notifi").style.opacity = "1";
  setTimeout(() => {
    document.getElementById("notifi").style.opacity = "0";
  }, 1000);
}
