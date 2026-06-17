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
  ChevronDown,
  Globe,
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
  { label: "Programmes", href: "#programmes" },
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
  { value: 850, suffix: "+", label: "Children Mentored" },
  { value: 4200, suffix: "+", label: "Meals Served" },
  { value: 120, suffix: "+", label: "Programmes Held" },
  { value: 35, suffix: "+", label: "Church & School Partners" },
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
    eyebrow: "Faith-inspired · Child-focused · Nigerian",
    title: "Every Nigerian child deserves",
    highlight: "A Bright Future",
    desc: "Lightpath Outreach inspires hope, nurtures character and improves lives through child development, mentorship, education, and compassionate community care across Nigeria.",
  },
  {
    image: aboutImg,
    eyebrow: "Nurturing Leaders · Transforming Lives",
    title: "Building strong values, hope &",
    highlight: "Good Character",
    desc: "We walk alongside boys and girls with weekly mentorship circles, value-based programs, and leadership training to guide their path forward.",
  },
  {
    image: teaImg,
    eyebrow: "Community Support · Food & Fellowship",
    title: "Serving hope & compassion to",
    highlight: "Every Family",
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
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Navbar
        open={menuOpen}
        setOpen={setMenuOpen}
        onDonate={() => setDonateOpen(true)}
      />

      <Hero onDonate={() => setDonateOpen(true)} />
      <MissionBanner />
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
        className="btn-cta fixed bottom-5 right-5 z-40 md:hidden"
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
    <a href="#home" className="flex items-center gap-3">
      <span
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-full"
        style={{ background: light ? "rgba(255,255,255,0.15)" : "#01284f" }}
      >
        <Sun className="h-4.5 w-4.5" style={{ color: light ? "#fff" : "#c9fba2" }} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-base font-bold tracking-tight"
          style={{ color: light ? "#fff" : "#01284f" }}
        >
          Lightpath
        </span>
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: light ? "rgba(255,255,255,0.6)" : "#ff583e" }}
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
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-400"
      style={{
        background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(1,40,79,0.08)" : "none",
      }}
    >
      <div className="container-prose flex h-16 items-center justify-between">
        {/* Logo — always visible, adapts to scroll */}
        <Logo light={!scrolled} />

        {/* Desktop nav pill — MFI style glass pill */}
        <nav
          className={`hidden items-center gap-1 lg:flex px-4 py-1 transition-all duration-400 ${
            scrolled ? "bg-transparent rounded-none" : "nav-glass"
          }`}
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3 py-1.5 text-sm font-medium transition-colors duration-300 rounded-full hover:bg-white/10"
              style={{ color: scrolled ? "#01284f" : "#fff" }}
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onDonate}
            className="btn-cta !py-2 !px-4 text-xs hidden sm:inline-flex"
          >
            <Heart className="h-3.5 w-3.5" /> Donate Now
          </button>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full lg:hidden"
            style={{
              background: scrolled ? "transparent" : "rgba(255,255,255,0.15)",
              border: scrolled ? "1.5px solid rgba(1,40,79,0.2)" : "1.5px solid rgba(255,255,255,0.35)",
              color: scrolled ? "#01284f" : "#fff",
            }}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[480px]" : "max-h-0"
        }`}
        style={{ background: "rgba(1, 40, 79, 0.97)", backdropFilter: "blur(12px)" }}
      >
        <div className="container-prose flex flex-col gap-1 py-5">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10 transition"
            >
              {n.label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); onDonate(); }}
            className="btn-cta mt-3 text-sm"
          >
            <Heart className="h-4 w-4" /> Donate Now
          </button>
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
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setActive((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setActive((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section
      className="relative isolate flex min-h-screen items-center overflow-hidden"
      style={{ background: "#01284f" }}
    >
      {/* Background Images */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 -z-20 transition-all duration-1200 ease-in-out ${
            i === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.03] pointer-events-none"
          }`}
          style={{ transitionDuration: "1.2s" }}
        >
          <img
            src={slide.image}
            alt={slide.eyebrow}
            className="h-full w-full object-cover"
          />
          {/* MFI-style: strong dark overlay for text contrast */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(1,40,79,0.88) 0%, rgba(1,40,79,0.65) 50%, rgba(1,40,79,0.30) 100%)",
            }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(1,40,79,0.2)" }} />
        </div>
      ))}

      {/* Content */}
      <div className="container-prose w-full py-32 text-white relative z-10">
        <div className="max-w-2xl slide-fade-in" key={active}>
          {/* Eyebrow */}
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-5"
            style={{ color: "#c9fba2" }}
          >
            {SLIDES[active].eyebrow}
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {SLIDES[active].title}
            <br />
            <span style={{ color: "#ff583e" }}>{SLIDES[active].highlight}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            {SLIDES[active].desc}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button onClick={onDonate} className="btn-cta text-sm font-semibold">
              <Heart className="h-4 w-4" /> Join Our Mission
            </button>
            <a href="#about" className="btn-outline-white text-sm font-semibold">
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Prev/Next */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/70 transition hover:bg-white hover:text-navy hover:border-white z-20"
        style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(4px)" }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/70 transition hover:bg-white hover:text-navy hover:border-white z-20"
        style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(4px)" }}
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className="h-2 rounded-full transition-all duration-400"
            style={{
              width: idx === active ? "2rem" : "0.5rem",
              background: idx === active ? "#ff583e" : "rgba(255,255,255,0.35)",
            }}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 z-20">
        <span className="text-xs font-medium tracking-widest uppercase text-white/40">Scroll</span>
        <ChevronDown className="h-4 w-4 text-white/40 animate-bounce" />
      </div>
    </section>
  );
}

