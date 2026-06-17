import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import {
  Menu,
  X,
  Heart,
  Users,
  Utensils,
  Sparkles,
  HandHeart,
  BookOpen,
  Coffee,
  Handshake,
  Star,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ChevronLeft,
  ChevronRight,
  Sun,
  Quote,
  CheckCircle2,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import heroImg from "@/assets/hero-children.jpg";
import aboutImg from "@/assets/about-mentorship.jpg";
import teaImg from "@/assets/tea-sunday.jpg";
import imgBlessing from "@/assets/child-blessing.jpg";
import imgChinedu from "@/assets/child-chinedu.jpg";
import imgAmina from "@/assets/child-amina.jpg";
import imgOluwaseun from "@/assets/child-oluwaseun.jpg";
import imgFatima from "@/assets/child-fatima.jpg";

export const Route = createFileRoute("/")({
  component: LightpathHome,
});

/* ------------------------------- Data ------------------------------- */

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Programmes", href: "#programmes" },
  { label: "Impact", href: "#impact" },
  { label: "Get Involved", href: "#involved" },
  { label: "Contact", href: "#contact" },
];

const PROGRAMMES = [
  {
    icon: Users,
    title: "Mentorship & Leadership",
    short:
      "Positive development of boys and girls through mentorship, leadership training and value-based programmes.",
    long:
      "We walk alongside Nigerian children with weekly mentorship circles, leadership workshops and character-building sessions delivered in churches, schools and community centres — equipping them with confidence, integrity and life direction.",
  },
  {
    icon: Utensils,
    title: "Feeding & Relief Outreaches",
    short:
      "Support for vulnerable and needy families through warm meals, relief items and compassionate initiatives.",
    long:
      "Through monthly feeding outreaches, food packs and emergency relief, we stand with families facing hardship — ensuring no child in our reach goes to bed hungry.",
  },
  {
    icon: Sparkles,
    title: "Hygiene & Self-Worth",
    short:
      "Practical hygiene, self-worth and responsible-living programmes for children and teenagers.",
    long:
      "From hygiene kits and health talks to teen self-worth circles, we teach Nigerian children that being clean, cared for and confident is their right — and equip them to live it daily.",
  },
  {
    icon: HandHeart,
    title: "Safe Community Spaces",
    short:
      "Meaningful community engagements that foster love, unity, fellowship and emotional support.",
    long:
      "Our gatherings create safe, joyful spaces where children, parents and volunteers connect, share burdens, and grow together as a caring extended family.",
  },
  {
    icon: BookOpen,
    title: "Education & Purpose",
    short:
      "Educational and empowerment resources that help young people discover purpose, confidence and direction.",
    long:
      "Tutoring support, school supplies, career talks and purpose discovery workshops help every child see further than today — and prepare them for a bright tomorrow.",
  },
  {
    icon: Coffee,
    title: "Tea & Coffee Sunday",
    short:
      "Hospitality and fellowship moments in church that build warmth, connection and spiritual bonding.",
    long:
      "Our signature Tea and Coffee Sunday gatherings turn ordinary church mornings into spaces of belonging — where families share stories, mentors listen, and children feel deeply seen.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    short:
      "Collaboration with churches, schools, volunteers and community leaders for impactful humanitarian work.",
    long:
      "We partner with churches, schools and grassroots leaders across Nigeria to multiply impact — co-running programmes, sharing resources and reaching children no single organisation could reach alone.",
  },
  {
    icon: Star,
    title: "Raising A Generation",
    short:
      "Raising responsible, compassionate, purpose-driven individuals who positively influence society.",
    long:
      "Every programme is anchored in one long vision: a generation of Nigerian young people who carry light into their families, schools, workplaces and communities.",
  },
];

const STATS = [
  { value: 850, suffix: "+", label: "Children Mentored & Supported" },
  { value: 4200, suffix: "+", label: "Meals Served in Feeding Outreaches" },
  { value: 120, suffix: "+", label: "Community & Church Programmes Held" },
  { value: 35, suffix: "+", label: "Active Church & School Partners" },
];

