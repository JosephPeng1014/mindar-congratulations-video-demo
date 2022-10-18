
import $ from "../lib/import-jquery";

$("#start-btn").on("click", () => {
  $("#start-modal").hide();
});

const exampleTarget = document.querySelector('#target');
// detect target found
exampleTarget.addEventListener("targetFound", event => {
  var videoEl = exampleTarget.getAttribute("material").src;
  if (!videoEl) {
    return;
  }
  exampleTarget.object3D.visible = true;
  videoEl.load()
  videoEl.muted = false
  videoEl.play();
});
// detect target lost
exampleTarget.addEventListener("targetLost", event => {
  var videoEl = exampleTarget.getAttribute("material").src;
  this.el.object3D.visible = false;
  videoEl.muted = true
});