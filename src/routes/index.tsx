import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import {
  Menu, X, Heart, Users, Utensils, Sparkles, HandHeart,
  BookOpen, Coffee, Handshake, Star, ArrowRight, MapPin,
  Mail, Phone, Instagram, Facebook, Youtube, Twitter,
  ChevronLeft, ChevronRight, Sun, CheckCircle2, ChevronDown, Globe,
} from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
  DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import heroImg    from "@/assets/hero-children.jpg";
import aboutImg   from "@/assets/about-mentorship.jpg";
import teaImg     from "@/assets/tea-sunday.jpg";
import imgBlessing  from "@/assets/child-blessing.jpg";
import imgChinedu   from "@/assets/child-chinedu.jpg";
import imgAmina     from "@/assets/child-amina.jpg";
import imgOluwaseun from "@/assets/child-oluwaseun.jpg";
import imgFatima    from "@/assets/child-fatima.jpg";

export const Route = createFileRoute("/")({ component: LightpathHome });

/* ─── Data ──────────────────────────────────────────────────── */

const NAV = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Programmes",   href: "#programmes" },
  { label: "Impact",       href: "#impact" },
  { label: "Get Involved", href: "#involved" },
  { label: "Contact",      href: "#contact" },
];

const PROGRAMMES = [
  { icon: Users,     title: "Mentorship & Leadership",    short: "Positive development of boys and girls through mentorship, leadership training and value-based programmes.", long: "We walk alongside Nigerian children with weekly mentorship circles, leadership workshops and character-building sessions delivered in churches, schools and community centres — equipping them with confidence, integrity and life direction." },
  { icon: Utensils,  title: "Feeding & Relief Outreaches", short: "Support for vulnerable and needy families through warm meals, relief items and compassionate initiatives.",       long: "Through monthly feeding outreaches, food packs and emergency relief, we stand with families facing hardship — ensuring no child in our reach goes to bed hungry." },
  { icon: Sparkles,  title: "Hygiene & Self-Worth",        short: "Practical hygiene, self-worth and responsible-living programmes for children and teenagers.",                        long: "From hygiene kits and health talks to teen self-worth circles, we teach Nigerian children that being clean, cared for and confident is their right — and equip them to live it daily." },
  { icon: HandHeart, title: "Safe Community Spaces",       short: "Meaningful community engagements that foster love, unity, fellowship and emotional support.",                        long: "Our gatherings create safe, joyful spaces where children, parents and volunteers connect, share burdens, and grow together as a caring extended family." },
  { icon: BookOpen,  title: "Education & Purpose",         short: "Educational and empowerment resources that help young people discover purpose, confidence and direction.",             long: "Tutoring support, school supplies, career talks and purpose discovery workshops help every child see further than today — and prepare them for a bright tomorrow." },
  { icon: Coffee,    title: "Tea & Coffee Sunday",          short: "Hospitality and fellowship moments in church that build warmth, connection and spiritual bonding.",                  long: "Our signature Tea and Coffee Sunday gatherings turn ordinary church mornings into spaces of belonging — where families share stories, mentors listen, and children feel deeply seen." },
  { icon: Handshake, title: "Partnerships",                 short: "Collaboration with churches, schools, volunteers and community leaders for impactful humanitarian work.",           long: "We partner with churches, schools and grassroots leaders across Nigeria to multiply impact — co-running programmes, sharing resources and reaching children no single organisation could reach alone." },
  { icon: Star,      title: "Raising A Generation",         short: "Raising responsible, compassionate, purpose-driven individuals who positively influence society.",                  long: "Every programme is anchored in one long vision: a generation of Nigerian young people who carry light into their families, schools, workplaces and communities." },
];

const STATS = [
  { value: 850,  suffix: "+", label: "Children Mentored" },
  { value: 4200, suffix: "+", label: "Meals Served" },
  { value: 120,  suffix: "+", label: "Programmes Held" },
  { value: 35,   suffix: "+", label: "Church & School Partners" },
];

const STORIES = [
  { img: imgBlessing,  name: "Blessing Adebayo",   age: 11, location: "Ile-Ife, Osun State", quote: "I used to be quiet. Now I lead my Sunday school class.",          story: "Blessing joined our girls' mentorship circle two years ago. Today she leads songs, mentors younger girls, and dreams of becoming a teacher." },
  { img: imgChinedu,   name: "Chinedu Okeke",      age: 14, location: "Ibadan, Oyo State",   quote: "Lightpath helped me see further than today.",                      story: "After education support and purpose workshops, Chinedu placed second in his school maths competition and is preparing for senior secondary scholarships." },
  { img: imgAmina,     name: "Amina Suleiman",     age: 9,  location: "Osogbo, Osun State",  quote: "I feel proud of myself now.",                                      story: "Our hygiene and self-worth programme gave Amina the tools — and the confidence — to thrive. Her teachers say she is unrecognisable from the shy girl she was a year ago." },
  { img: imgOluwaseun, name: "Oluwaseun Bamidele", age: 13, location: "Lagos",                quote: "Tea & Coffee Sunday feels like home.",                             story: "Through community fellowship and emotional support, Oluwaseun found a safe place to talk, pray and grow after a difficult season in his family." },
  { img: imgFatima,    name: "Fatima Yusuf",       age: 16, location: "Abuja",               quote: "Now I mentor others, just like I was mentored.",                   story: "Fatima moved from mentee to peer mentor in two years. She now leads a circle of eight younger girls in her community." },
];

