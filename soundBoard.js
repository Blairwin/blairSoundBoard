// Note to self: simplify this! forEach?
const player = document.getElementById("audio");
const player2 = document.getElementById("audio2");
const player3 = document.getElementById("audio3");
const player4 = document.getElementById("audio4");
const player5 = document.getElementById("audio5");
const player6 = document.getElementById("audio6");
const player7 = document.getElementById("audio7");
const player8 = document.getElementById("audio8");
const player9 = document.getElementById("audio9");

// push button & song plays
document.getElementById("img").addEventListener("click", () => {
    document.getElementById("audio").play();
    // press it again and it restarts
    player.currentTime = 0;
    player.play();
});

document.getElementById("img2").addEventListener("click", () => {
    document.getElementById("audio2").play();
    player2.currentTime = 0;
	player2.play();
});

document.getElementById("img3").addEventListener("click", () => {
    document.getElementById("audio3").play();
    player3.currentTime = 0;
	player3.play();
});

document.getElementById("img4").addEventListener("click", () => {
    document.getElementById("audio4").play();
    player4.currentTime = 0;
	player4.play();
});

document.getElementById("img5").addEventListener("click", () => {
    document.getElementById("audio5").play();
    player5.currentTime = 0;
	player5.play();
});

document.getElementById("img6").addEventListener("click", () => {
    document.getElementById("audio6").play();
    player6.currentTime = 0;
	player6.play();
});

document.getElementById("img7").addEventListener("click", () => {
    document.getElementById("audio7").play();
    player7.currentTime = 0;
	player7.play();
});

document.getElementById("img8").addEventListener("click", () => {
    document.getElementById("audio8").play();
    player8.currentTime = 0;
	player8.play();
});

document.getElementById("img9").addEventListener("click", () => {
    document.getElementById("audio9").play();
    player9.currentTime = 0;
	player9.play();
});



// getSounds();

// const soundsElement = document.querySelector('#sounds');

// (async () => {
// 	const sounds = await getSounds();
// 	addSoundsToPage(sounds);
// })();


// async function getSounds() {
//     const response = await fetch("./sounds.json");
//     const json = await response.json();
//     return json;
// }

// function addSoundsToPage(sounds) {
//     sounds.forEach(sound => {
//         const soundDiv = document.createElement('div');
//         const soundTitle = document.createElement('h2');
//         soundTitle.textContent = sound.title;
//         soundDiv.appendChild(soundTitle);

//         const play = document.createElement('button');
//         play.textContent = 'Play';
//         soundDiv.appendChild(play); 

        // when button is clicked play song
        // play.addEventListener('click', () => {
            // allow user to start it again before it's done 
        //     player.currentTime = 0;
        //     player.play();
        // });

//         const player = document.createElement('audio');
//         player.setAttribute('src', `audioFiles/${sound.src}`)
//         soundDiv.appendChild(player);
//         soundsElement.appendChild(soundDiv);
//     })
// }
