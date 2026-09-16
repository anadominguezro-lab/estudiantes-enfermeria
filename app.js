/* =====================================================================
   Rotación AP · Palma Norte — lógica de la app
   Vanilla JS, sin build. Rutas por hash, estado en localStorage.
   ===================================================================== */
(function () {
  'use strict';

  /* ---------- Datos ---------- */
  var TAPONES = {
    celeste: '#2E7FC2', lila: '#7B5EA7', rojo: '#C3443E', verde: '#2C8A6B', gris: '#63737C',
    amarillo: '#C48C12', negro: '#33413C', rosa: '#B4527A', naranja: '#C9702A'
  };

  function normalizarBloques(raw) {
    var arr = Array.isArray(raw) ? raw.slice() : [];
    arr.forEach(function (b, i) {
      if (typeof b.n !== 'number') b.n = i + 1;           // content-a.js no trae n: índice + 1
      var c = String(b.color || '').trim();
      if (!/^#[0-9a-f]{3,8}$/i.test(c)) c = TAPONES[b.tapon] || '#6C4FA1';   // var(--t-x) → hex
      b.color = c;
      if (!Array.isArray(b.temas)) b.temas = [];
    });
    arr.sort(function (a, b) { return a.n - b.n; });
    return arr;
  }

  var BLOQUES = normalizarBloques(window.BLOQUES);
  var CHECKLIST = Array.isArray(window.CHECKLIST) ? window.CHECKLIST : [];
  var BLOQUE_POR_ID = {};
  BLOQUES.forEach(function (b) { BLOQUE_POR_ID[b.id] = b; });

  var CRONO = [
    [1, 'Cómo funciona el centro, confidencialidad, sala de extracciones en observación', 'Conoces circuitos, carro de parada, DEA y circuito de accidente biológico'],
    [2, 'Extracciones acompañada, urgencias, primer domicilio', 'Extraes con supervisión directa'],
    [3, 'Técnicas de consulta: TA, ECG, espirometría, vacunas', 'Realizas técnicas acompañada'],
    [4, 'Pediatría: niño sano, vacunación infantil, fiebre', 'Participas en la agenda de vacunación'],
    [5, 'Crónicos, curas, cribados, comunidad', 'Llevas parte de una consulta programada'],
    [6, 'Consolidación con supervisión indirecta', 'Revisión conjunta de la checklist y cierre']
  ];

  var NIVELES = {
    O: { corto: 'O', nombre: 'observar' },
    A: { corto: 'A', nombre: 'hacer acompañada' },
    S: { corto: 'S', nombre: 'hacer con supervisión indirecta' }
  };

  var CALLOUTS = {
    alerta: { mark: '▲', label: 'ALERTA' },
    truco: { mark: '●', label: 'CONSEJO' },
    verifica: { mark: '?', label: 'COMPRUEBA EN EL CENTRO' },
    pregunta: { mark: '→', label: 'PARA PENSAR' }
  };

  /* ---------- Almacenamiento (siempre con try/catch) ---------- */
  var KEY_LEIDOS = 'rotacion-ap:leidos:v1';
  var KEY_CHECK = 'rotacion-ap:checklist:v1';
  var memoria = {};

  function cargar(key) {
    try {
      var v = window.localStorage.getItem(key);
      if (v) {
        var o = JSON.parse(v);
        if (o && typeof o === 'object' && !Array.isArray(o)) { memoria[key] = o; return o; }
      }
    } catch (e) { /* almacenamiento bloqueado o corrupto: seguimos en memoria */ }
    return memoria[key] || (memoria[key] = {});
  }

  function guardar(key, obj) {
    memoria[key] = obj;
    try { window.localStorage.setItem(key, JSON.stringify(obj)); } catch (e) { /* sin persistencia */ }
  }

  function leidos() { return cargar(KEY_LEIDOS); }
  function checks() { return cargar(KEY_CHECK); }

  function progresoBloque(b) {
    var l = leidos(), n = 0;
    b.temas.forEach(function (t) { if (l[b.id + '/' + t.id]) n++; });
    return { hechos: n, total: b.temas.length };
  }

  /* ---------- Utilidades ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function normalizar(s) {
    return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  }

  function fechaCorta(iso) {
    try {
      var d = new Date(iso);
      if (isNaN(d.getTime())) return '';
      return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch (e) { return ''; }
  }

  function esStandalone() {
    try {
      return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
    } catch (e) { return false; }
  }

  function $(sel, root) { return (root || document).querySelector(sel); }

  /* ---------- Router ---------- */
  var main = $('#main');
  var topbarTitle = $('#topbar-title');
  var btnBack = $('#btn-back');
  var btnPrint = $('#btn-print');
  var pila = [];           // historial propio para que "atrás" sea natural
  var rutaActual = null;
  var estadoBusqueda = { q: '' };

  function parseHash() {
    var h = window.location.hash.replace(/^#\/?/, '');
    var qi = h.indexOf('?');
    var path = qi >= 0 ? h.slice(0, qi) : h;
    var parts = path.split('/').filter(Boolean).map(function (p) {
      try { return decodeURIComponent(p); } catch (e) { return p; }
    });
    return parts;
  }

  function irA(hash) { window.location.hash = hash; }

  function padreDe(parts) {
    if (parts[0] === 'guia' && parts.length === 3) return '#/guia/' + encodeURIComponent(parts[1]);
    if (parts[0] === 'guia' && parts.length === 2) return '#/guia';
    return null;
  }

  function router() {
    var parts = parseHash();
    if (parts.length === 0) { window.location.replace('#/inicio'); return; }

    var hash = window.location.hash;
    if (pila.length >= 2 && pila[pila.length - 2] === hash) pila.pop(); else if (pila[pila.length - 1] !== hash) pila.push(hash);

    document.body.classList.remove('printing-checklist');

    var vista = null, titulo = 'Rotación AP', tab = parts[0], imprimir = false, padre = null, docTitle = '';

    if (parts[0] === 'inicio') {
      vista = vistaInicio(); titulo = 'Rotación AP'; docTitle = '';
    } else if (parts[0] === 'guia' && parts.length === 1) {
      vista = vistaGuia(); titulo = 'Guía'; docTitle = 'Guía';
    } else if (parts[0] === 'guia' && parts.length === 2) {
      var b = BLOQUE_POR_ID[parts[1]];
      if (!b) { window.location.replace('#/guia'); return; }
      vista = vistaBloque(b); titulo = 'Bloque ' + b.n; padre = padreDe(parts); docTitle = b.titulo;
    } else if (parts[0] === 'guia' && parts.length === 3) {
      var b2 = BLOQUE_POR_ID[parts[1]];
      var ti = b2 ? b2.temas.findIndex(function (t) { return t.id === parts[2]; }) : -1;
      if (!b2 || ti < 0) { window.location.replace(b2 ? '#/guia/' + encodeURIComponent(b2.id) : '#/guia'); return; }
      vista = vistaTema(b2, ti); titulo = 'Bloque ' + b2.n + ' · Tema ' + b2.n + '.' + (ti + 1);
      imprimir = true; padre = padreDe(parts); docTitle = b2.temas[ti].titulo;
    } else if (parts[0] === 'checklist') {
      vista = vistaChecklist(); titulo = 'Checklist'; imprimir = true; docTitle = 'Checklist';
    } else if (parts[0] === 'buscar') {
      vista = vistaBuscar(); titulo = 'Buscar'; docTitle = 'Buscar';
    } else {
      window.location.replace('#/inicio'); return;
    }

    rutaActual = { parts: parts, padre: padre };
    main.innerHTML = vista;
    topbarTitle.textContent = titulo;
    document.title = (docTitle ? docTitle + ' · ' : '') + 'Rotación AP';
    btnBack.hidden = !padre;
    btnPrint.hidden = !imprimir;
    btnPrint.setAttribute('aria-label', parts[0] === 'checklist' ? 'Exportar checklist para firma' : 'Imprimir este tema');

    document.querySelectorAll('.tabbar a').forEach(function (a) {
      if (a.getAttribute('data-tab') === tab) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });

    despuesDeRender(parts);
    window.scrollTo(0, 0);
    if (parts[0] === 'buscar') {
      var inp = $('#q'); if (inp) inp.focus();
    } else {
      try { main.focus({ preventScroll: true }); } catch (e) { main.focus(); }
    }
  }

  function despuesDeRender(parts) {
    if (parts[0] === 'guia' && parts.length === 3) {
      var cont = $('.content', main);
      var b = BLOQUE_POR_ID[parts[1]];
      if (cont) prepararContenido(cont, b);
    }
    if (parts[0] === 'buscar') {
      asegurarIndice();
      renderResultados(estadoBusqueda.q);
    }
  }

  /* ---------- Vista: Inicio ---------- */
  function vistaInicio() {
    var tubos = BLOQUES.map(function (b) {
      var p = progresoBloque(b);
      var fill = p.total ? p.hechos / p.total : 0;
      return '<a class="tube' + (fill >= 1 ? ' full' : '') + '" href="#/guia/' + encodeURIComponent(b.id) + '"' +
        ' style="--c:' + esc(b.color) + ';--fill:' + fill.toFixed(3) + '"' +
        ' aria-label="Bloque ' + b.n + ': ' + esc(b.titulo) + '. ' + p.hechos + ' de ' + p.total + ' temas leídos">' +
        '<span class="tube-cap"></span><span class="tube-glass"><span class="tube-liquid"></span></span>' +
        '<span class="tube-n">' + b.n + '</span></a>';
    }).join('');

    var filas = CRONO.map(function (r) {
      return '<tr><td>S' + r[0] + '</td><td>' + esc(r[1]) + '</td><td class="hito">' + esc(r[2]) + '</td></tr>';
    }).join('');

    var instalar = esStandalone() ? '' :
      '<section class="card install" aria-labelledby="install-h">' +
      '<h2 id="install-h">Instalar en el móvil</h2>' +
      '<p class="small muted" style="margin:0">Así se abre como una app y funciona sin conexión.</p>' +
      '<p class="os">iPhone (Safari)</p><ol><li>Toca <strong>Compartir</strong> (el cuadrado con la flecha).</li><li>Elige <strong>Añadir a pantalla de inicio</strong>.</li></ol>' +
      '<p class="os">Android (Chrome)</p><ol><li>Abre el menú <strong>⋮</strong>.</li><li>Toca <strong>Instalar app</strong> o <strong>Añadir a pantalla de inicio</strong>.</li></ol>' +
      '</section>';

    return '' +
      '<section class="hero">' +
      '<p class="eyebrow">Centro de Salud Palma Norte · Apuntes para estudiantes de enfermería</p>' +
      '<h1>Tu rotación en Atención Primaria</h1>' +
      '<p>Seis semanas, nueve bloques. Lo que vas a ver, lo que se espera de ti y cómo llevar la cuenta.</p>' +
      '</section>' +
      '<section class="gradilla" aria-label="Progreso por bloque">' +
      '<div class="gradilla-rack">' + tubos + '</div>' +
      '<p class="note gradilla-note">Cada bloque lleva el color de un tapón. Los tubos se llenan a medida que lees.</p>' +
      '</section>' +
      '<h2 class="section-title">Cronograma de la rotación</h2>' +
      '<div class="card crono-wrap"><table class="crono"><thead><tr><th>Sem.</th><th>Foco</th><th>Hito</th></tr></thead><tbody>' + filas + '</tbody></table></div>' +
      instalar +
      '<p class="disclaimer">Material docente elaborado por la tutora. No sustituye los protocolos vigentes del centro ni del SERMAS. Dosis, cifras y calendarios son referencias de estudio: confírmalos siempre con el documento oficial en vigor.</p>';
  }

  /* ---------- Vista: Guía ---------- */
  function vistaGuia() {
    var cards = BLOQUES.map(function (b) {
      var p = progresoBloque(b);
      var pct = p.total ? Math.round(100 * p.hechos / p.total) : 0;
      return '<a class="card bloque-card" href="#/guia/' + encodeURIComponent(b.id) + '" style="--bc:' + esc(b.color) + '">' +
        '<span class="num" aria-hidden="true">' + b.n + '</span>' +
        '<h2><span class="sr-only">Bloque ' + b.n + ': </span>' + esc(b.titulo) + '</h2>' +
        '<p class="sub">' + esc(b.sub) + '</p>' +
        '<div class="meta"><span>' + esc(b.semana) + '</span><span class="progress" aria-hidden="true"><span style="width:' + pct + '%"></span></span><span>' + p.hechos + ' de ' + p.total + ' temas leídos</span></div>' +
        '</a>';
    }).join('');
    return '<p class="eyebrow">Guía · 9 bloques</p><div class="bloques">' + cards + '</div>';
  }

  function vistaBloque(b) {
    var p = progresoBloque(b);
    var pct = p.total ? Math.round(100 * p.hechos / p.total) : 0;
    var l = leidos();
    var temas = b.temas.map(function (t, i) {
      var hecho = !!l[b.id + '/' + t.id];
      return '<li><a class="tema-row' + (hecho ? ' read' : '') + '" href="#/guia/' + encodeURIComponent(b.id) + '/' + encodeURIComponent(t.id) + '" style="--bc:' + esc(b.color) + '">' +
        '<span class="idx" aria-hidden="true">' + b.n + '.' + (i + 1) + '</span>' +
        '<span class="t"><span class="sr-only">Tema ' + b.n + '.' + (i + 1) + ': </span>' + esc(t.titulo) + (hecho ? '<span class="done" role="img" aria-label="Leído"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>' : '') + '</span>' +
        '<span class="end"><span class="mins">' + (t.min || '?') + ' min</span></span>' +
        '</a></li>';
    }).join('');
    return '<header class="bloque-head" style="--bc:' + esc(b.color) + '">' +
      '<p class="kicker">Bloque ' + b.n + ' · Tapón ' + esc(b.tapon) + '</p>' +
      '<h1>' + esc(b.titulo) + '</h1>' +
      '<p class="sub">' + esc(b.sub) + '</p>' +
      '<div class="meta"><span>' + esc(b.semana) + '</span><span class="progress" aria-hidden="true"><span style="width:' + pct + '%"></span></span><span>' + p.hechos + ' de ' + p.total + ' leídos</span></div>' +
      '</header>' +
      '<ol class="temas">' + temas + '</ol>';
  }

  /* ---------- Vista: Tema ---------- */
  function vistaTema(b, i) {
    var t = b.temas[i];
    var clave = b.id + '/' + t.id;
    var cuando = leidos()[clave];
    var bi = BLOQUES.indexOf(b);

    var prev = '', next = '';
    if (i > 0) {
      var tp = b.temas[i - 1];
      prev = '<a class="card prev" href="#/guia/' + encodeURIComponent(b.id) + '/' + encodeURIComponent(tp.id) + '"><span class="dir">← Anterior</span><span class="lbl">' + esc(tp.titulo) + '</span></a>';
    } else if (bi > 0 && BLOQUES[bi - 1].temas.length) {
      var bp = BLOQUES[bi - 1], tpp = bp.temas[bp.temas.length - 1];
      prev = '<a class="card prev" href="#/guia/' + encodeURIComponent(bp.id) + '/' + encodeURIComponent(tpp.id) + '"><span class="dir">← Bloque ' + bp.n + '</span><span class="lbl block-jump">' + esc(tpp.titulo) + '</span></a>';
    } else {
      prev = '<span class="spacer" aria-hidden="true"></span>';
    }
    if (i < b.temas.length - 1) {
      var tn = b.temas[i + 1];
      next = '<a class="card next" href="#/guia/' + encodeURIComponent(b.id) + '/' + encodeURIComponent(tn.id) + '"><span class="dir">Siguiente →</span><span class="lbl">' + esc(tn.titulo) + '</span></a>';
    } else if (bi < BLOQUES.length - 1 && BLOQUES[bi + 1].temas.length) {
      var bn = BLOQUES[bi + 1], tnn = bn.temas[0];
      next = '<a class="card next" href="#/guia/' + encodeURIComponent(bn.id) + '/' + encodeURIComponent(tnn.id) + '"><span class="dir">Siguiente bloque →</span><span class="lbl block-jump">' + bn.n + ' · ' + esc(bn.titulo) + '</span></a>';
    } else {
      next = '<a class="card next" href="#/checklist"><span class="dir">Has terminado la guía →</span><span class="lbl block-jump">Ir a la checklist</span></a>';
    }

    return '<article class="reader" style="--bc:' + esc(b.color) + '">' +
      '<div class="print-head" aria-hidden="true">Guía de rotación en Atención Primaria · Bloque ' + b.n + ' · Tema ' + b.n + '.' + (i + 1) + '</div>' +
      '<div class="print-foot" aria-hidden="true">Material docente · No sustituye los protocolos vigentes</div>' +
      '<header class="reader-head">' +
      '<p class="kicker">Bloque ' + b.n + ' · Tema ' + b.n + '.' + (i + 1) + '</p>' +
      '<h1>' + esc(t.titulo) + '</h1>' +
      '<p class="meta">' + esc(b.titulo) + ' · ' + (t.min || '?') + ' min de lectura</p>' +
      '<div class="reader-rule" aria-hidden="true"></div>' +
      '</header>' +
      '<div class="content">' + t.html + '</div>' +
      '<footer class="reader-foot">' +
      '<label class="check read-toggle card' + (cuando ? ' done' : '') + '"><input type="checkbox" id="read-toggle" data-clave="' + esc(clave) + '" data-bloque-n="' + b.n + '"' + (cuando ? ' checked' : '') + '>' +
      '<span class="check-text">He leído este tema<span class="when" id="read-when">' + (cuando ? 'Marcado el ' + esc(fechaCorta(cuando)) : 'Marca la casilla para llenar el tubo del bloque ' + b.n) + '</span></span></label>' +
      '<nav class="pager" aria-label="Navegación entre temas">' + prev + next + '</nav>' +
      '<div class="reader-actions"><button type="button" class="btn" data-action="print">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8V4h10v4M7 17H4V10h16v7h-3M7 14h10v6H7z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>' +
      'Imprimir este tema</button></div>' +
      '</footer>' +
      '</article>';
  }

  /* Transformaciones de presentación sobre el HTML del tema (no tocan los archivos de contenido). */
  function prepararContenido(cont, b) {
    // 1. Tablas sueltas → dentro de .tbl-scroll
    cont.querySelectorAll('table').forEach(function (t) {
      var p = t.parentElement;
      if (!p || !p.classList.contains('tbl-scroll')) {
        var w = document.createElement('div'); w.className = 'tbl-scroll';
        t.parentNode.insertBefore(w, t); w.appendChild(t);
      }
    });
    // 2. Primera fila de <th> → <thead> (se repite en cada página al imprimir)
    cont.querySelectorAll('table').forEach(function (t) {
      if (t.tHead) return;
      var first = t.rows[0];
      if (first && first.querySelector('th') && !first.querySelector('td')) {
        var thead = t.createTHead(); thead.appendChild(first);
      }
    });
    // 3. Avisos: cabecera con marca + categoría (+ etiqueta propia) y cuerpo
    cont.querySelectorAll('.callout').forEach(function (c) {
      var cat = null;
      Object.keys(CALLOUTS).forEach(function (k) { if (!cat && c.classList.contains(k)) cat = k; });
      if (!cat) return;
      var def = CALLOUTS[cat];
      var lbl = null;
      Array.prototype.some.call(c.children, function (ch) { if (ch.classList && ch.classList.contains('lbl')) { lbl = ch; return true; } return false; });
      var head = document.createElement('div'); head.className = 'callout-head';
      var body = document.createElement('div'); body.className = 'callout-body';
      while (c.firstChild) {
        var n = c.firstChild;
        if (n === lbl) { c.removeChild(n); continue; }
        body.appendChild(n);
      }
      head.innerHTML = '<span class="mark" aria-hidden="true">' + esc(def.mark) + '</span><span class="cat">' + esc(def.label) + '</span>';
      if (lbl) {
        var txt = lbl.textContent.replace(/\s+/g, ' ').trim();
        if (txt && normalizar(txt) !== normalizar(def.label)) {
          head.insertAdjacentHTML('beforeend', '<span class="sep" aria-hidden="true">·</span>');
          lbl.textContent = txt;
          head.appendChild(lbl);
        }
      }
      c.appendChild(head); c.appendChild(body);
      c.setAttribute('role', 'note');
    });
  }

  /* ---------- Vista: Checklist ---------- */
  function gruposOrdenados() {
    var orden = {};
    BLOQUES.forEach(function (b, i) { orden[b.id] = i; });
    return CHECKLIST.slice().sort(function (a, b) {
      var oa = orden[a.bloque], ob = orden[b.bloque];
      if (oa == null) oa = 99; if (ob == null) ob = 99;
      return oa - ob;
    });
  }

  function totalesChecklist() {
    var c = checks(), n = 0, total = 0;
    CHECKLIST.forEach(function (g) { g.items.forEach(function (it) { total++; if (c[it.id]) n++; }); });
    return { hechos: n, total: total };
  }

  function etiquetaNivel(nivel) {
    var d = NIVELES[nivel] || { corto: nivel, nombre: nivel };
    return '<span class="tag tag-' + esc(d.corto) + '"><span aria-hidden="true">' + esc(d.corto) + '</span><span class="sr-only">Nivel esperado: ' + esc(d.nombre) + '</span></span>';
  }

  function vistaChecklist() {
    var c = checks();
    var tot = totalesChecklist();
    var pct = tot.total ? Math.round(100 * tot.hechos / tot.total) : 0;

    var grupos = gruposOrdenados().map(function (g) {
      var b = BLOQUE_POR_ID[g.bloque];
      var color = b ? b.color : '#6C4FA1';
      var num = b ? b.n : '·';
      var hechos = g.items.filter(function (it) { return !!c[it.id]; }).length;
      var items = g.items.map(function (it) {
        var on = !!c[it.id];
        return '<li class="cl-item"><label class="check' + (on ? ' done' : '') + '">' +
          '<input type="checkbox" data-item="' + esc(it.id) + '"' + (on ? ' checked' : '') + '>' +
          '<span class="check-text"><span>' + esc(it.texto) + '</span>' + etiquetaNivel(it.nivel) + '</span>' +
          '</label></li>';
      }).join('');
      return '<section class="cl-group" style="--bc:' + esc(color) + '" aria-labelledby="clg-' + esc(g.bloque) + '">' +
        '<div class="cl-group-head"><span class="num" aria-hidden="true">' + num + '</span><h2 id="clg-' + esc(g.bloque) + '">' + esc(g.titulo) + '</h2>' +
        '<span class="count" data-count="' + esc(g.bloque) + '">' + hechos + '/' + g.items.length + '</span></div>' +
        '<ul class="list-plain">' + items + '</ul></section>';
    }).join('');

    return '<section class="cl-intro">' +
      '<p class="eyebrow">Checklist de competencias</p>' +
      '<p>Esta lista te dice qué se espera que hayas observado o hecho al terminar. Márcala tú misma para llevar la cuenta; la evaluación la hace tu tutora.</p>' +
      '<div class="legend" aria-label="Leyenda de niveles"><span>' + etiquetaNivel('O') + ' observar</span><span>' + etiquetaNivel('A') + ' hacer acompañada</span><span>' + etiquetaNivel('S') + ' hacer con supervisión indirecta</span></div>' +
      '</section>' +
      '<section class="card cl-progress" aria-label="Progreso global">' +
      '<div class="row"><span class="big"><span id="cl-n">' + tot.hechos + '</span> de ' + tot.total + '<small>competencias marcadas</small></span><span class="mono small muted" id="cl-pct">' + pct + '%</span></div>' +
      '<div class="progress" aria-hidden="true"><span id="cl-bar" style="width:' + pct + '%"></span></div>' +
      '</section>' +
      grupos +
      '<div class="cl-actions">' +
      '<button type="button" class="btn btn-primary" data-action="export">Exportar para firma (PDF)</button>' +
      '<button type="button" class="btn btn-danger" data-action="reset">Reiniciar lista</button>' +
      '<p class="note">Al exportar se abre el diálogo de impresión: elige «Guardar como PDF» (o «Imprimir») en tu móvil u ordenador.</p>' +
      '</div>' +
      '<p class="note privacy">Tu progreso se guarda solo en este teléfono o navegador. No hay servidor ni cuenta: nadie más lo ve.</p>';
  }

  function actualizarProgresoChecklist() {
    var tot = totalesChecklist();
    var pct = tot.total ? Math.round(100 * tot.hechos / tot.total) : 0;
    var n = $('#cl-n'), p = $('#cl-pct'), bar = $('#cl-bar');
    if (n) n.textContent = tot.hechos;
    if (p) p.textContent = pct + '%';
    if (bar) bar.style.width = pct + '%';
    var c = checks();
    CHECKLIST.forEach(function (g) {
      var el = main.querySelector('[data-count="' + g.bloque + '"]');
      if (el) el.textContent = g.items.filter(function (it) { return !!c[it.id]; }).length + '/' + g.items.length;
    });
  }

  /* Hoja de firma (impresión) */
  function renderChecklistImpresion() {
    var c = checks();
    var tot = totalesChecklist();
    var hoy = fechaCorta(new Date().toISOString());
    var grupos = gruposOrdenados().map(function (g) {
      var b = BLOQUE_POR_ID[g.bloque];
      var filas = g.items.map(function (it) {
        var on = !!c[it.id];
        return '<tr><td class="col-box"><span class="box' + (on ? ' on' : '') + '" role="img" aria-label="' + (on ? 'Marcado' : 'Sin marcar') + '"></span></td>' +
          '<td>' + esc(it.texto) + '</td><td class="col-nivel">' + esc(it.nivel) + '</td><td class="col-val"><span class="box"></span></td></tr>';
      }).join('');
      return '<section class="pc-group"><h2><span class="n">' + (b ? b.n : '') + '</span>' + esc(g.titulo) + '</h2>' +
        '<table><thead><tr><th class="col-box">Alumna</th><th>Competencia</th><th class="col-nivel">Nivel</th><th class="col-val">Validado tutora</th></tr></thead><tbody>' + filas + '</tbody></table></section>';
    }).join('');

    return '<h1>Checklist de competencias · Rotación de Atención Primaria</h1>' +
      '<div class="pc-meta">' +
      '<div><span class="lbl">Alumna</span> ____________________________</div>' +
      '<div><span class="lbl">Tutora</span> Ana Domínguez Rodríguez</div>' +
      '<div><span class="lbl">Centro</span> Centro de Salud Palma Norte</div>' +
      '<div><span class="lbl">Fechas de rotación</span> ______________________</div>' +
      '</div>' +
      '<p class="pc-legend">Nivel esperado al final de la rotación: O = observar · A = hacer acompañada · S = hacer con supervisión indirecta. La columna «Alumna» refleja lo que la alumna ha marcado en la app; «Validado tutora» se rellena a mano.</p>' +
      '<p class="pc-summary">Marcadas por la alumna: ' + tot.hechos + ' de ' + tot.total + ' · Exportado el ' + esc(hoy) + '</p>' +
      grupos +
      '<div class="pc-sign"><div>Firma de la alumna<div class="space"></div><div class="date">Fecha: ____ / ____ / ________</div></div>' +
      '<div>Firma de la tutora<div class="space"></div><div class="date">Fecha: ____ / ____ / ________</div></div></div>' +
      '<p class="pc-foot">Material docente · Centro de Salud Palma Norte · No sustituye los protocolos vigentes ni la evaluación oficial.</p>';
  }

  function exportarChecklist() {
    var el = $('#print-checklist');
    if (!el) return;
    el.innerHTML = renderChecklistImpresion();
    document.body.classList.add('printing-checklist');
    var limpiar = function () {
      document.body.classList.remove('printing-checklist');
      window.removeEventListener('afterprint', limpiar);
    };
    window.addEventListener('afterprint', limpiar);
    try {
      var mq = window.matchMedia('print');
      var h = function (e) { if (!e.matches) { limpiar(); mq.removeEventListener ? mq.removeEventListener('change', h) : mq.removeListener(h); } };
      mq.addEventListener ? mq.addEventListener('change', h) : mq.addListener(h);
    } catch (e) { /* sin matchMedia */ }
    setTimeout(function () { window.print(); }, 60);
  }

  function imprimirTema() {
    document.body.classList.remove('printing-checklist');
    window.print();
  }

  /* ---------- Vista: Buscar ---------- */
  var INDICE = null;

  function normalizarMismaLongitud(s) {
    // Normaliza carácter a carácter manteniendo la longitud UTF-16 para poder resaltar sobre el original.
    var out = '';
    for (var i = 0; i < s.length; i++) {
      var ch = s[i];
      var l = ch.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
      out += (l.length === 1) ? l : ch.toLowerCase().length === 1 ? ch.toLowerCase() : ch;
    }
    return out;
  }

  function textoPlano(html) {
    var h = String(html || '')
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<\/(td|th|li|p|h3|h4|tr|div)>/gi, ' </$1>');
    var tpl = document.createElement('template');
    tpl.innerHTML = h;
    return (tpl.content.textContent || '').replace(/\s+/g, ' ').trim();
  }

  function construirIndice() {
    if (INDICE) return INDICE;
    INDICE = [];
    BLOQUES.forEach(function (b) {
      b.temas.forEach(function (t, i) {
        var texto = textoPlano(t.html);
        INDICE.push({
          bloque: b, tema: t, idx: i,
          texto: texto,
          textoN: normalizarMismaLongitud(texto),
          tituloN: normalizar(t.titulo),
          bloqueN: normalizar(b.titulo)
        });
      });
    });
    return INDICE;
  }

  function asegurarIndice() { if (!INDICE) construirIndice(); }

  function vistaBuscar() {
    return '<div class="search-box"><label class="sr-only" for="q">Buscar en la guía</label>' +
      '<input id="q" type="search" placeholder="Buscar en la guía…" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value="' + esc(estadoBusqueda.q) + '">' +
      '<button type="button" class="clear" data-action="clear-search" aria-label="Borrar búsqueda"' + (estadoBusqueda.q ? '' : ' hidden') + '><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></button></div>' +
      '<p class="search-status" id="search-status" aria-live="polite"></p>' +
      '<ul class="results" id="results"></ul>';
  }

  function buscar(q) {
    var palabras = normalizar(q).split(/\s+/).filter(function (w) { return w.length > 0; });
    if (!palabras.length) return [];
    var res = [];
    construirIndice().forEach(function (e) {
      var score = 0;
      for (var i = 0; i < palabras.length; i++) {
        var w = palabras[i];
        var enTitulo = e.tituloN.indexOf(w) >= 0, enBloque = e.bloqueN.indexOf(w) >= 0, enTexto = e.textoN.indexOf(w) >= 0;
        if (!enTitulo && !enBloque && !enTexto) { score = -1; break; }
        if (enTitulo) score += 6;
        if (enBloque) score += 2;
        if (enTexto) {
          var c = 0, p = -1;
          while ((p = e.textoN.indexOf(w, p + 1)) >= 0 && c < 8) c++;
          score += 1 + c * 0.25;
        }
      }
      if (score > 0) res.push({ e: e, score: score, palabras: palabras });
    });
    res.sort(function (a, b) { return b.score - a.score || a.e.bloque.n - b.e.bloque.n || a.e.idx - b.e.idx; });
    return res.slice(0, 40);
  }

  function fragmento(e, palabras) {
    var n = e.textoN, t = e.texto;
    var pos = -1;
    for (var i = 0; i < palabras.length && pos < 0; i++) pos = n.indexOf(palabras[i]);
    if (pos < 0) return esc(t.slice(0, 140)) + (t.length > 140 ? '…' : '');
    var ini = Math.max(0, pos - 55), fin = Math.min(t.length, pos + 105);
    if (ini > 0) { var sp = n.lastIndexOf(' ', ini + 15); if (sp > 0 && sp >= ini - 15) ini = sp + 1; }
    if (fin < t.length) { var sp2 = n.indexOf(' ', fin - 10); if (sp2 > 0 && sp2 <= fin + 15) fin = sp2; }
    var segN = n.slice(ini, fin), segT = t.slice(ini, fin);
    var rangos = [];
    palabras.forEach(function (w) {
      var p = -1;
      while ((p = segN.indexOf(w, p + 1)) >= 0) rangos.push([p, p + w.length]);
    });
    rangos.sort(function (a, b) { return a[0] - b[0]; });
    var out = '', cur = 0;
    rangos.forEach(function (r) {
      if (r[0] < cur) { if (r[1] > cur) { out += '<mark>' + esc(segT.slice(cur, r[1])) + '</mark>'; cur = r[1]; } return; }
      out += esc(segT.slice(cur, r[0])) + '<mark>' + esc(segT.slice(r[0], r[1])) + '</mark>';
      cur = r[1];
    });
    out += esc(segT.slice(cur));
    return (ini > 0 ? '…' : '') + out + (fin < t.length ? '…' : '');
  }

  function resaltarTitulo(titulo, palabras) {
    var n = normalizarMismaLongitud(titulo), rangos = [];
    palabras.forEach(function (w) { var p = -1; while ((p = n.indexOf(w, p + 1)) >= 0) rangos.push([p, p + w.length]); });
    if (!rangos.length) return esc(titulo);
    rangos.sort(function (a, b) { return a[0] - b[0]; });
    var out = '', cur = 0;
    rangos.forEach(function (r) {
      if (r[0] < cur) { if (r[1] > cur) { out += '<mark>' + esc(titulo.slice(cur, r[1])) + '</mark>'; cur = r[1]; } return; }
      out += esc(titulo.slice(cur, r[0])) + '<mark>' + esc(titulo.slice(r[0], r[1])) + '</mark>'; cur = r[1];
    });
    return out + esc(titulo.slice(cur));
  }

  function renderResultados(q) {
    var ul = $('#results'), st = $('#search-status');
    if (!ul || !st) return;
    var clear = $('[data-action="clear-search"]', main);
    if (clear) clear.hidden = !q;
    var qq = String(q || '').trim();
    if (!qq) {
      st.textContent = '';
      ul.innerHTML = '<li class="search-hint"><p>Busca por tema, técnica o palabra clave. No hace falta poner tildes.</p><p class="note">Ejemplos: hemólisis · Barthel · monofilamento · manguito · calendario vacunal</p></li>';
      return;
    }
    var res = buscar(qq);
    st.textContent = res.length === 0 ? 'Sin resultados para «' + qq + '»' : (res.length === 1 ? '1 resultado' : res.length + ' resultados') + (res.length >= 40 ? ' (mostrando los primeros 40)' : '');
    if (!res.length) { ul.innerHTML = '<li class="empty">Prueba con otra palabra o con una más corta.</li>'; return; }
    ul.innerHTML = res.map(function (r) {
      var e = r.e, b = e.bloque, t = e.tema;
      return '<li><a class="result" href="#/guia/' + encodeURIComponent(b.id) + '/' + encodeURIComponent(t.id) + '" style="--bc:' + esc(b.color) + '">' +
        '<div class="path">Bloque ' + b.n + ' · ' + esc(b.titulo) + '<span class="sep" aria-hidden="true">›</span>Tema ' + b.n + '.' + (e.idx + 1) + '</div>' +
        '<div class="title">' + resaltarTitulo(t.titulo, r.palabras) + '</div>' +
        '<div class="snippet">' + fragmento(e, r.palabras) + '</div>' +
        '</a></li>';
    }).join('');
  }

  var timerBusqueda = null;
  main.addEventListener('input', function (ev) {
    if (ev.target && ev.target.id === 'q') {
      estadoBusqueda.q = ev.target.value;
      clearTimeout(timerBusqueda);
      timerBusqueda = setTimeout(function () { renderResultados(estadoBusqueda.q); }, 60);
    }
  });

  /* ---------- Eventos ---------- */
  main.addEventListener('change', function (ev) {
    var el = ev.target;
    if (!el || el.type !== 'checkbox') return;
    var ahora = new Date().toISOString();
    if (el.id === 'read-toggle') {
      var clave = el.getAttribute('data-clave');
      var l = leidos();
      if (el.checked) l[clave] = ahora; else delete l[clave];
      guardar(KEY_LEIDOS, l);
      var when = $('#read-when');
      var lbl = el.closest('label');
      if (lbl) lbl.classList.toggle('done', el.checked);
      if (when) when.textContent = el.checked ? 'Marcado el ' + fechaCorta(ahora) : 'Marca la casilla para llenar el tubo del bloque ' + (el.getAttribute('data-bloque-n') || '');
      return;
    }
    var item = el.getAttribute('data-item');
    if (item) {
      var c = checks();
      if (el.checked) c[item] = ahora; else delete c[item];
      guardar(KEY_CHECK, c);
      var lab = el.closest('label');
      if (lab) lab.classList.toggle('done', el.checked);
      actualizarProgresoChecklist();
    }
  });

  main.addEventListener('click', function (ev) {
    var btn = ev.target.closest('[data-action]');
    if (!btn) return;
    var a = btn.getAttribute('data-action');
    if (a === 'print') imprimirTema();
    else if (a === 'export') exportarChecklist();
    else if (a === 'reset') {
      if (window.confirm('¿Reiniciar la checklist? Se desmarcarán todos los ítems en este dispositivo.')) {
        guardar(KEY_CHECK, {});
        router();
      }
    } else if (a === 'clear-search') {
      estadoBusqueda.q = '';
      var inp = $('#q'); if (inp) { inp.value = ''; inp.focus(); }
      renderResultados('');
    }
  });

  btnBack.addEventListener('click', function () {
    var padre = rutaActual && rutaActual.padre;
    if (!padre) return;
    if (pila.length >= 2 && pila[pila.length - 2] === padre) window.history.back(); else irA(padre);
  });

  btnPrint.addEventListener('click', function () {
    if (!rutaActual) return;
    if (rutaActual.parts[0] === 'checklist') exportarChecklist(); else imprimirTema();
  });

  window.addEventListener('hashchange', router);
  router();

  // Índice de búsqueda en tiempo muerto, para que la primera búsqueda sea instantánea.
  var idle = window.requestIdleCallback || function (fn) { return setTimeout(fn, 400); };
  idle(function () { construirIndice(); });

  // Modo standalone: si cambia (p. ej. tras instalar), la portada se re-renderiza al volver.
  try {
    window.matchMedia('(display-mode: standalone)').addEventListener('change', function () {
      if (rutaActual && rutaActual.parts[0] === 'inicio') router();
    });
  } catch (e) { /* navegadores antiguos */ }
})();
