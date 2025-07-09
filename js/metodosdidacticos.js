document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("contenedor-metodosdidacticos");

  const contenido = `
  <section class="planeamiento-section">
    <h2>📗 Métodos Didácticos</h2>

    <div class="planeamiento-bloque">
      <h3>📌 ¿Qué es un método didáctico?</h3>
      <p>Es un sistema organizado de recursos, procedimientos y actividades que el docente utiliza para facilitar el aprendizaje. Según Camilloni (2007), un método didáctico debe ser coherente con los objetivos, contenidos y características del grupo.</p>
    </div>

    <div class="planeamiento-bloque">
      <h3>📋 Principios de los métodos didácticos</h3>
      <ul>
        <li><strong>Planificación:</strong> Objetivos claros y contextualizados.</li>
        <li><strong>Ordenación:</strong> Progresión de lo simple a lo complejo.</li>
        <li><strong>Adecuación:</strong> Ajuste a las capacidades del estudiante.</li>
        <li><strong>Economía:</strong> Uso eficiente de recursos y tiempo.</li>
        <li><strong>Orientación:</strong> Instrucciones claras y definidas.</li>
      </ul>
      <p>Estos principios garantizan la efectividad del proceso educativo (Zabalza, 2000).</p>
    </div>

    <div class="planeamiento-bloque">
      <h3>🔍 Métodos para la construcción del conocimiento</h3>
      <p>Promueven el aprendizaje activo mediante descubrimiento, análisis y reflexión. El docente actúa como facilitador. Bruner (1961) destaca que este enfoque estimula la comprensión profunda.</p>
    </div>

    <div class="planeamiento-bloque">
      <h3>🛠️ Métodos prácticos</h3>
      <p>Involucran al estudiante en actividades que simulan el ejercicio profesional: pasantías, prácticas, visitas técnicas, resolución de problemas. Kolb (1984) señala que el aprendizaje experiencial fortalece las competencias.</p>
    </div>

    <div class="planeamiento-bloque">
      <h3>👥 Métodos de trabajo en grupo</h3>
      <p>Fomentan la colaboración, la comunicación y la responsabilidad compartida. Incluyen el aprendizaje basado en problemas, proyectos y estudio de casos. Vygotsky (1978) resalta la importancia del entorno social en el aprendizaje.</p>
    </div>

    <div class="planeamiento-bloque">
      <h3>🎤 Métodos expositivos</h3>
      <p>Se utilizan para introducir temas. El docente presenta información y los estudiantes participan activamente. La exposición debe ser breve y complementarse con recursos tecnológicos y actividades participativas (Mora, 2015).</p>
    </div>

    <div class="planeamiento-bibliografia">
      <h3>📚 Bibliografía</h3>
      <ul>
        <li>Bruner, J. (1961). <em>The Act of Discovery</em>. Harvard Educational Review.</li>
        <li>Camilloni, A. (2007). <em>El saber didáctico</em>. Paidós.</li>
        <li>Kolb, D. (1984). <em>Experiential Learning</em>. Prentice Hall.</li>
        <li>Mora, J. (2015). <em>Didáctica universitaria</em>. Editorial UCR.</li>
        <li>Vygotsky, L. (1978). <em>El desarrollo de los procesos psicológicos superiores</em>. Crítica.</li>
        <li>Zabalza, M. A. (2000). <em>Didáctica general</em>. Pearson Educación.</li>
      </ul>
    </div>
  </section>
  `;

  if (contenedor) {
    contenedor.innerHTML = contenido;
  }
});