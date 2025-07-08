document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor-estrategias");

    const contenido = `
        <section class="estrategias-section">
            <h2>🎯 Estrategias Pedagógicas</h2>

            <div class="estrategia-bloque">
                <h3>👤 Estrategia Individual</h3>
                <p>La estrategia individual se centra en el aprendizaje autónomo del estudiante, permitiéndole avanzar a su propio ritmo, reflexionar sobre los contenidos y desarrollar habilidades de autoevaluación y autorregulación. En Ingeniería en Sistemas, esta estrategia es fundamental para fomentar la responsabilidad individual en el estudio de lenguajes de programación, algoritmos, estructuras de datos y otras áreas técnicas que requieren concentración y práctica constante. Además, promueve la capacidad de resolver problemas de forma independiente, una competencia clave en el desarrollo de software y en la toma de decisiones técnicas. Según Knowles (1984), el aprendizaje autodirigido fortalece la motivación intrínseca y la autonomía del estudiante.</p>
            </div>

            <div class="estrategia-bloque">
                <h3>📚 Estrategia del Estudio de Casos</h3>
                <p>La estrategia del estudio de casos consiste en presentar a los estudiantes situaciones reales o simuladas que deben analizar, interpretar y resolver. En el contexto de Ingeniería en Sistemas, esta estrategia permite aplicar conocimientos teóricos a problemas concretos como fallos en sistemas, diseño de arquitecturas de software, gestión de proyectos o implementación de soluciones tecnológicas. Esta estrategia desarrolla el pensamiento crítico, la capacidad de análisis, la toma de decisiones y la aplicación práctica de conocimientos técnicos, preparando a los estudiantes para enfrentar desafíos reales en el ámbito profesional. Yin (2003) destaca que el estudio de casos favorece la transferencia del conocimiento a contextos reales.</p>
            </div>

            <div class="estrategia-bibliografia">
                <h3>📚 Bibliografía</h3>
                <ul>
                    <li>Knowles, M. S. (1984). <em>The Adult Learner: A Neglected Species</em>. Gulf Publishing.</li>
                    <li>Yin, R. K. (2003). <em>Case Study Research: Design and Methods</em>. Sage Publications.</li>
                </ul>
            </div>
        </section>
    `;

    contenedor.innerHTML = contenido;
});

