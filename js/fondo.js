document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("contenedor-fondo");

  // Crear contenedor de fondo
  const fondo = document.createElement("div");
  fondo.id = "fondo-bienvenida";
  fondo.className = "fondo-bienvenida";

  const imagen = document.createElement("img");
  imagen.src = "pictures/inicial.jpg";
  imagen.alt = "Bienvenida";
  imagen.className = "imagen-bienvenida";

  fondo.appendChild(imagen);
  contenedor.appendChild(fondo);

  // Detectar clic en botones del menú lateral
  const botones = document.querySelectorAll(".menu-lateral button");
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      fondo.classList.add("fade-out");
      setTimeout(() => fondo.remove(), 1000);
    });
  });
});
