const data = {
  about: {
    bio: [
      "Brandon Hopkins (b. 1997) is a British composer based in London, England. Self-taught from the age of twelve, his work has been featured in film, video games, and advertising, with recent performances at the London Festival of Contemporary Church Music. He is signed to both Music Vine and Uppbeat.",
      "His work explores the evolution of classical music in the digital age through contemporary tools and experimental processes."
    ],
    listen: [
      { label: "Spotify", url: "https://open.spotify.com/artist/6C8OQhTzwo2d9NkJ99exZE" },
      { label: "Apple Music", url: "https://music.apple.com/ca/artist/brandon-hopkins/1456625553" },
      { label: "SoundCloud", url: "https://soundcloud.com/brandon_hopkins" }
    ],
    follow: [
      { label: "Instagram", url: "https://www.instagram.com/brandonhopkins_/" }
    ],
    license: [
      { label: "Music Vine", url: "https://musicvine.com/browse/artist/brandon-hopkins" },
      { label: "Uppbeat", url: "https://uppbeat.io/browse/artist/brandon-hopkins" }
    ],
    support: [
      { label: "Bandcamp", url: "https://hopkinsbrandon.bandcamp.com/" }
    ]
  },
  releases: [
    {
      id: "keyboard-study-1",
      title: "Keyboard Study No. 1",
      subtitle: null,
      type: "Single",
      date: "28 March 2026",
      totalDuration: "00:42",
      image: "keyboard-study-1.png",
      tracklist: [
        { title: "Keyboard Study No. 1", duration: "00:42" }
      ],
      performanceNote: "For iPhone Keyboard",
      performanceLabel: "Note",
      listen: [
        { label: "SoundCloud", url: "https://on.soundcloud.com/6RiD1jn1A3B3yxJ4BC" }
      ],
      license: null,
      support: [
        { label: "Bandcamp", url: "https://hopkinsbrandon.bandcamp.com/track/keyboard-study-no-1" }
      ]
    },

    // {
    //   id: "infinite-loops",
    //   title: "Infinite Loops",
    //   subtitle: "String Quartet No. 2",
    //   type: "Album",
    //   date: "April 27, 2026",
    //   totalDuration: "33:43",
    //   image: "https://picsum.photos/seed/il1/384/384",
    //   tracklist: [
    //     { title: "Fast I", duration: "3:43" },
    //     { title: "Slow", duration: "3:43" },
    //     { title: "Dance", duration: "3:43" },
    //     { title: "Fast II", duration: "3:43" }
    //   ],
    //   performanceNote: "This work is for four amplified string players (Electric Violin I, Electric Violin II, Electric Viola, Electric Cello), each equipped with an independent loop pedal or looping system. Each instrument must be routed separately so that loops contain only the performer's own signal, without bleed from other players.",
    //   performanceLabel: "Performance note",
    //   listen: [
    //     { label: "Spotify", url: "#" },
    //     { label: "Apple Music", url: "#" },
    //     { label: "YouTube Music", url: "#" },
    //     { label: "Amazon Music", url: "#" },
    //     { label: "Tidal", url: "#" },
    //     { label: "Deezer", url: "#" },
    //     { label: "SoundCloud", url: "#" }
    //   ],
    //   license: [
    //     { label: "Music Vine", url: "#" },
    //     { label: "Uppbeat", url: "#" }
    //   ],
    //   support: [
    //     { label: "Bandcamp", url: "#" }
    //   ]
    // },

    // {
    //   id: "near-term",
    //   title: "Near Term Human Extinction Support Group",
    //   subtitle: null,
    //   type: "Single",
    //   date: "April 27, 2026",
    //   totalDuration: "4:12",
    //   image: "https://picsum.photos/seed/nt1/384/384",
    //   tracklist: [
    //     { title: "Near Term Human Extinction Support Group", duration: "4:12" }
    //   ],
    //   performanceNote: null,
    //   listen: [
    //     { label: "Spotify", url: "#" },
    //     { label: "Apple Music", url: "#" }
    //   ],
    //   license: null,
    //   support: [
    //     { label: "Bandcamp", url: "#" }
    //   ]
    // },

    // {
    //   id: "improvisations",
    //   title: "Improvisations",
    //   subtitle: null,
    //   type: "EP",
    //   date: "April 27, 2026",
    //   totalDuration: "18:22",
    //   image: "https://picsum.photos/seed/imp1/384/384",
    //   tracklist: [
    //     { title: "Improvisation I", duration: "4:55" },
    //     { title: "Improvisation II", duration: "6:10" },
    //     { title: "Improvisation III", duration: "7:17" }
    //   ],
    //   performanceNote: null,
    //   listen: [
    //     { label: "Spotify", url: "#" },
    //     { label: "Apple Music", url: "#" }
    //   ],
    //   license: [
    //     { label: "Uppbeat", url: "#" }
    //   ],
    //   support: [
    //     { label: "Bandcamp", url: "#" }
    //   ]
    // }
  ]
};

let activeId = "about";

