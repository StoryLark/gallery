const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function themeCard(t) {
  return `
  <div class="card">
    <h3>${esc(t.name)}${t.featured ? '<span class="badge">default</span>' : ""}</h3>
    <div class="byline">theme · by ${esc(t.author)}</div>
    <div class="swatches">${(t.swatches || []).map((c) => `<span class="swatch" style="background:${esc(c)}"></span>`).join("")}</div>
    <p class="desc">${esc(t.description)}</p>
    <p class="meta">Fonts: ${esc(t.fonts)}<br>Install: ${esc(t.install)}</p>
    <div class="links"><a href="${esc(t.source)}" rel="noopener">Source ↗</a></div>
  </div>`;
}

function templateCard(t) {
  return `
  <div class="card">
    <h3>${esc(t.name)}${t.featured ? '<span class="badge">default</span>' : ""}</h3>
    <div class="byline">presentation template · by ${esc(t.author)}</div>
    <p class="desc">${esc(t.description)}</p>
    <p class="meta">Screens: ${(t.screens || []).map(esc).join(" · ")}<br>Install: ${esc(t.install)}</p>
    <div class="links"><a href="${esc(t.source)}" rel="noopener">Source ↗</a></div>
  </div>`;
}

fetch("registry.json").then((r) => r.json()).then((reg) => {
  const put = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  put("featured-theme", reg.themes.filter((t) => t.featured).map(themeCard).join(""));
  put("featured-template", reg.templates.filter((t) => t.featured).map(templateCard).join(""));
  put("all-themes", reg.themes.map(themeCard).join(""));
  put("all-templates", reg.templates.map(templateCard).join(""));
  const tc = document.getElementById("theme-count");
  if (tc) tc.textContent = `${reg.themes.length} theme${reg.themes.length === 1 ? "" : "s"}`;
  const pc = document.getElementById("template-count");
  if (pc) pc.textContent = `${reg.templates.length} template${reg.templates.length === 1 ? "" : "s"}`;
});
