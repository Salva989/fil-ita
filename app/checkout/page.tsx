import { createCheckoutSession } from "../../lib/stripe";

export default async function CheckoutPage() {
  const session = await createCheckoutSession();

  return (
    <main className="status-page">
      <div className="status-card">
        <p className="eyebrow">Stripe Checkout</p>
        <h1>Checkout demo pronto</h1>
        <p>
          Questa pagina usa un placeholder server-side per la sessione Stripe. Appena inseriamo le
          chiavi reali, il pulsante potrà reindirizzare al checkout hosted.
        </p>
        <div className="status-box">
          <span>Session ID</span>
          <strong>{session.id}</strong>
        </div>
        <a className="btn btn-primary" href={session.url}>Vai al checkout simulato</a>
      </div>
    </main>
  );
}
