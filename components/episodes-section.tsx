import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Clock, Mic } from "lucide-react"
import { SpotifyEmbed } from "@/components/spotify-embed"

export function EpisodesSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Latest Episodes</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Listen to our most recent conversations about entrepreneurial failures and comebacks
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/episodes">View All Episodes</Link>
          </Button>
        </div>

        <div className="mt-8 w-full">
          <SpotifyEmbed
            src="https://open.spotify.com/embed/playlist/2ipOq1FlpGaiWiiQPz5QNc?utm_source=generator"
            height="352"
          />
        </div>

        <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
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
                    href="https://open.spotify.com/show/2ipOq1FlpGaiWiiQPz5QNc"
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
                  <span className="text-xs">Episode 0</span>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mic className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Hosted by Kahl & Paolo</span>
                </div>
                <h3 className="font-bold">Introduction to Failure Podcast</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  Welcome to our first episode where we introduce the concept of the Failure podcast and why we're
                  focusing on entrepreneurial failures.
                </p>
                <div className="pt-2">
                  <Button variant="link" className="h-auto p-0 text-failure-red" asChild>
                    <a
                      href="https://open.spotify.com/show/2ipOq1FlpGaiWiiQPz5QNc"
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
                  className="h-12 w-12 rounded-full bg-background/80 text-failure-red hover:bg-background/90 hover:text-failure-red"
                  asChild
                >
                  <a
                    href="https://open.spotify.com/show/2ipOq1FlpGaiWiiQPz5QNc"
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
                  <span className="text-xs text-muted-foreground">Hosted by Kahl & Paolo</span>
                </div>
                <h3 className="font-bold">The Emotional Rollercoaster</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  Exploring the emotional ups and downs of entrepreneurship and how to manage them effectively.
                </p>
                <div className="pt-2">
                  <Button variant="link" className="h-auto p-0 text-failure-red" asChild>
                    <a
                      href="https://open.spotify.com/show/2ipOq1FlpGaiWiiQPz5QNc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Coming Soon
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
                  className="h-12 w-12 rounded-full bg-background/80 text-failure-red hover:bg-background/90 hover:text-failure-red"
                  asChild
                >
                  <a
                    href="https://open.spotify.com/show/2ipOq1FlpGaiWiiQPz5QNc"
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
                  <span className="text-xs">Episode 2</span>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mic className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Hosted by Kahl & Paolo</span>
                </div>
                <h3 className="font-bold">Rebuilding After Failure</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  Strategies and mindsets for rebuilding your business and confidence after experiencing a significant
                  failure.
                </p>
                <div className="pt-2">
                  <Button variant="link" className="h-auto p-0 text-failure-red" asChild>
                    <a
                      href="https://open.spotify.com/show/2ipOq1FlpGaiWiiQPz5QNc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Coming Soon
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
