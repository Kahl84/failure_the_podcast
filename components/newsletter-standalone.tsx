"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

export function NewsletterStandalone() {
  return (
    <section className="relative py-12 md:py-16 bg-[#18181b] border-t border-b border-failure-red/20 shadow-2xl">
      <div className="container max-w-6xl px-2 md:px-12">
        <div className="grid gap-4 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-failure-red/10 px-3 py-1 text-sm text-failure-red">
              Stay Updated
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Get the latest episodes, exclusive content, and insights from
              entrepreneurs who have faced failure and bounced back stronger.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-failure-red/10">
                <Mail className="h-6 w-6 text-failure-red" />
              </div>
              <div>
                <p className="font-medium">Weekly Updates</p>
                <p className="text-sm text-muted-foreground">
                  No spam, just quality content
                </p>
              </div>
            </div>
          </div>
          <div>
            <Card className="overflow-hidden border-2 border-failure-red/10">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Join Our Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Subscribe to receive notifications about new episodes,
                    special guests, and exclusive content.
                  </p>
                  <form
                    action="https://gmail.us3.list-manage.com/subscribe/post?u=253080117489e79a92e78467e&amp;id=eaa2448d3f&amp;f_id=0095c8e1f0"
                    method="post"
                    target="_blank"
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <label
                        htmlFor="newsletter-email"
                        className="text-sm font-medium"
                      >
                        Email <span className="text-failure-red">*</span>
                      </label>
                      <Input
                        id="newsletter-email"
                        type="email"
                        name="EMAIL"
                        placeholder="your@email.com"
                        className="w-full"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="newsletter-consent"
                          name="gdpr[37145]"
                          value="Y"
                          className="h-4 w-4 rounded border-gray-300 text-failure-red focus:ring-failure-red"
                        />
                        <label
                          htmlFor="newsletter-consent"
                          className="text-xs text-muted-foreground"
                        >
                          I agree to receive email updates from Failure Podcast
                        </label>
                      </div>
                    </div>
                    {/* Real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_253080117489e79a92e78467e_eaa2448d3f"
                        tabIndex={-1}
                        defaultValue=""
                      />
                    </div>
                    <Button
                      type="submit"
                      name="subscribe"
                      className="w-full bg-failure-red hover:bg-failure-red/90"
                    >
                      Subscribe Now
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 bg-gradient-to-b from-failure-red/10 to-transparent" />
    </section>
  );
}
