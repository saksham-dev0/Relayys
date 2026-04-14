"use client"

import { useAuth } from "@clerk/nextjs"
import Link from "next/link"
import { ArrowRight, Bot, Brain, Calendar, MessageSquare, Zap, BookOpen, Plug } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Platform icons as SVGs
function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function SlackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  )
}

const platforms = [
  {
    name: "Telegram",
    icon: TelegramIcon,
    color: "text-sky-500",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    description: "Chat with your assistant directly in Telegram",
    available: true,
  },
  {
    name: "WhatsApp",
    icon: WhatsAppIcon,
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    description: "Stay connected through WhatsApp messages",
    available: false,
  },
  {
    name: "Slack",
    icon: SlackIcon,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    description: "Integrate with your workspace on Slack",
    available: false,
  },
  {
    name: "Google Calendar",
    icon: Calendar,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    description: "Schedule and manage events effortlessly",
    available: false,
  },
]

const features = [
  {
    icon: MessageSquare,
    title: "Talk Naturally",
    description: "No commands, no menus. Just say what you need and Relay handles it.",
    className: "md:col-span-1",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Brain,
    title: "Knows Your Context",
    description: "Upload documents, notes, or links. Relay remembers everything so you don't have to.",
    className: "md:col-span-1",
    gradient: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: Plug,
    title: "Works Everywhere",
    description: "One assistant, connected to all your favourite apps. Switch platforms without losing context.",
    className: "md:col-span-1",
    gradient: "from-sky-500/20 to-sky-500/5",
  },
  {
    icon: Zap,
    title: "Always Instant",
    description: "Relay responds in seconds, 24/7. No waiting, no loading screens.",
    className: "md:col-span-1",
    gradient: "from-amber-500/20 to-amber-500/5",
  },
]

export default function LandingPage() {
  const { isSignedIn } = useAuth()

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Bot className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold tracking-tight">ImBusy.ai</span>
          </div>
          <div className="flex items-center gap-3">
            {isSignedIn ? (
              <Button asChild size="sm">
                <Link href="/dashboard">
                  Dashboard <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
            ) : (
              <>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/sign-up">
                    Get Started <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-24 pt-24">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
              Your AI, everywhere
            </Badge>

            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              One assistant.
              <br />
              <span className="text-primary">Every platform.</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Relay connects your AI assistant to the tools you already use — WhatsApp, Telegram, Slack, Google Calendar — so you can get things done just by asking.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="gap-2 px-8">
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 px-8">
                <a href="#features">See how it works</a>
              </Button>
            </div>

            {/* Platform logos strip */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
              <span className="text-sm text-muted-foreground">Works with</span>
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className={cn(
                    "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium",
                    p.bg,
                    p.border,
                    p.color
                  )}
                >
                  <p.icon className="h-4 w-4" />
                  {p.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section id="features" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Your assistant, supercharged
              </h2>
              <p className="mx-auto max-w-xl text-muted-foreground">
                Everything you need to stay on top of your day — without switching between apps.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-border hover:shadow-lg",
                    f.className
                  )}
                >
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100", f.gradient)} />
                  <div className="relative">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                      <f.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="mb-2 font-semibold">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section id="integrations" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Works where you already are
              </h2>
              <p className="mx-auto max-w-xl text-muted-foreground">
                No new apps to download. Relay meets you in the platforms you use every day.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="relative rounded-2xl border border-border/60 bg-card p-6 transition-all duration-200 hover:border-border hover:shadow-md"
                >
                  <div className={cn("mb-4 flex h-12 w-12 items-center justify-center rounded-xl border", platform.bg, platform.border)}>
                    <platform.icon className={cn("h-6 w-6", platform.color)} />
                  </div>
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="font-semibold">{platform.name}</h3>
                    {platform.available ? (
                      <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                        Live
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="text-xs">
                        Soon
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 px-8 py-16">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[80px]" />
              </div>
              <div className="relative">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Start using Relay today
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Connect your first platform in minutes. No credit card required.
                </p>
                <Button asChild size="lg" className="gap-2 px-10">
                  <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    Get Started Free <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
              <Bot className="h-3 w-3 text-primary-foreground" />
            </div>
            <span className="text-sm font-medium">ImBusy.ai</span>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} ImBusy.ai. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/sign-in" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Sign In
            </Link>
            <Link href="/sign-up" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
