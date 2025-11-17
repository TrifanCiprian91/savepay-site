import "./globals.css";
import "./theme.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "SavePay – Chitanțe digitale rapide și moderne",
  description:
    "SavePay îți oferă chitanțe digitale instant prin codul tău QR. Modern, rapid și fără hârtie.",
  openGraph: {
    title: "SavePay – Chitanțe digitale",
    description:
      "SavePay este aplicația care digitalizează chitanțele și modernizează experiența de cumpărături.",
    url: "https://savepay.ro",
    siteName: "SavePay",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body className="transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main className="pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
