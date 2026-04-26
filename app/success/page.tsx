export default function SuccessPage() {
  return (
    <main className="status-page">
      <div className="status-card success-card">
        <p className="eyebrow">✅ Pagamento completato</p>
        <h1>Accesso sbloccato</h1>
        <p>
          Pagina pensata per il redirect dopo Stripe Checkout. Qui possiamo collegare login magic
          link, onboarding o accesso diretto alla piattaforma.
        </p>
        <a className="btn btn-primary" href="/">Torna alla home</a>
      </div>
    </main>
  );
}
