let player1 = document.querySelector(".img1");
let player2 = document.querySelector(".img2");
let wrapper = document.querySelector(".wrapper");
let header = document.querySelector("h1");
let body = document.querySelector("body");
let img = document.querySelectorAll("img");

// random number generator
function randomPlayer() {
	let randomNumber = [];
	random1 = Math.floor(Math.random() * 6) + 1;
	random2 = Math.floor(Math.random() * 6) + 1;
	randomNumber.push(random1, random2);
	return randomNumber;
}

// onclick event
wrapper.addEventListener("click", function () {
	body.style.backgroundColor =
		"#" + Math.floor(Math.random() * 16777215).toString(16);
	for (let i = 0; i < img.length; i++) {
		img[i].classList.add("roll");
	}

	setTimeout(function () {
		let randomNumbers = randomPlayer();
		player1.setAttribute("src", `images/dice${randomNumbers[0]}.png`);
		player2.setAttribute("src", `images/dice${randomNumbers[1]}.png`);

		// if player1 wins
		if (randomNumbers[0] > randomNumbers[1]) {
			header.innerHTML = "Player 1 Wins 👑👑";
		} else if (randomNumbers[0] < randomNumbers[1]) {
			header.innerHTML = "Player 2 Wins 👑👑";
		} else {
			header.innerHTML = "Draw!";
		}
		for (let i = 0; i < img.length; i++) {
			img[i].classList.remove("roll");
		}
	}, 2000); //wait 2 seconds
});
