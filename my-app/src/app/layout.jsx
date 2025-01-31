import { Navbar } from "@/components/navbar";
import "./globals.css";
import { Footer } from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://db.onlinewebfonts.com/a/Aw0g00aa7qbFk0nqosz2w1ENV81cB3N3Y0JrZ0b2"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-suisse-regular min-h-screen bg-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
