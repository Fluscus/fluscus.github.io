// ============================================
//  ZÁPISKY DO DENÍKU
// ============================================
// Každý zápisek je jeden objekt { datum, nadpis, text }.
// Nový zápisek přidáš tak, že zkopíruješ jeden z bloků níže,
// upravíš datum, nadpis a text a vložíš ho na ZAČÁTEK pole
// (aby se nejnovější zápisky zobrazovaly nahoře).
//
// Text může obsahovat i jednoduché HTML značky, např.
// <strong>tučně</strong>, <em>kurzívou</em>, nebo <br> pro nový řádek.
// ============================================

const posts = [
  {
    datum: "2026-04-17",
    nadpis: "17.04.2026",
    text: "S&P500, globální trhy kole 30 P/E. Bojim, bojim…<br><br>" +
          "Jsem si vědom studií, které ukazují, že z dlouhodobého hlediska se obecně vyplácí " +
          "investovat co nejdříve a nesnažit se trh časovat. Zajímalo by mě ale, zda v tomto " +
          "kontextu nehraje významnější roli úroveň valuací. V současnosti se P/E u amerických " +
          "i globálních akciových trhů pohybuje přibližně kolem hodnoty 30, což je poměrně " +
          "vysoké číslo."
  },
  {
    datum: "2026-04-03",
    nadpis: "03.04.2026",
    text: "Všichni vydělávají, mladí finfluenceři. Bojim, bojim."
  },
  {
    datum: "2026-03-16",
    nadpis: "16.03.2026",
    text: "Buffet již skončil v Berkshire. Ale jeho konec určitě není! Jakou filantropii " +
          "předvede, bude neskutečné. Spekuluji, že jeho nástupcem v podobném myšlení bude " +
          "Morgan Housel."
  },
  {
    datum: "2025-03-22",
    nadpis: "22.03.2025",
    text: "Znám lidi, kteří jsou výborní v matematice, ale udělali iracionální finanční " +
          "rozhodnutí. Konkrétně měli nad 90 percentil v SCIO matematice, ale koupili Nvidii " +
          "na vrcholu.<br><br>" +
          "Nechci nikoho urážet, jen poukázat, že investování není pouze o rozhodování na " +
          "základě matematiky, analýze a racionálním uvažování (spreadsheet), ale velmi velmi " +
          "důležité je lidské chování, emoce jako chamtivost a strach nebo fomo."
  },
  {
    datum: "2024-11-16",
    nadpis: "Téma pro knihu Akciový trh a člověk (Stock Market and Human Behavior)",
    text: "Každý člověk je svým způsobem pro ostatní jako akciová společnost. Dle mého názoru, " +
          "bychom si měli vybírat firmu, která má výbornou ziskovost, ale také tu kterou " +
          "milujeme a věříme ji. Mnoho lidí se snaží najít tu nejatraktivnější investici, ti " +
          "výherní šťastlivci mohou společnost z části vlastnit. Dnes je to u akcií velice " +
          "jednoduché. Avšak musí provést důkladnou analýzu, aby se nespálily a neztratily čas. " +
          "Po analýze dokončí svoji počáteční investici. Poté nastává ten nejtěžší čas, a to " +
          "být trpělivý, udržet svoji pozici a navyšovat ji pravidelně. Jelikož spousta analýz " +
          "a grafů potvrzuje, že pravidelná investice pravděpodobněji více zhodnotí peníze více " +
          "než časování, je dobré se držet této strategie. Ještě investor musí doufat, že se " +
          "společnost nezmění a nezačne být v červených číslech.<br><br>" +
          "Pokud ale vybral dobře (stačí průměrně dobře :) ), společnost začne odměňovat své " +
          "investory v podobě výnosu nebo dividend.<br><br>" +
          "Na konci celé investice do společnosti se na scénu objeví otázka ohledně odprodeje. " +
          "Myslím si, že spousta lidí, pokud se jim podaří vybrat tu rozumnou investici, " +
          "zjistí, že nebudou po dlouhé době ji chtít, a dokonce ani schopni, odprodat. Jak " +
          "říká Warren Buffet „Our favourite holding period is forever.“<br><br>" +
          "Abych dovysvětlil můj pohled na toto téma, podívám se teď na druhou stranu, na " +
          "člověka. Jako člověk budu také hledat přátele a partnera (společnost) podle toho, " +
          "jestli mu můžu věřit, svěřit se mu se všemi tajemstvími a bude mě dělat " +
          "šťastným.<br><br>" +
          "Důležitý bod je také u očekávání. Šťastné přátelství či manželství nastává, pokud " +
          "máme malá očekávání. Pro mě nejlepší stav je tehdy, když děláme pro druhou " +
          "polovičku neustále hezké věci a neočekáváme vůbec nic nazpátek. (Morgan " +
          "Housel)<br><br>" +
          "Uvidíme, že na oplátku se bude snažit být co nejtransparentnější pro blízké, aby " +
          "viděli, co vlastní. Bude jim říkat všechna tajemství a bude otevřený. Na ostatní " +
          "může srát, ale zase jim umožní, aby měli možnost stát se jeho novými " +
          "investory.<br><br>" +
          "Buybacky, dividendy či růst akcií představují vděk od druhé osoby za neustálou " +
          "podporu, chování a strávený čas mezi vámi. Nechceme vidět dlouhodobě volatilní " +
          "vztah či rychlé neudržitelné přátelství. Chce to čas. Zlepšení vztahu o 1 % týdně je " +
          "mnohem více udržitelné a dlouhodobé než rychlé zlepšení vztahu o 200 % a následný " +
          "prudký pád pod počáteční hranici a mnohem níže.<br><br>" +
          "Není to zvláštní, neboť všechny firmy jsou složeny z lidí a jejich rozhodnutí. " +
          "To jde ruku v ruce k dalším tématům jako vztah k tělu a zdravému způsobu " +
          "života.<br><br>" +
          "<strong>Spolupráce vs. Zápasení a Předhánění</strong><br><br>" +
          "Svět, ve kterém se právě nacházím, je o neustálém předhánění se. Co člověk dokáže " +
          "udělat pro to, aby ho ostatní obdivovali, mi přijde zbytečné. Nejvíce zbytečné při " +
          "společných aktivitách.<br><br>" +
          "Jelikož jsem se ji párkrát setkal např. ve škole s prací s ostatními, mám svůj " +
          "subjektivní názor. Místo abychom si společně k tématu sedli a diskutovali, začátku " +
          "spíše vypadají jako nepříjemné hádky.<br><br>" +
          "Po chvíli neefektivní práce se to začne zhoršovat. Udělal jsem toho více než ty, " +
          "teď je to na tobě! K čemu toto přispívá?"
  },
  {
    datum: "2024-10-30",
    nadpis: "30.10.2024",
    text: "Uvědomuji si, že jsem měl velké štěstí při prvním setkání s investičním světem. " +
          "Dostal jsem na hubu. Díky tomu jsem se stal více obezřetný a trpělivý. Neustále si " +
          "představuji, co by se stalo, kdyby mi počáteční spekulace vyšly. Začal bych ještě " +
          "více podstupovat riziko? Snažil bych se obeznámit moji rodinu s investováním a " +
          "mými radami? Měl bych zvýšené sebevědomí a šířil bych moje výsledky? Netuším, co by " +
          "se uvnitř mě odehrávalo. Ale dle mého názoru, je pravděpodobnější, že by to mělo " +
          "více negativní efekt, jak pro mě, tak i pro okolí.<br><br>" +
          "Také by mě zajímalo, zda bych se více vzdělával, či ne. Měl bych více zkoumat " +
          "problémy z více úhlů pohledu…"
  },
  {
    datum: "2024-10-05",
    nadpis: "Controversial Investing World, Active vs. Passive investing",
    text: "<em>Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. " +
          "Why does it captivate you? What or who do you turn to when you want to learn more?</em><br><br>" +
          "<strong>Controversial Investing World, Active vs. Passive investing</strong><br><br>" +
          "In financial markets many unsolved issues and analysis are waiting for the right answers. A lot of " +
          "questions about investing are on my mind. I like to do deep research because I think it is fascinating " +
          "and also brings me joy. So I would like to share some of my thoughts and opinions about one specific " +
          "topic, in which I am interested right now, passive and active investing.<br><br>" +
          "This is a popular controversial investing topic and it is discussed now everywhere, especially in the " +
          "world's largest economy, the USA. On one side, we have professional managers or smaller active investors " +
          "who are trying to beat some benchmark (usually index S&P 500). And on the other side, there are quite " +
          "new passive index exchange-traded funds (ETFs). These ETFs are trying to copy some indexes, which " +
          "usually include many stocks. Active investing or stock-picking is more visible in public because it has " +
          "more adrenaline included and it is not so \u201cboring\u201d like buying periodically some ETFs, trying " +
          "best to not interrupt strategy and doing almost nothing.<br><br>" +
          "So, what is better? Should I invest actively or passively? Like to many other questions, I think there " +
          "is no right answer for everybody. It depends on plenty of factors and the investor's circumstances. " +
          "There are always pros and cons in investing strategies, but investors should firstly spend some time " +
          "analyzing them, then stick to it and work on their behavior, which is often the biggest enemy. I " +
          "actively use X (formerly Twitter) and read tweets. And what I am seeing right now is people talking " +
          "over each other on this topic.<br><br>" +
          "In the investing world, I think there are decisions that work for me, but might not work for others. " +
          "And it takes time to understand what is right for you. But as I am more immersed in this, I believe " +
          "that the most important are true facts. For example, I like to see historical graphs of past " +
          "performance or the power of compounding of returns and also fees. Often the real big problems are " +
          "those which people easy overlook because they are really well hidden. People are not rational, they " +
          "are full of emotions. Comfortable and pleasant answers often mean more to us than what is really " +
          "true.<br><br>" +
          "Sure, there are more of these unclear spaces in investing. We could mention ESG vs. Traditional " +
          "investing, Real Estate vs. Crypto vs. Stocks etc.. I would love to orient myself and learn more " +
          "here.<br><br>" +
          "I think that through books or attending lectures by professionals is most efficient and understandable " +
          "learning about financial markets. It is also important to meet people, share thoughts and be open when " +
          "listening to them. After gaining some thoughts, think about it at home in peace for a while and find " +
          "what truly works for us.<br><br>" +
          "<em>(OPTIONAL) Design a new college course that responds to your desire to blend an area of business " +
          "with the arts and sciences. Give your course an eye-catching title and describe the course content. " +
          "Then explain why this course will set you up for career and life success. (250 words or fewer)</em><br><br>" +
          "<strong>Psychology behind financial decisions</strong><br><br>" +
          "I would love to see a really interesting combination of psychology and finance. I think human behavior " +
          "is ubiquitous overall in financial markets and investing strategies and it plays an important role in " +
          "deciding in different financial situations. This course from my point of view would have the potential " +
          "to make a big impact on students and the financial world.<br><br>" +
          "Students will learn core psychological theories that will more help with understanding the influence " +
          "of biases and emotions on financial decisions. The course will include history of irrational market " +
          "behavior which are most popular in forms of bubbles and crashes. This should be a greater part of " +
          "learning because in my opinion people's behavior is the same as it was centuries ago and it won't " +
          "also change much.<br><br>" +
          "We met with finances and money everyday. We try to measure risk, save as much we can and be rational. " +
          "But we don't know which demon is hidden in our minds. We need to face him, fight and not give up.<br><br>" +
          "We will find the best way by examining the issue from all angels. Students will try to demonstrate " +
          "their thesis in front of class and then discuss the pros and cons. Finally, we figure out the best " +
          "reasonable options."
  },
  {
    datum: "2026-08-20",
    nadpis: "Jak to celé funguje",
    text: "Tenhle web funguje tak, že skript <code>script.js</code> vezme " +
          "seznam zápisků z tohoto souboru (<code>posts.js</code>) a vykreslí " +
          "je na stránku. Takže abys přidal nový zápisek, <strong>neupravuješ " +
          "index.html</strong>, ale právě tenhle soubor."
  }
];
