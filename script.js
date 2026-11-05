(() => {
  /* ========== SVG icon helpers ========== */
  const ICONS = {
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    bulb: '<path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/><line x1="10" y1="22" x2="14" y2="22"/>',
    grad: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
    trophy: '<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v4a5 5 0 0 1-10 0V4z"/><path d="M17 8h2a2 2 0 0 1 0 4h-2"/><path d="M7 8H5a2 2 0 0 0 0 4h2"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>',
    external2: '<path d="M7 17 17 7M7 7h10v10"/>',
    pin: '<path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="2"/>',
    check: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    map: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    quote: '<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>',
    mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3M8 22h8"/>',
    sun: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>',
    chip: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
    brain: '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/>',
    scissors: '<path d="m16.02 12.62 1.48-1.48a2 2 0 0 0 0-2.83L14.83 5.4a2 2 0 0 0-2.83 0L10.52 6.9"/><path d="m7.98 11.38-1.48 1.48a2 2 0 0 0 0 2.83l2.67 2.67a2 2 0 0 0 2.83 0l1.48-1.48"/><path d="M14 8 8 14"/>',
    grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
    git: '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>',
    "shield-plus": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12h6"/><path d="M12 9v6"/>',
    linkedin: '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/>',
    github: '<path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3z"/>',
    // Official-style marks (simplified brand glyphs)
    scholar: '<path fill="#FFFFFF" d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>',
    orcid: '<path fill="currentColor" d="M4.7 4.2a1.8 1.8 0 1 1 3.6 0 1.8 1.8 0 0 1-3.6 0ZM4.9 7.5h3.2v13H4.9v-13Zm5 0h4.6c4.6 0 7.5 2.5 7.5 6.5s-2.9 6.5-7.5 6.5H9.9v-13Zm3.2 2.2v8.6h1.4c2.8 0 4.6-1.35 4.6-4.3s-1.8-4.3-4.6-4.3h-1.4Z"/>',
    researchgate: '<text x="3.4" y="18.7" fill="currentColor" font-family="Georgia,Times New Roman,serif" font-size="19" font-weight="400">R</text><text x="15.2" y="9.2" fill="currentColor" font-family="Arial,Helvetica,sans-serif" font-size="9" font-weight="500">G</text>',
wos: '<g transform="translate(2,2) scale(0.85)"><path fill="#000000" d="M5.5 6.8C3.2 9.6 2 13.2 2 17s1.2 7.4 3.5 10.2l7.2-1.7c-1.7-2.3-2.6-5.3-2.6-8.5s.9-6.2 2.6-8.5L5.5 6.8z"/><path fill="#5B2DBF" d="M13.2 4.2c6.2 1.4 11.5 4.8 15.1 9.5l-5.1 5.8c-2.5-3.5-6.2-6.1-10.5-7.2l.5-8.1z"/><path fill="#12B000" d="M13.2 19.7c4.3-1.1 8-3.7 10.5-7.2l5.1 5.8c-3.6 4.7-8.9 8.1-15.1 9.5l-.5-8.1z"/></g>',

scopus: '<text x="12" y="15.8" text-anchor="middle" fill="currentColor" font-family="Arial,Helvetica,sans-serif" font-size="8.2" font-weight="700" letter-spacing="-0.45">Scopus</text>',
    medal: '<circle cx="12" cy="8" r="5"/><path d="M8.5 12 7 22l5-3 5 3-1.5-10"/>',
    empty: '<path d="m12 8-2 4 2 4 2-4-2-4Z"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    barcode: '<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',
  };

  function svg(name, attrs = "") {
    const body = ICONS[name] || "";
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${attrs}>${body}</svg>`;
  }

  function svgFill(name, attrs = "") {
    const body = ICONS[name] || "";
    return `<svg viewBox="0 0 24 24" fill="currentColor" ${attrs}>${body}</svg>`;
  }

  /* ========== Render helpers ========== */
  function sectionHeading(eyebrow, title, desc) {
    return `
      <div class="section-heading">
        <span class="section-eyebrow">${eyebrow}</span>
        <h2 class="section-title">${title}</h2>
        ${desc ? `<p class="section-desc">${desc}</p>` : ""}
      </div>`;
  }

  function viewAllBtn(viewAllId) {
    if (!viewAllId) return "";
    return `
      <div class="view-all-wrap">
        <a class="btn-view-all" href="section.html?s=${encodeURIComponent(viewAllId)}" target="_blank" rel="noopener noreferrer">
          View all
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>
        </a>
      </div>`;
  }

  /* ========== Build page from data ========== */
  function renderNav(data) {
    const primary = document.getElementById("primary-nav");
    const mobile = document.getElementById("mobile-nav");
    if (!primary || !mobile) return;

    primary.innerHTML = data.nav
      .map(
        (item) => `
      <li data-nav-item>
        <a href="#${item.id}">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[item.icon] || ""}</svg>
          <span>${item.label}</span>
        </a>
      </li>`
      )
      .join("");

    mobile.innerHTML = data.nav
      .map((item) => `<li><a href="#${item.id}">${item.label}</a></li>`)
      .join("");
  }

  function renderHero(h) {
    const socialBtns = h.social
      .map((s) => {
        const icon = s.svg
          ? svgFill(s.svg)
          : s.text
            ? `<span class="social-text">${s.text}</span>`
            : "";
        return `<a href="${s.url}" class="social-btn" style="${s.style}" aria-label="${s.label}" title="${s.label}" target="_blank" rel="noopener noreferrer">${icon}</a>`;
      })
      .join("");

    const cvItems = h.cv.items
      .map(
        (i) =>
          `<a href="${i.url}">${svg(i.icon)} ${i.label}</a>`
      )
      .join("");

    const contactItems = h.contact.items
      .map(
        (i) =>
          `<a href="${i.url}">${svg(i.icon)} ${i.label}</a>`
      )
      .join("");

    return `
    <section id="top" class="hero">
      <div class="hero-wash hero-wash-1" aria-hidden="true"></div>
      <div class="hero-wash hero-wash-2" aria-hidden="true"></div>
      <div class="container hero-grid">
        <div>
          <p class="hero-greeting">${h.greeting}</p>
          <h1 class="hero-name">${h.name}</h1>
          <p class="hero-tagline">${h.tagline}</p>
          <div class="social-row">${socialBtns}</div>
          <div class="hero-actions">
            <div class="dropdown">
              <button type="button" class="btn-primary" data-dropdown>
                ${svg("file")}
                ${h.cv.label}
                <svg class="chevron icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div class="dropdown-panel">${cvItems}</div>
            </div>
            <div class="dropdown">
              <button type="button" class="btn-outline" data-dropdown>
                ${svg("mail")}
                ${h.contact.label}
                <svg class="chevron icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div class="dropdown-panel" style="min-width:18rem">${contactItems}</div>
            </div>
          </div>
        </div>
        <div class="hero-portrait">
          <div class="portrait-wrap">
            <div class="portrait-glow" aria-hidden="true"></div>
            <div class="portrait-frame">
              <img src="${h.photo}" alt="${h.photoAlt}" width="420" height="420" />
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }

  function renderAbout(a) {
    const paras = a.paragraphs.map((p) => `<p>${p}</p>`).join("");
    const facts = a.facts
      .map(
        (f) => `
      <div class="fact-card">
        <p class="fact-label">${f.label}</p>
        <p class="fact-value">${f.value}</p>
      </div>`
      )
      .join("");

    return `
    <section id="about" class="section">
      <div class="container">
        ${sectionHeading(a.eyebrow, a.title)}
        <div class="about-grid">
          <div class="about-text">${paras}</div>
          <div class="facts-grid">${facts}</div>
        </div>
      </div>
    </section>`;
  }

  function renderSkills(s) {
    const bars = s.core
      .map(
        (sk) => `
      <div class="skill-item">
        <div class="skill-bar-header"><span class="skill-name">${sk.name}</span><span class="skill-level">${sk.level}%</span></div>
        <div class="skill-track"><div class="skill-fill" data-level="${sk.level}"></div></div>
      </div>`
      )
      .join("");

    const tools = s.tools
      .map(
        (t) =>
          `<span class="tool-tag"><span class="tool-icon ${t.icon}" aria-hidden="true"></span>${t.name}</span>`
      )
      .join("");

    return `
    <section id="skills" class="section">
      <div class="container">
        ${sectionHeading(s.eyebrow, s.title, s.desc)}
        <div class="skills-grid">
          <div class="skills-card">
            <h3 class="skills-card-title">Core Proficiencies</h3>
            <div class="skill-bars">${bars}</div>
          </div>
          <div class="tools-card">
            <h3 class="skills-card-title">Tools &amp; Technologies</h3>
            <div class="tools-list">${tools}</div>
          </div>
        </div>
      </div>
    </section>`;
  }

  function renderInterests(i) {
    const cards = i.items
      .map(
        (item) => `
      <div class="interest-card">
        <span class="interest-icon">${svg(item.icon)}</span>
        <span class="interest-label">${item.label}</span>
      </div>`
      )
      .join("");

    return `
    <section id="interests" class="section">
      <div class="container">
        ${sectionHeading(i.eyebrow, i.title, i.desc)}
        <div class="interests-grid">${cards}</div>
      </div>
    </section>`;
  }

  function renderAcademics(a) {
    const timeline = a.timeline
      .map(
        (t) => `
      <li class="timeline-item">
        <span class="timeline-dot"><span></span></span>
        <span class="period-badge">${t.period}</span>
        <h4 class="timeline-degree">
          ${svg("grad")}
          ${t.degree}
        </h4>
        <p class="timeline-inst">${t.institute}</p>
      </li>`
      )
      .join("");

    const highlights = a.highlights
      .map(
        (h) => `
      <div class="highlight-row">
        <span class="highlight-icon-circle" aria-hidden="true">${svg(h.icon)}</span>
        <div class="highlight-body">
          <div class="highlight-main">
            <h4 class="highlight-title">${h.title}</h4>
            <span class="highlight-date">${h.date}</span>
          </div>
          <p class="highlight-sub">${h.sub}</p>
        </div>
      </div>`
      )
      .join("");

    return `
    <section id="academics" class="section">
      <div class="container">
        ${sectionHeading(a.eyebrow, a.title, a.desc)}
        <div class="academics-grid">
          <div>
            <h3>Journey</h3>
            <ol class="timeline">${timeline}</ol>
          </div>
          <div class="highlights-panel">
            <div class="highlights-panel-header">
              <span class="highlights-pin" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"/></svg>
              </span>
              <h3 class="highlights-panel-title">Academic Highlights</h3>
            </div>
            <div class="highlights-panel-divider"></div>
            <div class="highlights-viewport" aria-live="polite">
              <div class="highlights-list" id="highlights-ticker">${highlights}</div>
            </div>
          </div>
        </div>
        ${viewAllBtn("academics")}
      </div>
    </section>`;
  }

  function renderPublications(p) {
    const cards = p.items
      .map((pub) => {
        const pdf = pub.pdf
          ? `<a href="${pub.pdf}" class="pub-pdf">PDF ${svg("external", 'width="14" height="14"')}</a>`
          : "";
        return `
      <article class="pub-card">
        <div class="pub-badges">
          <span class="badge badge-primary">${pub.type}</span>
          <span class="badge ${pub.statusClass}">${pub.status}</span>
        </div>
        <h3 class="pub-title">${pub.title}</h3>
        <p class="pub-abstract">${pub.abstract}</p>
        <p class="pub-authors">${pub.authors}</p>
        <div class="pub-meta">
          <span>${svg("calendar")} ${pub.date}</span>
          <span>${svg("file")} ${pub.venue}</span>
          <span>${svg("building")} ${pub.publisher}</span>
          ${pdf}
        </div>
      </article>`;
      })
      .join("");

    return `
    <section id="publications" class="section">
      <div class="container">
        ${sectionHeading(p.eyebrow, p.title, p.desc)}
        <div class="pubs-list">${cards}</div>
        ${viewAllBtn("publications")}
      </div>
    </section>`;
  }

  function renderProjects(p) {
    const cards = p.items
      .map((proj) => {
        const tags = proj.tags
          .map((t) => `<span class="project-tag">${t}</span>`)
          .join("");
        const pdf =
          proj.pdf && proj.pdf !== "#"
            ? `<a href="${proj.pdf}" class="pub-pdf">PDF ${svg("external", 'width="14" height="14"')}</a>`
            : `<a href="${proj.pdf || "#"}" class="pub-pdf">PDF ${svg("external", 'width="14" height="14"')}</a>`;
        return `
      <article class="project-card">
        <span class="project-period">${svg("calendar")} ${proj.period}</span>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.desc}</p>
        <div class="project-tags">${tags}</div>
        ${pdf}
      </article>`;
      })
      .join("");

    return `
    <section id="projects" class="section">
      <div class="container">
        ${sectionHeading(p.eyebrow, p.title, p.desc)}
        <div class="projects-grid">${cards}</div>
        ${viewAllBtn("projects")}
      </div>
    </section>`;
  }

  function renderExperiences(e) {
    const items = e.items
      .map(
        (exp) => `
      <article class="experience-item">
        <div class="experience-year"><span>${exp.year}</span></div>
        <div class="experience-marker"></div>
        <div class="experience-card">
          <div class="experience-icon">${svg("book")}</div>
          <div class="experience-content">
            <h3>${exp.title}</h3>
            <div class="experience-meta">
              <span class="experience-company">${exp.company}</span>
              <span class="experience-separator">·</span>
              <span>${exp.period}</span>
            </div>
            <p>${exp.desc}</p>
          </div>
        </div>
      </article>`
      )
      .join("");

    return `
    <section id="experiences" class="section">
      <div class="container">
        ${sectionHeading(e.eyebrow, e.title, e.desc)}
        <div class="experience-timeline">${items}</div>
        ${viewAllBtn("experiences")}
      </div>
    </section>`;
  }

  function renderCertificates(c) {
    const cards = c.items
      .map((cert) => {
        const skills = cert.skills
          .map((s) => `<span class="cert-skill">${s}</span>`)
          .join("");
        const certNo = cert.certNo
          ? `<span class="cert-no">${svg("barcode")} ${cert.certNo}</span>`
          : "";
        return `
      <article class="cert-card">
        <div class="cert-header">
          <span class="cert-icon">${svg("check")}</span>
          <span class="cert-date">${cert.date}</span>
        </div>
        <h3 class="cert-title">${cert.title}</h3>
        <p class="cert-issuer">${cert.issuer}</p>
        <div class="cert-skills">${skills}</div>
        <div class="cert-footer">
          ${certNo}
          <a href="${cert.url}" class="cert-link">View Certificate ${svg("external")}</a>
        </div>
      </article>`;
      })
      .join("");

    return `
    <section id="certificates" class="section">
      <div class="container">
        ${sectionHeading(c.eyebrow, c.title, c.desc)}
        <h3 class="cert-subtitle">${c.subtitle}</h3>
        <div class="certs-grid-3">${cards}</div>
        ${viewAllBtn("certificates")}
      </div>
    </section>`;
  }

  function renderAwards(a) {
    const cards = a.items
      .map(
        (item) => `
      <article class="info-card horizontal">
        <span class="info-icon">${svg("medal")}</span>
        <div>
          <h3 class="info-title">${item.title}</h3>
          <div class="info-meta">
            <span class="institution">${item.institution}</span>
            <span class="sep">·</span>
            <span class="period">${item.period}</span>
          </div>
          <p class="info-detail">${item.detail}</p>
        </div>
      </article>`
      )
      .join("");

    return `
    <section id="awards" class="section">
      <div class="container">
        ${sectionHeading(a.eyebrow, a.title, a.desc)}
        <div class="cards-grid-2">${cards}</div>
        ${viewAllBtn("awards")}
      </div>
    </section>`;
  }

  function renderTalks(t) {
    const cards = t.items
      .map(
        (item) => `
      <article class="info-card horizontal">
        <span class="info-icon">${svg("mic")}</span>
        <div>
          <h3 class="info-title">${item.title}</h3>
          <div class="info-meta">
            <span class="role">${item.role}</span>
            <span class="sep">·</span>
            <span class="institution">${item.institution}</span>
            <span class="sep">·</span>
            <span class="period">${item.period}</span>
          </div>
          <p class="info-detail">${item.detail}</p>
        </div>
      </article>`
      )
      .join("");

    return `
    <section id="talks" class="section">
      <div class="container">
        ${sectionHeading(t.eyebrow, t.title, t.desc)}
        <div class="cards-grid-2">${cards}</div>
        ${viewAllBtn("talks")}
      </div>
    </section>`;
  }

  function renderMemberships(m) {
    const cards = m.items
      .map(
        (item) => `
      <article class="info-card horizontal">
        <span class="info-icon">${svg("check")}</span>
        <div>
          <h3 class="info-title">${item.title}</h3>
          <div class="info-meta">
            <span class="role">${item.role}</span>
            <span class="sep">·</span>
            <span class="period">${item.period}</span>
          </div>
          <p class="info-detail">${item.detail}</p>
        </div>
      </article>`
      )
      .join("");

    return `
    <section id="memberships" class="section">
      <div class="container">
        ${sectionHeading(m.eyebrow, m.title, m.desc)}
        <div class="cards-grid-2">${cards}</div>
        ${viewAllBtn("memberships")}
      </div>
    </section>`;
  }

  function renderResponsibility(r) {
    let body;
    if (!r.items || r.items.length === 0) {
      body = `
        <div class="empty-state" style="background:color-mix(in srgb, var(--card) 40%, transparent)">
          <span class="empty-icon" style="border-radius:1rem">${svg("empty")}</span>
          <p class="empty-text" style="max-width:28rem;justify-content:center">${r.empty}</p>
        </div>`;
    } else {
      body = r.items
        .map(
          (item) => `
        <article class="info-card horizontal">
          <span class="info-icon">${svg("check")}</span>
          <div>
            <h3 class="info-title">${item.title}</h3>
            <div class="info-meta">
              <span class="role">${item.role || ""}</span>
              <span class="sep">·</span>
              <span class="period">${item.period || ""}</span>
            </div>
            <p class="info-detail">${item.detail || ""}</p>
          </div>
        </article>`
        )
        .join("");
      body = `<div class="cards-grid-2">${body}</div>`;
    }

    return `
    <section id="responsibility" class="section">
      <div class="container">
        ${sectionHeading(r.eyebrow, r.title, r.desc)}
        ${body}
        ${viewAllBtn("responsibility")}
      </div>
    </section>`;
  }

  function renderBlog(b) {
    const langs = b.languages
      .map((l) => `<span class="blog-lang">${l}</span>`)
      .join("");
    const f = b.featured;

    return `
    <section id="blog" class="section">
      <div class="container">
        ${sectionHeading(b.eyebrow, b.title, b.desc)}
        <div class="blog-grid">
          <div class="blog-intro">
            <div>
              ${svg("quote")}
              <p class="blog-intro-title">${b.introTitle}</p>
              <div class="blog-langs">${langs}</div>
            </div>
            <a href="${b.blogUrl}" target="_blank" rel="noopener noreferrer" class="blog-cta">
              Visit my Blog
              ${svg("external2")}
            </a>
          </div>
          <a href="${f.url}" target="_blank" rel="noopener noreferrer" class="featured-article">
            <div>
              <div class="featured-meta">
                <span class="featured-tag">${f.tag}</span>
                <span class="featured-date">${f.date}</span>
                <span class="featured-time">${svg("clock")} ${f.readTime}</span>
              </div>
              <h3 class="featured-title">${f.title}</h3>
              <p class="featured-excerpt">${f.excerpt}</p>
            </div>
            <span class="featured-link">
              Read article
              ${svg("external2")}
            </span>
          </a>
        </div>
      </div>
    </section>`;
  }

  function renderFooter(data) {
    const f = data.footer;
    const sections = data.nav
      .map((n) => `<li><a href="#${n.id}">${n.label}</a></li>`)
      .join("");
    const links = (f.externalLinks || [])
      .map(
        (l) =>
          `<li><a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label} ${svg("external2")}</a></li>`
      )
      .join("");

    return `
    <div class="container footer-grid">
      <div>
        <div class="footer-brand">
          <img src="logo-192.png" alt="AM" class="logo-img footer-logo-img" width="40" height="40" />
          <div>
            <p class="footer-name">${f.name}</p>
            <p class="footer-role">${f.role}</p>
          </div>
        </div>
        <p class="footer-desc">${f.field}</p>
        <p class="footer-address">
          ${svg("map")}
          ${f.address}
        </p>
        <div class="footer-emails">
          <a href="mailto:${f.email}">${svg("mail")} ${f.email}</a>
        </div>
      </div>
      <div>
        <h3 class="footer-col-title">Page Sections</h3>
        <ul class="footer-sections">${sections}</ul>
      </div>
      <div>
        <h3 class="footer-col-title">External Links</h3>
        <ul class="footer-links">${links}</ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">© <span id="year"></span> ${f.name}. All rights reserved.</div>
    </div>`;
  }

  /* ========== Interactions (from original script) ========== */
  function initInteractions(data) {
    const header = document.querySelector(".site-header");
    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const sections = data.nav.map((n) => n.id);

    // Preloader
    const preloader = document.getElementById("preloader");
    const preloaderLogo = document.getElementById("preloader-logo");
    const navLogo = document.getElementById("nav-logo");

    document.body.classList.add("preloading");

    const runPreloader = () => {
      if (!preloader || !preloaderLogo || !navLogo) {
        preloader?.classList.add("done");
        navLogo?.classList.add("visible");
        document.body.classList.remove("preloading");
        return;
      }

      const startRect = preloaderLogo.getBoundingClientRect();
      const targetRect = navLogo.getBoundingClientRect();
      const scaleX = targetRect.width / startRect.width;
      const scaleY = targetRect.height / startRect.height;
      const scale = Math.min(scaleX, scaleY);
      const startCenterX = startRect.left + startRect.width / 2;
      const startCenterY = startRect.top + startRect.height / 2;
      const targetCenterX = targetRect.left + targetRect.width / 2;
      const targetCenterY = targetRect.top + targetRect.height / 2;
      const deltaX = targetCenterX - startCenterX;
      const deltaY = targetCenterY - startCenterY;

      preloaderLogo.style.transition = "transform 0.85s cubic-bezier(0.65, 0, 0.35, 1)";
      preloaderLogo.getBoundingClientRect();
      preloaderLogo.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;

      const finish = () => {
        preloader.classList.add("done");
        navLogo.classList.add("visible");
        document.body.classList.remove("preloading");
        setTimeout(() => preloader.remove(), 500);
      };
      preloaderLogo.addEventListener("transitionend", finish, { once: true });
      setTimeout(finish, 1100);
    };

    const startWhenReady = () => setTimeout(runPreloader, 600);
    if (document.readyState === "complete") startWhenReady();
    else window.addEventListener("load", startWhenReady);

    // Scroll header
    const onScroll = () => {
      if (window.scrollY > 24) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Mobile menu
    menuBtn?.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    document.querySelectorAll(".mobile-menu a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuBtn?.setAttribute("aria-expanded", "false");
      });
    });

    // Overflow "More" nav
    const primaryNav = document.getElementById("primary-nav");
    const navMore = document.getElementById("nav-more");
    const moreBtn = document.getElementById("more-btn");
    const moreDropdown = document.getElementById("more-dropdown");
    const navLinksWrapper = document.querySelector(".nav-links-wrapper");
    let originalItems = [];
    if (primaryNav) {
      originalItems = Array.from(primaryNav.querySelectorAll("[data-nav-item]"));
    }

    const closeMore = () => {
      if (!moreDropdown || !moreBtn) return;
      moreDropdown.hidden = true;
      moreBtn.setAttribute("aria-expanded", "false");
    };
    const openMore = () => {
      if (!moreDropdown || !moreBtn) return;
      moreDropdown.hidden = false;
      moreBtn.setAttribute("aria-expanded", "true");
    };
    moreBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      if (moreDropdown.hidden) openMore();
      else closeMore();
    });
    document.addEventListener("click", (e) => {
      if (!navMore?.contains(e.target)) closeMore();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMore();
    });

    const updateOverflowNav = () => {
      if (!primaryNav || !navMore || !moreDropdown || !navLinksWrapper) return;
      if (window.innerWidth < 768) {
        originalItems.forEach((li) => {
          li.style.display = "";
          primaryNav.appendChild(li);
        });
        moreDropdown.innerHTML = "";
        navMore.hidden = true;
        closeMore();
        return;
      }
      originalItems.forEach((li) => {
        li.style.display = "";
        primaryNav.appendChild(li);
      });
      moreDropdown.innerHTML = "";
      navMore.hidden = true;
      closeMore();
      void navLinksWrapper.offsetWidth;
      const available = navLinksWrapper.clientWidth;
      if (available <= 0) return;
      navMore.hidden = false;
      const moreBtnWidth = Math.ceil(navMore.getBoundingClientRect().width) + 8;
      navMore.hidden = true;
      const widths = originalItems.map((li) => Math.ceil(li.getBoundingClientRect().width) + 4);
      const total = widths.reduce((a, b) => a + b, 0);
      if (total <= available) {
        navMore.hidden = true;
        return;
      }
      let used = 0;
      let lastVisibleIndex = -1;
      for (let i = 0; i < originalItems.length; i++) {
        const remainingAfter = originalItems.length - 1 - i;
        const limit = remainingAfter > 0 ? available - moreBtnWidth : available;
        if (used + widths[i] <= limit) {
          used += widths[i];
          lastVisibleIndex = i;
        } else break;
      }
      if (lastVisibleIndex < 0) lastVisibleIndex = 0;
      const overflow = originalItems.slice(lastVisibleIndex + 1);
      overflow.forEach((li) => {
        const a = li.querySelector("a");
        if (!a) return;
        const menuLi = document.createElement("li");
        menuLi.setAttribute("role", "none");
        const menuA = a.cloneNode(true);
        menuA.setAttribute("role", "menuitem");
        menuLi.appendChild(menuA);
        moreDropdown.appendChild(menuLi);
        li.style.display = "none";
      });
      navMore.hidden = overflow.length === 0;
      moreDropdown.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMore));
    };

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateOverflowNav, 80);
    });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        updateOverflowNav();
        setTimeout(updateOverflowNav, 200);
      });
    } else {
      window.addEventListener("load", () => {
        updateOverflowNav();
        setTimeout(updateOverflowNav, 200);
      });
    }
    setTimeout(updateOverflowNav, 100);

    // Active section
    const getAllNavLinks = () =>
      document.querySelectorAll(".nav-links a, .more-dropdown a, .mobile-menu a");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            getAllNavLinks().forEach((link) => {
              const href = link.getAttribute("href");
              if (href === `#${id}`) link.classList.add("active");
              else link.classList.remove("active");
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Skill bars
    const skillFills = document.querySelectorAll(".skill-fill");
    const skillObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.style.width = `${el.dataset.level}%`;
            skillObs.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    skillFills.forEach((el) => skillObs.observe(el));

    // Dropdowns
    document.querySelectorAll("[data-dropdown]").forEach((btn) => {
      const panel = btn.nextElementSibling;
      const chevron = btn.querySelector(".chevron");
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = panel.classList.contains("open");
        document.querySelectorAll(".dropdown-panel.open").forEach((p) => {
          p.classList.remove("open");
          p.previousElementSibling?.querySelector(".chevron")?.classList.remove("rotated");
        });
        if (!isOpen) {
          panel.classList.add("open");
          chevron?.classList.add("rotated");
        }
      });
    });
    document.addEventListener("click", () => {
      document.querySelectorAll(".dropdown-panel.open").forEach((p) => {
        p.classList.remove("open");
        p.previousElementSibling?.querySelector(".chevron")?.classList.remove("rotated");
      });
    });

    // Highlights ticker — clone once for seamless loop; only animate if content overflows
    const highlightsList = document.getElementById("highlights-ticker");
    const highlightsViewport = highlightsList?.closest(".highlights-viewport");
    if (highlightsList && highlightsList.children.length) {
      // Avoid double-cloning if re-inited
      if (!highlightsList.dataset.cloned) {
        const originals = Array.from(highlightsList.children);
        originals.forEach((row) => highlightsList.appendChild(row.cloneNode(true)));
        highlightsList.dataset.cloned = "1";
      }
      // Start scroll after layout so heights are correct
      requestAnimationFrame(() => {
        const contentH = highlightsList.scrollHeight / 2;
        const viewH = highlightsViewport ? highlightsViewport.clientHeight : 0;
        if (contentH > viewH + 8) {
          highlightsList.classList.add("is-scrolling");
        } else {
          highlightsList.classList.remove("is-scrolling");
        }
      });
    }

    // Footer year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  /* ========== Bootstrap ========== */
  async function boot() {
    try {
      const res = await fetch("data.json");
      if (!res.ok) throw new Error("Failed to load data.json");
      const data = await res.json();

      // Meta tags
      if (data.meta) {
        document.title = data.meta.title || document.title;
        const set = (id, val) => {
          const el = document.getElementById(id);
          if (el && val != null) {
            if (el.tagName === "META") el.setAttribute("content", val);
            else el.textContent = val;
          }
        };
        set("meta-theme", data.meta.themeColor);
        set("meta-desc", data.meta.description);
        set("meta-keywords", data.meta.keywords);
        set("meta-author", data.meta.author);
        set("meta-og-title", data.meta.ogTitle);
        set("meta-og-desc", data.meta.ogDescription);
      }

      renderNav(data);

      const app = document.getElementById("app");
      if (app) {
        app.innerHTML =
          renderHero(data.hero) +
          renderAbout(data.about) +
          renderSkills(data.skills) +
          renderInterests(data.interests) +
          renderAcademics(data.academics) +
          renderPublications(data.publications) +
          renderProjects(data.projects) +
          renderExperiences(data.experiences) +
          renderCertificates(data.certificates) +
          renderAwards(data.awards) +
          renderTalks(data.talks) +
          renderMemberships(data.memberships) +
          renderResponsibility(data.responsibility) +
          renderBlog(data.blog);
      }

      const footer = document.getElementById("site-footer");
      if (footer) footer.innerHTML = renderFooter(data);

      initInteractions(data);
    } catch (err) {
      console.error(err);
      document.body.innerHTML = `<p style="padding:2rem;font-family:system-ui">Could not load portfolio data. Make sure <code>data.json</code> is present.</p>`;
    }
  }

  boot();
})();
