document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("contenedor-tecnicasdidacticas");

  const contenido = `
  <section class="planeamiento-section">
    <h2>📘 Técnicas Didácticas</h2>

    <div class="planeamiento-bloque">
      <h3>🧠 Introducción</h3>
      <p>Las técnicas didácticas son procedimientos organizados que permiten al docente facilitar el aprendizaje de los estudiantes. Según Díaz Barriga (2002), estas técnicas deben seleccionarse en función de los objetivos, el contenido y el contexto educativo.</p>
    </div>

    <div class="planeamiento-bloque">
      <h3>📢 Técnicas de Carácter Explicativo</h3>
      <p>Estas técnicas promueven la presentación de contenidos por parte del estudiante o docente. Incluyen:</p>
      <ul>
        <li><strong>Exposición:</strong> Presentación oral con apoyo visual (PowerPoint, Prezi).</li>
        <li><strong>Podcast:</strong> Grabación de audio explicativo.</li>
        <li><strong>Videocast:</strong> Video explicativo publicado en plataformas como YouTube.</li>
      </ul>
      <p>Estas técnicas permiten desarrollar habilidades comunicativas y de síntesis (Mora, 2015).</p>
    </div>

    <div class="planeamiento-bloque">
      <h3>🧪 Técnicas de Aprendizaje Demostrativo</h3>
      <p>Permiten verificar el aprendizaje mediante la elaboración de productos:</p>
      <ul>
        <li><strong>Mapa conceptual:</strong> Representación gráfica de conceptos.</li>
        <li><strong>Blog:</strong> Publicación digital con texto e imágenes.</li>
        <li><strong>Infografía:</strong> Visualización de ideas clave.</li>
        <li><strong>Ejercicios prácticos:</strong> Resolución de problemas.</li>
      </ul>
      <p>Estas técnicas fomentan la organización del conocimiento y la creatividad (Novak & Gowin, 1988).</p>
    </div>

    <div class="planeamiento-bloque">
      <h3>🔍 Técnicas de Aprendizaje por Descubrimiento</h3>
      <p>Impulsan la indagación y la búsqueda activa de información:</p>
      <ul>
        <li><strong>Investigación corta:</strong> Búsqueda bibliográfica guiada.</li>
        <li><strong>Webquest:</strong> Exploración de sitios web seleccionados.</li>
        <li><strong>Pasantía:</strong> Experiencia en un entorno profesional.</li>
      </ul>
      <p>Bruner (1961) sostiene que el aprendizaje por descubrimiento fortalece la autonomía y el pensamiento crítico.</p>
    </div>

    <div class="planeamiento-bloque">
      <h3>🤝 Técnicas Grupales</h3>
      <p>Fomentan la colaboración y el intercambio de ideas:</p>
      <ul>
        <li><strong>Debate:</strong> Discusión argumentada sobre un tema.</li>
        <li><strong>Juego de roles:</strong> Representación de situaciones reales.</li>
        <li><strong>Simulación:</strong> Recreación de contextos profesionales.</li>
        <li><strong>Estudio de casos:</strong> Análisis de situaciones reales o hipotéticas.</li>
      </ul>
      <p>Estas técnicas desarrollan habilidades sociales y de resolución de problemas (Johnson & Johnson, 1999).</p>
    </div>

    <div class="planeamiento-bibliografia">
      <h3>📚 Bibliografía</h3>
      <ul>
        <li>Bruner, J. (1961). <em>The Act of Discovery</em>. Harvard Educational Review.</li>
        <li>Díaz Barriga, F. (2002). <em>Estrategias docentes para un aprendizaje significativo</em>. McGraw-Hill.</li>
        <li>Johnson, D. & Johnson, R. (1999). <em>Learning Together and Alone</em>. Allyn & Bacon.</li>
        <li>Mora, J. (2015). <em>Didáctica universitaria</em>. Editorial UCR.</li>
        <li>Novak, J. & Gowin, D. (1988). <em>Aprendiendo a aprender</em>. Paidós.</li>
      </ul>
    </div>
  </section>
  `;

  if (contenedor) {
    contenedor.innerHTML = contenido;
  }
});