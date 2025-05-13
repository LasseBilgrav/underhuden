document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("popup-modal");
    const popupText = document.getElementById("popup-text");
    const closeBtn = document.querySelector(".close-btn");
  
    const contentMap = {
      "Refleksion": `
        <h2>Refleksion</h2>
        <p>“Social angst handler ikke om at være genert – men en frygt andre ikke vil kunne lide én.”</p>
        <p>Ca. 7% oplever social angst i hverdagen. Du er ikke alene.</p>
      `,
      "Præsentationer": `
        <h2>Præsentationer</h2>
        <ul>
          <li>Du valgte mod 2 gange.</li>
          <li>Du deltog i en gruppeøvelse.</li>
          <li>Du tog ordet i en samtale.</li>
        </ul>
      `,
      "Dine badges": `
        <h2>Dine Badges</h2>
        <p>Du har opnået 3 badges:</p>
        <ul>
          <li>Mod</li>
          <li>Tryghed</li>
          <li>Selvværd</li>
        </ul>
      `
    };
  
    document.querySelectorAll(".fold-ud").forEach(button => {
      button.addEventListener("click", () => {
        const sectionTitle = button.closest(".card").querySelector("h2").textContent;
        popupText.innerHTML = contentMap[sectionTitle] || "<p>Ingen data tilgængelig.</p>";
        modal.style.display = "block";
      });
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  