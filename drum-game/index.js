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

let keys = ["w", "a", "s", "d", "j", "k", "l"];

// key press event
document.addEventListener("keydown", (e) => {
	// check if the key pressed is in the array
	if (keys.includes(e.key.toLowerCase())) {
		let index = keys.indexOf(e.key.toLowerCase());
		playSound(soundArray[index]);
	}
});

// for loop adding event listeners to all buttons
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", () => {
		playSound(soundArray[i]);
	});
}

// adding event listener to play all button
playall.addEventListener("click", playList);

function playSound(sound) {
	let index = soundArray.indexOf(sound);

	// Random background color
	body.style.backgroundColor =
		"#" + Math.floor(Math.random() * 16777215).toString(16);
	let audio = new Audio(`./sounds/${sound}.mp3`);
	audio.play();
	animate(keys[index]);
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

function animate(key) {
	document.querySelector(`.${key}`).classList.add("pressed");
	setTimeout(() => {
		document.querySelector(`.${key}`).classList.remove("pressed");
	}, 300);
}
