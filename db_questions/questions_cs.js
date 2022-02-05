let questions = [
  {
    number: 0,
    text: "Co je tvoje nejcennější vzpomínka?",
    category: "",
  },
  {
    number: 1,
    text: "Co  jsi nedávno zkusil/a a bavilo Tě to?",
    category: "",
  },
  {
    number: 0,
    text: "Co je to nejméně užitečné know-how, které máš?",
    category: "",
  },
  {
    number: 2,
    text: "Na co by sis přál/a mít více času?",
    category: "",
  },
  {
    number: 3,
    text: "Při čem se cítíš doopravdy naživu?",
    category: "",
  },
  {
    number: 4,
    text: "Čeho jsi dosáhl/a, i když sis předtím myslel/a, že je to nemožné?",
    category: "",
  },
  {
    number: 5,
    text: "Co děláš jinak, než většina ostatních lidí?",
    category: "",
  },
  {
    number: 6,
    text: "Jakou dosud nejvíce spontánní věc jsi udělal/a?",
    category: "",
  },
  {
    number: 7,
    text: "Na koho v současné době nejvíce myslíš a proč?",
    category: "",
  },
  {
    number: 8,
    text: "Které 3 věci máš společné se všemi lidmi v místnosti?",
    category: "",
  },
  {
    number: 9,
    text: "Kdyby sis mohl/a vybrat ze všech lidí na světě, s kým bys nejraději šel/šla na večeři?",
    category: "",
  },

  {
    number: 11,
    text: "Jak vypadá “dokonalý” den podle tvých představ?",
    category: "",
  },
  {
    number: 12,
    text: "Kdy sis naposledy sám/sama pro sebe zpíval/a? A kdy před někým jiným?",
    category: "",
  },
  {
    number: 14,
    text: "Máš předtuchu toho, jak bude vypadat tvoje smrt?",
    category: "",
  },
  {
    number: 15,
    text: "Zbil tě někdy někdo (kromě rodičů)?",
    category: "",
  },
  {
    number: 16,
    text: "Kdybys mohl/a změnit cokoliv na způsobu, jakým jsi byl/a vychováván/a, co by to bylo?",
    category: "",
  },
  {
    number: 17,
    text: "Vyhraď si 4 minuty a povyprávěj svůj životní příběh co nejpodrobněji to půjde.",
    category: "",
  },
  {
    number: 18,
    text: "Kdyby ses zítra mohl/a probudit s jednou libovolnou vlastností nebo dovedností, jaká by to byla?",
    category: "",
  },
  {
    number: 19,
    text: "Pokud bys měl/a křišťálovou kouli, která ti může říct pravdu o tvém životě, budoucnosti nebo čemkoliv jiném, co bys chtěl/a vědět?",
    category: "",
  },
  {
    number: 20,
    text: "Je něco, co už dlouho toužíš udělat? Proč jsi to ještě neudělal/a?",
    category: "",
  },
  {
    number: 21,
    text: "Co je tvůj největší životní úspěch?",
    category: "",
  },
  {
    number: 22,
    text: "Někoho se zeptej: jaké 3 věci ti na mě přijdou pozitivní?",
    category: "",
  },
  {
    number: 23,
    text: "Máš pocit, že jsi měl/a šťastnější dětství než většina ostatních lidí?",
    category: "",
  },
  {
    number: 24,
    text: "Někoho se zeptej: pokud bychom se měli stát partnery, co myslíš, že je důležité, abych o tobě věděl/a?",
    category: "",
  },
  {
    number: 25,
    text: "Kdy jsi naposledy brečel/a před jiným člověkem? A kdy zcela sám/sama?",
    category: "",
  },
  {
    number: 26,
    text: "Co je příliš závažné na to, aby se o tom vtipkovalo, pokud něco takového podle tebe existuje?",
    category: "",
  },
  {
    number: 27,
    text: "Tvůj domov, kde se nachází i veškerý tvůj majetek, začne hořet. Poté, co zachráníš své blízké a domácí mazlíčky, máš čas na to vrátit se už jen pro jednu jedinou věc. Jaká by to byla? A proč?",
    category: "",
  },
  {
    number: 28,
    text: "Pokud bys měl/a dnes večer zemřít bez možnosti jakkoliv komunikovat, čeho bys nejvíce litoval/a, že jsi někomu neřekl/a? A proč jsi to ještě neudělal/a?",
    category: "",
  },
  {
    number: 29,
    text: "Ze všech členů tvojí rodiny, čí smrt by tě nejvíce zasáhla? Proč?",
    category: "",
  },
  {
    number: 30,
    text: "Víš, že za 20 vteřin zemřeš. Jaká by byla tvá poslední slova?",
    category: "",
  },
  {
    number: 31,
    text: "Jaký je tvůj život v porovnání s tím, jaký sis ho představoval/a jako dítě?",
    category: "",
  },
  {
    number: 32,
    text: "Co myslíš, že byla největší překážka pro splnění tvých cílů?",
    category: "",
  },
  {
    number: 34,
    text: "Co považuješ za nejtěžší období ve tvém životě?",
    category: "",
  },
  {
    number: 35,
    text: "Jaký je podle tebe nejlepší a nejhorší způsob, jak někoho požádat o ruku?",
    category: "",
  },
  {
    number: 36,
    text: "Jaké jsou běžné předpoklady/domněnky, které o tobě lidé mají, ale nejsou nutně pravdivé?",
    category: "",
  },
  {
    number: 37,
    text: "Na co se těšíš, když jdeš domů?",
    category: "",
  },
  {
    number: 38,
    text: "Jak trávíš noci, kdy nemůžeš spát?",
    category: "",
  },
  {
    number: 39,
    text: "Představ si, že tě pustili po 10 letech z vězení. Jak bys strávil/a svůj první den na svobodě?",
    category: "",
  },
  {
    number: 40,
    text: "Jaký je společný znak všech, se kterými jsi chodil/a?",
    category: "",
  },
  {
    number: 41,
    text: "Kde jdeš a co děláš, když potřebuješ obnovit energii?",
    category: "",
  },
  {
    number: 42,
    text: "Pokud by ses dozvěděl/a, že za rok oslepneš, co bys chtěl/a vidět?",
    category: "",
  },
  {
    number: 43,
    text: "Zeptej se jednoho člověka v místnosti: Jaký máš na mě pohled/názor?",
    category: "",
  },
  {
    number: 44,
    text: "Jakou emoci cítíš nejčastěji?",
    category: "",
  },
  {
    number: 45,
    text: "Po čem máš pocit, že jsi milován/a?",
    category: "",
  },
  {
    number: 46,
    text: "Jak chceš, aby se lidí cítili, když jsou s tebou?",
    category: "",
  },
  {
    number: 47,
    text: "Jaký je tvůj sen / přání, které jsi nikdy nevyslovil nahlas?",
    category: "",
  },
  {
    number: 48,
    text: "O čem nejčastěji lžeš?",
    category: "",
  },
  {
    number: 49,
    text: "Pokud by sis musel/a změnit jméno, jaké bys chtěl/a?",
    category: "",
  },
  {
    number: 50,
    text: "Kdy se cítíš nejvíce zranitelný/á?",
    category: "",
  },
  {
    number: 51,
    text: "Co tě obvykle zaručeně rozesměje?",
    category: "",
  },
  {
    number: 52,
    text: "Je pro tebe jednoduché mluvit k sobě laskavě a mít se rád/a?",
    category: "",
  },
  {
    number: 53,
    text: "Co tě na lidech nejvíce štve?",
    category: "",
  },
  {
    number: 54,
    text: "Z čeho máš největší strach?",
    category: "",
  },
  {
    number: 55,
    text: "Co je pro tebe z těchto hodnot nejdůležitější - peníze, uznání, nezávislost, čest?",
    category: "",
  },
  {
    number: 56,
    text: "Jakou jsi měl/a kdy přezdívku a díky čemu jsi dostal/a?",
    category: "",
  },
  {
    number: 57,
    text: "Jak bys chtěl/a, aby tvůj život vypadal za 5 let? Jak by vypadal tvůj typický den?",
    category: "",
  },
  {
    number: 59,
    text: "Jaký zážitek nejvíce ovlivnil tvůj život?",
    category: "",
  },
  {
    number: 60,
    text: "Jaký máš vztah se svými rodiči? Jak se liší od vztahu v dětství/dospívání?",
    category: "",
  },
  {
    number: 61,
    text: "Jak by tě popsal tvůj nejlepší přítel?",
    category: "",
  },
  {
    number: 62,
    text: "Následuješ častěji své srdce nebo rozum?",
    category: "",
  },
  {
    number: 63,
    text: "Preferuješ jít na rande s jedním člověkem - s tím, že to může dopadnout jakkoli - nebo jít na rande postupně s více lidmi a až pak případně rozvíjet vztah s člověkem, který ti sedí nejvíce?",
    category: "",
  },
  {
    number: 64,
    text: "Jakou jednu věc bys chtěl/a změnit na dnešku?",
    category: "",
  },
  {
    number: 65,
    text: "Jaká je ta nejšílenější věc, kterou jsi s někým udělal/a?",
    category: "",
  },
  {
    number: 66,
    text: "Co tě naučil vztah s člověkem, který už zanikl?",
    category: "",
  },
  {
    number: 67,
    text: "Jaká je nejlepší rada, kterou Ti kdo dal?",
    category: "",
  },
  {
    number: 68,
    text: "Jaká je tvá oblíbená vzpomínka z dětství?",
    category: "",
  },
  {
    number: 69,
    text: "Co děláš, když se naštveš?",
    category: "",
  },
  {
    number: 70,
    text: "Jaký je tvůj oblíbený romantický moment?",
    category: "",
  },
  {
    number: 71,
    text: "Co by sis přál/a, aby o tobě lidé věděli?",
    category: "",
  },
  {
    number: 72,
    text: "Jakou jednu věc by sis přál/a na sobě změnit?",
    category: "",
  },
  {
    number: 73,
    text: "Odpustil/a bys partnerovi, kdyby tě podvedl?",
    category: "",
  },
  {
    number: 74,
    text: "Jaký/á je tvůj oblíbený film/kniha a čím to, že tě tak oslovil/a?",
    category: "",
  },
  {
    number: 75,
    text: "Považuješ se za introverta nebo extroverta? Na základě čeho?",
    category: "",
  },
  {
    number: 77,
    text: "Jak se cítíš ohledně sdílení svých hesel (k mobilu, cloudu, emailu atd.) s partnerem?",
    category: "",
  },
  {
    number: 78,
    text: "Jak bereš své nejlepší přátele opačného pohlaví?",
    category: "",
  },
  {
    number: 79,
    text: 'Kdybys hledal/a partnera přes onlinu seznamku, co bys napsal/a do políčka "mé požadavky na budoucího partnera (přes to nejede vlak!):"',
    category: "",
  },
  {
    number: 80,
    text: "Jaké jsou obvykle tvé první myšlenky po probuzení?",
    category: "",
  },
  {
    number: 81,
    text: "Zapochyboval jsi někdy o své příčetnosti nebo že jsi duševně zcela zdravý/á?",
    category: "",
  },
  {
    number: 82,
    text: "Z čeho, co jsi kdy řekl/a nebo udělal/a, se pořád ošíváš, jen na to pomyslíš?",
    category: "",
  },
  {
    number: 83,
    text: "Na co se zaměříš jako první po tom, co přijdeš k někomu do bytu/domu?",
    category: "",
  },
  {
    number: 85,
    text: "Jakou písničku jsi poslouchal/a, když jsi byl zamilovaný/á?",
    category: "",
  },
  {
    number: 86,
    text: "Kdy jsi zažil největší fyzickou bolest?",
    category: "",
  },
  {
    number: 87,
    text: "Jaký je tvůj nejhorší zážitek z dětství?",
    category: "",
  },
  {
    number: 88,
    text: "Jaký moderní trend tě štve nejvíce?",
    category: "",
  },
  {
    number: 89,
    text: "Jaký/á jsi byl/a na základní škole?",
    category: "",
  },
  {
    number: 90,
    text: "Kdy jsi někoho nejvíce napálil?",
    category: "",
  },
  {
    number: 92,
    text: "Kdy naposledy ses dostal/a do trapné situace?",
    category: "",
  },
  {
    number: 93,
    text: "Jaký nový návyk jsi za poslední rok zavedl do svého života?",
    category: "",
  },
  {
    number: 94,
    text: "Kdy jsi naposledy předstíral, že jsi nemocný/á?",
    category: "",
  },
  {
    number: 95,
    text: "Kdybys mohl vytvořit a spravovat svůj nový stát, jaké by to tam bylo?",
    category: "",
  },
  {
    number: 96,
    text: "Chceš, aby tvoje děti byly takové jako jsi ty?",
    category: "",
  },
  {
    number: 97,
    text: "Jaká je tvoje zítřejší priorita číslo 1?",
    category: "",
  },
  {
    number: 98,
    text: "Co máš na sobě rád/a?",
    category: "",
  },
  {
    number: 99,
    text: "Po čem se ti nejčastěji stává, že změníš názor?",
    category: "",
  },
  {
    number: 100,
    text: 'Jaký spolužák/spolužačka byl na střední nejvíce "cool" a kde je teď?',
    category: "",
  },
  {
    number: 101,
    text: "Stalo se Ti, že jsi někoho potkal/a po letech a naprosto Tě překvapilo, jak teď žije?",
    category: "",
  },
  {
    number: 102,
    text: "Kdy naposledy jsi měl/a záchvat smíchu?",
    category: "",
  },
  {
    number: 103,
    text: "Co je nejjednodušší způsob, jak někdo může přijít o tvou důvěru?",
    category: "",
  },
  {
    number: 104,
    text: "Jak bys změnil způsob, jakým jsou trestání zločinci?",
    category: "",
  },
  {
    number: 105,
    text: "Co se dá o tobě zjistit z prohlídky tvého pokoje?",
    category: "",
  },

  {
    number: 110,
    text: "Věříš, že se člověk musí změnit před tím, než mu odpustíš?",
    category: "",
  },
  {
    number: 111,
    text: "Kdy ses cítil jako outsider?",
    category: "",
  },
  {
    number: 112,
    text: "Máš pocit, že sis během dětství musel zasloužit lásku svých rodičů?",
    category: "",
  },
  {
    number: 115,
    text: "Jak odlišné by byly životy tvých nejlepších přátel, kdyby tě nikdy nepotkali?",
    category: "",
  },
  {
    number: 116,
    text: "V jakých ohledech jsi zůstal/a za posledních 10 let úplně stejný/á?",
    category: "",
  },
  {
    number: 117,
    text: "Kdybys ztratil/a paměť, jací tři lidé by ti pomohli si vzpomenout na nejvíc ze své minulosti?",
    category: "",
  },
  {
    number: 118,
    text: "Jak si představuješ svou denní rutinu po tom, co budeš v důchodu?",
    category: "",
  },
  {
    number: 119,
    text: "Co je zaručený recept na to, abyste se pohádali s rodiči?",
    category: "",
  },
  {
    number: 120,
    text: "Zeptej se jednoho člověka v místnosti: jaký jsi měl/a ze mě dojem, když jsme se poprvé potkali?",
    category: "",
  },
  {
    number: 121,
    text: "Jaký je tvůj rekord v počtu neprospaných hodin a kdy se to stalo?",
    category: "",
  },
  {
    number: 122,
    text: "Tvůj současný život je jen alternativní budoucnost. Ve skutečnosti ti je patnáct. Co bys řekl/a svému patnáctiletému já, kdybys měl/a tu možnost?",
    category: "",
  },
  {
    number: 123,
    text: "Jaká je tvoje nejméně oblíbená vzpomínka ze školy?",
    category: "",
  },
  {
    number: 124,
    text: "Kdy a jak jsi poprvé narazil na myšlenku posmrtného života?",
    category: "",
  },
  {
    number: 125,
    text: "Kdybys měl/a každou noc lucidní sen, o čem by sis nechal/a zdát?",
    category: "",
  },
  {
    number: 126,
    text: "Co z toho, co vyžaduješ po někom jiném, sám neděláš?",
    category: "",
  },
  {
    number: 128,
    text: "Pokud by ses mohl/a zeptat svého já z roku 2050 na jedinou otázku, jaká by to byla?",
    category: "",
  },
  {
    number: 130,
    text: "Miluješ pořád někoho, do koho jsi byl zamilovaný v minulosti?",
    category: "",
  },
  {
    number: 131,
    text: "Zlomil jsi někomu srdce?",
    category: "",
  },
  {
    number: 133,
    text: "Jaké je tvoje oblíbené meme?",
    category: "",
  },
  {
    number: 134,
    text: "Jakou mobilní aplikaci používáš nejčastěji?",
    category: "",
  },
  {
    number: 135,
    text: "Stříhal/a sis někdy sám/sama vlasy?",
    category: "",
  },
  {
    number: 136,
    text: "Dal/a jsi někdy někomu schválně špatnou radu?",
    category: "",
  },
  {
    number: 137,
    text: "Plánuješ někomu něco říct až za několik nebo více let? Proč mu/jí to neřekneš už teď?",
    category: "",
  },
  {
    number: 138,
    text: "Popral ses někdy s někým? S kým a kvůli čemu?",
    category: "",
  },
];

