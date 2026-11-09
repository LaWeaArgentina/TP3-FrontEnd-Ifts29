# Consignas para agentes — TP3 Front End, Grupo 28

Este documento es el contexto de trabajo para los agentes de programación que colaboren en este repositorio. Antes de hacer cambios, leerlo junto con el `README.md` y revisar el estado actual del proyecto.

## 1. Objetivo del trabajo

Construir, mediante instrucciones a agentes de programación, una landing page clara y navegable que presente dos propuestas de solución para las reglas asignadas a **RedBarrioAnimal**. Cada propuesta debe explicar una sentencia y mostrar su propio flujo agéntico.

La landing comunica y representa propuestas: **no debe ejecutar agentes ni automatizaciones reales, conectarse a APIs o servicios, ni incorporar backend**. No se exige React; respetar la tecnología y las convenciones que ya tenga el repositorio. Si todavía no hay una aplicación inicializada, acordar primero una alternativa simple con el grupo.

## 2. Fuente de verdad: asignación del grupo

- **Grupo:** 28.
- **Asignación docente:** **S02-A**.
- **Startup destinataria:** **RedBarrioAnimal**.
- **Área:** donaciones y bienestar animal.
- **Descripción del servicio:** red de donaciones por redondeo de compras para refugios de animales.
- **Bloque:** Consentimiento y cobro.
- **Fecha de entrega indicada en el PDF:** 26/11/2026.

La startup fue creada por estudiantes del IFTS 16. Presentarla como destinataria de las propuestas y reconocer ese origen. El logo debe ser el **logo original de RedBarrioAnimal**, completo y legible; no reemplazarlo por un logo inventado ni por la identidad opcional del grupo. Si el recurso original no está en el repositorio ni entre los materiales disponibles, pedirlo al grupo antes de afirmar que está incorporado.

### R1 — Aceptación del redondeo

> “Si la compra todavía no fue pagada, el comercio está adherido y la decisión vigente del cliente es aceptar el redondeo, el sistema calcula el total con una única donación y lo muestra antes de confirmar el pago.”

### R2 — Rechazo del redondeo

> “Si la compra todavía no fue pagada y la decisión vigente del cliente es rechazar el redondeo, el sistema muestra el importe original de la compra sin agregar una donación.”

Conservar estas sentencias literalmente en la landing y asociar cada una a su propia propuesta y diagrama.

## 3. Interpretación obligatoria de las reglas

Analizar las condiciones sin alterar su lógica:

| Sentencia | Datos de entrada | Condición que se evalúa | Resultado exigido |
|---|---|---|---|
| R1 | Estado de pago, adhesión del comercio y decisión vigente del cliente | La compra no está pagada **Y** el comercio está adherido **Y** el cliente acepta el redondeo | Calcular el total con **una única donación** y mostrarlo antes de confirmar el pago |
| R2 | Estado de pago y decisión vigente del cliente | La compra no está pagada **Y** el cliente rechaza el redondeo | Mostrar el importe original, **sin agregar una donación** |

- No omitir ni cambiar ninguna condición, y conservar el sentido de **Y** (conjunción).
- El resultado de R1 es mostrar un total calculado antes de confirmar el pago; la sentencia no dice que el sistema confirme o cobre automáticamente.
- R2 no requiere que el comercio esté adherido; no agregar esa condición.
- Las sentencias establecen qué ocurre cuando sus condiciones se cumplen, pero no especifican todos los demás casos. No presentar como regla original una respuesta para condiciones no satisfechas, pago ya efectuado, decisión ausente o desactualizada, errores de datos ni fórmula de redondeo.
- Si se propone una salida para esos casos, identificarla expresamente como **decisión de diseño del grupo**, explicar por qué y no contradecir las sentencias. Si para definirla falta una decisión del grupo, preguntar antes de inventarla.
- No inventar el importe, la fórmula de redondeo, políticas de donación, nombres de refugios, funcionalidades existentes, integrantes, aportes, herramientas ni modelos.

## 4. Contenido de la landing

Incluir como mínimo:

1. Presentación de RedBarrioAnimal: nombre, logo original, servicio y descripción breve.
2. Identificación del grupo 28 y del bloque S02-A.
3. Las dos sentencias originales, visibles y legibles.
4. Una propuesta titulada por sentencia, con beneficio explicado brevemente.
5. Un diagrama gráfico independiente para cada propuesta.
6. Un desplegable accesible por propuesta con entradas, condición, pasos, resultado esperado y excepciones o decisiones de diseño que correspondan.

