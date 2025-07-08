document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor-planeamiento");

    const contenido = `
        <section class="planeamiento-section">
            <h2>📅 Planeamiento Semanal - Ingeniería en Sistemas</h2>

            <div class="planeamiento-bloque">
                <h3>🧭 Semana 1: Introducción a la Ingeniería en Sistemas</h3>
                <p><strong>Objetivos:</strong> Comprender el rol del ingeniero en sistemas, su campo de acción y la importancia de la disciplina. Según Pressman (2010), el ingeniero en sistemas es clave en la transformación digital de las organizaciones.</p>
                <p><strong>Actividades:</strong> Presentación del curso, dinámica de integración, análisis de casos reales de proyectos tecnológicos.</p>
            </div>

            <div class="planeamiento-bloque">
                <h3>💻 Semana 2: Fundamentos de Programación</h3>
                <p><strong>Objetivos:</strong> Introducir los conceptos básicos de programación estructurada y lógica computacional. Como indica Kernighan y Ritchie (1988), la programación es una herramienta esencial para resolver problemas complejos.</p>
                <p><strong>Actividades:</strong> Ejercicios de pseudocódigo, diagramas de flujo, primeros programas en lenguaje C#.</p>
            </div>

            <div class="planeamiento-bloque">
                <h3>🌐 Semana 3: Metodologías de Desarrollo de Software</h3>
                <p><strong>Objetivos:</strong> Conocer las metodologías ágiles y tradicionales utilizadas en el desarrollo de sistemas. Sommerville (2011) destaca que la elección metodológica impacta directamente en la calidad del software.</p>
                <p><strong>Actividades:</strong> Análisis comparativo de metodologías (Scrum, Cascada, XP), simulación de roles en equipos de desarrollo.</p>
            </div>

            <div class="planeamiento-bloque">
                <h3>🧩 Semana 4: Modelado de Sistemas</h3>
                <p><strong>Objetivos:</strong> Aprender a representar sistemas mediante diagramas UML y herramientas de modelado. Booch et al. (2005) afirman que el modelado visual mejora la comprensión y comunicación entre equipos.</p>
                <p><strong>Actividades:</strong> Creación de diagramas de casos de uso, clases y secuencia con herramientas como Draw.io o StarUML.</p>
            </div>

            <div class="planeamiento-bloque">
                <h3>🗄️ Semana 5: Bases de Datos Relacionales</h3>
                <p><strong>Objetivos:</strong> Comprender el diseño lógico de bases de datos y el uso de SQL para manipulación de datos. Date (2004) señala que una base de datos bien diseñada es esencial para la integridad de la información.</p>
                <p><strong>Actividades:</strong> Diseño de esquemas relacionales, consultas básicas y avanzadas en MySQL o SQL Server.</p>
            </div>

            <div class="planeamiento-bloque">
                <h3>🖥️ Semana 6: Desarrollo de Interfaces de Usuario</h3>
                <p><strong>Objetivos:</strong> Diseñar interfaces funcionales y accesibles para aplicaciones de escritorio o web. Nielsen (1993) enfatiza que la usabilidad es un factor crítico en la aceptación del software.</p>
                <p><strong>Actividades:</strong> Prototipado con Figma, desarrollo de formularios en HTML/CSS, validación de entradas con JavaScript.</p>
            </div>

            <div class="planeamiento-bibliografia">
                <h3>📚 Bibliografía</h3>
                <ul>
                    <li>Booch, G., Rumbaugh, J., & Jacobson, I. (2005). <em>The Unified Modeling Language User Guide</em>. Addison-Wesley.</li>
                    <li>Date, C. J. (2004). <em>An Introduction to Database Systems</em>. Addison-Wesley.</li>
                    <li>Kernighan, B. W., & Ritchie, D. M. (1988). <em>The C Programming Language</em>. Prentice Hall.</li>
                    <li>Nielsen, J. (1993). <em>Usability Engineering</em>. Morgan Kaufmann.</li>
                    <li>Pressman, R. S. (2010). <em>Software Engineering: A Practitioner's Approach</em>. McGraw-Hill.</li>
                    <li>Sommerville, I. (2011). <em>Software Engineering</em>. Addison-Wesley.</li>
                </ul>
            </div>
        </section>
    `;

    contenedor.innerHTML = contenido;
});
