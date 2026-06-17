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
  Calendar,
  Sun,
  Quote,
  CheckCircle2,
} from "@/components/icons";

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
  head: () => ({
    meta: [
      { title: "Lightpath Outreach — Hope, Character & Purpose for Every Nigerian Child" },
      {
        name: "description",
        content:
          "Lightpath Outreach is a Nigerian child-focused nonprofit nurturing hope, character and purpose through mentorship, education, feeding outreaches and community care.",
      },
      { property: "og:title", content: "Lightpath Outreach — Lighting the Path for Every Nigerian Child" },
      {
        property: "og:description",
        content:
          "Mentorship, feeding outreaches, hygiene support and fellowship for Nigerian children. Join us — donate, volunteer or partner.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
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

const EVENTS = [
  {
    title: "Back-to-School Feeding Outreach",
    date: "Sat, 14 Sep 2026",
    location: "Ile-Ife, Osun State",
    desc: "Hot meals, school supplies and prayers as children return to a new term.",
  },
  {
    title: "Tea & Coffee Sunday Family Gathering",
    date: "Sun, 22 Sep 2026",
    location: "Ibadan, Oyo State",
    desc: "An open-table morning of fellowship for families, children and mentors.",
  },
  {
    title: "Girls' Leadership Weekend",
    date: "Fri–Sat, 4–5 Oct 2026",
    location: "Osogbo, Osun State",
    desc: "Two days of leadership, self-worth and purpose training for teen girls.",
  },
  {
    title: "Christmas Hope Outreach",
    date: "Sat, 14 Dec 2026",
    location: "Lagos & Abuja",
    desc: "Gift bags, hot meals and joyful celebrations across partner communities.",
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
      <About />
      <Programmes onOpen={(i) => setProgramOpen(i)} />
      <Impact onStory={(i) => setStoryOpen(i)} />
      <GetInvolved
        onDonate={() => setDonateOpen(true)}
        onVolunteer={() => setVolunteerOpen(true)}
        onPartner={() => setPartnerOpen(true)}
      />
      <Events />
      <Newsletter />
      <Footer />

      {/* Floating mobile donate */}
      <button
        onClick={() => setDonateOpen(true)}
        className="btn-hero fixed bottom-5 right-5 z-40 md:hidden"
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
            light ? "text-white/80" : "text-forest"
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur shadow-soft"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-prose flex h-18 items-center justify-between py-3">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-semibold text-navy/80 transition hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onDonate} className="btn-hero hidden md:inline-flex !py-2.5 !px-5 text-sm">
            <Heart className="h-4 w-4" /> Donate Now
          </button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[480px]" : "max-h-0"
        }`}
      >
        <div className="container-prose flex flex-col gap-1 border-t border-border bg-background py-4">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-semibold text-navy hover:bg-cream"
            >
              {n.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onDonate();
            }}
            className="btn-hero mt-2"
          >
            <Heart className="h-4 w-4" /> Donate Now
          </button>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------- Hero ------------------------------- */

function Hero({ onDonate: _onDonate }: { onDonate: () => void }) {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24">
      <img
        src={heroImg}
        alt="Joyful group of Nigerian children gathered at a church compound during a Lightpath Outreach fellowship"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/55 via-navy/35 to-navy/85" />

      <div className="container-prose w-full py-20 text-white">
        <div className="max-w-3xl fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Faith-inspired • Child-focused • Nigerian
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Every Nigerian Child Deserves a{" "}
            <span className="text-gold">Bright Future</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/90 sm:text-lg">
            Lightpath Outreach inspires hope, nurtures character and improves
            lives through child development, mentorship, education, leadership
            training, feeding outreaches, hygiene support and compassionate
            community programmes across Nigeria.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#involved" className="btn-hero">
              <Heart className="h-4 w-4" /> Join Our Mission
            </a>
            <a href="#about" className="btn-outline-light">
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-sm text-white/80">
            Serving communities in Osun State and beyond • Partnering with
            churches, schools &amp; families
          </p>
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
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container-prose grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Sunday school mentorship circle with neatly dressed Nigerian children and kind adult mentors"
            width={1280}
            height={1024}
            loading="lazy"
            className="relative z-10 w-full rounded-3xl object-cover shadow-soft"
          />
          <div className="absolute -bottom-6 -left-6 hidden h-40 w-40 rounded-3xl bg-gold/30 blur-2xl sm:block" />
          <div className="absolute -top-6 -right-6 hidden h-32 w-32 rounded-3xl bg-primary/25 blur-2xl sm:block" />
          <div className="absolute -bottom-8 right-6 z-20 hidden rounded-2xl bg-background px-5 py-4 shadow-soft sm:flex sm:items-center sm:gap-3">
            <div className="rounded-full bg-forest/10 p-2 text-forest">
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
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Lighting Paths of <span className="text-primary">Hope</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
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
                className="flex flex-col items-center rounded-2xl bg-cream px-3 py-5 text-center"
              >
                <v.icon className="h-6 w-6 text-primary" />
                <span className="mt-2 text-sm font-bold text-navy">
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
      <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
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
    <section id="programmes" className="gradient-warm py-24 sm:py-28">
      <div className="container-prose">
        <SectionHeader
          eyebrow="Our Programmes"
          title={
            <>
              How We <span className="text-primary">Light the Path</span>
            </>
          }
          sub="Eight key objectives guiding everything we do for Nigerian children and the communities that surround them."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMMES.map((p, i) => (
            <button
              key={p.title}
              onClick={() => onOpen(i)}
              className="card-soft group text-left"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.short}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm italic text-muted-foreground">
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

function StatCard({ stat, run }: { stat: (typeof STATS)[number]; run: boolean }) {
  const v = useCountUp(stat.value, run);
  return (
    <div className="card-soft text-center">
      <div className="font-display text-4xl font-extrabold text-primary sm:text-5xl">
        {v.toLocaleString()}
        {stat.suffix}
      </div>
      <p className="mt-2 text-sm font-semibold text-navy">{stat.label}</p>
    </div>
  );
}

function Impact({ onStory }: { onStory: (i: number) => void }) {
  const [run, setRun] = useState(false);
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

  return (
    <section id="impact" className="py-24 sm:py-28">
      <div className="container-prose">
        <SectionHeader
          eyebrow="Our Impact"
          title={
            <>
              The Children <span className="text-primary">We Serve</span>
            </>
          }
          sub="Real numbers. Real names. Real hope — across churches, schools and communities in Nigeria."
        />

        <div id="impact-stats" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <StatCard key={s.label} stat={s} run={run} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-center font-display text-2xl font-bold text-navy sm:text-3xl">
            Children Whose Paths We Are Lighting
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Every story represents real hope and transformation made possible by
            partners like you.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STORIES.map((s, i) => (
              <article key={s.name} className="card-soft !p-0 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={s.img}
                    alt={`${s.name}, ${s.age}, ${s.location}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
                    Age {s.age}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="font-display text-lg font-bold text-navy">
                    {s.name}
                  </h4>
                  <p className="text-xs font-semibold uppercase tracking-wider text-forest">
                    {s.location}
                  </p>
                  <div className="mt-3 flex gap-2 text-sm italic text-foreground/80">
                    <Quote className="h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{s.quote}</span>
                  </div>
                  <button
                    onClick={() => onStory(i)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Read full story <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
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
    <section id="involved" className="gradient-warm py-24 sm:py-28">
      <div className="container-prose">
        <SectionHeader
          eyebrow="Get Involved"
          title={
            <>
              They Care. <span className="text-primary">Do You?</span>
            </>
          }
          sub="There are many meaningful ways you can partner with Lightpath Outreach to change a child's future."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="card-soft flex flex-col">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/10 text-forest">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {c.desc}
              </p>
              <button
                onClick={c.action}
                className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary"
              >
                {c.cta} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Tea & Coffee Sunday banner */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-navy shadow-soft">
          <div className="grid items-center lg:grid-cols-2">
            <img
              src={teaImg}
              alt="Families and children enjoying a Tea and Coffee Sunday fellowship in a Nigerian church"
              loading="lazy"
              className="h-72 w-full object-cover lg:h-full"
            />
            <div className="p-8 sm:p-12 text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <Coffee className="h-3.5 w-3.5" /> Tea & Coffee Sunday
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl text-white">
                Experience the warmth of fellowship.
              </h3>
              <p className="mt-4 text-white/85">
                Our Tea and Coffee Sunday gatherings create safe spaces of love,
                encouragement and spiritual connection for families and children
                across Nigeria.
              </p>
              <button onClick={onPartner} className="btn-hero mt-6">
                Host a Tea & Coffee Sunday <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Events ----------------------------- */

function Events() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-prose">
        <SectionHeader
          eyebrow="What's Next"
          title={
            <>
              Upcoming <span className="text-primary">Outreaches & Events</span>
            </>
          }
          sub="Mark your calendar and join us in the next season of light."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EVENTS.map((e) => (
            <article
              key={e.title}
              className="card-soft flex h-full flex-col bg-cream"
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Calendar className="h-3.5 w-3.5" /> {e.date}
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy">{e.title}</h3>
              <p className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-forest">
                <MapPin className="h-3.5 w-3.5" /> {e.location}
              </p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {e.desc}
              </p>
              <button
                onClick={() => toast.success(`Interest noted for ${e.title} — we'll be in touch.`)}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                Register Interest <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Newsletter ---------------------------- */

function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="py-20">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl rounded-3xl bg-navy p-10 text-center text-white shadow-soft sm:p-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <Sun className="h-3.5 w-3.5" /> Stay in the Light
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Join our community
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Receive monthly impact stories, prayer points, volunteer
            opportunities and programme updates.
          </p>

          {sent ? (
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold/20 px-5 py-3 text-gold">
              <CheckCircle2 className="h-5 w-5" />
              Thank you — you're in the light with us.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                setSent(true);
                toast.success("You're subscribed — welcome to Lightpath 💛");
              }}
              className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="Email address"
                className="h-12 flex-[1.4] rounded-full border border-white/15 bg-white/10 px-5 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button type="submit" className="btn-hero h-12 !py-0">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Footer ----------------------------- */

function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="container-prose grid gap-10 py-16 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm text-white/75">
            Lighting the path to hope, character &amp; purpose for every
            Nigerian child.
          </p>
          <p className="mt-3 text-xs italic text-white/55">
            Inspired by faith, serving all children with love.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-white/80 hover:text-gold">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0 text-gold" />
              Ile-Ife, Osun State, Nigeria — serving communities nationwide
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 flex-shrink-0 text-gold" />
              <a href="mailto:info@lightpathoutreach.org" className="hover:text-gold">
                info@lightpathoutreach.org
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
              +234 803 XXX XXXX
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter / X" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-gold hover:text-navy"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Newsletter
          </h4>
          <p className="mt-4 text-sm text-white/75">
            Monthly stories of hope, straight to your inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Subscribed 💛");
            }}
            className="mt-4 flex gap-2"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="h-10 flex-1 rounded-full border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button className="rounded-full bg-primary px-4 text-sm font-semibold text-white hover:bg-primary/90">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose flex flex-col gap-2 py-5 text-center text-xs text-white/60 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © 2026 Lightpath Outreach. All rights reserved. ·{" "}
            <a href="#" className="hover:text-gold">Privacy</a>
          </p>
          <p>Designed with hope for every Nigerian child.</p>
        </div>
      </div>
    </footer>
  );
}

/* ============================== Dialogs ============================== */

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

  const reset = () => {
    setAmount(10000); setCustom(""); setName(""); setEmail(""); setPhone(""); setMsg(""); setSuccess(false);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = amount === "custom" ? Number(custom) : amount;
    if (!value || !name || !email) return;
    setSuccess(true);
    toast.success(`Thank you, ${name.split(" ")[0]} — your ₦${value.toLocaleString()} gift lights a path.`);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        onOpenChange(o);
        if (!o) setTimeout(reset, 200);
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
                <DialogTitle className="font-display text-2xl">
                  {story.name}, {story.age}
                </DialogTitle>
                <DialogDescription className="font-semibold text-forest">
                  {story.location}
                </DialogDescription>
              </DialogHeader>
              <blockquote className="mt-4 border-l-4 border-primary pl-4 text-lg italic text-foreground/80">
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
              <DialogTitle className="mt-3 font-display text-2xl">{p.title}</DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground leading-relaxed">{p.long}</p>
            <DialogFooter>
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
