"use client"
import type { ReactNode } from "react"
import { useAuth } from "@clerk/nextjs"
import { Inter, JetBrains_Mono, Oswald } from "next/font/google"
import EvilEye from "@/components/EvilEye"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Lock,
  PhoneCall,
  PieChart,
  Plus,
  SlidersHorizontal,
  TrendingUp,
  UserPlus,
  Users,
  Wallet,
  Workflow,
  Zap,
} from "lucide-react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-hubfit-sans",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-hubfit-mono",
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-hubfit-display",
})

type SimpleLink = {
  label: string
  href: string
}

type FeatureCard = {
  title: string
  description: string
  visual: "members" | "messaging" | "tracking" | "ai"
  span: string
}

type IconCard = {
  title: string
  description: string
  icon: LucideIcon
  iconClassName: string
}

type LibraryCard = {
  eyebrow: string
  title: string
  description: string
  span: string
  content: ReactNode
}

const navLinks: SimpleLink[] = [
  { label: "Platform", href: "#features" },
  { label: "Presale", href: "#pricing" },
  { label: "Client App", href: "#content" },
  { label: "Coach App", href: "#management" },
]

const featureCards: FeatureCard[] = [
  {
    title: "Members",
    description:
      "Manage your clients efficiently with comprehensive profiles and group tracking tools.",
    visual: "members",
    span: "md:col-span-1",
  },
  {
    title: "Seamless Messaging",
    description:
      "Chat seamlessly with clients and keep conversations organized in one central inbox.",
    visual: "messaging",
    span: "md:col-span-2",
  },
  {
    title: "Real-Time Tracking",
    description:
      "Monitor progress, daily habits, and task completion in real time for stronger accountability.",
    visual: "tracking",
    span: "md:col-span-2",
  },
  {
    title: "Benchy AI",
    description:
      "Your personal AI assistant that helps program and manage your business effortlessly.",
    visual: "ai",
    span: "md:col-span-1",
  },
]

const managementCards: IconCard[] = [
  {
    title: "Teams",
    description:
      "Group clients together for challenges, programs, and community events with ease.",
    icon: Users,
    iconClassName: "text-blue-400",
  },
  {
    title: "Client Forms",
    description:
      "Collect check-ins, feedback, onboarding details, and intake data without friction.",
    icon: ClipboardList,
    iconClassName: "text-cyan-400",
  },
  {
    title: "Finance",
    description:
      "Track invoices, payments, and revenue directly inside the same operating system.",
    icon: Wallet,
    iconClassName: "text-sky-400",
  },
]

const automationCards: IconCard[] = [
  {
    title: "Auto Flow",
    description: "Create powerful automated workflows that save time every single week.",
    icon: Workflow,
    iconClassName: "text-pink-400",
  },
  {
    title: "Onboarding Flow",
    description: "Automate the new client welcome experience from payment to first check-in.",
    icon: UserPlus,
    iconClassName: "text-fuchsia-400",
  },
  {
    title: "Benchy Calling",
    description: "AI-powered automated phone calls for leads and active clients.",
    icon: PhoneCall,
    iconClassName: "text-rose-400",
  },
]

const pricingFeatures = [
  "Unlimited Clients",
  "Team Accounts & Roles",
  "Custom Branding",
  "Automated Workflows",
]

const footerColumns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Client App", "Coach App"],
  },
  {
    title: "Company",
    links: ["About Us", "Blog", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Community", "API Docs", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security"],
  },
]

const faqs = [
  {
    question: "What does Lifetime Access mean?",
    answer:
      "You pay once and get access to the HubFit business plan forever, including future updates and features released in that tier.",
  },
  {
    question: "Can I migrate my data from other platforms?",
    answer:
      "Yes. We can help move over your clients, programs, and key business data so you can switch without rebuilding everything manually.",
  },
  {
    question: "Is the Coach App included?",
    answer:
      "Yes. The package includes both the core dashboard and coach-facing mobile workflows so you can run your business anywhere.",
  },
  {
    question: "What happens after the presale ends?",
    answer:
      "After presale, HubFit moves to recurring pricing. This lifetime offer is reserved for early supporters only.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes. There is a 30-day money-back guarantee if HubFit is not the right fit for your coaching business.",
  },
]

