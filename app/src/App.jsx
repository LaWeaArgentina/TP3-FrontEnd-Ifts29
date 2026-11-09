import './App.css'

const statements = {
  r1: 'Si la compra todavía no fue pagada, el comercio está adherido y la decisión vigente del cliente es aceptar el redondeo, el sistema calcula el total con una única donación y lo muestra antes de confirmar el pago.',
  r2: 'Si la compra todavía no fue pagada y la decisión vigente del cliente es rechazar el redondeo, el sistema muestra el importe original de la compra sin agregar una donación.',
}

function Arrow({ label }) {
  return (
    <div className="flow-arrow" aria-hidden="true">
      <span>{label}</span>
      <span className="arrow-symbol">↓</span>
    </div>
  )
}

function FlowDiagram({ id, condition, accepted, rejected }) {
  return (
    <div className="flow-diagram" role="group" aria-label={`Diagrama de flujo ${id}`}>
      <div className="flow-node flow-start">Inicio · revisión de una compra pendiente de pago</div>
      <Arrow />
      <div className="flow-node flow-input">{id === 'R1' ? 'Consultar estado de pago, adhesión del comercio y decisión vigente del cliente' : 'Consultar estado de pago y decisión vigente del cliente'}</div>
      <Arrow />
      <div className="flow-decision">
        <span className="decision-label">Decisión</span>
        <strong>{condition}</strong>
      </div>
      <div className="branch-connector" aria-hidden="true">
        <span className="branch-line" />
      </div>
      <div className="flow-branches">
        <div className="flow-branch">
          <span className="branch-label yes">Sí</span>
          <span className="branch-arrow" aria-hidden="true">↓</span>
          <div className="flow-node flow-success">{accepted}</div>
          <div className="flow-end">Fin de la propuesta</div>
        </div>
        <div className="flow-branch">
          <span className="branch-label no">No</span>
          <span className="branch-arrow" aria-hidden="true">↓</span>
          <div className="flow-node flow-undefined">{rejected}</div>
          <div className="flow-end">Fin de la propuesta</div>
        </div>
      </div>
    </div>
  )
}

