import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voyago — Explore Beyond Boundaries",
  description: "Thoughtful travel planning, beautifully done. Discover destinations and book flights, stays, cars, and visa support with Voyago.",
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
  openGraph: { title: "Voyago — Explore Beyond Boundaries", description: "Make room for somewhere wonderful.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
