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
  {  {
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
