import '@/app/global.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Blockchain File Storage</title>
        <meta name="description" content="Store files securely on the blockchain" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        <div className="container mx-auto px-4">
          <header className="py-4">
            <nav>
              <ul className="flex justify-between">
                <li><a href="/" className="text-lg font-bold">Home</a></li>
                <li><a href="/upload" className="text-lg font-bold">Upload File</a></li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
