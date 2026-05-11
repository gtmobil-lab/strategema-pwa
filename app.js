// ============================================================
// STRATEGEMA — Plan Personal PWA
// Permanent, fully customizable, offline-first
// ============================================================

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX"];
const TASK_MARKERS = ["i.", "ii.", "iii.", "iv.", "v.", "vi.", "vii.", "viii.", "ix.", "x.", "xi.", "xii."];
const DAY_NAMES = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const DAY_NAMES_SHORT = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"];

// Default plan (only used on first launch)
const DEFAULT_PLAN = {
  meta: {
    title: "Mes I — Fundación",
    subtitle: "Plan de transformación · 28 días",
    quote: "Los guerreros victoriosos primero ganan y después van a la guerra.",
    quoteAuthor: "Sun Tzu",
  },
  pillars: [
    { id: "p1", name: "MIT", icon: "I" },
    { id: "p2", name: "Lectura", icon: "II" },
    { id: "p3", name: "Físico", icon: "III" },
    { id: "p4", name: "Proyección", icon: "IV" },
  ],
  weeks: [
    {
      id: "w1",
      name: "Semana I",
      focus: "Instalar el Sistema",
      days: generateWeek1Days(),
    },
    {
      id: "w2",
      name: "Semana II",
      focus: "Elevar la Intensidad",
      days: generateWeek2Days(),
    },
    {
      id: "w3",
      name: "Semana III",
      focus: "Consolidar Hábitos",
      days: generateWeek3Days(),
    },
    {
      id: "w4",
      name: "Semana IV",
      focus: "Acelerar Resultados",
      days: generateWeek4Days(),
    },
  ],
};

function generateWeek1Days() {
  return [
    { id: "w1d1", name: DAY_NAMES[0], focus: "Anti-procrastinación", blocks: [
      { id: "b1", title: "Ritual de arranque", time: "06:30 – 07:00", tasks: ["Escribe en papel tu MIT del día", "Revisa tareas postergadas — elige 3 para esta semana", "Descarga Todoist y crea categorías"] },
      { id: "b2", title: "Movimiento físico", time: "12:30 – 12:50", tasks: ["Caminata de 20 minutos", "Sin teléfono ni correo", "Hidratación 500ml"] },
      { id: "b3", title: "Lectura + Planificación", time: "20:00 – 20:30", tasks: ["Cap 1 de Art of War (~15 págs)", "1 frase aplicable a tu trabajo", "Escribe MIT de mañana"] },
    ], checks: {} },
    { id: "w1d2", name: DAY_NAMES[1], focus: "Lenguaje y Cultura", blocks: [
      { id: "b1", title: "Contenido ejecutivo", time: "06:30 – 07:00", tasks: ["1 artículo de FT o Bloomberg en inglés", "Anota 1 dato para conversación", "Palabra nueva: 'Pragmático'"] },
      { id: "b2", title: "Movimiento + audio", time: "12:30 – 12:50", tasks: ["Caminata de 20 minutos", "Podcast Economist mientras caminas", "Hidratación 500ml"] },
      { id: "b3", title: "Voz y Presencia", time: "20:00 – 20:30", tasks: ["Graba 2 min de audio sobre el artículo", "Identifica muletillas y ritmo", "Escribe MIT de mañana"] },
    ], checks: {} },
    { id: "w1d3", name: DAY_NAMES[2], focus: "Imagen y Físico", blocks: [
      { id: "b1", title: "Auditoría de imagen", time: "06:30 – 07:00", tasks: ["Organiza armario", "Identifica 3 piezas a reemplazar", "Agenda barbería esta semana"] },
      { id: "b2", title: "Movimiento físico", time: "12:30 – 12:50", tasks: ["Caminata de 20 minutos", "Hidratación 500ml"] },
      { id: "b3", title: "Entrenamiento en casa", time: "20:00 – 20:30", tasks: ["3x10 sentadillas", "3 series de plancha 20 seg", "3x10 flexiones (modificadas si necesario)"] },
    ], checks: {} },
    { id: "w1d4", name: DAY_NAMES[3], focus: "Lectura y Conversación", blocks: [
      { id: "b1", title: "Lectura profunda", time: "06:30 – 07:00", tasks: ["Cap 2 de Art of War", "1 principio aplicable a negociación", "Anótalo en cuaderno"] },
      { id: "b2", title: "Movimiento + observación", time: "12:30 – 12:50", tasks: ["Caminata de 20 minutos", "Describe 5 cosas con vocabulario preciso"] },
      { id: "b3", title: "Cultura de alto nivel", time: "20:00 – 20:30", tasks: ["1 artista latinoamericano", "1 región vinícola nueva", "Escribe MIT de mañana"] },
    ], checks: {} },
    { id: "w1d5", name: DAY_NAMES[4], focus: "Revisión semanal", blocks: [
      { id: "b1", title: "Balance de la semana", time: "06:30 – 07:00", tasks: ["¿MIT al menos 4 días?", "¿Lectura 4 días?", "¿Movimiento 4 días?", "¿Proyectaste quién quieres ser?"] },
      { id: "b2", title: "Movimiento físico", time: "12:30 – 12:50", tasks: ["Caminata de 20 minutos", "Hidratación 500ml"] },
      { id: "b3", title: "Entrenamiento + Recompensa", time: "20:00 – 20:30", tasks: ["3x10 sentadillas + planchas + flexiones", "Recompensa sana", "Planifica Semana 2"] },
    ], checks: {} },
    { id: "w1d6", name: DAY_NAMES[5], focus: "Lectura profunda + Cuerpo", blocks: [
      { id: "b1", title: "Lectura sin interrupciones", time: "08:00 – 09:00", tasks: ["Caps 3-4 Art of War sin prisa", "Café o té en ambiente intencional", "2 reflexiones en cuaderno"] },
      { id: "b2", title: "Actividad física libre", time: "10:30 – 11:15", tasks: ["45 min de actividad que disfrutes", "Sin sentir obligación", "1L de agua"] },
      { id: "b3", title: "Cultura e imagen", time: "17:00 – 17:30", tasks: ["Investiga exposición o evento cultural", "Referencias de estilo en LinkedIn", "Confirma cita de barbería"] },
    ], checks: {} },
    { id: "w1d7", name: DAY_NAMES[6], focus: "Recarga y Planificación", blocks: [
      { id: "b1", title: "Cierre semanal", time: "09:00 – 09:30", tasks: ["Revisa tu tablero", "1 cosa que hiciste bien, 1 a mejorar", "Celebra haber empezado"] },
      { id: "b2", title: "Planificación Semana 2", time: "11:00 – 11:15", tasks: ["3 tareas postergadas más importantes", "Agéndalas con día y hora", "Confirma libro disponible"] },
      { id: "b3", title: "MIT del lunes", time: "20:00 – 20:15", tasks: ["Escribe MIT del lunes con claridad", "Sin trabajo después de 20:30", "7 horas de sueño"] },
    ], checks: {} },
  ];
}

