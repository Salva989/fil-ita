import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Film Ita | Film in italiano online, ordinati e facili da trovare",
  description:
    "Film Ita raccoglie una selezione di film in italiano disponibili online, con accesso per sempre e una navigazione semplice da mobile e desktop.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
