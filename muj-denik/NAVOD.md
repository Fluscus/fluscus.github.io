# Jak zprovoznit svůj deník na webu (zdarma)

Tenhle balíček obsahuje jednoduchou webovou stránku (`index.html`, `style.css`,
`script.js`, `posts.js`). Návod tě provede tím, jak ji dostat zdarma na
skutečnou veřejnou adresu na internetu pomocí **GitHub Pages**, a jak si pak
sám(a) přidávat nové zápisky.

---

## Krok 1 – Založ si účet na GitHubu

1. Jdi na [github.com](https://github.com) a klikni na **Sign up**.
2. Zaregistruj se (stačí e-mail, uživatelské jméno a heslo). Je to zdarma.

## Krok 2 – Vytvoř repozitář se speciálním názvem

GitHub umí každému uživateli hostovat jednu "osobní" webovou stránku úplně
zdarma, pokud repozitář pojmenuješ přesně podle vzoru
`tvoje-uzivatelske-jmeno.github.io`.

1. Po přihlášení klikni vpravo nahoře na **+** → **New repository**.
2. Do pole **Repository name** napiš přesně: `tvoje-uzivatelske-jmeno.github.io`
   (nahraď to svým skutečným uživatelským jménem z GitHubu).
3. Nastav repozitář jako **Public**.
4. Klikni **Create repository**.

## Krok 3 – Nahraj soubory

1. V nově vytvořeném repozitáři klikni na **Add file** → **Upload files**.
2. Přetáhni tam všechny čtyři soubory: `index.html`, `style.css`, `script.js`,
   `posts.js` (tenhle návod nahrávat nemusíš).
3. Dole klikni **Commit changes**.

## Krok 4 – Zapni GitHub Pages

U repozitáře pojmenovaného `uzivatelske-jmeno.github.io` se stránka obvykle
zapne automaticky. Pro jistotu zkontroluj:

1. V repozitáři jdi do **Settings** → v levém menu **Pages**.
2. U položky **Source** by mělo být vybráno **Deploy from a branch**, větev
   **main** a složka **/ (root)**.
3. Za pár minut bude tvůj deník dostupný na adrese:
   `https://tvoje-uzivatelske-jmeno.github.io`

---

## Jak přidat nový zápisek

Nemusíš sahat na `index.html` ani na `script.js` – stačí upravit soubor
`posts.js`. Otevři ho (na GitHubu stačí kliknout na soubor a pak na tužku
✏️ „Edit"), a na **začátek** pole `posts` vlož nový blok, třeba takhle:

```js
const posts = [
  {
    datum: "2026-08-22",
    nadpis: "Název dnešního zápisku",
    text: "Tady napiš, co se dnes dělo. Klidně i víc vět."
  },
  // ...starší zápisky zůstávají pod tím
];
```

Pravidla:

- `datum` musí být ve formátu `RRRR-MM-DD` (rok-měsíc-den).
- `nadpis` a `text` piš do uvozovek `"..."`.
- Za každým blokem `{ ... }` (kromě posledního) musí být čárka.
- Chceš-li v textu odřádkovat, použij `<br>`, pro tučné písmo
  `<strong>...</strong>`, pro kurzívu `<em>...</em>`.

Po úpravě dole klikni **Commit changes** – web se do minuty sám aktualizuje.

---

## Jak si to vyzkoušet nanečisto na vlastním počítači

Stačí dvojklikem otevřít `index.html` v prohlížeči – zápisky se vykreslí
stejně jako na ostrém webu. Díky tomu si můžeš úpravy v `posts.js` ověřit
dřív, než je nahraješ na GitHub.

## Co dál, až ti to nebude stačit

Až si na tohle zvykneš, můžeš si zkusit:

- přidat kategorie/štítky k zápiskům,
- přidat vyhledávání podle textu,
- přidat vlastní doménu (v **Settings → Pages → Custom domain**) – doména
  samotná stojí typicky pár stovek Kč ročně, hosting na GitHub Pages zůstává
  zdarma.

Hodně štěstí s deníkem!
