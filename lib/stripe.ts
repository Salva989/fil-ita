type CheckoutSession = {
  id: string;
  url: string;
};

export async function createCheckoutSession(): Promise<CheckoutSession> {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return {
      id: "demo_session_film_ita",
      url: "/success",
    };
  }

  const Stripe = (await import("stripe")).default;
  const stripe = new Stripe(secretKey);

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Film Ita Accesso a vita",
            description: "Accesso lifetime alla piattaforma Film Ita",
          },
          unit_amount: 1900,
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/`,
  });

  return {
    id: session.id,
    url: session.url ?? "/success",
  };
}
