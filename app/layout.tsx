import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yosh — API payments in Codex, within your limits",
  description:
    "Use Yosh in Codex to buy APIs within your limits. Local wallet custody, Spend Grants, x402 and MPP Solana Charge. Plugin preview for Apple Silicon macOS.",
};

export const viewport: Viewport = {
  themeColor: "#141412",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
