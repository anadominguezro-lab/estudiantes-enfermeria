window.BLOQUES = window.BLOQUES || [];

window.BLOQUES.push({
  id: "centro",
  tapon: "celeste",
  color: "#2E7FC2",
  titulo: "Cómo funciona el centro",
  sub: "Quién es quién, qué es cada tipo de cita y qué se espera de ti.",
  semana: "Semana 1",
  temas: [

  { id:"equipo", titulo:"El equipo y tu sitio dentro de él", min:6, html:`
<p>Un centro de salud no es un hospital pequeño. Es una unidad con población asignada, continuidad en el tiempo y una lógica propia: aquí no ves un episodio, ves una vida.</p>

<h3>El Equipo de Atención Primaria (EAP)</h3>
<ul>
<li><strong>Medicina de familia y comunitaria</strong> — población de 14 años en adelante, con cupo asignado.</li>
<li><strong>Pediatría</strong> — hasta los 14 años (el límite puede variar; confírmalo en el centro).</li>
<li><strong>Enfermería de familia</strong> — cupo propio, emparejado con uno o varios cupos médicos. Es la figura con la que rotas.</li>
<li><strong>Enfermería pediátrica</strong> — programa del niño sano, vacunas, educación a familias.</li>
<li><strong>Matrona</strong> — embarazo, puerperio, cribado de cérvix, anticoncepción, educación maternal.</li>
<li><strong>TCAE y personal de limpieza</strong> — esterilización, reposición, circuitos de material y residuos.</li>
<li><strong>Unidad administrativa</strong> — citación, tarjeta sanitaria, derivaciones, filtro telefónico. Es la puerta de entrada real del centro.</li>
<li><strong>Trabajo social</strong> — recursos, dependencia, situaciones de vulnerabilidad.</li>
<li><strong>Fisioterapia, salud bucodental, salud mental</strong> — según cartera y ubicación.</li>
</ul>

<div class="callout truco"><span class="lbl">Míralo así</span>
En tu primera semana, dedica diez minutos a hablar con la unidad administrativa. Entender cómo se cita y cómo se filtra una llamada explica el 80% de por qué la consulta va como va.</div>

<h3>Qué se espera de ti</h3>
<ul>
<li>Presentarte al paciente por tu nombre y como estudiante de enfermería, y pedir su permiso. Puede decir que no: es su derecho y no es un rechazo hacia ti.</li>
<li>Preguntar antes de hacer. Ninguna técnica se realiza sin supervisión de tu tutora.</li>
<li>Registrar lo que hagas, siempre validado por la profesional responsable.</li>
<li>Traer dudas. La pregunta que te da vergüenza hacer suele ser la buena.</li>
</ul>

<h3>Qué NO se espera de ti</h3>
<ul>
<li>Que sepas todo el primer día. Nadie lo espera.</li>
<li>Que realices ninguna técnica sola, ni que tomes decisiones clínicas o des indicaciones por tu cuenta.</li>
<li>Que accedas a historias clínicas de personas que no estás atendiendo. Esto es especialmente serio: hablamos de ello en el tema de confidencialidad.</li>
</ul>
` },

  { id:"actos", titulo:"Tipos de visita y de acto asistencial", min:7, html:`
<p>Toda la actividad del centro se organiza en tipos de cita. Saber distinguirlos te ayuda a entender la agenda, a preparar la consulta y a registrar bien.</p>

<table>
<tr><th>Tipo</th><th>Qué es</th><th>Qué prepara enfermería</th></tr>
<tr><td><strong>A demanda</strong></td><td>El paciente pide cita por un motivo agudo o puntual.</td><td>Valoración del motivo, resolución si es competencia enfermera, derivación si no.</td></tr>
<tr><td><strong>Programada / concertada</strong></td><td>Cita planificada con objetivo definido: control de crónico, revisión, educación.</td><td>Revisar la historia antes, tener claro qué se controla hoy y qué se pide.</td></tr>
<tr><td><strong>Técnica</strong></td><td>Procedimiento concreto: cura, inyectable, ECG, retirada de puntos, sondaje.</td><td>Material preparado, consentimiento verbal, registro de la técnica.</td></tr>
<tr><td><strong>No presencial</strong></td><td>Telefónica o telemática: resultados, seguimiento, dudas.</td><td>Identificar al interlocutor, ser muy explícita, registrar como no presencial.</td></tr>
<tr><td><strong>Domicilio</strong></td><td>Atención en casa del paciente que no puede desplazarse.</td><td>Ver tema específico de avisos domiciliarios.</td></tr>
<tr><td><strong>Urgente / no demorable</strong></td><td>Se atiende fuera de agenda por gravedad o riesgo.</td><td>Valoración inmediata, aviso a medicina, ver bloque de urgencias.</td></tr>
<tr><td><strong>Comunitaria / grupal</strong></td><td>Educación para la salud en grupo, actividad con el barrio, coordinación con recursos.</td><td>Material, convocatoria, registro de la actividad.</td></tr>
</table>

<h3>La agenda: cómo leerla</h3>
<p>Una agenda de enfermería no es una lista homogénea. Tiene huecos de distinta duración según lo que se hace en ellos: no dura lo mismo una glucemia capilar que una primera valoración de un paciente crónico complejo. Cuando veas la agenda del día, fíjate en tres cosas:</p>
<ol>
<li><strong>Qué tipo de hueco es cada cita</strong> y por tanto cuánto tiempo real hay.</li>
<li><strong>Cuántos huecos quedan libres</strong> para lo que entre a lo largo de la mañana, que siempre entra.</li>
<li><strong>Si hay domicilios</strong>, porque condicionan toda la organización del día.</li>
</ol>

<h3>Cartera de Servicios</h3>
<p>Lo que se hace en el centro no es improvisado: está definido en la <strong>Cartera de Servicios</strong> y en el Contrato Programa del SERMAS, que describen qué servicios se ofrecen, a quién y con qué criterios de calidad. Buena parte de lo que registramos alimenta indicadores de esos servicios. Pídele a tu tutora que te enseñe uno concreto —por ejemplo el de atención a la persona con diabetes— y verás la lógica entera de golpe.</p>

<div class="callout verifica"><span class="lbl">Comprueba en el centro</span>
Los nombres exactos de los tipos de cita y su codificación en la historia clínica electrónica cambian con las versiones del programa. Pide que te enseñen la pantalla real de citación el primer día.</div>
` },

  { id:"registro", titulo:"Registrar y comunicar", min:5, html:`
<p>En Atención Primaria, lo que no está registrado no existe: ni para la continuidad asistencial, ni para el siguiente profesional, ni para la evaluación del servicio.</p>

<h3>Un registro útil</h3>
<ul>
<li><strong>Objetivo y concreto.</strong> "Cura de úlcera maleolar interna izquierda, 3x2 cm, lecho con 70% granulación, exudado moderado" dice algo. "Se realiza cura" no dice nada.</li>
<li><strong>En el momento</strong>, o lo antes posible. La memoria a las cuatro horas inventa.</li>
<li><strong>Sin juicios de valor.</strong> "No sigue las indicaciones" es una valoración; "refiere que toma la medicación 3 días por semana" es un dato.</li>
<li><strong>Con lo acordado con el paciente</strong>, no solo lo que tú hiciste.</li>
</ul>

<h3>Traspaso entre profesionales</h3>
<p>Cuando pases información a otra compañera —o a medicina—, hazlo estructurado. Una forma sencilla y muy extendida es identificar: quién es el paciente, qué le pasa ahora, qué antecedentes importan y qué propones o pides. Estructurar el traspaso reduce errores; es una de las medidas clásicas de seguridad del paciente.</p>

<div class="callout pregunta"><span class="lbl">Para pensar</span>
Durante una mañana, apunta cuántas veces se transmite información clínica de forma verbal y sin registro. Coméntalo luego con tu tutora: ahí suelen estar los puntos frágiles de un equipo.</div>
` },

  { id:"confi", titulo:"Confidencialidad y seguridad del paciente", min:5, html:`
<div class="callout alerta"><span class="lbl">Lo más importante de esta guía</span>
Acceder a la historia clínica de una persona a la que no estás atendiendo es una vulneración grave, aunque sea tu vecina, tu prima o tú misma. Los accesos quedan auditados con tu identificador. Tiene consecuencias disciplinarias y legales reales.</div>

<h3>Reglas que no se negocian</h3>
<ul>
<li>No se comenta ningún caso fuera del ámbito asistencial. Ni en el ascensor, ni en el bar de al lado, ni en el grupo de clase.</li>
<li>No se fotografía la pantalla, ni una historia, ni una herida con el móvil personal. Si necesitas una imagen para un trabajo, se hace por los cauces del centro y con consentimiento.</li>
<li>Nada de casos en redes sociales, aunque estén "anonimizados". Un detalle basta para identificar a alguien en un barrio.</li>
<li>Cierra sesión al levantarte del ordenador.</li>
<li>Las claves son personales e intransferibles. Nunca uses las de tu tutora.</li>
</ul>

<h3>Seguridad del paciente en la consulta</h3>
<ul>
<li><strong>Identificación inequívoca</strong> antes de cualquier técnica, extracción o administración: nombre y apellidos y fecha de nacimiento, preguntados en abierto ("¿me dice su nombre completo?"), no confirmados ("¿usted es María?").</li>
<li><strong>Los cinco correctos</strong> en administración de medicación: paciente, fármaco, dosis, vía y hora. Añade dos más que en la práctica salvan: registro y caducidad.</li>
<li><strong>Alergias:</strong> se preguntan siempre, aunque estén en la historia.</li>
<li><strong>Higiene de manos</strong> en los cinco momentos de la OMS. Es la medida aislada más eficaz para prevenir infección asociada a la asistencia.</li>
<li><strong>Si detectas un error o algo que estuvo a punto de pasar, dilo.</strong> Un centro que nota los casi-errores es un centro seguro. Esto no va de culpables.</li>
</ul>
` },
  { id:"contrato", titulo:"El Contrato Programa: qué se nos pide", min:7, html:`
<p>Cada año, la Gerencia Asistencial de Atención Primaria firma con cada centro un <strong>Contrato Programa de Centro (CPC)</strong>: un conjunto de objetivos e indicadores con puntuación, que miden lo que el centro hace bien y lo que tiene que mejorar. Además, cada profesional tiene un <strong>contrato programa individual</strong> con criterios propios. No es papeleo: explica por qué se registran ciertas cosas, por qué se hacen ciertas visitas y a qué se da prioridad.</p>

<h3>Cómo está construido</h3>
<p>Los objetivos se organizan en cuatro perspectivas: <strong>procesos asistenciales</strong> (la mayor parte de los puntos), <strong>orientación a las personas</strong>, <strong>innovación y mejora organizativa</strong> y <strong>sostenibilidad</strong>. Muchos indicadores se calculan automáticamente a partir de lo registrado en la historia clínica, de modo que un cuidado bien hecho pero mal registrado no existe para el contrato.</p>

<h3>Lo que toca directamente a enfermería en 2026</h3>
<p>Resumen de los indicadores del CPC 2026 y del contrato individual de enfermería de familia que verás reflejados en la consulta. Las cifras son las del documento oficial de este año; cambian anualmente.</p>

<div class="tbl-scroll"><table>
<tr><th>Ámbito</th><th>Qué se mide</th><th>Cómo lo verás en la consulta</th></tr>
<tr><td><strong>Cartera de Servicios</strong></td><td>Índice sintético de cumplimiento de los 40 servicios de la CSE, y en especial dos priorizados: <strong>404</strong> (detección de riesgo cardiovascular en el adulto) y <strong>420</strong> (persona mayor con fragilidad o deterioro funcional).</td><td>Registro sistemático de cobertura y criterios de buena atención en cada servicio.</td></tr>
<tr><td><strong>Hipertensión</strong></td><td>Personas con HTA bien controlada, ajustado por edad. En 2026 se actualizan las cifras: <strong>PAS &lt;130 y PAD &lt;80 en menores de 80 años; PAS &lt;140 y PAD &lt;80 a partir de 80 años</strong>. En cardiopatía isquémica o ictus, &lt;130/80.</td><td>Toma correcta de TA y registro de la última cifra. Ver bloque de técnicas.</td></tr>
<tr><td><strong>Cribado de EPOC</strong></td><td>Espirometría al menos cada 4 años en fumadores de 35 años o más con más de 10 paquetes/año y síntomas respiratorios.</td><td>Preguntar por tabaco y síntomas; citar para espirometría.</td></tr>
<tr><td><strong>Cribado de enfermedad renal crónica</strong></td><td>Filtrado glomerular y cociente albúmina/creatinina anuales en HTA, diabetes, obesidad, cardiopatía isquémica, ictus o insuficiencia cardiaca; cada 2 años a partir de 60 años.</td><td>Comprobar en la petición de analítica que van las dos determinaciones.</td></tr>
<tr><td><strong>Persona mayor y domicilio</strong></td><td>Pacientes con nivel de intervención alto (NIA) o Barthel ≤60: <strong>plan de cuidados definido</strong> y al menos <strong>una visita domiciliaria de enfermería al año</strong> de promedio (actos DOM en agenda).</td><td>Valoración con Barthel, plan de cuidados activo, visita domiciliaria registrada como tal.</td></tr>
<tr><td><strong>Continuidad al alta</strong></td><td>Altas hospitalarias por insuficiencia cardiaca o EPOC: seguimiento telefónico <strong>antes de 72 horas</strong> (con registro en el protocolo de seguimiento al alta) y <strong>visita presencial entre el 5.º y el 15.º día</strong>, en el centro o en domicilio. Seguimiento telefónico también tras el alta de pacientes NIA.</td><td>Revisión diaria de los informes de alta que llegan y llamada temprana.</td></tr>
<tr><td><strong>Vacunación</strong></td><td>Personas que cumplen 70 años bien vacunadas: neumococo, herpes zóster (2 dosis), Td o dTpa desde los 60 y gripe. Niños de 4 años con 2 dosis de SRP y 2 de varicela registradas.</td><td>Captación oportunista y registro completo de cada dosis.</td></tr>
<tr><td><strong>Lactancia materna</strong></td><td>Registro de lactancia materna en mujeres atendidas en el puerperio.</td><td>Preguntar y registrar en la visita puerperal y en las primeras del niño sano.</td></tr>
<tr><td><strong>Cribado de colon</strong></td><td>Personas con sangre oculta positiva en Prevecolon que no tienen colonoscopia pedida ni exclusión registrada.</td><td>Seguimiento activo de los positivos: que nadie se quede sin la siguiente prueba.</td></tr>
<tr><td><strong>Gestión de la demanda</strong></td><td>Uso de los protocolos de Gestión de la Demanda de Enfermería en los episodios que lo permiten.</td><td>Resolver en consulta de enfermería lo que es competencia enfermera, con el protocolo registrado.</td></tr>
<tr><td><strong>Salud comunitaria</strong></td><td>Talleres grupales del proyecto "Ejercicio físico para la prevención de fragilidad y caídas en personas mayores", talleres de educación para la salud de la biblioteca EpSalud e intervenciones comunitarias, todo registrado en la aplicación EpSalud.</td><td>Ver bloque de comunidad. Si hay un taller durante tu rotación, participa.</td></tr>
<tr><td><strong>Uso racional</strong></td><td>Revisión anual de pacientes con productos dietoterápicos (criterios GLIM, adherencia); tiras de glucemia ajustadas en pacientes con sensor (orientativamente 50 al trimestre).</td><td>Educación y revisión en la consulta de crónicos.</td></tr>
</table></div>

<h3>Y en el contrato individual de enfermería</h3>
<p>Además de los indicadores asistenciales anteriores, el contrato individual valora la <strong>formación en líneas estratégicas</strong>, la <strong>participación en actividades comunitarias</strong>, la participación en proyectos y comisiones del centro, las publicaciones e investigación y la <strong>participación en la formación de grado o de especialistas</strong>. Es decir: tu rotación también forma parte de lo que se evalúa a tu tutora. Lo que aprendes aquí cuenta para las dos.</p>

<div class="callout pregunta"><span class="lbl">Para pensar</span>
Elige un indicador de la tabla y sigue su rastro durante una mañana: ¿en qué momento de la consulta se genera el dato? ¿Quién lo registra? ¿Qué pasa si no se registra? Es la forma más rápida de entender cómo un cuidado se convierte en un resultado medible, y también sus límites.</div>

<div class="callout verifica"><span class="lbl">Vigencia</span>
Este resumen corresponde al Contrato Programa de Centro 2026 (versión de junio de 2026) y a los criterios individuales de enfermería de familia del mismo año. Se actualiza cada año; si lees esto en otro ejercicio, pide la versión vigente.</div>
` }

  ]
});

