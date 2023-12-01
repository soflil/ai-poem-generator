function displayPoems(response) {
  console.log(response.data.answer);
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let textInputElement = document.querySelector(".text-input");

  let context =
    "You write a lot of beautiful poems in english. Make sure to follow the user instructions";
  let prompt = `User instructions: Generate a unique and short poem about ${textInputElement.value}. Sign the poem with "- Poem Gary AI" at the end of the poem with italic text. Write maximum 8 lines. Write it with basic HTML, example: <p>This is a poem</p>. Do not add any CSS.`;
  let apiKey = "t3221ffbd05c05a8aa7da54904b6044o";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${textInputElement.value}, please wait...</div>`;

  axios.get(apiUrl).then(displayPoems);
}

let submitButtonElement = document.querySelector(".submit-form");
submitButtonElement.addEventListener("submit", generatePoem);