const STORIES = [
  {
    img: imgBlessing,
    name: "Blessing Adebayo",
    age: 11,
    location: "Ile-Ife, Osun State",
    quote: "I used to be quiet. Now I lead my Sunday school class.",
    story:
      "Blessing joined our girls' mentorship circle two years ago. Today she leads songs, mentors younger girls, and dreams of becoming a teacher.",
  },
  {
    img: imgChinedu,
    name: "Chinedu Okeke",
    age: 14,
    location: "Ibadan, Oyo State",
    quote: "Lightpath helped me see further than today.",
    story:
      "After education support and purpose workshops, Chinedu placed second in his school maths competition and is preparing for senior secondary scholarships.",
  },
  {
    img: imgAmina,
    name: "Amina Suleiman",
    age: 9,
    location: "Osogbo, Osun State",
    quote: "I feel proud of myself now.",
    story:
      "Our hygiene and self-worth programme gave Amina the tools — and the confidence — to thrive. Her teachers say she is unrecognisable from the shy girl she was a year ago.",
  },
  {
    img: imgOluwaseun,
    name: "Oluwaseun Bamidele",
    age: 13,
    location: "Lagos",
    quote: "Tea & Coffee Sunday feels like home.",
    story:
      "Through community fellowship and emotional support, Oluwaseun found a safe place to talk, pray and grow after a difficult season in his family.",
  },
  {
    img: imgFatima,
    name: "Fatima Yusuf",
    age: 16,
    location: "Abuja",
    quote: "Now I mentor others, just like I was mentored.",
    story:
      "Fatima moved from mentee to peer mentor in two years. She now leads a circle of eight younger girls in her community.",
  },
];

const SLIDES = [
  {
    image: heroImg,
    badge: "Faith-inspired • Child-focused • Nigerian",
    titleStart: "Every Nigerian",
    titleMiddle: "child deserves",
    titleEnd: "A Bright Future",
    desc: "Lightpath Outreach inspires hope, nurtures character and improves lives through child development, mentorship, education, and compassionate community care across Nigeria.",
  },
  {
    image: aboutImg,
    badge: "Nurturing Leaders • Transforming Lives",
    titleStart: "Building Strong",
    titleMiddle: "values, hope &",
    titleEnd: "Good Character",
    desc: "We walk alongside boys and girls with weekly mentorship circles, value-based programs, and leadership training to guide their path forward.",
  },
  {
    image: teaImg,
    badge: "Community Support • Food & Fellowship",
    titleStart: "Serving Hope &",
    titleMiddle: "compassion to",
    titleEnd: "Every Family",
    desc: "Through monthly feeding outreaches, practical relief support, and our signature Tea & Coffee Sundays, we build spaces of warmth and belonging.",
  },
];

const DONATION_PRESETS = [5000, 10000, 25000, 50000];
const VOLUNTEER_AREAS = [
  "Mentorship",
  "Teaching",
  "Counselling",
  "Logistics",
  "Media & Storytelling",
  "Event Support",
];

/* ----------------------------- Component ---------------------------- */

function LightpathHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState<number | null>(null);
  const [programOpen, setProgramOpen] = useState<number | null>(null);

  return (
    <div id="home" className="min-h-screen bg-background text-foreground pt-[120px] lg:pt-[120px]">
      <Navbar
        open={menuOpen}
        setOpen={setMenuOpen}
        onDonate={() => setDonateOpen(true)}
      />

      <Hero onDonate={() => setDonateOpen(true)} />
      <IntroBanner />
      <About />
      <Programmes onOpen={(i) => setProgramOpen(i)} />
      <Impact onStory={(i) => setStoryOpen(i)} onDonate={() => setDonateOpen(true)} />
      <GetInvolved
        onDonate={() => setDonateOpen(true)}
        onVolunteer={() => setVolunteerOpen(true)}
        onPartner={() => setPartnerOpen(true)}
      />
      <Footer onDonate={() => setDonateOpen(true)} />

      {/* Floating mobile donate */}
      <button
        onClick={() => setDonateOpen(true)}
        className="btn-hero fixed bottom-5 right-5 z-40 md:hidden shadow-glow"
        aria-label="Donate now"
      >
        <Heart className="h-4 w-4" /> Donate
      </button>

      <DonateDialog open={donateOpen} onOpenChange={setDonateOpen} />
      <VolunteerDialog open={volunteerOpen} onOpenChange={setVolunteerOpen} />
      <PartnerDialog open={partnerOpen} onOpenChange={setPartnerOpen} />
      <StoryDialog
        index={storyOpen}
        onOpenChange={(o) => !o && setStoryOpen(null)}
      />
      <ProgrammeDialog
        index={programOpen}
        onOpenChange={(o) => !o && setProgramOpen(null)}
      />
    </div>
  );
}

