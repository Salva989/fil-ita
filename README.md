# Film Ita

Base progetto **Next.js** per Film Ita, con landing page premium e struttura pronta per **Stripe Checkout** e **Supabase**.

## Stack

- Next.js App Router
- React
- Stripe Checkout
- Supabase

## Pagine incluse

- `/` landing page
- `/checkout` demo checkout page
- `/success` pagina post pagamento
- `/api/stripe/webhook` placeholder webhook

## Avvio locale

1. Installa dipendenze

```bash
npm install
```

2. Crea il file ambiente

```bash
cp .env.example .env.local
```

3. Avvia il progetto

```bash
npm run dev
```

Apri poi `http://localhost:3000`.

## Variabili ambiente

Compila `.env.local` con:

- `NEXT_PUBLIC_SITE_URL`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Stato attuale

- design landing completato
- base checkout pronta
- webhook placeholder pronto
- helper Supabase pronto
- catalogo markdown incluso come materiale di partenza

## Prossimi step consigliati

1. collegare un prodotto Stripe reale
2. creare tabella utenti o membership su Supabase
3. gestire magic link login
4. importare e rendere navigabile il catalogo film
5. aggiungere dashboard privata per utenti paganti

## Nota importante

Prima della pubblicazione, verifica bene compliance legale, termini d’uso delle fonti e monetizzazione del servizio.