/* -------------------------- Mission Banner -------------------------- */

function MissionBanner() {
  return (
    <section
      className="py-14 border-b"
      style={{ background: "#01284f", borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: numbers row */}
          <div className="flex flex-wrap gap-10">
            {[
              { num: "850+", label: "Children Mentored" },
              { num: "4,200+", label: "Meals Served" },
              { num: "2019", label: "Founded" },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="font-display text-3xl font-bold"
                  style={{ color: "#c9fba2" }}
                >
                  {item.num}
                </p>
                <p className="text-xs font-medium uppercase tracking-wider mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          {/* Right: tagline */}
          <div className="max-w-sm">
            <p className="text-base leading-relaxed font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
              Lighting paths of hope for Nigerian children — one community, one child, one programme at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ About ------------------------------ */

function About() {
  const values = [
    { icon: Heart, label: "Hope", desc: "We believe every child deserves a hopeful future" },
    { icon: Star, label: "Character", desc: "Values-first mentorship that shapes who children become" },
    { icon: Users, label: "Community", desc: "Strength through togetherness, fellowship and belonging" },
    { icon: Sun, label: "Purpose", desc: "Helping young people discover their God-given direction" },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container-prose">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: "25px" }}
            >
              <img
                src={aboutImg}
                alt="Children in mentorship circle"
                className="w-full h-[480px] object-cover"
              />
              {/* Orange accent pill overlay */}
              <div
                className="absolute bottom-6 left-6 rounded-2xl px-5 py-4"
                style={{ background: "rgba(1,40,79,0.9)", backdropFilter: "blur(8px)" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#c9fba2" }}>
                  Faith-rooted
                </p>
                <p className="font-display text-lg font-bold text-white mt-0.5">
                  Est. 2019 · Ile-Ife, Nigeria
                </p>
              </div>
            </div>
            {/* Decorative blob */}
            <div
              className="absolute -top-8 -right-8 -z-10 h-48 w-48 rounded-full opacity-40"
              style={{ background: "#cfdedc", filter: "blur(40px)" }}
            />
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Our Mission</span>
            <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl" style={{ color: "#01284f" }}>
              Lighting Paths
              <br />
              <span style={{ color: "#ff583e" }}>of Hope</span>
            </h2>
            <blockquote
              className="mt-8 text-lg leading-relaxed pl-5 font-medium"
              style={{
                borderLeft: "3px solid #ff583e",
                color: "#705348",
              }}
            >
              "To inspire hope, nurture character, and improve lives through child development, community care, and compassionate outreach programmes that empower individuals and strengthen society."
            </blockquote>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "#705348" }}>
              Lightpath Outreach is a Nigerian child-focused nonprofit dedicated to raising a generation of responsible, compassionate and purpose-driven young people. We work directly with boys and girls, vulnerable families, churches and schools to provide mentorship, education, practical support and safe spaces where children can thrive.
            </p>

            {/* Values grid */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default group"
                  style={{ background: "#f7f5e8", border: "1px solid rgba(1,40,79,0.06)" }}
                >
                  <v.icon className="h-5 w-5 mb-3" style={{ color: "#ff583e" }} />
                  <p className="font-display text-sm font-bold" style={{ color: "#01284f" }}>
                    {v.label}
                  </p>
                  <p className="text-xs leading-relaxed mt-1" style={{ color: "#705348" }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
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
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <span
        className="eyebrow"
        style={{ color: light ? "#c9fba2" : "#ff583e" }}
      >
        {eyebrow}
      </span>
      <h2
        className="text-4xl font-bold sm:text-5xl"
        style={{ color: light ? "#fff" : "#01284f" }}
      >
        {title}
      </h2>
      {sub && (
        <p
          className="mt-5 text-base leading-relaxed sm:text-lg"
          style={{ color: light ? "rgba(255,255,255,0.65)" : "#705348" }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function Programmes({ onOpen }: { onOpen: (i: number) => void }) {
  return (
    <section
      id="programmes"
      className="py-24 sm:py-32"
      style={{ background: "#f7f5e8" }}
    >
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Our Programmes"
            title={
              <>
                How We Light
                <br />
                <span style={{ color: "#ff583e" }}>The Path</span>
              </>
            }
          />
          <p
            className="max-w-sm text-base leading-relaxed"
            style={{ color: "#705348" }}
          >
            Eight key objectives guiding everything we do for Nigerian children and the communities that surround them.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMMES.map((p, i) => (
            <button
              key={p.title}
              onClick={() => onOpen(i)}
              className="card-mfi group text-left flex flex-col justify-between bg-white"
            >
              <div>
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(255,88,62,0.1)" }}
                >
                  <p.icon className="h-6 w-6" style={{ color: "#ff583e" }} />
                </div>
                <h3
                  className="font-display text-base font-bold mb-2"
                  style={{ color: "#01284f" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#705348" }}>
                  {p.short}
                </p>
              </div>
              <span
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold link-hover"
                style={{ color: "#ff583e" }}
              >
                Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Impact ----------------------------- */

function useCountUp(target: number, run: boolean, duration = 1600) {
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

function StatCard({ stat, run }: { stat: (typeof STATS)[number]; run: boolean }) {
  const v = useCountUp(stat.value, run);

  return (
    <div className="stat-card group">
      <div
        className="font-display text-4xl font-bold mb-2 stat-num transition-colors duration-300"
        style={{ color: "#01284f" }}
      >
        {v.toLocaleString()}{stat.suffix}
      </div>
      <p
        className="text-xs font-semibold uppercase tracking-wider stat-label transition-colors duration-300"
        style={{ color: "#705348" }}
      >
        {stat.label}
      </p>
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
      (entries) => entries.forEach((e) => e.isIntersecting && setRun(true)),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxStartIndex = Math.max(0, STORIES.length - visibleCount);
  const nextStory = () => setStartIndex((p) => Math.min(p + 1, maxStartIndex));
  const prevStory = () => setStartIndex((p) => Math.max(p - 1, 0));

  return (
    <section
      id="impact"
      className="py-24 sm:py-32"
      style={{ background: "#01284f" }}
    >
      <div className="container-prose">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Our Impact"
            title={
              <>
                The Children
                <br />
                <span style={{ color: "#c9fba2" }}>We Serve</span>
              </>
            }
            sub="Real numbers. Real names. Real hope — across churches, schools and communities in Nigeria."
            light
          />
          <button
            onClick={onDonate}
            className="btn-cta flex-shrink-0 self-start md:self-end"
          >
            <Heart className="h-4 w-4" /> Support a Child
          </button>
        </div>

        {/* Stats */}
        <div id="impact-stats" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {STATS.map((s) => (
            <StatCard key={s.label} stat={s} run={run} />
          ))}
        </div>

        {/* Stories */}
        <div>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Children Whose Paths We Are Lighting
              </h3>
              <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                Every story represents real hope made possible by partners like you.
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={prevStory}
                disabled={startIndex === 0}
                className="h-10 w-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextStory}
                disabled={startIndex === maxStartIndex}
                className="h-10 w-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCount + (20 / (window?.innerWidth || 1200)) * 100)}%)`,
                width: `${(STORIES.length / visibleCount) * 100}%`,
              }}
            >
              {STORIES.map((s, i) => (
                <article
                  key={s.name}
                  className="flex-shrink-0 overflow-hidden flex flex-col"
                  style={{
                    width: `calc(${100 / STORIES.length}% - 1.25rem)`,
                    background: "#fff",
                    borderRadius: "20px",
                  }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={s.img}
                      alt={`${s.name}, ${s.age}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                    <span
                      className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold"
                      style={{ background: "#ff583e", color: "#fff" }}
                    >
                      Age {s.age}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="font-display text-base font-bold" style={{ color: "#01284f" }}>
                      {s.name}
                    </h4>
                    <p className="text-xs font-semibold uppercase tracking-wider mt-0.5" style={{ color: "#ff583e" }}>
                      {s.location}
                    </p>
                    <p className="mt-3 text-sm italic leading-relaxed flex-1" style={{ color: "#705348" }}>
                      "{s.quote}"
                    </p>
                    <button
                      onClick={() => onStory(i)}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold link-hover"
                      style={{ color: "#01284f" }}
                    >
                      Read full story <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
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
      tag: "Most Impactful",
      title: "Donate",
      desc: "Your gift provides meals, school supplies, mentorship sessions, hygiene kits and safe spaces. Every naira lights a path.",
      cta: "Donate Now",
      action: onDonate,
      accent: "#ff583e",
    },
    {
      icon: HandHeart,
      tag: null,
      title: "Volunteer",
      desc: "Become a mentor, help at outreaches, support events or share your skills — teaching, counselling, logistics, media.",
      cta: "Sign Up",
      action: onVolunteer,
      accent: "#01284f",
    },
    {
      icon: Handshake,
      tag: null,
      title: "Partner With Us",
      desc: "Churches, schools, businesses & community groups: host Tea & Coffee Sunday, co-run programmes, provide venues or resources.",
      cta: "Become a Partner",
      action: onPartner,
      accent: "#01284f",
    },
    {
      icon: Globe,
      tag: null,
      title: "Spread the Word",
      desc: "Share our mission, host a fundraiser, mobilise your network, or follow and amplify our stories on social media.",
      cta: "Share Lightpath",
      action: () => {
        navigator.clipboard?.writeText("https://lightpathoutreach.org");
        toast.success("Link copied — share Lightpath with your community 💛");
      },
      accent: "#01284f",
    },
  ];

  return (
    <section
      id="involved"
      className="py-24 sm:py-32 bg-background"
    >
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Get Involved"
            title={
              <>
                Ways You Can
                <br />
                <span style={{ color: "#ff583e" }}>Make a Difference</span>
              </>
            }
          />
          <p
            className="max-w-sm text-base leading-relaxed"
            style={{ color: "#705348" }}
          >
            There are many meaningful ways you can partner with Lightpath Outreach to change a child's future.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="card-mfi flex flex-col"
              style={{ background: c.tag ? "#01284f" : "#fff" }}
            >
              {c.tag && (
                <span
                  className="self-start rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-4"
                  style={{ background: "#ff583e", color: "#fff" }}
                >
                  {c.tag}
                </span>
              )}
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl mb-5"
                style={{
                  background: c.tag ? "rgba(201,251,162,0.15)" : "rgba(1,40,79,0.07)",
                }}
              >
                <c.icon
                  className="h-6 w-6"
                  style={{ color: c.tag ? "#c9fba2" : "#ff583e" }}
                />
              </div>
              <h3
                className="font-display text-lg font-bold mb-2"
                style={{ color: c.tag ? "#fff" : "#01284f" }}
              >
                {c.title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: c.tag ? "rgba(255,255,255,0.65)" : "#705348" }}
              >
                {c.desc}
              </p>
              <button
                onClick={c.action}
                className="mt-6 btn-cta text-xs w-full"
                style={c.tag ? {} : { background: "#01284f" }}
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
  const [sent, setSent] = useState(false);

  return (
    <footer id="contact" style={{ background: "#01284f" }}>
      {/* Pre-footer CTA band */}
      <div
        className="py-16 border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container-prose flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to light a path?
            </h2>
            <p className="mt-3 text-base" style={{ color: "rgba(255,255,255,0.55)" }}>
              Your support transforms the lives of Nigerian children — one gift at a time.
            </p>
          </div>
          <button onClick={onDonate} className="btn-cta flex-shrink-0">
            <Heart className="h-4 w-4" /> Donate Now
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-16">
        <div className="container-prose grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              A Nigerian child-focused nonprofit inspiring hope, nurturing character and improving lives through community care and compassionate outreach.
            </p>
            <div className="mt-6 flex gap-3">
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
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full transition"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#ff583e";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Programmes */}
          <div>
            <h4
              className="font-display text-xs font-bold uppercase tracking-[0.2em] pb-3 border-b mb-5"
              style={{ color: "#c9fba2", borderColor: "rgba(255,255,255,0.08)" }}
            >
              Our Programmes
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              {PROGRAMMES.slice(0, 5).map((p) => (
                <li key={p.title}>
                  <a href="#programmes" className="hover:text-white transition link-hover">
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4
              className="font-display text-xs font-bold uppercase tracking-[0.2em] pb-3 border-b mb-5"
              style={{ color: "#c9fba2", borderColor: "rgba(255,255,255,0.08)" }}
            >
              Organisation
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              {["About Us", "Our Impact", "Get Involved", "Volunteer", "Donate", "Privacy Policy"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition link-hover">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4
              className="font-display text-xs font-bold uppercase tracking-[0.2em] pb-3 border-b mb-5"
              style={{ color: "#c9fba2", borderColor: "rgba(255,255,255,0.08)" }}
            >
              Contact
            </h4>
            <ul className="space-y-3 text-sm mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "#ff583e" }} />
                <span>Ile-Ife, Osun State, Nigeria</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: "#ff583e" }} />
                <a href="mailto:info@lightpathoutreach.org" className="hover:text-white transition">
                  info@lightpathoutreach.org
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: "#ff583e" }} />
                <span>+234 803 XXX XXXX</span>
              </li>
            </ul>

            <p
              className="text-[10px] font-bold uppercase tracking-[0.15em] mb-3"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Newsletter
            </p>
            {sent ? (
              <p className="text-xs flex items-center gap-1.5" style={{ color: "#c9fba2" }}>
                <CheckCircle2 className="h-4 w-4" /> Subscribed!
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!email) return;
                  setSent(true);
                  toast.success("Welcome aboard 💛");
                }}
                className="flex flex-col gap-2"
              >
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="Your email"
                  className="h-10 text-xs rounded-full px-4 text-white placeholder:text-white/30 focus:outline-none"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                />
                <button type="submit" className="btn-cta h-9 !py-0 text-xs font-semibold">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="py-5 border-t text-center text-xs"
        style={{ borderColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)" }}
      >
        <div className="container-prose flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>Lightpath Outreach © 2026. All rights reserved. Registered in Nigeria.</p>
          <div className="flex gap-5 justify-center">
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Accessibility</a>
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
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "rgba(255,88,62,0.12)" }}>
              <Heart className="h-8 w-8" style={{ color: "#ff583e" }} />
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold" style={{ color: "#01284f" }}>
              Thank you for your gift 💛
            </h3>
            <p className="mt-2" style={{ color: "#705348" }}>
              Your generosity helps us mentor, feed and uplift Nigerian children. We'll email a receipt shortly.
            </p>
            <button onClick={() => onOpenChange(false)} className="btn-cta mt-6">
              Close
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl" style={{ color: "#01284f" }}>
                Light a path today
              </DialogTitle>
              <DialogDescription style={{ color: "#705348" }}>
                Choose an amount in Naira. Every gift goes directly to children and community programmes.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {DONATION_PRESETS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setAmount(p)}
                    className="rounded-2xl border-2 px-3 py-3 text-sm font-bold transition"
                    style={{
                      borderColor: amount === p ? "#ff583e" : "rgba(1,40,79,0.1)",
                      background: amount === p ? "#ff583e" : "#fff",
                      color: amount === p ? "#fff" : "#01284f",
                    }}
                  >
                    ₦{p.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setAmount("custom")}
                  className="rounded-full border-2 px-4 py-2 text-xs font-semibold transition"
                  style={{
                    borderColor: amount === "custom" ? "#ff583e" : "rgba(1,40,79,0.15)",
                    color: amount === "custom" ? "#ff583e" : "#705348",
                  }}
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
              <p className="text-xs" style={{ color: "#b4bbc2" }}>🔒 Give securely. Demo form — connect Paystack to go live.</p>
              <DialogFooter>
                <button type="submit" className="btn-cta w-full">
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
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "rgba(1,40,79,0.1)" }}>
              <HandHeart className="h-8 w-8" style={{ color: "#01284f" }} />
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold" style={{ color: "#01284f" }}>You're in!</h3>
            <p className="mt-2" style={{ color: "#705348" }}>
              Thank you for stepping forward. Our team will reach out within 3–5 days.
            </p>
            <button onClick={() => onOpenChange(false)} className="btn-cta mt-6">Close</button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl" style={{ color: "#01284f" }}>Sign up to volunteer</DialogTitle>
              <DialogDescription style={{ color: "#705348" }}>Tell us a little about you and how you'd love to help.</DialogDescription>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div><Label>Full name</Label><Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
                <div><Label>Email</Label><Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                <div><Label>Phone</Label><Input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
                <div><Label>Availability</Label><Input placeholder="e.g. Weekends" value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value })} /></div>
              </div>
              <div>
                <Label>Areas of interest</Label>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {VOLUNTEER_AREAS.map((a) => (
                    <label key={a} className="flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:border-orange transition" style={{ borderColor: "rgba(1,40,79,0.1)" }}>
                      <Checkbox checked={areas.includes(a)} onCheckedChange={() => toggleArea(a)} />
                      <span>{a}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div><Label>Short message</Label><Textarea rows={2} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></div>
              <DialogFooter>
                <button type="submit" className="btn-cta w-full">
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
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "rgba(1,40,79,0.1)" }}>
              <Handshake className="h-8 w-8" style={{ color: "#01284f" }} />
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold" style={{ color: "#01284f" }}>Let's light paths together</h3>
            <p className="mt-2" style={{ color: "#705348" }}>We'll be in touch within 3 working days to explore partnership next steps.</p>
            <button onClick={() => onOpenChange(false)} className="btn-cta mt-6">Close</button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl" style={{ color: "#01284f" }}>Partner with Lightpath</DialogTitle>
              <DialogDescription style={{ color: "#705348" }}>Churches, schools, businesses and community groups — let's plan something beautiful together.</DialogDescription>
            </DialogHeader>
            <form
              onSubmit={(e) => { e.preventDefault(); setSuccess(true); toast.success("Partnership enquiry received 🤝"); }}
              className="space-y-4"
            >
              <div><Label>Organisation / Church / School</Label><Input required value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} /></div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div><Label>Contact person</Label><Input required value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} /></div>
                <div><Label>Email</Label><Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                <div><Label>Phone</Label><Input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
              </div>
              <div>
                <Label>How would you like to partner?</Label>
                <Textarea required rows={3} value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} placeholder="e.g. Host a Tea & Coffee Sunday, co-run a feeding outreach…" />
              </div>
              <DialogFooter>
                <button type="submit" className="btn-cta w-full">
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
                <DialogTitle className="font-display text-2xl font-bold" style={{ color: "#01284f" }}>
                  {story.name}, {story.age}
                </DialogTitle>
                <DialogDescription className="font-semibold" style={{ color: "#ff583e" }}>
                  {story.location}
                </DialogDescription>
              </DialogHeader>
              <blockquote
                className="mt-4 pl-4 text-lg italic"
                style={{ borderLeft: "3px solid #ff583e", color: "#705348" }}
              >
                "{story.quote}"
              </blockquote>
              <p className="mt-4 leading-relaxed" style={{ color: "#705348" }}>{story.story}</p>
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
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: "rgba(255,88,62,0.1)" }}
              >
                <p.icon className="h-6 w-6" style={{ color: "#ff583e" }} />
              </div>
              <DialogTitle className="mt-3 font-display text-2xl font-bold" style={{ color: "#01284f" }}>
                {p.title}
              </DialogTitle>
            </DialogHeader>
            <p className="leading-relaxed mt-2" style={{ color: "#705348" }}>{p.long}</p>
            <DialogFooter className="mt-4">
              <a
                href="#involved"
                onClick={() => onOpenChange(false)}
                className="btn-cta w-full"
              >
                Get Involved <ArrowRight className="h-4 w-4" />
              </a>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
