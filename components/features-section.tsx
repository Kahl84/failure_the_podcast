import { Headphones, Volume2, Download, BarChart3 } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Podcast What Sets Us Apart</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              What makes the Failure podcast unique and why you should listen
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-failure-red/10">
              <Headphones className="h-8 w-8 text-failure-red" />
            </div>
            <h3 className="text-xl font-bold">Real Stories</h3>
            <p className="text-muted-foreground">Authentic entrepreneurial failure stories with no sugar coating</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-failure-red/10">
              <Volume2 className="h-8 w-8 text-failure-red" />
            </div>
            <h3 className="text-xl font-bold">Emotional Focus</h3>
            <p className="text-muted-foreground">Deep dive into the emotional and human side of business failures</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-failure-red/10">
              <Download className="h-8 w-8 text-failure-red" />
            </div>
            <h3 className="text-xl font-bold">Practical Advice</h3>
            <p className="text-muted-foreground">Actionable insights on how to recover from business setbacks</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-failure-red/10">
              <BarChart3 className="h-8 w-8 text-failure-red" />
            </div>
            <h3 className="text-xl font-bold">Success Patterns</h3>
            <p className="text-muted-foreground">
              Identify patterns of recovery and resilience from real entrepreneurs
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