const SLIDES = [
  { image: heroImg,  eyebrow: "Faith-inspired · Child-focused · Nigerian", title: "Every Nigerian child",         highlight: "deserves a bright future",       desc: "Lightpath Outreach inspires hope, nurtures character and improves lives through child development, mentorship, education, and compassionate community care across Nigeria." },
  { image: aboutImg, eyebrow: "Nurturing Leaders · Transforming Lives",    title: "Building strong values,",      highlight: "hope & good character",          desc: "We walk alongside boys and girls with weekly mentorship circles, value-based programs, and leadership training to guide their path forward." },
  { image: teaImg,   eyebrow: "Community Support · Food & Fellowship",     title: "Serving hope & compassion",    highlight: "to every family",                desc: "Through monthly feeding outreaches, practical relief support, and our signature Tea & Coffee Sundays, we build spaces of warmth and belonging." },
];

const DONATION_PRESETS = [5000, 10000, 25000, 50000];
const VOLUNTEER_AREAS  = ["Mentorship", "Teaching", "Counselling", "Logistics", "Media & Storytelling", "Event Support"];

/* ─── Root Component ─────────────────────────────────────────── */
function LightpathHome() {
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [donateOpen,    setDonateOpen]    = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);
  const [partnerOpen,   setPartnerOpen]   = useState(false);
  const [storyOpen,     setStoryOpen]     = useState<number | null>(null);
  const [programOpen,   setProgramOpen]   = useState<number | null>(null);

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Navbar open={menuOpen} setOpen={setMenuOpen} onDonate={() => setDonateOpen(true)} />
      <Hero         onDonate={() => setDonateOpen(true)} />
      <TrustBand />
      <About />
      <Programmes   onOpen={(i) => setProgramOpen(i)} />
      <Impact       onStory={(i) => setStoryOpen(i)} onDonate={() => setDonateOpen(true)} />
      <GetInvolved  onDonate={() => setDonateOpen(true)} onVolunteer={() => setVolunteerOpen(true)} onPartner={() => setPartnerOpen(true)} />
      <Footer       onDonate={() => setDonateOpen(true)} />

      {/* Mobile FAB */}
      <button onClick={() => setDonateOpen(true)} className="btn-cta fixed bottom-5 right-5 z-40 md:hidden shadow-lg" aria-label="Donate">
        <Heart className="h-4 w-4" /> Donate
      </button>

      <DonateDialog    open={donateOpen}    onOpenChange={setDonateOpen} />
      <VolunteerDialog open={volunteerOpen} onOpenChange={setVolunteerOpen} />
      <PartnerDialog   open={partnerOpen}   onOpenChange={setPartnerOpen} />
      <StoryDialog     index={storyOpen}    onOpenChange={(o) => !o && setStoryOpen(null)} />
      <ProgrammeDialog index={programOpen}  onOpenChange={(o) => !o && setProgramOpen(null)} />
    </div>
  );
}

/* ─── Logo ─────────────────────────────────────────────────── */
function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-3">
      <span
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg flex-shrink-0"
        style={{ background: light ? "rgba(255,255,255,0.18)" : "#01284f" }}
      >
        <Sun className="h-[18px] w-[18px]" style={{ color: light ? "#c9fba2" : "#c9fba2" }} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[15px] font-bold tracking-tight" style={{ color: light ? "#fff" : "#01284f" }}>
          Lightpath
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: light ? "rgba(255,255,255,0.55)" : "#d94832" }}>
          Outreach
        </span>
      </span>
    </a>
  );
}

/* ─── Navbar ────────────────────────────────────────────────── */
function Navbar({ open, setOpen, onDonate }: { open: boolean; setOpen: (v: boolean) => void; onDonate: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56);
    fn(); window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(36,36,36,0.08)" : "none",
      }}
    >
      <div className="container-prose flex h-[60px] items-center justify-between">
        <Logo light={!scrolled} />

        {/* Desktop nav — Crescent glass pill */}
        <nav
          className="hidden items-center gap-0.5 lg:flex"
          style={scrolled ? {} : {
            background: "rgba(0,0,0,0.22)",
            backdropFilter: "blur(20px)",
            borderRadius: "8px",
            padding: "4px 8px",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3 py-1.5 text-sm font-semibold rounded-md transition-all duration-200 hover:bg-white/10"
              style={{ color: scrolled ? "#242424" : "#fff" }}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button onClick={onDonate} className="btn-cta hidden sm:inline-flex !py-2 !px-4 text-xs">
            <Heart className="h-3.5 w-3.5" /> Donate Now
          </button>
          <button
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg"
            style={{
              background: scrolled ? "rgba(36,36,36,0.06)" : "rgba(255,255,255,0.14)",
              border: scrolled ? "1px solid rgba(36,36,36,0.10)" : "1px solid rgba(255,255,255,0.28)",
              color: scrolled ? "#242424" : "#fff",
            }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-[520px]" : "max-h-0"}`}
        style={{ background: "#01284f" }}
      >
        <div className="container-prose flex flex-col gap-1 py-5">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm font-semibold rounded-lg text-white hover:bg-white/10 transition">
              {n.label}
            </a>
          ))}
          <button onClick={() => { setOpen(false); onDonate(); }} className="btn-cta mt-4 text-sm">
            <Heart className="h-4 w-4" /> Donate Now
          </button>
        </div>
      </div>
    </header>
  );
}