let poznavaci_ = [
  {
    number: 0,
    text: "Co je tvoje nejcennější vzpomínka?",
    category: "",
  },
  {
    number: 1,
    text: "Co  jsi nedávno zkusil/a a bavilo Tě to?",
    category: "",
  },
  {
    number: 0,
    text: "Co je to nejméně užitečné know-how, které máš?",
    category: "",
  },
  {
    number: 2,
    text: "Na co by sis přál/a mít více času?",
    category: "",
  },
  {
    number: 3,
    text: "Při čem se cítíš doopravdy naživu?",
    category: "",
  },
  {
    number: 4,
    text: "Čeho jsi dosáhl/a, i když sis předtím myslel/a, že je to nemožné?",
    category: "",
  },
  {
    number: 5,
    text: "Co děláš jinak, než většina ostatních lidí?",
    category: "",
  },
  {
    number: 6,
    text: "Jakou dosud nejvíce spontánní věc jsi udělal/a?",
    category: "",
  },
  {
    number: 7,
    text: "Na koho v současné době nejvíce myslíš a proč?",
    category: "",
  },
  {
    number: 8,
    text: "Které 3 věci máš společné se všemi lidmi v místnosti?",
    category: "",
  },
  {
    number: 9,
    text: "Kdyby sis mohl/a vybrat ze všech lidí na světě, s kým bys nejraději šel/šla na večeři?",
    category: "",
  },

  {
    number: 11,
    text: "Jak vypadá “dokonalý” den podle tvých představ?",
    category: "",
  },
  {
    number: 12,
    text: "Kdy sis naposledy sám/sama pro sebe zpíval/a? A kdy před někým jiným?",
    category: "",
  },
  {
    number: 14,
    text: "Máš předtuchu toho, jak bude vypadat tvoje smrt?",
    category: "",
  },
  {
    number: 15,
    text: "Zbil tě někdy někdo (kromě rodičů)?",
    category: "",
  },
  {
    number: 16,
    text: "Kdybys mohl/a změnit cokoliv na způsobu, jakým jsi byl/a vychováván/a, co by to bylo?",
    category: "",
  },
  {
    number: 17,
    text: "Vyhraď si 4 minuty a povyprávěj svůj životní příběh co nejpodrobněji to půjde.",
    category: "",
  },
  {
    number: 18,
    text: "Kdyby ses zítra mohl/a probudit s jednou libovolnou vlastností nebo dovedností, jaká by to byla?",
    category: "",
  },
  {
    number: 19,
    text: "Pokud bys měl/a křišťálovou kouli, která ti může říct pravdu o tvém životě, budoucnosti nebo čemkoliv jiném, co bys chtěl/a vědět?",
    category: "",
  },
  {
    number: 20,
    text: "Je něco, co už dlouho toužíš udělat? Proč jsi to ještě neudělal/a?",
    category: "",
  },
  {
    number: 21,
    text: "Co je tvůj největší životní úspěch?",
    category: "",
  },
  {
    number: 22,
    text: "Někoho se zeptej: jaké 3 věci ti na mě přijdou pozitivní?",
    category: "",
  },
  {
    number: 23,
    text: "Máš pocit, že jsi měl/a šťastnější dětství než většina ostatních lidí?",
    category: "",
  },
  {
    number: 24,
    text: "Někoho se zeptej: pokud bychom se měli stát partnery, co myslíš, že je důležité, abych o tobě věděl/a?",
    category: "",
  },
  {
    number: 25,
    text: "Kdy jsi naposledy brečel/a před jiným člověkem? A kdy zcela sám/sama?",
    category: "",
  },
  {
    number: 26,
    text: "Co je příliš závažné na to, aby se o tom vtipkovalo, pokud něco takového podle tebe existuje?",
    category: "",
  },
  {
    number: 27,
    text: "Tvůj domov, kde se nachází i veškerý tvůj majetek, začne hořet. Poté, co zachráníš své blízké a domácí mazlíčky, máš čas na to vrátit se už jen pro jednu jedinou věc. Jaká by to byla? A proč?",
    category: "",
  },
  {
    number: 28,
    text: "Pokud bys měl/a dnes večer zemřít bez možnosti jakkoliv komunikovat, čeho bys nejvíce litoval/a, že jsi někomu neřekl/a? A proč jsi to ještě neudělal/a?",
    category: "",
  },
  {
    number: 29,
    text: "Ze všech členů tvojí rodiny, čí smrt by tě nejvíce zasáhla? Proč?",
    category: "",
  },
  {
    number: 30,
    text: "Víš, že za 20 vteřin zemřeš. Jaká by byla tvá poslední slova?",
    category: "",
  },
  {
    number: 31,
    text: "Jaký je tvůj život v porovnání s tím, jaký sis ho představoval/a jako dítě?",
    category: "",
  },
  {
    number: 32,
    text: "Co myslíš, že byla největší překážka pro splnění tvých cílů?",
    category: "",
  },
  {
    number: 34,
    text: "Co považuješ za nejtěžší období ve tvém životě?",
    category: "",
  },
  {
    number: 35,
    text: "Jaký je podle tebe nejlepší a nejhorší způsob, jak někoho požádat o ruku?",
    category: "",
  },
  {
    number: 36,
    text: "Jaké jsou běžné předpoklady/domněnky, které o tobě lidé mají, ale nejsou nutně pravdivé?",
    category: "",
  },
  {
    number: 37,
    text: "Na co se těšíš, když jdeš domů?",
    category: "",
  },
  {
    number: 38,
    text: "Jak trávíš noci, kdy nemůžeš spát?",
    category: "",
  },
  {
    number: 39,
    text: "Představ si, že tě pustili po 10 letech z vězení. Jak bys strávil/a svůj první den na svobodě?",
    category: "",
  },
  {
    number: 40,
    text: "Jaký je společný znak všech, se kterými jsi chodil/a?",
    category: "",
  },
  {
    number: 41,
    text: "Kde jdeš a co děláš, když potřebuješ obnovit energii?",
    category: "",
  },
  {
    number: 42,
    text: "Pokud by ses dozvěděl/a, že za rok oslepneš, co bys chtěl/a vidět?",
    category: "",
  },
  {
    number: 43,
    text: "Zeptej se jednoho člověka v místnosti: Jaký máš na mě pohled/názor?",
    category: "",
  },
  {
    number: 44,
    text: "Jakou emoci cítíš nejčastěji?",
    category: "",
  },
  {
    number: 45,
    text: "Po čem máš pocit, že jsi milován/a?",
    category: "",
  },
  {
    number: 46,
    text: "Jak chceš, aby se lidí cítili, když jsou s tebou?",
    category: "",
  },
  {
    number: 47,
    text: "Jaký je tvůj sen / přání, které jsi nikdy nevyslovil nahlas?",
    category: "",
  },
  {
    number: 48,
    text: "O čem nejčastěji lžeš?",
    category: "",
  },
  {
    number: 49,
    text: "Pokud by sis musel/a změnit jméno, jaké bys chtěl/a?",
    category: "",
  },
  {
    number: 50,
    text: "Kdy se cítíš nejvíce zranitelný/á?",
    category: "",
  },
  {
    number: 51,
    text: "Co tě obvykle zaručeně rozesměje?",
    category: "",
  },
  {
    number: 52,
    text: "Je pro tebe jednoduché mluvit k sobě laskavě a mít se rád/a?",
    category: "",
  },
  {
    number: 53,
    text: "Co tě na lidech nejvíce štve?",
    category: "",
  },
  {
    number: 54,
    text: "Z čeho máš největší strach?",
    category: "",
  },
  {
    number: 55,
    text: "Co je pro tebe z těchto hodnot nejdůležitější - peníze, uznání, nezávislost, čest?",
    category: "",
  },
  {
    number: 56,
    text: "Jakou jsi měl/a kdy přezdívku a díky čemu jsi dostal/a?",
    category: "",
  },
  {
    number: 57,
    text: "Jak bys chtěl/a, aby tvůj život vypadal za 5 let? Jak by vypadal tvůj typický den?",
    category: "",
  },
  {
    number: 59,
    text: "Jaký zážitek nejvíce ovlivnil tvůj život?",
    category: "",
  },
  {
    number: 60,
    text: "Jaký máš vztah se svými rodiči? Jak se liší od vztahu v dětství/dospívání?",
    category: "",
  },
  {
    number: 61,
    text: "Jak by tě popsal tvůj nejlepší přítel?",
    category: "",
  },
  {
    number: 62,
    text: "Následuješ častěji své srdce nebo rozum?",
    category: "",
  },
  {
    number: 63,
    text: "Preferuješ jít na rande s jedním člověkem - s tím, že to může dopadnout jakkoli - nebo jít na rande postupně s více lidmi a až pak případně rozvíjet vztah s člověkem, který ti sedí nejvíce?",
    category: "",
  },
  {
    number: 64,
    text: "Jakou jednu věc bys chtěl/a změnit na dnešku?",
    category: "",
  },
  {
    number: 65,
    text: "Jaká je ta nejšílenější věc, kterou jsi s někým udělal/a?",
    category: "",
  },
  {
    number: 66,
    text: "Co tě naučil vztah s člověkem, který už zanikl?",
    category: "",
  },
  {
    number: 67,
    text: "Jaká je nejlepší rada, kterou Ti kdo dal?",
    category: "",
  },
  {
    number: 68,
    text: "Jaká je tvá oblíbená vzpomínka z dětství?",
    category: "",
  },
  {
    number: 69,
    text: "Co děláš, když se naštveš?",
    category: "",
  },
  {
    number: 70,
    text: "Jaký je tvůj oblíbený romantický moment?",
    category: "",
  },
  {
    number: 71,
    text: "Co by sis přál/a, aby o tobě lidé věděli?",
    category: "",
  },
  {
    number: 72,
    text: "Jakou jednu věc by sis přál/a na sobě změnit?",
    category: "",
  },
  {
    number: 73,
    text: "Odpustil/a bys partnerovi, kdyby tě podvedl?",
    category: "",
  },
  {
    number: 74,
    text: "Jaký/á je tvůj oblíbený film/kniha a čím to, že tě tak oslovil/a?",
    category: "",
  },
  {
    number: 75,
    text: "Považuješ se za introverta nebo extroverta? Na základě čeho?",
    category: "",
  },
  {
    number: 77,
    text: "Jak se cítíš ohledně sdílení svých hesel (k mobilu, cloudu, emailu atd.) s partnerem?",
    category: "",
  },
  {
    number: 78,
    text: "Jak bereš své nejlepší přátele opačného pohlaví?",
    category: "",
  },
  {
    number: 79,
    text: 'Kdybys hledal/a partnera přes onlinu seznamku, co bys napsal/a do políčka "mé požadavky na budoucího partnera (přes to nejede vlak!):"',
    category: "",
  },
  {
    number: 80,
    text: "Jaké jsou obvykle tvé první myšlenky po probuzení?",
    category: "",
  },
  {
    number: 81,
    text: "Zapochyboval jsi někdy o své příčetnosti nebo že jsi duševně zcela zdravý/á?",
    category: "",
  },
  {
    number: 82,
    text: "Z čeho, co jsi kdy řekl/a nebo udělal/a, se pořád ošíváš, jen na to pomyslíš?",
    category: "",
  },
  {
    number: 83,
    text: "Na co se zaměříš jako první po tom, co přijdeš k někomu do bytu/domu?",
    category: "",
  },
  {
    number: 85,
    text: "Jakou písničku jsi poslouchal/a, když jsi byl zamilovaný/á?",
    category: "",
  },
  {
    number: 86,
    text: "Kdy jsi zažil největší fyzickou bolest?",
    category: "",
  },
  {
    number: 87,
    text: "Jaký je tvůj nejhorší zážitek z dětství?",
    category: "",
  },
  {
    number: 88,
    text: "Jaký moderní trend tě štve nejvíce?",
    category: "",
  },
  {
    number: 89,
    text: "Jaký/á jsi byl/a na základní škole?",
    category: "",
  },
  {
    number: 90,
    text: "Kdy jsi někoho nejvíce napálil?",
    category: "",
  },
  {
    number: 92,
    text: "Kdy naposledy ses dostal/a do trapné situace?",
    category: "",
  },
  {
    number: 93,
    text: "Jaký nový návyk jsi za poslední rok zavedl do svého života?",
    category: "",
  },
  {
    number: 94,
    text: "Kdy jsi naposledy předstíral, že jsi nemocný/á?",
    category: "",
  },
  {
    number: 95,
    text: "Kdybys mohl vytvořit a spravovat svůj nový stát, jaké by to tam bylo?",
    category: "",
  },
  {
    number: 96,
    text: "Chceš, aby tvoje děti byly takové jako jsi ty?",
    category: "",
  },
  {
    number: 97,
    text: "Jaká je tvoje zítřejší priorita číslo 1?",
    category: "",
  },
  {
    number: 98,
    text: "Co máš na sobě rád/a?",
    category: "",
  },
  {
    number: 99,
    text: "Po čem se ti nejčastěji stává, že změníš názor?",
    category: "",
  },
  {
    number: 100,
    text: 'Jaký spolužák/spolužačka byl na střední nejvíce "cool" a kde je teď?',
    category: "",
  },
  {
    number: 101,
    text: "Stalo se Ti, že jsi někoho potkal/a po letech a naprosto Tě překvapilo, jak teď žije?",
    category: "",
  },
  {
    number: 102,
    text: "Kdy naposledy jsi měl/a záchvat smíchu?",
    category: "",
  },
  {
    number: 103,
    text: "Co je nejjednodušší způsob, jak někdo může přijít o tvou důvěru?",
    category: "",
  },
  {
    number: 104,
    text: "Jak bys změnil způsob, jakým jsou trestání zločinci?",
    category: "",
  },
  {
    number: 105,
    text: "Co se dá o tobě zjistit z prohlídky tvého pokoje?",
    category: "",
  },

  {
    number: 110,
    text: "Věříš, že se člověk musí změnit před tím, než mu odpustíš?",
    category: "",
  },
  {
    number: 111,
    text: "Kdy ses cítil jako outsider?",
    category: "",
  },
  {
    number: 112,
    text: "Máš pocit, že sis během dětství musel zasloužit lásku svých rodičů?",
    category: "",
  },
  {
    number: 115,
    text: "Jak odlišné by byly životy tvých nejlepších přátel, kdyby tě nikdy nepotkali?",
    category: "",
  },
  {
    number: 116,
    text: "V jakých ohledech jsi zůstal/a za posledních 10 let úplně stejný/á?",
    category: "",
  },
  {
    number: 117,
    text: "Kdybys ztratil/a paměť, jací tři lidé by ti pomohli si vzpomenout na nejvíc ze své minulosti?",
    category: "",
  },
  {
    number: 118,
    text: "Jak si představuješ svou denní rutinu po tom, co budeš v důchodu?",
    category: "",
  },
  {
    number: 119,
    text: "Co je zaručený recept na to, abyste se pohádali s rodiči?",
    category: "",
  },
  {
    number: 120,
    text: "Zeptej se jednoho člověka v místnosti: jaký jsi měl/a ze mě dojem, když jsme se poprvé potkali?",
    category: "",
  },
  {
    number: 121,
    text: "Jaký je tvůj rekord v počtu neprospaných hodin a kdy se to stalo?",
    category: "",
  },
  {
    number: 122,
    text: "Tvůj současný život je jen alternativní budoucnost. Ve skutečnosti ti je patnáct. Co bys řekl/a svému patnáctiletému já, kdybys měl/a tu možnost?",
    category: "",
  },
  {
    number: 123,
    text: "Jaká je tvoje nejméně oblíbená vzpomínka ze školy?",
    category: "",
  },
  {
    number: 124,
    text: "Kdy a jak jsi poprvé narazil na myšlenku posmrtného života?",
    category: "",
  },
  {
    number: 125,
    text: "Kdybys měl/a každou noc lucidní sen, o čem by sis nechal/a zdát?",
    category: "",
  },
  {
    number: 126,
    text: "Co z toho, co vyžaduješ po někom jiném, sám neděláš?",
    category: "",
  },
  {
    number: 128,
    text: "Pokud by ses mohl/a zeptat svého já z roku 2050 na jedinou otázku, jaká by to byla?",
    category: "",
  },
  {
    number: 130,
    text: "Miluješ pořád někoho, do koho jsi byl zamilovaný v minulosti?",
    category: "",
  },
  {
    number: 131,
    text: "Zlomil jsi někomu srdce?",
    category: "",
  },
  {
    number: 133,
    text: "Jaké je tvoje oblíbené meme?",
    category: "",
  },
  {
    number: 134,
    text: "Jakou mobilní aplikaci používáš nejčastěji?",
    category: "",
  },
  {
    number: 135,
    text: "Stříhal/a sis někdy sám/sama vlasy?",
    category: "",
  },
  {
    number: 136,
    text: "Dal/a jsi někdy někomu schválně špatnou radu?",
    category: "",
  },
  {
    number: 137,
    text: "Plánuješ někomu něco říct až za několik nebo více let? Proč mu/jí to neřekneš už teď?",
    category: "",
  },
  {
    number: 138,
    text: "Popral ses někdy s někým? S kým a kvůli čemu?",
    category: "",
  },
];

