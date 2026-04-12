"use client"
import type { LucideIcon } from "lucide-react"
import {
  ArrowLeft,
  ArrowRight,
  Bolt,
  Building2,
  Camera,
  CirclePlay,
  Flower2,
  Heart,
  Infinity,
  Leaf,
  Mail,
  MapPin,
  Music4,
  Send,
  Settings,
  Sparkles,
  Star,
  SunMedium,
  TrainFront,
} from "lucide-react"

type NavLink = {
  label: string
  href: string
  accent: string
}

type ArchiveCard = {
  title?: string
  image: string
  rotation: string
  width: string
  height: string
  tone: string
  kind: "video" | "photo"
  topOffset?: string
}

type Pillar = {
  label: string
  color: string
}

type LocationFeature = {
  label: string
  color: string
  icon: LucideIcon
}

type ScheduleItem = {
  day: string
  title: string
  description: string
  accent: string
}

const navLinks: NavLink[] = [
  { label: "Theme", href: "#about", accent: "hover:bg-[#C9E265]" },
  { label: "Memories", href: "#memories", accent: "hover:bg-[#9D8BB5]" },
  { label: "Schedule", href: "#schedule", accent: "hover:bg-[#FF6B4A]" },
]

const pillars: Pillar[] = [
  { label: "Growth", color: "bg-[#3D6B4F]" },
  { label: "Connection", color: "bg-[#FF6B4A]" },
  { label: "Balance", color: "bg-[#9D8BB5]" },
]

const archiveCards: ArchiveCard[] = [
  {
    title: "2024 Highlight Reel",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
    rotation: "rotate-2",
    width: "w-[300px] md:w-[400px]",
    height: "h-[300px]",
    tone: "bg-black",
    kind: "video",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
    rotation: "-rotate-3",
    width: "w-[280px]",
    height: "h-[340px]",
    tone: "bg-gray-200",
    kind: "photo",
    topOffset: "mt-8",
  },
  {
    title: "Garba Night '22",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
    rotation: "rotate-1",
    width: "w-[320px]",
    height: "h-[300px]",
    tone: "bg-gray-200",
    kind: "photo",
  },
  {
    title: "Keynote Speech",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
    rotation: "-rotate-2",
    width: "w-[300px] md:w-[400px]",
    height: "h-[300px]",
    tone: "bg-black",
    kind: "video",
    topOffset: "mt-6",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop",
    rotation: "rotate-3",
    width: "w-[280px]",
    height: "h-[340px]",
    tone: "bg-gray-200",
    kind: "photo",
  },
]

const locationFeatures: LocationFeature[] = [
  { label: "Easy Transit Access", color: "text-[#FF6B4A]", icon: TrainFront },
  { label: "Botanical Gardens", color: "text-[#3D6B4F]", icon: Leaf },
  { label: "NYC Skyline Views", color: "text-[#9D8BB5]", icon: Building2 },
]

const schedule: ScheduleItem[] = [
  {
    day: "Thursday",
    title: "Arrival and Opening Night",
    description: "Check-in, first connections, and a vibrant opening celebration.",
    accent: "bg-[#C9E265]",
  },
  {
    day: "Friday",
    title: "Talks, Labs, and Reflection",
    description: "Mainstage speakers, small-group sessions, and space to reset.",
    accent: "bg-[#FF6B4A]",
  },
  {
    day: "Saturday",
    title: "Culture, Community, and Socials",
    description: "Shared meals, creative programming, and the big night together.",
    accent: "bg-[#9D8BB5]",
  },
  {
    day: "Sunday",
    title: "Closing Circle",
    description: "Final takeaways, farewells, and momentum for what comes next.",
    accent: "bg-[#3D6B4F]",
  },
]

const marqueeItems = [
  "Art of the In-Between",
  "July 2-5 2026",
  "New Jersey",
  "YJA Convention",
]

const footerLinks = ["About YJA", "Convention History", "Sponsorship"]

