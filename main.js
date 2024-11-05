let questions = [
    "brugt en andens tandbørste uden at fortælle det.",
    "løjet om, hvor mange personer jeg har været sammen med.",
    "givet et falskt telefonnummer til nogen, der bad om det.",
    "ladet som om jeg var syg for at undgå en aftale.",
    "snaget i en andens telefon uden deres viden.",
    "fortrudt noget jeg sagde, mens jeg var fuld.",
    "prøvet at imponere nogen ved at prale med noget, jeg egentlig ikke kan.",
    "snaget i en vens beskeder eller billeder.",
    "ladet som om jeg var på telefonen for at undgå nogen.",
    "spist noget fra gulvet, fordi det så for godt ud til at smide væk.",
    "grinet af en joke, jeg faktisk ikke forstod, bare for at passe ind.",
    "holdt en hemmelighed, som jeg burde have delt.",
    "taget æren for noget, jeg egentlig ikke gjorde.",
    "ignoreret en besked med vilje og sagt, at jeg ikke så den.",
    "kigget på min eks' sociale medier efter bruddet.",
    "spist noget, jeg havde sagt, jeg ikke kunne lide, for at være høflig.",
    "dømt nogen for hurtigt uden at kende dem.",
    "været alt for ærlig om en persons tøj eller stil.",
    "lyttet til en andens samtale i offentligheden.",
    "været jaloux på en ven uden at indrømme det.",
    "slettet en besked for at undgå problemer senere.",
    "ladet som om jeg var en helt anden person til en fest.",
    "udgivet mig for at være ældre eller yngre for at få noget ud af det.",
    "lagt skylden på nogen andre for noget, jeg gjorde.",
    "prøvet at flirte for at få en rabat eller gratis ting.",
    "ladet som om jeg vidste noget, jeg faktisk ikke anede noget om.",
    "klædt mig anderledes, bare for at imponere nogen.",
    "været den sidste til at indrømme, jeg tog fejl.",
    "lyttet til en sang, som jeg skammede mig lidt over at kunne lide.",
    "ladet som om jeg ikke var hjemme, når nogen kom forbi.",
    "ignoreret en persons fødselsdag med vilje.",
    "fortsat med at se en film eller serie, selvom jeg ikke kunne lide den.",
    "spist eller drukket noget, der egentlig ikke var mit.",
    "ladet som om jeg havde travlt for at slippe ud af en samtale.",
    "bevidst truffet en beslutning, der påvirkede en anden negativt.",
    "været misundelig på en vens succes uden at ønske dem tillykke.",
    "løj om en anden persons karakter for at få dem til at fremstå dårligere.",
    "slettet beskeder for at skjule noget for en partner eller ven.",
];


const originalQuestions = [...questions];

function randomChoice() {
    if (questions.length === 0) {
        document.getElementById("result").textContent = "Ingen flere spørgsmål!";

        if (!document.getElementById("resetButton")) {
            const resetButton = document.createElement("button");
            resetButton.textContent = "Nulstil Spørgsmål";
            resetButton.id = "resetButton";
            document.body.appendChild(resetButton);

            resetButton.addEventListener("click", () => {
                questions = [...originalQuestions];
                document.getElementById("result").textContent = "";
                resetButton.remove();
            });
        }

    } else {
        const randomIndex = Math.floor(Math.random() * questions.length);
        document.getElementById("result").textContent = questions[randomIndex];
        questions.splice(randomIndex, 1);
    }
}

document.addEventListener('dblclick', function (e) {
    e.preventDefault();
});
