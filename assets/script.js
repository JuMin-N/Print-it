const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlideIndex = 0

const FlecheGauche = document.getElementById("FlecheGauche")
const FlecheDroite = document.getElementById("FlecheDroite")
const bannerImg = document.querySelector(".banner-img")
const bannerText = document.querySelector("#banner p")
const dotsContainer = document.querySelector(".dots")

function createDots() {
	slides.forEach((slide, index) => {
		const dot = document.createElement("div")
		dot.classList.add("dot")
		if (index === 0) {
			dot.classList.add("dot_selected")
		}
		dot.addEventListener("click", () => {
			currentSlideIndex = index
			updateSlide()
		})
		dotsContainer.appendChild(dot)
	}
function updateSlide() {
	bannerImg.src = `assets/images/slideshow/${slides[currentSlideIndex].image}`
	bannerText.innerHTML = slides[currentSlideIndex].tagLine
	const dots = document.querySelectorAll(".dot")
	dots.forEach((dot, index) => {
		if (index === currentSlideIndex) {
			dot.classList.add("dot_selected")
		} else {
			dot.classList.remove("dot_selected")
		}
	});
}
function nextSlide() {
	currentSlideIndex++;
	if (currentSlideIndex >= slides.length) {
		currentSlideIndex = 0
	}
	updateSlide();
}
function previousSlide() {
	currentSlideIndex--;
	if (currentSlideIndex < 0) {
		currentSlideIndex = slides.length - 1
	}
	updateSlide();
}

FlecheGauche.addEventListener("click", () => {
    console.log("Image précédente")
	previousSlide()
});
FlecheDroite.addEventListener("click", () => {
    console.log("Image suivante")
	nextSlide()
});

createDots()