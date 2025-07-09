document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("contenedor-planeamiento");

  const contenido = `
  <section class="planeamiento-section">
    <h2>📘 Plan Didáctico Semanal – Programación V</h2>

    <div class="planeamiento-bloque">
      <h3>🧭 Semana 1: Introducción al curso y fundamentos de Internet</h3>
      <p><strong>Objetivo:</strong> Comprender el funcionamiento básico de Internet y su aplicación en el desarrollo web.</p>
      <p><strong>Contenido:</strong> Introducción a Internet, servidores, sitios web, ética en el uso de Internet.</p>
      <p><strong>Actividades:</strong> Presentación del curso y del docente. Aplicación de prueba diagnóstica. Clase teórica sobre fundamentos de Internet. Ejercicios prácticos de navegación y análisis de sitios web.</p>
      <p><strong>Evaluación:</strong> Participación, prueba diagnóstica (no calificada).</p>
      <p><strong>Recursos:</strong> Proyector, navegador web, guía de enlaces.</p>
      <p><em>Referencia: Gómez (2021)</em></p>
    </div>

    <div class="planeamiento-bloque">
      <h3>💻 Semana 2: Introducción al lenguaje HTML</h3>
      <p><strong>Objetivo:</strong> Identificar y aplicar etiquetas básicas de HTML.</p>
      <p><strong>Contenido:</strong> Párrafos, formato de texto, imágenes, listas.</p>
      <p><strong>Actividades:</strong> Demostración del uso de etiquetas HTML. Práctica guiada en clase. Ejercicio práctico individual.</p>
      <p><strong>Evaluación:</strong> Observación del desempeño práctico.</p>
      <p><strong>Recursos:</strong> Visual Studio, navegador, guía de etiquetas HTML.</p>
      <p><em>Referencia: Aubry (2020)</em></p>
    </div>

    <div class="planeamiento-bloque">
      <h3>🧱 Semana 3: Visual Studio y estructura de sitios web</h3>
      <p><strong>Objetivo:</strong> Familiarizarse con Visual Studio y la estructura de un sitio web.</p>
      <p><strong>Contenido:</strong> Interfaz de Visual Studio, diferencia entre página y sitio web, tablas.</p>
      <p><strong>Actividades:</strong> Demostración del entorno Visual Studio. Práctica de creación de páginas web. Asignación de tarea #1.</p>
      <p><strong>Evaluación:</strong> Revisión de ejercicios en clase.</p>
      <p><strong>Recursos:</strong> Visual Studio, HTML templates.</p>
      <p><em>Referencia: Gómez (2021)</em></p>
    </div>

    <div class="planeamiento-bloque">
      <h3>🎨 Semana 4: Apariencia y diseño de sitios web</h3>
      <p><strong>Objetivo:</strong> Aplicar estilos y estructuras visuales en páginas web.</p>
      <p><strong>Contenido:</strong> Apariencia, imágenes, tablas.</p>
      <p><strong>Actividades:</strong> Revisión de tarea #1. Práctica de diseño visual. Asignación de tarea #2 (unidades I–III).</p>
      <p><strong>Evaluación:</strong> Revisión de tarea #1, participación.</p>
      <p><strong>Recursos:</strong> Visual Studio, CSS básico.</p>
      <p><em>Referencia: Aubry (2020)</em></p>
    </div>

    <div class="planeamiento-bloque">
      <h3>🔁 Semana 5: Consolidación de HTML y Visual Studio</h3>
      <p><strong>Objetivo:</strong> Integrar conocimientos de HTML y Visual Studio en ejercicios prácticos.</p>
      <p><strong>Contenido:</strong> Revisión general de unidades I–III.</p>
      <p><strong>Actividades:</strong> Resolución de tarea #2. Práctica de integración de contenidos.</p>
      <p><strong>Evaluación:</strong> Tarea #2.</p>
      <p><strong>Recursos:</strong> Visual Studio, navegador.</p>
      <p><em>Referencia: Gómez (2021)</em></p>
    </div>

    <div class="planeamiento-bloque">
      <h3>📝 Semana 6: Primer examen parcial</h3>
      <p><strong>Objetivo:</strong> Evaluar conocimientos de las unidades I–III.</p>
      <p><strong>Contenido:</strong> Examen escrito y práctico.</p>
      <p><strong>Actividades:</strong> Aplicación del examen (180 minutos).</p>
      <p><strong>Evaluación:</strong> Examen parcial (15%).</p>
      <p><strong>Recursos:</strong> Computadora, Visual Studio.</p>
    </div>

    <div class="planeamiento-bloque">
      <h3>🧩 Semana 7: Elementos avanzados de Visual Studio I</h3>
      <p><strong>Objetivo:</strong> Utilizar formularios, hipervínculos y etiquetas META.</p>
      <p><strong>Contenido:</strong> Formularios, enlaces, etiquetas META.</p>
      <p><strong>Actividades:</strong> Revisión del examen. Práctica guiada con formularios.</p>
      <p><strong>Evaluación:</strong> Participación y ejercicios.</p>
      <p><strong>Recursos:</strong> Visual Studio, HTML avanzado.</p>
      <p><em>Referencia: Aubry (2020)</em></p>
    </div>

    <div class="planeamiento-bloque">
      <h3>⚙️ Semana 8: Elementos avanzados de Visual Studio II</h3>
      <p><strong>Objetivo:</strong> Aplicar eventos y objetos Spry en páginas web.</p>
      <p><strong>Contenido:</strong> Eventos, objetos Spry.</p>
      <p><strong>Actividades:</strong> Práctica de eventos y acciones. Asignación de tarea #3.</p>
      <p><strong>Evaluación:</strong> Observación práctica.</p>
      <p><strong>Recursos:</strong> Visual Studio, documentación Spry.</p>
      <p><em>Referencia: Gómez (2021)</em></p>
    </div>

    <div class="planeamiento-bloque">
      <h3>🖌️ Semana 9: Bocetos y diseño interactivo</h3>
      <p><strong>Objetivo:</strong> Diseñar interfaces gráficas interactivas.</p>
      <p><strong>Contenido:</strong> Hipervínculos, etiquetas META, interfaz gráfica.</p>
      <p><strong>Actividades:</strong> Práctica dirigida con escenarios reales. Asignación de tarea #4.</p>
      <p><strong>Evaluación:</strong> Participación, avance de diseño.</p>
      <p><strong>Recursos:</strong> Visual Studio, plantillas de diseño.</p>
      <p><em>Referencia: Gauchat (2019)</em></p>
    </div>

    <div class="planeamiento-bloque">
      <h3>🚀 Semana 10: Avance de proyecto final</h3>
      <p><strong>Objetivo:</strong> Presentar el primer avance del proyecto final.</p>
      <p><strong>Contenido:</strong> Corrección y retroalimentación.</p>
      <p><strong>Actividades:</strong> Entrega de avance #1. Resolución de tarea #4.</p>
      <p><strong>Evaluación:</strong> Revisión del avance.</p>
      <p><strong>Recursos:</strong> Visual Studio, rúbrica de proyecto.</p>
    </div>

    <div class="planeamiento-bloque">
      <h3>📜 Semana 11: Introducción a JavaScript</h3>
      <p><strong>Objetivo:</strong> Comprender la sintaxis básica de JavaScript.</p>
      <p><strong>Contenido:</strong> Scripts, variables, operadores.</p>
      <p><strong>Actividades:</strong> Demostración de scripts. Práctica de aplicación básica.</p>
      <p><strong>Evaluación:</strong> Participación y ejercicios.</p>
      <p><strong>Recursos:</strong> Visual Studio, consola del navegador.</p>
      <p><em>Referencia: Gauchat (2019)</em></p>
    </div>

    <div class="planeamiento-bloque">
      <h3>🔄 Semana 12: Estructuras de control</h3>
      <p><strong>Objetivo:</strong> Aplicar estructuras condicionales y cíclicas en JavaScript.</p>
      <p><strong>Contenido:</strong> If, switch, for, while, do while.</p>
      <p><strong>Actividades:</strong> Práctica de programación con estructuras. Asignación de tarea #5.</p>
      <p><strong>Evaluación:</strong> Revisión de ejercicios.</p>
      <p><strong>Recursos:</strong> Visual Studio, documentación JS.</p>
      <p><em>Referencia: Aubry (2020)</em></p>
    </div>

    <div class="planeamiento-bloque">
      <h3>🧠 Semana 13: Funciones y argumentos</h3>
      <p><strong>Objetivo:</strong> Crear funciones reutilizables en JavaScript.</p>
      <p><strong>Contenido:</strong> Declaración, argumentos.</p>
      <p><strong>Actividades:</strong> Revisión de tarea #5. Práctica de funciones. Resolución de dudas del proyecto.</p>
      <p><strong>Evaluación:</strong> Participación y ejercicios.</p>
      <p><strong>Recursos:</strong> Visual Studio, guía de funciones.</p>
      <p><em>Referencia: Gauchat (2019)</em></p>
    </div>

    <div class="planeamiento-bloque">
      <h3>📚 Semana 14: Segundo examen parcial</h3>
      <p><strong>Objetivo:</strong> Evaluar conocimientos de las unidades IV–VI.</p>
      <p><strong>Contenido:</strong> Examen escrito y práctico.</p>
      <p><strong>Actividades:</strong> Aplicación del examen (180 minutos).</p>
      <p><strong>Evaluación:</strong> Examen parcial (15%).</p>
      <p><strong>Recursos:</strong> Computadora, Visual Studio.</p>
    </div>

    <div class="planeamiento-bloque">
      <h3>🎤 Semana 15: Presentación del proyecto final</h3>
      <p><strong>Objetivo:</strong> Exponer y defender el proyecto final.</p>
      <p><strong>Contenido:</strong> Proyecto completo en HTML, CSS y JavaScript.</p>
      <p><strong>Actividades:</strong> Presentación oral. Evaluación técnica del software.</p>
      <p><strong>Evaluación:</strong> Proyecto final (60%).</p>
      <p><strong>Recursos:</strong> Computadora, rúbrica de evaluación.</p>
    </div>

    <div class="planeamiento-bloque">
      <h3>🔚 Semana 16: Retroalimentación y cierre</h3>
      <p><strong>Objetivo:</strong> Reflexionar sobre el aprendizaje y cerrar el curso.</p>
      <p><strong>Contenido:</strong> Evaluación final, retroalimentación.</p>
      <p><strong>Actividades:</strong> Revisión de notas. Feedback individual y grupal.</p>
      <p><strong>Evaluación:</strong> Participación.</p>
      <p><strong>Recursos:</strong> Aula, plataforma virtual.</p>
    </div>

    <div class="planeamiento-bibliografia">
      <h3>📚 Referencias Bibliográficas</h3>
      <ul>
        <li>Gómez. (2021). <em>Curso de desarrollo web: HTML, CSS y JavaScript</em>. Ediciones Anaya Multimedia.</li>
        <li>Gauchat. (2019). <em>El Gran libro de HTML5, CSS3 y Javascript</em>. Marcombo.</li>
        <li>Aubry. (2020). <em>HTML5 y CSS3: Domine los estándares de creación de sitios web</em>. Ediciones ENI.</li>
      </ul>
    </div>

  </section>
  `;

  contenedor.innerHTML = contenido;
});