function Proposal({ id, title, benefit, statement, condition, accepted, rejected, inputs, steps, result, note }) {
  return (
    <article className="proposal-card" id={id.toLowerCase()}>
      <div className="proposal-heading">
        <span className="proposal-id">{id}</span>
        <div>
          <p className="eyebrow">Propuesta de flujo</p>
          <h3>{title}</h3>
        </div>
      </div>
      <p className="proposal-benefit">{benefit}</p>
      <blockquote className="rule-quote">{statement}</blockquote>

      <h4 className="diagram-title">Recorrido propuesto</h4>
      <FlowDiagram
        id={id}
        condition={condition}
        accepted={accepted}
        rejected={rejected}
      />

      <details className="proposal-details">
        <summary>Ver entradas, pasos y alcance de {id}</summary>
        <div className="details-content">
          <div>
            <h4>Entradas conceptuales</h4>
            <p>{inputs}</p>
          </div>
          <div>
            <h4>Condición</h4>
            <p>{condition}</p>
          </div>
          <div>
            <h4>Pasos del agente propuesto</h4>
            <ol>
              {steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
          <div>
            <h4>Resultado esperado</h4>
            <p>{result}</p>
          </div>
          <p className="design-note"><strong>Alcance:</strong> {note}</p>
        </div>
      </details>
    </article>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="RedBarrioAnimal, inicio">
          <img src="/logo.webp" alt="Logo de RedBarrioAnimal" />
        </a>
        <nav aria-label="Navegación principal">
          <a href="#propuestas">Propuestas</a>
          <a href="#acerca">Acerca de</a>
        </nav>
        <a className="header-tag" href="#propuestas">Grupo 28 <span>·</span> S02-A</a>
      </header>

      <main id="main-content">
        <section className="hero-section" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">TP3 Front End <span className="eyebrow-dot">/</span> IFTS 29</p>
            <h1>Una decisión clara.<br /><span>Una ayuda que suma.</span></h1>
            <p className="hero-description">
              Dos propuestas para acompañar el consentimiento de donación por redondeo
              en cada compra, con reglas claras y sin automatizar decisiones que no están definidas.
            </p>
            <a className="primary-link" href="#propuestas">Explorar propuestas <span aria-hidden="true">↓</span></a>
          </div>
          <aside className="assignment-card" aria-label="Datos de la asignación">
            <span className="assignment-label">Propuestas para</span>
            <h2>RedBarrioAnimal</h2>
            <p>Red de donaciones por redondeo de compras para refugios de animales.</p>
            <div className="assignment-divider" />
            <div className="assignment-meta">
              <span><strong>Grupo</strong> 28</span>
              <span><strong>Bloque</strong> S02-A</span>
            </div>
            <p className="origin-note">Startup creada por estudiantes del IFTS 16.</p>
          </aside>
          <span className="hero-decoration decoration-one" aria-hidden="true" />
          <span className="hero-decoration decoration-two" aria-hidden="true" />
        </section>

        <section className="intro-strip" aria-label="Principios de las propuestas">
          <p><span>01</span> Consentimiento vigente</p>
          <p><span>02</span> Una regla por recorrido</p>
          <p><span>03</span> Sin cobros automáticos</p>
        </section>

        <section className="proposals-section" id="propuestas">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Dos reglas, dos recorridos</p>
              <h2>Propuestas de solución</h2>
            </div>
            <p className="section-intro">Cada flujo representa lo que establece su sentencia. Los casos restantes se señalan como no definidos.</p>
          </div>

          <div className="proposal-list">
            <Proposal
              id="R1"
              title="Cuando el cliente acepta"
              benefit="Presentar el total con una única donación antes de confirmar el pago, respetando la decisión vigente del cliente."
              statement={statements.r1}
              condition="Compra impaga Y comercio adherido Y cliente acepta el redondeo."
              accepted="Calcular el total con una única donación y mostrarlo antes de confirmar el pago."
              rejected="Esta sentencia no define el resultado cuando una o más condiciones no se cumplen."
              inputs="Estado de pago, adhesión del comercio y decisión vigente del cliente."
              steps={[
                'Consultar conceptualmente el estado de pago, la adhesión del comercio y la decisión vigente del cliente.',
                'Evaluar conjuntamente las tres condiciones: compra impaga Y comercio adherido Y cliente acepta.',
                'Si se cumplen, calcular un total con una única donación y mostrarlo antes de confirmar el pago.',
              ]}
              result="Se muestra el total calculado con una única donación antes de confirmar el pago. No se confirma ni se cobra automáticamente."
              note="La rama «No» no agrega una consecuencia: R1 no especifica qué hacer en ese caso. Tampoco se define una fórmula de redondeo."
            />
            <Proposal
              id="R2"
              title="Cuando el cliente rechaza"
              benefit="Mantener visible el importe original sin sumar una donación cuando la decisión vigente es rechazar."
              statement={statements.r2}
              condition="Compra impaga Y cliente rechaza el redondeo."
              accepted="Mostrar el importe original de la compra, sin agregar una donación."
              rejected="Esta sentencia no define el resultado cuando una o más condiciones no se cumplen."
              inputs="Estado de pago y decisión vigente del cliente."
              steps={[
                'Consultar conceptualmente el estado de pago y la decisión vigente del cliente.',
                'Evaluar conjuntamente las dos condiciones: compra impaga Y cliente rechaza.',
                'Si se cumplen, mostrar el importe original de la compra sin agregar una donación.',
              ]}
              result="Se muestra el importe original de la compra sin agregar una donación."
              note="La rama «No» no agrega una consecuencia: R2 no especifica qué hacer en ese caso. La adhesión del comercio no forma parte de esta regla."
            />
          </div>
        </section>

        <section className="about-section" id="acerca">
          <div className="about-mark" aria-hidden="true">RBA</div>
          <div>
            <p className="eyebrow">Sobre esta propuesta</p>
            <h2>Claridad antes de cada pago.</h2>
            <p>RedBarrioAnimal conecta donaciones por redondeo de compras con el bienestar animal. Estas propuestas describen flujos conceptuales para consentimiento y cobro; no se conectan a servicios ni ejecutan automatizaciones reales.</p>
          </div>
          <a className="text-link" href="#inicio">Volver arriba ↑</a>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#inicio">RedBarrioAnimal</a>
        <span>Grupo 28 <span aria-hidden="true">·</span> Bloque S02-A</span>
        <span>Propuesta académica · IFTS 29</span>
      </footer>
    </>
  )
}

export default App
