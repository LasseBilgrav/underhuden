// Badge-definitioner
const badgeData = {
    forsteskridt: {
      img: "../images/foerste-skridt.png",
      text: "Første skridt - Du tog en chance i noget, der føltes svært.",
    },
    dusagdenoget: {
      img: "../images/sagde-noget.png",
      text: "Du sagde noget - Et svar. En kommentar. Du deltog.",
    },
    dulyttedetildigselv: {
      img: "../images/lyttede-selv.png",
      text: "Du lyttede til dig selv - Du valgte ro frem for pres.",
    },
    tryghedforst: {
        img: "../images/tryghed-foerst.png",
        text: "Tryghed først - Du mærkede dine grænser og respekterede dem.",
    },
    dublevidet: {
        img: "../images/.png",
        text: "Du blev i det - Du trak dig ikke – du stod det igennem, selv med uro.",
    },
    etvalgafgangen: {
        img: "../images/responsibility-badge.png",
        text: "Et valg ad gangen - Du lod ikke én svær situation styre hele dagen",
    },
    uventedmod: {
        img: "../images/responsibility-badge.png",
        text: "Uventet mod - Du overraskede dig selv med en handling du ikke havde planlagt.",
    },
    dagenkomoggik: {
        img: "../images/responsibility-badge.png",
        text: "Dagen kom og gik - Du kom igennem. Det i sig selv er værd at fejre.",
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
  