let hypoteticke_ = [
  {
    number: 0,
    text: "Jaké zákony bys zrušil/a, kdybys mohl/a?",
    category: "",
  },
  {
    number: 0,
    text: "Jaké zákony bys vytvořil/a, kdybys mohl/a?",
    category: "",
  },
  {
    number: 113,
    text: "Kdyby měl být vydán zákon, který by ukládal za povinnost projít testem znalostí a dovedností, než někdo začne vychovávat dítě, podpořil/a bys ho?",
    category: "",
  },
  {
    number: 108,
    text: "Kdybychom uvízli na pustém ostrově, jakou roli by každý z nás zastal?",
    category: "",
  },
  {
    number: 106,
    text: "Šel/šla bys raději na doživotí do vězení za vraždu, kterou jsi nespáchal/a, nebo někoho zabil/a a byl/a na svobodě?",
    category: "",
  },
  {
    number: 0,
    text: "Chodil/a bys raději s člověkem, který tě miluje, ale ty ho ne, nebo s člověkem, kterého miluješ, ale on tebe ne?",
    category: "",
  },
  {
    number: 58,
    text: "Chtěl/a bys raději život s partnerem (ale bez dítěte), nebo s dítětem (ale bez partnera)?",
    category: "",
  },
  {
    number: 13,
    text: "Představ si, že víš, že se dožiješ 90 let. Ve 30 letech si můžeš vybrat, jestli si na zbylých 60 let ponecháš tělo a vzhled nebo mysl svého 30letého já. Co si vybereš?",
    category: "",
  },
  {
    number: 0,
    text: "Pokaždé, když Ti někdo zlomí kost v těle, dostaneš 250 000 Kč. Kolik kostí by sis nechal/a zlomit?",
    category: "",
  },
  {
    number: 0,
    text: "Chtěl/a bys žít ve světě, ve kterém by nad hlavou každého člověka byla bublina s textem, co si zrovna myslí?",
    category: "",
  },
  {
    number: 0,
    text: "Chtěl bys být inteligentnější, kdyby to znamenalo, že taky budeš méně šťastný?",
    category: "",
  },
  {
    number: 0,
    text: "Kdyby Ti bylo nabídnuto 20 000 Kč za to, že bys tančil/a 5 minut bez hudby a na pódiu ve stadionu plném lidí, přijal/a bys?",
    category: "",
  },
  {
    number: 0,
    text: "Kdybys mohl/a být na den muž (pokud jsi žena) / žena (pokud jsi muž), co nového bys vyzkoušel/a?",
    category: "",
  },
  {
    number: 0,
    text: "Tato místnost hoří hoří a jen ty můžeš zachránit všechny z této místnosti až na jednoho. Pro koho by nezbylo místo?",
    category: "",
  },
  {
    number: 0,
    text: "Pokud bys mohl/a všem lidem vymazat paměť a dát jim do mysli jakékoliv vzpomínky, jaké by to byly?",
    category: "",
  },
  {
    number: 0,
    text: "Co bys dělal/a, kdybys zjistil/a, že jsi byl adoptovaný/á?",
    category: "",
  },
  {
    number: 0,
    text: "Na levých kolejích leží přivázaný tvůj sourozenec/přítel. Na pravých leží  přivázaných 10 lidí, které neznáš. Vlak se teď po levých kolejích hodně rychle blíží, přehodil bys výhybku napravo?",
    category: "",
  },
  {
    number: 0,
    text: "Zapomněl/a bys raději, kdo jsi ty, nebo kdo jsou všichni ostatní?",
    category: "",
  },
  {
    number: 0,
    text: "Kdyby měl/a tvůj/tvá nastavíjící týden před svatbou nehodu, kvůli které by přišel/přišla o obě nohy, vzal/a? by sis ho/ji? pak?",
    category: "",
  },
  {
    number: 0,
    text: "Pokud si po dobu 1 roku nebudeš čistit zuby, nebudeš se mýt a nebudeš používat deodorant ani nic podobného, dostaneš 1 milión Kč. Během celého roku nesmíš nikomu nic o této dohodě říct. Přijimáš?",
    category: "",
  },
  {
    number: 0,
    text: "Vzal/a by sis raději o dvě velikosti větší nebo menší oblečení?",
    category: "",
  },
  {
    number: 0,
    text: "V práci jsi udělal/a chybu, které si nikdo nevšimnul. Upozornil bys na ni nebo pokračoval a doufal, že se na věc nepřijde?",
    category: "",
  },
  {
    number: 0,
    text: "Kdyby ses mohl vrátit v čase a zabít Hitlera jako novorozeně, udělal/a bys to?",
    category: "",
  },
  {
    number: 0,
    text: "Pokud bys získal 3 000 Kč za to, že po Tobě bude lézt 30 minut tarantule, přijal/a bys? Pokud ne, kolik by ti museli nabídnout, abys přijal/a?",
    category: "",
  },
  {
    number: 0,
    text: "Přijal/a bys práci za 50 000 Kč/měsíc, kde bys každý den 8,5 hodiny seděl/a v černé místnosti a nic nedělal/a (a nemohl/a tam spát)?",
    category: "",
  },
  {
    number: 0,
    text: "Za strašné bouře jedeš opuštěnou oblastí autem. Vidíš 3 stopaře: 1. velmi stará paní, která vypadá, že už to dlouho nezvládne, 2. starý přítel, který ti jednou zachránil život, 3. člověk, o kterém jsi snil/a, že bude jednou tvůj partner. Máš jen jedno místo, komu zastavíš?",
    category: "",
  },
  {
    number: 0,
    text: "Opustil bys navždy partnera, se kterým máš mít zítra svatbu, kdyby ti nabídli 5 miliónů? 100 miliónů? ",
    category: "",
  },
  {
    number: 0,
    text: "Neznámý člověk ti drží u hlavy pistoli a říká ti, ať mu řekneš jediný důvod, proč by tě neměl zabít. Co bys odpověděl/a?",
    category: "",
  },
  {
    number: 0,
    text: "Komu bys zavolal, aby ti pomohl pohřbít mrtvé tělo? Udělal/a by to?",
    category: "",
  },
];

