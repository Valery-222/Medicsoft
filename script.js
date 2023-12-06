// Carga las imágenes de fondo
const headerImage = new Image();
headerImage.src = "images/header.jpg";

const sectionImage1 = new Image();
sectionImage1.src = "images/section1.jpg";

const sectionImage2 = new Image();
sectionImage2.src = "images/section2.jpg";

// Agrega las imágenes de fondo a los elementos correspondientes
headerImage.onload = function() {
  document.querySelector("#header").style.backgroundImage = `url(${headerImage.src})`;
};

sectionImage1.onload = function() {
  document.querySelector("#intro").style.backgroundImage = `url(${sectionImage1.src})`;
};

sectionImage2.onload = function() {
  document.querySelector("#beneficios").style.backgroundImage = `url(${sectionImage2.src})`;
};
