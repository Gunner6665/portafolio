document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor-recursos");

    const contenido = `
        <section class="recursos-section">
            <h2>📂 Recursos Descargables para Ingeniería en Sistemas</h2>

            <div class="recurso-bloque">
                <h3>📘 Guía de Introducción a la Programación</h3>
                <p>Este documento PDF contiene fundamentos esenciales de programación estructurada, ideal para estudiantes que inician en Ingeniería en Sistemas. Brinda una base sólida para comprender algoritmos, estructuras de control y lógica computacional. Según Kernighan y Ritchie (1988), dominar los fundamentos es clave para desarrollar habilidades de programación efectivas.</p>
                <a href="tools/guia-programacion.pdf" download>📥 Descargar PDF</a>
            </div>

            <div class="recurso-bloque">
                <h3>📝 Plantilla de Planeamiento de Clases</h3>
                <p>Formato editable en Word para organizar objetivos, contenidos, actividades y evaluación de clases universitarias. Esta herramienta facilita la planificación docente estructurada y coherente. Según Biggs y Tang (2011), una planificación alineada mejora la calidad del aprendizaje.</p>
                <a href="tools/plantilla-planeamiento.docx" download>📥 Descargar DOCX</a>
            </div>

            <div class="recurso-bloque">
                <h3>💻 Ejemplo de Proyecto en C#</h3>
                <p>Proyecto básico en C# con estructura de capas, ideal para prácticas de arquitectura de software. Incluye separación de lógica de negocio, acceso a datos y presentación. Gamma et al. (1995) destacan que una buena arquitectura facilita el mantenimiento y la escalabilidad del software.</p>
                <a href="tools/proyecto.zip" download>📥 Descargar ZIP</a>
            </div>

            <div class="recurso-bibliografia">
                <h3>📚 Bibliografía</h3>
                <ul>
                    <li>Biggs, J., & Tang, C. (2011). <em>Teaching for Quality Learning at University</em>. McGraw-Hill Education.</li>
                    <li>Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1995). <em>Design Patterns: Elements of Reusable Object-Oriented Software</em>. Addison-Wesley.</li>
                    <li>Kernighan, B. W., & Ritchie, D. M. (1988). <em>The C Programming Language</em>. Prentice Hall.</li>
                </ul>
            </div>
        </section>
    `;

    if (contenedor) {
        contenedor.innerHTML = contenido;
    }
});

