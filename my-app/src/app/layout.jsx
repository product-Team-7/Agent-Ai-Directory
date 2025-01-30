import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-black">{children}</body>
    </html>
  )
}

