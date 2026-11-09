# TP3 Front End — Grupo 28

Landing con dos propuestas de flujos conceptuales para **RedBarrioAnimal**, destinataria del proyecto académico del IFTS 29.

## Datos de la asignación

- **Grupo:** 28
- **Startup:** RedBarrioAnimal, creada por estudiantes del IFTS 16
- **Área:** donaciones y bienestar animal
- **Servicio:** red de donaciones por redondeo de compras para refugios de animales
- **Bloque:** S02-A — Consentimiento y cobro
- **Entrega indicada en la consigna:** 26/11/2026

### Sentencias originales

1. **R1:** “Si la compra todavía no fue pagada, el comercio está adherido y la decisión vigente del cliente es aceptar el redondeo, el sistema calcula el total con una única donación y lo muestra antes de confirmar el pago.”
2. **R2:** “Si la compra todavía no fue pagada y la decisión vigente del cliente es rechazar el redondeo, el sistema muestra el importe original de la compra sin agregar una donación.”

Se conservan literalmente en la landing. El análisis y los recorridos pedidos están en [consignas.md](./consignas.md).

## Integrantes y aportes

Completar los aportes concretos antes de entregar; se dejan en blanco hasta que el grupo los defina.

| Integrante | Perfil de GitHub | Aporte concreto |
|---|---|---|
| Elián Bargaz | [Elibar19](https://github.com/Elibar19) |  |
| Juan Ignacio Solari | [LaWeaArgentina](https://github.com/LaWeaArgentina) |  |
| Eliana Gisele Navarro | [Eli-Navarr0](https://github.com/Eli-Navarr0) |  |
| María Fernanda Ortiz | [ortizgonzalezmariafer](https://github.com/ortizgonzalezmariafer) |  |
| Emanuel Andrés Grigolatto | [egrigolatto](https://github.com/egrigolatto) |  |

## Tecnología y ejecución local

El grupo acordó **React + Vite**. La aplicación está en [`app/`](./app/).

```powershell
npm install
npm run dev
```

Para validar la compilación y el estilo:

```powershell
npm run build
npm run lint
```

Ejecutá estos comandos desde la raíz del repositorio.

La landing es informativa: no conecta con servicios o APIs, no tiene backend ni ejecuta automatizaciones reales. Los detalles de cada propuesta están en desplegables accesibles con clic y teclado.

## Herramientas de IA y proceso

Se registra el modelo como “modelo no informado” cuando la herramienta no lo comunica; no se infiere ni se completa por suposición.

| Aplicación | Modelo | Uso y cambios solicitados |
|---|---|---|
| Copilot SDK en VS Code | modelo no informado | Construcción de la landing en React + Vite; implementación de los contenidos, propuestas, diagramas, estilos adaptables y detalles accesibles según las consignas. Se solicitó respetar literalmente las dos reglas y no inventar resultados para condiciones no definidas. |

### Iteraciones relevantes

| Instrucción o decisión | Problema o dato pendiente | Corrección solicitada / resultado |
|---|---|---|
| Seguir las consignas del TP3. | El repositorio contenía documentación y el logo, pero no una aplicación inicializada. | Se consultó al grupo antes de elegir tecnología; el grupo acordó React + Vite. |
| Representar R1 y R2 en flujos separados. | Las sentencias no establecen qué ocurre cuando sus condiciones no se cumplen. | Se muestran las ramas “No” como resultado no definido por la sentencia, sin agregar acciones obligatorias. |
| Incorporar identidad y participantes. | Era necesario confirmar el logo y recibir los nombres reales; los aportes aún no se informaron. | El grupo confirmó `logo.webp` como logo original y proporcionó los cinco nombres; las celdas de aportes quedan en blanco. |

## Proyecto y publicación

- **Repositorio:** pendiente de publicar o completar.
- **Landing publicada:** pendiente de publicar.
- **Comprobación de enlaces y versión final sin sesión:** pendiente.

Antes de entregar, publicar ambos enlaces, comprobarlos en una ventana sin sesión y confirmar que la landing publicada corresponde a la versión final revisada por el grupo.

## Criterios de cierre

- La landing presenta el logo original, el servicio, el grupo 28 y el bloque S02-A.
- Presenta las dos sentencias originales y una propuesta con diagrama por sentencia.
- Los diagramas incluyen entradas, condiciones, ramas rotuladas, acciones y resultados; los casos no definidos no se presentan como reglas originales.
- Los detalles de cada propuesta se consultan en desplegables accesibles.
- La página se adapta a desktop y móvil. No implementa conexiones, backend ni automatizaciones.
- El grupo completa y valida los aportes de cada integrante, revisa el resultado y puede explicar ambas propuestas.
- Se publican el repositorio y la landing; se comprueban los enlaces y la versión final sin sesión.
