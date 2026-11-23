# TP3 Front End — Grupo 28

Landing con dos propuestas de flujos conceptuales para **RedBarrioAnimal**, destinataria del proyecto académico del IFTS 29.

## Proyecto y publicación

- **Repositorio:** [LaWeaArgentina/TP3-FrontEnd-Ifts29](https://github.com/LaWeaArgentina/TP3-FrontEnd-Ifts29)
- **Landing publicada:** [tp-3-front-end-ifts29.vercel.app](https://tp-3-front-end-ifts29.vercel.app)

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

El desarrollo fue colaborativo: los cinco participaron en el trabajo general y los aportes de la tabla indican el foco principal de cada uno, no tareas exclusivas.

| Integrante | Perfil de GitHub | Aporte concreto |
|---|---|---|
| Elián Bargaz | [Elibar19](https://github.com/Elibar19) | Análisis de las consignas y revisión de las condiciones de R1 y R2. |
| Juan Ignacio Solari | [LaWeaArgentina](https://github.com/LaWeaArgentina) | Redacción y revisión de los contenidos de las propuestas y la landing. |
| Eliana Gisele Navarro | [Eli-Navarr0](https://github.com/Eli-Navarr0) | Diseño de los diagramas y definición de los recorridos de ambas propuestas. |
| María Fernanda Ortiz | [ortizgonzalezmariafer](https://github.com/ortizgonzalezmariafer) | Desarrollo de la interfaz visual y sus ajustes de estilo adaptable. |
| Emanuel Andrés Grigolatto | [egrigolatto](https://github.com/egrigolatto) | Pruebas y revisión de la landing, y apoyo en la documentación del proyecto. |

## Tecnología y ejecución local

El grupo acordó **React + Vite**. La aplicación está en [`app/`](./app/); es una landing informativa, sin integraciones, APIs, backend ni automatizaciones reales.

```powershell
npm install
npm run dev
```

Estos comandos se ejecutan desde la raíz del repositorio. También se puede iniciar Vite desde `app/` con `npm run dev`.

Para validar la compilación y el estilo, desde la raíz:

```powershell
npm run build
npm run lint
```

## Herramientas de IA y proceso

Se registra el modelo como “modelo no informado” cuando la herramienta no lo comunica; no se infiere ni se completa por suposición.

| Aplicación | Modelo | Uso y cambios solicitados |
|---|---|---|
| Copilot SDK en VS Code | modelo no informado | Construcción y revisión documental de la landing en React + Vite; implementación de contenidos, propuestas, diagramas, estilos adaptables y detalles accesibles. Se solicitó respetar literalmente las reglas, integrar la documentación, revisar la consigna y registrar los puntos pendientes sin inventar datos. |

### Iteraciones relevantes

| Instrucción o decisión | Problema o dato pendiente | Corrección solicitada / resultado |
|---|---|---|
| Seguir las consignas del TP3. | El repositorio contenía documentación y el logo, pero no una aplicación inicializada. | Se consultó al grupo antes de elegir tecnología; el grupo acordó React + Vite. |
| Representar R1 y R2 en flujos separados. | Las sentencias no establecen qué ocurre cuando sus condiciones no se cumplen. | Se muestran las ramas “No” como resultado no definido por la sentencia, sin agregar acciones obligatorias. |
| Incorporar identidad y participantes. | Era necesario confirmar el logo, los nombres y cómo resumir los aportes compartidos. | El grupo confirmó `logo.webp` como logo original, proporcionó los cinco nombres e indicó los focos principales de contribución de cada integrante. |
| Documentar publicación y revisar las consignas. | El README de `app/` duplicaba instrucciones de ejecución; faltaban los enlaces publicados y quedaban verificaciones del grupo por registrar. | Se integra la información de desarrollo en este README, se agregan los enlaces y se anotan los puntos pendientes sin inventar aportes ni decisiones. |
