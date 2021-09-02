const questions = [
    {
        number: 0,
        text: "",
        category: ""
    },
    {
        number: 1,
        text: "Co  jsi nedávno zkusil/a a bavilo Tě to?",
        category: ""
    },
    {
        number: 2,
        text: "Na co by sis přál/a mít více času?",
        category: ""
    },
    {
        number: 3,
        text: "Při čem se cítíš doopravdy naživu?",
        category: ""
    },
    {
        number: 4,
        text: "Čeho jsi dosáhl/a, i když sis předtím myslel/a, že je to nemožné?",
        category: ""
    },
    {
        number: 5,
        text: "Co děláš jinak, než většina ostatních lidí?",
        category: ""
    },
    {
        number: 6,
        text: "Jakou dosud nejvíce spontánní věc jsi udělal/a?",
        category: ""
    },
    {
        number: 7,
        text: "Na koho v současné době nejvíc myslíš a proč?",
        category: ""
    },
    {
        number: 8,
        text: "Které 3 věci máš společné se všemi lidmi v místnosti?",
        category: ""
    },
    {
        number: 9,
        text: "Kdyby sis mohl/a vybrat ze všech lidí na světě, s kým bys nejraději šel/šla na večeři?",
        category: ""
    },
    {
        number: 10,
        text: "Opakuješ si obvykle, co řekneš, než někomu zavoláš?",
        category: ""
    },
    {
        number: 11,
        text: "Jak vypadá “dokonalý” den podle tvých představ?",
        category: ""
    },
    {
        number: 12,
        text: "Kdy sis naposledy sám/sama pro sebe zpíval/a? A kdy před někým jiným?",
        category: ""
    },
    {
        number: 13,
        text: "Představ si, že víš, že se dožiješ 90 let. Ve 30 letech si můžeš vybrat, jestli si na zbylých 60 let ponecháš tělo a vzhled nebo mysl svého 30letého já. Co si vybereš?",
        category: ""
    },
    {
        number: 14,
        text: "Máš předtuchu toho, jak bude vypadat tvoje smrt?",
        category: ""
    },
    {
        number: 15,
        text: "",
        category: ""
    },
    {
        number: 16,
        text: "Kdybys mohl/a změnit cokoliv na způsobu, jakým jsi byl/a vychováván/a, co by to bylo?",
        category: ""
    },
    {
        number: 17,
        text: "Vyhraď si 4 minuty a povyprávěj svůj životní příběh co nejpodrobněji to půjde.",
        category: ""
    },
    {
        number: 18,
        text: "Kdyby ses zítra mohl/a probudit s jednou libovolnou vlastností nebo dovedností, jaká by to byla?",
        category: ""
    },
    {
        number: 19,
        text: "Pokud bys měl/a křišťálovou kouli, která ti může říct pravdu o tvém životě, budoucnosti nebo čemkoliv jiném, co bys chtěl/a vědět?",
        category: ""
    },
    {
        number: 20,
        text: "Je něco, co už dlouho toužíš udělat? Proč jsi to ještě neudělal/a?",
        category: ""
    },
    {
        number: 21,
        text: "Co je tvůj největší životní úspěch?",
        category: ""
    },
    {
        number: 22,
        text: "Někoho se zeptej: jaké 3 věci ti na mě přijdou pozitivní?",
        category: ""
    },
    {
        number: 23,
        text: "Máš pocit, že jsi měl/a šťastnější dětství než většina ostatních lidí?",
        category: ""
    },
    {
        number: 24,
        text: "Někoho se zeptej: pokud bychom se měli stát partneři, co myslíš, že je důležité, abych o tobě věděl/a?",
        category: ""
    },
    {
        number: 25,
        text: "Kdy jsi naposledy brečel/a před jiným člověkem? A kdy zcela sám/sama?",
        category: ""
    },
    {
        number: 26,
        text: "Co je příliš závažné na to, aby se o tom vtipkovalo, pokud něco takového podle tebe vůbec existuje?",
        category: ""
    },
    {
        number: 27,
        text: "Tvůj domov, kde se nachází i veškerý tvůj majetek, začne hořet. Poté, co zachráníš své blízké a domácí mazlíčky, máš čas na to vrátit se už jen pro jednu jedinou věc. Jaká by to byla? A proč?",
        category: ""
    },
    {
        number: 28,
        text: "Pokud bys měl/a dnes večer zemřít bez možnosti jakkoliv komunikovat, čeho bys nejvíce litoval/a, že jsi někomu neřekl/a? A proč jsi to ještě neudělal/a?",
        category: ""
    },
    {
        number: 29,
        text: "Ze všech členů tvojí rodiny, čí smrt by tě nejvíce zasáhla? Proč?",
        category: ""
    },
    {
        number: 30,
        text: "Víš, že za 20 vteřin zemřeš. Jaká by byla tvá poslední slova?",
        category: ""
    },
    {
        number: 31,
        text: "Jaký je tvůj život v porovnání s tím, jaký sis ho představoval/a jako dítě?",
        category: ""
    },
    {
        number: 32,
        text: "Co myslíš, že byla největší překážka pro splnění tvých cílů?",
        category: ""
    },
    {
        number: 34,
        text: "Co považuješ za nejtěžší období ve tvém životě?",
        category: ""
    },
    {
        number: 35,
        text: "Jaký je podle tebe nejlepší a nejhorší způsob, jak někoho požádat o ruku?",
        category: ""
    },
    {
        number: 36,
        text: "Jaké jsou běžné předpoklady/domněnky, které o tobě lidé mají, ale nejsou nutně pravdivé?",
        category: ""
    },
    {
        number: 37,
        text: "Na co se těšíš, když jdeš domů?",
        category: ""
    },
    {
        number: 38,
        text: "Jak trávíš noci, kdy nemůžeš spát?",
        category: ""
    },
    {
        number: 39,
        text: "Představ si, že tě pustili po 10 letech z vězení.  Jak bys strávil/a svůj první den na svobodě?",
        category: ""
    },
    {
        number: 40,
        text: "Jaký je společný znak všech, se kterými jsi chodil/a?",
        category: ""
    },
    {
        number: 41,
        text: "Kde jdeš a co děláš, když potřebuješ obnovit energii?",
        category: ""
    },
    {
        number: 42,
        text: "Pokud by ses dozvěděl/a, že za rok oslepneš, co bys chtěl/a vidět?",
        category: ""
    },
    {
        number: 43,
        text: "Zeptej se jednoho člověka v místnosti: Jaký máš na mě pohled/názor?",
        category: ""
    },
    {
        number: 44,
        text: "Jakou emoci cítíš nejčastěji?",
        category: ""
    },
    {
        number: 45,
        text: "Po čem máš pocit, že jsi milován/a?",
        category: ""
    },
    {
        number: 46,
        text: "Jak chceš, aby se lidí cítili, když jsou s tebou?",
        category: ""
    },
    {
        number: 47,
        text: "Jaký je tvůj sen / přání, které jsi nikdy nevyslovil nahlas?",
        category: ""
    },
    {
        number: 48,
        text: "O čem nejčastěji lžeš?",
        category: ""
    },
    {
        number: 49,
        text: "Pokud by sis musel/a změnit jméno, jaké bys chtěl/a?",
        category: ""
    },
    {
        number: 50,
        text: "Kdy se cítíš nejvíce zranitelný/á?",
        category: ""
    },
    {
        number: 51,
        text: "Zeptej se jednoho člověka v místnosti: co myslíš, že mě rozesměje?",
        category: ""
    },
    {
        number: 52,
        text: "Je pro tebe jednoduché mluvit k sobě laskavě a mít se rád/a?",
        category: ""
    },
    {
        number: 53,
        text: "Co tě na lidech nejvíce štve?",
        category: ""
    },
    {
        number: 54,
        text: "Z čeho máš největší strach?",
        category: ""
    },
    {
        number: 55,
        text: "Co je pro tebe z těchto hodnot nejdůležitější - peníze, uznání, nezávislost, čestnost/poctivost?",
        category: ""
    },
    {
        number: 56,
        text: "Jakou jsi měl/a kdy přezdívku a díky čemu jsi dostal/a?",
        category: ""
    },
    {
        number: 57,
        text: "Jak bys chtěl/a, aby tvůj život vypadal za 5 let? Jak by vypadal tvůj typický den?",
        category: ""
    },
    {
        number: 58,
        text: "Chtěl/a bys raději život s partnerem (ale bez dítěte), nebo s dítětem (ale bez partnera)?",
        category: ""
    },
    {
        number: 59,
        text: "Jaký zážitek nejvíce ovlivnil tvůj život?",
        category: ""
    },
    {
        number: 60,
        text: "Jaký máš vztah se svými rodiči? Jak se liší od vztahu v dětství/dospívání?",
        category: ""
    },
    {
        number: 61,
        text: "Jak by tě popsal tvůj nejlepší přítel?",
        category: ""
    },
    {
        number: 62,
        text: "Následuješ častěji své srdce nebo rozum?",
        category: ""
    },
    {
        number: 63,
        text: "Preferuješ jít na rande s jedním člověkem - s tím, že to může dopadnout jakkoli - nebo jít na rande postupně s více lidmi a až pak případně rozvíjet vztah s člověkem, který ti sedí nejvíce?",
        category: ""
    },
    {
        number: 64,
        text: "Jakou jednu věc bys chtěl/a změnit na dnešku?",
        category: ""
    },
    {
        number: 65,
        text: "Jaká je ta nejšílenější věc, kterou jsi s někým udělal/a?",
        category: ""
    },
    {
        number: 66,
        text: "Co tě naučil vztah s člověkem, který už zanikl?",
        category: ""
    },
    {
        number: 67,
        text: "Jaká je nejlepší rada, kterou Ti kdo dal?",
        category: ""
    },
    {
        number: 68,
        text: "Jaká je tvá oblíbená vzpomínka z dětství?",
        category: ""
    },
    {
        number: 69,
        text: "Co děláš, když se naštveš?",
        category: ""
    },
    {
        number: 70,
        text: "Jaký je tvůj oblíbený romantický moment?",
        category: ""
    },
    {
        number: 71,
        text: "Co by sis přál/a, aby o tobě lidé věděli?",
        category: ""
    },
    {
        number: 72,
        text: "Jakou jednu věc by sis přál/a na sobě změnit?",
        category: ""
    },
    {
        number: 73,
        text: "Odpustil/a bys partnerovi, kdyby tě podvedl?",
        category: ""
    },
    {
        number: 74,
        text: "Jaký/á je tvůj oblíbený film/kniha a čím to, že tě tak oslovil/a?",
        category: ""
    },
    {
        number: 75,
        text: "Považuješ se za introverta nebo extroverta? Na základě čeho?",
        category: ""
    },
    {
        number: 76,
        text: "Považuješ se za introverta nebo extroverta? Na základě čeho?",
        category: ""
    },
    {
        number: 77,
        text: "Jak se cítíš ohledně sdílení svých hesel s partnerem?",
        category: ""
    },
    {
        number: 78,
        text: "Jak smýšlíš ohledně svých nejlepších přátelích opačného pohlaví?",
        category: ""
    },
    {
        number: 79,
        text: 'Kdybys hledal/a partnera přes onlinu seznamku, co bys napsal/a do políčka "mé požadavky na budoucího partnera (přes to nejede vlak!):"',
        category: ""
    },
    {
        number: 80,
        text: "Jaké jsou obvykle tvé první myšlenky po probuzení?",
        category: ""
    },
    {
        number: 81,
        text: "Zapochyboval jsi někdy o své příčetnosti nebo že jsi duševně zcela zdravý/á?",
        category: ""
    },
    {
        number: 82,
        text: "Z čeho, co jsi kdy řekl/a nebo udělal/a, se pořád ošíváš, jen na to pomyslíš?",
        category: ""
    },
    {
        number: 83,
        text: "Na co se zaměříš jako první po tom, co přijdeš k někomu do bytu/domu?",
        category: ""
    },
    {
        number: 84,
        text: "Jaké nejdivnější jídlo máš rád/a?",
        category: ""
    },
    {
        number: 85,
        text: "Jakou písničku jsi poslouchal/a, když jsi byl zamilovaný/á?",
        category: ""
    },
    {
        number: 86,
        text: "Kdy jsi zažil největší fyzickou bolest?",
        category: ""
    },
    {
        number: 87,
        text: "Jaký je tvůj nejhorší zážitek z dětství?",
        category: ""
    },
    {
        number: 88,
        text: "Jaký moderní trend tě štve nejvíce?",
        category: ""
    },
    {
        number: 89,
        text: "Jaký/á jsi byl/a na základní škole?",
        category: ""
    },
    {
        number: 90,
        text: "Kdy jsi někoho nejvíce napálil?",
        category: ""
    },
    {
        number: 91,
        text: "Kdy jsi někoho nejvíce napálil?",
        category: ""
    },
    {
        number: 92,
        text: "Kdy naposledy ses dostal/a do trapné situace?",
        category: ""
    },
    {
        number: 93,
        text: "Jaký nový návyk jsi za poslední rok zavedl do svého života?",
        category: ""
    },
    {
        number: 94,
        text: "",
        category: ""
    },
    {
        number: 95,
        text: "Kdybys mohl vytvořit a spravovat svůj nový stát, jaké by to tam bylo?",
        category: ""
    },
    {
        number: 96,
        text: "Chceš, aby tvoje děti byly takové jako jsi ty?",
        category: ""
    },
    {
        number: 97,
        text: "Jaká je tvoje zítřejší priorita číslo 1?",
        category: ""
    },
    {
        number: 98,
        text: "Co máš na sobě rád/a?",
        category: ""
    },
    {
        number: 99,
        text: "Po čem se ti nejčastěji stává, že změníš názor?",
        category: ""
    },
    {
        number: 100,
        text: 'Jaký spolužák/spolužačka byl na střední nejvíce "cool" a kde je teď?',
        category: ""
    },
    {
        number: 101,
        text: "Stalo se Ti, že jsi někoho potkal/a po letech a naprosto Tě překvapilo, jak teď žije?",
        category: ""
    },
    {
        number: 102,
        text: "Kdy naposledy jsi měl/a záchvat smíchu?",
        category: ""
    },
    {
        number: 103,
        text: "Co je nejjednodušší způsob, jak někdo může přijít o tvou důvěru?",
        category: ""
    },
    {
        number: 104,
        text: "Jak bys změnil způsob, jakým jsou trestání zločinci?",
        category: ""
    },
    {
        number: 105,
        text: "Co by o tobě zjistil detektiv jen z prohlídky tvého pokoje?",
        category: ""
    },
    {
        number: 106,
        text: "Šel/šla bys raději na doživotí do vězení za vraždu, kterou jsi nespáchal/a, nebo někoho zabil/a a byl/a na svobodě?",
        category: ""
    },
    {
        number: 107,
        text: "Jak bys utratil/a 20 miliónů v případě, že bys nemohl/a koupit nic pro sebe ani svou rodinu?",
        category: ""
    },
    {
        number: 108,
        text: "Kdybychom uvízli na pustém ostrově, jakou roli by každý z nás zastal?",
        category: ""
    },
    {
        number: 109,
        text: "Zeptej se jednoho člověka v místnosti: v čem jsem podobný tvé matce/otci?",
        category: ""
    },
    {
        number: 110,
        text: "Věříš, že se člověk musí změnit před tím, než mu odpustíš?",
        category: ""
    },
    {
        number: 111,
        text: "Kdy ses cítil jako outsider?",
        category: ""
    },
    {
        number: 112,
        text: "Máš pocit, že sis během dětství musel zasloužit lásku svých rodičů?",
        category: ""
    },
    {
        number: 113,
        text: "Kdyby měl být vydán zákon, který by ukládal za povinnost projít testem znalostí a dovedností, než někdo začne vychovávat dítě, podpořil/a bys ho?",
        category: ""
    },
    {
        number: 114,
        text: "Zeptej se jednoho člověka v místnosti: kdybys měl stroj času, kde bys mě vzal/a se podívat?",
        category: ""
    },
    {
        number: 115,
        text: "Jak odlišné by byly životy tvých nejlepších přátel, kdyby tě nikdy nepotkali?",
        category: ""
    },
    {
        number: 116,
        text: "V jakých ohledech jsi zůstal/a za posledních 10 let úplně stejný/á?",
        category: ""
    },
    {
        number: 117,
        text: "Zeptej se jednoho člověka v místnosti: kdybys ztratil/a paměť, jakým třem lidem bych měl/a zavolat, aby ti pomohli si vzpomenout na minulost?",
        category: ""
    },
    {
        number: 118,
        text: "Jak si představuješ svou denní rutinu po tom, co budeš v důchodu?",
        category: ""
    },
    {
        number: 119,
        text: "Co je zaručený recept na to, abyste se pohádali s rodiči?",
        category: ""
    },
    {
        number: 120,
        text: "Zeptej se jednoho člověka v místnosti: jaký jsi měl/a ze mě dojem, když jsme se poprvé potkali?",
        category: ""
    },
     {
        number: 121,
        text: "Co je tvoje nejcennější vzpomínka?",
        category: ""
    },
]


