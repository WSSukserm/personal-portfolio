var slideIndex = 1;
showSlide(slideIndex);

function openNav() {
      document.getElementById("nav").style.width = "50%";
      document.getElementById("overlay").style.backgroundColor = "rgba(219, 207, 161, 0.4)";
      document.getElementById("overlay").style.zIndex = "2";
}

function closeNav() {
  document.getElementById("nav").style.width = "0";
  document.getElementById("overlay").style.backgroundColor = "transparent";
  document.getElementById("overlay").style.zIndex = "-1";
}

function plusSlides(n) {
  showSlide(slideIndex +=n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("image");
  var caption = document.getElementsByClassName("caption");
  var code = document.getElementsByClassName("showCode");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    caption[i].style.display = "none";
    code[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  caption[slideIndex-1].style.display = "block";
  code[slideIndex-1].style.display = "block";
}
