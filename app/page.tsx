const featured = [
  {
    title: "Film A",
    icon: "🎞️",
    text: "Dramma urbano, fotografia notturna, mood da cinema d’autore.",
    tone: "gold",
  },
  {
    title: "Film B",
    icon: "🍿",
    text: "Thriller compatto con vibe neon e ritmo da maratona serale.",
    tone: "red",
  },
  {
    title: "Film C",
    icon: "📽️",
    text: "Classico da recuperare, perfetto per una selezione editoriale.",
    tone: "blue",
  },
  {
    title: "Film D",
    icon: "🎬",
    text: "Commedia brillante per dare varietà e leggerezza al catalogo.",
    tone: "cream",
  },
];

const benefits = [
  {
    title: "✅ Accesso a vita",
    text: "Paghi una volta e il servizio resta tuo, senza rinnovi mensili.",
  },
  {
    title: "⚡ Veloce e semplice",
    text: "Niente ricerche infinite, tutto raccolto in una sola piattaforma.",
  },
  {
    title: "📱 Multi-device",
    text: "Esperienza pensata per mobile e desktop, senza attriti.",
  },
  {
    title: "🎞️ Curato",
    text: "Catalogo organizzato con un tono più editoriale che database freddo.",
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand">FILM <span>🎬</span> ITA</div>
        <nav className="nav">
          <a href="#catalogo">Cerca</a>
          <a href="#vantaggi">Perché noi</a>
          <a href="#pagamento">Accesso</a>
        </nav>
        <a className="account-pill" href="#pagamento">👤 Account</a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Cinema online, senza caos</p>
          <h1>Tutti i film gratuiti online, raccolti in un unico posto.</h1>
          <p className="lead">
            Film Ita organizza i link ai film già disponibili gratuitamente sul web in una
            piattaforma ordinata, veloce e pensata per chi vuole smettere di cercare ovunque.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="/checkout">💳 Sblocca accesso</a>
            <a className="btn btn-secondary" href="#catalogo">🚪 Anteprima</a>
          </div>
          <ul className="hero-points">
            <li>✨ Accesso a vita</li>
            <li>📱 Funziona da telefono e PC</li>
            <li>⚡ Un solo posto, zero confusione</li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="marquee marquee-one">
            <span>DRAMMA</span><span>THRILLER</span><span>COMMEDIA</span><span>CULT</span>
          </div>
          <div className="screen-card main-screen">
            <div className="screen-noise" />
            <div className="screen-content">
              <p className="screen-label">In evidenza</p>
              <h2>Una videoteca digitale con atmosfera da sala.</h2>
              <div className="mini-posters">
                <article><span>01</span><strong>Notte Rossa</strong></article>
                <article><span>02</span><strong>La Città Blu</strong></article>
                <article><span>03</span><strong>Cinema Aperto</strong></article>
              </div>
            </div>
          </div>
          <div className="marquee marquee-two">
            <span>ACCESSO A VITA</span><span>ONE TIME</span><span>FILM GRATIS</span>
          </div>
        </div>
      </section>

      <section className="section" id="catalogo">
        <div className="section-heading">
          <p className="eyebrow">🔥 In evidenza</p>
          <h2>Una homepage costruita per far partire subito il film giusto.</h2>
        </div>
        <div className="grid films-grid">
          {featured.map((film) => (
            <article key={film.title} className={`film-card accent-${film.tone}`}>
              <div className="poster">{film.icon}</div>
              <h3>{film.title}</h3>
              <p>{film.text}</p>
              <a href="/checkout">▶️ Guarda</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section spotlight">
        <div>
          <p className="eyebrow">🆕 Ultimi aggiunti</p>
          <h2>Aggiornamenti rapidi, navigazione semplice, impatto visivo forte.</h2>
        </div>
        <div className="ticker">
          <span>Film E</span><span>Film F</span><span>Film G</span><span>Film H</span><span>Nuovi arrivi</span>
        </div>
      </section>

      <section className="section" id="vantaggi">
        <div className="section-heading">
          <p className="eyebrow">⭐ Perché scegliere Film Ita</p>
          <h2>Una promessa semplice, presentata bene.</h2>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article key={benefit.title}>
              <strong>{benefit.title}</strong>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section payment" id="pagamento">
        <div className="payment-copy">
          <p className="eyebrow">💳 Accesso</p>
          <h2>Pagamento una tantum, accesso immediato.</h2>
          <p>
            Flusso consigliato: landing page, checkout ospitato, redirect a pagina di successo,
            sblocco automatico dell’account e accesso tramite magic link.
          </p>
        </div>
        <div className="payment-card">
          <h3>Stack consigliato</h3>
          <ul>
            <li><span>Frontend</span><strong>Next.js</strong></li>
            <li><span>Backend</span><strong>Supabase</strong></li>
            <li><span>Pagamenti</span><strong>Stripe Checkout</strong></li>
            <li><span>Login</span><strong>Magic Link email</strong></li>
          </ul>
          <a className="btn btn-primary" href="/checkout">Apri checkout demo</a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>© FILM ITA 🍿</strong>
          <p>Supporto, accesso e checkout in un flusso pulito e pronto da evolvere.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:supporto@filmita.it">📧 Supporto</a>
          <a href="https://t.me/filmita" target="_blank" rel="noreferrer">📱 Telegram</a>
          <a href="#pagamento">💳 Pagamento</a>
        </div>
      </footer>
    </main>
  );
}
