const minWidthForAnimation = 768;

if (window.innerWidth >= minWidthForAnimation) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((element) => observer.observe(element));
} else {
  // For mobile devices or smaller screens, remove the .hidden class to show the elements directly
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((element) => element.classList.remove("hidden"));
}
