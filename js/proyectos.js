document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor-proyectos");

    const contenido = `
        <section class="proyectos-section">
            <h2>💼 Proyectos y Experiencias Profesionales</h2>

            <div class="proyecto-bloque">
                <h3>📦 Gestión de Inventario con .NET y SQL Server</h3>
                <p><strong>Descripción:</strong> Desarrollo de una aplicación de escritorio para la gestión de inventario en una empresa comercial. Este tipo de soluciones permite automatizar procesos logísticos y mejorar la trazabilidad de productos, lo cual es esencial para la eficiencia operativa (Laudon & Laudon, 2020).</p>
                <p><strong>Tecnologías:</strong> C#, .NET Framework, SQL Server, Windows Forms</p>
                <p><strong>Resultados:</strong> Se logró automatizar el control de existencias, generar reportes y mejorar la trazabilidad de productos.</p>
            </div>

            <div class="proyecto-bloque">
                <h3>👨‍🏫 Plataforma Web para Control Académico</h3>
                <p><strong>Descripción:</strong> Participación en el desarrollo de un sistema web para la gestión de notas, asistencia y reportes académicos. Las plataformas educativas digitales mejoran la eficiencia administrativa y el acceso a la información (Bates, 2015).</p>
                <p><strong>Tecnologías:</strong> ASP.NET MVC, Entity Framework, Bootstrap, JavaScript</p>
                <p><strong>Resultados:</strong> Se mejoró la eficiencia administrativa y se facilitó el acceso a la información para docentes y estudiantes.</p>
            </div>

            <div class="proyecto-bloque">
                <h3>🧪 Automatización de Pruebas de Calidad (QA)</h3>
                <p><strong>Descripción:</strong> Implementación de pruebas automatizadas para validar funcionalidades críticas en sistemas internos. La automatización de pruebas reduce errores humanos y mejora la cobertura de validación (Fewster & Graham, 1999).</p>
                <p><strong>Tecnologías:</strong> Selenium, C#, NUnit, Git</p>
                <p><strong>Resultados:</strong> Se redujo el tiempo de validación manual y se incrementó la cobertura de pruebas.</p>
            </div>

            <div class="proyecto-bloque">
                <h3>🛠️ Soporte Técnico y Mantenimiento de Sistemas</h3>
                <p><strong>Descripción:</strong> Experiencia brindando soporte técnico, resolución de incidencias y mantenimiento de bases de datos en producción. El soporte técnico es clave para garantizar la continuidad operativa y la disponibilidad de los sistemas críticos (ITIL Foundation, 2019).</p>
                <p><strong>Tecnologías:</strong> SQL Server, PowerShell, Herramientas de monitoreo</p>
                <p><strong>Resultados:</strong> Se garantizó la continuidad operativa y la disponibilidad de los sistemas críticos.</p>
            </div>

            <div class="proyecto-bibliografia">
                <h3>📚 Bibliografía</h3>
                <ul>
                    <li>Bates, T. (2015). <em>Teaching in a Digital Age</em>. Tony Bates Associates Ltd.</li>
                    <li>Fewster, M., & Graham, D. (1999). <em>Software Test Automation</em>. Addison-Wesley.</li>
                    <li>ITIL Foundation. (2019). <em>ITIL Foundation: ITIL 4 Edition</em>. AXELOS.</li>
                    <li>Laudon, K. C., & Laudon, J. P. (2020). <em>Management Information Systems</em>. Pearson.</li>
                </ul>
            </div>
        </section>
    `;

    contenedor.innerHTML = contenido;
});

