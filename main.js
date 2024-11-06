// Vi opretter tomme arrays, så dataen fra JSON filen kan blive fyldt ind, og de nye arrays kan blive brugt senere i koden.
let questions = {
    neverHaveIEver: [],
    category: [],
    mostLikelyTo: []
};

// Spørgmålene bliver hentet ind fra JSON filen.
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        questions.neverHaveIEver = data.neverHaveIEver;
        questions.category = data.category;
        questions.mostLikelyTo = data.mostLikelyTo;
    })
    .catch(error => console.error("Error fetching questions:", error));

// Funktionen sørger for fjerne et spørgsmål, der allerede har været der at lave en nulstil knap, når der ikke er flere spørgsmål tilbage i vores JSON objekter.
function selectAndRemoveQuestion(array) {
    if (array.length === 0) {
        document.getElementById("mode-Title").textContent = "Ingen flere spørgsmål!";
        document.getElementById("result").textContent = "";
        if (!document.getElementById("resetButton")) {
            const resetButton = document.createElement("button");
            resetButton.textContent = "Nulstil Spørgsmål";
            document.body.appendChild(resetButton);

            resetButton.addEventListener("click", () => {
                location.reload();
            });
        }

    } else {
        const randomIndex = Math.floor(Math.random() * array.length);
        const question = array[randomIndex];
        array.splice(randomIndex, 1); // Fjern spørgsmålet fra arrayet
        return question;
    }
}

function randomChoice() {
    const randomMode = Math.random();

    if (randomMode < 0.15) {
        // Kategori Mode (15% chance)
        document.getElementById("mode-Title").textContent = "Kategori..";
        const randomIndex = Math.floor(Math.random() * questions.category.length);
        document.getElementById("result").textContent = questions.category[randomIndex];
        selectAndRemoveQuestion(questions.category)
    } else if (randomMode < 0.4) {
        // Hvem er mest tilbøjelig til (30% chance)
        document.getElementById("mode-Title").textContent = "Hvem er mest tilbøjelig til..";
        const randomIndex = Math.floor(Math.random() * questions.mostLikelyTo.length);
        document.getElementById("result").textContent = questions.mostLikelyTo[randomIndex];
        selectAndRemoveQuestion(questions.mostLikelyTo)
    } else {
        // Jeg har aldrig (60% chance)
        document.getElementById("mode-Title").textContent = "Jeg har aldrig..";
        const randomIndex = Math.floor(Math.random() * questions.neverHaveIEver.length);
        document.getElementById("result").textContent = questions.neverHaveIEver[randomIndex];
        selectAndRemoveQuestion(questions.neverHaveIEver)
    }

    // Bonussssssss!!!!!!!
    const bonusMessages = [
        "Bonus: Du må udpege én til at hente øl til bordet",
        "Bonus: Din makker til højre må give 2 slurke ud",
        "Bonus: Alle der har hvidt tøj på skal tage en slurk",
        "Bonus: Vælg en person, der må give 3 slurke ud",
    ];

    function showDrinkMessage() {
        const randomBonus = bonusMessages[Math.floor(Math.random() * bonusMessages.length)];
        const bonusDisplay = document.getElementById("drinkMessage") || document.createElement("div");
        bonusDisplay.id = "drinkMessage";
        bonusDisplay.textContent = randomBonus;
        document.body.appendChild(bonusDisplay);
        setTimeout(() => bonusDisplay.textContent = "", 7000);
    }

    if (Math.random() <= 0.09) {
        showDrinkMessage();
    }
}
