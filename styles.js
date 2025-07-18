document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");

      // Change the icon depending on the theme
      const isDark = document.body.classList.contains("dark-theme");
      toggle.textContent = isDark ? "☀️" : "🌙";
    });
  }
});
  document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
      const target = parseInt(bar.getAttribute("data-percentage"));
      let count = 0;

      const animate = () => {
        if (count <= target) {
          bar.style.width = count + "%";
          bar.textContent = count + "%";
          count++;
          requestAnimationFrame(animate);
        }
      };

      animate(); // run animation immediately when page loads
    });
  });