/* ------------------------------ Navbar ------------------------------ */

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-soft">
        <Sun className="h-5 w-5 text-primary-foreground" />
        <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-gold ring-2 ring-background" />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display text-lg font-extrabold tracking-tight ${
            light ? "text-white" : "text-navy"
          }`}
        >
          Lightpath
        </span>
        <span
          className={`-mt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${
            light ? "text-white/80" : "text-primary"
          }`}
        >
          Outreach
        </span>
      </span>
    </a>
  );
}

function Navbar({
  open,
  setOpen,
  onDonate,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  onDonate: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col transition-all duration-300">
      {/* Top Row: Logo & Socials */}
      <div className={`w-full bg-background transition-all duration-300 border-b border-border/40 ${scrolled ? 'h-0 opacity-0 overflow-hidden py-0 border-none' : 'h-16 py-3'}`}>
        <div className="container-prose flex items-center justify-between h-full">
          <Logo />
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row: Navigation Menu */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur shadow-soft border-b border-border"
            : "bg-cream/90 backdrop-blur-sm border-b border-border/65"
        }`}
      >
        <div className="container-prose flex h-14 items-center justify-between py-2">
          {/* Logo visible on scrolled on desktop, always visible on mobile */}
          <div className={`transition-all duration-300 ${scrolled ? 'opacity-100 scale-100 pointer-events-auto' : 'lg:opacity-0 lg:scale-95 lg:pointer-events-none'}`}>
            <Logo />
          </div>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-semibold text-navy/80 highlight-hover py-1 transition hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={onDonate} className="btn-hero !py-2 !px-4 text-xs shadow-soft">
              <Heart className="h-3.5 w-3.5" /> Donate Now
            </button>
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[480px] border-b border-border bg-background" : "max-h-0"
        }`}
      >
        <div className="container-prose flex flex-col gap-1 py-4">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-base font-semibold text-navy hover:bg-cream transition"
            >
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

/* -------------------------------- Hero ------------------------------- */

function Hero({ onDonate }: { onDonate: () => void }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setActive((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setActive((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-navy">
      {/* Background Images with transition */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 -z-20 transition-all duration-1000 ease-in-out ${
            i === active ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.badge}
            className="h-full w-full object-cover object-center"
          />
          {/* EON-inspired: dense left dark panel + bottom vignette for guaranteed legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/65 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>
      ))}

      {/* Top eyebrow stripe — Save the Children inspired accent */}
      <div className="hero-eyebrow-stripe" />

      {/* Main Content Area */}
      <div className="container-prose w-full py-20 text-white relative z-10">
        <div className="max-w-[680px] text-left slide-fade-in" key={active}>
          {/* Badge pill */}
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] backdrop-blur-sm text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {SLIDES[active].badge}
          </span>
          
          {/* Headline — heavy weight, wide text-shadow for contrast on any photo */}
          <h1
            className="mt-6 font-display text-[2.8rem] font-extrabold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.4)" }}
          >
            {SLIDES[active].titleStart}
            <br />
            <span className="text-gold font-serif italic font-normal tracking-wide lowercase pr-3">
              {SLIDES[active].titleMiddle}
            </span>
            <br />
            {SLIDES[active].titleEnd}
          </h1>

          {/* Separator line */}
          <div className="mt-6 h-[3px] w-16 rounded-full bg-gold" />

          <p
            className="mt-5 max-w-xl text-[1.05rem] text-white/95 leading-relaxed"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
          >
            {SLIDES[active].desc}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button onClick={onDonate} className="btn-hero text-sm font-bold shadow-glow group">
              <Heart className="h-4 w-4 group-hover:scale-110 transition-transform" /> Join Our Mission
            </button>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-navy hover:border-white"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mini trust indicators */}
          <div className="mt-10 flex items-center gap-5 flex-wrap">
            {[
              { val: "850+", label: "Children helped" },
              { val: "4,200+", label: "Meals served" },
              { val: "35+", label: "Church partners" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-1.5">
                <span className="font-display text-2xl font-extrabold text-gold" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>{s.val}</span>
                <span className="text-xs text-white/75 font-semibold tracking-wide uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Navigation controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white hover:text-navy hover:border-white hover:scale-110 z-20"
        aria-label="Previous slide"
      >
        <ArrowRight className="h-5 w-5 rotate-180" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white hover:text-navy hover:border-white hover:scale-110 z-20"
        aria-label="Next slide"
      >
        <ArrowRight className="h-5 w-5" />
      </button>

      {/* Slide Bullets */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`rounded-full transition-all duration-400 ${
              idx === active ? "w-10 h-2.5 bg-gold" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/* -------------------------- Intro Banner -------------------------- */

function IntroBanner() {
  return (
    <section className="bg-background py-14 border-b border-border/50">
      <div className="container-prose">
        {/* Floating stat bar — overlapping feel inspired by Save the Children */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-20 mb-14 relative z-10">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white shadow-soft border border-border/30 px-5 py-5 flex flex-col items-center text-center"
            >
              <span className="font-display text-3xl font-extrabold text-primary">
                {s.value.toLocaleString()}{s.suffix}
              </span>
              <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground leading-snug">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Intro headline row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy leading-tight font-display">
              Every child deserves{" "}
              <span className="font-serif italic font-normal text-primary lowercase pr-2">
                hope, character
              </span>{" "}
              and a bright future.
            </h2>
          </div>
          <div className="flex-shrink-0">
            <a href="#about" className="btn-forest text-sm font-bold shadow-soft">
              Discover Our Values
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ About ------------------------------ */

function About() {
  const values = [
    { icon: Heart, label: "Hope" },
    { icon: Star, label: "Character" },
    { icon: Users, label: "Community" },
    { icon: Sun, label: "Purpose" },
  ];
  return (
    <section id="about" className="relative py-24 sm:py-28 bg-background">
      <div className="container-prose grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Sunday school mentorship circle with neatly dressed Nigerian children and kind adult mentors"
            width={1280}
            height={1024}
            loading="lazy"
            className="relative z-10 w-full rounded-3xl object-cover shadow-soft border border-border/40"
          />
          <div className="absolute -bottom-6 -left-6 hidden h-40 w-40 rounded-3xl bg-gold/30 blur-2xl sm:block" />
          <div className="absolute -top-6 -right-6 hidden h-32 w-32 rounded-3xl bg-primary/25 blur-2xl sm:block" />
          <div className="absolute -bottom-8 right-6 z-20 hidden rounded-2xl bg-background px-5 py-4 shadow-soft sm:flex sm:items-center sm:gap-3 border border-border/40">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <HandHeart className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Since
              </p>
              <p className="font-display text-lg font-bold text-navy">2019</p>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Mission
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl leading-tight">
            Lighting Paths of{" "}
            <span className="font-serif italic font-normal text-primary lowercase pr-2">
              hope
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80 font-serif italic border-l-4 border-primary pl-4">
            “To inspire hope, nurture character, and improve lives through child
            development, community care, and compassionate outreach programmes
            that empower individuals and strengthen society.”
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Lightpath Outreach is a Nigerian child-focused nonprofit dedicated
            to raising a generation of responsible, compassionate and
            purpose-driven young people. We work directly with boys and girls,
            vulnerable families, churches and schools to provide mentorship,
            education, practical support and safe spaces where children can
            thrive.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.label}
                className="flex flex-col items-center rounded-2xl bg-cream px-3 py-5 text-center border border-border/30"
              >
                <v.icon className="h-6 w-6 text-primary" />
                <span className="mt-2 text-sm font-bold text-navy font-display">
                  {v.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Programmes ---------------------------- */

function SectionHeader({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`mx-auto max-w-3xl ${center ? "text-center" : ""}`}>
      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl leading-tight">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {sub}
        </p>
      )}
    </div>
  );
}

function Programmes({ onOpen }: { onOpen: (i: number) => void }) {
  return (
    <section id="programmes" className="bg-cream py-24 sm:py-28 border-y border-border/40">
      <div className="container-prose">
        <SectionHeader
          eyebrow="Our Programmes"
          title={
            <>
              How We{" "}
              <span className="font-serif italic font-normal text-primary lowercase pr-2">
                light the path
              </span>
            </>
          }
          sub="Eight key objectives guiding everything we do for Nigerian children and the communities that surround them."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMMES.map((p, i) => (
            <button
              key={p.title}
              onClick={() => onOpen(i)}
              className="card-soft group text-left bg-background flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy font-display">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.short}
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary highlight-hover">
                Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm italic text-muted-foreground font-serif">
          All our programmes are delivered with dignity, cultural sensitivity
          and a deep commitment to the Nigerian child.
        </p>
      </div>
    </section>
  );
}

/* ----------------------------- Impact ----------------------------- */

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, target, duration]);
  return value;
}

function CircularProgress({ value, max, run }: { value: number; max: number; run: boolean }) {
  const radius = 35;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (Math.min(value, max) / max) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className="inline-block flex-shrink-0">
      <circle
        stroke="rgba(255,255,255,0.2)"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="var(--color-gold)"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset: run ? strokeDashoffset : circumference }}
        className="progress-ring__circle transition-all duration-1000 ease-out"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
}