function generateWeek2Days() {
  return [
    { id: "w2d1", name: DAY_NAMES[0], focus: "Profundizar MIT", blocks: [
      { id: "b1", title: "MIT + bloque profundo", time: "06:30 – 07:00", tasks: ["MIT del día con detalle", "Planifica 1 bloque de 45 min sin distracciones", "Lista 2 tareas secundarias"] },
      { id: "b2", title: "Movimiento físico", time: "12:30 – 12:50", tasks: ["Caminata de 20-25 minutos", "Reflexión sobre productividad mañanera"] },
      { id: "b3", title: "Lectura + Reflexión", time: "20:00 – 20:30", tasks: ["Cap 3 de Art of War", "¿Cómo mejorar el bloque profundo mañana?", "MIT de mañana"] },
    ], checks: {} },
    { id: "w2d2", name: DAY_NAMES[1], focus: "Lectura avanzada", blocks: [
      { id: "b1", title: "Doble dosis cultural", time: "06:30 – 07:00", tasks: ["1 artículo de FT/Bloomberg", "Termina Cap 3 si quedó pendiente", "Palabra nueva en español e inglés"] },
      { id: "b2", title: "Caminata con propósito", time: "12:30 – 12:50", tasks: ["Podcast Economist 20 min", "Anota 1 idea para conversación"] },
      { id: "b3", title: "Práctica conversacional", time: "20:00 – 20:30", tasks: ["Graba 3 min sobre tema actual", "Practica usar palabras nuevas", "MIT de mañana"] },
    ], checks: {} },
    { id: "w2d3", name: DAY_NAMES[2], focus: "Intensidad física - Gimnasio", blocks: [
      { id: "b1", title: "Preparación gimnasio", time: "06:30 – 07:00", tasks: ["Investiga gimnasio cercano", "Inscríbete o agenda visita", "Define rutina simple inicial"] },
      { id: "b2", title: "Hidratación y nutrición", time: "12:30 – 12:50", tasks: ["2L de agua durante el día", "Comida con proteína de calidad"] },
      { id: "b3", title: "Primera sesión gimnasio", time: "19:00 – 20:00", tasks: ["30 min de pesas básicas", "Cardio 10 min al cierre", "Estiramiento 5 min"] },
    ], checks: {} },
    { id: "w2d4", name: DAY_NAMES[3], focus: "Cultura profunda", blocks: [
      { id: "b1", title: "Lectura intensa", time: "06:30 – 07:00", tasks: ["Cap 4 de Art of War completo", "Conexión con tu trabajo tributario", "Anota aplicación práctica"] },
      { id: "b2", title: "Movimiento + cultura", time: "12:30 – 12:50", tasks: ["Caminata + audiolibro o podcast cultural"] },
      { id: "b3", title: "Aprendizaje refinado", time: "20:00 – 20:30", tasks: ["1 artista latinoamericano (10 min)", "1 vino o whisky nuevo investigado", "MIT de mañana"] },
    ], checks: {} },
    { id: "w2d5", name: DAY_NAMES[4], focus: "Revisión progreso", blocks: [
      { id: "b1", title: "Comparativa S1 vs S2", time: "06:30 – 07:00", tasks: ["¿Qué mejoró respecto a S1?", "¿Dónde se ve estancamiento?", "Define ajuste para S3"] },
      { id: "b2", title: "Movimiento sostenible", time: "12:30 – 12:50", tasks: ["Caminata 20 min", "Reflexión: ¿esto es sostenible?"] },
      { id: "b3", title: "Gimnasio o entrenamiento", time: "20:00 – 20:30", tasks: ["2da sesión gimnasio O entrenamiento casa", "Recompensa al completar la semana", "Planifica S3"] },
    ], checks: {} },
    { id: "w2d6", name: DAY_NAMES[5], focus: "Lectura continua", blocks: [
      { id: "b1", title: "Bloque profundo lectura", time: "08:00 – 09:30", tasks: ["Caps 5-6 Art of War", "90 min sin interrupciones", "3 reflexiones escritas"] },
      { id: "b2", title: "Actividad física libre", time: "10:30 – 11:30", tasks: ["1 hora de actividad disfrutable", "Aire libre preferentemente"] },
      { id: "b3", title: "Imagen ejecutiva", time: "17:00 – 17:30", tasks: ["Compra 1 pieza clave de ropa identificada en S1", "Agenda fotografía profesional para LinkedIn"] },
    ], checks: {} },
    { id: "w2d7", name: DAY_NAMES[6], focus: "Consolidación", blocks: [
      { id: "b1", title: "Reflexión semanal", time: "09:00 – 09:30", tasks: ["Compara tu yo actual vs hace 14 días", "¿Qué pilar lidera?", "¿Qué pilar necesita atención?"] },
      { id: "b2", title: "Planificación S3", time: "11:00 – 11:15", tasks: ["MIT principal Semana 3", "Define meta intermedia", "Agéndate eventos"] },
      { id: "b3", title: "Recarga", time: "20:00 – 20:15", tasks: ["MIT del lunes escrito", "7 horas de sueño", "Confianza en proceso"] },
    ], checks: {} },
  ];
}

