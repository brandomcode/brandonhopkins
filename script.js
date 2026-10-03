/* ─────────────────────────────────────────────────────────────
   BRANDON HOPKINS — one page

   The page itself is static HTML; this file keeps the theme
   honest while the page is open, and streams the bio in.

   The previous build (releases data, two-column nav, per-release
   pages, dynamic favicon, audio player, mobile menu) is preserved
   untouched in script.legacy.js. Nothing here depends on it.
   ───────────────────────────────────────────────────────────── */

/* Dark from 19:00 to 07:00 local time, or whenever the device is set to dark.
   Change these two numbers to move the switch-over. */
const DARK_FROM = 19;   // 7pm
const DARK_UNTIL = 7;   // 7am

function isNight() {
  const h = new Date().getHours();
  return h >= DARK_FROM || h < DARK_UNTIL;
}

function prefersDark() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme() {
  const theme = (isNight() || prefersDark()) ? "dark" : "light";
  if (document.documentElement.getAttribute("data-theme") !== theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
}

applyTheme();

// catch the switch-over for anyone who leaves the page open
setInterval(applyTheme, 60 * 1000);

// and follow the device if it changes underneath us
if (window.matchMedia) {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyTheme);
}


/* ── STREAMING ──
   Writes the whole left column in, the way a chat reply streams:
   the bio word by word, then each heading and link, then the
   copyright. The text is in the HTML from the start, so search
   engines and screen readers get all of it; this only changes
   when each part becomes visible.

   Anything not yet revealed is display:none, so it takes up no
   space and you can only scroll as far as what's been written.
   Each piece is switched on once and stays on, and only a page
   reload plays it again. */

const START_MS = 400;   // pause before the first word
const WORD_MS = 18;     // base gap between words…
const JITTER_MS = 22;   // …plus up to this much, so it doesn't feel mechanical
const COMMA_MS = 60;    // extra after , : ;
const STOP_MS = 140;    // extra after . ! ?
const PARA_MS = 320;    // before each new paragraph, the links, and the copyright
const GROUP_MS = 240;   // before each heading (Listen, Follow…)
const ITEM_MS = 90;     // between links

(function stream() {
  const content = document.querySelector(".content");
  if (!content || !document.documentElement.classList.contains("will-stream")) return;

  // Blocks stay collapsed until the first piece inside them appears
  for (const block of content.querySelectorAll("p, .links, .group, h2, li")) {
    block.classList.add("pending");
  }

  const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  const pieces = [];    // { el, at } in reveal order
  let t = START_MS;
  let lastBlock = null;

  function piece(text) {
    const el = document.createElement("span");
    el.className = "w";
    el.textContent = text;
    pieces.push({ el, at: t });
    return el;
  }

  for (const node of textNodes) {
    if (!node.textContent.trim()) continue;   // leave indentation alone

    const block = node.parentElement.closest("p, h2, li");
    if (lastBlock && block !== lastBlock) {
      t += block.matches("h2") ? GROUP_MS : block.matches("li") ? ITEM_MS : PARA_MS;
    }
    lastBlock = block;

    // Headings, links and the copyright arrive whole, not word by word
    if (block.matches("h2, li, .copyright")) {
      node.replaceWith(piece(node.textContent.trim()));
      continue;
    }

    const frag = document.createDocumentFragment();

    for (const part of node.textContent.split(/(\s+)/)) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
        continue;
      }

      frag.appendChild(piece(part));

      t += WORD_MS + Math.random() * JITTER_MS;
      if (/[.!?]$/.test(part)) t += STOP_MS;
      else if (/[,:;]$/.test(part)) t += COMMA_MS;
    }

    node.replaceWith(frag);
  }

  content.classList.add("is-streaming");

  function reveal(el) {
    el.classList.add("in");
    for (let p = el.parentElement; p && p !== content; p = p.parentElement) {
      p.classList.remove("pending");
    }
  }

  const start = performance.now();
  let next = 0;

  function tick(now) {
    const elapsed = now - start;
    while (next < pieces.length && pieces[next].at <= elapsed) {
      reveal(pieces[next].el);
      next++;
    }

    if (next < pieces.length) {
      requestAnimationFrame(tick);
    } else {
      // let the last piece finish fading, then drop the streaming styles
      setTimeout(() => {
        content.classList.remove("is-streaming");
        content.classList.add("is-done");
      }, 200);
    }
  }

  requestAnimationFrame(tick);
})();