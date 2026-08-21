// Tenhle skript vezme pole "posts" ze souboru posts.js
// a vyrenderuje ho do <main id="posts"> v index.html.
// Nemusíš tenhle soubor upravovat, aby ti web fungoval –
// stačí přidávat zápisky do posts.js. Ale klidně si ho prohlédni
// a zkus si na něm hrát, ať vidíš, jak to funguje. :)

function formatujDatum(iso) {
  const [rok, mesic, den] = iso.split("-");
  const mesice = [
    "ledna", "února", "března", "dubna", "května", "června",
    "července", "srpna", "září", "října", "listopadu", "prosince"
  ];
  return `${parseInt(den, 10)}. ${mesice[parseInt(mesic, 10) - 1]} ${rok}`;
}

function vykresliZapisky() {
  const kontejner = document.getElementById("posts");

  if (!posts || posts.length === 0) {
    kontejner.innerHTML = '<p class="empty">Zatím tu není žádný zápisek. Přidej první do posts.js!</p>';
    return;
  }

  const razene = [...posts].sort((a, b) => (a.datum < b.datum ? 1 : -1));

  kontejner.innerHTML = razene.map(zapisek => `
    <article class="post">
      <time datetime="${zapisek.datum}">${formatujDatum(zapisek.datum)}</time>
      <h2>${zapisek.nadpis}</h2>
      <p>${zapisek.text}</p>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", vykresliZapisky);
