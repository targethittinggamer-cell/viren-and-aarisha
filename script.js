document.getElementById("startBtn").onclick = function() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("song").play();
};
