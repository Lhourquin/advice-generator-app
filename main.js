const adviceId = document.getElementsByClassName("advice-id")[0];
const advice = document.getElementsByClassName("advice")[0];
const buttonIconDice = document.getElementsByClassName("icon-dice-container")[0];

buttonIconDice.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((result) => {
            adviceId.innerHTML = "ADVICE #" + result.slip.id;
            advice.innerHTML = `“${result.slip.advice}”`;
        })
})