"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Clock, Mic, Calendar } from "lucide-react";
import { SpotifyEmbed } from "@/components/spotify-embed";
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
                ? 'bg-background/50 text-muted-foreground cursor-default' 
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

export function EpisodesSection() {
  const { episodes, latestEpisode } = useEpisodes();

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Latest Episodes
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Listen to our most recent conversations about entrepreneurial
              failures and comebacks
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/episodes">View All Episodes</Link>
          </Button>
        </div>

        {latestEpisode?.spotify.audioEmbedUrl && (
          <div className="mt-8 w-full">
            <SpotifyEmbed
              src={latestEpisode.spotify.audioEmbedUrl}
              height="351"
            />
          </div>
        )}

        <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    </section>
  );
}
