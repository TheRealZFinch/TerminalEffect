const term = document.getElementById("term");

document.addEventListener("keyup", (event) => {
	var key = event.key;
	if (key == "Backspace") {
		term.textContent = term.textContent.slice(0, -1);
	} else if (key != "Shift") {
		term.textContent = term.textContent + key;
	}
});