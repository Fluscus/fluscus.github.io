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
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
  },
  {
    citat: "Nothing in life is as important as you think it is when you are thinking about it.",
    autor: "Daniel Kahneman",
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
  },
  {
    citat: "The best math you can learn is how to calculate the future cost of current decisions.",
    autor: "Neznámý autor",
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
  },
  {
    citat: "Just before you die, you meet all the versions of yourself that you could have " +
           "been. The definition of a good life is that in that process, you are pleased " +
           "with how you turn out.",
    autor: "Neznámý autor",
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
  },
  {
    citat: "The ability to do what you want, when you want, with who you want, for as long " +
           "as you want to, pays the highest dividend that exists in finance.",
    autor: "Morgan Housel",
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
  },
  {
    citat: "Money's greatest intrinsic value—and this can't be overstated—is its ability to " +
           "give you control over your time.",
    autor: "Morgan Housel",
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
  },
  {
    citat: "Spending money to show people how much money you have is the fastest way to " +
           "have less money.",
    autor: "Morgan Housel",
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
  },
  {
    citat: "Growth is driven by compounding, which always takes time. Destruction is driven " +
           "by single points of failure, which can happen in seconds, and loss of " +
           "confidence, which can happen in an instant.",
    autor: "Morgan Housel",
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
  },
  {
    citat: "Nothing is as good or as bad as it seems.",
    autor: "Morgan Housel",
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
  },
  {
    citat: "Risk is what's left over when you think you've thought of everything.",
    autor: "Morgan Housel",
    komentar: "Největším rizikem v investování není žádný konkrétní scénář, na který se dá připravit – " +
      "je to samotná nejistota budoucnosti. Nikdo neví přesně, kde bude jakýkoliv trh za rok, " +
      "za pět nebo za dvacet let. Investování je těžké ne proto, že bychom neuměli počítat " +
      "pravděpodobnosti nebo číst grafy, ale proto, že se jich racionálně nedržíme a zároveň " +
      "se nikdy nedá promyslet úplně všechno dopředu se stoprocentní jistotou."
  },
  {
    citat: "Optimism sounds like a sales pitch. Pessimism sounds like someone trying to " +
           "help you.",
    autor: "Morgan Housel",
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
  },
  {
    citat: "His skill is investing, but his secret is time. That's how compounding works. " +
           "Think of this another way. Buffett is the richest investor of all time. But " +
           "he's not actually the greatest—at least not when measured by average annual " +
           "returns.",
    autor: "Morgan Housel",
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
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
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
  },
  {
    citat: "People are strange. They are constantly angered by trivial things but on a major " +
           "matter like totally wasting their lives they hardly seem to notice.",
    autor: "Charles Bukowski",
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
  },
  {
    citat: "So much misery is just an unfair judging of the statistics.",
    autor: "Alain de Botton",
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
  },
  {
    citat: "If you only wish to be happy, this could be easily accomplished; but we wish to " +
           "be happier than other people, and this is always difficult, for we believe " +
           "others to be happier than they are.",
    autor: "Montesquieu",
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
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
    komentar: "Sem napiš svůj pohled na tenhle citát – proč tě zaujal, souhlasíš s ním, " +
              "nebo si o něm myslíš něco jiného. Klidně ho smaž a nahraď svým vlastním citátem."
  }
];
