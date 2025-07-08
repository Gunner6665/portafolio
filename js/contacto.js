document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor-contacto");

    const contenido = `
        <section class="contacto-section">
            <h2>✉️ Contáctame</h2>
            <div class="contacto-bloque">
                <form class="contacto-form">
                    <label for="nombre">👤 Nombre</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required>

                    <label for="email">📧 Correo electrónico</label>
                    <input type="email" id="email" name="email" placeholder="Tu correo" required>

                    <label for="mensaje">💬 Mensaje</label>
                    <textarea id="mensaje" name="mensaje" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>

                    <button type="submit">📨 Enviar</button>
                </form>
            </div>
        </section>
    `;

    if (contenedor) {
        contenedor.innerHTML = contenido;
    }
});
