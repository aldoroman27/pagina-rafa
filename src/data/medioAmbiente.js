// src/data/medioAmbiente.js

export const medioAmbienteData = [
  {
    path: "/medio-ambiente/residuos/rcg",
    titulo: "Registro como Generador de Residuos",
    descripcion: "Trámite obligatorio ante SEMARNAT para establecimientos industriales que generan residuos peligrosos derivados de sus procesos operativos.",
    alcance: "Identificación y clasificación de residuos (CRETIB), estimación de volúmenes de generación, integración técnica del expediente y alta oficial como micro, pequeño o gran generador.",
    beneficios: [
      "Evita multas y clausuras preventivas por parte de la PROFEPA.",
      "Garantiza la trazabilidad legal desde la generación hasta la disposición final.",
      "Es el primer paso indispensable para cualquier certificación ambiental."
    ],
    requisitos: [
      "Acta constitutiva y RFC de la empresa.",
      "Diagrama de flujo de los procesos que generan los residuos.",
      "Listado de materias primas e insumos utilizados."
    ]
  },
  {
    path: "/medio-ambiente/residuos/pdmdr",
    titulo: "Planes de Manejo de Residuos Peligrosos",
    descripcion: "Estrategia técnica y documentada diseñada para minimizar la generación y maximizar la valorización de los residuos peligrosos.",
    alcance: "Diagnóstico de generación, propuestas técnicas de reducción en la fuente, diseño de rutas de recolección interna y presentación oficial del plan ante la autoridad competente.",
    beneficios: [
      "Reducción directa en los costos de disposición final y recolección.",
      "Cumplimiento normativo para grandes y pequeños generadores.",
      "Fomento de la economía circular dentro de la planta."
    ],
    requisitos: [
      "Registro como generador de residuos previo.",
      "Bitácoras de generación del último año.",
      "Comprobantes (manifiestos) de recolección y disposición final."
    ]
  },
  {
    path: "/medio-ambiente/residuos/lau",
    titulo: "Licencia Ambiental Única (LAU) / Licencia de Funcionamiento",
    descripcion: "Instrumento de regulación directa para establecimientos de jurisdicción federal o estatal en materia de emisiones a la atmósfera.",
    alcance: "Recopilación de datos de emisiones, impacto ambiental, riesgo y residuos para la integración del expediente y trámite de la licencia de operación.",
    beneficios: [
      "Integra todas las obligaciones ambientales de la planta en un solo documento.",
      "Otorga la certeza jurídica necesaria para operar ininterrumpidamente.",
      "Facilita la planeación ambiental corporativa."
    ],
    requisitos: [
      "Planos arquitectónicos y layout de equipos.",
      "Inventario detallado de puntos de emisión a la atmósfera.",
      "Resolutivos de impacto ambiental (si aplican)."
    ]
  },
  {
    path: "/medio-ambiente/agua/gycmda",
    titulo: "Gestión y Cumplimiento en Materia de Agua",
    descripcion: "Asesoría técnica y gestoría para el cumplimiento integral de las obligaciones ante CONAGUA o los organismos operadores de agua estatales y municipales.",
    alcance: "Trámites de títulos de concesión, permisos de descarga de aguas residuales, gestión de análisis de laboratorio bajo la NOM-001-SEMARNAT / NOM-002, y bitácoras de medición.",
    beneficios: [
      "Previene clausuras de drenaje industrial y multas por descargas fuera de norma.",
      "Asegura el suministro y aprovechamiento legal del agua en el proceso.",
      "Protege las redes de alcantarillado y cuerpos receptores."
    ],
    requisitos: [
      "Recibos de agua o títulos de concesión vigentes.",
      "Diagramas de la red hidrosanitaria y pluvial de la planta.",
      "Últimos reportes de caracterización de descargas."
    ]
  },
  {
    path: "/medio-ambiente/coa",
    titulo: "Cédula de Operación Anual (COA)",
    descripcion: "Reporte anual obligatorio y multidisciplinario sobre emisiones, transferencias de contaminantes y gestión de residuos de la planta.",
    alcance: "Cálculo de emisiones a la atmósfera, balance de materia, recopilación de bitácoras anuales y captura exacta en el portal oficial de la SEMARNAT o portal estatal.",
    beneficios: [
      "Mantiene la vigencia de las licencias ambientales operativas.",
      "Evita sanciones económicas graves por omisión de reporte.",
      "Genera un indicador claro del desempeño ambiental año con año."
    ],
    requisitos: [
      "Bitácoras de generación de residuos del año a reportar.",
      "Resultados de los análisis isocinéticos de emisiones a la atmósfera.",
      "Registros de consumo de agua y energía eléctrica/combustibles."
    ]
  },
  {
    path: "/medio-ambiente/estatal/rcg",
    titulo: "Registro como Generador (Estatal/SEMADET)",
    descripcion: "Alta oficial ante la Secretaría de Medio Ambiente y Desarrollo Territorial (SEMADET) para empresas que generan Residuos de Manejo Especial (RME).",
    alcance: "Caracterización física de los Residuos de Manejo Especial, integración del expediente técnico estatal y obtención de la constancia de registro.",
    beneficios: [
      "Cumplimiento de la Ley Estatal del Equilibrio Ecológico.",
      "Control legal sobre mermas, empaques, plásticos y chatarra industrial.",
      "Protección ante visitas de inspección de la PROEPA."
    ],
    requisitos: [
      "Comprobante de domicilio y dictamen de uso de suelo.",
      "Fotografías del área de almacenamiento temporal (almacén de RME).",
      "Listado de residuos (cartón, madera, plásticos, metales, etc.)."
    ]
  },
  {
    path: "/medio-ambiente/estatal/adpdmdrdme",
    titulo: "Actualización de Plan de Manejo de RME",
    descripcion: "Diseño, estructuración y actualización del plan de manejo exigido por las autoridades estatales para la gestión y reciclaje de los RME.",
    alcance: "Elaboración del documento con metas de minimización, validación de proveedores de recolección autorizados y presentación ante la SEMADET.",
    beneficios: [
      "Cumplimiento de las condicionantes anuales estatales.",
      "Optimización de la logística de recolección y venta de reciclables.",
      "Estructura un proceso claro de economía circular en la empresa."
    ],
    requisitos: [
      "Constancia del Registro como Generador de RME.",
      "Contratos o manifiestos de las empresas recicladoras autorizadas.",
      "Reportes de los volúmenes recuperados o enviados a reciclaje."
    ]
  },
  {
    path: "/medio-ambiente/estatal/tramites-varios",
    titulo: "Trámites Varios y Gestoría Estatal",
    descripcion: "Acompañamiento especializado en requerimientos misceláneos, apoyo de ecología municipal y resolutivos de impacto ambiental.",
    alcance: "Revisión técnica de condicionantes, elaboración de oficios formales, seguimiento a trámites rezagados y atención directa a visitas de inspección o requerimientos.",
    beneficios: [
      "Tranquilidad legal para los directivos y gerentes de planta.",
      "Solución ágil a requerimientos sorpresa de las autoridades.",
      "Evita la duplicidad de procesos burocráticos."
    ],
    requisitos: [
      "Documentación legal básica de la empresa.",
      "Copia de los oficios, emplazamientos o requerimientos notificados por la autoridad.",
      "Acceso a inspección ocular en las instalaciones."
    ]
  }
];