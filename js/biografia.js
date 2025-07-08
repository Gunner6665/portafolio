document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor-biografia");

    const contenido = `
        <section class="biografia-section">
            <div class="biografia-header">
                <h2>🎓 Sobre mí</h2>
            </div>
            <div class="biografia-info">
                <p><strong>Nombre:</strong> Gianfranco Fontana Abarca</p>
                <p><strong>Profesión:</strong> Licenciado en Ingeniería en Sistemas con énfasis en Gerencia de Proyectos Informáticos</p>
            </div>
            <div class="biografia-bloque">
                <h3>📘 Vocación Docente</h3>
                <p>Enseñar en la universidad me brinda la oportunidad de influir positivamente en el desarrollo académico y personal de los estudiantes, y de seguir aprendiendo junto a ellos...</p>
            </div>
            <div class="biografia-bloque">
                <h3>💡 Principios y Valores</h3>
                <p>Guío mi enseñanza con principios como la honestidad intelectual, la pasión por el conocimiento, y el compromiso con la excelencia académica...</p>
            </div>
            <div class="biografia-bloque">
                <h3>🏫 Experiencia Docente</h3>
                <p>Cuento con experiencia docente en diferentes niveles educativos: desde cursos de computación administrativa, hasta enseñanza de programación y robótica en primaria y secundaria...</p>
            </div>
            <div class="biografia-bloque">
                <h3>❤️ Legado Educativo</h3>
                <p>Me gustaría que los estudiantes me recuerden como un profesor que hizo que la tecnología y la programación fueran accesibles, útiles y hasta divertidas...</p>
            </div>
            <div class="biografia-bloque">
                <h3>💼 Experiencia Profesional</h3>
                <p>Actualmente trabajo como operador de sistemas y administrador de bases de datos de producción. Tengo experiencia en soporte técnico, programación en .NET y C#, y control de calidad (QA testing)...</p>
            </div>
        </section>
    `;

    contenedor.innerHTML = contenido;
});

