document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".fold-ud");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const card = button.closest(".card");
        const content = card.querySelector(".card-content");
  
        // Luk alle andre åbne kort
        document.querySelectorAll(".card-content").forEach(c => {
          if (c !== content) {
            c.classList.remove("active");
          }
        });
  
        // Toggle aktiv klasse på det aktuelle kort
        content.classList.toggle("active");
      });
    });
  });
  