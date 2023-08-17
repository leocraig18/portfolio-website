const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let intervals = [];

const screens = document.querySelectorAll(".screen"),
  names = document.querySelectorAll(".name");

screens.forEach((screen, index) => {
  let name = names[index];
  screen.onmouseenter = (event) => {
    let iteration = 0;

    clearInterval(intervals[index]);

    intervals[index] = setInterval(() => {
      name.innerText = name.innerText
        .split("")
        .map((letter, idx) => {
          if (idx < iteration) {
            return name.dataset.value[idx];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= name.dataset.value.length) {
        clearInterval(intervals[index]);
      }

      iteration += 1 / 3;
    }, 30);
  };
});
