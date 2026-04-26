import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    ok: true,
    message:
      "Webhook placeholder pronto. Qui collegheremo verifica firma Stripe e sblocco accesso utente.",
  });
}
