/* ─────────────────────────────────────────────────────────────
   BRANDON HOPKINS — one page

   The page itself is static HTML now; this file only keeps the
   theme honest while the page is open.

   The previous build (releases data, two-column nav, per-release
   pages, dynamic favicon, audio player, mobile menu) is preserved
   untouched in script.legacy.js. Nothing here depends on it.
   ───────────────────────────────────────────────────────────── */

/* Dark from 19:00 to 07:00 local time, or whenever the device is set to dark.
   Change these two numbers to move the switch-over. The same rule is duplicated
   inline in index.html so it can run before first paint — edit both. */
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