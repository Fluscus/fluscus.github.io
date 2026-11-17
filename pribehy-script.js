// Renders the "pribehy" array from pribehy.js into <div id="pribehy"> in pribehy.html.

function vykresliPribehy() {
  const kontejner = document.getElementById("pribehy");

  if (!pribehy || pribehy.length === 0) {
    kontejner.innerHTML = '<p class="empty">Zatím tu není žádný příběh. Přidej první do pribehy.js!</p>';
    return;
  }

  kontejner.innerHTML = pribehy.map(pribeh => `
    <article class="post">
      <h2>${pribeh.nadpis}</h2>
      <p>${pribeh.text}</p>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", vykresliPribehy);
