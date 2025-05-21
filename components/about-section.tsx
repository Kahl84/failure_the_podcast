import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Failure Podcast</h2>
            <div className="mt-4 space-y-4">
              <p>
                Failure is a podcast about entrepreneurship with a specific focus on people that failed and came back
                from these failures. We dive deep into the emotional and human side of going through the hurdles of
                having a business.
              </p>
              <p>
                Having a business is not easy, it's a roller coaster that takes a lot on you, and we want to interview
                successful people to understand what was their mindset when the times were the darkest for them.
              </p>
              <p>
                Our podcast is hosted by Carl and Paulo, two entrepreneurs who have experienced their own share of
                failures and comebacks in the business world.
              </p>
              <div className="flex gap-4 pt-4">
                <Button variant="outline">Meet the Hosts</Button>
                <Button className="bg-failure-red hover:bg-failure-red/90">Become a Guest</Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg">
                <div className="h-40 bg-muted"></div>
              </div>
              <div className="overflow-hidden rounded-lg">
                <div className="h-60 bg-muted"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg">
                <div className="h-60 bg-muted"></div>
              </div>
              <div className="overflow-hidden rounded-lg">
                <div className="h-40 bg-muted"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">20+</h3>
              <p className="text-muted-foreground">Episodes planned for Season 1</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Bi-weekly</h3>
              <p className="text-muted-foreground">New episodes released regularly</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">4 Platforms</h3>
              <p className="text-muted-foreground">Available on YouTube, TikTok, Instagram, and Spotify</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
