function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Poem poem poem poem poem",
    autoStart: true,
    delay: 1,
    cursor: null,
    delay: 75,
  });
}

let submitButtonElement = document.querySelector(".submit-form");
submitButtonElement.addEventListener("submit", generatePoem);
