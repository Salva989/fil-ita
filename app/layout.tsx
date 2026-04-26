import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Film Ita | Film gratuiti online in un unico posto",
  description:
    "Landing page Film Ita con accesso a vita, pagamento una tantum e base pronta per Stripe e Supabase.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
