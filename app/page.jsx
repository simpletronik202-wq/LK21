"use client";

import React from 'react';
import Link from 'next/link';
import { FaHome, FaFilm, FaTv, FaSearch, FaStar, FaUsers, FaGlobe, FaUser, FaCalendar, FaTrophy, FaDownload, FaMobileAlt, FaApple, FaWindows } from 'react-icons/fa';
import AdsterraSmartLink from '../components/ads/AdsterraSmartLink';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-300">
      {/* Hero Section dengan Optimasi SEO */}
      <div className="bg-gradient-to-b from-purple-900/50 to-slate-900 py-16 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-orange-400">
            LK21 Ultimate Movie & TV Series Database Your Complete Cinema Guide
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Your comprehensive guide to 10,000+ movies, 5,000+ TV series, actor profiles, genre pages, and streaming information.
          </p>
          
          {/* Premium App CTA Section */}
          <div className="bg-gradient-to-r from-orange-900/30 to-purple-900/30 rounded-xl p-6 mb-8 max-w-3xl mx-auto backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  ⚡ Premium Streaming App
                </h3>
                <p className="text-gray-300 mb-2">
                  <span className="text-green-400 font-semibold">✓</span> No Ads • <span className="text-green-400 font-semibold">✓</span> 4K Quality • <span className="text-green-400 font-semibold">✓</span> Offline Viewing
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>⭐ 4.8/5 (10K+ reviews)</span>
                  <span>📦 45 MB</span>
                  <span>👥 1M+ Downloads</span>
                </div>
              </div>
              <AdsterraSmartLink variant="success" className="whitespace-nowrap">
                <FaDownload /> Download Free
              </AdsterraSmartLink>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/movie/popular" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <FaFilm /> Browse Movies
            </Link>
            <Link href="/tv-show/popular" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <FaTv /> Browse TV Series
            </Link>
            <Link href="/people" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <FaUser /> Explore Actors
            </Link>
            <Link href="/rankings" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <FaTrophy /> Top Rankings
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content dengan Deskripsi SEO Extended */}
        <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm">
          {/* Introduction dengan Konten SEO */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <img
                src="https://live.staticflickr.com/65535/55031700113_48357852dd_b.jpg"
                alt="Movie reels and cinema tickets - Ultimate movie database for film enthusiasts"
                width={1024}
                height={416}
                className="rounded-xl shadow-2xl mx-auto mb-8"
              />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300">
                Discover the World of Cinema with LK21 - America's Premier Movie Database
              </h2>
              <div className="text-lg text-gray-400 max-w-4xl mx-auto space-y-4 text-justify">
                <p>
                  <strong>LK21</strong> is United America's most complete and comprehensive movie and TV series information platform, serving as the definitive online resource for cinephiles, film students, industry professionals, and casual viewers alike. Our platform provides meticulously curated, accurate data spanning over a century of cinematic history, from silent film classics to the latest blockbuster releases and trending TV series.
                </p>
                <p>
                  As a premier movie database website, we offer more than just basic information - we deliver an immersive experience that includes detailed user reviews, comprehensive streaming guides across multiple platforms, in-depth actor and filmmaker profiles, complete genre archives, and sophisticated search capabilities that allow users to discover content based on countless criteria.
                </p>
                <p>
                  Our database features an extensive collection of <strong>over 10,000 movies</strong> and <strong>5,000+ TV series</strong>, each with complete metadata including cast and crew details, production information, technical specifications, awards and nominations, box office performance, critical reception, and viewer ratings. We continuously update our database with new releases, ensuring our users have access to the most current information in the entertainment industry.
                </p>
              </div>
              
              {/* Download Section 1 */}
              <div className="mt-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  🎬 Stream Movies Faster with Our App
                </h3>
                <p className="text-gray-300 mb-6">
                  Get 5x faster streaming, background playback, and exclusive content
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <AdsterraSmartLink variant="primary">
                    <FaMobileAlt /> Android APK (v2.5.1)
                  </AdsterraSmartLink>
                  <AdsterraSmartLink variant="secondary">
                    <FaApple /> iOS Version
                  </AdsterraSmartLink>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  🔥 Limited Time: Free premium trial for 7 days
                </p>
              </div>
            </div>
          </section>

          {/* SEO-Optimized Description Section - Minimal 2000 Kata */}
          <section className="mb-16 bg-gray-900/50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-orange-300">
              Complete Guide to Movies, TV Series, and Cinema Database
            </h2>
            
            <div className="space-y-6 text-gray-400 text-justify">
              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Introduction to LK21 Database</h3>
              
              <p>
                Welcome to <strong>LK21</strong>, the ultimate destination for movie enthusiasts and television series fans. Our platform represents the culmination of years of data collection, curation, and user experience optimization, designed to serve as the most reliable and comprehensive online resource for cinematic information. Whether you're researching a classic film, discovering new TV shows, or exploring actor filmographies, our database provides unparalleled depth and accuracy.
              </p>

              {/* Download Section 2 */}
              <div className="my-8 p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">📱 Mobile Experience</h4>
                    <p className="text-gray-300">
                      Download our mobile app for better viewing experience
                    </p>
                  </div>
                  <AdsterraSmartLink variant="success" className="whitespace-nowrap">
                    <FaDownload /> Get Mobile App
                  </AdsterraSmartLink>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Comprehensive Movie Database Features</h3>
              
              <p>
                Our movie database stands as one of the most extensive collections of film information available online. Each movie entry includes complete production details, comprehensive cast and crew listings, detailed plot summaries, critical reviews, audience ratings, technical specifications, and streaming availability across multiple platforms. We cover films from every era and genre, including Hollywood blockbusters, independent films, international cinema, documentary features, animated films, and cult classics.
              </p>

              <p>
                The database features advanced filtering capabilities allowing users to search movies by year, genre, director, actor, language, country of origin, runtime, MPAA rating, and more. Each film profile includes related recommendations, similar movies, trivia, goofs, quotes, soundtrack information, and behind-the-scenes details. Our streaming guide shows exactly where each movie is available to watch, whether on Netflix, Amazon Prime, Hulu, Disney+, HBO Max, or other streaming services.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">TV Series Database and Episode Guides</h3>
              
              <p>
                Our TV series database provides exhaustive information on thousands of television shows from around the world. Each series includes complete episode guides with detailed summaries, air dates, director and writer credits, guest stars, and viewer ratings for individual episodes. We cover everything from classic sitcoms and drama series to reality TV, anime, documentaries, and limited series.
              </p>

              <p>
                The database includes comprehensive season breakdowns, character profiles, series timelines, awards and nominations, behind-the-scenes features, and cancellation or renewal status updates. Our streaming information shows which platforms carry each series and which seasons are available. We also provide information on international availability and regional restrictions where applicable.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Actor and Filmmaker Profiles</h3>
              
              <p>
                Our people database features detailed profiles for actors, directors, producers, writers, cinematographers, composers, and other industry professionals. Each profile includes biographical information, career timelines, filmography with role details, awards and nominations, personal trivia, and high-quality photo galleries. We track career developments, upcoming projects, and industry news for thousands of entertainment professionals.
              </p>

              <p>
                The database allows users to explore connections between industry professionals, see who frequently collaborates with whom, and discover new talent based on their interests. Each profile includes related content recommendations and career highlights, making it easy to explore an individual's body of work comprehensively.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Genre Exploration and Categorization</h3>
              
              <p>
                Our genre system provides sophisticated categorization that goes beyond basic labels. We offer detailed genre pages for categories including Action, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film-Noir, History, Horror, Music, Musical, Mystery, Romance, Sci-Fi, Sport, Thriller, War, and Western. Each genre page includes sub-genre breakdowns, historical context, notable examples, and recommendations.
              </p>

              <p>
                Beyond traditional genres, we also categorize content by mood, theme, setting, and style. Users can discover movies and series based on specific themes like time travel, coming-of-age, heist films, courtroom dramas, or specific historical periods. This sophisticated categorization system helps users discover content that matches their specific interests and preferences.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Year and Decade Archives</h3>
              
              <p>
                Our historical archives allow users to explore cinema chronologically. Each year page shows all movies released in that year, sorted by popularity, critical reception, and box office performance. Decade overviews provide context about cinematic trends, technological developments, and cultural influences that shaped each era of filmmaking.
              </p>

              <p>
                The archives include special sections for significant years in cinema history, such as 1939 (often called "Hollywood's Greatest Year"), 1975 (the birth of the modern blockbuster), and 1999 (a landmark year for independent and mainstream cinema). Each archive page includes historical context, notable trends, award winners, dan cultural impact analysis.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Ratings, Rankings, and User Reviews</h3>
              
              <p>
                Our comprehensive rating system aggregates scores from major critics, industry awards, and user reviews to provide balanced, reliable evaluations of movies and TV series. The ranking system includes "Best of All Time" lists, annual rankings, genre-specific rankings, and specialized lists like "Hidden Gems," "Cult Classics," and "Award Winners."
              </p>

              <p>
                User reviews on LK21 come from verified viewers and include detailed analysis, spoiler warnings, and content advisories. Our review system encourages thoughtful criticism and helpful recommendations, creating a community of engaged film enthusiasts who contribute to the platform's depth and value.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Streaming Guide and Availability</h3>
              
              <p>
                One of our most valuable features is the comprehensive streaming guide that shows exactly where every movie and TV series is available to watch. We track availability across dozens of streaming platforms including subscription services, rental services, free platforms, and broadcast television. Our database includes region-specific information and regularly updates to reflect changing licensing agreements.
              </p>

              <p>
                The streaming guide includes price comparisons, quality options (SD, HD, 4K), availability dates, and expiration warnings. We also provide information on physical media availability (DVD, Blu-ray, 4K UHD) and digital purchase options across various platforms.
              </p>

              {/* Download Section 3 */}
              <div className="my-8 p-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">💻 Desktop Application</h4>
                    <p className="text-gray-300">
                      Enhanced experience with our desktop app for Windows
                    </p>
                  </div>
                  <AdsterraSmartLink variant="warning">
                    <FaWindows /> Windows Desktop App
                  </AdsterraSmartLink>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Advanced Search and Discovery Tools</h3>
              
              <p>
                Our advanced search functionality allows users to find content based on incredibly specific criteria. Search by multiple actors simultaneously, combine genre filters, set runtime ranges, specify release date windows, filter by country of origin, language, MPAA rating, color vs black-and-white, aspect ratio, and countless other technical and creative parameters.
              </p>

              <p>
                The discovery engine uses sophisticated algorithms to recommend content based on viewing history, ratings, and stated preferences. Our "If You Like" system suggests similar content, while our "Explore" features help users discover new genres, directors, and actors they might enjoy based on their established interests.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Educational and Research Resources</h3>
              
              <p>
                LK21 serves as a valuable resource for film students, researchers, and educators. Our database includes academic citations, production histories, critical analysis, and cultural context for thousands of films. We provide resources for studying film theory, cinematic techniques, industry history, and cultural impact.
              </p>

              <p>
                Special sections cover film movements (French New Wave, German Expressionism, Italian Neorealism), technological developments (transition to sound, color film, digital cinema), and industry trends. These resources make LK21 an essential tool for anyone studying or teaching film and media.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Community Features and User Engagement</h3>
              
              <p>
                Our platform fosters an engaged community of film enthusiasts through discussion forums, watch parties, user lists, and social features. Users can create and share custom lists, participate in polls and quizzes, join genre-specific communities, and contribute to our growing database through our moderated submission system.
              </p>

              <p>
                Regular features include weekly watch recommendations, director spotlights, genre deep-dives, and historical retrospectives. Our community calendar highlights film festivals, special screenings, anniversaries, and industry events of interest to our users.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Mobile Experience and Accessibility</h3>
              
              <p>
                LK21 is fully optimized for mobile devices, with responsive design that works perfectly on smartphones and tablets. Our mobile app (available on iOS and Android) provides all the features of the desktop site with additional mobile-specific functionality including watchlist synchronization, offline access to saved information, and push notifications for availability updates.
              </p>

              <p>
                We prioritize accessibility with features including screen reader compatibility, keyboard navigation, adjustable text sizes, high contrast modes, and closed captioning information for all video content. Our commitment to accessibility ensures that all users, regardless of ability, can fully experience and benefit from our database.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Data Accuracy and Regular Updates</h3>
              
              <p>
                Maintaining data accuracy is our highest priority. We employ a combination of automated data collection, manual verification, and community contributions to ensure information correctness. Our team of editors regularly reviews and updates entries, correcting errors and adding new information as it becomes available.
              </p>

              <p>
                We track industry announcements, press releases, and official sources to provide the most current information about upcoming releases, casting news, production updates, and streaming availability changes. Our update schedule ensures that users always have access to the latest and most accurate information.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Conclusion: Your Ultimate Cinema Resource</h3>
              
              <p>
                LK21 represents more than just a database - it's a comprehensive ecosystem for film discovery, education, and appreciation. Whether you're a casual viewer looking for something to watch tonight, a film student researching cinematic history, an industry professional verifying credits, or a cinephile exploring new horizons, our platform provides the tools, information, and community to enhance your cinematic journey.
              </p>

              <p>
                With our commitment to accuracy, comprehensiveness, and user experience, LK21 continues to set the standard for online movie databases. Join our growing community of film enthusiasts and discover why we're recognized as the premier destination for cinematic information and discovery.
              </p>
            </div>
            
            {/* Final Download CTA */}
            <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                🚀 Ready to Experience Premium Streaming?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Download our app now and get access to exclusive features, faster streaming, and ad-free experience
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <AdsterraSmartLink variant="primary" className="text-lg px-8 py-4">
                  <FaDownload className="inline mr-2" />
                  Download Premium App (FREE)
                </AdsterraSmartLink>
                <AdsterraSmartLink variant="secondary" className="text-lg px-8 py-4">
                  <FaMobileAlt className="inline mr-2" />
                  Android APK Download
                </AdsterraSmartLink>
              </div>
              <p className="text-gray-400 text-sm mt-6">
                ⚡ Instant Download • 🔒 100% Safe • 📱 Compatible with all devices
              </p>
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center text-orange-300">
              Complete Movie Database Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaFilm className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Movie Details</h3>
                <p className="text-gray-400 text-justify">Complete information, cast, reviews, and streaming availability for thousands of films</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaTv className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">TV Series Database</h3>
                <p className="text-gray-400 text-justify">Complete episode guides, season information, and streaming details for television shows</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaUser className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Actor Profiles</h3>
                <p className="text-gray-400 text-justify">Detailed actor information with complete filmography and career highlights</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaCalendar className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Year Archives</h3>
                <p className="text-gray-400 text-justify">Browse movies by release year and explore historical decades of cinema</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaTrophy className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Top Rankings</h3>
                <p className="text-gray-400 text-justify">Highest rated movies and TV series across all categories and genres</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-xl text-center">
                <FaSearch className="text-4xl text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Advanced Search</h3>
                <p className="text-gray-400 text-justify">Find content by multiple criteria and sophisticated filters for precise discovery</p>
              </div>
            </div>
            
            {/* App Download Banner */}
            <div className="mt-12 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-8 rounded-xl">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    📲 Get the Ultimate Movie Experience
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Our mobile app offers exclusive features you won't find on the website
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span>Offline Viewing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span>Background Play</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span>Higher Quality</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <AdsterraSmartLink variant="success" className="px-8 py-4">
                    <FaMobileAlt className="inline mr-2" />
                    Download App
                  </AdsterraSmartLink>
                  <AdsterraSmartLink variant="warning" className="px-8 py-4">
                    <FaWindows className="inline mr-2" />
                    PC Version
                  </AdsterraSmartLink>
                </div>
              </div>
            </div>
          </section>

          {/* Mega Download Section */}
          <section className="mb-16 bg-gradient-to-r from-orange-900/30 via-red-900/30 to-purple-900/30 p-8 rounded-xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                ⚡ Download All-in-One Movie App
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Everything you need for the ultimate movie experience in one powerful application
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <div className="text-4xl mb-4">🎬</div>
                  <h4 className="text-xl font-bold mb-3">Stream Unlimited</h4>
                  <p className="text-gray-400">Access 10,000+ movies and 5,000+ TV series</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <div className="text-4xl mb-4">🚀</div>
                  <h4 className="text-xl font-bold mb-3">Premium Features</h4>
                  <p className="text-gray-400">No ads, 4K quality, offline viewing</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <div className="text-4xl mb-4">🎁</div>
                  <h4 className="text-xl font-bold mb-3">Free Download</h4>
                  <p className="text-gray-400">Completely free with premium trial</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <AdsterraSmartLink variant="success" className="px-10 py-5 text-lg">
                  <FaDownload className="inline mr-2" />
                  DOWNLOAD NOW (FREE)
                </AdsterraSmartLink>
                <AdsterraSmartLink variant="warning" className="px-10 py-5 text-lg">
                  <FaMobileAlt className="inline mr-2" />
                  ANDROID APK
                </AdsterraSmartLink>
                <AdsterraSmartLink variant="primary" className="px-10 py-5 text-lg">
                  <FaApple className="inline mr-2" />
                  iOS VERSION
                </AdsterraSmartLink>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> 100% Safe Download
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> No Registration Required
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Works on All Devices
                </span>
              </div>
            </div>
          </section>

          {/* Call to Action dengan Optimasi SEO */}
          <section className="text-center py-12 bg-gradient-to-r from-orange-900/30 to-purple-900/30 rounded-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300">
              Start Your Cinematic Journey with LK21 Today
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto text-justify">
              Join our community of film enthusiasts accessing the most comprehensive movie and TV series database available online. With thousands of verified entries, real-time updates, and sophisticated discovery tools, LK21 provides everything you need to explore, research, and enjoy the world of cinema.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/movie/365-days-this-day-2022/stream" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2">
                <FaFilm /> Start Exploring Movies
              </Link>
              <Link href="/tv-show/popular" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2">
                <FaTv /> Browse TV Series Database
              </Link>
              <AdsterraSmartLink variant="success" className="px-8 py-4 text-lg">
                <FaDownload /> Download Premium App
              </AdsterraSmartLink>
            </div>
            <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-justify">
              <strong>LK21</strong> - Your ultimate resource for movie information, TV series details, actor profiles, streaming guides, and cinematic discovery. Whether you're researching film history, planning your viewing schedule, or simply exploring the vast world of cinema, we provide the comprehensive database, accurate information, and intuitive tools you need to enhance your movie-watching experience and deepen your understanding of film as an art form and cultural phenomenon.
            </p>
          </section>
        </div>
      </div>
      
      {/* Floating Download Button untuk Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <AdsterraSmartLink
          className="shadow-2xl animate-bounce"
          showConfirmation={false}
        >
          <FaDownload className="text-xl" />
        </AdsterraSmartLink>
      </div>
      
      {/* Floating Banner untuk Desktop */}
      <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
        <div className="bg-gradient-to-r from-blue-900/90 to-purple-900/90 text-white p-4 rounded-xl shadow-2xl max-w-xs">
          <div className="flex items-start gap-3">
            <div className="text-2xl">📱</div>
            <div>
              <h4 className="font-bold mb-1">Mobile App Available</h4>
              <p className="text-sm text-gray-300 mb-3">Better experience on our app</p>
              <AdsterraSmartLink variant="success" className="text-sm px-4 py-2">
                Download Now
              </AdsterraSmartLink>
            </div>
            <button className="text-gray-400 hover:text-white" onClick={(e) => e.target.closest('.fixed').style.display = 'none'}>
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}