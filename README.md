# \# Encuentra el tesoro

# 

# Misión M1 · El Despertar del DOM — Web Development I.

# 

# \## Cómo probarlo

# Abre index.html en el navegador (o con Live Server). Empieza a pulsar

# los montones de tierra hasta encontrar el tesoro. Tecla secreta: pulsa

# "d" para el modo día.

# 

# \## Uso de IA

# Usé Claude como ayuda a la hora de implementar ideas y de hacer el CSS

# para que quedara medio bonito.

# 

# Ejemplos de prompts reales: "¿Cómo se usa e implementa createElement

# para crear los elementos que tengo definidos en el CSS?" y "¿Cómo hace

# JavaScript para identificar que has pulsado una tecla específica?"

# 

# Tras un par de subidas a la Arena, añadí los consejos que recomendaba

# el corrector, como que tras ganar apareciera un botón para reiniciar

# la partida.

# 

# El sistema de reinicio e inicio de partida lo hice completamente a

# mano. La función `dig` la hice con ayuda de Claude, y los event

# listeners también los hice con ayuda de la IA para entender cómo

# formatearlos correctamente.

# 

# \## Autopsia

# 1\. Al principio tenía la clase `.pile` repetida 9 veces en el HTML,

# &#x20;  cada una con su propio `onclick`. Luego decidí que fuera el JS quien

# &#x20;  las creara con `createElement` y les asignara su índice mediante

# &#x20;  `dataset.index`, para tener mayor comodidad a la hora de modificarlas

# &#x20;  y ser más eficiente.

# 2\. `resetGame` originalmente ejercía toda la lógica de reiniciar la

# &#x20;  partida dentro de sí misma, pero lo cambié para tener mayor limpieza

# &#x20;  y eficiencia, separando su funcionamiento en otras funciones.

