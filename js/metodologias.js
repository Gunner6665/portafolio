document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor-metodologias");

    const contenido = `
        <section class="metodologias-section">
            <h2>🧠 Metodologías de Enseñanza</h2>

            <div class="metodologia-bloque">
                <h3>🤝 Aprendizaje Colaborativo</h3>
                <p>El aprendizaje colaborativo promueve que los estudiantes trabajen juntos para alcanzar objetivos comunes, compartiendo conocimientos, habilidades y responsabilidades. En Ingeniería en Sistemas, esta metodología fortalece el trabajo en equipo, la resolución conjunta de problemas y la comunicación efectiva, habilidades esenciales en el desarrollo de software y gestión de proyectos. Según Johnson y Johnson (1999), esta estrategia permite construir conocimiento de forma social y significativa.</p>
            </div>

            <div class="metodologia-bloque">
                <h3>📚 Estudio de Casos</h3>
                <p>El estudio de casos permite analizar situaciones reales o simuladas para identificar problemas, evaluar alternativas y proponer soluciones. Esta metodología conecta la teoría con la práctica, desarrollando habilidades de diagnóstico, pensamiento estratégico y toma de decisiones en contextos reales del entorno tecnológico. Yin (2003) destaca que el estudio de casos favorece la transferencia del conocimiento a contextos reales.</p>
            </div>

            <div class="metodologia-bloque">
                <h3>🛠️ Aprendizaje Basado en Proyectos (ABP)</h3>
                <p>El ABP implica que los estudiantes diseñen, planifiquen y ejecuten proyectos reales o simulados como parte de su proceso de aprendizaje. En Ingeniería en Sistemas, permite aplicar conocimientos de programación, bases de datos, redes y gestión de proyectos, fomentando la autonomía, la creatividad y la integración de competencias técnicas y blandas. Thomas (2000) señala que el ABP fomenta la autonomía y la integración de saberes.</p>
            </div>

            <div class="metodologia-bloque">
                <h3>🎯 Aprendizaje Basado en Problemas (ABP)</h3>
                <p>Esta metodología se centra en la resolución de problemas complejos como punto de partida para el aprendizaje. Los estudiantes desarrollan pensamiento crítico, habilidades de investigación y capacidad de análisis, enfrentando desafíos similares a los del mundo profesional. Barrows (1986) afirma que el aprendizaje basado en problemas desarrolla habilidades de pensamiento crítico.</p>
            </div>

            <div class="metodologia-bloque">
                <h3>🧪 Aprendizaje Experiencial</h3>
                <p>El aprendizaje experiencial se basa en la reflexión sobre la experiencia directa. En el ámbito tecnológico, se traduce en prácticas, simulaciones, laboratorios y entornos virtuales que permiten al estudiante aprender haciendo, reflexionando y mejorando continuamente. Kolb (1984) sostiene que la experiencia es la base del aprendizaje significativo.</p>
            </div>

            <div class="metodologia-bibliografia">
                <h3>📚 Bibliografía</h3>
                <ul>
                    <li>Barrows, H. S. (1986). <em>A taxonomy of problem-based learning methods</em>. Medical Education, 20(6), 481–486.</li>
                    <li>Johnson, D. W., & Johnson, R. T. (1999). <em>Learning Together and Alone: Cooperative, Competitive, and Individualistic Learning</em>. Allyn & Bacon.</li>
                    <li>Kolb, D. A. (1984). <em>Experiential learning: Experience as the source of learning and development</em>. Prentice Hall.</li>
                    <li>Thomas, J. W. (2000). <em>A Review of Research on Project-Based Learning</em>. The Autodesk Foundation.</li>
                    <li>Yin, R. K. (2003). <em>Case Study Research: Design and Methods</em>. Sage Publications.</li>
                </ul>
            </div>
        </section>
    `;

    contenedor.innerHTML = contenido;
});
