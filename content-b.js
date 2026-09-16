window.BLOQUES = window.BLOQUES || [];

window.BLOQUES.push({
  id: "tecnicas",
  n: 5,
  tapon: "gris",
  color: "#63737C",
  titulo: "Técnicas de consulta",
  sub: "Lo que se hace con las manos todos los días, y cómo hacerlo para que el dato sirva.",
  semana: "Semana 3",
  temas: [

  { id:"ta", titulo:"Toma correcta de la tensión arterial", min:7, html:`
<p>Es la técnica más repetida del centro y una de las peor hechas en general. Una toma mal realizada puede etiquetar como hipertensa a una persona que no lo es, o dejar sin tratar a quien lo necesita. La técnica no es un detalle: <strong>es el diagnóstico</strong>.</p>

<h3>Condiciones previas</h3>
<ul>
<li>Al menos <strong>5 minutos de reposo</strong> sentado, en un ambiente tranquilo, sin hablar.</li>
<li>Sin café, tabaco ni ejercicio en los 30 minutos previos. Vejiga vacía.</li>
<li>Espalda apoyada, pies en el suelo, piernas sin cruzar.</li>
<li>Brazo apoyado a la altura del corazón, desnudo (sin remangar prendas que compriman).</li>
</ul>

<h3>El manguito</h3>
<p>Es el error más frecuente. La cámara del manguito debe rodear al menos el 80% de la circunferencia del brazo. Un manguito pequeño en un brazo grande <strong>sobreestima</strong> la tensión; uno grande en un brazo delgado la subestima. Ten a mano las tallas y mide el brazo cuando dudes.</p>

<h3>Procedimiento</h3>
<ol>
<li>Coloca el manguito 2-3 cm por encima de la flexura del codo, con la marca sobre la arteria braquial.</li>
<li>Realiza <strong>al menos dos medidas</strong> separadas 1-2 minutos y anota el promedio. Si difieren mucho, haz una tercera.</li>
<li>En la primera visita, <strong>mide en ambos brazos</strong>. Si hay diferencia mantenida, en adelante se usa el brazo de cifras más altas.</li>
<li>En personas mayores, diabéticas o con síntomas, mide también de pie al minuto y a los tres minutos para detectar hipotensión ortostática.</li>
<li>Registra cifras, brazo, posición y, si procede, circunstancias (dolor, ansiedad, medicación no tomada).</li>
</ol>

<h3>AMPA y MAPA</h3>
<ul>
<li><strong>AMPA (automedida en domicilio):</strong> el esquema habitual es 7 días, mañana y noche, dos medidas cada vez; se descarta el primer día y se promedia el resto. Sirve para diagnosticar y para seguir el tratamiento, y detecta la hipertensión de bata blanca y la enmascarada.</li>
<li><strong>MAPA (monitorización ambulatoria de 24 h):</strong> el dispositivo mide automáticamente durante un día completo, incluida la noche. Es la referencia cuando hay dudas diagnósticas. Enfermería coloca el aparato, explica el diario de actividad y retira y descarga los datos.</li>
</ul>

<div class="callout verifica"><span class="lbl">Cifras de referencia</span>
Los umbrales diagnósticos de consulta, AMPA y MAPA y las cifras objetivo se actualizan en las guías europeas de hipertensión, y las de 2024 introdujeron cambios respecto a las anteriores. Trabaja con las cifras que figuren en el protocolo vigente del centro y contrástalas con el tema de HTA del bloque de crónicos.</div>

<h3>Errores que cambian el resultado</h3>
<div class="tbl-scroll"><table>
<tr><th>Error</th><th>Efecto aproximado</th></tr>
<tr><td>Hablar durante la medida</td><td>Sube la cifra</td></tr>
<tr><td>Brazo colgando o por debajo del corazón</td><td>Sobreestima</td></tr>
<tr><td>Manguito sobre la ropa o de talla pequeña</td><td>Sobreestima</td></tr>
<tr><td>Sin reposo previo / vejiga llena / piernas cruzadas</td><td>Sobreestima</td></tr>
<tr><td>Desinflado demasiado rápido (manual)</td><td>Imprecisión, tiende a subestimar la sistólica</td></tr>
</table></div>
` },

  { id:"ecg", titulo:"Electrocardiograma de 12 derivaciones", min:7, html:`
<p>El ECG lo interpreta medicina, pero <strong>la calidad del registro es tuya</strong>. Un electrodo mal puesto puede simular un infarto o esconderlo.</p>

<h3>Preparación</h3>
<ul>
<li>Explica la técnica: no duele, no da corriente, dura unos minutos y hay que estar quieto y relajado.</li>
<li>Paciente en decúbito supino, brazos a los lados, sin cruzar las piernas, sin móvil encima. Retira relojes y pulseras si molestan.</li>
<li>Piel limpia y seca; si hay mucho vello, rasura la zona de los electrodos precordiales. Sin gel de electrodo no hay señal.</li>
<li>Comprueba la calibración estándar: <strong>25 mm/s</strong> de velocidad y <strong>10 mm/mV</strong> de amplitud.</li>
</ul>

<h3>Colocación</h3>
<h4>Derivaciones de miembros</h4>
<p>Cuatro electrodos: brazo derecho, brazo izquierdo, pierna derecha (neutro) y pierna izquierda. Se colocan en muñecas y tobillos, o en zonas proximales si hay amputación o temblor intenso (indícalo en el registro). Aprende el código de colores del aparato de tu centro y compruébalo siempre: <strong>intercambiar los brazos es el error más frecuente</strong> y produce un trazado con la onda P negativa en la derivación I.</p>

<h4>Derivaciones precordiales</h4>
<ol>
<li><strong>V1:</strong> 4.º espacio intercostal, borde derecho del esternón.</li>
<li><strong>V2:</strong> 4.º espacio intercostal, borde izquierdo del esternón.</li>
<li><strong>V4:</strong> 5.º espacio intercostal, línea medioclavicular izquierda. Se coloca <em>antes</em> que V3.</li>
<li><strong>V3:</strong> a mitad de camino entre V2 y V4.</li>
<li><strong>V5:</strong> línea axilar anterior, a la misma altura horizontal que V4.</li>
<li><strong>V6:</strong> línea axilar media, a la misma altura que V4 y V5.</li>
</ol>
<p>Para localizar el 4.º espacio intercostal, palpa el ángulo de Louis (unión del manubrio con el cuerpo del esternón): a su altura está la 2.ª costilla, y debajo el 2.º espacio; cuenta desde ahí. En mujeres, V4 a V6 se colocan bajo la mama, no sobre ella.</p>

<div class="callout truco"><span class="lbl">Antes de imprimir</span>
Mira el trazado en pantalla. Línea de base ondulante = movimiento o respiración; interferencia fina regular = artefacto eléctrico o temblor; una derivación plana = electrodo suelto. Corrige y repite. Un ECG con artefactos no se entrega sin más.</div>

<h3>Registro</h3>
<p>Nombre completo del paciente, fecha y hora, y si tenía síntomas en el momento del registro (dolor, palpitaciones). En dolor torácico agudo, la hora es un dato clínico. Entrega el ECG a medicina de inmediato; no se archiva antes de que alguien lo mire.</p>
` },

  { id:"espiro", titulo:"Espirometría", min:7, html:`
<p>La espirometría diagnostica la EPOC y el asma y sigue su evolución, pero solo si la maniobra es válida. Es una técnica exigente para el paciente y para ti: buena parte de tu trabajo es <strong>entrenar y animar</strong>.</p>

<h3>Preparación del paciente</h3>
<ul>
<li>Sin broncodilatador de acción corta en las horas previas ni de acción larga desde el día anterior (los tiempos exactos dependen del fármaco y del protocolo del centro).</li>
<li>Sin tabaco en la hora previa, sin comida copiosa ni ejercicio intenso antes, ropa que no comprima.</li>
<li>Explica la maniobra con palabras y con gesto: inspiración máxima, soplar de golpe, con fuerza, y seguir soplando hasta que no quede aire.</li>
</ul>

<h3>Contraindicaciones habituales</h3>
<p>Infarto o angina inestable recientes, neumotórax, cirugía torácica, abdominal u ocular reciente, hemoptisis, aneurisma conocido, embolia pulmonar reciente, o cualquier situación aguda que impida colaborar. Ante la duda, se consulta antes de hacerla.</p>

<h3>Cómo saber si la maniobra es buena</h3>
<ul>
<li><strong>Inicio brusco</strong>, sin titubeo, sin tos en el primer segundo.</li>
<li><strong>Sin fugas</strong> por la boquilla, con pinza nasal puesta.</li>
<li><strong>Espiración completa</strong>: hasta alcanzar meseta o, en adultos, hasta unos 6 segundos.</li>
<li><strong>Reproducibilidad</strong>: al menos tres maniobras aceptables, en las que los dos mejores valores de FEV1 y de FVC se parezcan mucho entre sí (los criterios ATS/ERS fijan diferencias máximas concretas en mililitros).</li>
</ul>

<h3>Prueba broncodilatadora</h3>
<p>Se repite la espirometría un tiempo después de administrar un broncodilatador de acción corta con cámara. Sirve para valorar la reversibilidad de la obstrucción. Los criterios de positividad se actualizaron en las recomendaciones ATS/ERS más recientes.</p>

<div class="callout verifica"><span class="lbl">Comprueba</span>
Tiempos de suspensión de inhaladores, valores de referencia, criterios de reproducibilidad y de positividad de la prueba broncodilatadora: usa los que figuren en el protocolo del centro y en el manual del espirómetro. Aquí solo se describe la lógica.</div>

<h3>Calibración y limpieza</h3>
<p>El aparato se calibra o verifica con jeringa según indique el fabricante, y se usan boquillas y filtros desechables. Un espirómetro sin calibrar da números que parecen precisos y no lo son.</p>
` },

  { id:"glucemia", titulo:"Glucemia capilar", min:4, html:`
<p>Parece trivial y por eso se hace mal. Cinco detalles marcan la diferencia:</p>
<ol>
<li><strong>Manos lavadas con agua y jabón y bien secas.</strong> Restos de fruta o de azúcar en los dedos dan lecturas falsamente altas. Si se usa alcohol, debe estar completamente seco.</li>
<li><strong>Punción en el lateral del pulpejo</strong>, no en el centro: duele menos y hay menos terminaciones nerviosas. Alterna dedos.</li>
<li><strong>Gota suficiente sin exprimir</strong> el dedo: exprimir diluye la sangre con líquido intersticial.</li>
<li><strong>Tiras en buen estado</strong>: caducidad, bote cerrado, sin humedad, y controles de calidad del glucómetro según el protocolo.</li>
<li><strong>Registro con hora y relación con la comida</strong> (basal, postprandial), y con lo que se hizo si el valor era anómalo.</li>
</ol>

<div class="callout truco"><span class="lbl">Educa mientras haces</span>
Cuando el paciente se hace glucemias en casa, aprovecha para ver cómo lo hace él, no solo para hacerlo tú. Muchos errores de control se corrigen mirando la técnica.</div>

<p>La glucemia capilar es un dato puntual. El control del paciente con diabetes se valora con la hemoglobina glicosilada, el patrón de las glucemias y la situación clínica; lo verás en el tema de diabetes del bloque de crónicos.</p>
` },

  { id:"vacunas", titulo:"Administración de vacunas", min:8, html:`
<h3>Antes de vacunar</h3>
<ol>
<li><strong>Comprueba</strong> identidad, calendario, dosis que corresponde e intervalo desde la anterior.</li>
<li><strong>Pregunta</strong> por alergias, reacciones previas, enfermedad aguda con fiebre, embarazo, inmunodepresión o tratamientos inmunosupresores, y por vacunas recientes.</li>
<li><strong>Informa</strong> de qué se administra, para qué, y qué reacciones son normales. El consentimiento es verbal salvo que el protocolo indique otra cosa.</li>
<li><strong>Prepara</strong> la vacuna justo antes: comprueba nombre, caducidad, aspecto e integridad de la cadena de frío. Si algo no cuadra, no se administra.</li>
</ol>

<h3>Vías y zonas</h3>
<div class="tbl-scroll"><table>
<tr><th>Vía</th><th>Zona</th><th>Notas</th></tr>
<tr><td><strong>Intramuscular</strong></td><td>Deltoides a partir de la primera infancia; vasto externo del muslo en lactantes.</td><td>Ángulo de 90º. Aguja adecuada al tamaño del músculo: en adultos con obesidad hace falta una aguja más larga. No es necesario aspirar.</td></tr>
<tr><td><strong>Subcutánea</strong></td><td>Cara externa del brazo o muslo.</td><td>Ángulo de 45º, pellizco. Algunas vacunas vivas se administran así.</td></tr>
<tr><td><strong>Intradérmica</strong></td><td>Cara anterior del antebrazo.</td><td>Poco frecuente en el centro; requiere técnica específica.</td></tr>
</table></div>
<p>Si se administran varias vacunas el mismo día en la misma extremidad, se separan al menos 2,5 cm y se anota cuál fue en cada sitio.</p>

<h3>Contraindicaciones verdaderas y falsas</h3>
<ul>
<li><strong>Verdaderas:</strong> reacción anafiláctica previa a esa vacuna o a alguno de sus componentes; enfermedad aguda moderada o grave con fiebre (se pospone); en vacunas vivas, embarazo e inmunodepresión grave.</li>
<li><strong>Falsas (no impiden vacunar):</strong> catarro leve sin fiebre, tratamiento antibiótico, prematuridad, lactancia materna, alergias no relacionadas, antecedente familiar de reacción, convalecencia de una enfermedad leve.</li>
</ul>

<h3>Después</h3>
<ul>
<li>Observación en el centro tras la administración, según protocolo. El material de anafilaxia está localizado antes de empezar, no se busca después.</li>
<li>Explica las reacciones esperables: dolor local, enrojecimiento, febrícula, malestar uno o dos días. Y cuándo consultar.</li>
<li><strong>Registro</strong> completo en el sistema de vacunas: vacuna, lote, fecha, lugar anatómico y quién administra. Sin registro, la vacuna no cuenta.</li>
</ul>

<h3>Cadena de frío</h3>
<p>Las vacunas se conservan entre 2 y 8 ºC, sin congelar y sin luz. La nevera tiene termómetro de máximas y mínimas que se lee y anota cada día; no se guardan alimentos ni otras cosas en ella; las vacunas no van en la puerta. Si hay una rotura de la cadena de frío (fallo eléctrico, puerta abierta), se aísla el material afectado y se sigue el circuito de notificación: no se decide por cuenta propia si sirve o no.</p>

<div class="callout verifica"><span class="lbl">Calendario vigente</span>
El calendario de vacunación de la Comunidad de Madrid se actualiza con frecuencia. Consulta siempre la versión oficial vigente y no memorices pautas de años anteriores. Los detalles de la vacunación infantil están en el bloque de pediatría.</div>
` },

  { id:"menores", titulo:"Técnicas menores frecuentes", min:8, html:`
<h3>Retirada de puntos y grapas</h3>
<ul>
<li>El momento depende de la localización y de lo que indique quien suturó. Orientativamente, antes en la cara y más tarde en zonas de tensión o extremidades inferiores. Comprueba siempre la indicación.</li>
<li>Limpia con suero, valora la herida (dehiscencia, signos de infección) antes de retirar nada.</li>
<li>Corta el punto por debajo del nudo, a ras de piel, y tira <strong>hacia la línea de sutura</strong>, no en contra, para que el hilo que ha estado fuera no pase por dentro.</li>
<li>Si hay dudas sobre la cicatrización, retira puntos alternos y cita para el resto.</li>
</ul>

<h3>Sondaje vesical</h3>
<ul>
<li>Técnica <strong>estéril</strong> siempre: es la principal puerta de entrada de infección urinaria asociada a la asistencia.</li>
<li>Elige el calibre más pequeño que cumpla la función. Usa lubricante anestésico; en el varón, deja actuar unos minutos antes de introducir la sonda.</li>
<li><strong>Nunca fuerces</strong>. Si hay resistencia o dolor intenso, para y consulta.</li>
<li>Infla el balón solo cuando fluya orina y la sonda esté bien introducida. Fija la sonda para evitar tracción.</li>
<li>Registra tipo, calibre, volumen del balón, fecha y motivo. La fecha de recambio se planifica desde el primer día.</li>
</ul>

<h3>Lavado ótico</h3>
<ul>
<li>Antes, medicina explora el oído y confirma que es un tapón de cerumen. Con perforación timpánica, otitis o cirugía previa del oído <strong>no se hace</strong>.</li>
<li>Es habitual reblandecer el cerumen unos días antes con las gotas que se indiquen.</li>
<li>Agua templada, a temperatura corporal: el agua fría o caliente provoca vértigo. Tracciona el pabellón y dirige el chorro hacia la pared superior del conducto, no hacia el tímpano, sin presión excesiva.</li>
<li>Si aparece dolor, vértigo o sangrado, se detiene la técnica.</li>
</ul>

<h3>Índice tobillo-brazo con Doppler</h3>
<p>Compara la presión sistólica en el tobillo con la del brazo. Es imprescindible antes de aplicar compresión en una úlcera de pierna, porque un vendaje compresivo sobre una arteriopatía puede causar daño grave. Un índice claramente inferior a 1 sugiere arteriopatía; valores muy altos pueden indicar arterias calcificadas y son poco fiables. La técnica e interpretación se detallan en el bloque de heridas.</p>

<h3>Test rápidos</h3>
<p>Según la cartera del centro: tiras de orina, test de estreptococo faríngeo, test de antígenos respiratorios, entre otros. Lo relevante es la <strong>calidad de la muestra</strong> (una toma faríngea que no toca las amígdalas es un test negativo falso) y respetar los tiempos de lectura del fabricante.</p>
` }
  ]
});