window.BLOQUES.push({
  id: "extracciones",
  tapon: "lila",
  color: "#7B5EA7",
  titulo: "La sala de extracciones",
  sub: "Preanalítica, técnica, orden de tubos e incidencias.",
  semana: "Semanas 1-2",
  temas: [

  { id:"pre", titulo:"Fase preanalítica: donde se pierden las muestras", min:6, html:`
<p>La mayoría de los errores de laboratorio no ocurren en el laboratorio: ocurren antes, en la sala de extracciones. Esa fase se llama <em>preanalítica</em> y es tuya.</p>

<h3>Antes de pinchar</h3>
<ol>
<li><strong>Identificación inequívoca.</strong> Nombre completo y fecha de nacimiento preguntados en abierto. Comprueba que coincide con la petición y con las etiquetas.</li>
<li><strong>Comprueba las condiciones de la petición.</strong> Ayuno, hora del día, si debía suspender algo, si hay pruebas que exigen preparación especial.</li>
<li><strong>Pregunta por antecedentes relevantes:</strong> mareos previos con las extracciones, mastectomía o linfedema, fístula arteriovenosa, brazo con vía o con hemiplejía, tratamiento anticoagulante.</li>
<li><strong>Etiqueta correctamente.</strong> El criterio de cuándo etiquetar (antes o después de llenar) depende del protocolo del centro: pregúntalo. Lo que nunca se hace es etiquetar fuera de la presencia del paciente.</li>
</ol>

<h4>Ayuno</h4>
<p>El ayuno habitual para una analítica de rutina suele indicarse entre 8 y 12 horas, permitiendo agua. Afecta sobre todo a glucosa y perfil lipídico, en especial a los triglicéridos. No todas las determinaciones lo requieren.</p>

<div class="callout verifica"><span class="lbl">Comprueba</span>
Las condiciones exactas de ayuno, la preparación de pruebas especiales y los códigos de color de los tubos dependen del laboratorio de referencia y del proveedor de material. Confirma siempre con el protocolo del centro antes de dar una instrucción a un paciente.</div>

<h3>Explicar bien reduce complicaciones</h3>
<p>Una persona que sabe qué le vas a hacer, cuánto dura y qué puede notar, se marea menos y se mueve menos. Dile qué vas a hacer, pídele que no cierre el puño repetidamente y avisa antes de puncionar. No prometas que no duele.</p>
` },

  { id:"tecnica", titulo:"Técnica de venopunción paso a paso", min:8, html:`
<h3>Material</h3>
<ul>
<li>Guantes, compresor, antiséptico (clorhexidina alcohólica o alcohol 70%), gasas, apósito.</li>
<li>Sistema de extracción con dispositivo de seguridad y campana, o palomilla si la vena lo requiere.</li>
<li>Tubos necesarios según petición, contenedor de biopunzantes al alcance de la mano.</li>
</ul>

<h3>Elección de la vena</h3>
<p>Primera opción, la fosa antecubital: <strong>vena mediana cubital</strong> (la más estable y menos dolorosa), después cefálica y, con más cautela, basílica, por su proximidad a la arteria braquial y al nervio mediano. Palpa siempre: una vena buena se nota rebotando bajo el dedo, no se elige por lo bonita que se ve.</p>

<h3>Procedimiento</h3>
<ol>
<li>Higiene de manos y guantes. Paciente sentado o tumbado, brazo apoyado y extendido.</li>
<li>Compresor unos 7-10 cm por encima del punto de punción. <strong>No más de un minuto.</strong></li>
<li>Palpa, elige y desinfecta en espiral desde el centro hacia fuera. <strong>Deja secar el antiséptico:</strong> si pinchas en húmedo, hemolizas y escuece.</li>
<li>Tracciona la piel distalmente para fijar la vena. Punciona con el bisel hacia arriba, ángulo aproximado de 15-30º.</li>
<li>Al obtener reflujo, estabiliza y conecta los tubos en el orden correcto.</li>
<li><strong>Suelta el compresor</strong> en cuanto fluya la sangre, idealmente antes de terminar el primer tubo.</li>
<li>Llena cada tubo <strong>hasta su marca</strong> e inviértelo suavemente el número de veces indicado, sin agitar.</li>
<li>Retira la aguja, activa el dispositivo de seguridad y desecha inmediatamente en el contenedor rígido. Presiona con gasa 2-3 minutos sin doblar el brazo. Más tiempo si está anticoagulado.</li>
<li>Apósito, comprobación del estado del paciente, registro y envío de muestras.</li>
</ol>

<div class="callout alerta"><span class="lbl">Nunca</span>
Nunca reencapuches una aguja. Nunca dejes un biopunzante sobre la mesa "un momento". El contenedor va contigo, no al otro lado de la sala.</div>
` },

  { id:"orden", titulo:"Orden de extracción y códigos de tubo", min:5, html:`
<p>El orden importa porque los aditivos de un tubo pueden arrastrarse al siguiente y alterar el resultado. El orden internacionalmente recomendado (norma CLSI) es este:</p>

<table>
<tr><th>Orden</th><th>Tubo</th><th>Uso habitual</th></tr>
<tr><td>1</td><td>Hemocultivos</td><td>Microbiología</td></tr>
<tr><td>2</td><td>Citrato</td><td>Coagulación</td></tr>
<tr><td>3</td><td>Suero (con o sin gel / activador)</td><td>Bioquímica, serología</td></tr>
<tr><td>4</td><td>Heparina</td><td>Bioquímica en plasma</td></tr>
<tr><td>5</td><td>EDTA</td><td>Hemograma, HbA1c</td></tr>
<tr><td>6</td><td>Fluoruro / oxalato</td><td>Glucosa</td></tr>
</table>

<div class="callout verifica"><span class="lbl">Ojo con los colores</span>
La secuencia por tipo de aditivo es estándar, pero <strong>el color del tapón depende del fabricante</strong>. En algunos sistemas el tubo de suero es rojo y en otros amarillo con gel. Aprende el código del material que se usa en tu centro, no el de un póster de internet.</div>

<h3>Por qué se llena hasta la marca</h3>
<p>Los tubos con anticoagulante tienen una proporción fija entre aditivo y sangre. El caso más sensible es el <strong>tubo de citrato</strong>: si se infrallena, la proporción se altera y los tiempos de coagulación salen falsamente alargados. Un tubo mal llenado se rechaza, y eso significa volver a pinchar a una persona.</p>

<h3>Homogeneización</h3>
<p>Inversiones suaves, completas, el número de veces que indique el fabricante. Agitar produce hemólisis; no invertir produce coágulos. Ninguna de las dos cosas llega a resultado.</p>
` },

  { id:"errores", titulo:"Errores frecuentes y cómo evitarlos", min:5, html:`
<table>
<tr><th>Problema</th><th>Por qué pasa</th><th>Cómo se evita</th></tr>
<tr><td><strong>Hemólisis</strong> (potasio falsamente alto)</td><td>Aguja demasiado fina, aspiración brusca, antiséptico sin secar, agitación, compresor muy prolongado.</td><td>Calibre adecuado, dejar secar, invertir sin agitar, soltar el compresor pronto.</td></tr>
<tr><td><strong>Muestra coagulada</strong></td><td>No invertir el tubo, flujo muy lento, demora entre llenado y homogeneización.</td><td>Invertir justo al retirar cada tubo.</td></tr>
<tr><td><strong>Tubo infrallenado</strong></td><td>Vena que colapsa, retirada precoz, vacío perdido.</td><td>Esperar a que el vacío termine solo; no forzar.</td></tr>
<tr><td><strong>Hemoconcentración</strong></td><td>Compresor más de un minuto, puño bombeando.</td><td>Compresor breve, sin bombear.</td></tr>
<tr><td><strong>Identificación errónea</strong></td><td>Etiquetar fuera de la presencia del paciente, confirmar en vez de preguntar.</td><td>Pregunta abierta y etiquetado delante del paciente.</td></tr>
</table>

<div class="callout pregunta"><span class="lbl">Práctica</span>
Pide ver una hoja de incidencias del laboratorio de las últimas semanas. Ver qué muestras se rechazaron y por qué es la mejor clase de preanalítica que vas a tener.</div>
` },

  { id:"incidencias", titulo:"Cuando algo se complica", min:7, html:`
<h3>Lipotimia vasovagal</h3>
<p>Es la complicación más frecuente y suele avisar: palidez, sudoración, bostezos, náuseas, sensación de calor, visión borrosa.</p>
<ol>
<li>Interrumpe la extracción y retira la aguja.</li>
<li>Tumba a la persona en decúbito supino con las <strong>piernas elevadas</strong>. Si está sentada y no puede tumbarse, cabeza entre las rodillas.</li>
<li>Afloja la ropa, ventila, avisa a tu tutora.</li>
<li>No des líquidos ni azúcar si no está plenamente consciente.</li>
<li>Recuperación habitual en pocos minutos. Que no se levante de golpe. Registra el episodio: la próxima vez se extraerá tumbada.</li>
</ol>

<h3>Punción fallida</h3>
<p>Máximo dos intentos por profesional; después, pide relevo. No es un fracaso tuyo, es una norma de respeto al paciente. No "busques" la vena moviendo la aguja bajo la piel en abanico: duele mucho y puede lesionar estructuras.</p>

<div class="callout alerta"><span class="lbl">Retira siempre y avisa</span>
Dolor eléctrico irradiado al pinchar, sangre roja brillante y pulsátil, o hematoma que crece rápido: retira la aguja de inmediato, comprime y llama a tu tutora.</div>

<h3>Hematoma</h3>
<p>Compresión firme 5 minutos con el brazo estirado, frío local y recomendación de no cargar peso ese día. Explica que puede cambiar de color en los días siguientes y cuándo debería consultar.</p>

<h3>Accidente biológico (pinchazo o salpicadura)</h3>
<ol>
<li>Retira el objeto y deja sangrar la herida sin exprimirla. Lava con agua y jabón abundante.</li>
<li>Si es salpicadura en mucosas u ojos, lavado abundante con suero fisiológico o agua.</li>
<li>Antiséptico y cobertura de la herida.</li>
<li><strong>Comunícalo de inmediato</strong> a tu tutora y a la persona responsable del centro. No lo dejes para el final de la mañana: existe profilaxis postexposición con ventana de tiempo.</li>
<li>Se activa el circuito de Prevención de Riesgos Laborales y se registra como accidente.</li>
</ol>

<div class="callout verifica"><span class="lbl">Esto sí o sí</span>
El circuito exacto de notificación de accidente biológico (a quién se llama, en qué horario, a qué servicio se acude) es específico de cada centro y área. <strong>Pregúntalo tu primer día, antes de necesitarlo.</strong></div>

<h3>Otras muestras que se recogen en el centro</h3>
<ul>
<li><strong>Orina:</strong> primera de la mañana para sistemático; para urocultivo, chorro medio con higiene previa y envío o refrigeración rápida.</li>
<li><strong>Sangre oculta en heces:</strong> del programa de cribado de cáncer colorrectal. Explicar bien la recogida y la conservación del kit.</li>
<li><strong>Frotis y test rápidos</strong> según cartera del centro.</li>
</ul>
` }
  ]
});

