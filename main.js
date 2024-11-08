document.addEventListener('DOMContentLoaded', () => {
    // Indlæs JSON-dataen
    const questions = {
        "neverHaveIEver": [
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
            "holdt en hemmelighed, som jeg burde have delt.",
            "taget æren for noget, jeg egentlig ikke gjorde.",
            "ignoreret en besked med vilje og sagt, at jeg ikke så den.",
            "kigget på min eks' sociale medier efter bruddet.",
            "spist noget, jeg havde sagt, jeg ikke kunne lide for at være høflig.",
            "været jaloux på en ven uden at indrømme det.",
            "slettet en besked for at undgå problemer senere",
            "ladet som om jeg var en helt anden person til en fest.",
            "løjet om min alder",
            "lagt skylden på nogen andre for noget, jeg gjorde.",
            "prøvet at flirte for at få en rabat eller gratis ting.",
            "ladet som om jeg vidste noget, jeg faktisk ikke anede noget om.",
            "lyttet til en sang, som jeg skammede mig lidt over at kunne lide.",
            "fortsat med at se en film eller serie, selvom jeg ikke kunne lide den.",
            "ladet som om jeg havde travlt for at slippe ud af en samtale.",
            "været misundelig på en vens succes uden at ønske dem tillykke.",
            "løjet om en anden persons karakter for at få dem til at fremstå dårligere.",
            "slettet beskeder for at skjule noget for en partner eller ven.",
            "røget en pakke smøger på en dag",
            "sprunget ud fra en klippe i vandet.",
            "prøvet bungee jumping.",
            "gået til en koncert alene.",
            "spist sushi.",
            "løbet et maraton.",
            "været til et sportsarrangement.",
            "læst en hel bog på én dag.",
            "tabt min telefon i toilettet.",
            "været på tv.",
            "mistet min pung eller taske.",
            "taget en selfie med en berømthed.",
            "kørt i en limousine.",
            "glemt en vigtig fødselsdag.",
            "set en hel tv-serie på en weekend.",
            "prøvet at lave hjemmelavet pasta.",
            "været i operaen.",
            "spist morgenmad til aftensmad.",
            "glemt, hvor jeg parkerede min bil.",
            "sunget karaoke offentligt.",
            "spillet paintball.",
            "fået en parkeringsbøde.",
            "prøvet at lære et musikinstrument.",
            "været på et blind date.",
            "snakket i søvne.",
            "set den samme film mere end fem gange.",
            "løjet i et jobinterview.",
            "taget fejl af en fremmed for at være en bekendt.",
            "sovet over mig og misset noget vigtigt.",
            "prøvet at lære at danse salsa.",
            "besøgt en spøgelsesby.",
            "taget en skitur.",
            "skrevet et digt.",
            "købt noget, jeg aldrig brugte.",
            "grinet så meget, at jeg græd.",
            "vundet i lotteriet.",
            "opfundet en undskyldning for at forlade en fest tidligt.",
            "lavet en prank på en ven.",
            "spist en hel pizza alene.",
            "prøvet yoga.",
            "glemt min bryllupsdag.",
            "skrevet en sang.",
            "klædt mig ud til fastelavn som voksen.",
            "set en meteorregn.",
            "haft en kæledyrssten.",
            "været på en krydstogtrejse.",
            "købt noget fordi det var på udsalg, men ikke havde brug for det.",
            "været på en roadtrip.",
            "lært at stå på hænder.",
            "samlet på frimærker.",
            "gået på line.",
            "taget en spontan ferie.",
            "malet et portræt.",
            "været på en date med to forskellige personer på samme dag.",
            "spist is direkte fra bøtten.",
            "talt i telefon i mere end tre timer.",
            "prøvet virtual reality.",
            "skrevet et brev til mig selv.",
            "været vågen i mere end 24 timer i træk.",
            "lavet mad til mere end 10 personer.",
            "grædt til en film i biografen.",
            "besøgt et andet land alene.",
            "tabt en vigtig genstand og fundet den igen.",
            "fået en mærkelig hobby.",
            "glemt at betale en regning.",
            "talt med en fremmed på gaden.",
            "kørt en bil uden at have kørekort.",
            "været til en festival i udlandet.",
            "set en solformørkelse.",
            "været på TV uden at vide det.",
            "prøvet snorkling eller dykning.",
            "glemt at tage mit pas med på rejsen.",
            "været i et escape room.",
            "været i biografen alene."

        ],
        "mostLikelyTo": [
            "at glemme deres taske et sted",
            "til at blive fanget i en Frank Hvam situation",
            "til at sige noget pinligt til en fest",
            "til at gå forkert ind i en fremmeds bil",
            "til at forsvinde fra festen uden at sige farvel",
            "til at stå op og holde en tale uden opfordring",
            "til at skrive til sine gamle klassekammerater klokken 3 om natten",
            "til at skide i bukserne",
            "til at overdrive en historie til uigenkendelighed",
            "til at købe noget under pres fra en sælger",
            "til at falde i søvn i offentligheden",
            "til at prøve at snige sig med i et VIP-område",
            "til at spilde noget på sig selv til en vigtig begivenhed",
            "til at blive influencer",
            "til at blive millionær",
            "til at glemme en vigtig deadline",
            "til at vinde en Nobelpris",
            "til at blive berømt på internettet",
            "til at tabe sin telefon i toilettet",
            "til at bestige Mount Everest",
            "til at skrive en bestseller",
            "til at blive præsident",
            "til at opfinde noget revolutionerende",
            "til at få en pladekontrakt",
            "til at være sent på den til sit eget bryllup",
            "til at spise hele kagen selv",
            "til at blive professionel atlet",
            "til at rejse jorden rundt",
            "til at adoptere mange katte",
            "til at falde på scenen",
            "til at komme på forsiden af et magasin",
            "til at glemme sin egen fødselsdag",
            "til at blive skuespiller i Hollywood",
            "til at vinde en Oscar",
            "til at blive astronaut",
            "til at optræde i en talentshow",
            "til at blive YouTube-stjerne",
            "til at blive lærer",
            "til at starte sin egen virksomhed",
            "til at glemme en vigtig årsdag",
            "til at blive bedsteforælder først",
            "til at gå på pension tidligt",
            "til at blive veganer",
            "til at få flest børn",
            "til at vinde en dansekonkurrence",
            "til at komme for sent til arbejde",
            "til at sove igennem en brandalarm",
            "til at blive fanget i en elevator",
            "til at miste sine nøgler",
            "til at gå vild i en fremmed by",
            "til at glemme at hente børnene fra skole",
            "til at spilde kaffe på sig selv",
            "til at starte en trend",
            "til at få en tatovering på et vovet sted",
            "til at blive anholdt for en misforståelse",
            "til at vinde en konkurrence uden at prøve",
            "til at grine på et upassende tidspunkt",
            "til at snuble på vej op ad trapperne",
            "til at blive forvekslet med en berømthed",
            "til at komme til at sende en besked til den forkerte person",
            "til at miste stemmen på en koncert",
            "til at blive gift i Las Vegas",
            "til at glemme at slå mikrofonen fra under et online-møde",
            "til at købe noget, de ikke har råd til",
            "til at blive set på nationalt tv ved et uheld",
            "til at tabe sin pung på ferien",
            "til at starte en blog om madlavning",
            "til at blive en reality-tv-stjerne",
            "til at blive opdaget af en talentspejder",
            "til at flytte til et andet land",
            "til at blive kendt for sin stil",
            "til at blive chef for virksomheden",
            "til at løbe et maraton uden træning",
            "til at være med i en reklame",
            "til at være på forkert fly",
            "til at blive professionel gamer",
            "til at falde i søvn under en vigtig præsentation",
            "til at være den sidste på dansegulvet",
            "til at blive frivillig i udlandet",
            "til at lære et nyt sprog flydende",
            "til at skrive et filmmanuskript",
            "til at blive mentor for unge talenter",
            "til at eje en restaurant",
            "til at blive fotograf for et magasin",
            "til at bestige et bjerg",
            "til at løse en Rubiks terning på under et minut",
            "til at blive kendt for at opfinde en ny dans",
            "til at deltage i et maratonløb i en kostume",
            "til at blive miljøaktivist",
            "til at gå i seng før kl. 21 hver aften",
            "til at få et viralt hit på TikTok",
            "til at blive berømt kok",
            "til at skrive en klage til kommunen",
            "til at tabe sin paraply på en regnvejrsdag",
            "til at blive nævnt i avisen",
            "til at have en plante, der overlever mere end et år",
            "til at blive kendt for sin humor",
            "til at gå på en pilgrimsrejse",
            "til at deltage i en flashmob",
            "til at male et mesterværk",
            "til at vinde i en quizshow"



        ],
        "category": [
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
            "planeter",
            "jobtitler",
            "musikinstrumenter",
            "fodboldspillere",
            "bryghuse",
            "lande i Europa",
            "hovedstæder i verden",
            "farver",
            "frugter",
            "grøntsager",
            "blomster",
            "drengenavne",
            "pigenavne",
            "sange af Beatles",
            "fuglearter",
            "insekter",
            "hundeacer",
            "katteacer",
            "programmeringssprog",
            "webbrowsere",
            "sociale medieplatforme",
            "køkkenredskaber",
            "film fra Marvel-universet",
            "tv-værter",
            "popgrupper",
            "festlige højtider",
            "måneder i året",
            "dage i ugen",
            "køretøjer",
            "computermærker",
            "mobiltelefonmærker",
            "slikmærker",
            "kagearter",
            "brætspil",
            "kortspil",
            "fiskearter",
            "havdyr",
            "bjergkæder",
            "floder i verden",
            "instrumenter i et symfoniorkester",
            "berømte malere",
            "matematiske begreber",
            "videnskabelige discipliner",
            "kendte statsmænd",
            "typer af dans",
            "krybdyr",
            "kontinenter",
            "teaterstykker",
            "berømte forfattere",
            "musikfestivaler",
            "is-smage",
            "pizza-toppings",
            "verdenssprog",
            "valutaer",
            "kemiske grundstoffer",
            "bygningstyper",
            "klassiske komponister",
            "operahuse",
            "kendte fotografer",
            "cocktailtyper",
            "hobbyer",
            "sportsudstyr",
            "astronomiske objekter",
            "filosoffer",
            "lande i Asien",
            "søer i verden",
            "dinosaurarter",
            "køkkenstile",
            "bøger af J.K. Rowling",
            "emojier",
            "superhelte",
            "vinregioner",
            "jazzmusikere",
            "metalbands",
            "konditorkager",
            "slangord",
            "verdensreligioner",
            "mytologiske væsener",
            "kropsdele",
            "planter i skoven",
            "øer i Danmark",
            "kulturelle festivaler",
            "mobilapps",
            "fiktive karakterer",
            "historiske begivenheder",
            "lufthavne",
            "transportmidler",
            "madretter",
            "krydderurter",
            "parfumemærker",
            "skomærker",
            "hattetyper",
            "kaffedrikke",
            "tesorter",
            "juletraditioner",
            "løbeture",
            "franske ord"

        ],
        "bonusMessages": [
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
            "BONUS: Alle, der har en søskende, må tage en slurk",
            "BONUS: Den person med de største sko må give 2 slurke ud",
            "BONUS: Hvis du har spist en slasket kebab indenfor de sidste tre dage, tag en slurk",
            "BONUS: Personen med kortest hår må give 3 slurke ud",
            "BONUS: FÆLLESSKÅL! Sidste person, der råber ‘drik!’, skal tage en ekstra slurk",
            "BONUS: Alle med blå øjne skal tage 2 slurke",
            "BONUS: Den yngste ved bordet må give 2 slurke ud",
            "BONUS: Hvis du har på dig noget rødt, tag en slurk",
            "BONUS: Alle der har været i mere end tre lande, tager en slurk",
            "BONUS: Den sidste person der tjekkede sin telefon skal tage 2 slurke",
            "BONUS: Den højeste person må give 2 slurke ud",
            "BONUS: Hvis du har et kæledyr, tag en slurk",
            "BONUS: Alle der bærer briller eller kontaktlinser tager en slurk",
            "BONUS: Den der sidder til venstre for dig skal tage en slurk",
            "BONUS: Alle, der har en tatovering, tager 2 slurke",
            "BONUS: Hvis dit navn starter med en vokal, tag en slurk",
            "BONUS: Den der kan sige alfabetet baglæns må give 3 slurke ud",
            "BONUS: Hvis du har en Apple-enhed, tag en slurk",
            "BONUS: Den første person der kan vise en mønt, må give 2 slurke ud",
            "BONUS: Alle, der har løjet i dag, tager en slurk",
            "BONUS: Personen med den nyeste telefon tager 2 slurke",
            "BONUS: Alle med hvide sokker skal tage en slurk",
            "BONUS: Den første der rører loftet må give 2 slurke ud",
            "BONUS: Hvis du har været vågen i mere end 12 timer, tag en slurk",
            "BONUS: Alle, der ikke har spist morgenmad i dag, tager 2 slurke",
            "BONUS: Den person der senest har haft fødselsdag tager en slurk",
            "BONUS: Hvis du kan tale mere end ét sprog, tag en slurk",
            "BONUS: Alle der har taget offentlig transport i dag, tager en slurk",
            "BONUS: Den der kan fortælle en vittighed får lov at give 2 slurke ud",
            "BONUS: Hvis du har set en film i denne uge, tag en slurk",
            "BONUS: Den person med mest batteri på telefonen må give 3 slurke ud",
            "BONUS: Alle der har set en reality-tv-serie, tager en slurk",
            "BONUS: Hvis du har spist dessert i dag, tag en slurk",
            "BONUS: Den der først kan sige et palindrom får lov at give 2 slurke ud",
            "BONUS: Alle med snørebånd på skoene tager en slurk",
            "BONUS: Hvis du har været i biografen inden for den sidste måned, tag en slurk",
            "BONUS: Den der har flest nøgler på sit nøglebundt tager 2 slurke",
            "BONUS: Alle der har taget et billede i dag, tager en slurk",
            "BONUS: Den der kan lave en dyrelyd får lov at give 1 slurk ud",
            "BONUS: Hvis du er iført noget sort, tag en slurk",
            "BONUS: Den der først kan navngive fem hovedstæder må give 3 slurke ud",
            "BONUS: Alle, der har drukket kaffe i dag, tager en slurk",
            "BONUS: Den der har mest småpenge på sig tager 2 slurke",
            "BONUS: Hvis du har handlet online i dag, tag en slurk",
            "BONUS: Den første der kan nævne tre Pixar-film må give 2 slurke ud",
            "BONUS: Alle der har en piercing tager en slurk",
            "BONUS: Den der sidder nærmest døren tager 2 slurke",
            "BONUS: Hvis du har en søskende, der er yngre end dig, tag en slurk",
            "BONUS: Alle med et mellemnavn tager en slurk",
            "BONUS: Den første der kan klappe en rytme får lov at give 1 slurk ud",
            "BONUS: Hvis du har været i fitnesscenteret i dag, tag en slurk",
            "BONUS: Den person med flest apps på sin telefon tager 2 slurke",
            "BONUS: Alle der kan lide chokolade tager en slurk",
            "BONUS: Den der har det længste fornavn må give 2 slurke ud",
            "BONUS: Hvis du kan stå på ét ben i 10 sekunder, giv 1 slurk ud, ellers tag 1 slurk",
            "BONUS: Den der har det korteste efternavn tager 2 slurke",
            "BONUS: Alle der kan lide at danse tager en slurk",
            "BONUS: Den der kan nævne flest kontinenter på 10 sekunder må give 3 slurke ud",
            "BONUS: Hvis du har spist pizza inden for den sidste uge, tag en slurk",
            "BONUS: Den der først kan finde noget grønt må give 1 slurk ud",
            "BONUS: Alle der har mere end tre par sko tager en slurk",
            "BONUS: Den der sidst har læst en bog tager 2 slurke",
            "BONUS: Hvis du har været på stranden denne sommer, tag en slurk",
            "BONUS: Den der kan nævne fem dyr på under 5 sekunder må give 2 slurke ud",
            "BONUS: Alle der har været i regnvejr i dag tager en slurk",
            "BONUS: Den der kan lave den bedste dyrelyd må give 1 slurk ud",
            "BONUS: Hvis du har drukket vand i dag, tag en slurk",
            "BONUS: Alle der har en plante derhjemme tager en slurk",
            "BONUS: Den første der kan stave sit navn baglæns må give 2 slurke ud",
            "BONUS: Hvis du har taget en lur i dag, tag en slurk",
            "BONUS: Den der kan hoppe på ét ben i længst tid må give 3 slurke ud",
            "BONUS: Alle der har en noteapp på deres telefon tager en slurk",
            "BONUS: Den der har mest skærmtid på sin telefon i dag tager 2 slurke",
            "BONUS: Hvis du har brugt emojis i dag, tag en slurk",
            "BONUS: Alle der kan lide at synge i badet tager en slurk",
            "BONUS: Den der kan fortælle dagens dato uden at kigge må give 1 slurk ud",
            "BONUS: Hvis du har mere end 50 billeder på din telefon, tag en slurk"

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
