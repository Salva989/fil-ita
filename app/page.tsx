const featured = [
  {
    title: "Il Conte di Montecristo",
    meta: "Avventura storica · 2002",
    icon: "01",
    thumb: "https://i.ytimg.com/vi/FakJy9EAnBk/hqdefault.jpg",
    text: "Un classico di vendetta e riscatto, ideale per chi cerca un film ampio e narrativo.",
    tone: "gold",
  },
  {
    title: "Parker",
    meta: "Azione / Thriller · 2013",
    icon: "02",
    thumb: "https://i.ytimg.com/vi/KKFveUhnRso/hqdefault.jpg",
    text: "Ritmo teso, colpi preparati al millimetro e una serata da puro cinema d'azione.",
    tone: "red",
  },
  {
    title: "Frankenstein Junior",
    meta: "Commedia cult · 1974",
    icon: "03",
    thumb: "https://i.ytimg.com/vi/IsZwQAUeqRk/hqdefault.jpg",
    text: "Una commedia intramontabile, perfetta per dare leggerezza e qualità al catalogo.",
    tone: "blue",
  },
  {
    title: "Million Dollar Baby",
    meta: "Drammatico / Sportivo · 2004",
    icon: "04",
    thumb: "https://i.ytimg.com/vi/SFvhDHfcpeg/hqdefault.jpg",
    text: "Un dramma intenso e premiato, pensato per una selezione più elegante e curata.",
    tone: "cream",
  },
];

const latestAdded = [
  { title: "Heat - La sfida", wiki: "https://en.wikipedia.org/wiki/Heat_(1995_film)" },
  { title: "Il quinto elemento", wiki: "https://en.wikipedia.org/wiki/The_Fifth_Element" },
  { title: "Dirty Dancing", wiki: "https://en.wikipedia.org/wiki/Dirty_Dancing" },
  { title: "A spasso con Daisy", wiki: "https://en.wikipedia.org/wiki/Driving_Miss_Daisy" },
];

const cinemaGifs = [
  {
    title: "Italian cinema",
    src: "https://media.giphy.com/media/yTsJ4Bcchpxhm/giphy.gif",
    href: "https://giphy.com/gifs/filmlinc-italian-anna-magnani-down-with-misery-yTsJ4Bcchpxhm",
  },
  {
    title: "Italian cinema by MUBI",
    src: "https://media.giphy.com/media/FMfAh4F1LTP9qWw7QX/giphy.gif",
    href: "https://giphy.com/gifs/MUBI-movie-film-mubi-FMfAh4F1LTP9qWw7QX",
  },
  {
    title: "Italian cinema kiss",
    src: "https://media.giphy.com/media/vRLlqjJOfIJooT5LLf/giphy.gif",
    href: "https://giphy.com/gifs/filmstruck-70s-female-filmmaker-vRLlqjJOfIJooT5LLf",
  },
];

