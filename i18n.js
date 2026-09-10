/* devotion2vote · idioma ES/EN de la pantalla.
   Cómo funciona: la página se escribe en español (como siempre). Este archivo guarda, para cada texto en
   español, su versión en inglés. Cuando el visitante elige EN, se sustituyen los textos en pantalla; al
   volver a ES se restauran los originales. No toca datos, cifras ni el funcionamiento: solo las palabras.
   Los textos que vienen del motor (respuestas de DANTE, nombres de preguntas, informes) siguen en español.
   Claves con {0}, {1}… = frases con partes variables (cifras, fechas, nombres). */
(function(){
'use strict';
var D={
/* ---------- portada (index) ---------- */
"Devotion2Vote — el ciclo electoral completo, cada mes":"Devotion2Vote — the complete electoral cycle, every month",
"Mi campaña":"My campaign",
"Acceso":"Sign in",
"Dawhole System · módulo electoral":"Dawhole System · electoral module",
"El ciclo electoral completo,":"The complete electoral cycle,",
"cada mes":"every month",
", para quien no puede pagarlo por partes.":", for those who cannot afford it piece by piece.",
"Devotion2Vote recibe bases de datos y devuelve transferencia de voto, segmentación en tres niveles, estrategia, piezas, pauta y medición. Un solo sistema con las herramientas encadenadas, y una persona que firma cada etapa.":"Devotion2Vote takes in databases and returns vote transfer, three-level segmentation, strategy, creative pieces, media plan and measurement. One system with its tools chained together, and a person who signs off on every stage.",
"Entrar a la Sala de Control":"Enter the Control Room",
"Sala de clientes · Mi campaña":"Client room · My campaign",
"Instalar la app en tu móvil":"Install the app on your phone",
"Datos":"Data",
"Bases de encuesta, resultados oficiales, censo y padrón. Todo con su clase epistémica.":"Survey databases, official results, census and electoral roll. Each with its epistemic class.",
"Análisis":"Analysis",
"Transferencia de voto, identidad política, intención, problemáticas. VOTE-TRANSFER · metodología Salom.":"Vote transfer, political identity, intention, issues. VOTE-TRANSFER · Salom methodology.",
"Segmentos":"Segments",
"Audiencias, microsegmentos y nanosegmentos. Celdas, nunca personas.":"Audiences, micro-segments and nano-segments. Cells, never people.",
"Estrategia":"Strategy",
"Estrategia general y tarjeta por nanosegmento: qué decir, cómo, por dónde, cuándo.":"Overall strategy and a card per nano-segment: what to say, how, through which channel, when.",
"Piezas":"Pieces",
"Guiones y piezas de alta calidad con IA, siempre revisadas y con procedencia.":"High-quality scripts and pieces made with AI, always reviewed and with provenance.",
"Pauta":"Media plan",
"Plan por tarjeta con los instrumentos oficiales de cada plataforma. Preparar no es publicar.":"A plan per card using each platform's official tools. Preparing is not publishing.",
"Medición":"Measurement",
"Eficiencia y eficacia por segmento; el aprendizaje reescribe el ciclo siguiente.":"Efficiency and effectiveness per segment; what is learned rewrites the next cycle.",
"Para quién":"Who it is for",
"Municipios, candidaturas y equipos de estrategia con intención electoral y sin presupuesto para investigación ad hoc. Acceso mensual, en ciclos cortos, con datos nacionales y regionales generados por la casa en cada país donde opera.":"Municipalities, candidacies and strategy teams with electoral ambitions and no budget for ad hoc research. Monthly access, in short cycles, with national and regional data produced in-house in every country where it operates.",
"Detrás está DANTE, la inteligencia analítica de Dawhole, entrenada en el método por quien lo diseñó y supervisada por personas con nombre.":"Behind it is DANTE, Dawhole's analytical intelligence, trained in the method by the person who designed it and supervised by people with names.",
"Cómo trabaja":"How it works",
"«El método no se memoriza: se inscribe.»":"“The method is not memorised: it is written in.”",
"Cada procedimiento queda escrito como un paso ejecutable y cada corrección como una regla con prueba. Los nanosegmentos son celdas territoriales con tamaño mínimo declarado, nunca personas. Las piezas generadas con IA llevan registro de procedencia. La pauta se prepara en el sistema y la lanza una persona, dentro de la ley de cada país.":"Every procedure is written down as an executable step and every correction as a rule with a test. Nano-segments are territorial cells with a declared minimum size, never people. AI-generated pieces carry a provenance record. The media plan is prepared in the system and launched by a person, within the law of each country.",
"Devotion2Vote · Dawhole Lab · La Casa de Investigación":"Devotion2Vote · Dawhole Lab · La Casa de Investigación",
/* ---------- página de la app (app.html) ---------- */
"Instalar la app · Devotion2Vote":"Install the app · Devotion2Vote",
"Inicio":"Home",
"Lleva tu campaña":"Carry your campaign",
"en el bolsillo":"in your pocket",
"La app de Devotion2Vote se instala desde aquí mismo, en un minuto y sin pasar por la tienda. Queda con su icono en tu móvil y se actualiza sola.":"The Devotion2Vote app installs right from here, in a minute and without going through an app store. It gets its own icon on your phone and updates itself.",
"Instalar la app":"Install the app",
"Gratis · sin tienda · se abre a pantalla completa":"Free · no app store · opens full screen",
"La app ya está instalada.":"The app is already installed.",
"Ábrela desde el icono «Mi campaña» en tu pantalla de inicio. Ya puedes cerrar esta página.":"Open it from the “My campaign” icon on your home screen. You can close this page now.",
"Cómo se instala":"How to install it",
"Elige tu móvil. Tarda menos de un minuto.":"Choose your phone. It takes less than a minute.",
"Abre esta página en Safari":"Open this page in Safari",
"Si la abriste desde WhatsApp u otra app, toca los tres puntos o el icono de compartir y elige «Abrir en Safari».":"If you opened it from WhatsApp or another app, tap the three dots or the share icon and choose “Open in Safari”.",
"Toca el botón de compartir":"Tap the share button",
"Es el cuadrado con la flecha hacia arriba, en la barra de abajo de Safari.":"It is the square with the upward arrow, in Safari's bottom bar.",
"Baja y toca «Añadir a pantalla de inicio»":"Scroll down and tap “Add to Home Screen”",
"Aparece en la lista de opciones; si no lo ves, desliza hacia abajo dentro del menú.":"It appears in the list of options; if you don't see it, scroll down inside the menu.",
"Toca «Añadir»":"Tap “Add”",
"Arriba a la derecha. Listo: el icono «Mi campaña» ya está en tu pantalla de inicio.":"Top right. Done: the “My campaign” icon is now on your home screen.",
"Toca el botón «Instalar la app» de arriba":"Tap the “Install the app” button above",
"Chrome te preguntará si quieres instalar; toca «Instalar». Eso es todo.":"Chrome will ask whether you want to install; tap “Install”. That's it.",
"Si el botón no hace nada":"If the button does nothing",
"Abre esta página en Chrome, toca los tres puntos (arriba a la derecha) y elige «Añadir a pantalla de inicio» o «Instalar aplicación».":"Open this page in Chrome, tap the three dots (top right) and choose “Add to Home screen” or “Install app”.",
"Busca el icono «Mi campaña»":"Look for the “My campaign” icon",
"Está en tu pantalla de inicio o en la lista de apps. Ábrelo como cualquier otra app.":"It is on your home screen or in the app list. Open it like any other app.",
"¿Estás en el ordenador? Escanea el código con la cámara del móvil o escribe":"On a computer? Scan the code with your phone's camera or type",
"en el navegador del teléfono.":"in your phone's browser.",
"Código QR de www.devotion2vote.com/app":"QR code for www.devotion2vote.com/app",
"En iPhone se instala desde el botón de compartir de Safari: sigue los 4 pasos de abajo.":"On iPhone it installs from Safari's share button: follow the 4 steps below.",
"Abre esta página en tu móvil (escanea el código de abajo) para instalarla.":"Open this page on your phone (scan the code below) to install it.",
"Sigue los pasos de abajo: menú de Chrome → «Añadir a pantalla de inicio».":"Follow the steps below: Chrome menu → “Add to Home screen”.",
/* ---------- Mi campaña · acceso y marco ---------- */
"Mi campaña PRM · Devotion2Vote":"My campaign PRM · Devotion2Vote",
"Mi campaña {0} · Devotion2Vote":"My campaign {0} · Devotion2Vote",
"Mi campaña PRM":"My campaign PRM",
"Mi campaña {0}":"My campaign {0}",
"Devotion2Vote · Sala de clientes":"Devotion2Vote · Client room",
"Entre con el usuario y la clave que le facilitó su consultor.":"Sign in with the username and password your consultant gave you.",
"Usuario":"Username",
"Clave":"Password",
"Entrar":"Sign in",
"Todo lo que consulte queda registrado a su nombre.":"Everything you look up is logged under your name.",
"Cargando su sala…":"Loading your room…",
"Comprobando…":"Checking…",
"Su sesión caducó. Vuelva a entrar.":"Your session expired. Please sign in again.",
"El sistema se está poniendo en marcha (1-3 minutos). Espere un momento y pulse Entrar otra vez.":"The system is starting up (1–3 minutes). Wait a moment and press Sign in again.",
"No se pudo cargar la sala: {0}":"The room could not be loaded: {0}",
"Usuario o clave incorrectos. Revise mayúsculas y minúsculas.":"Wrong username or password. Check upper and lower case.",
"Versión de demostración 0.2":"Demo version 0.2",
"Encuestas nacionales mensuales de 1.500 entrevistas, mayo 2021 – junio 2026, leídas para el PRM. Las respuestas de DANTE y las solicitudes de informes son ejemplos preparados.":"Monthly national surveys of 1,500 interviews, May 2021 – June 2026, read for the PRM. DANTE's answers and report requests are prepared examples.",
"Datos publicados por Devotion2Vote":"Data published by Devotion2Vote",
"Versión {0} · {1}":"Version {0} · {1}",
"Sala de clientes":"Client room",
"Hoy":"Today",
"Evolución":"Trends",
"Transferencias":"Transfers",
"Flujos":"Flows",
"Territorio":"Territory",
"El partido":"The party",
"Partido":"Party",
"Informes":"Reports",
"Sesión del":"Session of the",
"equipo del PRM":"PRM team",
"Solo ve su campaña. Todo lo que pide queda registrado a su nombre.":"You only see your campaign. Everything you request is logged under your name.",
"República Dominicana · Presidencial 2028 · país, regiones, provincias y municipios":"Dominican Republic · Presidential 2028 · country, regions, provinces and municipalities",
"Ficha técnica":"Technical sheet",
"Salir":"Sign out",
"Cerrar sesión":"Sign out",
"Secciones":"Sections",
"Abrir DANTE":"Open DANTE",
"Cerrar":"Close",
"Pregunte a DANTE…":"Ask DANTE…",
"Pregunte a DANTE":"Ask DANTE",
"Enviar":"Send",
"Toma anterior":"Previous wave",
"Toma siguiente":"Next wave",
"Reproducir":"Play",
"Toma":"Wave",
/* ---------- Hoy ---------- */
"Aprobación del gobierno":"Government approval",
"Evaluación del gobierno":"Government evaluation",
"Serie completa.":"Full series.",
"Serie completa desde {0}.":"Full series since {0}.",
"Ver la evolución":"See the trend",
"Preferencia de partido":"Party preference",
"Simpatía de partido":"Party sympathy",
"Preferencia de partido para 2028":"Party preference for 2028",
"Voto por partido":"Party vote",
"% aprueba":"% approve",
"% desaprueba":"% disapprove",
"% evalúa bien":"% rate it well",
"% evalúa mal":"% rate it badly",
"aprueba":"approve","desaprueba":"disapprove","evalúa bien":"rate it well","evalúa mal":"rate it badly",
"Aprueba":"Approve","Desaprueba":"Disapprove","Bien":"Good","Mal":"Bad","Correcto":"Right direction","Equivocado":"Wrong direction","Buena":"Good","Mala":"Bad",
"bien":"good","mal":"bad","correcto":"right direction","equivocado":"wrong direction","buena":"good","mala":"bad",
"{0} puntos desde {1}":"{0} points since {1}",
"{0#} % {1}. El máximo de la serie fue {2#} % en {3}.":"{0} % {1}. The series high was {2} % in {3}.",
"Rumbo del país":"Country direction",
"camino correcto":"right direction",
"{0} camino equivocado":"{0} wrong direction",
"Economía familiar":"Family finances",
"{0} mala":"{0} bad",
"Emoción ante el futuro":"Feeling about the future",
"Principal problema personal":"Main personal problem",
"Clima de opinión":"Public mood",
"Rumbo del país, economía familiar, emoción ante el futuro y principal problema personal, sobre el total de entrevistados.":"Country direction, family finances, feeling about the future and main personal problem, over all respondents.",
"Estimación de voto":"Vote estimate",
"Ajustada a los resultados reales · % sobre votos válidos":"Adjusted to actual results · % of valid votes",
"Ajustada a los resultados reales de {0}":"Adjusted to the actual {0} results",
"% sobre votos válidos":"% of valid votes",
"Participación estimada {0} %":"Estimated turnout {0} %",
"Participación estimada {0} %.":"Estimated turnout {0} %.",
"{0} electores":"{0} voters",
"en {0} {1#} %":"in {0} {1} %",
"en {0}":"in {0}",
"«¿Quién debería ser el candidato presidencial del PRM?»":"“Who should be the PRM's presidential candidate?”",
"Versión {0}":"Version {0}",
"Serie de aprobación":"Approval series",
"Matriz de transferencia":"Transfer matrix",
"Base":"Base",
"Votaría hoy ↓":"Would vote today ↓",
"votó en {0#} →":"voted in {0} →",
"pocas entrevistas ({0#})":"few interviews ({0})",
"sobre el total de entrevistados; {0#} de cada 100 no eligen a nadie o no saben.":"over all respondents; {0} out of every 100 choose nobody or don't know.",
"Participación estimada {0#} %. Esta encuesta ofrecía {1#} nombres.":"Estimated turnout {0} %. This survey offered {1} names.",
"{0}, candidato del PRM mejor situado, obtiene {1} y ocupa el {2} lugar. Irían a votar {3#} de cada 100 electores.":"{0}, the best-placed PRM candidate, gets {1} and ranks {2}. {3} out of every 100 voters would turn out.",
"{0}, candidato del PRM mejor situado, obtiene {1} y ocupa el {2} lugar.":"{0}, the best-placed PRM candidate, gets {1} and ranks {2}.",
"primer":"first","segundo":"second","tercer":"third","cuarto":"fourth","quinto":"fifth",
"Ver de dónde viene cada voto":"See where each vote comes from",
"Perfiles electorales":"Voter profiles",
"prototipos de electores a los que dirigirse, a partir de esta estimación":"voter prototypes to target, based on this estimate",
"Internas del PRM":"PRM primaries",
"Internas PRM":"PRM primaries",
"«¿Quién debería ser el candidato presidencial del PRM?» · sobre el total de entrevistados; {0} de cada 100 no eligen a nadie o no saben.":"“Who should be the PRM's presidential candidate?” · over all respondents; {0} out of every 100 choose nobody or don't know.",
"Cara a cara · segunda vuelta":"Head to head · run-off",
"Cara a cara":"Head to head",
"segunda vuelta":"run-off",
"{0}: {1}":"{0}: {1}",
"frente a":"vs",
"{0} frente a {1}":"{0} vs {1}",
"{0} ninguno o no sabe":"{0} none or don't know",
"Respuesta declarada sobre el total de entrevistados.":"Stated answer over all respondents.",
"Estimación ajustada al voto real de la última elección (método Vote-Transfer) · % sobre votos válidos.":"Estimate adjusted to the actual vote of the last election (Vote-Transfer method) · % of valid votes.",
"Ver la serie completa":"See the full series",
"Qué dicen los datos":"What the data say",
/* hallazgos */
"La aprobación del gobierno está en su máximo: {0} %":"Government approval is at its high: {0} %",
"En {0@} aprueban {1#} % y desaprueban {2#} %.":"In {0}, {1} % approve and {2} % disapprove.",
"Serie de aprobación · {0#} encuestas":"Approval series · {0} surveys",
"El gobierno ha perdido {0} puntos de aprobación desde {1}":"The government has lost {0} approval points since {1}",
"Entonces aprobaba {0#} %. En {1@} aprueban {2#} % y desaprueban {3#} %.":"Back then {0} % approved. In {1}, {2} % approve and {3} % disapprove.",
"El voto de {0} se reparte hoy: {1#} % a {2}, {3#} % a {4}, {5#} % a {6}":"The {0} vote splits today: {1} % to {2}, {3} % to {4}, {5} % to {6}",
"De los {0#} electores de {1} con voto declarado, hoy {2#} votarían por {3}. El PRM retiene con {4} {5#} % de ese electorado.":"Of the {0} {1} voters with a stated vote, {2} would vote for {3} today. With {4}, the PRM retains {5} % of that electorate.",
"Matriz de transferencia · {0}":"Transfer matrix · {0}",
"Matriz de transferencia · última encuesta con voto anterior":"Transfer matrix · latest survey with previous vote",
"El voto de {0} es el voto de Abinader":"The {0} vote is the Abinader vote",
"{0#} de cada 100 votos de {1} vienen de Abinader":"{0} out of every 100 {1} votes come from Abinader",
"De cada 100 electores que hoy votarían por {0}, {1#} votaron a Abinader en {2#}. Casi no recibe voto de ningún otro origen: su techo hoy es el electorado del gobierno.":"Out of every 100 voters who would vote for {0} today, {1} voted for Abinader in {2}. He receives almost no votes from any other origin: his ceiling today is the government's electorate.",
"De cada 100 electores que hoy votarían por {0}, {1#} votaron a Abinader en {2#}.":"Out of every 100 voters who would vote for {0} today, {1} voted for Abinader in {2}.",
"El PRM pasó de {0#} % a {1#} % como partido":"The PRM went from {0} % to {1} % as a party",
"En {0@}, {1#} % ({2}). En {3@}, {4#} %, frente a {5#} % del PLD y {6#} % de la Fuerza del Pueblo.":"In {0}, {1} % ({2}). In {3}, {4} %, against {5} % for the PLD and {6} % for Fuerza del Pueblo.",
"{0#} encuestas":"{0} surveys",
"{0#} encuesta":"{0} survey",
"{0} gana el cara a cara a {1}: {2#} % frente a {3#} %":"{0} wins the head to head against {1}: {2} % to {3} %",
"{0} pierde el cara a cara con {1} desde {2}":"{0} has been losing the head to head against {1} since {2}",
"{0} pierde el cara a cara con {1}":"{0} loses the head to head against {1}",
"En {0@} el resultado era {1#} % a {2#} %. En {3@}, {4#} % a {5#} %.":"In {0} the result was {1} % to {2} %. In {3}, {4} % to {5} %.",
"Cara a cara · {0#} encuestas":"Head to head · {0} surveys",
"Cara a cara · {0#} encuesta":"Head to head · {0} survey",
"Dentro del PRM, {0} es el favorito con {1}":"Within the PRM, {0} is the favourite with {1}",
"Le siguen {0} ({1}) y {2} ({3}). La pregunta existe desde {4}.":"Next come {0} ({1}) and {2} ({3}). The question has been asked since {4}.",
"Le siguen {0} ({1}). La pregunta existe desde {2}.":"Next comes {0} ({1}). The question has been asked since {2}.",
"{0#} % cree que el país va por el camino correcto":"{0} % think the country is heading in the right direction",
"En {0@} lo creía {1#} %. En {2@}, {3#} % frente a {4#} % que lo ve equivocado.":"In {0}, {1} % thought so. In {2}, {3} % against {4} % who see it going the wrong way.",
"Rumbo del país · {0#} encuestas":"Country direction · {0} surveys",
/* ---------- Evolución ---------- */
"¿Cómo ha evolucionado?":"How has it evolved?",
"Elija qué serie ver y recorra las tomas con las flechas, el reproductor o el deslizador. Cada punto es una encuesta nacional de 1.500 entrevistas. Toque una línea o un nombre para resaltarla.":"Choose which series to see and move through the waves with the arrows, the player or the slider. Each point is a national survey of 1,500 interviews. Tap a line or a name to highlight it.",
"Estimación electoral":"Electoral estimate",
"Estimación ajustada":"Adjusted estimate",
"Intención declarada":"Stated intention",
"Intención de voto declarada":"Stated voting intention",
"Partidos":"Parties",
"Imagen de figuras":"Image of figures",
"Imagen positiva":"Positive image",
"Figuras del PRM":"PRM figures",
"Todas las figuras":"All figures",
"Cuadro de la toma":"Wave table",
"Cuadro de la toma · {0}":"Wave table · {0}",
"Aprobación del gobierno del presidente Luis Abinader: «¿aprueba o desaprueba el gobierno?». Porcentaje sobre el total de entrevistados. Existe en casi todas las encuestas desde mayo de 2021.":"Approval of President Luis Abinader's government: “do you approve or disapprove of the government?”. Percentage of all respondents. Present in almost every survey since May 2021.",
"Serie oficial de estimación electoral de la Sala de Control. Cifra final de cada encuesta que preguntó el voto de la presidencial anterior: ajustada a los resultados oficiales (2020 hasta abril de 2024, 2024 después) y con los indecisos repartidos. Porcentaje sobre votos válidos.":"The Control Room's official electoral estimate series. Final figure of each survey that asked about the previous presidential vote: adjusted to the official results (2020 until April 2024, 2024 afterwards) and with undecided voters allocated. Percentage of valid votes.",
"Respuesta directa a «si las elecciones fuesen mañana, ¿por quién votaría?» con la lista más completa de candidatos de cada encuesta. Porcentaje sobre el total de entrevistados, sin ajustar. Los candidatos cambian con el tiempo: hasta 2024 la pregunta era sobre la reelección de Abinader; desde 2025, sobre la sucesión.":"Direct answer to “if the election were tomorrow, who would you vote for?” with each survey's fullest list of candidates. Percentage of all respondents, unadjusted. Candidates change over time: until 2024 the question was about Abinader's re-election; since 2025, about the succession.",
"Si solo estuvieran los dos, ¿por quién votaría? Porcentaje sobre el total de entrevistados.":"If only these two were running, who would you vote for? Percentage of all respondents.",
"Hasta septiembre de 2024: «si tuviera que votar por un partido, ¿por cuál votaría?». Desde noviembre de 2024: «¿de qué partido debería ser el presidente en 2028?». Porcentaje sobre el total de entrevistados.":"Until September 2024: “if you had to vote for a party, which would you vote for?”. Since November 2024: “which party should the president in 2028 belong to?”. Percentage of all respondents.",
"«¿Quién debería ser el candidato presidencial del PRM?» Porcentaje sobre el total de entrevistados (incluye a quienes no eligen a nadie).":"“Who should be the PRM's presidential candidate?” Percentage of all respondents (includes those who choose nobody).",
"Imagen positiva de cada figura: entre quienes la conocen, porcentaje que dice tener una imagen positiva o que le gusta. Solo se pregunta desde 2024.":"Positive image of each figure: among those who know them, the percentage who say they have a positive image or like them. Only asked since 2024.",
"«¿Cómo evaluaría la gestión del gobierno?» Bien y muy bien frente a mal y muy mal, sobre el total de entrevistados. Es la pregunta más antigua de la serie.":"“How would you rate the government's performance?” Good and very good against bad and very bad, over all respondents. It is the oldest question in the series.",
"«¿Las cosas en el país van por el camino correcto o por el camino equivocado?» Porcentaje sobre el total de entrevistados.":"“Are things in the country heading in the right direction or the wrong direction?” Percentage of all respondents.",
"«¿Cómo evalúa la situación económica actual de su familia?» Buena y muy buena frente a mala y muy mala, sobre el total de entrevistados.":"“How do you rate your family's current financial situation?” Good and very good against bad and very bad, over all respondents.",
"El resto hasta 100 no sabe o no responde.":"The remainder up to 100 don't know or don't answer.",
"El resto hasta 100 no votaría por ninguno o no sabe.":"The remainder up to 100 would vote for none or don't know.",
"La misma serie que ve la dirección en la Sala de Control: en las encuestas que preguntan el voto anterior, la estimación anclada al resultado real; en las demás, la intención declarada corregida con la desviación media aprendida en el mismo ciclo. El cuadro de cada toma indica cuál es.":"The same series the management sees in the Control Room: in surveys that ask about the previous vote, the estimate anchored to the actual result; in the others, the stated intention corrected with the average deviation learned in the same cycle. Each wave's table says which one it is.",
"Solo las encuestas que preguntan el voto anterior. Hasta abril de 2024 se ajusta a la presidencial de 2020; desde junio de 2024, a la de 2024.":"Only surveys that ask about the previous vote. Until April 2024 it is adjusted to the 2020 presidential election; since June 2024, to the 2024 one.",
"Incluye en el total a quienes no votarían por nadie o no saben. Un candidato solo aparece cuando estaba en la lista de esa encuesta.":"The total includes those who would vote for nobody or don't know. A candidate only appears when they were on that survey's list.",
"Cara a cara: {0}":"Head to head: {0}",
"Dos preguntas distintas: voto por partido hasta 2024 y partido que debería gobernar en 2028 desde noviembre de 2024. La línea vertical de puntos marca el cambio.":"Two different questions: party vote until 2024 and party that should govern in 2028 since November 2024. The dotted vertical line marks the change.",
"sobre el total de entrevistados.":"over all respondents.",
"sobre el total de entrevistados":"over all respondents",
"Sobre el total de entrevistados.":"Over all respondents.",
"«¿Cómo evaluaría la gestión del gobierno?» · bien y muy bien frente a mal y muy mal; el resto, regular o no sabe.":"“How would you rate the government's performance?” · good and very good against bad and very bad; the rest, fair or don't know.",
"«¿El país va por el camino correcto o equivocado?» · el resto no sabe.":"“Is the country heading in the right or the wrong direction?” · the rest don't know.",
"«¿Cómo evalúa la situación económica de su familia?» · buena y muy buena frente a mala y muy mala.":"“How do you rate your family's financial situation?” · good and very good against bad and very bad.",
"Porcentaje con imagen positiva sobre el total de entrevistados.":"Percentage with a positive image over all respondents.",
"elección 2024":"2024 election",
"no estaba":"not listed",
"primera toma":"first wave",
"Ninguno / no sabe":"None / don't know",
"Ninguno":"None",
"Estimación anclada al voto real (esta encuesta preguntó el voto anterior).":"Estimate anchored to the actual vote (this survey asked about the previous vote).",
"Intención declarada corregida con la desviación media del ciclo (esta encuesta no preguntó el voto anterior).":"Stated intention corrected with the cycle's average deviation (this survey did not ask about the previous vote).",
"Intención declarada sin corregir: aún no hay dos encuestas con estimación en este ciclo.":"Uncorrected stated intention: there are not yet two surveys with an estimate in this cycle.",
"Esta encuesta ofrecía {0} nombres.":"This survey offered {0} names.",
"«¿De qué partido debería ser el presidente en 2028?»":"“Which party should the president in 2028 belong to?”",
"«¿Por cuál partido siente mayor simpatía?»":"“Which party do you feel closest to?”",
"«¿de qué partido debería ser el presidente en 2028?»":"“which party should the president in 2028 belong to?”",
"«¿por cuál partido siente mayor simpatía?»":"“which party do you feel closest to?”",
"voto por partido":"party vote",
"el PRM tenía {0#} % en {1}":"the PRM had {0} % in {1}",
"máximo del PRM: {0#} % en {1}.":"PRM high: {0} % in {1}.",
"máximo del PRM: {0#} % en {1}":"PRM high: {0} % in {1}",
/* ---------- Transferencias ---------- */
"¿De dónde viene cada voto?":"Where does each vote come from?",
"Lo que votó cada elector en la presidencial anterior (izquierda) y por quién votaría hoy (derecha), ajustado a los resultados oficiales. El grosor es el número de electores. Toque un nombre para seguir su voto. Hay cuadro en cada encuesta que preguntó el voto anterior.":"What each voter chose in the previous presidential election (left) and who they would vote for today (right), adjusted to the official results. Thickness is the number of voters. Tap a name to follow its vote. There is a table for every survey that asked about the previous vote.",
"VOTÓ EN {0}":"VOTED IN {0}",
"VOTARÍA HOY":"WOULD VOTE TODAY",
"{0#} entrevistas con voto anterior":"{0} interviews with a previous vote",
"ajustada a la presidencial de {0#}":"adjusted to the {0} presidential election",
"participación estimada {0}":"estimated turnout {0}",
"{0#} cuadros disponibles entre {1} y {2}":"{0} tables available between {1} and {2}",
"{0} de ese origen":"{0} of that origin",
"De dónde viene el voto de {0}":"Where {0}'s vote comes from",
"{0} de su voto":"{0} of his vote",
"Qué hacen hoy los {0#} votantes de Abinader en {1#}":"What Abinader's {0} voters from {1} do today",
"Cuadro completo de transferencias":"Full transfer table",
"Electores":"Voters",
"% de cada origen":"% of each origin",
"Votaría hoy ↓ · votó en {0} →":"Would vote today ↓ · voted in {0} →",
"Total":"Total",
"% válidos":"% valid",
"Total origen":"Origin total",
"válidos {0}":"valid {0}",
"Electores tras el ajuste a los resultados oficiales de {0} y el reparto de indecisos. Los votantes nuevos se descuentan proporcionalmente de las columnas: el total sigue siendo el censo. En «% de cada origen», cada columna suma 100.":"Voters after adjustment to the official {0} results and allocation of the undecided. New voters are deducted proportionally from the columns: the total is still the electoral roll. In “% of each origin”, each column adds up to 100.",
"Abinader 2024":"Abinader 2024","Abinader 2020":"Abinader 2020","Abel 2024":"Abel 2024",
"Otros y blancos":"Others and blank",
"No votó":"Did not vote",
"Nuevos votantes":"New voters",
"Nuevos":"New",
"Otros":"Others",
"Abstención":"Abstention",
"No tenía edad":"Too young to vote",
/* ---------- Territorio ---------- */
"¿Dónde?":"Where?",
"País, regiones, provincias y municipios de la encuesta. Respuesta declarada, sin ajustar; las zonas con pocas entrevistas se indican y deben leerse con cautela.":"Country, regions, provinces and municipalities of the survey. Stated answer, unadjusted; areas with few interviews are flagged and should be read with caution.",
"Regiones":"Regions","Provincias":"Provinces","Municipios":"Municipalities",
"Simpatía PRM":"PRM sympathy","Preferencia PRM":"PRM preference",
"País (toda la encuesta)":"Country (whole survey)",
"· pocas entrevistas ({0})":"· few interviews ({0})",
"{0#} regiones con al menos 30 entrevistas en {1}":"{0} regions with at least 30 interviews in {1}",
"{0#} provincias con al menos 30 entrevistas en {1}":"{0} provinces with at least 30 interviews in {1}",
"{0#} municipios con al menos 30 entrevistas en {1}":"{0} municipalities with at least 30 interviews in {1}",
"porcentaje que aprueba el gobierno":"percentage who approve of the government",
"porcentaje que cree que el presidente de 2028 debería ser del PRM":"percentage who think the 2028 president should be from the PRM",
"porcentaje que simpatiza con el PRM":"percentage who sympathise with the PRM",
"porcentaje que votaría por el PRM":"percentage who would vote for the PRM",
"intención de voto declarada por {0}":"stated voting intention for {0}",
"las zonas con menos de 60 entrevistas se muestran atenuadas.":"areas with fewer than 60 interviews are shown dimmed.",
"Presidencial 2024 · resultados oficiales (JCE)":"Presidential 2024 · official results (JCE)",
"Censo electoral":"Electoral roll",
"Es la urna sobre la que se ajusta cada estimación desde junio de 2024; las anteriores se ajustan a la presidencial de 2020. Los resultados por municipio y colegio pueden pedirse desde":"This is the ballot every estimate has been adjusted to since June 2024; earlier ones are adjusted to the 2020 presidential election. Results by municipality and polling station can be requested from",
/* ---------- El partido ---------- */
"El partido y sus figuras":"The party and its figures",
"Quién debería ser el candidato del PRM según los propios entrevistados, cómo se ve a cada figura y, para el mejor situado, sus cuatro públicos.":"Who should be the PRM's candidate according to the respondents themselves, how each figure is seen and, for the best placed, their four publics.",
"Internas del PRM · evolución":"PRM primaries · trend",
"Presidente de la República · PRM":"President of the Republic · PRM",
"Vicepresidenta de la República · PRM":"Vice President of the Republic · PRM",
"Ministro de Turismo · PRM":"Minister of Tourism · PRM",
"Alcaldesa del Distrito Nacional · PRM":"Mayor of the Distrito Nacional · PRM",
"en {0} tenía {1}":"in {0} had {1}",
"{0} negativa":"{0} negative",
"en {0} tenía {1} positiva":"in {0} had {1} positive",
"La imagen positiva y negativa de cada figura se incorporará cuando la Sala de Control apruebe esa pregunta en el cuaderno.":"The positive and negative image of each figure will be added once the Control Room approves that question in the notebook.",
"Los cuatro públicos de David Collado · junio 2026":"David Collado's four publics · June 2026",
"Electores completos, ajustados a los resultados de 2024. Es el candidato del PRM mejor situado en la estimación.":"Full voter counts, adjusted to the 2024 results. He is the best-placed PRM candidate in the estimate.",
"Voto duro":"Core vote",
"Votan por David Collado y nadie puede quitárselos. 56 de cada 100 de sus votantes: la base más sólida de los tres primeros.":"They vote for David Collado and nobody can take them away. 56 out of every 100 of his voters: the most solid base among the top three.",
"Enterados del Plan Anti-Crisis, orgullosos de los Juegos":"Aware of the Anti-Crisis Plan, proud of the Games",
"Menos enterados, menos interesados":"Less aware, less interested",
"Voto a retener":"Vote to retain",
"A retener":"To retain",
"Votan por él, pero algo falla: 57 % no está seguro de ir a votar. 63 % «votaría» también por Omar Fernández y 60 % por Carolina Mejía (PRM).":"They vote for him, but something is off: 57 % are not sure they will turn out. 63 % “would also vote” for Omar Fernández and 60 % for Carolina Mejía (PRM).",
"Critican al gobierno («seguimos peor», salud)":"Critical of the government (“we are worse off”, health)",
"Aprueban al gobierno, cercanos a Carolina Mejía":"Approve of the government, close to Carolina Mejía",
"Voto a conquistar":"Vote to win over",
"Hoy votan por otro (419.228 por Alofoke, 301.838 por Leonel), no son voto duro de nadie y tienen un rasgo cercano al candidato.":"Today they vote for someone else (419,228 for Alofoke, 301,838 for Leonel), they are nobody's core vote and they have a trait close to the candidate.",
"Desaprueban al gobierno":"Disapprove of the government",
"Aprueban al gobierno":"Approve of the government",
"Voto a movilizar":"Vote to mobilise",
"Hoy en la abstención o indecisos, con afinidad hacia él. La mitad votó a Abinader en 2024; 64 % son mujeres.":"Currently abstaining or undecided, with an affinity for him. Half voted for Abinader in 2024; 64 % are women.",
"Desaprueban al gobierno (8 de cada 10, mujeres)":"Disapprove of the government (8 out of 10, women)",
"A quién podría irse su voto a retener · dentro y fuera del PRM":"Where his vote to retain could go · inside and outside the PRM",
"De los 339.196 electores del voto a retener, cuántos «votarían» también por cada uno de estos candidatos (pueden nombrar a varios). Carolina Mejía y Raquel Peña son figuras del PRM: ese voto no sale del partido, cambia de candidato dentro de él.":"Of the 339,196 voters in the vote to retain, how many “would also vote” for each of these candidates (they may name several). Carolina Mejía and Raquel Peña are PRM figures: that vote does not leave the party, it changes candidate within it.",
"Se queda en el PRM · otra figura del partido":"Stays in the PRM · another party figure",
"Sale del PRM · candidatos de otros partidos":"Leaves the PRM · candidates from other parties",
"Cruzar una pregunta":"Cross-tabulate a question",
"Pregunta":"Question",
"Principal problema del país":"Main problem of the country",
"De dónde vienen (voto 2024)":"Where they come from (2024 vote)",
"De dónde vienen":"Where they come from",
"Edad":"Age",
"Según":"By",
"según {0}":"by {0}",
"Los públicos de Collado":"Collado's publics",
"los públicos de Collado":"Collado's publics",
"Candidato":"Candidate",
"Región":"Region",
"Sexo":"Sex",
"Principal problema del país · según los públicos de Collado":"Main problem of the country · by Collado's publics",
"Respuesta":"Answer",
"La delincuencia":"Crime",
"La mala economía":"The bad economy",
"Alto costo de la vida":"High cost of living",
"Corrupción de funcionarios":"Corruption of officials",
"La inmigración haitiana":"Haitian immigration",
"El desempleo":"Unemployment",
"fuera de los 5 primeros":"outside the top 5",
"sin casos":"no cases",
"Votó en 2024 a…":"Voted in 2024 for…",
"Este cruce se calcula al momento cuando el servicio de cruces esté conectado (fase 2). En la demostración solo están listos «Principal problema» y «De dónde vienen» según los públicos de Collado.":"This cross-tab is calculated on the spot once the cross-tab service is connected (phase 2). In the demo only “Main problem” and “Where they come from” by Collado's publics are ready.",
"Que DANTE lo explique":"Have DANTE explain it",
"Añadir a un informe":"Add to a report",
/* ---------- Informes ---------- */
"Pida lo que necesite; avisamos cuando esté listo.":"Request what you need; we will let you know when it is ready.",
"Pedir":"Request",
"Resumen ejecutivo":"Executive summary",
"Presentación":"Presentation",
"Públicos objetivo":"Target publics",
"Transferencias de voto":"Vote transfers",
"Serie 2021–2026":"2021–2026 series",
"Láminas para redes":"Social media cards",
"Tablas completas":"Full tables",
"Resultados 2024 por municipio":"2024 results by municipality",
"Pedir «Públicos objetivo» de junio":"Request June's “Target publics”",
"Pedir «{0}» de {1}":"Request {1}'s “{0}”",
"En preparación":"In preparation",
"Preparando":"Preparing",
"Pedido ahora mismo · avisamos en el móvil cuando esté":"Requested just now · we will notify your phone when it is ready",
"Pedida hoy a las 10:12 · unos 3 minutos más":"Requested today at 10:12 · about 3 more minutes",
"Entregados":"Delivered",
"Listo":"Ready",
"PDF, 6 páginas":"PDF, 6 pages",
"Word, 24 páginas":"Word, 24 pages",
"Abrir":"Open",
"Enviar por WhatsApp":"Send via WhatsApp",
"No se pudo enviar. Vuelva a intentarlo":"Could not be sent. Please try again",
"No se pudo enviar. Vuelva a intentarlo.":"Could not be sent. Please try again.",
"Pedido · avisamos cuando esté":"Requested · we will let you know when it is ready",
"Sin curso":"Not processed",
"Pedido el {0} por {1}":"Requested on {0} by {1}",
"Pedido el {0}":"Requested on {0}",
"Nada en preparación.":"Nothing in preparation.",
"Pedido registrado. La dirección lo prepara y avisa cuando esté en Informes.":"Request logged. The management is preparing it and will let you know when it is in Reports.",
"Pedido registrado (demostración).":"Request logged (demo).",
/* ---------- Perfiles ---------- */
"A partir de la estimación y de la matriz de transferencia, el sistema construye":"From the estimate and the transfer matrix, the system builds",
"prototipos de electores":"voter prototypes",
": quiénes son, dónde están, qué les mueve y cómo se les habla. Cada prototipo lleva su tamaño en electores, su territorio, su origen de voto y su lectura estratégica.":": who they are, where they are, what moves them and how to talk to them. Each prototype carries its size in voters, its territory, its vote origin and its strategic reading.",
"Los cuatro públicos (voto duro · a retener · a conquistar · a movilizar) salen del paso de públicos objetivo de la última encuesta con voto anterior. Los prototipos por segmento, subsegmento y microsegmento se construyen con la segmentación LOCUS y se entregan como informe.":"The four publics (core · to retain · to win over · to mobilise) come from the target publics step of the latest survey with a previous vote. Prototypes by segment, sub-segment and micro-segment are built with LOCUS segmentation and delivered as a report.",
"Pedir perfiles electorales":"Request voter profiles",
"Perfiles electorales · {0}":"Voter profiles · {0}",
"Base · {0}":"Base · {0}",
"electores que hoy votarían por {0}":"voters who would vote for {0} today",
/* ---------- Ficha técnica ---------- */
"Serie":"Series",
"Encuesta de referencia":"Reference survey",
"Junio 2026 · 1.500 entrevistas presenciales · 124 preguntas · campo desde el 1 de junio":"June 2026 · 1,500 face-to-face interviews · 124 questions · fieldwork from 1 June",
"{0#} encuestas nacionales mensuales de 1.500 entrevistas, de {1@} a {2@}. Cada serie indica en qué encuestas existe la pregunta.":"{0} monthly national surveys of 1,500 interviews, from {1} to {2}. Each series shows which surveys include the question.",
"Ajuste":"Adjustment",
"En las encuestas que preguntan el voto de la presidencial anterior, cada entrevista recibe el peso en electores que le corresponde según a quién votó, con los resultados oficiales de la JCE (2020 hasta abril de 2024; 2024 desde junio de 2024). Así la encuesta suma exactamente el censo.":"In surveys that ask about the previous presidential vote, each interview receives the weight in voters that corresponds to who they voted for, using the JCE's official results (2020 until April 2024; 2024 from June 2024). That way the survey adds up exactly to the electoral roll.",
"Participación":"Turnout",
"La declarada por la dirección del estudio cuando existe (57,8 % en mayo de 2026, 56,5 % en junio); en las demás encuestas, el reparto provisional del método. Con ella se calcula qué parte de la abstención anterior vuelve a votar.":"The one declared by the study's management when available (57.8 % in May 2026, 56.5 % in June); in the other surveys, the method's provisional allocation. It is used to calculate what share of previous abstainers vote again.",
"Votantes nuevos":"New voters",
"Quienes cumplieron 18 años desde la elección anterior: 1 de cada 100 electores por año natural.":"Those who turned 18 since the previous election: 1 in every 100 voters per calendar year.",
"Indecisos":"Undecided",
"Repartidos antes de dar la cifra final de la estimación ajustada. Las series «declaradas» los mantienen en el total.":"Allocated before giving the final figure of the adjusted estimate. The “stated” series keep them in the total.",
"Respuestas declaradas por región, provincia y municipio de la encuesta, sin ajustar; se indica el número de entrevistas de cada zona.":"Stated answers by region, province and municipality of the survey, unadjusted; the number of interviews in each area is shown.",
"Cuadros recalculados con el método sobre cada base; pueden diferir en décimas de los informes publicados. En la versión definitiva la matriz y la cifra salen del mismo cálculo del sistema.":"Tables recalculated with the method on each database; they may differ by tenths from published reports. In the final version the matrix and the figure come from the same system calculation.",
"Método":"Method",
"Vote-Transfer, de Carles Salom. Revisado por el sistema en cada paso y supervisado por el equipo antes de publicarse.":"Vote-Transfer, by Carles Salom. Checked by the system at every step and supervised by the team before publication.",
/* ---------- DANTE ---------- */
"Mirando: {0}":"Viewing: {0}",
"Buenos días. Tengo delante la campaña del PRM con las 58 encuestas nacionales de mayo de 2021 a junio de 2026. Puedo dar cualquier cifra con su fuente, hacer un gráfico o pedir un informe.":"Good morning. I have the PRM campaign in front of me, with the 58 national surveys from May 2021 to June 2026. I can give any figure with its source, make a chart or request a report.",
"¿Cómo ha evolucionado la aprobación del gobierno?":"How has government approval evolved?",
"¿Qué hacen hoy los votantes de Abinader en 2024?":"What do Abinader's 2024 voters do today?",
"¿Quién debería ser el candidato del PRM?":"Who should be the PRM's candidate?",
"Fuente: {0}":"Source: {0}",
"{0} desde {1}":"{0} since {1}",
"Recibida":"Received",
"Enviando…":"Sending…",
"Otros/bl.":"Others/bl.",
"participación {0#} %":"turnout {0} %",
"Cuadro de la toma · {0} · {1}":"Wave table · {0} · {1}",
"DANTE está mirando los datos…":"DANTE is looking at the data…",
"Se agotaron las preguntas del mes.":"This month's questions have been used up.",
"sin respuesta":"no answer",
"pregunta {0} de {1} este mes":"question {0} of {1} this month",
"Esa pregunta no puedo responderla con las encuestas disponibles. Puedo dar cualquier cifra del estudio, hacer un gráfico o pedir un informe. ¿Digo, por ejemplo, cómo ha evolucionado la aprobación del gobierno?":"I cannot answer that question with the available surveys. I can give any figure from the study, make a chart or request a report. Shall I say, for example, how government approval has evolved?",
"La aprobación del gobierno en {0@} es {1#} % (desaprueba {2#} %). El máximo de la serie fue {3#} % en {4@} y el mínimo {5#} % en {6@}.":"Government approval in {0} is {1} % ({2} % disapprove). The series high was {3} % in {4} and the low {5} % in {6}.",
"Serie de {0#} encuestas nacionales":"Series of {0} national surveys",
"Ver evolución":"See trend",
"De cada 100 electores de {0} con voto declarado, hoy {1#} votarían por {2}, {3#} por {4} y {5#} por {6}. El PRM retiene con {7} {8#} de esos {9#} electores.":"Out of every 100 {0} voters with a stated vote, {1} would vote for {2} today, {3} for {4} and {5} for {6}. With {7}, the PRM retains {8} of those {9} voters.",
"Ver transferencias":"See transfers",
"En {0@}, {1} es el favorito para ser candidato del PRM con {2}; le siguen {3} ({4}) y {5} ({6}).":"In {0}, {1} is the favourite to be the PRM's candidate with {2}; next come {3} ({4}) and {5} ({6}).",
"En {0@}, {1} es el favorito para ser candidato del PRM con {2}; le siguen {3} ({4}).":"In {0}, {1} is the favourite to be the PRM's candidate with {2}; next comes {3} ({4}).",
"Internas del PRM · {0#} encuestas":"PRM primaries · {0} surveys",
"Ver el partido":"See the party",
"En un cara a cara con {0}, en {1@} {2} obtiene {3} frente a {4}. En {5@} el resultado era {6} a {7}.":"In a head to head with {0}, in {1} {2} gets {3} against {4}. In {5} the result was {6} to {7}.",
"Serie de encuestas nacionales · cara a cara":"National survey series · head to head",
"En {0@}, {1} para el PRM, {2} para el PLD y {3} para la Fuerza del Pueblo ({4}, sobre el total de entrevistados).":"In {0}, {1} for the PRM, {2} for the PLD and {3} for Fuerza del Pueblo ({4}, over all respondents).",
"La aprobación del gobierno en {0@} es más alta en la región {1} ({2}) y más baja en {3} ({4}). En Territorio puede verse por provincia y municipio, y para cada candidato.":"Government approval in {0} is highest in the {1} region ({2}) and lowest in {3} ({4}). In Territory you can see it by province and municipality, and for each candidate.",
"La simpatía por el PRM en {0@} es más alta en la región {1} ({2}) y más baja en {3} ({4}). En Territorio puede verse por provincia y municipio, y para cada candidato.":"Sympathy for the PRM in {0} is highest in the {1} region ({2}) and lowest in {3} ({4}). In Territory you can see it by province and municipality, and for each candidate.",
"Encuesta nacional · respuesta declarada por zona":"National survey · stated answer by area",
"Ver territorio":"See territory",
/* ---------- etiquetas frecuentes que llegan del motor (emociones, problemas) ---------- */
"Esperanza":"Hope","Preocupación":"Worry","Miedo":"Fear","Incertidumbre":"Uncertainty","Enojo":"Anger","Rabia":"Anger","Indiferencia":"Indifference","Alegría":"Joy","Tristeza":"Sadness","Confianza":"Confidence","Optimismo":"Optimism","Frustración":"Frustration","Inseguridad":"Insecurity",
"Delincuencia":"Crime","Inseguridad ciudadana":"Public insecurity","Desempleo":"Unemployment","Costo de la vida":"Cost of living","Corrupción":"Corruption","Salud":"Health","Educación":"Education","Inmigración haitiana":"Haitian immigration","Economía":"Economy","Pobreza":"Poverty","Apagones":"Power cuts","Agua":"Water","Drogas":"Drugs","Vivienda":"Housing","Transporte":"Transport","Ninguno":"None","No sabe":"Don't know","No responde":"No answer","No sabe / no responde":"Don't know / no answer"
};

/* ---------- motor de traducción ---------- */
var ATTRS=['placeholder','title','aria-label','alt'];
var EXACT=new Map(), PATS=[];
function esc(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
var RE_PH=/(\{\d+[#@]?\})/;
Object.keys(D).forEach(function(k){
  var v=D[k];
  if(RE_PH.test(k)){
    var partes=k.split(RE_PH), src='^', alInicio=true;
    partes.forEach(function(p,i){
      if(!RE_PH.test(p)){src+=esc(p); if(p) alInicio=false; return;}
      if(p.indexOf('#')>0) src+='([\\d.,]+)';                                  /* {n#} = cifra */
      else if(p.indexOf('@')>0) src+='([A-Za-záéíóúñ]+(?: \\(2ª\\))? \\d{4})';     /* {n@} = mes año */
      else if(alInicio) src+='((?:[^.;:!?]|\\.(?!\\s)){1,80}?)';                               /* {n} al inicio: corto, sin frases */
      else src+='(.+?)';
      alInicio=false;
    });
    PATS.push({re:new RegExp(src+'$','s'),v:v.replace(/\{(\d+)[#@]?\}/g,'{$1}'),len:k.length});
  } else EXACT.set(k.trim(),v);
});
PATS.sort(function(a,b){return b.len-a.len;});
var MES={enero:'January',febrero:'February',marzo:'March',abril:'April',mayo:'May',junio:'June',julio:'July',agosto:'August',septiembre:'September',setiembre:'September',octubre:'October',noviembre:'November',diciembre:'December'};
var MES3={ene:'Jan',feb:'Feb',mar:'Mar',abr:'Apr',may:'May',jun:'Jun',jul:'Jul',ago:'Aug',sep:'Sep',oct:'Oct',nov:'Nov',dic:'Dec'};
var L='enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre';
var reFecha=new RegExp('^(?:(?:\\d{1,4}|de|a|y|–|-|\\(2ª\\)|'+L+'|ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)b?\\s*)+$','i');
var reMesLargo=new RegExp('\\b(\\d{1,2}) de ('+L+')\\b','gi');
var reMesAno=new RegExp('\\b('+L+') de (\\d{4})\\b','gi');
var reMes=new RegExp('\\b('+L+')\\b','gi');
var reMes3=/\b(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)(b?) (\d{2}|\d{4})\b/gi;
function meses(s){
  if(!reFecha.test(s)) return s;                    /* solo fechas sueltas: nunca dentro de una frase */
  return s.replace(reMesLargo,function(m,d,n){return MES[n.toLowerCase()]+' '+d;})
          .replace(reMesAno,function(m,n,y){return MES[n.toLowerCase()]+' '+y;})
          .replace(reMes,function(m){return MES[m.toLowerCase()];})
          .replace(reMes3,function(m,n,b,y){return MES3[n.toLowerCase()]+b+' '+y;})
          .replace(/\(2ª\)/g,'(2nd)');
}
function tr(core,depth){
  if(depth>5||!core) return core;
  var n=core.replace(/\s+/g,' ');
  var e=EXACT.get(n); if(e!==undefined) return e;
  if(n.length>400) return core;                     /* textos largos (respuestas del motor) se dejan tal cual */
  if(n.indexOf(' · ')>=0){return n.split(' · ').map(function(p){return translate(p,depth+1);}).join(' · ');}
  if(/ ·$/.test(n)) return translate(n.slice(0,-2),depth+1)+' ·';
  if(/^· /.test(n)) return '· '+translate(n.slice(2),depth+1);
  for(var i=0;i<PATS.length;i++){
    var m=n.match(PATS[i].re);
    if(m){var v=PATS[i].v; return v.replace(/\{(\d+)\}/g,function(_,k){return translate(m[+k+1]||'',depth+1);});}
  }
  if(/\.$/.test(n)&&depth<4){var sinPunto=tr(n.slice(0,-1),depth+1); if(sinPunto!==n.slice(0,-1)) return sinPunto+'.';}
  return meses(n)===n?core:meses(n);
}
function translate(text,depth){
  if(!text||!/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/.test(text)) return text;
  var m=text.match(/^(\s*)([\s\S]*?)(\s*)$/);
  return m[1]+tr(m[2],depth||0)+m[3];
}

var ORIG=new WeakMap(), SET=new WeakMap(), ORIGA=new WeakMap();
var lang='es';
function skip(el){
  for(var e=el;e&&e.nodeType===1;e=e.parentNode){
    var t=e.tagName; if(t==='SCRIPT'||t==='STYLE'||t==='NOSCRIPT'||t==='TEXTAREA'||e.hasAttribute('data-noi18n')) return true;
  }
  return false;
}
function applyText(n){
  if(!ORIG.has(n)) ORIG.set(n,n.data);
  var o=ORIG.get(n), v=lang==='en'?translate(o):o;
  if(n.data!==v){SET.set(n,v); n.data=v;}
}
function applyAttrs(el){
  var rec=ORIGA.get(el);
  ATTRS.forEach(function(a){
    if(!el.hasAttribute(a)) return;
    if(!rec){rec={};ORIGA.set(el,rec);}
    if(!(a in rec)) rec[a]=el.getAttribute(a);
    var v=lang==='en'?translate(rec[a]):rec[a];
    if(el.getAttribute(a)!==v){rec['_set_'+a]=v; el.setAttribute(a,v);}
  });
}
function walk(root){
  if(root.nodeType===3){ if(!skip(root.parentNode)) applyText(root); return; }
  if(root.nodeType!==1&&root.nodeType!==9&&root.nodeType!==11) return;
  if(root.nodeType===1){ if(skip(root)) return; applyAttrs(root); }
  var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,null);
  var n;
  while((n=w.nextNode())){
    if(n.nodeType===1){ if(!skip(n)) applyAttrs(n); }
    else if(!skip(n.parentNode)) applyText(n);
  }
}
var obs=null;
function observar(){
  if(obs) return;
  obs=new MutationObserver(function(muts){
    muts.forEach(function(m){
      if(m.type==='childList'){ m.addedNodes.forEach(function(n){walk(n);}); }
      else if(m.type==='characterData'){
        var n=m.target; if(skip(n.parentNode)) return;
        if(SET.get(n)===n.data) return;           /* lo escribimos nosotros */
        ORIG.set(n,n.data); applyText(n);
      } else if(m.type==='attributes'){
        var el=m.target; if(skip(el)) return;
        var rec=ORIGA.get(el)||{}; var a=m.attributeName;
        if(rec['_set_'+a]===el.getAttribute(a)) return;
        ORIGA.set(el,rec); rec[a]=el.getAttribute(a); applyAttrs(el);
      }
    });
  });
  obs.observe(document.documentElement,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:ATTRS});
}
function set(l){
  lang=(l==='en')?'en':'es';
  try{localStorage.setItem('d2v_idioma',lang);}catch(e){}
  document.documentElement.setAttribute('lang',lang);
  walk(document.documentElement);
  document.querySelectorAll('[data-idioma]').forEach(function(b){b.classList.toggle('on',b.dataset.idioma===lang);b.setAttribute('aria-pressed',b.dataset.idioma===lang?'true':'false');});
}
function inicial(){
  var g=null; try{g=localStorage.getItem('d2v_idioma');}catch(e){}
  if(g==='en'||g==='es') return g;
  return /^en\b/i.test(navigator.language||'')?'en':'es';
}
function arrancar(){
  observar();
  set(inicial());
  document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-idioma]'); if(b){e.preventDefault(); set(b.dataset.idioma);}});
}
window.d2vIdioma={set:set,get:function(){return lang;},t:function(s){return lang==='en'?translate(s):s;}};
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',arrancar); else arrancar();
})();
