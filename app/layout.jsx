import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AdsterraLayoutWrapper from '../components/ads/AdsterraLayoutWrapper'; // Update ini

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
        
        {/* Schema.org markup */}
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
        <AdsterraLayoutWrapper> {/* GANTI ini */}
          <div className="flex flex-col min-h-screen bg-slate-900">
            <header className="w-full max-w-7xl mx-auto px-4 py-4 sticky top-0 z-50 bg-slate-900 shadow-lg">
              <Navbar />
            </header>
            
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8 mt-2">
              {children}
            </main>
            
            <footer className="w-full max-w-7xl mx-auto px-4 py-8">
              <Footer />
            </footer>
          </div>
        </AdsterraLayoutWrapper> {/* GANTI ini */}
      </body>
    </html>
  );
}