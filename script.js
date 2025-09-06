// Slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;


function showSlide(index) {
slides.forEach((slide, i) => {
slide.classList.remove('active');
if (i === index) slide.classList.add('active');
});
}


document.querySelector('.next').addEventListener('click', () => {
currentSlide = (currentSlide + 1) % slides.length;
showSlide(currentSlide);
});


document.querySelector('.prev').addEventListener('click', () => {
currentSlide = (currentSlide - 1 + slides.length) % slides.length;
showSlide(currentSlide);
});


// Efeito reveal no scroll
function reveal() {
const reveals = document.querySelectorAll('.reveal');
for (let i = 0; i < reveals.length; i++) {
const windowHeight = window.innerHeight;
const elementTop = reveals[i].getBoundingClientRect().top;
const elementVisible = 150;
if (elementTop < windowHeight - elementVisible) {
reveals[i].classList.add('active');
} else {
reveals[i].classList.remove('active');
}
}
}
window.addEventListener('scroll', reveal);


// WhatsApp direto
function comprarWhatsApp(produto) {
const WA_NUMBER = "5521999999999"; // <-- Substituir pelo seu número
const url = `https://wa.me/${WA_NUMBER}?text=Olá! Gostaria de comprar o produto: ${encodeURIComponent(produto)}`;
window.open(url, '_blank');
}