window.BLOQUES.push({
  id: "pediatria",
  n: 6,
  tapon: "amarillo",
  color: "#C48C12",
  titulo: "Pediatría en Primaria",
  sub: "Más de la mitad del cupo de este centro. Aquí no se atiende a adultos pequeños.",
  semana: "Semana 4",
  temas: [

  { id:"nino-sano", titulo:"El programa del niño sano", min:8, html:`
<p>Es el corazón de la enfermería pediátrica en Primaria: un calendario de visitas programadas, desde el nacimiento hasta la adolescencia, en las que se sigue el crecimiento, el desarrollo y la salud del niño, y se acompaña a la familia. No es una consulta de enfermedad: es una consulta de <strong>prevención y promoción</strong>.</p>

<h3>Qué se hace en cada visita</h3>
<ul>
<li><strong>Somatometría:</strong> peso, talla y perímetro cefálico en los primeros años, con registro en percentiles.</li>
<li><strong>Desarrollo psicomotor:</strong> qué hace ya el niño y si corresponde con su edad.</li>
<li><strong>Alimentación:</strong> lactancia, alimentación complementaria, hábitos en el niño mayor.</li>
<li><strong>Sueño, llanto, cólicos</strong> en el lactante; hábitos de pantallas, actividad física y ocio en el escolar y adolescente.</li>
<li><strong>Prevención de accidentes</strong> adaptada a la edad: sueño seguro, sillas de coche, caídas, quemaduras, tóxicos, agua, tráfico.</li>
<li><strong>Vacunación</strong> según calendario.</li>
<li><strong>Salud bucodental</strong>, visión, audición.</li>
<li><strong>Cómo está la familia:</strong> estado de ánimo de la madre en el puerperio, apoyo, conciliación, dudas.</li>
</ul>

<h3>Hitos del desarrollo: lo esencial</h3>
<div class="tbl-scroll"><table>
<tr><th>Edad aproximada</th><th>Lo esperable</th><th>Señal de alarma habitual</th></tr>
<tr><td>2 meses</td><td>Sonrisa social, fija la mirada, responde a sonidos.</td><td>No sonríe ni fija la mirada a los 3 meses.</td></tr>
<tr><td>4 meses</td><td>Sostén cefálico, sigue objetos, balbucea, se lleva las manos a la boca.</td><td>Sin sostén cefálico a los 4-5 meses.</td></tr>
<tr><td>6-8 meses</td><td>Sedestación con y luego sin apoyo, pasa objetos de una mano a otra.</td><td>No se sienta a los 9 meses.</td></tr>
<tr><td>9-10 meses</td><td>Pinza índice-pulgar, gatea o se desplaza, extraña.</td><td>No hace pinza al año.</td></tr>
<tr><td>12-18 meses</td><td>Marcha autónoma, primeras palabras con sentido, señala.</td><td>No camina ni dice palabras a los 18 meses.</td></tr>
<tr><td>24 meses</td><td>Frases de dos palabras, corre, juego simbólico inicial.</td><td>Sin frases de dos palabras a los 30 meses.</td></tr>
</table></div>
<p>Y una regla que vale para todas las edades: <strong>la pérdida de una habilidad ya adquirida es siempre motivo de valoración</strong>.</p>

<div class="callout verifica"><span class="lbl">Comprueba</span>
Las edades exactas de las visitas del programa, las escalas de desarrollo que se utilizan y los cribados que se realizan en cada una están definidos en el programa de salud infantil de la Comunidad de Madrid y en la Cartera de Servicios. Pide el calendario de visitas del centro y trabaja sobre él.</div>

<h3>La consulta con el niño</h3>
<p>Empieza por la familia: cómo van, qué les preocupa. Observa al niño antes de tocarlo: cómo mira, cómo se mueve, cómo interactúa. La exploración se adapta a la edad: en el lactante, en brazos de quien lo cuida; en el preescolar, con juego y explicando cada paso; en el escolar, hablándole a él y no solo a los padres.</p>
` },

  { id:"somatometria", titulo:"Somatometría y percentiles", min:5, html:`
<p>Un peso mal tomado o una talla mal medida genera una curva falsa, y las curvas se interpretan durante años. Vale la pena hacerlo bien cada vez.</p>

<h3>Peso</h3>
<ul>
<li>Lactante <strong>desnudo, sin pañal</strong>, en báscula de lactantes tarada. Niño mayor en ropa interior, sin zapatos.</li>
<li>Comprueba que la báscula marca cero antes de cada medida.</li>
</ul>

<h3>Talla</h3>
<ul>
<li>Hasta los 2 años, <strong>longitud en decúbito</strong> con infantómetro: cabeza contra el tope fijo, piernas extendidas (hacen falta dos personas), tope móvil contra los talones.</li>
<li>A partir de los 2 años, <strong>talla de pie</strong>: descalzo, talones juntos y pegados a la pared, mirada al frente, y la pieza horizontal baja hasta el vértex.</li>
<li>El cambio de decúbito a bipedestación produce una pequeña diferencia normal; no interpretarla como estancamiento.</li>
</ul>

<h3>Perímetro cefálico</h3>
<p>Cinta métrica inextensible por encima de las cejas y por la parte más prominente del occipucio, buscando la circunferencia máxima. Se mide en los primeros años, cuando el crecimiento cerebral es más rápido.</p>

<h3>Interpretar percentiles</h3>
<ul>
<li>El percentil dice en qué posición está el niño respecto a la población de referencia. Un percentil 10 <strong>no es malo</strong>, y un percentil 90 <strong>no es bueno</strong>: son posiciones.</li>
<li>Lo que importa es la <strong>trayectoria</strong>: un niño que sigue su canal está creciendo bien. Un cambio de dos canales de percentil, hacia arriba o hacia abajo, merece valoración.</li>
<li>Usa las curvas de referencia que utilice el centro (las de la OMS son las recomendadas para los primeros años) y comprueba que el programa informático calcula con la edad correcta, sobre todo en prematuros, donde se usa la edad corregida durante un tiempo.</li>
</ul>

<div class="callout truco"><span class="lbl">Con la familia</span>
Muchas madres y padres viven el percentil como una nota de examen. Explica que es una posición, no una calificación, y que lo que se vigila es que el niño siga su curva. Reduce mucha ansiedad innecesaria.</div>
` },

  { id:"vac-infantil", titulo:"Vacunación infantil", min:8, html:`
<p>En este centro, la vacunación infantil tiene agenda propia. Vas a vacunar a muchos niños en pocas semanas: es la técnica en la que más vas a mejorar durante la rotación, y también en la que más vas a aprender sobre comunicación con familias.</p>

<h3>Zonas de inyección por edad</h3>
<ul>
<li><strong>Lactantes y niños que todavía no caminan:</strong> vasto externo, cara anterolateral del muslo. Es el músculo más desarrollado a esa edad y está lejos de estructuras neurovasculares importantes.</li>
<li><strong>Niños que ya caminan con soltura y mayores:</strong> deltoides. Se valora la masa muscular: en niños pequeños o delgados puede seguir siendo preferible el muslo.</li>
<li>Con varias vacunas el mismo día, se reparten entre las dos extremidades y se registra cuál fue en cada sitio.</li>
</ul>

<h3>El dolor del procedimiento se puede reducir</h3>
<p>La vacunación es el procedimiento doloroso más frecuente de la infancia y hay evidencia sólida de que varias medidas sencillas lo disminuyen. No son un adorno: forman parte de la técnica.</p>
<ul>
<li><strong>Lactancia materna</strong> durante la vacunación, o inmediatamente antes y después, en el lactante. Es la medida con más evidencia en esa edad.</li>
<li><strong>Contacto piel con piel</strong> y sujeción en brazos de quien lo cuida, en posición de abrazo, en vez de tumbado e inmovilizado en la camilla.</li>
<li><strong>Solución de sacarosa</strong> oral en lactantes que no toman pecho, según protocolo.</li>
<li><strong>Distracción</strong> adaptada a la edad: pompas, un vídeo, un cuento, contar hacia atrás, en el preescolar y el escolar.</li>
<li><strong>Técnica rápida, sin aspirar</strong>, con el niño lo más tranquilo posible. Si hay dos vacunas, muchas guías recomiendan administrarlas simultáneamente entre dos profesionales o dejar la más dolorosa para el final.</li>
<li><strong>Evitar sujetar a la fuerza.</strong> Pedir a la familia que sujete con abrazo, con calma, y sin frases como "no duele nada" o "si no lloras te doy un premio". Se puede decir que va a notar un pinchazo y que va a pasar rápido.</li>
</ul>

<div class="callout pregunta"><span class="lbl">Para observar</span>
Fíjate en cómo influye el estado de la familia en el del niño. Un adulto tenso transmite tensión. Buena parte del trabajo es calmar primero a quien sujeta.</div>

<h3>Registro y calendario</h3>
<ul>
<li>Cada dosis se registra en el sistema de información vacunal de la Comunidad de Madrid, con lote, fecha, vía y zona. También en la cartilla del niño si la familia la lleva.</li>
<li>Comprueba siempre el calendario vigente y las pautas de rescate para niños con calendario incompleto o procedentes de otros países. Estas situaciones tienen tablas específicas.</li>
</ul>

<div class="callout verifica"><span class="lbl">Calendario vigente</span>
El calendario infantil de la Comunidad de Madrid cambia casi cada año (nuevas vacunas, cambios de edad, pautas de rescate). No se memoriza: se consulta la versión oficial en vigor. Tu tutora te indicará dónde está.</div>
` },

  { id:"fiebre", titulo:"Fiebre en el niño", min:7, html:`
<p>Es el motivo de consulta pediátrica más frecuente y el que más angustia genera. Gran parte del trabajo enfermero aquí es <strong>valorar bien y explicar mejor</strong>.</p>

<h3>Medir</h3>
<ul>
<li>Se considera fiebre, en general, una temperatura axilar de 38 ºC o más (los umbrales exactos varían según vía y guía). El termómetro digital axilar es el habitual en el centro; el timpánico no es fiable en los lactantes más pequeños.</li>
<li>La cifra importa menos que <strong>el estado general del niño</strong>. Un niño con 39,5 que juega tranquiliza más que uno con 38 que está decaído y no mira.</li>
</ul>

<h3>Signos de alarma</h3>
<div class="callout alerta"><span class="lbl">Valoración médica inmediata</span>
<ul>
<li>Fiebre en un <strong>lactante menor de 3 meses</strong>, siempre.</li>
<li>Manchas en la piel que <strong>no desaparecen al presionar</strong> (petequias).</li>
<li>Decaimiento marcado, dificultad para despertarlo, llanto inconsolable o quejido.</li>
<li>Dificultad respiratoria, mal color, labios azulados.</li>
<li>Rigidez de nuca, vómitos persistentes, convulsión.</li>
<li>Signos de deshidratación: no orina en muchas horas, boca seca, ojos hundidos, fontanela hundida.</li>
<li>Fiebre que dura más de lo esperable o que reaparece tras haber cedido.</li>
</ul>
</div>

<h3>Lo que hay que explicar a las familias</h3>
<ul>
<li>La fiebre es un <strong>síntoma</strong>, no una enfermedad, y forma parte de la respuesta del cuerpo a la infección. No es peligrosa en sí misma en un niño sano.</li>
<li>El antitérmico se da para que el niño esté <strong>más cómodo</strong>, no para bajar un número. Si tiene fiebre y está bien, no es obligatorio tratarla.</li>
<li>Se dosifica <strong>por peso</strong>, con la jeringa del envase, y se respetan los intervalos. No se recomienda alternar antitérmicos de forma rutinaria: aumenta el riesgo de errores de dosis.</li>
<li>Ofrecer líquidos con frecuencia, ropa ligera, ambiente templado. No abrigar, no baños fríos, no friegas de alcohol.</li>
<li>Escribe con ellos los signos de alarma y cuándo volver. Mejor en papel o en el móvil que de memoria.</li>
</ul>

<div class="callout verifica"><span class="lbl">Comprueba</span>
Dosis de antitérmicos, intervalos y edad mínima de cada fármaco: usa las fichas técnicas y el protocolo del centro. No se dan dosis de memoria a una familia.</div>
` },

  { id:"lactancia", titulo:"Lactancia y alimentación complementaria", min:7, html:`
<h3>Lactancia materna</h3>
<p>La recomendación de la OMS y de las sociedades pediátricas es lactancia materna <strong>exclusiva hasta los 6 meses</strong> y continuada, junto con otros alimentos, hasta los dos años o más si la madre y el niño lo desean. El papel de enfermería es apoyar la decisión de la madre, sea cual sea, con información y sin culpa.</p>

<h4>Qué observar en una toma</h4>
<ul>
<li>Posición: cuerpo del bebé pegado al de la madre, cabeza y cuerpo alineados, nariz frente al pezón.</li>
<li>Agarre: boca muy abierta, labio inferior evertido, más areola visible por arriba que por abajo, mejillas redondeadas.</li>
<li>Succión: rítmica, con pausas, y deglución audible. Sin dolor mantenido para la madre.</li>
<li>Signos de que come suficiente: pañales mojados abundantes, deposiciones adecuadas a la edad, recuperación del peso al nacer en las primeras dos semanas y ganancia posterior.</li>
</ul>

<h4>Dificultades frecuentes</h4>
<p>Grietas y dolor (casi siempre por agarre), ingurgitación, obstrucción de conductos, mastitis, percepción de hipogalactia. La mayoría se resuelven corrigiendo la técnica y con apoyo precoz; el momento de intervenir es <strong>los primeros días</strong>, no cuando la madre ya ha desistido. Los grupos de apoyo a la lactancia del centro o del barrio son un recurso que hay que conocer y recomendar.</p>

<h3>Lactancia con fórmula</h3>
<p>Preparación segura: agua adecuada, proporción exacta de polvo según el fabricante, preparación en el momento, no reutilizar restos, limpieza del material. Sin culpabilizar: una madre que da fórmula necesita la misma información y el mismo apoyo.</p>

<h3>Alimentación complementaria</h3>
<ul>
<li>Se inicia <strong>alrededor de los 6 meses</strong>, nunca antes de los 4, cuando el niño mantiene la cabeza, se sienta con apoyo y muestra interés por la comida.</li>
<li>La leche sigue siendo el alimento principal el primer año. Lo demás complementa.</li>
<li>Las recomendaciones actuales <strong>no retrasan la introducción de alimentos potencialmente alergénicos</strong> (huevo, pescado, frutos secos molidos): retrasarlos no previene la alergia.</li>
<li>Sin sal, sin azúcar, sin miel antes del año. La leche de vaca no como bebida principal antes de los 12 meses.</li>
<li><strong>Prevención de atragantamiento:</strong> nada de frutos secos enteros, uvas o cerezas enteras, salchichas en rodajas ni caramelos duros en los primeros años. Siempre sentado y vigilado.</li>
<li>El método de alimentación dirigida por el bebé (trozos blandos, autoalimentación) es una opción válida si se hace con seguridad; las familias suelen pedir información sobre él.</li>
<li>Suplemento de vitamina D durante el primer año según la recomendación vigente.</li>
</ul>

<div class="callout verifica"><span class="lbl">Comprueba</span>
Las recomendaciones de alimentación infantil (edad y orden de introducción, suplementos) las actualiza la Asociación Española de Pediatría y el programa de salud infantil. Usa los documentos que maneje el centro.</div>
` }
  ]
});