window.BLOQUES.push({
  id: "urgencias",
  tapon: "rojo",
  color: "#C3443E",
  titulo: "Urgencias en el centro",
  sub: "Lo que puede entrar por la puerta y qué hacer en los primeros minutos.",
  semana: "Semana 2",
  temas: [

  { id:"como", titulo:"Cómo llega una urgencia a Primaria", min:5, html:`
<p>En un centro de salud la urgencia no llega anunciada por radio. Llega de tres maneras:</p>
<ul>
<li><strong>Por el mostrador:</strong> alguien dice que se encuentra mal. La unidad administrativa avisa. Por eso la formación del personal de admisión en signos de alarma es tan importante.</li>
<li><strong>Desde una consulta:</strong> un paciente citado por otra cosa se descompensa.</li>
<li><strong>En la sala de espera o en la calle:</strong> lo peor, porque nadie estaba mirando.</li>
</ul>

<h3>Tu primer día, localiza esto</h3>
<ol>
<li>Dónde está el <strong>carro de parada</strong> y el <strong>desfibrilador</strong>.</li>
<li>Cuál es la <strong>sala de urgencias o de técnicas</strong> donde se atiende.</li>
<li>Cómo se <strong>pide ayuda</strong>: timbre, teléfono interno, o simplemente gritar por el pasillo. Averigua qué se hace realmente aquí.</li>
<li>Quién <strong>llama al 112</strong> y con qué información.</li>
<li>Dónde está el <strong>oxígeno</strong> y cómo se abre.</li>
</ol>

<div class="callout truco"><span class="lbl">Tu papel</span>
En una urgencia real, como estudiante no diriges ni administras. Pero eres enormemente útil: traer el carro, cronometrar, apuntar horas y dosis, avisar a medicina, apartar a la gente, sostener la puerta abierta al SUMMA. Nadie sobra si sabe qué hacer.</div>
` },

  { id:"carro", titulo:"El carro de parada", min:5, html:`
<p>El carro es un dispositivo de seguridad: su valor está en que <strong>todos los carros del centro estén igual</strong> y en que esté revisado. Si tienes que buscar algo, ya vas tarde.</p>

<h3>Qué suele contener</h3>
<ul>
<li><strong>Vía aérea:</strong> cánulas orofaríngeas de varios tamaños, mascarillas, bolsa autoinflable (ambú) de adulto y pediátrica, sistema de aspiración, oxígeno con mascarilla de alta concentración.</li>
<li><strong>Circulación:</strong> desfibrilador (DEA o semiautomático) con parches de adulto y pediátricos, material de canalización venosa, sueros.</li>
<li><strong>Fármacos de emergencia</strong> según protocolo del centro: adrenalina, atropina, corticoides, broncodilatadores, glucosa hipertónica, glucagón, nitroglicerina sublingual, ácido acetilsalicílico, diazepam.</li>
<li><strong>Monitorización:</strong> pulsioxímetro, tensiómetro, glucómetro, electrocardiógrafo.</li>
<li><strong>Hoja de registro</strong> de la parada y hoja de revisión del carro.</li>
</ul>

<h3>La revisión periódica</h3>
<p>Se comprueba contenido, integridad del precinto, caducidades y carga del desfibrilador, con una frecuencia establecida por el centro y con firma de quien revisa. Pide participar en una revisión completa: es la mejor forma de aprenderte el carro.</p>

<div class="callout verifica"><span class="lbl">Comprueba</span>
El contenido y los fármacos concretos varían entre centros. Trabaja siempre con el listado oficial del carro de tu centro, no con una lista genérica.</div>
` },

  { id:"svb", titulo:"Soporte vital básico y DEA", min:7, html:`
<div class="callout alerta"><span class="lbl">Aviso</span>
Este resumen es una ayuda de estudio, no sustituye a un curso acreditado de SVB con práctica sobre maniquí. Verifica siempre con las recomendaciones vigentes del ERC/CERCP y con el protocolo de tu centro.</div>

<h3>Secuencia en el adulto</h3>
<ol>
<li><strong>Seguridad</strong> del entorno.</li>
<li><strong>Comprobar respuesta:</strong> hablar y estimular.</li>
<li><strong>Abrir vía aérea</strong> (frente-mentón) y comprobar respiración no más de 10 segundos. La respiración agónica <em>no</em> es respiración normal.</li>
<li><strong>Pedir ayuda</strong> y que traigan el desfibrilador. Activar el 112.</li>
<li><strong>Compresiones:</strong> centro del tórax, 100-120 por minuto, 5-6 cm de profundidad, permitiendo la reexpansión completa. Minimiza las interrupciones.</li>
<li><strong>Ventilaciones:</strong> relación 30:2 si estás entrenada y dispones de bolsa-mascarilla.</li>
<li><strong>DEA:</strong> encenderlo en cuanto llegue y seguir sus instrucciones. Nadie toca al paciente durante el análisis ni la descarga.</li>
<li>Continuar hasta que llegue el equipo del SUMMA, el paciente recupere signos de vida o se indique el cese.</li>
</ol>

<h3>Diferencias clave en el niño</h3>
<ul>
<li>La parada suele ser de <strong>origen respiratorio</strong>, no cardiaco: la oxigenación es prioritaria.</li>
<li>Se inicia con <strong>5 ventilaciones de rescate</strong> antes de las compresiones.</li>
<li>Relación <strong>15:2</strong> con dos reanimadores sanitarios (30:2 si estás sola y sin entrenamiento pediátrico).</li>
<li>Profundidad: alrededor de un tercio del diámetro anteroposterior del tórax. Talón de una mano en el niño; dos dedos o dos pulgares abrazando el tórax en el lactante.</li>
<li>Usar parches pediátricos del DEA si están disponibles y el niño tiene menos de 8 años o menos de 25 kg aproximadamente; si no hay, se usan los de adulto sin que se toquen entre sí.</li>
</ul>

<h3>Atragantamiento</h3>
<p>Si la tos es efectiva, animar a toser y no intervenir. Si deja de ser efectiva: 5 golpes interescapulares alternados con 5 compresiones abdominales en adulto y niño; en el <strong>lactante</strong>, 5 golpes en la espalda y 5 compresiones torácicas, nunca abdominales. Si pierde la consciencia, se inicia RCP.</p>
` },

  { id:"situaciones", titulo:"Situaciones frecuentes: primeros minutos", min:9, html:`
<div class="callout alerta"><span class="lbl">Sobre las dosis</span>
Las dosis que aparecen aquí son las de uso habitual descritas en la literatura, incluidas como referencia de estudio. <strong>Confírmalas siempre con el protocolo vigente de tu centro y con la ficha técnica antes de cualquier administración.</strong> Como estudiante nunca administras fármacos de urgencia por tu cuenta.</div>

<h3>Dolor torácico</h3>
<ul>
<li>Es una de las pocas situaciones donde el reloj manda: la recomendación es realizar un <strong>ECG de 12 derivaciones en los primeros 10 minutos</strong> y que lo valore medicina de inmediato.</li>
<li>Paciente en reposo, semisentado, monitorizado: tensión arterial, frecuencia, saturación, glucemia si procede.</li>
<li>Anamnesis rápida: cuándo empezó, cómo es, dónde irradia, qué lo desencadena, síntomas acompañantes (sudoración, náuseas, disnea).</li>
<li>Ojo con la presentación atípica en <strong>mujeres, personas mayores y diabéticos</strong>: puede manifestarse como fatiga, malestar epigástrico o disnea sin dolor típico. Esta diferencia está bien documentada y contribuye a retrasos diagnósticos.</li>
</ul>

<h3>Disnea y crisis asmática</h3>
<ul>
<li>Posición incorporada, oxígeno según saturación y protocolo, monitorización.</li>
<li>Broncodilatador inhalado con cámara o nebulizado según indicación médica.</li>
<li>Signos de gravedad: incapacidad para hablar en frases completas, uso de musculatura accesoria, cianosis, disminución del nivel de consciencia, tórax silente.</li>
</ul>

<h3>Anafilaxia</h3>
<ul>
<li>Sospecha ante inicio brusco con afectación de <strong>dos o más sistemas</strong> (piel, respiratorio, digestivo, cardiovascular) tras exposición a un alérgeno probable, o hipotensión aislada tras alérgeno conocido.</li>
<li>El tratamiento de elección es la <strong>adrenalina intramuscular</strong> en la cara anterolateral del muslo, precoz. La demora en administrarla es el principal factor asociado a mala evolución.</li>
<li>Dosis habitualmente descritas con adrenalina 1 mg/ml: 0,01 mg/kg, con máximo aproximado de 0,5 mg en adulto y 0,3 mg en niño; repetible a los 5-15 minutos. <strong>Verifica con el protocolo del centro.</strong></li>
<li>Posición: tumbado con piernas elevadas si hay hipotensión; sentado si predomina la dificultad respiratoria; lateral de seguridad si vomita o está inconsciente. <strong>No incorporarlo bruscamente.</strong></li>
<li>Siempre se traslada y se observa: puede haber reacción bifásica horas después.</li>
</ul>

<h3>Hipoglucemia</h3>
<ul>
<li>Si está consciente y traga: hidratos de carbono de absorción rápida, en torno a 15 g, y reevaluar glucemia a los 15 minutos, repitiendo si sigue baja. Después, hidratos de absorción lenta.</li>
<li>Si no está consciente o no puede tragar: <strong>nada por boca</strong>. Glucagón intramuscular o glucosa intravenosa según protocolo e indicación.</li>
<li>Después, siempre: buscar la causa. Salto de comida, cambio de dosis, ejercicio inhabitual, error en la técnica de insulina, consumo de alcohol.</li>
</ul>

<h3>Convulsión (incluida la febril en el niño)</h3>
<ul>
<li>Proteger de golpes, aflojar ropa, <strong>no sujetar</strong> ni introducir nada en la boca. Cronometrar la duración: es el dato que más importa después.</li>
<li>Al ceder, posición lateral de seguridad y valoración.</li>
<li>Aviso a medicina y activación del 112 si se prolonga, si se repite, o si no recupera consciencia.</li>
<li>En la convulsión febril, gran parte del trabajo enfermero es después: explicar a una familia aterrorizada qué ha pasado, que es frecuente en la infancia y generalmente benigna, y qué signos deben vigilar.</li>
</ul>

<h3>Sospecha de ictus</h3>
<ul>
<li>Valoración rápida de tres signos: asimetría facial, pérdida de fuerza en un brazo y alteración del habla.</li>
<li><strong>La hora de inicio de los síntomas es el dato crítico</strong> y hay que preguntarlo activamente a quien estuviera presente. Condiciona todo el tratamiento posterior.</li>
<li>Activación inmediata del circuito de código ictus según protocolo, con glucemia capilar para descartar hipoglucemia, que puede simularlo.</li>
</ul>
` }
  ]
});