function buildAboutHTML() {
  const a = data.about;
  return `
    <div class="about-bio">
      ${a.bio.map(p => `<p>${p}</p>`).join('')}
    </div>
    <div class="about-section" style="margin-top:2rem;">
      <p class="about-section-label">Listen</p>
      <div class="link-list">
        ${a.listen.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`).join('')}
      </div>
    </div>
    <div class="about-section">
      <p class="about-section-label">Follow</p>
      <div class="link-list">
        ${a.follow.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`).join('')}
      </div>
    </div>
    <div class="about-section">
      <p class="about-section-label">License</p>
      <div class="link-list">
        ${a.license.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`).join('')}
      </div>
    </div>
    <div class="about-section">
      <p class="about-section-label">Support</p>
      <div class="link-list">
        ${a.support.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`).join('')}
      </div>
    </div>
  `;
}

function buildReleaseHTML(r) {
  const tracklistHTML = r.tracklist.map((t, i) => `
    <li>
      <span class="tracklist-num">${i + 1}.</span>
      <span class="tracklist-title">${t.title}</span>
      <span class="tracklist-dots"></span>
      <span class="tracklist-duration">(${t.duration})</span>
    </li>
  `).join('');

  const metaParts = [];
  if (r.subtitle) metaParts.push(`<em>${r.subtitle}</em>`);
  metaParts.push(r.type);
  metaParts.push(r.totalDuration);
  metaParts.push(r.date);

  return `
    <p class="release-title">${r.title}</p>
    <img class="release-image" src="${r.image}" alt="${r.title}">

    ${r.tracklist.length > 1 ? `
    <div class="release-section">
      <p class="release-section-label">Tracklist</p>
      <ul class="tracklist">${tracklistHTML}</ul>
    </div>` : ''}

    ${r.performanceNote ? `
    <div class="release-section">
      <p class="release-section-value">${r.performanceNote}</p>
    </div>` : ''}

    <div class="release-section">
      <p class="release-section-label">Listen</p>
      <div class="link-list">
        ${r.listen.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`).join('')}
      </div>
    </div>

    ${r.license ? `
    <div class="release-section">
      <p class="release-section-label">License</p>
      <div class="link-list">
        ${r.license.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`).join('')}
      </div>
    </div>` : ''}

    <div class="release-section">
      <p class="release-section-label">Support</p>
      <div class="link-list">
        ${r.support.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`).join('')}
      </div>
    </div>

    <div class="release-section">
      <p class="release-section-label">Metadata</p>
      <p class="release-section-value">${metaParts.join(' · ')}</p>
    </div>
  `;
}

function buildNavHTML(isMobile) {
  let html = `<div class="nav-releases">`;
  data.releases.forEach(r => {
    const metaParts = [];
    if (r.subtitle) metaParts.push(`<em>${r.subtitle}</em>`);
    metaParts.push(r.type);
    metaParts.push(r.totalDuration);
    metaParts.push(r.date);
    html += `<div class="nav-release">
      <button class="nav-release-title${activeId === r.id ? ' active' : ''}" data-id="${r.id}"${isMobile ? ' data-mobile="1"' : ''}>${r.title}</button>
      <p class="nav-release-meta">${metaParts.join(' · ')}</p>
    </div>`;
  });
  html += `</div>`;
  return html;
}

function getContentHTML(id) {
  if (id === 'about') return buildAboutHTML();
  const r = data.releases.find(x => x.id === id);
  return r ? buildReleaseHTML(r) : '';
}

function setActive(id, isMobile) {
  activeId = id;

  // Swap favicon
  const favicon = document.getElementById('favicon');
  favicon.href = id === 'keyboard-study-1' ? 'keyboard-study-1.png' : 'favicon.png';

  document.getElementById('desktopNav').innerHTML = buildNavHTML(false);
  document.getElementById('rightColInner').innerHTML = getContentHTML(id);
  attachNavEvents(false);
  document.getElementById('mobileNav').innerHTML = buildNavHTML(true);
  attachNavEvents(true);
  if (isMobile) {
    document.getElementById('mobileMenu').classList.remove('open');
    const mc = document.getElementById('mobileContent');
    mc.innerHTML = getContentHTML(id);
    mc.classList.add('active');
  }
}

function attachNavEvents(isMobile) {
  const attr = isMobile ? '[data-mobile="1"]' : ':not([data-mobile])';
  document.querySelectorAll(`button[data-id]${attr}`).forEach(btn => {
    btn.addEventListener('click', () => setActive(btn.dataset.id, isMobile));
  });
}

function attachTitleEvents() {
  document.querySelectorAll('.site-title, .mobile-title').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('open');
      activeId = 'about';
      document.getElementById('desktopNav').innerHTML = buildNavHTML(false);
      document.getElementById('rightColInner').innerHTML = getContentHTML('about');
      attachNavEvents(false);
      document.getElementById('mobileNav').innerHTML = buildNavHTML(true);
      attachNavEvents(true);
      const mc = document.getElementById('mobileContent');
      mc.innerHTML = getContentHTML('about');
      mc.classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('desktopNav').innerHTML = buildNavHTML(false);
  document.getElementById('rightColInner').innerHTML = getContentHTML('about');
  document.getElementById('mobileNav').innerHTML = buildNavHTML(true);
  document.getElementById('mobileContent').innerHTML = getContentHTML('about');
  attachNavEvents(false);
  attachNavEvents(true);
  attachTitleEvents();

  document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.add('open');
  });
  document.getElementById('closeBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('open');
  });
});