import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Pentagone Formations",
    template: "%s | Pentagone Formations"
  },
  description: "Organisme de formation premium pour entreprises et professionnels.",
  metadataBase: new URL("https://pentagone-formations.vercel.app")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
