// Badge-definitioner
const badgeData = {
    refleksion: {
      img: "images/reflection-badge.png",
      text: "Du tog dig tid til at tænke og mærke efter – en vigtig del af personlig udvikling.",
    },
    praesentation: {
      img: "images/presentation-badge.png",
      text: "Du turde stå frem og dele dine tanker – det kræver mod og styrke.",
    },
    ansvar: {
      img: "images/responsibility-badge.png",
      text: "Du tog ansvar og traf valg, der viste omtanke for dig selv og andre.",
    },
  };
  
  // Vælg elementer
  const modal = document.getElementById("popup-modal");
  const popupText = document.getElementById("popup-text");
  const closeBtn = document.querySelector(".close-btn");
  const foldUdButtons = document.querySelectorAll(".fold-ud");
  
  // Luk pop-up
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });
  
  // Klik på "fold ud" knapper
  foldUdButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // Vælg hvilken popup der skal vises
      switch (index) {
        case 0:
          showPopup("Refleksion", "Du har reflekteret over dine valg og tanker.");
          break;
        case 1:
          showPopup("Præsentationer", "Du har deltaget aktivt og præsenteret dine synspunkter.");
          break;
        case 2:
          visBadges(); // vis gemte badges
          break;
      }
    });
  });
  
  // Funktion til at vise popup med almindelig tekst
  function showPopup(title, message) {
    popupText.innerHTML = `<h2>${title}</h2><p>${message}</p>`;
    modal.classList.add("show");
  }
  
  // Funktion til at vise badges
  function visBadges() {
    const badges = JSON.parse(localStorage.getItem("badges")) || [];
    if (badges.length === 0) {
      popupText.innerHTML = `<h2>Dine badges</h2><p>Du har endnu ikke opnået nogle badges.</p>`;
    } else {
      let badgeHTML = `<h2>Dine badges</h2><div class="badge-container">`;
      badges.forEach((badgeKey) => {
        const badge = badgeData[badgeKey];
        if (badge) {
          badgeHTML += `
            <div class="badge">
              <img src="${badge.img}" alt="Badge billede">
              <p>${badge.text}</p>
            </div>
          `;
        }
      });
      badgeHTML += `</div>`;
      popupText.innerHTML = badgeHTML;
    }
    modal.classList.add("show");
  }
  
  // Funktion til at gemme badge-valg (bruges i forløbet)
  function tildelBadge(badgeKey) {
    const eksisterende = JSON.parse(localStorage.getItem("badges")) || [];
    if (!eksisterende.includes(badgeKey)) {
      eksisterende.push(badgeKey);
      localStorage.setItem("badges", JSON.stringify(eksisterende));
    }
  }
  
  // Ryd badges ved genstart
  function genstartHistorien() {
    localStorage.removeItem("badges");
  }
  