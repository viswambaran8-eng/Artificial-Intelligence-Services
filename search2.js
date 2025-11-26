const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

// All section IDs you want the search to reach
const sectionIDs = [
"Autonomous-Systems","Smart-Farming-Solutions","Intelligent-Machine-Systems"
];

function searchCategory() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;

  // Find matching section ID
  let match = sectionIDs.find(id => id.toLowerCase() === query);

  if (match) {
    // Scroll to the matched section
    document.getElementById(match).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // Optional: Update URL without jumping
    history.pushState(null, "", "#" + match);
  } else {
    alert("No match found! Try Autonomous-Systems,Smart-Farming-Solutions,Intelligent-Machine-Systems.");
  }
}

searchBtn.addEventListener("click", searchCategory);
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchCategory();
});
