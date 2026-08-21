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
    datum: "2026-08-21",
    nadpis: "První zápisek",
    text: "Dnes jsem si založil svůj vlastní webový deník! Tohle je ukázkový " +
          "zápisek – klidně ho smaž a nahraď svým vlastním. Stačí zkopírovat " +
          "tenhle blok, upravit datum, nadpis a text."
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