window.BLOQUES.push({
  id: "comunidad",
  n: 9,
  tapon: "naranja",
  color: "#C9702A",
  titulo: "Comunidad, cribados y comunicación",
  sub: "Tres cosas cortas que atraviesan toda la rotación.",
  semana: "Transversal",
  temas: [

  { id:"comunitaria", titulo:"Salud comunitaria", min:7, html:`
<p>Un centro de salud tiene una población, no solo pacientes. La orientación comunitaria consiste en mirar la salud de esa población en su contexto —barrio, vivienda, trabajo, redes— y actuar también ahí, no solo en la consulta.</p>

<h3>Tres niveles de intervención</h3>
<h4>1. Intervención individual con enfoque comunitario</h4>
<p>Es la consulta de siempre, pero teniendo en cuenta el entorno. Preguntar a quién tiene cerca, qué hace en el barrio, qué recursos conoce. Y usar lo que existe: la <strong>recomendación de activos</strong> (a veces llamada prescripción social) consiste en indicar a una persona un recurso de la comunidad —un grupo de paseo, un taller del centro cultural, una asociación, un huerto urbano— como parte de su plan de cuidados. Un <em>activo en salud</em> es cualquier recurso que mejora la capacidad de las personas de mantener su salud y bienestar.</p>

<h4>2. Grupos de educación para la salud</h4>
<p>Actividad educativa con un grupo de personas que comparten una situación: diabetes, cuidadores, lactancia, ejercicio, deshabituación tabáquica, crianza. Un grupo bien llevado enseña más que muchas consultas individuales, y además crea red entre los participantes. Para planificar uno:</p>
<ol>
<li><strong>Necesidad:</strong> de dónde sale la idea y a quién va dirigida.</li>
<li><strong>Objetivos</strong> concretos y evaluables: qué debería saber, hacer o sentir alguien al terminar.</li>
<li><strong>Contenidos y metodología:</strong> participativa, con actividades, no una clase magistral. Entre 8 y 15 personas suele funcionar.</li>
<li><strong>Captación:</strong> desde consulta, carteles, otros profesionales.</li>
<li><strong>Evaluación:</strong> asistencia, satisfacción, cambio en conocimientos o hábitos.</li>
<li><strong>Registro</strong> de la actividad en la historia y en el sistema de actividad comunitaria del centro.</li>
</ol>

<h4>3. Intervención comunitaria</h4>
<p>Trabajo conjunto con otros agentes del territorio —ayuntamiento, colegios, servicios sociales, asociaciones de vecinos, centros de mayores— sobre un problema de salud de la comunidad. Requiere conocer el barrio y sus recursos, y participar en las estructuras que existan (mesas de salud, consejos de salud). Es una actividad recogida en la Cartera de Servicios.</p>

<div class="callout truco"><span class="lbl">Malasaña</span>
Este centro está en un barrio con mucha vida comunitaria y mucha diversidad. Pregunta qué grupos se hacen en el centro, qué relación hay con los recursos del barrio y si hay un mapa de activos. Si puedes asistir a una sesión grupal durante la rotación, hazlo.</div>

<h3>Referencias que te pueden servir</h3>
<p>El Programa de Actividades Comunitarias en Atención Primaria (PACAP) de la semFYC y los materiales de la Escuela Madrileña de Salud recogen experiencias y metodología. Tu tutora te puede orientar sobre lo que se usa en el centro.</p>
` },

  { id:"cribados", titulo:"Cribados poblacionales del SERMAS", min:6, html:`
<p>Un cribado poblacional es una prueba que se ofrece de forma sistemática a personas sin síntomas, en una franja de edad concreta, para detectar una enfermedad en fase precoz. En la Comunidad de Madrid hay tres programas de cribado de cáncer en los que Primaria participa.</p>

<div class="tbl-scroll"><table>
<tr><th>Programa</th><th>Prueba</th><th>Población habitual</th><th>Papel de enfermería</th></tr>
<tr><td><strong>Cáncer de colon y recto</strong></td><td>Test de sangre oculta en heces (inmunoquímico), en domicilio, con kit.</td><td>Personas de mediana edad, con repetición periódica.</td><td>Captación oportunista, explicar la recogida y conservación del kit, resolver dudas, seguimiento de resultados y de la colonoscopia si es positivo.</td></tr>
<tr><td><strong>Cáncer de cérvix</strong></td><td>Citología y/o determinación del virus del papiloma humano, según edad.</td><td>Mujeres desde la juventud hasta la madurez, con intervalos que dependen de la prueba.</td><td>Captación, información; la toma suele realizarla la matrona. Información sobre la vacuna del VPH.</td></tr>
<tr><td><strong>Cáncer de mama</strong></td><td>Mamografía en unidades específicas del programa.</td><td>Mujeres de mediana edad, con repetición periódica.</td><td>Captación, explicar el programa, seguimiento de las mujeres que no acuden.</td></tr>
</table></div>

<div class="callout verifica"><span class="lbl">Edades e intervalos</span>
Los rangos de edad, los intervalos y el tipo de prueba de cada programa han cambiado en los últimos años y pueden volver a cambiar. Aquí se describe la lógica, no las cifras. Consulta el programa vigente de la Comunidad de Madrid antes de informar a una persona.</div>

<h3>Lo que hay que saber explicar</h3>
<ul>
<li>Por qué se ofrece a personas sin síntomas y por qué en esa franja de edad.</li>
<li>Que un resultado positivo <strong>no es un diagnóstico</strong>: significa que hace falta una prueba más. Muchos positivos no son cáncer.</li>
<li>Que un negativo no exime de consultar si aparecen síntomas.</li>
<li>Que participar es voluntario, y que decidir con información es lo que se busca.</li>
</ul>

<h3>Cribados y actividades preventivas en la consulta</h3>
<p>Además de los programas poblacionales, la Cartera de Servicios recoge actividades preventivas que se hacen en consulta: detección de factores de riesgo cardiovascular, consejo sobre tabaco y alcohol, cribado de violencia de género, valoración del riesgo de caídas en mayores, entre otras. Algunas las verás en el bloque de crónicos.</p>
` },

  { id:"comunicacion", titulo:"Pinceladas de comunicación", min:8, html:`
<p>La comunicación es la técnica que se usa en todas las consultas y la que menos se enseña. Aquí van unas pocas ideas que funcionan.</p>

<h3>Escuchar de verdad</h3>
<ul>
<li>Deja hablar sin interrumpir en el primer minuto. La mayoría de la gente termina de exponer su motivo de consulta bastante rápido si no se le corta.</li>
<li><strong>Preguntas abiertas</strong> primero ("¿qué le trae hoy?", "¿cómo lo está llevando?"), cerradas después para concretar.</li>
<li>Tolera el silencio. Dos segundos de pausa suelen traer lo que importa.</li>
<li><strong>Resume</strong> lo que has entendido y pregunta si es así. Corrige errores antes de actuar.</li>
</ul>

<h3>Explicar para que se entienda</h3>
<ul>
<li>Sin jerga. "Glucemia basal" es "el azúcar en ayunas".</li>
<li>Una idea importante a la vez. Tres indicaciones se recuerdan; ocho no.</li>
<li><strong>Comprueba la comprensión pidiendo que te lo cuente</strong> ("para asegurarme de que me he explicado bien, ¿cómo lo va a hacer en casa?"). Es la técnica del <em>teach-back</em>, y funciona mucho mejor que preguntar "¿lo ha entendido?".</li>
<li>Escribe lo esencial. Lo que se lleva en un papel se hace más.</li>
</ul>

<h3>Lo esencial de la entrevista motivacional</h3>
<p>Cuando el tema es un cambio de hábito (tabaco, alimentación, ejercicio, medicación), decir a la gente lo que tiene que hacer suele producir el efecto contrario. La entrevista motivacional parte de que la motivación para cambiar está en la persona, y el trabajo es ayudarle a encontrarla.</p>
<ul>
<li><strong>Evita el reflejo de corregir.</strong> Cuando alguien dice "ya sé que debería dejar de fumar, pero…", la tentación es dar argumentos. No lo hagas: la persona defenderá la otra parte.</li>
<li><strong>Explora la ambivalencia:</strong> qué le gusta de lo que hace y qué no. Las dos cosas son verdad.</li>
<li><strong>Refleja</strong> lo que dice ("le preocupa, pero ahora mismo no se ve capaz"). Un reflejo bien hecho hace que la persona siga hablando y se escuche.</li>
<li><strong>Escalas:</strong> "del 0 al 10, ¿cuánto le importa?" y "¿cuánta confianza tiene en conseguirlo?". Y la pregunta que abre puertas: "¿por qué un 4 y no un 2?".</li>
<li>Termina con un <strong>paso pequeño</strong> que la persona elija, no con un plan tuyo.</li>
</ul>

<h3>Con niños y con familias</h3>
<ul>
<li><strong>Lactante:</strong> el paciente es la familia. Calma, tiempo y no juzgar.</li>
<li><strong>Preescolar:</strong> lenguaje concreto, presente, con juego. Explica lo que vas a hacer y no mientas sobre el dolor: "un pinchazo rápido" es mejor que "no duele".</li>
<li><strong>Escolar:</strong> háblale a él. Explica, ofrece elecciones reales ("¿brazo derecho o izquierdo?") y reconoce lo que ha hecho bien.</li>
<li><strong>Adolescente:</strong> intimidad, tiempo a solas si procede, confidencialidad explicada con sus límites, y sin sermones.</li>
<li>Con las familias, valida la preocupación antes de dar información. "Entiendo que le asuste" abre; "no es nada" cierra.</li>
</ul>

<div class="callout pregunta"><span class="lbl">Práctica</span>
Elige una consulta de cambio de hábito y, después, revisa con tu tutora: ¿quién habló más? ¿Cuántas veces se dio un consejo no pedido? ¿Qué se llevó la persona? No hay respuesta correcta; hay una conversación útil.</div>
` }
  ]
});