function generateWeek3Days() {
  return [
    { id: "w3d1", name: DAY_NAMES[0], focus: "Sistema consolidado", blocks: [
      { id: "b1", title: "MIT automático", time: "06:30 – 07:00", tasks: ["MIT sin esfuerzo (ya es hábito)", "Aplica técnica Pomodoro: 4 bloques de 25 min", "Revisión de cadena (15 días)"] },
      { id: "b2", title: "Movimiento físico", time: "12:30 – 12:50", tasks: ["Caminata 25 min", "Audio ejecutivo (FT podcast)"] },
      { id: "b3", title: "Lectura aplicada", time: "20:00 – 20:30", tasks: ["Cap 7 Art of War", "1 estrategia para usar esta semana en el trabajo", "MIT de mañana"] },
    ], checks: {} },
    { id: "w3d2", name: DAY_NAMES[1], focus: "Lectura fluida", blocks: [
      { id: "b1", title: "Lectura sin esfuerzo", time: "06:30 – 07:00", tasks: ["Termina Cap 7 si pendiente", "1 artículo + 1 newsletter", "Vocabulario: 2 palabras nuevas"] },
      { id: "b2", title: "Práctica conversacional", time: "12:30 – 12:50", tasks: ["Conversación con un colega usando referencias culturales", "Observa tu fluidez vs S1"] },
      { id: "b3", title: "Voz refinada", time: "20:00 – 20:30", tasks: ["Graba 5 min sobre tema económico actual", "Compara con grabación de S1", "MIT de mañana"] },
    ], checks: {} },
    { id: "w3d3", name: DAY_NAMES[2], focus: "Rutina de ejercicio", blocks: [
      { id: "b1", title: "Pre-gimnasio", time: "06:30 – 07:00", tasks: ["Hidratación + proteína", "Ropa lista desde la noche anterior", "Visualización de la rutina"] },
      { id: "b2", title: "Comida pre-entreno", time: "12:30 – 12:50", tasks: ["Comida con carbohidratos complejos", "2L de agua acumulados"] },
      { id: "b3", title: "Gimnasio 2da semana", time: "19:00 – 20:00", tasks: ["45 min de rutina (push o pull)", "Notas: ¿qué peso movió?", "Estiramiento profundo"] },
    ], checks: {} },
    { id: "w3d4", name: DAY_NAMES[3], focus: "Alto nivel", blocks: [
      { id: "b1", title: "Preparación social", time: "06:30 – 07:00", tasks: ["Cap 8 Art of War", "Repasa golf, tenis, vinos", "Identifica próximo evento"] },
      { id: "b2", title: "Caminata reflexiva", time: "12:30 – 12:50", tasks: ["¿En qué círculo quieres entrar?", "¿Qué te falta?"] },
      { id: "b3", title: "Networking", time: "20:00 – 20:30", tasks: ["Mensaje a 1 contacto de alto nivel", "Lista 5 personas a conocer", "MIT de mañana"] },
    ], checks: {} },
    { id: "w3d5", name: DAY_NAMES[4], focus: "Análisis profundo", blocks: [
      { id: "b1", title: "Data de 3 semanas", time: "06:30 – 07:00", tasks: ["Revisa tasas de éxito S1, S2, S3", "Identifica patrones", "¿Qué cambia para S4?"] },
      { id: "b2", title: "Movimiento + reflexión", time: "12:30 – 12:50", tasks: ["Caminata de cierre semanal"] },
      { id: "b3", title: "Gimnasio o cierre", time: "20:00 – 20:30", tasks: ["3ra sesión gimnasio (subir intensidad)", "Recompensa sostenible", "Planifica S4"] },
    ], checks: {} },
    { id: "w3d6", name: DAY_NAMES[5], focus: "Lectura aplicada", blocks: [
      { id: "b1", title: "Bloque dominical", time: "08:00 – 09:30", tasks: ["Caps 9-10 Art of War", "Aplicación al sector financiero/tributario", "Notas en cuaderno"] },
      { id: "b2", title: "Actividad libre", time: "10:30 – 11:30", tasks: ["1 hora de actividad enérgica", "Compañía si es posible"] },
      { id: "b3", title: "Mediciones", time: "17:00 – 17:30", tasks: ["Foto perfil/cuerpo (mes 1)", "Mediciones físicas básicas", "Comparativa con S1"] },
    ], checks: {} },
    { id: "w3d7", name: DAY_NAMES[6], focus: "Evaluación mid-mes", blocks: [
      { id: "b1", title: "Reflexión profunda", time: "09:00 – 09:30", tasks: ["¿Cómo te ves a ti mismo hoy vs hace 21 días?", "¿Qué dirían tus colegas?", "¿Qué dirías tú?"] },
      { id: "b2", title: "Plan S4", time: "11:00 – 11:15", tasks: ["Define la meta más ambiciosa para S4", "MIT de cierre del mes"] },
      { id: "b3", title: "Última recarga", time: "20:00 – 20:15", tasks: ["MIT del lunes (semana final)", "Visualiza el final del mes", "7 horas sueño"] },
    ], checks: {} },
  ];
}

function generateWeek4Days() {
  return [
    { id: "w4d1", name: DAY_NAMES[0], focus: "Máximo rendimiento", blocks: [
      { id: "b1", title: "Ejecución de élite", time: "06:30 – 07:00", tasks: ["MIT + 2 sub-tareas críticas", "Bloque profundo de 90 min agendado", "Identifica 1 cosa para delegar"] },
      { id: "b2", title: "Recarga estratégica", time: "12:30 – 12:50", tasks: ["Caminata 20 min", "Audio de liderazgo o estrategia"] },
      { id: "b3", title: "Síntesis del día", time: "20:00 – 20:30", tasks: ["Cap 9 Art of War", "¿Qué decisión clave tomaste hoy?", "MIT de mañana"] },
    ], checks: {} },
    { id: "w4d2", name: DAY_NAMES[1], focus: "Síntesis intelectual", blocks: [
      { id: "b1", title: "Lectura ejecutiva", time: "06:30 – 07:00", tasks: ["Cap 10 Art of War", "Artículo profundo (HBR o Bloomberg)", "Conecta ideas: ¿qué patrón ves?"] },
      { id: "b2", title: "Conversación de nivel", time: "12:30 – 12:50", tasks: ["Conversación profesional usando 1 idea del libro", "Observa la reacción"] },
      { id: "b3", title: "Voz refinada", time: "20:00 – 20:30", tasks: ["Graba 5 min: tu argumento sobre tema económico", "Compara con S1", "MIT de mañana"] },
    ], checks: {} },
    { id: "w4d3", name: DAY_NAMES[2], focus: "Meta físico", blocks: [
      { id: "b1", title: "Preparación final", time: "06:30 – 07:00", tasks: ["Hidratación + proteína", "Ropa nueva si la compraste", "Visualiza la sesión"] },
      { id: "b2", title: "Nutrición precisa", time: "12:30 – 12:50", tasks: ["Comida balanceada", "Hidratación constante"] },
      { id: "b3", title: "Gimnasio top semana", time: "19:00 – 20:00", tasks: ["60 min sesión completa", "Anota pesos vs S2 y S3", "Foto de progreso"] },
    ], checks: {} },
    { id: "w4d4", name: DAY_NAMES[3], focus: "Círculo de alto nivel", blocks: [
      { id: "b1", title: "Preparación de evento", time: "06:30 – 07:00", tasks: ["Investiga asistentes/contexto", "Prepara 3 temas de conversación", "Confirma logística"] },
      { id: "b2", title: "Imagen final", time: "12:30 – 12:50", tasks: ["Outfit listo y planchado", "Fragancia + accesorios"] },
      { id: "b3", title: "Asiste a evento real", time: "19:00 – 22:00", tasks: ["Conferencia, cena profesional o evento financiero", "Conversa con 3 personas nuevas", "Pide tarjeta o LinkedIn"] },
    ], checks: {} },
    { id: "w4d5", name: DAY_NAMES[4], focus: "Mes consolidado", blocks: [
      { id: "b1", title: "Reporte de 4 semanas", time: "06:30 – 07:00", tasks: ["Compila data de S1-S4", "Identifica tendencia clara", "Decisiones para Mes 2"] },
      { id: "b2", title: "Movimiento de celebración", time: "12:30 – 12:50", tasks: ["Caminata enérgica 25 min", "Reflexión: ¿cómo te sientes?"] },
      { id: "b3", title: "Cierre semanal", time: "20:00 – 20:30", tasks: ["Última sesión gimnasio del mes", "Recompensa significativa", "Planifica Mes 2 inicial"] },
    ], checks: {} },
    { id: "w4d6", name: DAY_NAMES[5], focus: "Lectura final", blocks: [
      { id: "b1", title: "Cierre del libro", time: "08:00 – 09:30", tasks: ["Caps 11-12 Art of War", "Síntesis personal: 5 ideas que cambiarás", "Notas integradas en cuaderno"] },
      { id: "b2", title: "Actividad disfrutable", time: "10:30 – 11:30", tasks: ["1 hora actividad que ames", "Reflexión sobre transformación"] },
      { id: "b3", title: "Foto y reporte", time: "17:00 – 17:30", tasks: ["Foto frente al espejo (mes 1 cierre)", "Comparativa visual con día 1", "Texto de 200 palabras sobre cambios"] },
    ], checks: {} },
    { id: "w4d7", name: DAY_NAMES[6], focus: "Celebración", blocks: [
      { id: "b1", title: "Reflexión profunda final", time: "09:00 – 09:30", tasks: ["¿Quién eres hoy vs hace 28 días?", "¿Qué fue lo más difícil?", "¿Qué fue lo más satisfactorio?"] },
      { id: "b2", title: "Compromisos Mes 2", time: "11:00 – 11:15", tasks: ["3 cosas a mantener intactas", "2 cosas a mejorar", "1 pilar prioritario"] },
      { id: "b3", title: "Inicio Mes 2", time: "20:00 – 20:15", tasks: ["MIT del lunes (Mes 2)", "Confianza: lo lograste", "Descanso merecido"] },
    ], checks: {} },
  ];
}

