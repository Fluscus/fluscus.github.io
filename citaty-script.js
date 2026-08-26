// Tenhle skript vezme pole "citaty" ze souboru citaty.js
// a vyrenderuje ho do <div id="citaty"> v citaty.html.
// Klikni na citát a pod ním se rozbalí (nebo zase sbalí) tvůj komentář.

function vykresliCitaty() {
  const kontejner = document.getElementById("citaty");

  if (!citaty || citaty.length === 0) {
    kontejner.innerHTML = '<p class="empty">Zatím tu není žádný citát. Přidej první do citaty.js!</p>';
    return;
  }

  kontejner.innerHTML = citaty.map(polozka => `
    <article class="citat-card">
      <blockquote class="citat-text">„${polozka.citat}“</blockquote>
      <p class="citat-autor">— ${polozka.autor}</p>
      <p class="citat-komentar">${polozka.komentar}</p>
    </article>
  `).join("");
}

// Kliknutí kdekoliv uvnitř kontejneru zachytíme jednou (na rodiči),
// a pak zjistíme, na které konkrétní kartě (.citat-card) se kliklo.
// Tomu se říká "delegování událostí" – nemusíme věšet listener
// na každou kartu zvlášť.
function prepniCitat(event) {
  const karta = event.target.closest(".citat-card");
  if (!karta) return;
  karta.classList.toggle("is-open");
}

document.addEventListener("DOMContentLoaded", () => {
  vykresliCitaty();
  document.getElementById("citaty").addEventListener("click", prepniCitat);
});
