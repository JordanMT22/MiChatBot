// Puedes agregar funciones como scroll suave, validación de formulario, etc.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

  const img = document.querySelector('.imagen-pollo');
  window.addEventListener('scroll', () => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      img.classList.add('visible');
    }
  });
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const submenu = document.querySelector(".submenu");

  toggle.addEventListener("click", function () {
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
  });

  // Opcional: cerrar si se hace clic fuera
  document.addEventListener("click", function (e) {
    if (!toggle.contains(e.target) && !submenu.contains(e.target)) {
      submenu.style.display = "none";
    }
  });
});