// ============================================================
// STATE MANAGEMENT
// ============================================================

let state = {
  plan: null,
  activeWeek: 0,
  activeDay: 0,
  activeTab: "plan", // plan | summary | evaluation
  expandedBlocks: {},
  reflections: {},
  splashShown: false,
};

function loadState() {
  try {
    const stored = localStorage.getItem("strategema_state");
    if (stored) {
      const parsed = JSON.parse(stored);
      state = { ...state, ...parsed };
    }
    if (!state.plan) {
      state.plan = JSON.parse(JSON.stringify(DEFAULT_PLAN));
    }
  } catch (e) {
    state.plan = JSON.parse(JSON.stringify(DEFAULT_PLAN));
  }
}

function saveState() {
  try {
    localStorage.setItem("strategema_state", JSON.stringify(state));
  } catch (e) {
    showToast("Error al guardar");
  }
}

function uid() {
  return Math.random().toString(36).substring(2, 9);
}

// ============================================================
// COMPUTATIONS
// ============================================================

function dayScore(weekIdx, dayIdx) {
  const day = state.plan.weeks[weekIdx].days[dayIdx];
  return state.plan.pillars.filter(p => day.checks[p.id]).length;
}

function dayMaxScore() {
  return state.plan.pillars.length;
}

function weekScore(weekIdx) {
  return state.plan.weeks[weekIdx].days.reduce(
    (acc, _, i) => acc + dayScore(weekIdx, i),
    0
  );
}

function weekMaxScore(weekIdx) {
  return state.plan.weeks[weekIdx].days.length * dayMaxScore();
}

function planScore() {
  return state.plan.weeks.reduce((acc, _, i) => acc + weekScore(i), 0);
}

function planMaxScore() {
  return state.plan.weeks.reduce((acc, _, i) => acc + weekMaxScore(i), 0);
}

function pillarScoreInWeek(pillarId, weekIdx) {
  return state.plan.weeks[weekIdx].days.filter(d => d.checks[pillarId]).length;
}

function pillarScoreInPlan(pillarId) {
  return state.plan.weeks.reduce((acc, w) =>
    acc + w.days.filter(d => d.checks[pillarId]).length, 0
  );
}

function completeDays(weekIdx) {
  return state.plan.weeks[weekIdx].days.filter((_, i) =>
    dayScore(weekIdx, i) === dayMaxScore()
  ).length;
}

function totalCompleteDays() {
  return state.plan.weeks.reduce((acc, _, i) => acc + completeDays(i), 0);
}

function totalDays() {
  return state.plan.weeks.reduce((acc, w) => acc + w.days.length, 0);
}

// ============================================================
// RENDER FUNCTIONS
// ============================================================

function render() {
  renderHeader();
  renderTabs();
  renderContent();
}

function renderHeader() {
  document.getElementById("headerTitle").textContent = state.plan.meta.title;
  document.getElementById("headerSubtitle").textContent = state.plan.meta.subtitle;
}

function renderTabs() {
  const tabs = document.getElementById("tabs");
  const tabsList = [
    ...state.plan.weeks.map((w, i) => ({ id: `week-${i}`, label: w.name, weekIdx: i, type: "week" })),
    { id: "summary", label: "Resumen", type: "summary" },
    { id: "evaluation", label: "Evaluación", type: "evaluation" },
  ];

  tabs.innerHTML = tabsList.map(tab => {
    const isActive = state.activeTab === tab.id;
    return `<button class="tab ${isActive ? "active" : ""}" onclick="switchTab('${tab.id}')">${tab.label}</button>`;
  }).join("");
}