// vygeneruje arrae randoms - 121 random čísel od 1-121
function myRandomInts(quantity, max){
  const set = new Set()
  while(set.size < quantity) {
    set.add(Math.floor(Math.random() * max) + 1)
  }
  const randoms = Array.from(set);
//   console.log(randoms);
  return randoms
}

let policko = myRandomInts(questions.length-1, questions.length-1) ;
// console.log(policko);


const cardText = document.querySelector(".card-text");
const nextBtn = document.querySelector(".next-btn");

let cislo = 0;

nextBtn.addEventListener("click",()=>{
if(cislo<(questions.length-1)){
    let index = policko[cislo];
    // console.log("index je: " + index);
    cardText.textContent = questions[index].text;
    cislo++;
    // console.log("číslo je: " + cislo);
}
else{
    cardText.textContent = "DOŠEL JSI NA KONEC BALÍČKU.";   
    }

    numberInfo()

})

//shuffle button
const shuffle = document.querySelector(".shuffle");
shuffle.addEventListener("click",()=>{
    cislo = 0;
policko = myRandomInts(questions.length-1, questions.length-1) ;
numberInfo()


// hourglass
const card = document.querySelector(".card");
cardText.innerHTML = `
<article class="hourglass-container">          
        <div class="hourglass"> 
        </div>
    </article>
`
setTimeout(() => {
    cardText.innerHTML = `<span style="font-size:8rem;">?</span>`;
}, 2100);



//question mark on card
// cardText.innerHTML = `<span style="font-size:8rem;">?</span>`;
})

//card number info
const cardInfo = document.querySelector(".card-number");
window.addEventListener("DOMContentLoaded",()=>{
numberInfo()
})

function numberInfo(){
    cardInfo.innerHTML = `${cislo} / ${questions.length + 30}`;
}


