
var size = document.querySelector('.project-images').clientWidth;
let slider1count=0;
let slider2count=0;
let slider3count=0;

function onResize() {
  size = document.querySelector('.project-images').clientWidth;
  console.log(size);
}

window.addEventListener("resize", onResize);



console.log(size);

function scrollToSection(Id) {
  var targetSection = document.getElementById(Id);

  if (targetSection) {
    // Use smooth scroll behavior if supported
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    } else {
      // for browsers that don't support smooth scrolling
      window.scrollTo(0, targetSection.offsetTop);
    }
  }
}

function showNext(sliderId) {
  var slider = document.getElementById(sliderId);
  if(sliderId == 'slider1') {
    if (slider1count < 5) {
      slider1count++;
      slider.style.transform = 'translateX(' + (-size * slider1count) + 'px)';
    }
  } else if(sliderId == 'slider2') {
    if(slider2count<1) {
      slider2count++;
      slider.style.transform = 'translateX(' + (-size * slider2count) + 'px)';
    }
  } else if(sliderId == 'slider3') {
    if (slider3count < 3){
      slider3count++;
      slider.style.transform = 'translateX(' + (-size * slider3count) + 'px)';
    }
  }
}
  
function showPrev(sliderId) {
  var slider = document.getElementById(sliderId);
  if(sliderId == 'slider1') {
    if(slider1count > 0) {
      slider1count--;
      slider.style.transform = 'translateX(' + (-size * slider1count) + 'px)';
    }
  } else if(sliderId == 'slider2') {
    if(slider2count > 0) {
      slider2count--;
      slider.style.transform = 'translateX(' + (-size * slider2count) + 'px)';
    }
  } else if(sliderId == 'slider3') {
    if(slider3count > 0) {
      slider3count--;
      slider.style.transform = 'translateX(' + (-size * slider3count) + 'px)';
    }
  }
}

function openContactInfo() {
  document.getElementById("contactinfo").style.visibility = "visible";
  document.getElementById("overlay").style.visibility = "visible";
}

function closeContactInfo() {
  document.getElementById("contactinfo").style.visibility = "hidden";
  document.getElementById("overlay").style.visibility = "hidden";
}

function toggleMenuDrawer() {

}

var menuDrawer = document.getElementById("menuDrawer");
var menuoptions = document.getElementById("menuoptions");

menuDrawer.addEventListener("click", function() {
  menuoptions.classList.toggle("showMenu");
  
});