const benefits = [
  {
    title: "✅ Accesso a vita",
    text: "Un unico pagamento per entrare nella raccolta ogni volta che vuoi.",
  },
  {
    title: "⚡ Ricerca più rapida",
    text: "Titoli selezionati e ordinati per aiutarti a scegliere senza perdere tempo.",
  },
  {
    title: "📱 Multi-device",
    text: "Consulta la selezione da telefono, tablet o computer con un'interfaccia chiara.",
  },
  {
    title: "🎞️ Curato",
    text: "Una raccolta presentata con gusto, miniature, categorie e aggiornamenti frequenti.",
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand">FILM <span>🎬</span> ITA</div>
        <nav className="nav">
          <a href="#catalogo">Cerca</a>
          <a href="#vantaggi">Perché Film Ita</a>
          <a href="#pagamento">Accesso</a>
        </nav>
        <a className="account-pill" href="#pagamento">👤 Entra</a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Cinema online, finalmente ordinato</p>
          <h1>Trova film in italiano senza perdere tempo tra mille ricerche.</h1>
          <p className="lead">
            Film Ita raccoglie e organizza una selezione di film disponibili online, con una
            pagina semplice da consultare e pensata per arrivare subito al titolo giusto.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="/checkout">💳 Ottieni accesso</a>
            <a className="btn btn-secondary" href="#catalogo">🎬 Guarda anteprima</a>
          </div>
          <ul className="hero-points">
            <li>✨ Accesso per sempre</li>
            <li>📱 Perfetto da mobile e desktop</li>
            <li>⚡ Selezione chiara, navigazione veloce</li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-clapper-emoji">
            🎬
          </div>
        </div>
      </section>

      <section className="section" id="catalogo">
        <div className="section-heading">
          <p className="eyebrow">🔥 In evidenza</p>
          <h2>Una selezione iniziale per scegliere subito cosa guardare.</h2>
        </div>
        <div className="cinema-gif-feature">
          <a href={cinemaGifs[0].href} target="_blank" rel="noreferrer">
            <img src={cinemaGifs[0].src} alt={cinemaGifs[0].title} />
          </a>
          <div>
            <span>Atmosfera cinema italiano</span>
            <strong>Una pagina più viva, curata e piacevole da sfogliare.</strong>
          </div>
        </div>
        <div className="grid films-grid">
          {featured.map((film) => (
            <article key={film.title} className={`film-card accent-${film.tone}`}>
              <div className="poster">
                <img src={film.thumb} alt="" />
                <span>{film.icon}</span>
              </div>
              <span className="film-meta">{film.meta}</span>
              <h3>{film.title}</h3>
              <p>{film.text}</p>
              <span className="film-status">Scheda in anteprima</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section spotlight">
        <div>
          <p className="eyebrow">🆕 Ultimi aggiunti</p>
          <h2>Nuovi titoli e schede utili per scoprire rapidamente cosa ti interessa.</h2>
        </div>
        <div className="ticker">
          {latestAdded.map((film) => (
            <a key={film.title} href={film.wiki} target="_blank" rel="noreferrer">
              {film.title}
            </a>
          ))}
          <span>Nuovi arrivi</span>
        </div>
        <div className="cinema-gif-feature">
          <a href={cinemaGifs[1].href} target="_blank" rel="noreferrer">
            <img src={cinemaGifs[1].src} alt={cinemaGifs[1].title} />
          </a>
          <div>
            <span>Nuovi arrivi</span>
            <strong>Aggiungiamo nuovi riferimenti per mantenere la raccolta fresca e facile da esplorare.</strong>
          </div>
        </div>
      </section>

      <section className="section" id="vantaggi">
        <div className="section-heading">
          <p className="eyebrow">⭐ Perché scegliere Film Ita</p>
          <h2>Meno tempo a cercare, più tempo per guardare.</h2>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article key={benefit.title}>
              <strong>{benefit.title}</strong>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
        <div className="transparency-note">
          <div>
            <p className="eyebrow">ℹ️ Trasparenza e provenienza dei contenuti</p>
            <h3>Film Ita organizza contenuti già disponibili su piattaforme esterne.</h3>
          </div>
          <p>
            Film Ita non ospita direttamente i film sui propri server e non carica contenuti
            protetti da copyright. I contenuti presenti nel catalogo provengono da piattaforme
            esterne già pubblicamente accessibili online.
          </p>
          <div className="source-list">
            <article>
              <strong>YouTube</strong>
              <p>
                Alcuni canali o aziende pubblicano film e contenuti monetizzandoli tramite
                pubblicità.
              </p>
            </article>
            <article>
              <strong>Internet Archive</strong>
              <p>
                Biblioteca digitale pubblica che rende disponibili materiali liberamente
                consultabili.
              </p>
            </article>
          </div>
          <p>
            Film Ita si limita a organizzare e indicizzare link già esistenti sul web, rendendo
            più semplice la ricerca per l'utente finale. Nessun film viene copiato, caricato o
            archiviato da Film Ita: la visione avviene sempre sulla piattaforma originale che
            ospita il contenuto.
          </p>
          <div className="copyright-box">
            <h4>© Segnalazioni copyright</h4>
            <p>
              Se ritieni che uno dei contenuti segnalati nel catalogo violi diritti d'autore o
              copyright, puoi inviare una segnalazione a{" "}
              <a href="mailto:giovanniseicarota@gmail.com">giovanniseicarota@gmail.com</a>.
            </p>
            <p>
              Le richieste verificate verranno esaminate e il contenuto eventualmente rimosso dal
              catalogo nel minor tempo possibile.
            </p>
          </div>
          <p>
            Il progetto non è un semplice elenco automatico di titoli: ogni selezione viene
            ricercata, valutata e curata editorialmente per offrire un catalogo più interessante,
            coerente e piacevole da esplorare. L'obiettivo è valorizzare opere meritevoli, creare
            percorsi di visione e proporre una navigazione con un taglio più culturale e artistico.
          </p>
        </div>
      </section>

      <section className="section payment" id="pagamento">
        <div className="payment-copy">
          <p className="eyebrow">💳 Accesso</p>
          <h2>Nessun abbonamento mensile.</h2>
          <p>
            Paghi una volta e il servizio sarà tuo per sempre.
          </p>
        </div>
        <div className="payment-card access-card" aria-label="Accesso per sempre">
          <div className="access-reel">
            <span />
            <span />
            <span />
            <span />
          </div>
          <h3>Accesso per sempre</h3>
          <p>Un ingresso unico alla raccolta, senza rinnovi mensili e senza costi nascosti.</p>
          <a className="btn btn-primary" href="/checkout">Procedi all'accesso</a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>© FILM ITA 🍿</strong>
          <p>Una raccolta ordinata per trovare più facilmente film in italiano online.</p>
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
