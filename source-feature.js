(() => {
  const section = document.querySelector(".source-section[data-source-feature]");

  if (!section) {
    return;
  }

  const features = ["favorites", "source"];
  const buttons = Array.from(section.querySelectorAll(".dot-indicator[data-source-target]"));
  const panels = {
    favorites: section.querySelector(".favorites-float"),
    source: section.querySelector(".source-float"),
  };
  const duration = 5600;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeFeature = features.includes(section.dataset.sourceFeature)
    ? section.dataset.sourceFeature
    : features[0];
  let timer = 0;

  section.style.setProperty("--source-feature-duration", `${duration}ms`);

  const updatePanelState = () => {
    features.forEach((feature) => {
      const isActive = feature === activeFeature;
      const button = buttons.find((item) => item.dataset.sourceTarget === feature);
      const panel = panels[feature];

      if (button) {
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      }

      if (panel) {
        panel.setAttribute("aria-hidden", String(!isActive));
      }
    });
  };

  const scheduleNext = () => {
    window.clearTimeout(timer);

    if (reducedMotion.matches) {
      return;
    }

    timer = window.setTimeout(() => {
      const nextIndex = (features.indexOf(activeFeature) + 1) % features.length;
      setFeature(features[nextIndex]);
    }, duration);
  };

  function setFeature(feature) {
    if (!features.includes(feature)) {
      return;
    }

    activeFeature = feature;
    section.dataset.sourceFeature = feature;
    updatePanelState();
    scheduleNext();
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setFeature(button.dataset.sourceTarget);
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      window.clearTimeout(timer);
      return;
    }

    scheduleNext();
  });

  if (typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", scheduleNext);
  } else if (typeof reducedMotion.addListener === "function") {
    reducedMotion.addListener(scheduleNext);
  }

  setFeature(activeFeature);
})();
