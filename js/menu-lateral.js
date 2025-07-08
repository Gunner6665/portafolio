document.addEventListener("DOMContentLoaded", function () {
    // Crear botón hamburguesa
    const botonHamburguesa = document.createElement("button");
    botonHamburguesa.className = "hamburguesa";
    botonHamburguesa.innerHTML = "☰";
    document.body.prepend(botonHamburguesa);

    // Crear menú lateral
    const menu = document.createElement("nav");
    menu.className = "menu-lateral";
    menu.innerHTML = `
        <button data-target="contenedor-biografia">📘 Sobre mí</button>
        <button data-target="contenedor-metodologias">🧠 Metodologías</button>
        <button data-target="contenedor-estrategias">🎯 Estrategias</button>
        <button data-target="contenedor-planeamiento">📅 Planeamiento</button>
        <button data-target="contenedor-proyectos">💼 Proyectos</button>
        <button data-target="contenedor-recursos">📂 Recursos</button>
        <button data-target="contenedor-contacto">✉️ Contacto</button>
    `;
    document.body.prepend(menu);

    // Mostrar/Ocultar menú en móviles
    botonHamburguesa.addEventListener("click", () => {
        menu.classList.toggle("menu-visible");
    });

    // Lógica de navegación
    const botones = menu.querySelectorAll("button");
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const destino = boton.getAttribute("data-target");
            const secciones = document.querySelectorAll("main > div");
            secciones.forEach(sec => {
                sec.style.display = (sec.id === destino) ? "block" : "none";
            });
            // Ocultar menú en móviles después de seleccionar
            menu.classList.remove("menu-visible");
        });
    });
});

