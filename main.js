document.addEventListener('DOMContentLoaded', () => {
    // Indlæs JSON-dataen
    const questions = {
        "neverHaveIEver": [
            // (Indsæt dine "Jeg har aldrig"-spørgsmål her)
            "brugt en andens tandbørste uden at fortælle det.",
            "løjet om, hvor mange personer jeg har været sammen med.",
            "givet et falskt telefonnummer til nogen, der bad om det.",
            "ladet som om jeg var syg for at undgå en aftale.",
            "snaget i en andens telefon uden deres viden.",
            "mobbet en klassekammerat",
            "snaget i en vens beskeder eller billeder.",
            "ladet som om jeg var på telefonen for at undgå nogen.",
            "spist noget fra gulvet.",
            "grinet af en joke, jeg faktisk ikke forstod, bare for at passe ind.",
            // ... (resten af dine spørgsmål)
        ],
        "mostLikelyTo": [
            // (Indsæt dine "Mest tilbøjelig til"-spørgsmål her)
            "til at glemme deres taske et sted",
            "til at blive fanget i en Frank Hvam situation",
            "til at sige noget pinligt til en fest",
            "til at gå forkert ind i en fremmeds bil",
            "til at forsvinde fra festen uden at sige farvel",
            "til at stå op og holde en tale uden opfordring",
            "til at skrive til sine gamle klassekammerater klokken 3 om natten",
            "til at skide i bukserne",
            "til at overdrive en historie til uigenkendelighed",
            "til at købe noget under pres fra en sælger",
            // ... (resten af dine spørgsmål)
        ],
        "category": [
            // (Indsæt dine "Kategori"-emner her)
            "ølmærker",
            "dyr",
            "bilmærker",
            "sportsgrene",
            "byer i Danmark",
            "tøjmærker",
            "tv-serier",
            "filmgenrer",
            "krydderier",
            "stater i USA",
            // ... (resten af dine kategorier)
        ],
        "bonusMessages": [
            // (Indsæt dine bonusbeskeder her)
            "BONUS: Du må udpege en person til at hente (reserve)øl til bordet",
            "BONUS: Din makker til højre må give 2 slurke ud",
            "BONUS: Vælg en person, der må give 3 slurke ud",
            "BONUS: Alle med et ur på venstre hånd skal tage 2 slurke",
            "BONUS: Udpeg en person, der skal tage 1 slurk ud for hver farve på deres tøj",
            "BONUS: FÆLLESKÅL",
            "BONUS: Den sidste, der ankom i dag, skal tage 4 slurke",
            "BONUS: Alle der har et familiemedlem med samme navn som en ved bordet, tager 1 shot (2 slurk øl, hvis shots ikke er til stede)",
            "BONUS: Alle der har haft deres kørekort i over 5 år tager 1 slurk. Folk uden kørekort skal bunde",
            "BONUS: Den ældste ved bordet må give 3 slurke ud",
            // ... (resten af dine bonusbeskeder)
        ]
    };

    // Kopi af spørgsmålene til nulstilling
    const initialQuestions = JSON.parse(JSON.stringify(questions));

    // DOM-elementer
    const modeTitle = document.getElementById('mode-title');
    const result = document.getElementById('result');
    const bonusMessageElement = document.getElementById('bonus-message');
    const totalDrinksDisplay = document.getElementById('total-drinks');
    const actionButton = document.getElementById('action-button');
    const resetButton = document.getElementById('reset-button');

    // Total drinks tæller
    let totalDrinks = 0;

    function getRandomQuestion(category) {
        if (questions[category].length === 0) {
            return null;
        }
        const index = Math.floor(Math.random() * questions[category].length);
        const question = questions[category][index];
        questions[category].splice(index, 1);
        return question;
    }

    function updateGame() {
        // Vælg en tilfældig kategori
        const availableCategories = ['neverHaveIEver', 'mostLikelyTo', 'category'].filter(cat => questions[cat].length > 0);
        if (availableCategories.length === 0) {
            modeTitle.textContent = 'Ingen flere spørgsmål!';
            result.textContent = '';
            actionButton.disabled = true;
            return;
        }

        const randomCategory = availableCategories[Math.floor(Math.random() * availableCategories.length)];
        let question = getRandomQuestion(randomCategory);

        // Opdater overskriften og spørgsmålet
        switch (randomCategory) {
            case 'neverHaveIEver':
                modeTitle.textContent = 'Jeg har aldrig...';
                break;
            case 'mostLikelyTo':
                modeTitle.textContent = 'Mest tilbøjelig til...';
                break;
            case 'category':
                modeTitle.textContent = 'Kategori:';
                break;
        }
        result.textContent = question;

        // Random antal drinks mellem 1 og 3
        const drinksThisRound = Math.floor(Math.random() * 3) + 1;

        // Opdater total drinks
        totalDrinks += drinksThisRound;
        totalDrinksDisplay.textContent = `Total drinks: ${totalDrinks}`;

        // Bonus besked med 25% chance
        if (Math.random() < 0.25 && questions.bonusMessages.length > 0) {
            const bonus = getRandomQuestion('bonusMessages');
            bonusMessageElement.textContent = bonus;
        } else {
            bonusMessageElement.textContent = '';
        }
    }

    function resetGame() {
        // Nulstil spørgsmål
        for (let key in initialQuestions) {
            questions[key] = [...initialQuestions[key]];
        }

        // Nulstil tæller og UI
        totalDrinks = 0;
        totalDrinksDisplay.textContent = 'Total drinks: 0';
        modeTitle.textContent = 'Jeg har aldrig...';
        result.textContent = '';
        bonusMessageElement.textContent = '';
        actionButton.disabled = false;
    }

    // Event Listeners
    actionButton.addEventListener('click', updateGame);
    resetButton.addEventListener('click', resetGame);
});
