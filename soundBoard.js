// Note to self: simplify this! forEach? function. 
const player = document.getElementById("audio");
const player2 = document.getElementById("audio2");
const player3 = document.getElementById("audio3");
const player4 = document.getElementById("audio4");
const player5 = document.getElementById("audio5");
const player6 = document.getElementById("audio6");
const player7 = document.getElementById("audio7");
const player8 = document.getElementById("audio8");
const player9 = document.getElementById("audio9");

// // click image & song plays or pauses
const button = document.getElementById("img");
document.getElementById("img").addEventListener("click", () => {
    if (player.paused) {
		player.play();
	} else {
		player.pause();
	}
});

const button2 = document.getElementById("img2");
document.getElementById("img2").addEventListener("click", () => {
	if (player2.paused) {
		player2.play();
	} else {
		player2.pause();
	}
});

const button3 = document.getElementById("img3");
document.getElementById("img3").addEventListener("click", () => {
	if (player3.paused) {
		player3.play();
	} else {
		player3.pause();
	}
});

const button4 = document.getElementById("img4");
document.getElementById("img4").addEventListener("click", () => {
	if (player4.paused) {
		player4.play();
	} else {
		player4.pause();
	}
});

const button5 = document.getElementById("img5");
document.getElementById("img5").addEventListener("click", () => {
	if (player5.paused) {
		player5.play();
	} else {
		player5.pause();
	}
});

const button6 = document.getElementById("img6");
document.getElementById("img6").addEventListener("click", () => {
	if (player6.paused) {
		player6.play();
	} else {
		player6.pause();
	}
});

const button7 = document.getElementById("img7");
document.getElementById("img7").addEventListener("click", () => {
	if (player7.paused) {
		player7.play();
	} else {
		player7.pause();
	}
});

const button8 = document.getElementById("img8");
document.getElementById("img8").addEventListener("click", () => {
	if (player8.paused) {
		player8.play();
	} else {
		player8.pause();
	}
});

const button9 = document.getElementById("img9");
document.getElementById("img9").addEventListener("click", () => {
	if (player9.paused) {
		player9.play();
	} else {
		player9.pause();
	}
});

// changes play icon to pause on click and back again
const images = document.getElementsByClassName('image');
// create a copy
const imageArray = [...images]
// Apply the code to each image 
imageArray.forEach((image) => {
	image.addEventListener("click", function () {
		const icon = this.querySelector("i");
		if (icon.classList.contains("fa-play")) {
			icon.classList.remove("fa-play");
			icon.classList.add("fa-pause");
		} else {
			icon.classList.remove("fa-pause");
			icon.classList.add("fa-play");
		}
	});
});

// click button to get a random song 
function getSong() {
	const song = [
		{
			title: "Times Like This",
			src: "./audioFiles/timesLikeThisSoundBoard.mp3",
		},
		{
			title: "I Won't Mind",
			src: "./audioFiles/iWontMindSoundBoard.mp3",
		},
		{
			title: "A Day With Julia",
			src: "./audioFiles/aDayWithJuliaSoundBoard.mp3",
		},
		{
			title: "Lion Tamer",
			src: "./audioFiles/lionTamerSoundBoard.mp3",
		},
		{
			title: "Over The Rainbow",
			src: "./audioFiles/overTheRainbowSoundBoard.mp3",
		},
		{
			title: "I Dreamed A Dream",
			src: "./audioFiles/iDreamedADreamSoundBoard.mp3",
		},
		{
			title: "Another Hundred People",
			src: "./audioFiles/anotherHundredPeopleSoundBoard.mp3",
		},
		{
			title: "A Way Back To Then",
			src: "./audioFiles/aWayBackToThenSoundBoard.mp3",
		},
		{
			title: "Defying Gravity",
			src: "./audioFiles/defyingGravitySoundBoard.mp3",
		},
	];

    const randomSong = song[Math.floor(Math.random() * song.length)];

    // ADD stopping one song before another starts on random 
    const audio = new Audio(randomSong.src);
	audio.play();
}

document.querySelector('button').addEventListener("click", () => {
    getSong();
});

// pause all music 
// it would be great to figure out a better solution to stopping the audio for the random button 
document.querySelector('.quiet').onclick = function () {
	// const sounds = document.getElementsByTagName("audio");
    // for (i = 0; i < sounds.length; i++) sounds[i].pause();
    location.reload();
	return false;
};