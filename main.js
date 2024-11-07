let questions = {
    neverHaveIEver: [],
    category: [],
    mostLikelyTo: [],
    bonusMessages: []
};

// Spørgsmålene bliver hentet ind fra JSON filen.
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        questions.neverHaveIEver = data.neverHaveIEver;
        questions.category = data.category;
        questions.mostLikelyTo = data.mostLikelyTo;
        questions.bonusMessages = data.bonusMessages
    })
    .catch(error => console.error("Error fetching questions:", error));

// Funktionen sørger for at fjerne et spørgsmål, der allerede har været. Funktionen laver derudover en nulstil knap, når der ikke er flere spørgsmål tilbage i vores JSON objekter.
function selectAndRemoveQuestion(array) {
    if (array.length === 0) {
        document.getElementById("mode-title").textContent = "Ingen flere spørgsmål!";
        document.getElementById("result").textContent = "";
        if (!document.getElementById("resetButton")) {
            const resetButton = document.createElement("button");
            resetButton.textContent = "Nulstil Spørgsmål";
            document.body.appendChild(resetButton);

            resetButton.addEventListener("click", () => {
                location.reload();
            });
        }
    } // Dette else statement returnerer det sprøgsmål, der lige er blevet fjernet vha. splice metoden.
        else {
        const randomIndex = Math.floor(Math.random() * array.length);
        const question = array[randomIndex];
        array.splice(randomIndex, 1);
        return question;
    }
}

function randomChoice() {
    const randomMode = Math.random();
    let selectedQuestion;

    if (randomMode < 0.15) {
        // Kategori (15% chance for at få denne gamemode)
        document.getElementById("mode-title").textContent = "Kategori..";
        selectedQuestion = selectAndRemoveQuestion(questions.category);
    } else if (randomMode < 0.4) {
        // Hvem er mest tilbøjelig til (30% chance for at få denne gamemode)
        document.getElementById("mode-title").textContent = "Hvem er mest tilbøjelig til..";
        selectedQuestion = selectAndRemoveQuestion(questions.mostLikelyTo);
    } else {
        // Jeg har aldrig (55% chance for at få denne gamemode)
        document.getElementById("mode-title").textContent = "Jeg har aldrig..";
        selectedQuestion = selectAndRemoveQuestion(questions.neverHaveIEver);
    }

    if (selectedQuestion) {
        document.getElementById("result").textContent = selectedQuestion;
    }





    function showDrinkMessage() {
        // Denne sortere allerede viste bonusbeskeder vha. funktionen. Vi bruger denne nye array med de sorterede bonusbeskeder senere i koden.
        const bonusMessage = selectAndRemoveQuestion(questions.bonusMessages);

        // Hvis ID elementet allerede eksisterer, gemmes det i variablen 'bonusDisplay'; hvis det ikke findes, oprettes et nyt 'div'-element i stedet.
        const bonusDisplay = document.getElementById("drinkMessage");

        // Dette sætter tekstindholdet for bonusDisplay til den tilfældige bonusbesked (se variablen bonusMessage).
        bonusDisplay.textContent = bonusMessage;
        bonusDisplay.style.visibility = "visible";
        document.body.appendChild(bonusDisplay);
    }



    // Her rydes bonusDisplay, hvis den altså eksisterer, inden der vises et nyt spørgsmål
    const bonusDisplay = document.getElementById("drinkMessage");
    if (bonusDisplay) {
        bonusDisplay.textContent= "";
    }

    // Der er kun 25% chance for at få en bonusbesked, så længe der stadig er elementer i det sorterede array.
    if (Math.random() <= 0.25 && questions.bonusMessages.length > 0) {
        showDrinkMessage();
    }
}
