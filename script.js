document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("trinetra-loader");

  // Start timer (to simulate slow network effect)
  let fakeProgress = 0;
  let isPageLoaded = false;

  const interval = setInterval(() => {
    fakeProgress += 10;

    // If page finished loading, stop early
    if (isPageLoaded && fakeProgress >= 40) {
      clearInterval(interval);
      loader.classList.add("hide");
    }

    // Safety maximum (never get stuck)
    if (fakeProgress >= 300) {
      clearInterval(interval);
      loader.classList.add("hide");
    }
  }, 200); // 0.2 sec each tick

  // When real page finishes loading:
  window.addEventListener("load", () => {
    isPageLoaded = true;

    // If page loads fast → remove loader quickly
    if (fakeProgress > 40) {
      loader.classList.add("hide");
      clearInterval(interval);
    }
  });
});