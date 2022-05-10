let body = document.querySelector("body");
let playall = document.querySelector(".playall");
let stop = document.querySelector(".stop");

let soundArray = [
	"crash",
	"kick-bass",
	"snare",
	"tom-1",
	"tom-2",
	"tom-3",
	"last",
	"toms",
];
let audios = [];

// for loop adding event listeners to all buttons
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", () => {
		playSound(soundArray[i]);
	});
}

// adding event listener to play all button
playall.addEventListener("click", playList);

function playSound(sound) {
	// Random background color
	body.style.backgroundColor =
		"#" + Math.floor(Math.random() * 16777215).toString(16);
	let audio = new Audio(`./sounds/${sound}.mp3`);
	audio.play();
}

function playList() {
	time = 1000;
	playSound(soundArray[0]);

	for (let i = 1; i < soundArray.length; i++) {
		setTimeout(() => {
			playSound(soundArray[i]);
		}, time);
		time = time + 500;
	}
}
