import './globals.css'

export const metadata = {
  title: 'NOH – ELEVATED LIFE',
  description: 'Holistic Life Mastery Operating System',
  manifest: '/manifest.json',
  themeColor: '#0f172a',
}

export default function RootLayout({ children }) {
  return (
    <html lang="am" className="dark">
      <head>
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-slate-900 text-slate-100 min-h-screen pb-20 font-sans antialiased">
        <main className="max-w-md mx-auto min-h-screen p-4 flex flex-col justify-between">
          {children}
        </main>
      </body>
    </html>
  )
}
