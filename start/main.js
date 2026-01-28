// Optional: add a minimal sticky CTA on small screens after scroll
(function () {
  const isSmall = window.matchMedia("(max-width: 860px)").matches;
  if (!isSmall) return;

  const bar = document.createElement("div");
  bar.style.position = "fixed";
  bar.style.left = "12px";
  bar.style.right = "12px";
  bar.style.bottom = "12px";
  bar.style.display = "none";
  bar.style.gap = "10px";
  bar.style.padding = "10px";
  bar.style.borderRadius = "14px";
  bar.style.border = "1px solid rgba(255,255,255,0.10)";
  bar.style.background = "rgba(10,12,16,0.85)";
  bar.style.backdropFilter = "blur(10px)";
  bar.style.zIndex = "9999";

  bar.innerHTML = `
    <a href="../" style="flex:1;text-align:center;padding:12px 14px;border-radius:12px;border:1px solid rgba(125,211,252,0.35);background:linear-gradient(180deg, rgba(125,211,252,0.25), rgba(125,211,252,0.12));font-weight:650;">Try free</a>
    <a href="#waitlist" style="flex:1;text-align:center;padding:12px 14px;border-radius:12px;border:1px solid rgba(255,255,255,0.10);background:rgba(255,255,255,0.04);font-weight:650;">Waitlist</a>
  `;
  document.body.appendChild(bar);

  const showAfter = 220;
  window.addEventListener("scroll", () => {
    bar.style.display = window.scrollY > showAfter ? "flex" : "none";
  });
})();
