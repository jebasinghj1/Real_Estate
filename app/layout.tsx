import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aranya Farms — Farm Villas & Plots Near Mahabalipuram",
  description:
    "Gated, low-density farm villas and villa plots (1,800–10,800 sq.ft) near Mahabalipuram on the ECR. From ₹1 Crore. DTCP approved, RERA registered.",
  keywords:
    "Aranya Farms, farm villas Mahabalipuram, villa plots ECR, plots near Mahabalipuram, Ram Reddy Developers",
  openGraph: {
    title: "Aranya Farms — An escape into green, near Mahabalipuram",
    description:
      "Gated farm villas & plots near Mahabalipuram. From ₹1 Crore. DTCP approved · RERA registered.",
    type: "website",
    locale: "en_IN",
  },
  themeColor: "#1c3327",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
