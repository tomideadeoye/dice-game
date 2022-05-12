// $(".btn").hide();
$(".btn").unbind();

$(".startButton").on("click", () => {
	$(".btn").show();
	simonGame();
	$(".startButton").hide();
});

// generate random color

function simonGame() {
	let buttonColors = ["red", "blue", "green", "yellow"];
	let gamePattern = [];
	let userClickedPattern = [];
	let level = 0;

	function nextSequence() {
		userClickedPattern = [];
		// update level
		level++;
		$("h1").text("Level " + level);
		// random number between 0 and 4
		let randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
		gamePattern.push(randomChosenColor);
		$(`.btn.${randomChosenColor}`)
			.fadeOut(100)
			.fadeIn(100)
			.fadeOut(100)
			.fadeIn(100);

		console.log("gamepattern", gamePattern);
	}
	nextSequence();

	$(".btn").click(function (e) {
		let userChosenColor = $(this).attr("id");
		userClickedPattern.push(userChosenColor);
		if (level != 0) {
			animatePress(userChosenColor);
		}

		console.log("user clicked pattern", userClickedPattern);
		// for the number of elemnts in gamePattern allow a click
		if (userClickedPattern.length === gamePattern.length) {
			checkAnswer();
		}
	});

	function checkAnswer() {
		let validity = true;

		for (let i = 0; i < userClickedPattern.length; i++) {
			if (userClickedPattern[i] === gamePattern[i]) {
				console.log("success");
			} else {
				validity = false;
				console.log("fail");
			}
		}

		if (validity) {
			setTimeout(function () {
				nextSequence();
			}, 1000);
		} else {
			resetGame();
		}
	}

	function resetGame() {
		$(".btn").unbind();
		level = 0;
		gamePattern = [];
		userClickedPattern = [];
		$("body").addClass("game-over");
		$("h1").text("Game Over, Press the start button to start");

		setTimeout(function () {
			$("body").removeClass("game-over");
			$(".startButton").show();
		}, 3000);
	}

	// animate the buttons and body when clicked
	function animatePress(currentColor) {
		// jqery animation
		$(`.btn.${currentColor}`).fadeOut(100).fadeIn(100);
		$(`.btn.${currentColor}`).addClass("pressed");
		// random color
		let randomChosenColor =
			"#" + Math.floor(Math.random() * 16777215).toString(16);
		$("body").css("background-color", randomChosenColor);

		// audio nimation
		let audio = new Audio(`./sounds/${currentColor}.mp3`);
		audio.play();

		setTimeout(function () {
			$(`.btn.${currentColor}`).removeClass("pressed");
		}),
			500;
	}
}
