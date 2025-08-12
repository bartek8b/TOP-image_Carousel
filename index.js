// To be set manually
const frameWidth = 300;
const imagesLenght = 5;
// End of To be set manually

const tape = document.querySelector(".tape");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
let autoPlay = true;
let intervalId = null;

function updateTapePosition() {
	tape.style.right = `${frameWidth * currentIndex}px`;
}

function updateDotFill() {
	dots.forEach(d => {
		Number(d.dataset.index) === currentIndex
			? d.classList.add("dot-filled")
			: d.classList.remove("dot-filled");
	});
}
function play() {
	if (currentIndex === imagesLenght - 1) {
		currentIndex = 0;
		updateTapePosition();
		updateDotFill();
	} else {
		currentIndex = currentIndex + 1;
		updateTapePosition();
		updateDotFill();
	}
}
function slideShow() {
	if (autoPlay) {
		if (intervalId !== null) return; // Jeśli już działa, nie uruchamiaj kolejnego
		intervalId = setInterval(play, 3000);
	} else {
		if (intervalId !== null) {
			clearInterval(intervalId);
			intervalId = null;
		}
	}
}
function markPlayBtn() {
	const playBtn = document.querySelector(".play-btn");
	if (autoPlay) {
		playBtn.innerHTML = "&#9209;";
	} else {
		playBtn.innerHTML = "&#9654;";
	}
}

window.addEventListener("click", e => {
	const prevBtn = e.target.closest(".previous-btn");
	const nextBtn = e.target.closest(".next-btn");
	const dotBtn = e.target.closest(".dot");
	const playPauseBtn = e.target.closest(".play-btn");

	if (!prevBtn && !nextBtn && !playPauseBtn && !dotBtn) {
		return;
	}

	if (prevBtn) {
		if (currentIndex !== 0 && currentIndex > 0) {
			currentIndex = currentIndex - 1;
			updateTapePosition();
			updateDotFill();
		} else {
			currentIndex = imagesLenght - 1;
			updateTapePosition();
			updateDotFill();
		}
		return;
	}

	if (nextBtn) {
		if (currentIndex === imagesLenght - 1) {
			currentIndex = 0;
			updateTapePosition();
			updateDotFill();
		} else {
			currentIndex = currentIndex + 1;
			updateTapePosition();
			updateDotFill();
		}
		return;
	}

	if (dotBtn) {
		currentIndex = Number(dotBtn.dataset.index);
		updateTapePosition();
		updateDotFill();
		return;
	}

	if (playPauseBtn) {
		autoPlay ? (autoPlay = false) : (autoPlay = true);
		slideShow();
		markPlayBtn();
	}
});

// init
updateTapePosition();
updateDotFill();
slideShow();
markPlayBtn();
