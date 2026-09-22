// ============================================
//  CITÁTY
// ============================================
// Každý citát je jeden objekt { citat, autor, komentar }.
// Nový citát přidáš tak, že zkopíruješ jeden z bloků níže
// a upravíš citat, autora a komentar.
//
// Komentar může obsahovat i jednoduché HTML značky, např.
// <strong>tučně</strong>, <em>kurzívou</em>, nebo <br> pro nový řádek.
// ============================================

const citaty = [
  {
    citat: "A wise old owl lived in an oak,<br>" +
           "The more he saw, the less he spoke.<br>" +
           "The less he spoke, the more he heard,<br>" +
           "Why aren't we all like that bird?<br>" +
           "Now, wasn't he a wise old bird?",
    autor: "John D. Rockefeller",
    komentar: "Nikdo nemá správnou odpověď na všechno – a právě proto má smysl bavit se " +
              "skoro o čemkoliv. Jde jen o to, říkat svůj názor, ne prohlašovat, že mám " +
              "pravdu. Naslouchání je jediný způsob, jak se dá ten názor postupně " +
              "zpřesňovat.<br><br>" +
              "Spousta diskuzí přitom nikam nevede, ale často ne proto, že by se lidé " +
              "neshodli. Je to tím, že celá diskuze stojí na chybných datech nebo mylných " +
              "předpokladech. A někdy to vlastně diskuze ani není – každý mluví o něčem " +
              "jiném, odbíhá od tématu nebo odpovídá na otázku, kterou nikdo nepoložil. To " +
              "už není diskuze, to je mluvení přes sebe."
  },
  {
    citat: "Nothing in life is as important as you think it is when you are thinking about it.",
    autor: "Daniel Kahneman",
    komentar: "Čím déle na jedno téma myslíme, tím větší váhu mu nevědomky přidáváme, " +
              "zatímco ostatní důležité věci prostě jen vypadnou z okna pozornosti – ne že " +
              "by přestaly být důležité."
  },
  {
    citat: "The best math you can learn is how to calculate the future cost of current decisions.",
    autor: "Neznámý autor",
    komentar: "Naučit se odhadnout budoucí cenu dnešních rozhodnutí je asi ta nejužitečnější " +
              "matematika, jakou se člověk může naučit – a zároveň ta nejtěžší. Přesně se to " +
              "spočítat nedá; nikdy nevíme, kolik nás dané rozhodnutí bude skutečně stát za " +
              "rok nebo za deset let. Ale i hrubý odhad je lepší než žádný. Důležité je na tu " +
              "budoucí cenu vůbec myslet, ne ji ignorovat jen proto, že je nejistá."
  },
  {
    citat: "Just before you die, you meet all the versions of yourself that you could have " +
           "been. The definition of a good life is that in that process, you are pleased " +
           "with how you turn out.",
    autor: "Neznámý autor",
    komentar: "Těsně před smrtí se prý potkáš se všemi verzemi sebe, kterými jsi mohl být. " +
              "A dobrý život znamená, že s tím, jak ses nakonec vyvinul, budeš spokojený – " +
              "bez lítosti nad tím, co jsi mohl udělat jinak.<br><br>" +
              "Součástí té spokojenosti by měl být i respekt a obdiv lidí, na kterých ti " +
              "nejvíc záleží. Nejde jen o to, být spokojený sám se sebou – jde i o to, jak " +
              "si tě váží ti nejbližší."
  },
  {
    citat: "The ability to do what you want, when you want, with who you want, for as long " +
           "as you want to, pays the highest dividend that exists in finance.",
    autor: "Morgan Housel",
    komentar: "Nezávislost je jedna z nejdůležitějších věcí, kterou nám peníze mohou dát. " +
              "Ne v tom smyslu, že si za ně koupíš cokoliv chceš, ale v tom, že ti dávají " +
              "kontrolu nad vlastním časem – dělat co chceš, kdy chceš, s kým chceš, a tak " +
              "dlouho, jak chceš."
  },
  {
    citat: "Money's greatest intrinsic value—and this can't be overstated—is its ability to " +
           "give you control over your time.",
    autor: "Morgan Housel",
    komentar: "Nezávislost je jedna z nejdůležitějších věcí, kterou nám peníze mohou dát. " +
              "Ne v tom smyslu, že si za ně koupíš cokoliv chceš, ale v tom, že ti dávají " +
              "kontrolu nad vlastním časem – dělat co chceš, kdy chceš, s kým chceš, a tak " +
              "dlouho, jak chceš. Právě tahle kontrola nad časem, ne nad věcmi, je ta " +
              "nejcennější hodnota, kterou peníze mají."
  },
  {
    citat: "Spending money to show people how much money you have is the fastest way to " +
           "have less money.",
    autor: "Morgan Housel",
    komentar: "Utrácet peníze za to, abychom ostatním ukázali, kolik jich máme, je " +
              "nejrychlejší cesta k tomu mít jich méně. Bohatství totiž není to, co je " +
              "vidět – auto, hodinky, dovolená na Instagramu. To je jen to, co jsme si " +
              "koupili. Skutečné bohatství je to, co jsme si nekoupili a necháli si ho v " +
              "podobě možností a nezávislosti.<br><br>" +
              "Existují lepší způsoby, jak s penězi zacházet, abychom díky nim byli " +
              "šťastnější a nezávislejší – většinou to ale znamená utrácet míň, ne víc."
  },
  {
    citat: "Growth is driven by compounding, which always takes time. Destruction is driven " +
           "by single points of failure, which can happen in seconds, and loss of " +
           "confidence, which can happen in an instant.",
    autor: "Morgan Housel",
    komentar: "Dobré věci se dějí pomalu a dlouho – to je síla úročení. Špatné zprávy a " +
              "události se naopak dokážou stát ve zlomku vteřiny. Lidé si proto většinou " +
              "všímají spíš těch špatných zpráv – jsou rychlé a spouští silnější " +
              "adrenalinovou reakci než pomalý, nenápadný růst, který trvá roky."
  },
  {
    citat: "Nothing is as good or as bad as it seems.",
    autor: "Morgan Housel",
    komentar: "Nic není tak dobré nebo tak špatné, jak se to v danou chvíli zdá. Po čase se " +
              "skoro vždycky objeví něco, co tu prvotní reakci vyváží – další zpráva, " +
              "další událost, jiný úhel pohledu."
  },
  {
    citat: "Risk is what's left over when you think you've thought of everything.",
    autor: "Morgan Housel",
    komentar: "Investování:<br>" +
      "Největším rizikem v investování není žádný konkrétní scénář, na který se dá připravit – " +
      "je to samotná nejistota budoucnosti. Nikdo neví přesně, kde bude jakýkoliv trh za rok, " +
      "za pět nebo za dvacet let. Investování je těžké ne proto, že bychom neuměli počítat " +
      "pravděpodobnosti nebo číst grafy, ale proto, že se jich racionálně nedržíme a zároveň " +
      "se nikdy nedá promyslet úplně všechno dopředu se stoprocentní jistotou."
  },
  {
    citat: "Optimism sounds like a sales pitch. Pessimism sounds like someone trying to " +
           "help you.",
    autor: "Morgan Housel",
    komentar: "Když je někdo optimistický, zní to, jako by se ti snažil něco prodat – ať " +
              "už produkt, investici nebo svůj názor. Automaticky mu proto trochu " +
              "nedůvěřujeme. Pesimismus působí opačně: zní to, jako by se o tebe někdo " +
              "bál a chtěl tě před něčím ochránit. Proto mu lidé věnují víc pozornosti a " +
              "víc mu věří – i když varování nemusí mít pravdu o nic víc než ten " +
              "optimistický odhad."
  },
  {
    citat: "His skill is investing, but his secret is time. That's how compounding works. " +
           "Think of this another way. Buffett is the richest investor of all time. But " +
           "he's not actually the greatest—at least not when measured by average annual " +
           "returns.",
    autor: "Morgan Housel",
    komentar: "Buffett je známý jako jeden z nejlepších investorů světa – a to je pravda. " +
              "Ale většina lidí netuší, že jeho skutečné tajemství není roční zhodnocení, " +
              "ale čas. Přesně takhle funguje úročení. Buffett je nejbohatší investor " +
              "všech dob, ale podle průměrného ročního výnosu není ani zdaleka " +
              "nejlepší.<br><br>" +
              "99 % Buffettova majetku vzniklo až po jeho 65. narozeninách."
  },
  {
    citat: "The luckier you are, the nicer you should be.",
    autor: "Morgan Housel",
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
  },
  {
    citat: "A lot of depression is just instant gratification to relieve the discomfort of " +
           "not having chosen delayed gratification and getting stuck in a vicious cycle.",
    autor: "Christina Buttons",
    komentar: "Lidé mají obecně radši okamžité uspokojení, i když by v budoucnu mohli mít " +
              "víc. Problém je, že se to dá " +
              "zacyklit: čím víc voliš tu rychlou úlevu místo dlouhodobě lepšího " +
              "rozhodnutí, tím hůř se z toho příště vystupuje."
  },
  {
    citat: "People are strange. They are constantly angered by trivial things but on a major " +
           "matter like totally wasting their lives they hardly seem to notice.",
    autor: "Charles Bukowski",
    komentar: "Je asi pravda, že zpětně spousta lidí lituje, kolik energie věnovali vzteku " +
              "nad maličkostmi. To nejdůležitější – že jim mezitím utíká celý život – si " +
              "přitom vůbec nevšimli."
  },
  {
    citat: "So much misery is just an unfair judging of the statistics.",
    autor: "Alain de Botton",
    komentar: "V investování je strašně moc neúspěchu způsobeno špatným zacházením s " +
              "jednoduchou statistikou. Lidský mozek na statistiku prostě není intuitivně " +
              "stavěný. Příkladem může být úročení – lidé podceňují, jak rychle roste " +
              "exponenciální křivka. Nebo efekt přeživších: když se lidé srovnávají jen s " +
              "fondy nebo akciemi, které přežily a vydělaly, poměřují se s číslem, které " +
              "vůbec neodpovídá realitě – ty neúspěšné mezitím ze statistiky úplně zmizely."
  },
  {
    citat: "If you only wish to be happy, this could be easily accomplished; but we wish to " +
           "be happier than other people, and this is always difficult, for we believe " +
           "others to be happier than they are.",
    autor: "Montesquieu",
    komentar: "Chtít prostě jen být šťastný by nemusel být všudypřítomný problém. Jenže my " +
              "chceme být šťastnější než ostatní – a to už je potíž, protože skoro vždycky " +
              "přeceňujeme, jak šťastní ti druzí doopravdy jsou. Sociální sítě tenhle efekt " +
              "jen umocňují: stačí pár fotek z dovolené a hned máme pocit, že je někdo " +
              "šťastnější, než ve skutečnosti je."
  },
  {
    citat: "If you want the rainbow, you gotta put up with the rain.",
    autor: "Dolly Parton",
    komentar: "Akciový trh: Z dat plyne, že investování do nízko-nákladových tržně-vážených " +
              "široce-diverzifikovaných akciových ETF přináší uspokojivý výnos s delším " +
              "horizontem. Bohužel je to náročná cesta. Investor musí být odolný vůči " +
              "volatilitě nebo sobě."
  },
  {
    citat: "Planning is important, but the most important part of every plan is to plan on the plan not going according to plan.",
    autor: "Morgan Housel",
    komentar: "Plánování a předpovídání budoucnosti mají něco společného – tu samou " +
              "nejistotu. Nejde se totiž připravit na to, co přesně se stane, jen na to, " +
              "že se věci nakonec nestanou podle plánu. A právě to je ta nejtěžší část " +
              "každého plánování."
  }
];
