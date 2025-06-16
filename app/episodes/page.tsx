"use client"

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Clock, Mic, Calendar } from "lucide-react";
import { SpotifyEmbed } from "@/components/spotify-embed";
import { NewsletterStandalone } from "@/components/newsletter-standalone";
import { useEpisodes, type Episode } from "@/hooks/use-episodes";

function EpisodeCard({ episode }: { episode: Episode }) {
  const isComingSoon = episode.status === 'coming_soon';
  
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 bg-muted">
        <div className={`absolute inset-0 flex items-center justify-center ${isComingSoon ? 'bg-black/40' : 'bg-black/20'}`}>
          <Button
            size="icon"
            variant="ghost"
            className={`h-12 w-12 rounded-full ${
              isComingSoon 
                ? 'bg-background/40 text-muted-foreground cursor-default' 
                : 'bg-background/80 text-failure-red hover:bg-background/90 hover:text-failure-red'
            }`}
            disabled={isComingSoon}
            asChild={!isComingSoon}
          >
            {isComingSoon ? (
              <>
                <Play className="h-6 w-6" />
                <span className="sr-only">Coming Soon</span>
              </>
            ) : (
              <a
                href={episode.spotify.episodeUrl!}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="h-6 w-6" />
                <span className="sr-only">Play</span>
              </a>
            )}
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center gap-2 text-white">
            <Clock className="h-4 w-4" />
            <span className="text-xs">Episode {episode.id}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Mic className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              Hosted by {episode.hosts.join(' & ')}
            </span>
          </div>
          <h3 className="font-bold">{episode.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {episode.description}
          </p>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{episode.date}</span>
            </div>
            <Button
              variant="link"
              className={`h-auto p-0 ${
                isComingSoon 
                  ? 'text-muted-foreground cursor-default' 
                  : 'text-failure-red'
              }`}
              disabled={isComingSoon}
              asChild={!isComingSoon}
            >
              {isComingSoon ? (
                'Coming Soon'
              ) : (
                <a
                  href={episode.spotify.episodeUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen Now
                </a>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function EpisodesPage() {
  const { episodes, latestEpisode } = useEpisodes();
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 noise-bg pointer-events-none"></div>
      <Navbar />
      <main>
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  All Episodes
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Browse through all our episodes about entrepreneurial failures
                  and comebacks
                </p>
              </div>
              <div className="w-full max-w-sm">
                <div className="relative">
                  <Input placeholder="Search episodes..." className="pl-10" />
                  <div className="absolute left-3 top-3 text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 w-full">
              <SpotifyEmbed
                src="https://open.spotify.com/embed/episode/65L6FOzSuLGgWeiS7jucaf/video?utm_source=generator"
                height="351"
              />
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="relative h-48 bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-12 w-12 rounded-full bg-background/80 text-failure-red hover:bg-background/90 hover:text-failure-red"
                      asChild
                    >
                      <a
                        href="https://open.spotify.com/episode/65L6FOzSuLGgWeiS7jucaf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="h-6 w-6" />
                        <span className="sr-only">Play</span>
                      </a>
                    </Button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center gap-2 text-white">
                      <Clock className="h-4 w-4" />
                      <span className="text-xs">Episode 1</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mic className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        Hosted by Kahl & Paolo
                      </span>
                    </div>
                    <h3 className="font-bold">First Episode - Introduction</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Welcome to our first episode where we introduce the
                      concept of the Failure podcast and why we're focusing on
                      entrepreneurial failures.
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>June 16, 2025</span>
                      </div>
                      <Button
                        variant="link"
                        className="h-auto p-0 text-failure-red"
                        asChild
                      >
                        <a
                          href="https://open.spotify.com/episode/65L6FOzSuLGgWeiS7jucaf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Listen Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48 bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-12 w-12 rounded-full bg-background/40 text-muted-foreground cursor-default"
                      disabled
                    >
                      <Play className="h-6 w-6" />
                      <span className="sr-only">Coming Soon</span>
                    </Button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center gap-2 text-white">
                      <Clock className="h-4 w-4" />
                      <span className="text-xs">Episode 2</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mic className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        Hosted by Kahl & Paolo
                      </span>
                    </div>
                    <h3 className="font-bold">Episode 2 - Coming Soon</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Stay tuned for our next episode where we'll dive deeper
                      into entrepreneurial challenges and recovery strategies.
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>Coming Soon</span>
                      </div>
                      <Button
                        variant="link"
                        className="h-auto p-0 text-muted-foreground cursor-default"
                        disabled
                      >
                        Coming Soon
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <NewsletterStandalone />
      </main>
      <Footer />
    </div>
  );
}