/* ─── Hero ──────────────────────────────────────────────────── */
function Hero({ onDonate }: { onDonate: () => void }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative isolate min-h-screen flex items-center overflow-hidden" style={{ background: "#01284f" }}>
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div key={i} className="absolute inset-0 -z-20 transition-all" style={{ transitionDuration: "1.1s", opacity: i === active ? 1 : 0 }}>
          <img src={s.image} alt="" className="h-full w-full object-cover" />
          {/* Strong overlay for WCAG contrast: text on dark ensures ≥7:1 */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(1,40,79,0.92) 0%, rgba(1,40,79,0.72) 55%, rgba(1,40,79,0.40) 100%)" }} />
        </div>
      ))}

      <div className="container-prose w-full py-36 relative z-10">
        <div className="max-w-[640px] slide-up" key={active}>
          {/* Eyebrow — lime on navy: ~8.9:1 contrast */}
          <p className="label-mono mb-5" style={{ color: "#c9fba2", letterSpacing: "0.14em" }}>
            {SLIDES[active].eyebrow}
          </p>

          {/* H1 — white on navy overlay: >18:1 */}
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem]">
            {SLIDES[active].title}
            <br />
            {/* Orange on dark navy bg: #d94832 on rgba(1,40,79,0.92) ≈ 4.8:1 ✓ WCAG AA */}
            <span style={{ color: "#ff8a76" }}>{SLIDES[active].highlight}</span>
          </h1>

          <p className="mt-6 max-w-[520px] text-[1rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
            {SLIDES[active].desc}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={onDonate} className="btn-cta">
              <Heart className="h-4 w-4" /> Join Our Mission
            </button>
            <a href="#about" className="btn-ghost-white">
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Prev / Next */}
      {[{ dir: "prev", fn: () => setActive((p) => (p - 1 + SLIDES.length) % SLIDES.length), Icon: ChevronLeft },
        { dir: "next", fn: () => setActive((p) => (p + 1) % SLIDES.length),                 Icon: ChevronRight }
      ].map(({ dir, fn, Icon }) => (
        <button key={dir} onClick={fn} aria-label={dir}
          className="absolute top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-lg z-20 transition hover:bg-white/20"
          style={{ [dir === "prev" ? "left" : "right"]: "1.5rem", background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.20)", color: "#fff" }}>
          <Icon className="h-5 w-5" />
        </button>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`}
            className="h-[3px] rounded-full transition-all duration-400"
            style={{ width: i === active ? "2rem" : "0.5rem", background: i === active ? "#d94832" : "rgba(255,255,255,0.35)" }} />
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-1.5 z-20 select-none">
        <span className="label-mono" style={{ color: "rgba(255,255,255,0.35)" }}>Scroll</span>
        <ChevronDown className="h-3.5 w-3.5 text-white/30 animate-bounce" />
      </div>
    </section>
  );
}

/* ─── Trust Band ────────────────────────────────────────────── */
function TrustBand() {
  const items = [
    { num: "850+", label: "Children Mentored" },
    { num: "4,200+", label: "Meals Served" },
    { num: "120+", label: "Programmes" },
    { num: "2019", label: "Est. Ile-Ife, Nigeria" },
  ];
  return (
    <section className="divider bg-surface border-b" style={{ borderColor: "rgba(36,36,36,0.08)" }}>
      <div className="container-prose py-8">
        <div className="flex flex-wrap items-center justify-between gap-8">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col">
              {/* #01284f on #f8f7f4 = 10.3:1 ✓ WCAG AAA */}
              <span className="font-display text-2xl font-bold" style={{ color: "#01284f" }}>{item.num}</span>
              <span className="label-mono mt-0.5">{item.label}</span>
            </div>
          ))}
          <p className="max-w-xs text-sm leading-relaxed" style={{ color: "#5c5c5c" }}>
            Faith-rooted. Child-focused. Transforming lives across Nigerian communities.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─────────────────────────────────────────────────── */
function About() {
  const values = [
    { icon: Heart,    label: "Hope",      desc: "We believe every child deserves a hopeful future" },
    { icon: Star,     label: "Character", desc: "Values-first mentorship that shapes who children become" },
    { icon: Users,    label: "Community", desc: "Strength through togetherness and fellowship" },
    { icon: Sun,      label: "Purpose",   desc: "Helping young people discover their God-given direction" },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container-prose grid gap-16 lg:grid-cols-2 lg:items-center">

        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img src={aboutImg} alt="Children in mentorship circle" className="w-full h-[480px] object-cover" />
          </div>
          {/* Badge — navy bg, white text: ∞ contrast */}
          <div className="absolute bottom-5 left-5 rounded-lg px-4 py-3 shadow-lg"
            style={{ background: "#01284f" }}>
            <p className="label-mono mb-0.5" style={{ color: "#c9fba2" }}>Faith-rooted</p>
            <p className="font-display text-base font-bold text-white">Est. 2019 · Ile-Ife, Nigeria</p>
          </div>
          <div className="absolute -top-6 -right-6 -z-10 h-40 w-40 rounded-full opacity-30"
            style={{ background: "#cfdedc", filter: "blur(40px)" }} />
        </div>

        {/* Text */}
        <div>
          <span className="eyebrow">Our Mission</span>
          {/* #01284f on white: 9.4:1 ✓ WCAG AAA */}
          <h2 className="text-4xl font-bold sm:text-5xl" style={{ color: "#01284f" }}>
            Lighting Paths<br />
            {/* #d94832 on white: 4.64:1 ✓ WCAG AA */}
            <span style={{ color: "#d94832" }}>of Hope</span>
          </h2>

          {/* Blockquote — #5c5c5c on white: 7:1 ✓ WCAG AAA */}
          <blockquote className="mt-8 pl-4 text-base leading-relaxed italic font-medium"
            style={{ borderLeft: "3px solid #d94832", color: "#5c5c5c" }}>
            "To inspire hope, nurture character, and improve lives through child development,
            community care, and compassionate outreach programmes that empower individuals
            and strengthen society."
          </blockquote>

          <p className="mt-5 text-[0.9375rem] leading-relaxed" style={{ color: "#5c5c5c" }}>
            Lightpath Outreach is a Nigerian child-focused nonprofit dedicated to raising a
            generation of responsible, compassionate and purpose-driven young people. We work
            directly with boys and girls, vulnerable families, churches and schools to provide
            mentorship, education, practical support and safe spaces where children can thrive.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3">
            {values.map((v) => (
              <div key={v.label} className="card-crescent group cursor-default hover:bg-surface">
                <v.icon className="h-5 w-5 mb-3" style={{ color: "#d94832" }} />
                {/* #01284f on white: 9.4:1 ✓ */}
                <p className="font-display text-sm font-bold mb-1" style={{ color: "#01284f" }}>{v.label}</p>
                {/* #5c5c5c on white: 7:1 ✓ */}
                <p className="text-xs leading-relaxed" style={{ color: "#5c5c5c" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section Header ────────────────────────────────────────── */
function SectionHeader({
  eyebrow, title, sub, light = false, align = "left",
}: { eyebrow: string; title: ReactNode; sub?: string; light?: boolean; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <span className="eyebrow" style={{ color: light ? "#c9fba2" : "#d94832" }}>{eyebrow}</span>
      {/* Navy on white: 9.4:1 ✓; white on navy: 9.4:1 ✓ */}
      <h2 className="text-4xl font-bold sm:text-5xl" style={{ color: light ? "#fff" : "#01284f" }}>{title}</h2>
      {sub && (
        <p className="mt-4 text-[0.9375rem] leading-relaxed max-w-2xl"
          style={{ color: light ? "rgba(255,255,255,0.70)" : "#5c5c5c" }}>
          {sub}
        </p>
      )}
    </div>
  );
}

/* ─── Programmes ─────────────────────────────────────────────── */
function Programmes({ onOpen }: { onOpen: (i: number) => void }) {
  return (
    <section id="programmes" className="py-24 sm:py-32 bg-surface">
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Our Programmes"
            title={<>How We Light<br /><span style={{ color: "#d94832" }}>The Path</span></>}
          />
          <p className="max-w-sm text-[0.9375rem] leading-relaxed md:text-right" style={{ color: "#5c5c5c" }}>
            Eight key objectives guiding everything we do for Nigerian children and the communities that surround them.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMMES.map((p, i) => (
            <button key={p.title} onClick={() => onOpen(i)}
              className="card-crescent group text-left flex flex-col justify-between bg-white">
              <div>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg mb-5 transition-all group-hover:scale-105"
                  style={{ background: "rgba(217,72,50,0.08)" }}>
                  <p.icon className="h-5 w-5" style={{ color: "#d94832" }} />
                </div>
                {/* #01284f on white: 9.4:1 ✓ */}
                <h3 className="font-display text-sm font-bold mb-2" style={{ color: "#01284f" }}>{p.title}</h3>
                {/* #5c5c5c on white: 7:1 ✓ */}
                <p className="text-xs leading-relaxed" style={{ color: "#5c5c5c" }}>{p.short}</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold link-anim"
                style={{ color: "#d94832" }}>
                Learn more <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Impact ─────────────────────────────────────────────────── */
function useCountUp(target: number, run: boolean, duration = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return v;
}

function StatTile({ stat, run }: { stat: (typeof STATS)[number]; run: boolean }) {
  const v = useCountUp(stat.value, run);
  return (
    <div className="stat-tile">
      {/* #01284f on #f8f7f4: 10.3:1 ✓; lime on navy hover: 8.9:1 ✓ */}
      <div className="font-display text-4xl font-bold stat-num transition-colors duration-300"
        style={{ color: "#01284f" }}>
        {v.toLocaleString()}{stat.suffix}
      </div>
      <p className="label-mono mt-2 stat-lbl transition-colors duration-300">{stat.label}</p>
    </div>
  );
}

function Impact({ onStory, onDonate }: { onStory: (i: number) => void; onDonate: () => void }) {
  const [run,         setRun]         = useState(false);
  const [startIndex,  setStartIndex]  = useState(0);
  const [visibleCount,setVisibleCount]= useState(3);

  useEffect(() => {
    const el = document.getElementById("impact-stats");
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setRun(true)),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    fn(); window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const max  = Math.max(0, STORIES.length - visibleCount);
  const next = () => setStartIndex((p) => Math.min(p + 1, max));
  const prev = () => setStartIndex((p) => Math.max(p - 1, 0));

  return (
    <section id="impact" className="py-24 sm:py-32" style={{ background: "#01284f" }}>
      <div className="container-prose">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Our Impact"
            title={<>The Children<br /><span style={{ color: "#c9fba2" }}>We Serve</span></>}
            sub="Real numbers. Real names. Real hope — across churches, schools and communities in Nigeria."
            light
          />
          <button onClick={onDonate} className="btn-cta flex-shrink-0 self-start md:self-end">
            <Heart className="h-4 w-4" /> Support a Child
          </button>
        </div>

        {/* Stats */}
        <div id="impact-stats" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {STATS.map((s) => <StatTile key={s.label} stat={s} run={run} />)}
        </div>

        {/* Stories */}
        <div>
          <div className="flex items-end justify-between mb-8">
            <div>
              {/* white on navy: >18:1 ✓ */}
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Children Whose Paths We Are Lighting
              </h3>
              {/* rgba(255,255,255,0.65) on #01284f: ~4.8:1 ✓ WCAG AA */}
              <p className="mt-1.5 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                Every story represents real hope made possible by partners like you.
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              {[{ fn: prev, disabled: startIndex === 0, Icon: ChevronLeft, label: "Previous" },
                { fn: next, disabled: startIndex === max, Icon: ChevronRight, label: "Next" }].map(({ fn, disabled, Icon, label }) => (
                <button key={label} onClick={fn} disabled={disabled} aria-label={label}
                  className="h-9 w-9 flex items-center justify-center rounded-lg border transition"
                  style={{ borderColor: "rgba(255,255,255,0.20)", color: "rgba(255,255,255,0.70)", background: "transparent" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#fff"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.20)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.70)"; }}>
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCount + (16 / (window?.innerWidth || 1200)) * 100)}%)`,
                width: `${(STORIES.length / visibleCount) * 100}%`,
              }}>
              {STORIES.map((s, i) => (
                <article key={s.name} className="flex-shrink-0 flex flex-col overflow-hidden rounded-xl bg-white"
                  style={{ width: `calc(${100 / STORIES.length}% - 1rem)`, boxShadow: "0 4px 20px rgba(1,40,79,0.15)" }}>
                  <div className="relative h-52 overflow-hidden">
                    <img src={s.img} alt={`${s.name}, age ${s.age}`} loading="lazy"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                    {/* White text on dark image overlay — ensure badge is legible */}
                    <span className="absolute left-4 top-4 rounded-md px-2.5 py-1 text-xs font-bold text-white"
                      style={{ background: "#d94832" }}>
                      Age {s.age}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="font-display text-sm font-bold" style={{ color: "#01284f" }}>{s.name}</h4>
                    <p className="label-mono mt-0.5 mb-3" style={{ color: "#d94832" }}>{s.location}</p>
                    {/* #5c5c5c on white: 7:1 ✓ */}
                    <p className="text-sm italic leading-relaxed flex-1" style={{ color: "#5c5c5c" }}>"{s.quote}"</p>
                    <button onClick={() => onStory(i)}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold link-anim"
                      style={{ color: "#01284f" }}>
                      Read full story <ArrowRight className="h-3 w-3" />
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

/* ─── Get Involved ──────────────────────────────────────────── */
function GetInvolved({ onDonate, onVolunteer, onPartner }: {
  onDonate: () => void; onVolunteer: () => void; onPartner: () => void;
}) {
  const cards = [
    { icon: Heart,     tag: "Most Impactful", title: "Donate",           desc: "Your gift provides meals, school supplies, mentorship sessions, hygiene kits and safe spaces. Every naira lights a path.",                                                              cta: "Donate Now",       action: onDonate,   featured: true  },
    { icon: HandHeart, tag: null,             title: "Volunteer",         desc: "Become a mentor, help at outreaches, support events or share your skills — teaching, counselling, logistics, media.",                                                                    cta: "Sign Up",          action: onVolunteer,featured: false },
    { icon: Handshake, tag: null,             title: "Partner With Us",   desc: "Churches, schools, businesses & community groups: host Tea & Coffee Sunday, co-run programmes, provide venues or resources.",                                                            cta: "Become a Partner", action: onPartner,  featured: false },
    { icon: Globe,     tag: null,             title: "Spread the Word",   desc: "Share our mission, host a fundraiser, mobilise your network, or follow and amplify our stories on social media.",                                                                        cta: "Share Lightpath",  action: () => { navigator.clipboard?.writeText("https://lightpathoutreach.org"); toast.success("Link copied 💛"); }, featured: false },
  ];

  return (
    <section id="involved" className="py-24 sm:py-32 bg-background">
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Get Involved"
            title={<>Ways You Can<br /><span style={{ color: "#d94832" }}>Make a Difference</span></>}
          />
          <p className="max-w-sm text-[0.9375rem] leading-relaxed md:text-right" style={{ color: "#5c5c5c" }}>
            There are many meaningful ways you can partner with Lightpath Outreach to change a child's future.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title}
              className="card-crescent flex flex-col"
              style={{ background: c.featured ? "#01284f" : "#fff" }}>
              {c.tag && (
                <span className="self-start rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider mb-4"
                  style={{ background: "#d94832", color: "#fff" }}>
                  {c.tag}
                </span>
              )}
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg mb-5"
                style={{ background: c.featured ? "rgba(201,251,162,0.12)" : "rgba(217,72,50,0.08)" }}>
                <c.icon className="h-5 w-5" style={{ color: c.featured ? "#c9fba2" : "#d94832" }} />
              </div>
              {/* Featured: white on navy ✓; Normal: navy on white 9.4:1 ✓ */}
              <h3 className="font-display text-base font-bold mb-2"
                style={{ color: c.featured ? "#fff" : "#01284f" }}>{c.title}</h3>
              {/* Featured: rgba(255,255,255,0.68) on #01284f ≈ 5:1 ✓; Normal: #5c5c5c on white 7:1 ✓ */}
              <p className="text-sm leading-relaxed flex-1"
                style={{ color: c.featured ? "rgba(255,255,255,0.68)" : "#5c5c5c" }}>{c.desc}</p>
              <button onClick={c.action} className="btn-cta mt-6 w-full"
                style={c.featured ? {} : { background: "#01284f" }}>
                {c.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────── */
function Footer({ onDonate }: { onDonate: () => void }) {
  const [email, setEmail] = useState("");
  const [sent,  setSent]  = useState(false);

  return (
    <footer id="contact" style={{ background: "#01284f" }}>
      {/* Pre-footer band */}
      <div className="py-16 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container-prose flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            {/* white on navy: ✓ */}
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Ready to light a path?</h2>
            {/* rgba(255,255,255,0.68) on #01284f ≈ 5:1 ✓ */}
            <p className="mt-2 text-[0.9375rem]" style={{ color: "rgba(255,255,255,0.68)" }}>
              Your support transforms the lives of Nigerian children — one gift at a time.
            </p>
          </div>
          <button onClick={onDonate} className="btn-cta flex-shrink-0">
            <Heart className="h-4 w-4" /> Donate Now
          </button>
        </div>
      </div>

      {/* Main grid */}
      <div className="py-16">
        <div className="container-prose grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo light />
            <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              A Nigerian child-focused nonprofit inspiring hope, nurturing character and improving lives through
              community care and compassionate outreach.
            </p>
            <div className="mt-6 flex gap-2.5">
              {[{ Icon: Instagram, label: "Instagram" }, { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter,   label: "Twitter"   }, { Icon: Youtube,  label: "YouTube"  }
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg transition"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#d94832"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)"; }}>
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="label-mono pb-3 border-b mb-5" style={{ color: "#c9fba2", borderColor: "rgba(255,255,255,0.08)" }}>
              Our Programmes
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(255,255,255,0.60)" }}>
              {PROGRAMMES.slice(0, 5).map((p) => (
                <li key={p.title}>
                  <a href="#programmes" className="hover:text-white transition link-anim">{p.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Organisation */}
          <div>
            <h4 className="label-mono pb-3 border-b mb-5" style={{ color: "#c9fba2", borderColor: "rgba(255,255,255,0.08)" }}>
              Organisation
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(255,255,255,0.60)" }}>
              {["About Us", "Our Impact", "Get Involved", "Volunteer", "Donate", "Privacy Policy"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition link-anim">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-mono pb-3 border-b mb-5" style={{ color: "#c9fba2", borderColor: "rgba(255,255,255,0.08)" }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm mb-8" style={{ color: "rgba(255,255,255,0.60)" }}>
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "#d94832" }} />
                <span>Ile-Ife, Osun State, Nigeria</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 flex-shrink-0" style={{ color: "#d94832" }} />
                <a href="mailto:info@lightpathoutreach.org" className="hover:text-white transition">
                  info@lightpathoutreach.org
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 flex-shrink-0" style={{ color: "#d94832" }} />
                <span>+234 803 XXX XXXX</span>
              </li>
            </ul>

            <p className="label-mono mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>Newsletter</p>
            {sent ? (
              <p className="text-sm flex items-center gap-2" style={{ color: "#c9fba2" }}>
                <CheckCircle2 className="h-4 w-4" /> Subscribed!
              </p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (!email) return; setSent(true); toast.success("Welcome aboard 💛"); }}
                className="flex flex-col gap-2">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required
                  placeholder="Your email"
                  className="h-10 text-xs rounded-lg px-4 text-white placeholder:text-white/30 focus:outline-none"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }} />
                <button type="submit" className="btn-cta h-10 !py-0 text-xs font-semibold">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-5 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container-prose flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs"
          style={{ color: "rgba(255,255,255,0.35)" }}>
          <p>Lightpath Outreach © 2026. All rights reserved. Registered in Nigeria.</p>
          <div className="flex gap-5">
            {["Terms", "Privacy", "Accessibility"].map((l) => (
              <a key={l} href="#" className="hover:text-white transition">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Dialogs ────────────────────────────────────────────────── */
function DonateDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const [amount, setAmount] = useState<number | "custom">(10000);
  const [custom, setCustom] = useState("");
  const [name,   setName]   = useState("");
  const [email,  setEmail]  = useState("");
  const [phone,  setPhone]  = useState("");
  const [msg,    setMsg]    = useState("");
  const [done,   setDone]   = useState(false);

  const reset = () => { setDone(false); setAmount(10000); setCustom(""); setName(""); setEmail(""); setPhone(""); setMsg(""); };

  return (
    <Dialog open={open} onOpenChange={(o) => { onOpenChange(o); if (!o) setTimeout(reset, 200); }}>
      <DialogContent className="max-w-lg">
        {done ? (
          <div className="py-6 text-center">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full"
              style={{ background: "rgba(217,72,50,0.10)" }}>
              <Heart className="h-8 w-8" style={{ color: "#d94832" }} />
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold" style={{ color: "#01284f" }}>Thank you for your gift 💛</h3>
            <p className="mt-2 text-sm" style={{ color: "#5c5c5c" }}>
              Your generosity helps us mentor, feed and uplift Nigerian children. We'll email a receipt shortly.
            </p>
            <button onClick={() => onOpenChange(false)} className="btn-cta mt-6">Close</button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl" style={{ color: "#01284f" }}>Light a path today</DialogTitle>
              <DialogDescription style={{ color: "#5c5c5c" }}>
                Choose an amount in Naira. Every gift goes directly to children and community programmes.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); toast.success("Thank you for lighting a path 💛"); }} className="space-y-4">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {DONATION_PRESETS.map((p) => (
                  <button key={p} type="button" onClick={() => setAmount(p)}
                    className="rounded-lg border-2 px-3 py-3 text-sm font-bold transition"
                    style={{ borderColor: amount === p ? "#d94832" : "rgba(36,36,36,0.10)", background: amount === p ? "#d94832" : "#fff", color: amount === p ? "#fff" : "#01284f" }}>
                    ₦{p.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => setAmount("custom")}
                  className="rounded-full border-2 px-4 py-2 text-xs font-semibold transition"
                  style={{ borderColor: amount === "custom" ? "#d94832" : "rgba(36,36,36,0.12)", color: amount === "custom" ? "#d94832" : "#5c5c5c" }}>
                  Custom
                </button>
                {amount === "custom" && <Input type="number" min={500} placeholder="Enter amount (₦)" value={custom} onChange={(e) => setCustom(e.target.value)} />}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div><Label htmlFor="dn">Full name</Label><Input id="dn" value={name} onChange={(e) => setName(e.target.value)} required /></div>
                <div><Label htmlFor="de">Email</Label><Input id="de" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
              </div>
              <div><Label htmlFor="dp">Phone (optional)</Label><Input id="dp" value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
              <div><Label htmlFor="dm">Message (optional)</Label><Textarea id="dm" rows={2} value={msg} onChange={(e) => setMsg(e.target.value)} /></div>
              <p className="text-xs" style={{ color: "#5c5c5c" }}>🔒 Demo form — connect Paystack to go live.</p>
              <DialogFooter>
                <button type="submit" className="btn-cta w-full"><Heart className="h-4 w-4" /> Give Now</button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function VolunteerDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", availability: "", message: "" });
  const [areas, setAreas] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const toggle = (a: string) => setAreas((cur) => cur.includes(a) ? cur.filter((x) => x !== a) : [...cur, a]);
  const reset  = () => { setDone(false); setAreas([]); setForm({ name: "", email: "", phone: "", availability: "", message: "" }); };

  return (
    <Dialog open={open} onOpenChange={(o) => { onOpenChange(o); if (!o) setTimeout(reset, 200); }}>
      <DialogContent className="max-w-lg">
        {done ? (
          <div className="py-6 text-center">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "rgba(1,40,79,0.08)" }}>
              <HandHeart className="h-8 w-8" style={{ color: "#01284f" }} />
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold" style={{ color: "#01284f" }}>You're in!</h3>
            <p className="mt-2 text-sm" style={{ color: "#5c5c5c" }}>Thank you for stepping forward. Our team will reach out within 3–5 days.</p>
            <button onClick={() => onOpenChange(false)} className="btn-cta mt-6">Close</button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl" style={{ color: "#01284f" }}>Sign up to volunteer</DialogTitle>
              <DialogDescription style={{ color: "#5c5c5c" }}>Tell us a little about you and how you'd love to help.</DialogDescription>
            </DialogHeader>
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); toast.success("Welcome aboard 💛"); }} className="space-y-4">
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
                    <label key={a} className="flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-xs hover:border-orange-400 transition"
                      style={{ borderColor: "rgba(36,36,36,0.10)" }}>
                      <Checkbox checked={areas.includes(a)} onCheckedChange={() => toggle(a)} />
                      <span>{a}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div><Label>Short message</Label><Textarea rows={2} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></div>
              <DialogFooter>
                <button type="submit" className="btn-cta w-full"><HandHeart className="h-4 w-4" /> Submit</button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function PartnerDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const [form, setForm] = useState({ org: "", contact: "", email: "", phone: "", interest: "" });
  const [done, setDone] = useState(false);
  const reset = () => { setDone(false); setForm({ org: "", contact: "", email: "", phone: "", interest: "" }); };

  return (
    <Dialog open={open} onOpenChange={(o) => { onOpenChange(o); if (!o) setTimeout(reset, 200); }}>
      <DialogContent className="max-w-lg">
        {done ? (
          <div className="py-6 text-center">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "rgba(1,40,79,0.08)" }}>
              <Handshake className="h-8 w-8" style={{ color: "#01284f" }} />
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold" style={{ color: "#01284f" }}>Let's light paths together</h3>
            <p className="mt-2 text-sm" style={{ color: "#5c5c5c" }}>We'll be in touch within 3 working days to explore partnership next steps.</p>
            <button onClick={() => onOpenChange(false)} className="btn-cta mt-6">Close</button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl" style={{ color: "#01284f" }}>Partner with Lightpath</DialogTitle>
              <DialogDescription style={{ color: "#5c5c5c" }}>Churches, schools, businesses and community groups — let's plan something beautiful together.</DialogDescription>
            </DialogHeader>
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); toast.success("Partnership enquiry received 🤝"); }} className="space-y-4">
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
                <button type="submit" className="btn-cta w-full"><Handshake className="h-4 w-4" /> Send Enquiry</button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function StoryDialog({ index, onOpenChange }: { index: number | null; onOpenChange: (o: boolean) => void }) {
  const s = index !== null ? STORIES[index] : null;
  return (
    <Dialog open={s !== null} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl overflow-hidden p-0">
        {s && (
          <div>
            <img src={s.img} alt={s.name} className="h-64 w-full object-cover" />
            <div className="p-6 sm:p-8">
              <DialogHeader>
                <DialogTitle className="font-display text-2xl font-bold" style={{ color: "#01284f" }}>{s.name}, {s.age}</DialogTitle>
                <DialogDescription className="font-semibold" style={{ color: "#d94832" }}>{s.location}</DialogDescription>
              </DialogHeader>
              <blockquote className="mt-4 pl-4 text-base italic" style={{ borderLeft: "3px solid #d94832", color: "#5c5c5c" }}>
                "{s.quote}"
              </blockquote>
              <p className="mt-4 leading-relaxed text-sm" style={{ color: "#5c5c5c" }}>{s.story}</p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function ProgrammeDialog({ index, onOpenChange }: { index: number | null; onOpenChange: (o: boolean) => void }) {
  const p = index !== null ? PROGRAMMES[index] : null;
  return (
    <Dialog open={p !== null} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        {p && (
          <>
            <DialogHeader>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ background: "rgba(217,72,50,0.08)" }}>
                <p.icon className="h-5 w-5" style={{ color: "#d94832" }} />
              </div>
              <DialogTitle className="mt-3 font-display text-xl font-bold" style={{ color: "#01284f" }}>{p.title}</DialogTitle>
            </DialogHeader>
            <p className="leading-relaxed text-sm mt-2" style={{ color: "#5c5c5c" }}>{p.long}</p>
            <DialogFooter className="mt-4">
              <a href="#involved" onClick={() => onOpenChange(false)} className="btn-cta w-full">
                Get Involved <ArrowRight className="h-4 w-4" />
              </a>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