export default function HomePage() {
  return (
    <main className="selection:bg-[#C9E265] selection:text-[#1A261D]">
      <style jsx global>{`
        :root {
          --bg-cream: #f2efe9;
          --text-dark: #1a261d;
          --accent-green: #3d6b4f;
          --accent-lime: #c9e265;
          --accent-orange: #ff6b4a;
          --accent-purple: #9d8bb5;
        }

        body {
          background: var(--bg-cream);
          color: var(--text-dark);
          overflow-x: hidden;
        }

        @keyframes yja-float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes yja-float-reverse {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(15px) rotate(-2deg);
          }
        }

        @keyframes yja-spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes yja-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .yja-noise {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 10;
          opacity: 0.06;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .yja-float {
          animation: yja-float 6s ease-in-out infinite;
        }

        .yja-float-delayed {
          animation: yja-float-reverse 7s ease-in-out infinite;
          animation-delay: 1s;
        }

        .yja-spin-slow {
          animation: yja-spin-slow 12s linear infinite;
        }

        .yja-marquee {
          animation: yja-marquee 30s linear infinite;
        }

        .yja-text-stroke {
          -webkit-text-stroke: 1px #1a261d;
          color: transparent;
        }

        .yja-hard-shadow {
          box-shadow: 6px 6px 0 0 #1a261d;
          border: 2px solid #1a261d;
        }

        .yja-hard-shadow-sm {
          box-shadow: 4px 4px 0 0 #1a261d;
          border: 2px solid #1a261d;
        }

        .yja-hard-shadow-hover {
          transition:
            transform 200ms ease,
            box-shadow 200ms ease,
            background-color 200ms ease;
        }

        .yja-hard-shadow-hover:hover {
          box-shadow: 2px 2px 0 0 #1a261d;
          transform: translate(4px, 4px);
        }

        .yja-scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .yja-scrollbar-none::-webkit-scrollbar {
          display: none;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f2efe9;
          border-left: 2px solid #1a261d;
        }

        ::-webkit-scrollbar-thumb {
          background: #ff6b4a;
          border: 2px solid #1a261d;
          border-radius: 999px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #3d6b4f;
        }
      `}</style>

      <div className="yja-noise" />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <SunMedium className="yja-spin-slow absolute top-[15%] left-[5%] h-20 w-20 text-[#FF6B4A] opacity-80" />
        <Flower2 className="yja-float absolute top-[60%] right-[5%] h-28 w-28 rotate-12 text-[#C9E265] opacity-80" />
        <Infinity className="yja-float-delayed absolute bottom-[20%] left-[15%] h-24 w-24 text-[#9D8BB5] opacity-60" />
      </div>

      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="yja-hard-shadow flex w-full max-w-2xl items-center justify-between gap-2 rounded-full bg-[#F2EFE9]/90 px-2 py-2 backdrop-blur-md">
          <a
            href="#"
            className="group flex items-center gap-3 rounded-full bg-[#1A261D] px-4 py-2 text-[#F2EFE9] transition-colors hover:bg-[#FF6B4A]"
          >
            <span className="block font-serif text-xl font-bold italic transition-transform group-hover:rotate-12">
              Y
            </span>
            <span className="text-sm font-bold tracking-tight">2026</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium text-[#1A261D] transition-colors hover:text-[#1A261D] ${link.accent}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button className="flex items-center gap-2 rounded-full border-2 border-[#1A261D] bg-[#C9E265] px-5 py-2.5 text-sm font-bold text-[#1A261D] shadow-[2px_2px_0px_0px_#1A261D] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#b5d145]">
            Join List <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </nav>

      <header className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-12">
        <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 select-none text-center opacity-5">
          <span className="text-[20vw] leading-none font-black text-[#3D6B4F]">2026</span>
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
          <div className="yja-float mb-8">
            <div className="inline-flex -rotate-2 items-center gap-4 rounded-full border-2 border-[#1A261D] bg-[#1A261D] py-1.5 pr-2 pl-6 text-sm font-bold tracking-wide text-[#F2EFE9] uppercase shadow-[4px_4px_0px_0px_#C9E265]">
              July 2nd - 5th, 2026
              <span className="rounded-full bg-[#FF6B4A] px-3 py-1 text-xs font-black text-[#1A261D]">
                SAVE THE DATE
              </span>
            </div>
          </div>

          <h1 className="group relative mb-4 cursor-default text-6xl leading-[0.9] font-black tracking-tighter text-[#1A261D] md:text-8xl lg:text-9xl">
            YJA CONVENTION
            <br />
            <span className="relative inline-block font-serif italic text-[#3D6B4F]">
              New Jersey
              <MapPin className="absolute -top-6 -right-10 -z-10 h-14 w-14 rotate-12 text-[#FF6B4A] md:-right-12 md:h-16 md:w-16" />
            </span>
          </h1>

          <div className="relative mt-8 mb-12">
            <div className="absolute top-1/2 inset-x-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#C9E265] to-transparent opacity-50" />
            <div className="relative inline-block bg-[#F2EFE9] px-6">
              <p className="text-xl font-medium tracking-tight md:text-3xl">
                <span className="mr-2 font-serif italic text-[#1A261D]/60">theme:</span>
                The Art of the{" "}
                <span className="mx-1 inline-block -skew-x-12 rounded-sm border-2 border-[#1A261D] bg-[#9D8BB5] px-2 font-serif italic text-[#F2EFE9]">
                  In-Between
                </span>
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center gap-6 sm:flex-row">
            <button className="yja-hard-shadow yja-hard-shadow-hover group flex items-center gap-3 rounded-full bg-[#1A261D] px-10 py-5 text-xl font-bold text-[#F2EFE9]">
              Register Interest
              <Sparkles className="h-6 w-6 text-[#C9E265] transition-transform duration-500 group-hover:rotate-180" />
            </button>
            <button className="yja-hard-shadow yja-hard-shadow-hover flex items-center gap-3 rounded-full bg-[#F2EFE9] px-10 py-5 text-xl font-bold text-[#1A261D]">
              <CirclePlay className="h-6 w-6" />
              2024 Recap
            </button>
          </div>
        </div>

        <div className="yja-float absolute bottom-20 left-10 hidden lg:block md:left-20">
          <div className="yja-hard-shadow-sm w-48 rotate-[-6deg] rounded-lg bg-white p-2 pb-6">
            <div className="relative mb-2 flex h-40 items-center justify-center overflow-hidden rounded bg-[#3D6B4F]">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                alt="Convention crowd"
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
            <div className="text-center font-serif text-sm font-bold italic">2024 Memories</div>
          </div>
        </div>

        <div className="yja-float-delayed absolute top-40 right-10 hidden lg:block md:right-20">
          <div className="yja-hard-shadow-sm z-20 w-40 rotate-[12deg] rounded-lg bg-white p-2 pb-6">
            <div className="mb-2 flex h-28 items-center justify-center rounded bg-[#FF6B4A]">
              <Music4 className="h-12 w-12 text-[#F2EFE9]" />
            </div>
            <div className="text-center font-serif text-sm font-bold italic">Socials</div>
          </div>
        </div>
      </header>

      <div className="relative z-20 overflow-hidden border-y-4 border-[#1A261D] bg-[#3D6B4F] py-12 shadow-lg -rotate-1 scale-105">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="yja-marquee flex whitespace-nowrap">
          {[0, 1].map((track) => (
            <span
              key={track}
              className="flex items-center gap-6 px-8 text-4xl font-black text-[#F2EFE9] uppercase md:text-5xl"
            >
              {marqueeItems.map((item, index) => (
                <span key={`${track}-${item}`} className="flex items-center gap-6">
                  {item}
                  <Star
                    className={`h-8 w-8 ${
                      index % 3 === 0
                        ? "text-[#C9E265]"
                        : index % 3 === 1
                          ? "text-[#FF6B4A]"
                          : "text-[#9D8BB5]"
                    }`}
                  />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section id="about" className="relative mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative z-10 order-2 lg:order-1">
            <div className="mb-6 inline-block rounded border-2 border-[#1A261D] bg-[#C9E265] px-3 py-1 font-bold text-[#1A261D] shadow-[2px_2px_0px_0px_#1A261D]">
              THEME REVEAL
            </div>
            <h2 className="mb-8 text-5xl leading-[0.9] font-bold tracking-tighter text-[#1A261D] md:text-7xl">
              Finding beauty in the <br />
              <span className="bg-gradient-to-r from-[#FF6B4A] to-[#9D8BB5] bg-clip-text font-serif italic text-transparent">
                Transition.
              </span>
            </h2>
            <div className="space-y-6 text-xl font-medium text-[#1A261D]/80">
              <p>
                <span className="font-bold text-[#1A261D]">The Art of the In-Between</span>{" "}
                explores the spaces where we grow. Between tradition and modernity.
                Between youth and adulthood. Between who we were and who we are
                becoming.
              </p>
              <p>
                New Jersey, the Garden State, sits between major cities and quiet
                nature. It is the perfect backdrop to explore our duality.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="flex items-center gap-2 rounded-lg border-2 border-[#1A261D] bg-[#F2EFE9] px-4 py-2 text-sm font-bold"
                >
                  <div className={`h-3 w-3 rounded-full ${pillar.color}`} />
                  {pillar.label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 h-[500px] w-full lg:order-2">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="yja-float absolute top-0 left-10 z-10 h-80 w-64 rounded-full border-4 border-[#F2EFE9] bg-[#1A261D] opacity-90 mix-blend-multiply" />
              <div className="yja-float-delayed absolute right-10 bottom-0 z-10 h-80 w-64 rounded-full border-4 border-[#F2EFE9] bg-[#FF6B4A] opacity-90 mix-blend-multiply" />

              <div className="z-20 rotate-3 rounded-2xl border-2 border-[#1A261D] bg-[#F2EFE9]/80 p-6 text-center shadow-xl backdrop-blur-sm">
                <Infinity className="mx-auto mb-2 h-12 w-12 text-[#3D6B4F]" />
                <p className="font-serif text-xl font-bold italic">Where paths meet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="memories"
        className="relative overflow-hidden border-t-4 border-[#F2EFE9] bg-[#1A261D] py-20"
      >
        <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between px-6 md:px-12">
          <div>
            <h2 className="text-4xl font-black text-[#F2EFE9] md:text-5xl">The Archive</h2>
            <p className="mt-2 font-serif text-xl italic text-[#C9E265]">
              Moments from past conventions
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#F2EFE9] text-[#F2EFE9] transition-colors hover:border-[#C9E265] hover:bg-[#C9E265] hover:text-[#1A261D]">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#F2EFE9] text-[#F2EFE9] transition-colors hover:border-[#C9E265] hover:bg-[#C9E265] hover:text-[#1A261D]">
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="yja-scrollbar-none flex snap-x gap-8 overflow-x-auto px-6 pb-12 md:px-12">
          {archiveCards.map((card, index) => (
            <div
              key={`${card.kind}-${index}`}
              className={`group relative flex-shrink-0 snap-center ${card.topOffset ?? ""}`}
            >
              <div
                className={`yja-hard-shadow ${card.width} ${card.height} ${card.rotation} rounded-lg bg-[#F2EFE9] p-3 pb-12 transition-transform duration-300 group-hover:rotate-0`}
              >
                <div
                  className={`relative h-full w-full overflow-hidden rounded border border-[#1A261D] ${card.tone}`}
                >
                  <img
                    src={card.image}
                    alt={card.title ?? "Convention memory"}
                    className={`h-full w-full object-cover transition-all duration-700 ${
                      card.kind === "video"
                        ? "opacity-60 group-hover:scale-110"
                        : "grayscale group-hover:scale-105 group-hover:grayscale-0"
                    }`}
                  />

                  {card.kind === "video" ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#F2EFE9] bg-[#F2EFE9]/20 backdrop-blur-md transition-transform group-hover:scale-110">
                        <CirclePlay className="ml-1 h-8 w-8 text-[#F2EFE9]" />
                      </div>
                    </div>
                  ) : null}
                </div>

                {card.title ? (
                  <div className="absolute bottom-3 left-4 font-serif font-bold italic text-[#1A261D]">
                    {card.title}
                  </div>
                ) : null}

                {!card.title && index === 1 ? (
                  <div className="absolute right-4 bottom-4 text-[#FF6B4A]">
                    <Star className="h-8 w-8 fill-current" />
                  </div>
                ) : null}

                {!card.title && index === 4 ? (
                  <div className="absolute top-[-10px] left-[40%] h-12 w-8 rotate-3 bg-[#C9E265]/80 shadow-sm backdrop-blur" />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t-4 border-[#1A261D] bg-[#F2EFE9] py-24 text-[#1A261D]">
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border-2 border-[#1A261D] bg-[#F2EFE9] px-4 py-2 text-sm font-bold text-[#1A261D] shadow-[4px_4px_0px_0px_#1A261D]">
            <Bolt className="h-4 w-4 text-[#FF6B4A]" />
            LOCATION
          </div>

          <h2 className="mb-8 text-5xl font-black tracking-tight md:text-7xl">
            The Garden <br />
            <span className="yja-text-stroke font-serif italic text-[#C9E265]">
              State of Mind
            </span>
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-xl font-medium text-[#1A261D]/70 md:text-2xl">
            Home to one of the largest Jain populations outside India. A perfect
            ecosystem for growth, spirituality, and community.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {locationFeatures.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 rounded-xl border-2 border-[#1A261D] bg-white px-6 py-4 font-bold text-[#1A261D] shadow-[4px_4px_0px_0px_#1A261D] transition-all hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A261D]"
                >
                  <Icon className={`h-5 w-5 ${feature.color}`} />
                  {feature.label}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="schedule"
        className="border-t-4 border-[#1A261D] bg-[linear-gradient(180deg,#F2EFE9_0%,#E9E2D5_100%)] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-5 inline-flex rounded border-2 border-[#1A261D] bg-[#FF6B4A] px-3 py-1 font-bold text-[#1A261D] shadow-[2px_2px_0px_0px_#1A261D]">
                WEEKEND FLOW
              </div>
              <h2 className="text-5xl font-black tracking-tighter text-[#1A261D] md:text-7xl">
                Four days of motion,
                <br />
                meaning, and memory.
              </h2>
            </div>
            <p className="max-w-xl text-lg font-medium text-[#1A261D]/70">
              This is the early shape of the weekend. Expect thoughtful sessions,
              joyful gatherings, and plenty of space for the in-between moments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {schedule.map((item) => (
              <article
                key={item.day}
                className="yja-hard-shadow rounded-[28px] bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div
                  className={`mb-5 inline-flex rounded-full border-2 border-[#1A261D] px-3 py-1 text-xs font-black tracking-[0.18em] text-[#1A261D] uppercase ${item.accent}`}
                >
                  {item.day}
                </div>
                <h3 className="mb-3 text-2xl font-black tracking-tight text-[#1A261D]">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed font-medium text-[#1A261D]/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t-4 border-[#1A261D] bg-[#3D6B4F] px-6 py-32">
        <Settings className="yja-spin-slow absolute top-10 left-10 h-24 w-24 text-[#C9E265] opacity-20" />
        <Sparkles className="yja-float absolute right-10 bottom-10 h-28 w-28 text-[#FF6B4A] opacity-20" />

        <div className="yja-hard-shadow relative z-10 mx-auto max-w-4xl rounded-3xl border-4 border-[#1A261D] bg-[#F2EFE9] p-8 text-center shadow-[12px_12px_0px_0px_#1A261D] md:p-16">
          <div className="mb-6 flex justify-center">
            <div className="yja-float flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#1A261D] bg-[#C9E265] text-[#1A261D]">
              <Mail className="h-10 w-10" />
            </div>
          </div>

          <h2 className="mb-6 text-5xl font-black tracking-tighter text-[#1A261D] md:text-7xl">
            Be part of <br />
            <span className="font-serif italic text-[#FF6B4A]">history.</span>
          </h2>
          <p className="mb-10 text-xl font-medium text-[#1A261D]/70">
            Sign up for early access tickets and exclusive updates for YJA 2026.
          </p>

          <form className="relative mx-auto flex max-w-lg flex-col gap-4 md:flex-row">
            <input
              type="email"
              placeholder="enter@email.com"
              className="flex-1 rounded-xl border-2 border-[#1A261D] bg-white px-6 py-4 font-bold text-[#1A261D] outline-none transition-all placeholder:text-[#1A261D]/40 focus:ring-4 focus:ring-[#C9E265]/50"
            />
            <button
              type="button"
              className="rounded-xl bg-[#1A261D] px-8 py-4 font-bold text-[#F2EFE9] shadow-[4px_4px_0px_0px_#9D8BB5] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#FF6B4A] hover:shadow-[2px_2px_0px_0px_#9D8BB5] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              Join Waitlist
            </button>
          </form>
          <p className="mt-6 text-sm font-bold tracking-wider text-[#1A261D]/40 uppercase">
            No spam. Only epic updates.
          </p>
        </div>
      </section>

      <footer className="bg-[#1A261D] px-6 pt-20 pb-10 text-[#F2EFE9]">
        <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a
              href="#"
              className="group mb-6 flex w-fit items-center gap-2 text-3xl font-black tracking-tighter text-[#F2EFE9]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#F2EFE9] bg-[#C9E265] font-serif text-xl italic text-[#1A261D] transition-transform group-hover:rotate-12">
                Y
              </span>
              YJA 2026
            </a>
            <p className="max-w-sm text-lg leading-relaxed font-medium text-[#9D8BB5]">
              Young Jain Professionals of America.
              <br />
              Connecting souls, building futures.
            </p>
          </div>

          <div>
            <h4 className="mb-6 w-fit border-b-2 border-[#FF6B4A]/30 pb-2 text-sm font-bold tracking-wider text-[#FF6B4A] uppercase">
              Navigation
            </h4>
            <ul className="space-y-4 font-medium text-[#F2EFE9]/70">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="flex items-center gap-2 transition-colors hover:text-[#C9E265]">
                    <ArrowRight className="h-4 w-4" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 w-fit border-b-2 border-[#FF6B4A]/30 pb-2 text-sm font-bold tracking-wider text-[#FF6B4A] uppercase">
              Socials
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#F2EFE9]/20 bg-[#F2EFE9]/10 transition-all hover:-translate-y-1 hover:border-[#C9E265] hover:bg-[#C9E265] hover:text-[#1A261D]"
              >
                <Camera className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#F2EFE9]/20 bg-[#F2EFE9]/10 transition-all hover:-translate-y-1 hover:border-[#C9E265] hover:bg-[#C9E265] hover:text-[#1A261D]"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-[#F2EFE9]/10 pt-8 text-center text-sm font-medium text-[#9D8BB5] md:flex-row md:text-left">
          <p>© 2026 Young Jain Professionals.</p>
          <p className="flex items-center justify-center gap-2 md:justify-end">
            Designed with <Heart className="h-4 w-4 fill-[#FF6B4A] text-[#FF6B4A]" /> in NJ.
          </p>
        </div>
      </footer>
    </main>
  )
}