function switchTab(tabId) {
  state.activeTab = tabId;
  if (tabId.startsWith("week-")) {
    state.activeWeek = parseInt(tabId.split("-")[1]);
  }
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderContent() {
  const content = document.getElementById("content");
  if (state.activeTab.startsWith("week-")) {
    content.innerHTML = renderWeekPlan();
    attachWeekListeners();
  } else if (state.activeTab === "summary") {
    content.innerHTML = renderSummary();
    attachSummaryListeners();
  } else if (state.activeTab === "evaluation") {
    content.innerHTML = renderEvaluation();
    attachEvaluationListeners();
  }
}

function renderWeekPlan() {
  const week = state.plan.weeks[state.activeWeek];
  const dayIdx = Math.min(state.activeDay, week.days.length - 1);
  state.activeDay = dayIdx;
  const day = week.days[dayIdx];
  const score = dayScore(state.activeWeek, dayIdx);
  const max = dayMaxScore();
  const pct = max > 0 ? (score / max) * 100 : 0;
  const circumference = 2 * Math.PI * 24;
  const offset = circumference - (pct / 100) * circumference;

  return `
    <section class="plan-section">
      <div class="week-meta">
        <div class="week-roman">${week.name}</div>
        <div class="week-focus" data-editable="weekFocus" data-week-idx="${state.activeWeek}">${week.focus}</div>
      </div>

      <div class="day-strip">
        ${week.days.map((d, i) => {
          const ds = dayScore(state.activeWeek, i);
          const isActive = i === dayIdx;
          const isComplete = ds === max && max > 0;
          return `
            <div class="day-card ${isActive ? "active" : ""} ${isComplete ? "complete" : ""}" data-day-idx="${i}">
              <div class="day-card-roman">${ROMAN[i]}</div>
              <div class="day-card-name">${DAY_NAMES_SHORT[i]}</div>
              ${ds > 0 ? `<div class="day-card-score">${ds}/${max}</div>` : ""}
            </div>
          `;
        }).join("")}
      </div>

      <div class="day-header">
        <div class="day-header-meta">DÍA ${ROMAN[dayIdx]} · ${day.name}</div>
        <input class="day-header-title-input" data-edit="dayFocus" data-day-idx="${dayIdx}" value="${escapeHtml(day.focus)}" />
        <div class="day-progress">
          <div class="progress-ring">
            <svg viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="24" stroke="rgba(201,169,97,0.15)" stroke-width="2" fill="none"/>
              <circle cx="28" cy="28" r="24" stroke="#c9a961" stroke-width="2" fill="none"
                stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="round"/>
            </svg>
            <div class="progress-ring-text">${score}/${max}</div>
          </div>
          <div class="progress-info">
            <div class="progress-stats">${Math.round(pct)}% completado</div>
            <div class="progress-label">${score === max ? "día perfecto" : score === 0 ? "comienza ahora" : "en progreso"}</div>
          </div>
        </div>
      </div>

      ${day.blocks.map((block, blockIdx) => renderBlock(block, blockIdx, dayIdx)).join("")}

      <button class="add-task-btn" onclick="addBlock(${dayIdx})" style="margin-bottom: 16px;">+ Agregar bloque</button>

      <div class="pillars-section">
        <div class="pillars-header">
          <div class="pillars-title">Sellos del día</div>
        </div>
        ${state.plan.pillars.map(pillar => {
          const checked = !!day.checks[pillar.id];
          return `
            <div class="pillar-item" data-pillar-id="${pillar.id}">
              <div class="seal ${checked ? "checked" : ""}">
                <span class="seal-mark">${pillar.icon}</span>
              </div>
              <div class="pillar-content">
                <div class="pillar-name">${escapeHtml(pillar.name)}</div>
              </div>
            </div>
          `;
        }).join("")}
        ${score === max && max > 0 ? `
          <div class="perfect-day">
            <div class="perfect-day-text">"Día perfecto. La cadena sigue."</div>
            <div class="perfect-day-roman">SIGILLUM PERFECTUM</div>
          </div>
        ` : ""}
      </div>
    </section>
  `;
}

function renderBlock(block, blockIdx, dayIdx) {
  const blockKey = `${state.activeWeek}-${dayIdx}-${blockIdx}`;
  const expanded = state.expandedBlocks[blockKey];

  return `
    <div class="block ${expanded ? "expanded" : ""}" data-block-idx="${blockIdx}" data-day-idx="${dayIdx}">
      <div class="block-header" data-block-toggle>
        <div class="block-title-area">
          <div class="block-icon">${ROMAN[blockIdx]}</div>
          <div class="block-text">
            <div class="block-title">${escapeHtml(block.title)}</div>
            <div class="block-time">${escapeHtml(block.time)}</div>
          </div>
        </div>
        <div class="block-arrow">▾</div>
      </div>
      <div class="block-content">
        <div class="block-inner">
          <div class="block-edit-row">
            <input class="block-edit-input" data-edit="blockTitle" data-day-idx="${dayIdx}" data-block-idx="${blockIdx}" placeholder="Título del bloque" value="${escapeHtml(block.title)}" />
            <input class="block-edit-input" data-edit="blockTime" data-day-idx="${dayIdx}" data-block-idx="${blockIdx}" placeholder="Horario" value="${escapeHtml(block.time)}" style="max-width: 140px;" />
          </div>
          ${block.tasks.map((task, taskIdx) => `
            <div class="task">
              <span class="task-marker">${TASK_MARKERS[taskIdx] || (taskIdx + 1) + "."}</span>
              <span class="task-text editable" contenteditable="true" data-edit="task" data-day-idx="${dayIdx}" data-block-idx="${blockIdx}" data-task-idx="${taskIdx}">${escapeHtml(task)}</span>
              <button class="task-delete" data-action="deleteTask" data-day-idx="${dayIdx}" data-block-idx="${blockIdx}" data-task-idx="${taskIdx}">×</button>
            </div>
          `).join("")}
          <button class="add-task-btn" data-action="addTask" data-day-idx="${dayIdx}" data-block-idx="${blockIdx}">+ Agregar tarea</button>
          <div class="block-actions">
            <button class="block-action-btn danger" data-action="deleteBlock" data-day-idx="${dayIdx}" data-block-idx="${blockIdx}">Eliminar bloque</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSummary() {
  const week = state.plan.weeks[state.activeWeek];
  const ws = weekScore(state.activeWeek);
  const wm = weekMaxScore(state.activeWeek);
  const wPct = wm > 0 ? Math.round((ws / wm) * 100) : 0;
  const cd = completeDays(state.activeWeek);

  const reflectionKey = `week-${state.activeWeek}`;
  const refl = state.reflections[reflectionKey] || { good: "", adjust: "", insight: "", focus: "" };

  let alertText, alertColor;
  if (wPct >= 85) { alertText = "Excelente semana. Mantén este ritmo."; alertColor = "var(--sage)"; }
  else if (wPct >= 70) { alertText = "Buen progreso. Ajusta lo que no funcionó."; alertColor = "var(--sage)"; }
  else if (wPct >= 50) { alertText = "Semana difícil. Simplifica y enfócate."; alertColor = "var(--gold)"; }
  else if (wPct > 0) { alertText = "Semana desafiante. Recalibra."; alertColor = "var(--carmine)"; }
  else { alertText = "Aún sin actividad. Comienza marcando un sello."; alertColor = "var(--gold-faded)"; }

  return `
    <section class="plan-section">
      <div class="week-meta">
        <div class="week-roman">Resumen Semanal</div>
        <div class="week-focus">Selecciona la semana a revisar</div>
      </div>

      <div class="day-strip">
        ${state.plan.weeks.map((w, i) => `
          <div class="day-card ${i === state.activeWeek ? "active" : ""}" data-summary-week="${i}">
            <div class="day-card-roman">${ROMAN[i]}</div>
            <div class="day-card-name">SEM</div>
            <div class="day-card-score">${Math.round((weekScore(i)/Math.max(weekMaxScore(i),1))*100)}%</div>
          </div>
        `).join("")}
      </div>

      <div class="evaluation" style="border-color: ${alertColor};">
        <div class="evaluation-emblem" style="color: ${alertColor};">❦</div>
        <div class="evaluation-title">${week.name} — ${escapeHtml(week.focus)}</div>
        <div class="evaluation-text" style="color: ${alertColor};">${alertText}</div>
      </div>

      <div class="stats-grid">
        <div class="stat">
          <div class="stat-label">Acciones</div>
          <div class="stat-value">${ws}</div>
          <div class="stat-unit">de ${wm}</div>
        </div>
        <div class="stat">
          <div class="stat-label">Tasa</div>
          <div class="stat-value">${wPct}<span style="font-size: 18px;">%</span></div>
          <div class="stat-unit">de éxito</div>
        </div>
        <div class="stat">
          <div class="stat-label">Días Plenos</div>
          <div class="stat-value">${cd}</div>
          <div class="stat-unit">de ${week.days.length}</div>
        </div>
        <div class="stat">
          <div class="stat-label">Promedio</div>
          <div class="stat-value">${(ws / Math.max(week.days.length, 1)).toFixed(1)}</div>
          <div class="stat-unit">por día</div>
        </div>
      </div>

      <div class="summary-chart">
        <div class="chart-title">Distribución diaria</div>
        <div class="week-bars">
          ${week.days.map((d, i) => {
            const ds = dayScore(state.activeWeek, i);
            const dm = dayMaxScore();
            const h = dm > 0 ? (ds / dm) * 100 : 0;
            return `
              <div class="week-bar-container">
                <span class="week-bar-value">${ds}</span>
                <div class="week-bar" style="height: ${h}%"></div>
                <span class="week-bar-label">${DAY_NAMES_SHORT[i].substring(0, 1)}</span>
              </div>
            `;
          }).join("")}
        </div>
      </div>

      <div class="summary-chart">
        <div class="chart-title">Pilares</div>
        ${state.plan.pillars.map(p => {
          const ps = pillarScoreInWeek(p.id, state.activeWeek);
          const pct = (ps / week.days.length) * 100;
          return `
            <div class="pillar-progress">
              <div class="pillar-progress-row">
                <span class="pillar-progress-name">${escapeHtml(p.name)}</span>
                <span class="pillar-progress-value">${ps}/${week.days.length}</span>
              </div>
              <div class="pillar-progress-bar">
                <div class="pillar-progress-fill" style="width: ${pct}%"></div>
              </div>
            </div>
          `;
        }).join("")}
      </div>

      <div class="reflection-card">
        <div class="reflection-label">Reflexión I</div>
        <div class="reflection-question">¿Qué hiciste bien esta semana?</div>
        <textarea class="reflection-textarea" data-reflection="good" data-week="${state.activeWeek}" placeholder="Específico: acciones concretas que lograste mantener...">${escapeHtml(refl.good)}</textarea>
      </div>

      <div class="reflection-card">
        <div class="reflection-label">Reflexión II</div>
        <div class="reflection-question">¿Qué necesitas ajustar?</div>
        <textarea class="reflection-textarea" data-reflection="adjust" data-week="${state.activeWeek}" placeholder="Sin culpa. Honestidad sobre dónde no cumpliste y por qué...">${escapeHtml(refl.adjust)}</textarea>
      </div>

      <div class="reflection-card">
        <div class="reflection-label">Reflexión III</div>
        <div class="reflection-question">¿Cuál fue tu insight de la semana?</div>
        <textarea class="reflection-textarea" data-reflection="insight" data-week="${state.activeWeek}" placeholder="¿Qué aprendiste sobre ti?">${escapeHtml(refl.insight)}</textarea>
      </div>

      <div class="reflection-card">
        <div class="reflection-label">Reflexión IV</div>
        <div class="reflection-question">¿Cuál es tu enfoque para la próxima semana?</div>
        <textarea class="reflection-textarea" data-reflection="focus" data-week="${state.activeWeek}" placeholder="Una única cosa a mejorar...">${escapeHtml(refl.focus)}</textarea>
      </div>
    </section>
  `;
}

function renderEvaluation() {
  const ps = planScore();
  const pm = planMaxScore();
  const pct = pm > 0 ? Math.round((ps / pm) * 100) : 0;
  const cd = totalCompleteDays();
  const td = totalDays();

  let evType, evTitle, evText, evRec, evColor;
  if (ps === 0) {
    evType = "vacio";
    evTitle = "El camino aún no comienza";
    evText = "Marca al menos un sello para comenzar a recibir tu evaluación personalizada.";
    evRec = "Comienza con la primera acción del primer día.";
    evColor = "var(--gold-faded)";
  } else if (pct >= 85) {
    evType = "excepcional";
    evTitle = "Desempeño Excepcional";
    evText = `Has logrado una tasa de éxito del <em>${pct}%</em>. Tu disciplina, consistencia y sistema están funcionando a la perfección. Esto te posiciona en el grupo de personas que <em>transforman</em> sus vidas.`;
    evRec = "Mantén el sistema sin cambios. Amplía a círculos de mayor exigencia.";
    evColor = "var(--sage)";
  } else if (pct >= 70) {
    evType = "solido";
    evTitle = "Desempeño Sólido";
    evText = `Completaste <em>${ps} de ${pm}</em> acciones (<em>${pct}%</em>). Estás en la zona de progreso consistente. Consolidaste hábitos en al menos algunos pilares.`;
    evRec = "Elige UNA cosa a mejorar para el próximo ciclo. No intentes arreglarlo todo a la vez.";
    evColor = "var(--gold)";
  } else if (pct >= 50) {
    evType = "irregular";
    evTitle = "Desempeño Irregular";
    evText = `Has hecho <em>${ps} acciones (${pct}%)</em>. Hay potencial, pero también resistencia clara. Algunos días funcionas perfectamente, otros faltas completamente.`;
    evRec = "SIMPLIFICA. Reduce a 2 pilares principales. Haz bien poco, antes que mal mucho.";
    evColor = "var(--gold)";
  } else {
    evType = "desafiante";
    evTitle = "Desempeño Desafiante";
    evText = `<em>${ps} acciones</em> completadas. Esto indica que el sistema actual no se alinea con tu contexto o capacidad. Necesitamos recalibrar.`;
    evRec = "Reduce a 1 sólo pilar y 1 sólo bloque diario. Construir desde ahí.";
    evColor = "var(--carmine)";
  }

  return `
    <section class="plan-section">
      <div class="week-meta">
        <div class="week-roman">Evaluación Consolidada</div>
        <div class="week-focus">${escapeHtml(state.plan.meta.title)}</div>
      </div>

      <div class="evaluation" style="border-color: ${evColor};">
        <div class="evaluation-emblem">❦</div>
        <div class="evaluation-title">${evTitle}</div>
        <div class="evaluation-text">${evText}</div>
        ${ps > 0 ? `<div class="evaluation-recommendation">→ ${evRec}</div>` : ""}
      </div>

      <div class="stats-grid">
        <div class="stat">
          <div class="stat-label">Score Total</div>
          <div class="stat-value">${ps}</div>
          <div class="stat-unit">de ${pm}</div>
        </div>
        <div class="stat">
          <div class="stat-label">Tasa Global</div>
          <div class="stat-value">${pct}<span style="font-size: 18px;">%</span></div>
          <div class="stat-unit">de éxito</div>
        </div>
        <div class="stat">
          <div class="stat-label">Días Plenos</div>
          <div class="stat-value">${cd}</div>
          <div class="stat-unit">de ${td}</div>
        </div>
        <div class="stat">
          <div class="stat-label">Semanas</div>
          <div class="stat-value">${state.plan.weeks.length}</div>
          <div class="stat-unit">en ciclo</div>
        </div>
      </div>

      <div class="summary-chart">
        <div class="chart-title">Progresión semanal</div>
        <div class="week-bars">
          ${state.plan.weeks.map((w, i) => {
            const ws = weekScore(i);
            const wm = weekMaxScore(i);
            const h = wm > 0 ? (ws / wm) * 100 : 0;
            return `
              <div class="week-bar-container">
                <span class="week-bar-value">${Math.round(h)}%</span>
                <div class="week-bar" style="height: ${h}%"></div>
                <span class="week-bar-label">${ROMAN[i]}</span>
              </div>
            `;
          }).join("")}
        </div>
      </div>

      <div class="summary-chart">
        <div class="chart-title">Pilares en el ciclo completo</div>
        ${state.plan.pillars.map(p => {
          const ps = pillarScoreInPlan(p.id);
          const pct = (ps / td) * 100;
          return `
            <div class="pillar-progress">
              <div class="pillar-progress-row">
                <span class="pillar-progress-name">${escapeHtml(p.name)}</span>
                <span class="pillar-progress-value">${ps}/${td}</span>
              </div>
              <div class="pillar-progress-bar">
                <div class="pillar-progress-fill" style="width: ${pct}%"></div>
              </div>
            </div>
          `;
        }).join("")}
      </div>

      <div class="reflection-card">
        <div class="reflection-label">Cierre del ciclo</div>
        <div class="reflection-question">¿Qué transformaciones observaste en ti?</div>
        <textarea class="reflection-textarea" data-reflection="planSummary" placeholder="Cambios en hábitos, mentalidad, disciplina, imagen...">${escapeHtml(state.reflections.planSummary || "")}</textarea>
      </div>

      <div class="reflection-card">
        <div class="reflection-label">Próximo ciclo</div>
        <div class="reflection-question">¿Qué llevarás al próximo mes?</div>
        <textarea class="reflection-textarea" data-reflection="planNext" placeholder="3 cosas a mantener, 2 a mejorar, 1 pilar a priorizar...">${escapeHtml(state.reflections.planNext || "")}</textarea>
      </div>
    </section>
  `;
}

// ============================================================
// EVENT LISTENERS
// ============================================================

function attachWeekListeners() {
  // Day card clicks
  document.querySelectorAll("[data-day-idx]").forEach(el => {
    if (el.classList.contains("day-card")) {
      el.addEventListener("click", () => {
        state.activeDay = parseInt(el.dataset.dayIdx);
        saveState();
        render();
      });
    }
  });

  // Block toggles
  document.querySelectorAll("[data-block-toggle]").forEach(el => {
    el.addEventListener("click", () => {
      const block = el.closest(".block");
      const dayIdx = parseInt(block.dataset.dayIdx);
      const blockIdx = parseInt(block.dataset.blockIdx);
      const key = `${state.activeWeek}-${dayIdx}-${blockIdx}`;
      state.expandedBlocks[key] = !state.expandedBlocks[key];
      block.classList.toggle("expanded");
      saveState();
    });
  });

  // Pillar checks
  document.querySelectorAll("[data-pillar-id]").forEach(el => {
    el.addEventListener("click", () => {
      const pillarId = el.dataset.pillarId;
      const day = state.plan.weeks[state.activeWeek].days[state.activeDay];
      day.checks[pillarId] = !day.checks[pillarId];
      saveState();
      // Haptic feedback
      if (navigator.vibrate) navigator.vibrate(10);
      render();
    });
  });

  // Editable fields - debounced save
  document.querySelectorAll("[data-edit]").forEach(el => {
    const handler = debounce(() => {
      const type = el.dataset.edit;
      const value = el.tagName === "INPUT" ? el.value : el.textContent;

      if (type === "weekFocus") {
        state.plan.weeks[state.activeWeek].focus = value;
      } else if (type === "dayFocus") {
        state.plan.weeks[state.activeWeek].days[parseInt(el.dataset.dayIdx)].focus = value;
      } else if (type === "blockTitle") {
        state.plan.weeks[state.activeWeek].days[parseInt(el.dataset.dayIdx)].blocks[parseInt(el.dataset.blockIdx)].title = value;
      } else if (type === "blockTime") {
        state.plan.weeks[state.activeWeek].days[parseInt(el.dataset.dayIdx)].blocks[parseInt(el.dataset.blockIdx)].time = value;
      } else if (type === "task") {
        state.plan.weeks[state.activeWeek].days[parseInt(el.dataset.dayIdx)].blocks[parseInt(el.dataset.blockIdx)].tasks[parseInt(el.dataset.taskIdx)] = value;
      }
      saveState();
    }, 500);

    if (el.tagName === "INPUT") {
      el.addEventListener("input", handler);
    } else {
      el.addEventListener("input", handler);
      el.addEventListener("blur", handler);
    }
  });

  // Action buttons
  document.querySelectorAll("[data-action]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const action = el.dataset.action;
      const dayIdx = parseInt(el.dataset.dayIdx);
      const blockIdx = parseInt(el.dataset.blockIdx);

      if (action === "addTask") {
        state.plan.weeks[state.activeWeek].days[dayIdx].blocks[blockIdx].tasks.push("Nueva tarea");
        const key = `${state.activeWeek}-${dayIdx}-${blockIdx}`;
        state.expandedBlocks[key] = true;
        saveState();
        render();
      } else if (action === "deleteTask") {
        const taskIdx = parseInt(el.dataset.taskIdx);
        if (confirm("¿Eliminar esta tarea?")) {
          state.plan.weeks[state.activeWeek].days[dayIdx].blocks[blockIdx].tasks.splice(taskIdx, 1);
          saveState();
          render();
        }
      } else if (action === "deleteBlock") {
        if (confirm("¿Eliminar todo el bloque?")) {
          state.plan.weeks[state.activeWeek].days[dayIdx].blocks.splice(blockIdx, 1);
          saveState();
          render();
        }
      }
    });
  });
}

function attachSummaryListeners() {
  document.querySelectorAll("[data-summary-week]").forEach(el => {
    el.addEventListener("click", () => {
      state.activeWeek = parseInt(el.dataset.summaryWeek);
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-reflection]").forEach(el => {
    const handler = debounce(() => {
      const type = el.dataset.reflection;
      const weekIdx = el.dataset.week;
      const key = weekIdx !== undefined ? `week-${weekIdx}` : null;

      if (key) {
        if (!state.reflections[key]) state.reflections[key] = {};
        state.reflections[key][type] = el.value;
      }
      saveState();
    }, 500);
    el.addEventListener("input", handler);
  });
}

function attachEvaluationListeners() {
  document.querySelectorAll("[data-reflection]").forEach(el => {
    const handler = debounce(() => {
      const type = el.dataset.reflection;
      state.reflections[type] = el.value;
      saveState();
    }, 500);
    el.addEventListener("input", handler);
  });
}

function addBlock(dayIdx) {
  state.plan.weeks[state.activeWeek].days[dayIdx].blocks.push({
    id: uid(),
    title: "Nuevo bloque",
    time: "00:00 – 00:00",
    tasks: ["Nueva tarea"],
  });
  const newBlockIdx = state.plan.weeks[state.activeWeek].days[dayIdx].blocks.length - 1;
  const key = `${state.activeWeek}-${dayIdx}-${newBlockIdx}`;
  state.expandedBlocks[key] = true;
  saveState();
  render();
}

// ============================================================
// SETTINGS / MODAL
// ============================================================

function openModal(id) {
  document.getElementById(id).classList.add("open");
  if (id === "settingsModal") renderPillarsEditor();
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}

function renderPillarsEditor() {
  const container = document.getElementById("pillarsEditor");
  container.innerHTML = state.plan.pillars.map((p, i) => `
    <div class="pillar-edit-item">
      <input class="pillar-edit-icon" data-pillar-edit="icon" data-pillar-idx="${i}" maxlength="3" value="${escapeHtml(p.icon)}" />
      <input class="pillar-edit-name" data-pillar-edit="name" data-pillar-idx="${i}" value="${escapeHtml(p.name)}" placeholder="Nombre del pilar" />
      <button class="pillar-edit-delete" data-pillar-delete="${i}">×</button>
    </div>
  `).join("");

  container.querySelectorAll("[data-pillar-edit]").forEach(el => {
    el.addEventListener("input", debounce(() => {
      const idx = parseInt(el.dataset.pillarIdx);
      const type = el.dataset.pillarEdit;
      state.plan.pillars[idx][type] = el.value;
      saveState();
    }, 300));
  });

  container.querySelectorAll("[data-pillar-delete]").forEach(el => {
    el.addEventListener("click", () => {
      const idx = parseInt(el.dataset.pillarDelete);
      if (state.plan.pillars.length <= 1) {
        showToast("Debe haber al menos un pilar");
        return;
      }
      if (confirm(`¿Eliminar el pilar "${state.plan.pillars[idx].name}"?`)) {
        const pillarId = state.plan.pillars[idx].id;
        // Remove checks for this pillar
        state.plan.weeks.forEach(w => {
          w.days.forEach(d => {
            delete d.checks[pillarId];
          });
        });
        state.plan.pillars.splice(idx, 1);
        saveState();
        renderPillarsEditor();
        render();
      }
    });
  });
}

function addPillar() {
  state.plan.pillars.push({
    id: uid(),
    name: "Nuevo Pilar",
    icon: ROMAN[state.plan.pillars.length] || "?",
  });
  saveState();
  renderPillarsEditor();
  render();
}

function exportData() {
  const data = JSON.stringify(state, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `strategema-${new Date().toISOString().split("T")[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Plan exportado");
}

function importData() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.plan && data.plan.weeks && data.plan.pillars) {
          state = { ...state, ...data };
          saveState();
          render();
          renderPillarsEditor();
          showToast("Plan importado");
        } else {
          showToast("Archivo inválido");
        }
      } catch (err) {
        showToast("Error al leer archivo");
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

function resetAll() {
  if (!confirm("¿Resetear TODO el plan? Se perderán todos los checks y reflexiones. Esta acción no se puede deshacer.")) return;
  if (!confirm("¿Estás absolutamente seguro? Esta es la última confirmación.")) return;
  localStorage.removeItem("strategema_state");
  state = {
    plan: JSON.parse(JSON.stringify(DEFAULT_PLAN)),
    activeWeek: 0,
    activeDay: 0,
    activeTab: "week-0",
    expandedBlocks: {},
    reflections: {},
    splashShown: true,
  };
  saveState();
  render();
  renderPillarsEditor();
  showToast("Plan reseteado");
}

// ============================================================
// HELPERS
// ============================================================

function escapeHtml(text) {
  if (text == null) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function debounce(fn, ms) {
  let t;
  return function(...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), ms);
  };
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}

function dismissSplash() {
  const splash = document.getElementById("splash");
  splash.classList.add("hidden");
  state.splashShown = true;
  saveState();
  setTimeout(() => splash.style.display = "none", 600);
}

// ============================================================
// INIT
// ============================================================

window.addEventListener("DOMContentLoaded", () => {
  loadState();

  if (state.splashShown) {
    document.getElementById("splash").style.display = "none";
  }

  // Default to first week if no tab selected
  if (!state.activeTab || (!state.activeTab.startsWith("week-") && state.activeTab !== "summary" && state.activeTab !== "evaluation")) {
    state.activeTab = "week-0";
  }

  render();
});

// Make functions globally available for inline onclick
window.switchTab = switchTab;
window.openModal = openModal;
window.closeModal = closeModal;
window.dismissSplash = dismissSplash;
window.addBlock = addBlock;
window.addPillar = addPillar;
window.exportData = exportData;
window.importData = importData;
window.resetAll = resetAll;
