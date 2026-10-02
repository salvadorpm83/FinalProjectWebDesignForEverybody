const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener('click', function () {
    const estaAbierto = navLinks.classList.toggle('abierto');
    hamburgerBtn.setAttribute('aria-expanded', estaAbierto ? 'true' : 'false');
  });
}

const carrusel = document.getElementById('carrusel');

if (carrusel) {
  const slides = carrusel.querySelectorAll('.carrusel-slide');
  const btnAnterior = document.getElementById('btnAnterior');
  const btnSiguiente = document.getElementById('btnSiguiente');
  const estadoTexto = document.getElementById('carruselEstado');
  let indiceActual = 0;

  function mostrarSlide(indice) {
    slides.forEach(function (slide, i) {
      slide.classList.toggle('activo', i === indice);
    });
    if (estadoTexto) {
      estadoTexto.textContent = 'Imagen ' + (indice + 1) + ' de ' + slides.length;
    }
  }

  btnSiguiente.addEventListener('click', function () {
    indiceActual = (indiceActual + 1) % slides.length;
    mostrarSlide(indiceActual);
  });

  btnAnterior.addEventListener('click', function () {
    indiceActual = (indiceActual - 1 + slides.length) % slides.length;
    mostrarSlide(indiceActual);
  });
}

const anioSpan = document.getElementById('anio');
if (anioSpan) {
  anioSpan.textContent = new Date().getFullYear();
}

const formulario = document.getElementById('formularioContacto');
const formularioNota = document.getElementById('formularioNota');

if (formulario && formularioNota) {
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    formularioNota.textContent = '¡Gracias! Este es un proyecto escolar, así que el mensaje no se envía de verdad, pero el formulario funciona.';
    formulario.reset();
  });
}