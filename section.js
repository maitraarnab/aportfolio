(() => {
  const ICONS = {
    grad: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
    calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>',
    external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>',
    check: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
    medal: '<circle cx="12" cy="8" r="5"/><path d="M8.5 12 7 22l5-3 5 3-1.5-10"/>',
    mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3M8 22h8"/>',
    barcode: '<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',
    empty: '<path d="m12 8-2 4 2 4 2-4-2-4Z"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  };

  function svg(name, attrs = "") {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${attrs}>${ICONS[name] || ""}</svg>`;
  }

  function pageShell(title, desc, bodyHtml) {
    return `
      <div class="section-page-heading">
        <h1 class="section-title">${title}</h1>
        ${desc ? `<p class="section-desc">${desc}</p>` : ""}
      </div>
      <div class="section-page-body">${bodyHtml}</div>`;
  }

  function renderAcademics(a) {
    const timeline = (a.timeline || [])
      .map(
        (t) => `
      <li class="timeline-item">
        <span class="timeline-dot"><span></span></span>
        <span class="period-badge">${t.period}</span>
        <h4 class="timeline-degree">${svg("grad")} ${t.degree}</h4>
        <p class="timeline-inst">${t.institute}</p>
      </li>`
      )
      .join("");
    return pageShell(a.title, a.desc, `<ol class="timeline">${timeline}</ol>`);
  }

  function renderPublications(p) {
    const cards = (p.items || [])
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
    return pageShell(p.title, p.desc, `<div class="pubs-list">${cards}</div>`);
  }

  function renderProjects(p) {
    const cards = (p.items || [])
      .map((proj) => {
        const tags = (proj.tags || [])
          .map((t) => `<span class="project-tag">${t}</span>`)
          .join("");
        const pdf = `<a href="${proj.pdf || "#"}" class="pub-pdf">PDF ${svg("external", 'width="14" height="14"')}</a>`;
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
    return pageShell(p.title, p.desc, `<div class="projects-grid">${cards}</div>`);
  }

  function renderExperiences(e) {
    const items = (e.items || [])
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
    return pageShell(e.title, e.desc, `<div class="experience-timeline">${items}</div>`);
  }

  function renderCertificates(c) {
    const cards = (c.items || [])
      .map((cert) => {
        const skills = (cert.skills || [])
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
    return pageShell(c.title, c.desc, `<div class="certs-grid-3">${cards}</div>`);
  }

  function renderInfoCards(section) {
    const items = section.items || [];
    if (!items.length) {
      return pageShell(
        section.title,
        section.desc,
        `<div class="empty-state"><span class="empty-icon">${svg("empty")}</span><p class="empty-text">${section.empty || "Nothing here yet."}</p></div>`
      );
    }
    const icon = section._icon || "check";
    const cards = items
      .map((item) => {
        const metaParts = [];
        if (item.role) metaParts.push(`<span class="role">${item.role}</span>`);
        if (item.institution) metaParts.push(`<span class="institution">${item.institution}</span>`);
        if (item.period) metaParts.push(`<span class="period">${item.period}</span>`);
        const meta = metaParts
          .map((p, i) => (i ? `<span class="sep">·</span>${p}` : p))
          .join("");
        return `
      <article class="info-card horizontal">
        <span class="info-icon">${svg(icon)}</span>
        <div>
          <h3 class="info-title">${item.title}</h3>
          <div class="info-meta">${meta}</div>
          ${item.detail ? `<p class="info-detail">${item.detail}</p>` : ""}
        </div>
      </article>`;
      })
      .join("");
    return pageShell(section.title, section.desc, `<div class="cards-grid-2">${cards}</div>`);
  }

  const RENDERERS = {
    academics: (d) => renderAcademics(d.academics),
    publications: (d) => renderPublications(d.publications),
    projects: (d) => renderProjects(d.projects),
    experiences: (d) => renderExperiences(d.experiences),
    certificates: (d) => renderCertificates(d.certificates),
    awards: (d) => {
      d.awards._icon = "medal";
      return renderInfoCards(d.awards);
    },
    talks: (d) => {
      d.talks._icon = "mic";
      return renderInfoCards(d.talks);
    },
    memberships: (d) => {
      d.memberships._icon = "check";
      return renderInfoCards(d.memberships);
    },
    responsibility: (d) => {
      d.responsibility._icon = "check";
      return renderInfoCards(d.responsibility);
    },
  };

  const TITLES = {
    academics: "Academic Background",
    publications: "Publications",
    projects: "Projects",
    experiences: "Work Experience",
    certificates: "Key Certifications",
    awards: "Awards & Honors",
    talks: "Talks & Invited Lectures",
    memberships: "Positions of Responsibility",
    responsibility: "Professional Memberships",
  };

  async function boot() {
    const root = document.getElementById("section-page-root");
    const params = new URLSearchParams(window.location.search);
    const key = (params.get("s") || "").trim();

    if (!key || !RENDERERS[key]) {
      root.innerHTML = `<p class="section-page-empty">Unknown section. <a href="index.html">Return home</a>.</p>`;
      return;
    }

    try {
      const res = await fetch("data.json");
      if (!res.ok) throw new Error("Failed to load data");
      const data = await res.json();
      document.title = `${TITLES[key] || "Section"} · ${data.meta?.title || "Arnab Maitra"}`;
      root.innerHTML = RENDERERS[key](data);
    } catch (err) {
      console.error(err);
      root.innerHTML = `<p class="section-page-empty">Could not load section data.</p>`;
    }
  }

  boot();
})();
