# \# Encuentra el tesoro

# 

# Misión M1 · El Despertar del DOM — Web Development I.

# 

# \## Cómo probarlo

# Abre index.html en el navegador (o con Live Server). Empieza a pulsar 

# los montones de tierra hasta encontrar el tesoro. Tecla secreta: pulsa "d" para

# el modo dia.

# 

# \## Uso de IA













# Usé claude como ayuda a la hora de implementar ideas y de hacer el css para que lo dejara medio bonito.

# Ejemplo: "Como se usa e implementa para hacer un createElement que cree las clases que tengo en el css?"



# Usé Gemini CLI (VS Code) como pareja de programación, fase a fase.

# Ejemplo de prompt real: "Propón 4 o 5 fases pequeñas para construir un

# whack-a-mole en JS puro; no escribas código todavía".

# Verifiqué cada cambio jugando una partida completa antes de aceptar la

# siguiente fase, y probé los casos límite (clic en casilla vacía, clic

# después del fin de partida).

# Escribí a mano: el setTimeout encadenado que hace aparecer los bugs,

# que la primera propuesta resolvía con setInterval y no se detenía bien

# al acabar la partida.

# 

# \## Autopsia

# 1\. Guardo la posición del bug activo en una variable del módulo en vez

# &#x20;  de leerla del DOM cada vez, porque el DOM solo debería reflejar el

# &#x20;  estado, no ser la fuente de verdad. Descarté buscar la casilla por su

# &#x20;  clase CSS: es más frágil y acopla la lógica al aspecto.

# 2\. Uso un solo listener en el contenedor de la cuadrícula (delegación) en

# &#x20;  vez de nueve listeners, uno por casilla. Descarté los nueve porque al

# &#x20;  reiniciar la partida habría que quitarlos y volver a ponerlos, y es

# &#x20;  justo donde aparecen los bugs de eventos duplicados.