let crazy_ = [
  {
    number: 0,
    text: "K čemu rád čicháš, i když většině lidí to nevoní?",
    category: "",
  },

  {
    number: 0,
    text: "Šel bys na nudistickou pláž? Proč?",
    category: "",
  },
  {
    number: 0,
    text: "Lhal jsi někdy svému nejlepšímu příteli? O čem?",
    category: "",
  },
  {
    number: 0,
    text: "Stalo se Ti někdy, že jsi jako dítě vešel do místnosti, zrovna když to rodiče dělali? Co ti běželo hlavou?",
    category: "",
  },
  {
    number: 0,
    text: "Obdivuješ se někdy v zrcadle?",
    category: "",
  },
  {
    number: 0,
    text: "Kdy naposledy jsi před zrcadlem zatínal/a svaly nebo něco jiného?",
    category: "",
  },
  {
    number: 0,
    text: "Litoval/a jsi někdy něčeho, co jsi dal na sociální sítě? Čeho?",
    category: "",
  },
  {
    number: 0,
    text: "Co je ta nejvíce nezákonná věc, kterou jsi kdy udělal?",
    category: "",
  },
  {
    number: 0,
    text: "Za co ve své webové historii prohlížení by ses styděl, kdyby někdo viděl?",
    category: "",
  },
  {
    number: 0,
    text: "Co je tvůj nejhorší zvyk?",
    category: "",
  },
  {
    number: 0,
    text: "Na co obvykle myslíš, když jsi na záchodě?",
    category: "",
  },
  {
    number: 0,
    text: "Kdo je podle tebe nejhůř oblečený člověk v místnosti?",
    category: "",
  },
  {
    number: 0,
    text: "Jaká je nejdelší doba, po kterou jsi nechal/a spadlé jídlo na zemi a pak ho snědl/a?",
    category: "",
  },
  {
    number: 0,
    text: "Co je poslední věc, kterou jsi hledal/a na internetu?",
    category: "",
  },
  {
    number: 0,
    text: "Čůráš někdy ve sprše?",
    category: "",
  },
  {
    number: 0,
    text: "Byl/a jsi někdy celý den bez spodního prádla?",
    category: "",
  },
  {
    number: 0,
    text: "Ukradl/a jsi někdy něco?",
    category: "",
  },
  {
    number: 0,
    text: "Při čem nejdivnějším, co jsi zrovna dělal, tě někdo přistihl u zrcadla?",
    category: "",
  },
  {
    number: 0,
    text: "Přistihl tě někdy učitel podvádět u testu?",
    category: "",
  },
  {
    number: 0,
    text: "Co máš ve složkách, aplikacích atd. které máš zvlášť zaheslované nebo skryté?",
    category: "",
  },
  {
    number: 0,
    text: "Kdo byl první člověk, do kterého ses zamiloval?",
    category: "",
  },
  {
    number: 0,
    text: "Máš imaginárního přítele? Měl/a jsi?",
    category: "",
  },
  {
    number: 0,
    text: "Co je ta nejvíce crazy věc, kterou jsi udělal/a, když jsi byl/a opilý/á?",
    category: "",
  },
  {
    number: 0,
    text: "Udržoval jsi někdy tajně s někým vztah?",
    category: "",
  },
  {
    number: 0,
    text: "Jakou část těla si při koupání/sprchování myješ jako první?",
    category: "",
  },
  {
    number: 0,
    text: "Představuješ si někdy, jaké by to bylo vrazit někomu pěstí nebo otevřít těsně před projížděcím cyklistou dveře auta apod.?",
    category: "",
  },
  {
    number: 0,
    text: "Kdy naposledy jsi něco totálně zvoral, ale nikdo si toho nevšiml?",
    category: "",
  },
  {
    number: 0,
    text: "Jakou nejdivnější věc jsi kdy udělal/a ve veřejné dopravě?",
    category: "",
  },
  {
    number: 0,
    text: "Co je nejkrutější nebo nejpodlejší věc, kterou jsi někomu řekl/a?",
    category: "",
  },
  {
    number: 0,
    text: "Komu nejvíce závidíš a co?",
    category: "",
  },
  {
    number: 0,
    text: "Chtěl bys teď chodit se svou dětskou láskou?",
    category: "",
  },
  {
    number: 0,
    text: "Jaký nejlevnější dárek jsi kdy dostal/a a od koho?",
    category: "",
  },
  {
    number: 0,
    text: "Lhal/a jsi někdy o svém věku?",
    category: "",
  },
  {
    number: 0,
    text: "Lhal/a jsi někdy svému šéfovi? O čem?",
    category: "",
  },
  {
    number: 0,
    text: "Kdo z tvé rodiny a příbůzných tě štve nejvíce a proč?",
    category: "",
  },
  {
    number: 0,
    text: "Co je nejskandálnější fotka ve tvém uložišti?",
    category: "",
  },
  {
    number: 0,
    text: "Byl/a jsi někdy zamilovaný/á do kolegy/kolegyně?",
    category: "",
  },
  {
    number: 0,
    text: "Stalkoval jsi někdy někoho nebo někdo tebe?",
    category: "",
  },
  {
    number: 0,
    text: "S kolika lidmi ses líbal/a?",
    category: "",
  },
  {
    number: 0,
    text: "Jaké dítě tvých přátel tajně nemáš rád?",
    category: "",
  },
  {
    number: 0,
    text: "Jakou nejdivnější věc jsi kdy řekl cizímu člověku?",
    category: "",
  },
  {
    number: 0,
    text: "Komu v místnosti důvěřuješ nejméně?",
    category: "",
  },
  // {
  //     number: 0,
  //     text: "Kdyby si tvoje přítelkyně a matka vyměnily těla a jediná možnost, jak dát vše do původního stavu je mít s jednou z nich sex, kterou by sis vybral?",
  //     category: ""
  // },
  {
    number: 0,
    text: "Pokud bys mohl/a změnit jednu věc na vzhledu tvého partnera, co by to bylo?",
    category: "",
  },
  {
    number: 0,
    text: "Jaká nejtrapnější věc se ti stala na schůzce s jiným člověkem?",
    category: "",
  },
];

export { questions, poznavaci_, hypoteticke_, crazy_ };
