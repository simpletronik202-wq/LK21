import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AdsterraScripts from '../components/ads/AdsterraScripts'; // Buat komponen baru

// ... metadata tetap sama ...

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Tag verifikasi Google Search Console */}
        <meta name="google-site-verification" content="FDKxUmPZWUKjIGnNRw9xMFqhdUUR9wCX1_qB_YK5asM" />
        
        {/* Preconnect untuk Adsterra domain */}
        <link rel="preconnect" href="https://fundingfashioned.com" />
        <link rel="dns-prefetch" href="https://fundingfashioned.com" />
        
        {/* Schema.org markup untuk Movie Database */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovieDatabase",
              "name": "LK21",
              "description": "Complete movie and TV series database with streaming information",
              "url": "https://lk21-watch.vercel.app",
              "logo": "https://live.staticflickr.com/65535/55031700113_48357852dd_b.jpg",
              "sameAs": [
                "https://lk21-watch.vercel.app"
              ],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://lk21-watch.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body>
        <div className="flex flex-col min-h-screen bg-slate-900">
          <header className="w-full max-w-7xl mx-auto px-4 py-4 sticky top-0 z-50 bg-slate-900 shadow-lg">
            <Navbar />
          </header>
          
          <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8 mt-2">
            {children}
          </main>
          
          <footer className="w-full max-w-7xl mx-auto px-4 py-8">
            {/* HANYA SATU container untuk Native Banner */}
            <div 
              id="container-ad1ee1816ddebc11a35ac98d10fb7142"
              className="mb-8 min-h-[250px] bg-gradient-to-r from-purple-900/10 to-blue-900/10 rounded-lg flex items-center justify-center"
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-purple-600/20 px-4 py-2 rounded-full mb-3">
                  <span className="text-purple-400">📢</span>
                  <span className="text-purple-300 text-sm">Advertisement</span>
                </div>
                <p className="text-gray-400 text-sm">Loading advertisement...</p>
              </div>
            </div>
            <Footer />
          </footer>
        </div>
        
        {/* Load semua scripts di client side */}
        <AdsterraScripts />
      </body>
    </html>
  );
}