window.BLOQUES.push({
  id: "domicilios",
  tapon: "verde",
  color: "#2C8A6B",
  titulo: "Avisos domiciliarios",
  sub: "La consulta donde la que visita eres tú.",
  semana: "Semanas 2-3",
  temas: [

  { id:"quien", titulo:"Quién recibe atención en domicilio", min:5, html:`
<p>El domicilio no es una consulta a domicilio por comodidad: es la respuesta a la imposibilidad de desplazarse. Los perfiles habituales son:</p>
<ul>
<li><strong>Personas inmovilizadas</strong> de forma permanente o prolongada, con dependencia para las actividades básicas.</li>
<li><strong>Pacientes en cuidados paliativos</strong> o en situación de terminalidad.</li>
<li><strong>Altas hospitalarias recientes</strong> con necesidad de continuidad: curas, sondajes, control de tratamiento.</li>
<li><strong>Procesos agudos</strong> puntuales en personas que no pueden acudir.</li>
</ul>
<p>La captación de estos pacientes forma parte de la Cartera de Servicios: no se espera a que llamen, se identifican activamente.</p>

<h3>Qué se hace en un domicilio</h3>
<ul>
<li>Curas de heridas crónicas y úlceras por presión.</li>
<li>Sondajes vesicales y cuidados de ostomías o sondas de alimentación.</li>
<li>Extracciones y controles analíticos.</li>
<li>Administración de tratamiento y revisión de la medicación real que se toma en casa.</li>
<li>Control de crónicos y valoración del estado general.</li>
<li><strong>Valoración del cuidador principal</strong> y de la vivienda. Esto es tan importante como la cura.</li>
</ul>

<div class="callout truco"><span class="lbl">Lo que solo se ve en casa</span>
La nevera, la caja de medicación, las alfombras y los escalones, si hay barandilla en el baño, si el cuidador está agotado, si hay comida. Un domicilio da información clínica que no aparece en ninguna consulta.</div>
` },

  { id:"prep", titulo:"Preparar la salida", min:5, html:`
<ol>
<li><strong>Revisa la historia antes de salir.</strong> Último registro, tratamiento activo, alergias, qué se hizo la última vez y qué quedó pendiente.</li>
<li><strong>Define el objetivo de la visita.</strong> No es "ir a ver a Carmen": es "cura de UPP sacra, valorar dolor, revisar dispensación de la medicación y estado de la cuidadora".</li>
<li><strong>Prepara el material.</strong> Lleva lo previsto y algo de margen: en casa no hay almacén. Comprueba caducidades.</li>
<li><strong>Planifica la ruta</strong> agrupando domicilios por zona y teniendo en cuenta portales sin ascensor.</li>
<li><strong>Llama antes</strong> si es la práctica del centro, para asegurar que hay alguien y que no coincide con la comida o el aseo.</li>
</ol>

<h3>El maletín</h3>
<ul>
<li>Tensiómetro, fonendoscopio, pulsioxímetro, termómetro, glucómetro con tiras y lancetas.</li>
<li>Material de cura: gasas, suero, antiséptico, apósitos previstos, guantes estériles y no estériles, bolsas de residuos.</li>
<li>Material de extracción y contenedor portátil de biopunzantes.</li>
<li>Sondas y lubricante si procede, jeringas, agujas, esparadrapo, tijeras y pinzas.</li>
<li>Documentación o dispositivo para el registro, y contenedor para el traslado de muestras.</li>
</ul>

<div class="callout alerta"><span class="lbl">Residuos</span>
Todo lo que generas en el domicilio vuelve contigo: biopunzantes en su contenedor y residuos biosanitarios en bolsa adecuada. No se dejan en la basura de la casa.</div>
` },

  { id:"valoracion", titulo:"La valoración en el domicilio", min:7, html:`
<p>Entras en casa de alguien. Pide permiso, saluda a quien esté, no reorganices la habitación sin avisar y trata el espacio con el mismo respeto con el que tratas al paciente.</p>

<h3>Escalas de uso habitual</h3>
<table>
<tr><th>Escala</th><th>Qué mide</th><th>Cuándo se usa</th></tr>
<tr><td><strong>Barthel</strong></td><td>Actividades básicas de la vida diaria.</td><td>Valoración funcional inicial y seguimiento del inmovilizado.</td></tr>
<tr><td><strong>Lawton y Brody</strong></td><td>Actividades instrumentales (compra, medicación, teléfono, dinero).</td><td>Detección precoz de pérdida de autonomía.</td></tr>
<tr><td><strong>Braden o Norton</strong></td><td>Riesgo de úlceras por presión.</td><td>Todo paciente encamado o con movilidad reducida.</td></tr>
<tr><td><strong>Pfeiffer</strong></td><td>Cribado de deterioro cognitivo.</td><td>Sospecha de deterioro; valoración del anciano.</td></tr>
<tr><td><strong>Zarit</strong></td><td>Sobrecarga del cuidador.</td><td>Cuidador principal de paciente dependiente.</td></tr>
<tr><td><strong>Downton o similar</strong></td><td>Riesgo de caídas.</td><td>Persona mayor, sobre todo tras una caída previa.</td></tr>
</table>

<div class="callout verifica"><span class="lbl">Comprueba</span>
Qué escalas concretas se registran y con qué periodicidad viene marcado por la Cartera de Servicios y por los formularios de la historia clínica. Pídele a tu tutora que te enseñe dónde se cumplimentan.</div>

<h3>Mira también la casa</h3>
<ul>
<li>Barreras: escalones, alfombras, iluminación, cables, agarraderas en el baño, altura de la cama.</li>
<li>Medicación: caja real, blísteres, medicamentos caducados, duplicidades. Es frecuente encontrar dos envases del mismo principio activo con nombres distintos.</li>
<li>Alimentación e hidratación: qué come de verdad, quién cocina, si hay dificultad para tragar.</li>
<li>Situación social: soledad, apoyo familiar, recursos económicos, necesidad de trabajo social.</li>
</ul>

<h3>El cuidador también es tu paciente</h3>
<p>Pregúntale cómo está, si duerme, si sale de casa, si tiene relevo. La sobrecarga del cuidador acaba en claudicación familiar e ingreso del paciente. Detectarla a tiempo es una intervención enfermera de pleno derecho.</p>
` },

  { id:"seguridad-dom", titulo:"Seguridad, registro y vuelta", min:4, html:`
<h3>Tu propia seguridad</h3>
<ul>
<li>Comunica siempre en el centro a qué domicilios sales y a qué hora prevés volver.</li>
<li>Como estudiante, <strong>no acudes sola a un domicilio</strong> en ningún caso.</li>
<li>Cuidado con la higiene postural: las camas domésticas son bajas y no articuladas. Pide ayuda para movilizar, usa las rodillas, acerca la carga al cuerpo. Las lesiones lumbares en enfermería son un problema profesional serio, no un accidente puntual.</li>
<li>Si percibes una situación de riesgo —agresividad, animales sueltos, ambiente inseguro—, se sale y se comunica.</li>
</ul>

<h3>Al volver</h3>
<ol>
<li>Registro de la visita: valoración, técnicas realizadas, evolución, plan y próxima fecha.</li>
<li>Comunicación con medicina de lo que requiera decisión.</li>
<li>Envío de muestras y gestión de residuos.</li>
<li>Reposición del maletín. El siguiente domicilio puede ser mañana a primera hora.</li>
</ol>

<div class="callout pregunta"><span class="lbl">Para tu diario</span>
Después de tu primer domicilio, escribe media página: qué viste en la casa que no habrías sabido nunca desde la consulta. Es una de las reflexiones que más se recuerdan de una rotación de Primaria.</div>
` }
  ]
});
