getSounds();

const soundsElement = document.querySelector('#sounds');

(async () => {
	const sounds = await getSounds();
	addSoundsToPage(sounds);
})();


async function getSounds() {
    const response = await fetch("./sounds.json");
    const json = await response.json();
    return json;
}

function addSoundsToPage(sounds) {
    sounds.forEach(sound => {
        const soundDiv = document.createElement('div');
        const soundTitle = document.createElement('h2');
        soundTitle.textContent = sound.title;
        soundDiv.appendChild(soundTitle);

        const play = document.createElement('button');
        play.textContent = 'Play';
        soundDiv.appendChild(play); 

        // when button is clicked play song
        play.addEventListener('click', () => {
            // allow user to start it again before it's done 
            player.currentTime = 0;
            player.play();
        });

        const player = document.createElement('audio');
        player.setAttribute('src', `audioFiles/${sound.src}`)
        soundDiv.appendChild(player);
        soundsElement.appendChild(soundDiv);
    })
}
