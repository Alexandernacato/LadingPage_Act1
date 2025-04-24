document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("ModosOscuro");
  
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      btn.textContent = document.body.classList.contains("dark-mode")
        ? "Modo claro"
        : "Modo oscuro";
    });
  });


  
  