const libraryCards: LibraryCard[] = [
  {
    eyebrow: "LIBRARY",
    title: "Training Systems",
    description:
      "Build cohesive workout programs with reusable exercises, unified templates, and comprehensive guides.",
    span: "sm:col-span-2 lg:col-span-7 lg:row-span-2",
    content: (
      <div className="mt-auto space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            ["500+", "Exercises"],
            ["45", "Plans"],
            ["12", "Weeks"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:scale-[1.02] hover:bg-white/10"
            >
              <div className="text-2xl font-semibold text-white">{value}</div>
              <div className="text-xs text-white/60">{label}</div>
            </div>
          ))}
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15">
          Open Builder
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    ),
  },
  {
    eyebrow: "CLIENTS",
    title: "Client Access",
    description: "Assign programs instantly to individuals or groups.",
    span: "lg:col-span-5",
    content: (
      <div className="mt-4 flex items-center justify-between gap-4">
        <div>
          <div className="flex -space-x-2">
            {["AL", "MK", "JT", "+8"].map((item, index) => (
              <div
                key={item}
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-black text-xs font-semibold ${
                  index === 3 ? "bg-white/10 text-white/70" : "bg-white text-black"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-white/60">Active now</p>
        </div>
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-transparent">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-xl font-semibold text-black">
            S
          </div>
          <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-black" />
        </div>
      </div>
    ),
  },
  {
    eyebrow: "FORMS",
    title: "Check-ins & Intake",
    description: "Collect weekly check-ins and standardize your client workflows.",
    span: "lg:col-span-5",
    content: (
      <div className="mt-4 space-y-3">
        {([
          ["Weekly Check-in", true],
          ["Photos Required", false],
        ] as const).map(([label, enabled]) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-lg border border-white/10 bg-black/20 p-3"
          >
            <span className="text-xs text-white/80">{label}</span>
            <div
              className={`relative h-5 w-10 rounded-full ${
                enabled ? "bg-indigo-500" : "bg-white/10"
              }`}
            >
              <span
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${
                  enabled ? "right-0.5" : "left-0.5 bg-white/40"
                }`}
              />
            </div>
          </div>
        ))}
        <div className="rounded-lg border border-white/10 bg-black/20 p-3">
          <div className="mb-2 flex items-center justify-between text-xs text-white/70">
            <span>Compliance</span>
            <span>94%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/10">
            <div className="h-1.5 w-[94%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
          </div>
        </div>
      </div>
    ),
  },
  {
    eyebrow: "ASSETS",
    title: "The Vault",
    description: "Documents, videos, and guides in one place.",
    span: "lg:col-span-4 lg:row-span-2",
    content: (
      <div className="mt-4 grid grid-cols-3 gap-2">
        {["DOC", "VID", "+120"].map((item) => (
          <div
            key={item}
            className="flex aspect-square items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs text-white/70"
          >
            {item}
          </div>
        ))}
      </div>
    ),
  },
  {
    eyebrow: "MACROS",
    title: "Nutrition Logic",
    description: "Custom meal plans and macro calculations.",
    span: "lg:col-span-4",
    content: (
      <div className="mt-4 rounded-xl border border-white/10 bg-black/80 p-3">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="ml-auto text-[10px] text-white/50">meal.json</span>
        </div>
        <pre className={`${mono.className} overflow-x-auto text-[10px] leading-relaxed text-white/70`}>
          <code>{`const plan = {
  target: "Fat Loss",
  cals: 2400,
  macros: { p: 180, c: 220 }
}`}</code>
        </pre>
      </div>
    ),
  },
  {
    eyebrow: "HABITS",
    title: "Routine Tracking",
    description: "Daily reminders and visible consistency metrics.",
    span: "lg:col-span-4",
    content: (
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-white/10 bg-black/20 p-3">
          <div className="text-lg font-semibold text-emerald-400">100%</div>
          <div className="text-[10px] text-white/60">Consistency</div>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/20 p-3">
          <div className="text-lg font-semibold text-sky-400">Daily</div>
          <div className="text-[10px] text-white/60">Reminders</div>
        </div>
      </div>
    ),
  },
]

function SectionLabel({
  index,
  title,
}: {
  index: string
  title: string
}) {
  return (
    <div className="flex items-center gap-6">
      <span className={`${mono.className} text-xs tracking-[0.35em] text-blue-400`}>
        {index}
      </span>
      <div className="h-px flex-1 bg-white/10" />
      <span className="text-xs uppercase tracking-[0.35em] text-slate-500">{title}</span>
    </div>
  )
}

function FeatureVisual({ visual }: { visual: FeatureCard["visual"] }) {
  if (visual === "members") {
    return (
      <div className="relative mb-6 flex h-48 items-center justify-center overflow-visible">
        <div className="absolute h-16 w-16 rounded-full border border-blue-400/30 animate-ripple" />
        <div className="absolute h-16 w-16 rounded-full border border-white/10 bg-[#15151a] shadow-[0_0_30px_rgba(59,130,246,0.2)]">
          <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-sm" />
          <div className="relative flex h-full items-center justify-center">
            <Users className="h-7 w-7 text-white" />
          </div>
        </div>
        <svg viewBox="0 0 200 200" className="h-full w-full text-blue-500/20">
          <g className="origin-center animate-orbit">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="6 6"
              className="opacity-30"
            />
            <circle cx="100" cy="20" r="3" fill="#60A5FA" />
            <circle cx="180" cy="100" r="2.5" fill="#3B82F6" className="opacity-70" />
            <circle cx="20" cy="100" r="2.5" fill="#3B82F6" className="opacity-70" />
          </g>
          <circle
            cx="100"
            cy="100"
            r="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-40"
          />
        </svg>
      </div>
    )
  }

  if (visual === "messaging") {
    return (
      <div className="relative mb-6 flex h-48 items-center justify-center overflow-hidden">
        <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-indigo-600/20 blur-[80px]" />
        <svg viewBox="0 0 400 200" className="absolute inset-0 h-full w-full">
          <path d="M50 100 L120 100 L150 70" stroke="rgba(255,255,255,0.12)" />
          <path d="M350 100 L280 100 L250 130" stroke="rgba(255,255,255,0.12)" />
          <path
            d="M50 100 L120 100 L150 70"
            stroke="url(#leftFlow)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="120"
            className="animate-flow"
          />
          <path
            d="M350 100 L280 100 L250 130"
            stroke="url(#rightFlow)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="120"
            className="animate-flow-delayed"
          />
          <defs>
            <linearGradient id="leftFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="rightFlow" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[1.5rem] border border-blue-500/30 bg-gradient-to-br from-indigo-900/50 to-blue-900/20 shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-breathe-diamond">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/50 bg-blue-500/5">
            <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
          </div>
        </div>
      </div>
    )
  }

  if (visual === "tracking") {
    return (
      <div className="relative mb-6 flex h-48 items-center justify-center">
        <div className="absolute h-48 w-48 rounded-full bg-blue-600/20 blur-[60px] animate-soft-pulse" />
        <div className="flex items-center gap-4">
          {[0, 1].map((index) => (
            <div
              key={`left-${index}`}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#121215] text-gray-500 animate-lock-shimmer"
              style={{ animationDelay: `${index}s` }}
            >
              <Lock className="h-4 w-4" />
            </div>
          ))}
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-indigo-600 text-white shadow-[0_0_24px_rgba(79,70,229,0.45)] animate-active-pulse">
            <Zap className="relative z-10 h-8 w-8" />
            <span className="absolute -bottom-3 rounded-full border border-white/10 bg-[#08080a] px-2 py-0.5 text-[9px] font-semibold tracking-[0.3em] text-white">
              LIVE
            </span>
          </div>
          {[2, 3].map((index) => (
            <div
              key={`right-${index}`}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#121215] text-gray-500 animate-lock-shimmer"
              style={{ animationDelay: `${index}s` }}
            >
              <Lock className="h-4 w-4" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative z-10 mb-6 flex h-48 items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.07] [transform:scale(1.5)_rotate(15deg)] animate-grid-pan" />
      <svg viewBox="0 0 200 200" className="h-full w-full text-white/10">
        <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="1" />
        <line
          x1="60"
          y1="20"
          x2="60"
          y2="180"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="animate-signal-flow"
        />
        <line
          x1="140"
          y1="20"
          x2="140"
          y2="180"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="animate-signal-flow-reverse"
        />
        <circle cx="100" cy="60" r="3" fill="white" className="animate-node-activate" />
        <circle cx="100" cy="100" r="3" fill="white" className="animate-node-activate [animation-delay:2s]" />
        <circle cx="100" cy="150" r="3" fill="white" className="animate-node-activate [animation-delay:4s]" />
      </svg>
    </div>
  )
}

export default function HomePage() {
  const { isSignedIn } = useAuth()

  return (
    <main
      className={`${inter.variable} ${mono.variable} ${oswald.variable} relative isolate overflow-x-hidden bg-black text-slate-100 selection:bg-blue-400/20 selection:text-white`}
    >
      <style jsx global>{`
        body {
          background: #000;
          color: #f8fafc;
          font-family: var(--font-hubfit-sans), sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes floatCursor {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(4px, -6px);
          }
        }

        @keyframes floatChip {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-8px, -12px);
          }
        }

        @keyframes rippleExpand {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        @keyframes orbitSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes flowData {
          0% {
            stroke-dashoffset: 120;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }

        @keyframes breatheDiamond {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 50px rgba(59, 130, 246, 0.5);
          }
        }

        @keyframes lockShimmer {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes activePulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(79, 70, 229, 0.4);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 35px rgba(79, 70, 229, 0.65);
          }
        }

        @keyframes softPulse {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.08);
          }
        }

        @keyframes gridPan {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 100px;
          }
        }

        @keyframes signalFlow {
          0% {
            stroke-dashoffset: 20;
            opacity: 0.3;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.6;
          }
        }

        @keyframes nodeActivate {
          0%,
          90%,
          100% {
            fill: white;
            r: 3px;
          }
          92% {
            fill: #3b82f6;
            r: 4.5px;
          }
          95% {
            fill: #60a5fa;
            r: 4px;
          }
        }

        @keyframes rayShift {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-20px) translateY(20px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        .animate-enter {
          animation: fadeSlideIn 0.8s ease-out both;
        }

        .animate-enter-delay {
          animation: fadeSlideIn 0.8s ease-out 0.2s both;
        }

        .animate-float-cursor {
          animation: floatCursor 6s ease-in-out infinite;
        }

        .animate-float-chip {
          animation: floatChip 8s ease-in-out infinite;
        }

        .animate-ripple {
          animation: rippleExpand 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-orbit {
          animation: orbitSlow 12s linear infinite;
        }

        .animate-flow {
          animation: flowData 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-flow-delayed {
          animation: flowData 3s cubic-bezier(0.4, 0, 0.2, 1) 1.5s infinite;
        }

        .animate-breathe-diamond {
          animation: breatheDiamond 4s ease-in-out infinite;
        }

        .animate-lock-shimmer {
          animation: lockShimmer 4s ease-in-out infinite;
        }

        .animate-active-pulse {
          animation: activePulse 3s ease-in-out infinite;
        }

        .animate-soft-pulse {
          animation: softPulse 4s ease-in-out infinite;
        }

        .animate-grid-pan {
          animation: gridPan 60s linear infinite;
        }

        .animate-signal-flow {
          animation: signalFlow 3s linear infinite;
        }

        .animate-signal-flow-reverse {
          animation: signalFlow 4s linear infinite reverse;
        }

        .animate-node-activate {
          animation: nodeActivate 8s ease-in-out infinite;
        }

        .animate-ray-shift {
          animation: rayShift 12s ease-in-out infinite alternate;
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 -z-20">
        <EvilEye
          eyeColor="#384fff"
          intensity={1.5}
          pupilSize={0.6}
          irisWidth={0.25}
          glowIntensity={0.35}
          scale={0.8}
          noiseScale={1}
          pupilFollow={1}
          flameSpeed={1}
          backgroundColor="#060010"
        />
      </div>

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.08),transparent_24%)]" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />
      </div>

      <header className="animate-enter sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-3">
              <div className="flex items-center gap-3 pl-2">
                <div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                    H
                  </div>
                  <span>HubFit</span>
                </div>
              </div>

              <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <a
                  href={isSignedIn ? "/dashboard" : "/sign-in"}
                  className="hidden text-sm font-medium text-slate-300 transition-colors hover:text-white sm:block"
                >
                  {isSignedIn ? "Dashboard" : "Sign in"}
                </a>
                <a
                  href={isSignedIn ? "/dashboard" : "/sign-up"}
                  className="inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition hover:scale-105 hover:bg-slate-100"
                >
                  {isSignedIn ? "Open dashboard" : "Pre-order now"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="animate-enter-delay relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl pb-20 pt-16 sm:pb-28 sm:pt-24 lg:pb-0 lg:pt-32">
            <div className="pointer-events-none relative z-10 select-none">
              <span className="animate-float-cursor animate-float-chip absolute left-1/2 top-0 -translate-x-1/2 -translate-y-8 sm:left-[65%] sm:-top-12 sm:-translate-y-8">
                <span className="block whitespace-nowrap rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                  #1 Coaching Platform
                </span>
              </span>
            </div>

            <div className="relative z-10 text-center">
              <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
                The Future Of{" "}
                <span className="relative mt-2 inline-block">
                  <span className="absolute -inset-1 rounded-lg bg-blue-500/20 blur-2xl" />
                  <span className="relative bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                    Coaching Is Here
                  </span>
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
                HubFit makes it easy to build, scale, and automate your fitness
                business without feeling slow or clunky.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white px-6 py-3 text-base font-semibold text-black transition hover:scale-105 hover:bg-slate-200"
                >
                  Get Lifetime Access
                </a>
              </div>
            </div>

            <div className="relative mt-16 mb-16 flex h-[280px] w-full justify-center overflow-hidden px-4 pr-4 md:mb-24 md:mt-20 md:block md:h-auto md:overflow-visible md:px-0">
              <div className="relative mx-auto w-[850px] max-w-6xl scale-[0.4] overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl sm:scale-50 md:w-full md:scale-100 md:transform-none">
                <div className="absolute inset-0 pointer-events-none z-0">
                  <div className="absolute -right-20 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
                  <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.03)_40%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.03)_60%,transparent_70%)]" />
                </div>

                <div className="relative z-20 flex h-10 items-center border-b border-white/5 bg-white/5 px-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full border border-red-500/50 bg-red-500/20" />
                    <div className="h-3 w-3 rounded-full border border-yellow-500/50 bg-yellow-500/20" />
                    <div className="h-3 w-3 rounded-full border border-green-500/50 bg-green-500/20" />
                  </div>
                </div>

                <div className="relative z-10 grid min-h-[600px] grid-cols-12 text-slate-400">
                  <div className="col-span-3 flex flex-col border-r border-white/10 p-4">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white">
                        <Briefcase className="h-3.5 w-3.5" />
                        Operations
                      </div>
                      <button className="rounded p-1 text-slate-500 transition hover:bg-white/10">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mb-6 flex gap-1 rounded-lg bg-white/5 p-1">
                      <button className="flex-1 rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-black shadow-sm">
                        Business
                      </button>
                      <button className="flex-1 rounded-md px-2 py-1 text-[10px] font-medium text-slate-400 hover:text-white">
                        Finance
                      </button>
                      <button className="flex-1 rounded-md px-2 py-1 text-[10px] font-medium text-slate-400 hover:text-white">
                        HR
                      </button>
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="mb-2 pl-2 text-[10px] font-medium uppercase tracking-wider text-slate-600">
                        Active Workflows
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5 text-xs text-white">
                        <div className="flex items-center gap-2">
                          <PieChart className="h-3.5 w-3.5 text-slate-400" />
                          <span>Q3 Revenue Forecast</span>
                        </div>
                        <span className="text-[10px] text-green-400">Live</span>
                      </div>
                    </div>

                    <div className="mt-auto rounded-xl border border-white/5 bg-black/20 p-4">
                      <div className="mb-3 flex items-center gap-2 text-xs font-medium text-white">
                        <TrendingUp className="h-3.5 w-3.5" />
                        Business Health
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-[10px]">
                          <div className="flex items-center gap-2 text-slate-400">
                            <div className="h-2 w-3 rounded-sm bg-white" />
                            Margin
                          </div>
                          <span className="text-white">24.5%</span>
                        </div>
                        <div className="flex items-center justify-between text-[10px]">
                          <div className="flex items-center gap-2 text-slate-400">
                            <div className="h-2 w-3 rounded-sm bg-slate-600" />
                            Growth
                          </div>
                          <span className="text-green-400">+12%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 flex flex-col border-r border-white/10">
                    <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-medium text-white">
                          quarterly_revenue.model
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-500">Finance Team</span>
                      </div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="relative mb-6 overflow-hidden rounded-xl border border-white/10 bg-black/50 p-4">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="text-xs font-medium text-white">
                            Business Logic
                          </span>
                          <span className={`${mono.className} text-[10px] text-slate-600`}>
                            Python
                          </span>
                        </div>
                        <div className={`${mono.className} h-32 overflow-hidden text-xs leading-relaxed text-slate-300`}>
                          <span className="text-purple-400">import</span> seaint.business{" "}
                          <span className="text-purple-400">as</span> biz <br />
                          <span className="text-purple-400">def</span>{" "}
                          <span className="text-blue-400">forecast_q3</span>
                          (current_mrr, growth_rate):<br />
                          &nbsp;&nbsp;projection = biz.models.linear(current_mrr,
                          growth_rate)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative col-span-3 flex flex-col overflow-hidden p-4">
                    <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[60px]" />
                    <div className="relative z-10">
                      <div className="mb-6 flex items-center gap-2">
                        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white">
                          <SlidersHorizontal className="h-3.5 w-3.5" />
                          Parameters
                        </div>
                      </div>
                      <div className="space-y-4">
                        {[
                          ["Retention", "92%"],
                          ["Client Load", "148"],
                          ["Tasks Done", "34"],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="rounded-xl border border-white/10 bg-white/5 p-4"
                          >
                            <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                              {label}
                            </div>
                            <div className="mt-2 text-2xl font-semibold text-white">
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto mt-24 mb-24 max-w-7xl rounded-3xl bg-gradient-to-br from-white/10 via-white/0 to-white/10 p-6 sm:p-10"
      >
        <div className="flex flex-col gap-10">
          <SectionLabel index="01" title="Core Platform" />

          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="flex max-w-3xl flex-col gap-6">
              <h2
                className={`${oswald.className} text-4xl font-light leading-[1.05] text-white md:text-5xl lg:text-6xl`}
              >
                Focus on Coaching.
                <span className="block text-slate-500">Results you can see.</span>
              </h2>
              <p className="max-w-xl text-lg font-light leading-relaxed text-slate-400">
                A complete operating system for your fitness business. Manage
                clients, chats, tasks, and AI in one place.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5">
              View Platform
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featureCards.map((card) => (
              <article
                key={card.title}
                className={`${card.span} group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-black px-8 py-8 transition duration-500 hover:border-blue-500/30`}
              >
                <FeatureVisual visual={card.visual} />
                <div>
                  <h3
                    className={`${oswald.className} text-4xl font-light text-white`}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-2 text-lg font-light leading-relaxed text-slate-400">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="management"
        className="group/section relative z-10 mx-auto mt-24 mb-24 max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/5 p-10"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-ray-shift absolute -left-1/2 -top-1/2 h-[200%] w-[200%] opacity-40 [background:repeating-linear-gradient(60deg,rgba(30,58,138,0)_0%,rgba(30,58,138,0)_45%,rgba(59,130,246,0.15)_48%,rgba(59,130,246,0.3)_50%,rgba(59,130,246,0.15)_52%,rgba(30,58,138,0)_55%)]" />
          <div className="absolute -top-40 right-0 h-[800px] w-[800px] rounded-full bg-blue-500/20 blur-[120px]" />
        </div>

        <div className="relative z-10 flex flex-col gap-10">
          <SectionLabel index="02" title="Management" />

          <div className="max-w-3xl">
            <h2
              className={`${oswald.className} mb-6 text-4xl font-light text-white md:text-5xl lg:text-6xl`}
            >
              Total Control.
              <span className="text-slate-500"> Zero Friction.</span>
            </h2>
            <p className="max-w-xl text-lg font-light leading-relaxed text-slate-400">
              Streamline operations with powerful tools for team management,
              client intake, and financial tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {managementCards.map((card) => {
              const Icon = card.icon
              return (
                <article
                  key={card.title}
                  className="group relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-black p-8 shadow-lg transition duration-500 hover:-translate-y-1 hover:border-blue-500/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div
                    className={`relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 ${card.iconClassName}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mb-3 text-xl font-semibold tracking-tight text-white">
                    {card.title}
                  </h3>
                  <p className="relative text-sm leading-relaxed text-slate-400 transition group-hover:text-slate-300">
                    {card.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="automations"
        className="group/section relative z-10 mx-auto mt-24 mb-24 max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-transparent p-10"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-transparent opacity-50" />
          <div className="absolute left-[10%] top-[-20%] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="animate-ray-shift absolute -left-[50%] -top-[50%] h-[200%] w-[200%] opacity-20 [background:repeating-linear-gradient(135deg,transparent_0%,transparent_45%,rgba(6,182,212,0.1)_48%,rgba(6,182,212,0.2)_50%,rgba(6,182,212,0.1)_52%,transparent_55%)]" />
        </div>

        <div className="relative z-10 flex flex-col gap-10">
          <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-8">
            <span className={`${mono.className} text-xs tracking-[0.35em] text-cyan-400`}>
              03
            </span>
            <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Automations
            </span>
          </div>

          <div className="max-w-3xl">
            <h2
              className={`${oswald.className} mb-6 text-4xl font-light text-white md:text-5xl lg:text-6xl`}
            >
              Automations
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {automationCards.map((card) => {
              const Icon = card.icon
              return (
                <article
                  key={card.title}
                  className="group relative z-10 overflow-hidden rounded-2xl border border-white/5 bg-[#050505] p-8 shadow-lg transition duration-500 hover:-translate-y-1"
                >
                  <div
                    className={`relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-pink-500/20 bg-pink-500/10 ${card.iconClassName}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mb-3 text-xl font-semibold tracking-tight text-white">
                    {card.title}
                  </h3>
                  <p className="relative text-sm leading-relaxed text-slate-400 transition group-hover:text-slate-300">
                    {card.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="content"
        className="relative z-10 mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6 lg:px-8"
      >
        <div className="relative overflow-visible">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[32rem] w-[36rem] -translate-x-1/2 rounded-full bg-blue-500/10 opacity-20 blur-[140px]" />
            <div className="absolute -left-20 bottom-0 h-[20rem] w-[28rem] rounded-full bg-cyan-500/20 opacity-30 blur-[140px]" />
            <div className="absolute -right-24 top-1/3 h-[22rem] w-[22rem] rounded-full bg-indigo-500/20 opacity-20 blur-[120px]" />
          </div>

          <div className="mb-8 text-center sm:mb-12">
            <div className="mx-auto inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-400 shadow-sm backdrop-blur transition hover:border-white/20 hover:bg-white/10">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Complete Content Engine
            </div>
            <h2 className="mt-4 px-4 text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl lg:text-4xl">
              Centralize your entire
            </h2>
            <h3 className="mt-1 px-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              coaching knowledge base
            </h3>
            <p className="mx-auto mt-3 max-w-2xl px-4 text-xs text-white/60 sm:text-sm lg:text-base">
              From workout templates to meal plans, HubFit gives your coaching
              process a reusable system behind the scenes.
            </p>
          </div>

          <div className="grid auto-rows-[140px] grid-cols-1 gap-3 sm:auto-rows-[180px] sm:grid-cols-2 sm:gap-4 lg:grid-cols-12">
            {libraryCards.map((card) => (
              <article
                key={card.title}
                className={`${card.span} rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 ring-1 ring-white/10 backdrop-blur transition duration-300 hover:border-white/20 hover:from-white/[0.12] sm:rounded-2xl sm:p-5`}
              >
                <div className="flex h-full flex-col">
                  <div className="inline-flex w-fit items-center rounded-md border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-medium text-white/80">
                    {card.eyebrow}
                  </div>
                  <h3 className="mt-2 text-sm font-semibold tracking-tight text-white/90 sm:text-base">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[10px] text-white/70 sm:text-xs">
                    {card.description}
                  </p>
                  {card.content}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="relative z-10 mt-24 border-t border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-center justify-center text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-500" />
              Presale Offer
            </span>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Unlock Lifetime Access
            </h2>
            <p className="mt-4 max-w-lg text-slate-400">
              Join the presale and secure the future of your coaching business.
              Pay once and use HubFit forever.
            </p>
          </div>

          <div className="relative mx-auto flex max-w-3xl flex-col items-center overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-2xl md:p-12">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 bg-blue-500/20 blur-[100px]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />

            <div className="relative z-10 w-full text-center">
              <div className="mb-2 text-lg font-medium text-blue-400">
                All-Access Bundle
              </div>
              <h3 className="mb-6 text-3xl font-bold text-white">
                Lifetime Membership
              </h3>

              <div className="mb-8 flex items-center justify-center gap-2">
                <span className="text-6xl font-bold tracking-tight text-white">
                  $997
                </span>
                <span className="mb-2 self-end text-sm font-medium text-slate-500">
                  one-time payment
                </span>
              </div>

              <p className="mx-auto mb-10 max-w-md text-slate-400">
                Get unlimited access to every feature we build, forever. No
                monthly subscriptions and no hidden fees.
              </p>

              <button className="w-full max-w-md rounded-xl bg-white px-8 py-4 text-base font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] transition hover:scale-[1.02] hover:bg-slate-200">
                Get Lifetime Access
              </button>
              <div className="mt-4 text-xs text-slate-500">
                Limited spots available for presale
              </div>
            </div>

            <div className="relative z-10 mt-12 w-full border-t border-white/10 pt-10">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 text-sm text-slate-300 md:grid-cols-2">
                {pricingFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-semibold text-white">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-white/10 bg-[#0A0A0A] p-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-200 group-hover:text-white">
                {faq.question}
                <span className="text-slate-500 transition group-open:rotate-45">+</span>
              </summary>
              <div className="mt-4 text-sm leading-relaxed text-slate-400">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-7xl border-t border-white/10 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 pt-16 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-6 flex items-center gap-2 text-xl font-bold text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                H
              </div>
              <span>HubFit</span>
            </div>
            <p className="mb-6 text-xs text-slate-500">
              © 2025 HubFit. All rights reserved.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </main>
  )
}
