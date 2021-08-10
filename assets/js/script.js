const imageHome = document.querySelector("#home img");

let load = 0;
let animate = false;
let int = setInterval(blurring, 50);

function blurring() {
  if (animate) {
    if (load >= 14) {
      animate = false;
    }
    load++;
  } else {
    if (load <= -14) {
      animate = true;
    }
    load--;
  }
  imageHome.style.bottom = `${load / 0.5}px`;
}

document.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    document.getElementsByTagName("header")[0].style.boxShadow =
      "0 8px 8px 0 rgba(179, 179, 179, 0.2)";
  } else {
    document.getElementsByTagName("header")[0].style.boxShadow =
      "0 0px 0px 0 rgba(179, 179, 179, 0.2)";
  }
});
