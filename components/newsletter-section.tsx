"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-12 md:py-24" id="subscribe">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Subscribe to Our Newsletter</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Get the latest episodes and never miss an update from the Failure podcast
            </p>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <form
                action="https://gmail.us3.list-manage.com/subscribe/post?u=253080117489e79a92e78467e&amp;id=eaa2448d3f&amp;f_id=0095c8e1f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
                className="space-y-4"
              >
                <div className="text-sm text-muted-foreground text-left">
                  <span className="text-failure-red">*</span> indicates required
                </div>

                <div className="space-y-2">
                  <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-left">
                    Email Address <span className="text-failure-red">*</span>
                  </label>
                  <Input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    required
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>

                {/* Real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                  <input type="text" name="b_253080117489e79a92e78467e_eaa2448d3f" tabIndex={-1} defaultValue="" />
                </div>

                <Button type="submit" name="subscribe" className="w-full bg-failure-red hover:bg-failure-red/90">
                  Subscribe
                </Button>

                <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