La propuesta puede describir conceptualmente un agente futuro y mencionar qué información consultaría o cuándo pediría intervención humana. No implica implementar esos servicios en la landing.

## 5. Recorridos mínimos para los diagramas

Los siguientes recorridos expresan las sentencias. El equipo debe elegir títulos y diseño visual, pero no alterar los resultados:

### Flujo R1

1. Inicio: se inicia la revisión de una compra pendiente de pago.
2. Consultar conceptualmente el estado de pago, la adhesión del comercio y la decisión vigente del cliente.
3. Decidir si se cumplen **las tres** condiciones: compra impaga **Y** comercio adherido **Y** cliente acepta.
4. **Sí:** calcular un total con una única donación y mostrarlo antes de confirmar el pago.
5. **No:** el flujo debe reflejar que R1 no determina por sí sola el resultado de este caso. Si se agrega una acción —por ejemplo, no agregar donación o derivar a revisión— marcarla como decisión del grupo y validarla con sus integrantes.
6. Mostrar el resultado y finalizar la propuesta.

### Flujo R2

1. Inicio: se inicia la revisión de una compra pendiente de pago.
2. Consultar conceptualmente el estado de pago y la decisión vigente del cliente.
3. Decidir si la compra sigue impaga **Y** el cliente rechaza.
4. **Sí:** mostrar el importe original sin agregar una donación.
5. **No:** dejar claro que R2 no establece qué hacer ante ese resultado; cualquier alternativa añadida es una decisión del grupo.
6. Mostrar el resultado y finalizar la propuesta.

Los diagramas deben rotular las ramas de decisión (por ejemplo, **Sí** y **No**), conectar los pasos con flechas y permitir seguir cada recorrido sin depender de una explicación oral. No convertir una rama no definida por la sentencia en una consecuencia obligatoria.

## 6. Forma de trabajo para los agentes

1. Inspeccionar los archivos existentes y las instrucciones del repositorio. Preservar el trabajo previo y las convenciones ya establecidas.
2. Confirmar con el grupo cualquier dato faltante que cambie el contenido: logo original, nombres y aportes, decisiones de diseño fuera de las sentencias, identidad visual u opciones técnicas que el repositorio aún no determine.
3. Proponer una estructura de página antes de implementarla. Priorizar la propuesta principal y los dos flujos; usar desplegables para los detalles.
4. Implementar por etapas: estructura y contenido; diagramas y desplegables; estilos y ajustes.
5. Después de cada etapa, informar qué cambió y pedir revisión al grupo. El grupo dirige el proceso y debe comprender y validar lo entregado.
6. No editar código manualmente como parte del trabajo grupal: generar los cambios mediante el agente de programación, según la consigna del TP.
7. Registrar en el `README.md` los nombres reales y aportes; aplicación y modelo de IA por separado; usos y cambios solicitados. Si el modelo no se informa, escribir **“modelo no informado”**.
8. No declarar que algo está probado, publicado o completo si no se verificó.

## 7. Validación antes de terminar

- [ ] Se conserva la asignación correcta: grupo 28, RedBarrioAnimal, bloque S02-A.
- [ ] El logo original está completo y legible; no se ha inventado ni sustituido.
- [ ] Las dos sentencias se muestran literalmente, sin alterar sus condiciones.
- [ ] Hay una propuesta y un diagrama legible para cada sentencia.
- [ ] Cada diagrama presenta entradas, decisión, ramas, acciones y resultado.
- [ ] Se identifica como decisión de diseño toda salida no especificada en la sentencia.
- [ ] Los desplegables se pueden abrir y cerrar con clic y teclado y su contenido es comprensible.
- [ ] En desktop se pueden leer la landing y los diagramas sin desbordes ni contenido cortado.
- [ ] Se recorre al menos un caso que cumple y uno que no cumple las condiciones de cada sentencia.
- [ ] No se implementaron conexiones, APIs, backend ni automatizaciones reales.
- [ ] El grupo revisó el resultado y puede explicar ambas propuestas.
- [ ] El `README.md` registra integrantes, aportes, herramientas y modelos sin datos inventados.
- [ ] El repositorio y la landing están publicados y sus enlaces se comprobaron sin sesión.

La evaluación indicada en el PDF es **Aprobado / Desaprobado**, sin nota numérica. La rúbrica valora participación, repositorio y landing publicados, contenido de la landing, dos flujos coherentes y registro del proceso con herramientas de IA.
