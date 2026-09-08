const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!reduceMotion.matches && "IntersectionObserver" in window) {
  const revealGroups = [
    ".project-heading",
    ".carousel",
    ".summary",
    ".details > div",
    ".case-section",
    ".project-link",
  ];
  const elements = [...document.querySelectorAll(revealGroups.join(","))];

  document.querySelectorAll(".details").forEach((group) => {
    [...group.children].forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${index * 55}ms`);
    });
  });

  elements.forEach((element) => element.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -10%",
    },
  );

  elements.forEach((element) => observer.observe(element));
}
