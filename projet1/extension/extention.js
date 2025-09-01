
function showError(message) {
  const errorElement = document.getElementById("error");
  errorElement.textContent = message;
  errorElement.style.display = "block";

  const input = document.getElementById("search");
  input.classList.add("error-animation");

  setTimeout(() => {
    input.classList.remove("error-animation");
    errorElement.style.display = "none";
  }, 1500);
}

function getQuery() {
  return document.getElementById("search").value.trim();
}

document.getElementById("googlesearch").addEventListener("click", function () {
  const query = getQuery();
  if (query) {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    chrome.tabs.create({ url: googleSearchUrl });
  } else {
    showError("Veuillez entrer une recherche.");
  }
});

document.getElementById("wikipediasearch").addEventListener("click", function () {
  const query = getQuery();
  if (query) {
    const wikipediaSearchUrl = `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(query)}`;
    chrome.tabs.create({ url: wikipediaSearchUrl });
  } else {
    showError("Veuillez entrer une recherche.");
  }
});

const searchInput = document.getElementById("search");
const suggestionsList = document.getElementById("suggestions");

searchInput.addEventListener("input", async () => {
  const query = searchInput.value.trim();
  suggestionsList.innerHTML = "";

  if (!query) return;

  try {
    const response = await fetch(
      `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    const suggestions = data[1];

    suggestions.forEach((suggestion) => {
      const li = document.createElement("li");
      li.textContent = suggestion;
      li.style.cursor = "pointer";
      li.style.padding = "4px";
      li.style.borderBottom = "1px solid #ccc";
      li.addEventListener("click", () => {
        searchInput.value = suggestion;
        suggestionsList.innerHTML = "";
      });
      suggestionsList.appendChild(li);
    });
  } catch (err) {
    console.error("Erreur de suggestion :", err);
  }
});

document.getElementById("search").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const query = this.value.trim();
    if (query) {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      chrome.tabs.create({ url: googleSearchUrl });
    }
  }
});