function StatCard({ stat, run }: { stat: (typeof STATS)[number]; run: boolean }) {
  const v = useCountUp(stat.value, run);
  
  // Custom max values to show nice percentage rings
  const maxVal = stat.value === 850 ? 1000 : stat.value === 4200 ? 5000 : stat.value === 120 ? 150 : 50;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/8 backdrop-blur-sm px-5 py-6 flex items-center gap-5 hover:bg-white/12 transition">
      <CircularProgress value={v} max={maxVal} run={run} />
      <div className="text-left">
        <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
          {v.toLocaleString()}
          {stat.suffix}
        </div>
        <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mt-0.5">{stat.label}</p>
      </div>
    </div>
  );
}

function Impact({ onStory, onDonate }: { onStory: (i: number) => void; onDonate: () => void }) {
  const [run, setRun] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const el = document.getElementById("impact-stats");
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setRun(true));
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxStartIndex = Math.max(0, STORIES.length - visibleCount);

  const nextStory = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxStartIndex));
  };

  const prevStory = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="impact" className="bg-background">
      {/* EON-inspired: Full-bleed dark navy impact numbers band */}
      <div
        id="impact-stats"
        className="w-full bg-navy py-20"
      >
        <div className="container-prose">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              Our Impact
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              The Children{" "}
              <span className="font-serif italic font-normal text-gold lowercase pr-2">
                we serve
              </span>
            </h2>
            <p className="mt-4 text-base text-white/70 max-w-xl mx-auto">
              Real numbers. Real names. Real hope — across churches, schools and communities in Nigeria.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <StatCard key={s.label} stat={s} run={run} />
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories carousel */}
      <div className="py-24 sm:py-28">
        <div className="container-prose">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div className="text-left max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Stories of Hope
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-navy sm:text-3xl">
                Children Whose Paths We Are Lighting
              </h3>
              <p className="mt-3 text-muted-foreground">
                Every story represents real hope and transformation made possible by
                partners like you.
              </p>
            </div>
            
            {/* Slider controls */}
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <button
                onClick={prevStory}
                disabled={startIndex === 0}
                className="h-11 w-11 flex items-center justify-center rounded-full border-2 border-border bg-background text-navy transition hover:bg-cream hover:border-primary disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Previous story"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextStory}
                disabled={startIndex === maxStartIndex}
                className="h-11 w-11 flex items-center justify-center rounded-full border-2 border-border bg-background text-navy transition hover:bg-cream hover:border-primary disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Next story"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden w-full py-4">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCount + (24 / window.innerWidth) * 100)}%)`,
                width: `${(STORIES.length / visibleCount) * 100}%`,
              }}
            >
              {STORIES.map((s, i) => (
                <article
                  key={s.name}
                  className="card-soft !p-0 overflow-hidden flex flex-col justify-between h-full border border-border/40 bg-background"
                  style={{ width: `calc(${100 / STORIES.length}% - 1.5rem)` }}
                >
                  <div>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={s.img}
                        alt={`${s.name}, ${s.age}, ${s.location}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 hover:scale-105"
                      />
                      {/* Age badge */}
                      <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy shadow-soft font-display">
                        Age {s.age}
                      </span>
                      {/* Bottom image gradient for text overlap */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h4 className="font-display text-lg font-bold text-navy">
                        {s.name}
                      </h4>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mt-1 font-display">
                        {s.location}
                      </p>
                      <div className="mt-4 flex gap-2 text-sm italic text-foreground/80 font-serif">
                        <Quote className="h-4 w-4 flex-shrink-0 text-primary opacity-60" />
                        <span>{s.quote}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => onStory(i)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary highlight-hover"
                    >
                      Read full story <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Donate CTA strip — Save the Children inspired */}
          <div className="mt-16 rounded-3xl bg-primary px-8 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-extrabold text-white">
                Help us reach every child
              </h3>
              <p className="mt-1 text-sm text-white/80">
                Your support makes mentorship, meals, and safe spaces possible.
              </p>
            </div>
            <button
              onClick={onDonate}
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-glow transition hover:scale-105 hover:shadow-xl"
            >
              <Heart className="h-4 w-4" /> Donate Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Get Involved --------------------------- */

function GetInvolved({
  onDonate,
  onVolunteer,
  onPartner,
}: {
  onDonate: () => void;
  onVolunteer: () => void;
  onPartner: () => void;
}) {
  const cards = [
    {
      icon: Heart,
      title: "Donate",
      desc:
        "Your gift provides meals, school supplies, mentorship sessions, hygiene kits and safe spaces. Every naira lights a path.",
      cta: "Donate Now",
      action: onDonate,
    },
    {
      icon: HandHeart,
      title: "Volunteer",
      desc:
        "Become a mentor, help at outreaches, support events or share your skills — teaching, counselling, logistics, media.",
      cta: "Sign Up to Volunteer",
      action: onVolunteer,
    },
    {
      icon: Handshake,
      title: "Partner With Us",
      desc:
        "Churches, schools, businesses & community groups: host Tea & Coffee Sunday, co-run programmes, provide venues or resources.",
      cta: "Become a Partner",
      action: onPartner,
    },
    {
      icon: Sparkles,
      title: "Advocate & Spread Hope",
      desc:
        "Share our mission, host a fundraiser, mobilise your network, or follow and amplify our stories on social media.",
      cta: "Join Our Community",
      action: () => {
        navigator.clipboard?.writeText("https://lightpathoutreach.org");
        toast.success("Link copied — share Lightpath with your community 💛");
      },
    },
  ];

  return (
    <section id="involved" className="bg-cream py-24 sm:py-28 border-t border-border/40">
      <div className="container-prose">
        <SectionHeader
          eyebrow="Get Involved"
          title={
            <>
              They Care.{" "}
              <span className="font-serif italic font-normal text-primary lowercase pr-2">
                do you?
              </span>
            </>
          }
          sub="There are many meaningful ways you can partner with Lightpath Outreach to change a child's future."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="card-soft flex flex-col bg-background border border-border/40">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary flex-shrink-0">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy font-display">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {c.desc}
              </p>
              <button
                onClick={c.action}
                className="btn-hero mt-6 text-xs w-full shadow-soft"
              >
                {c.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Footer ----------------------------- */

function Footer({ onDonate }: { onDonate: () => void }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer id="contact" className="w-full flex flex-col bg-navy text-white">
      {/* Top Footer Row: Logo & Socials with Light background */}
      <div className="bg-cream text-navy py-8 border-b border-border/50">
        <div className="container-prose flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Logo />
          <div className="flex items-center gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background border border-border text-navy transition hover:bg-primary hover:text-white"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Row: 3 columns */}
      <div className="py-16 bg-navy/95 border-b border-white/5">
        <div className="container-prose grid gap-12 md:grid-cols-3">
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold border-b border-white/10 pb-3">
              Our Objectives
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm text-white/80">
              {PROGRAMMES.slice(0, 4).map((p, i) => (
                <li key={p.title}>
                  <a href="#programmes" className="hover:text-gold transition inline-flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold border-b border-white/10 pb-3">
              Policies
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-gold transition">
                  Social Media Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  No FEAR Act
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold border-b border-white/10 pb-3">
              Contact &amp; Support
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-4.5 w-4.5 flex-shrink-0 text-gold mt-0.5" />
                <span>Ile-Ife, Osun State, Nigeria — serving children nationwide</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="h-4.5 w-4.5 flex-shrink-0 text-gold" />
                <a href="mailto:info@lightpathoutreach.org" className="hover:text-gold transition">
                  info@lightpathoutreach.org
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="h-4.5 w-4.5 flex-shrink-0 text-gold" />
                <span>+234 803 XXX XXXX</span>
              </li>
            </ul>

            {/* Newsletter incorporated into Footer */}
            <div className="mt-6">
              <h5 className="text-xs font-bold uppercase tracking-[0.15em] text-gold">Subscribe to news</h5>
              {sent ? (
                <p className="mt-2 text-xs text-gold flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" /> Subscribed successfully!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!email) return;
                    setSent(true);
                    toast.success("Welcome aboard 💛");
                  }}
                  className="mt-2.5 flex flex-col gap-2"
                >
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    placeholder="Your email address"
                    className="h-10 text-xs rounded-full border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                  <button type="submit" className="btn-hero h-9 !py-0 text-xs font-bold shadow-soft">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Panel Copyright */}
      <div className="py-6 bg-navy text-center text-xs text-white/50 border-t border-white/5">
        <div className="container-prose flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>Lightpath Outreach © 2026. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------- Dialogs ---------------------------- */

function DonateDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  const [amount, setAmount] = useState<number | "custom">(10000);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    toast.success("Thank you for lighting a path 💛");
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        onOpenChange(o);
        if (!o) setTimeout(() => { setSuccess(false); setAmount(10000); setCustom(""); setName(""); setEmail(""); setPhone(""); setMsg(""); }, 200);
      }}
    >
      <DialogContent className="max-w-lg">
        {success ? (
          <div className="py-6 text-center">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-navy">
              Thank you for your gift 💛
            </h3>
            <p className="mt-2 text-muted-foreground">
              Your generosity helps us mentor, feed and uplift Nigerian
              children. We'll email a receipt shortly.
            </p>
            <button
              onClick={() => onOpenChange(false)}
              className="btn-hero mt-6"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">
                Light a path today
              </DialogTitle>
              <DialogDescription>
                Choose an amount in Naira. Every gift goes directly to children
                and community programmes.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {DONATION_PRESETS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setAmount(p)}
                    className={`rounded-2xl border-2 px-3 py-3 text-sm font-bold transition ${
                      amount === p
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-navy hover:border-primary"
                    }`}
                  >
                    ₦{p.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setAmount("custom")}
                  className={`rounded-full border-2 px-4 py-2 text-xs font-semibold ${
                    amount === "custom" ? "border-primary text-primary" : "border-border text-muted-foreground"
                  }`}
                >
                  Custom
                </button>
                {amount === "custom" && (
                  <Input
                    type="number"
                    min={500}
                    placeholder="Enter amount (₦)"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                  />
                )}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <Label htmlFor="dname">Full name</Label>
                  <Input id="dname" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="demail">Email</Label>
                  <Input id="demail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>
              <div>
                <Label htmlFor="dphone">Phone (optional)</Label>
                <Input id="dphone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="dmsg">Message (optional)</Label>
                <Textarea id="dmsg" rows={2} value={msg} onChange={(e) => setMsg(e.target.value)} />
              </div>
              <p className="text-xs text-muted-foreground">🔒 Give securely. Demo form — connect a payment provider like Paystack to go live.</p>
              <DialogFooter>
                <button type="submit" className="btn-hero w-full">
                  <Heart className="h-4 w-4" /> Give Now
                </button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function VolunteerDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", availability: "", message: "" });
  const [areas, setAreas] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  const toggleArea = (a: string) =>
    setAreas((cur) => (cur.includes(a) ? cur.filter((x) => x !== a) : [...cur, a]));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    toast.success("Welcome aboard — we'll be in touch soon 💛");
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        onOpenChange(o);
        if (!o) setTimeout(() => { setSuccess(false); setAreas([]); setForm({ name: "", email: "", phone: "", availability: "", message: "" }); }, 200);
      }}
    >
      <DialogContent className="max-w-lg">
        {success ? (
          <div className="py-6 text-center">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-forest/15 text-forest">
              <HandHeart className="h-8 w-8" />
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-navy">You're in!</h3>
            <p className="mt-2 text-muted-foreground">
              Thank you for stepping forward. Our team will reach out about next
              steps within 3–5 days.
            </p>
            <button onClick={() => onOpenChange(false)} className="btn-hero mt-6">Close</button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Sign up to volunteer</DialogTitle>
              <DialogDescription>Tell us a little about you and how you'd love to help.</DialogDescription>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <Label>Full name</Label>
                  <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div>
                  <Label>Availability</Label>
                  <Input placeholder="e.g. Weekends" value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value })} />
                </div>
              </div>
              <div>
                <Label>Areas of interest</Label>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {VOLUNTEER_AREAS.map((a) => (
                    <label key={a} className="flex cursor-pointer items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm hover:border-primary">
                      <Checkbox checked={areas.includes(a)} onCheckedChange={() => toggleArea(a)} />
                      <span>{a}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <Label>Short message</Label>
                <Textarea rows={2} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <DialogFooter>
                <button type="submit" className="btn-hero w-full">
                  <HandHeart className="h-4 w-4" /> Submit
                </button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function PartnerDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  const [form, setForm] = useState({ org: "", contact: "", email: "", phone: "", interest: "" });
  const [success, setSuccess] = useState(false);
  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        onOpenChange(o);
        if (!o) setTimeout(() => { setSuccess(false); setForm({ org: "", contact: "", email: "", phone: "", interest: "" }); }, 200);
      }}
    >
      <DialogContent className="max-w-lg">
        {success ? (
          <div className="py-6 text-center">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/30 text-navy">
              <Handshake className="h-8 w-8" />
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-navy">Let's light paths together</h3>
            <p className="mt-2 text-muted-foreground">We'll be in touch within 3 working days to explore partnership next steps.</p>
            <button onClick={() => onOpenChange(false)} className="btn-hero mt-6">Close</button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Partner with Lightpath</DialogTitle>
              <DialogDescription>Churches, schools, businesses and community groups — let's plan something beautiful together.</DialogDescription>
            </DialogHeader>
            <form
              onSubmit={(e) => { e.preventDefault(); setSuccess(true); toast.success("Partnership enquiry received 🤝"); }}
              className="space-y-4"
            >
              <div>
                <Label>Organisation / Church / School</Label>
                <Input required value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <Label>Contact person</Label>
                  <Input required value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>
              <div>
                <Label>How would you like to partner?</Label>
                <Textarea required rows={3} value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} placeholder="e.g. Host a Tea & Coffee Sunday, co-run a feeding outreach, provide venue…" />
              </div>
              <DialogFooter>
                <button type="submit" className="btn-hero w-full">
                  <Handshake className="h-4 w-4" /> Send Enquiry
                </button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function StoryDialog({
  index,
  onOpenChange,
}: {
  index: number | null;
  onOpenChange: (o: boolean) => void;
}) {
  const story = index !== null ? STORIES[index] : null;
  return (
    <Dialog open={story !== null} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl overflow-hidden p-0">
        {story && (
          <div>
            <img src={story.img} alt={story.name} className="h-64 w-full object-cover" />
            <div className="p-6 sm:p-8">
              <DialogHeader>
                <DialogTitle className="font-display text-2xl font-bold">
                  {story.name}, {story.age}
                </DialogTitle>
                <DialogDescription className="font-semibold text-primary font-display">
                  {story.location}
                </DialogDescription>
              </DialogHeader>
              <blockquote className="mt-4 border-l-4 border-primary pl-4 text-lg italic text-foreground/80 font-serif">
                “{story.quote}”
              </blockquote>
              <p className="mt-4 leading-relaxed text-muted-foreground">{story.story}</p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function ProgrammeDialog({
  index,
  onOpenChange,
}: {
  index: number | null;
  onOpenChange: (o: boolean) => void;
}) {
  const p = index !== null ? PROGRAMMES[index] : null;
  return (
    <Dialog open={p !== null} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        {p && (
          <>
            <DialogHeader>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <p.icon className="h-6 w-6" />
              </div>
              <DialogTitle className="mt-3 font-display text-2xl font-bold">{p.title}</DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground leading-relaxed mt-2">{p.long}</p>
            <DialogFooter className="mt-4">
              <a href="#involved" onClick={() => onOpenChange(false)} className="btn-hero w-full">
                Get Involved <ArrowRight className="h-4 w-4" />
              </a>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
