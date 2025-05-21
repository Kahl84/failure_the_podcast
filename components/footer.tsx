import Link from "next/link"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left column - Failure Podcast */}
          <div className="space-y-4 md:pr-8">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="text-2xl" />
            </Link>
            <p className="text-sm text-muted-foreground">
              A podcast about entrepreneurship with a focus on people that failed and came back from these failures. We
              dive deep into the emotional and human side of going through the hurdles of having a business.
            </p>
            <p className="text-sm text-muted-foreground">
              Having a business is not easy, it's a roller coaster that takes a lot on you, and we want to interview
              successful people to understand what was their mindset when the times were the darkest for them.
            </p>
            <div className="flex gap-2">
              <a href="https://twitter.com" className="text-muted-foreground hover:text-failure-red">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://instagram.com" className="text-muted-foreground hover:text-failure-red">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://youtube.com" className="text-muted-foreground hover:text-failure-red">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a
                href="https://open.spotify.com/show/2ipOq1FlpGaiWiiQPz5QNc"
                className="text-muted-foreground hover:text-failure-red"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right column - Quick Links and Listen On */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-failure-red">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/episodes" className="text-muted-foreground hover:text-failure-red">
                    Episodes
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-failure-red">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-failure-red">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#subscribe" className="text-muted-foreground hover:text-failure-red">
                    Subscribe to Newsletter
                  </Link>
                </li>
                <li>
                  <a href="mailto:guests@failurelab.tech" className="text-muted-foreground hover:text-failure-red">
                    Become a Guest
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Listen On</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://open.spotify.com/show/2ipOq1FlpGaiWiiQPz5QNc"
                    className="text-muted-foreground hover:text-failure-red"
                  >
                    Spotify
                  </a>
                </li>
                <li>
                  <a href="https://apple.com/apple-podcasts" className="text-muted-foreground hover:text-failure-red">
                    Apple Podcasts
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" className="text-muted-foreground hover:text-failure-red">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://google.com/podcasts" className="text-muted-foreground hover:text-failure-red">
                    Google Podcasts
                  </a>
                </li>
                <li>
                  <a href="https://tiktok.com" className="text-muted-foreground hover:text-failure-red">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" className="text-muted-foreground hover:text-failure-red">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Failure Podcast. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-failure-red">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-failure-red">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-failure-red">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
