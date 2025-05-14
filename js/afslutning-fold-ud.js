document.querySelectorAll(".fold-ud").forEach((button, index) => {
    button.addEventListener("click", () => {
      const modal = document.getElementById("popup-modal");
      const popupText = document.getElementById("popup-text");
  
      const content = [
        `
        <h2>Refleksion</h2>
        <p>"Social angst handler ikke om at være genert – men om en frygt, som andre ikke kan se. Man kan se legende, selv når man ryster indeni."</p>
        <p>• 75% oplever social angst i hverdagen.<br>
        • Du har formået – med små skridt – at vise mod i dag.</p>
        `,
        `
        <h2>Præsentationer</h2>
        <p>Valg du tog i dag:</p>
        <ul>
          <li>3 gange trak du dig tilbage.</li>
          <li>2 gange prøvede du noget nyt.</li>
          <li>Du svarede på et spørgsmål i timen.</li>
        </ul>
        `,
        `
        <h2>Dine Badges</h2>
        <div id="badge-list" class="badge-container">
          <p>Indlæser dine badges...</p>
        </div>
        `
      ];
  
      popupText.innerHTML = content[index] || "<p>Ingen data tilgængelig.</p>";
  
      // Indsæt badges hvis det er det tredje kort
      if (index === 2) {
        const savedBadges = JSON.parse(localStorage.getItem("badges")) || [];
        const badgeList = document.getElementById("badge-list");
  
        if (savedBadges.length === 0) {
          badgeList.innerHTML = "<p>Du har ikke samlet nogen badges endnu.</p>";
        } else {
          badgeList.innerHTML = savedBadges.map(badge => `
            <div class="badge">
              <img src="${badge.img}" alt="${badge.name}">
              <p>${badge.name}</p>
            </div>
          `).join("");
        }
      }
  
      modal.classList.add("show");
    });
  });
  
  // Luk modal
  document.querySelector(".close-btn").addEventListener("click", () => {
    document.getElementById("popup-modal").classList.remove("show");
  });
  