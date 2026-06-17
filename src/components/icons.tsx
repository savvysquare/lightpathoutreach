import type { CSSProperties } from "react";

type Props = { className?: string; style?: CSSProperties };

const sizeMap: Record<string, string> = {
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.75rem",
  "8": "2rem",
  "9": "2.25rem",
  "10": "2.5rem",
  "12": "3rem",
  "14": "3.5rem",
  "16": "4rem",
};

function make(fa: string) {
  return function Icon({ className = "", style }: Props) {
    const m = className.match(/\bh-(\d+)\b/);
    const size = m ? sizeMap[m[1]] : undefined;
    const cleaned = className
      .replace(/\b[hw]-\d+\b/g, "")
      .replace(/\s+/g, " ")
      .trim();
    const merged: CSSProperties = {
      ...(size ? { fontSize: size, lineHeight: 1, width: size, height: size } : {}),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...style,
    };
    return <i className={`${fa} ${cleaned}`} style={merged} aria-hidden="true" />;
  };
}

export const Menu = make("fa-solid fa-bars");
export const X = make("fa-solid fa-xmark");
export const Heart = make("fa-solid fa-heart");
export const Users = make("fa-solid fa-users");
export const Utensils = make("fa-solid fa-utensils");
export const Sparkles = make("fa-solid fa-wand-magic-sparkles");
export const HandHeart = make("fa-solid fa-hand-holding-heart");
export const BookOpen = make("fa-solid fa-book-open");
export const Coffee = make("fa-solid fa-mug-hot");
export const Handshake = make("fa-solid fa-handshake");
export const Star = make("fa-solid fa-star");
export const ArrowRight = make("fa-solid fa-arrow-right");
export const MapPin = make("fa-solid fa-location-dot");
export const Mail = make("fa-solid fa-envelope");
export const Phone = make("fa-solid fa-phone");
export const Instagram = make("fa-brands fa-instagram");
export const Facebook = make("fa-brands fa-facebook-f");
export const Youtube = make("fa-brands fa-youtube");
export const Twitter = make("fa-brands fa-x-twitter");
export const Calendar = make("fa-solid fa-calendar-days");
export const Sun = make("fa-solid fa-sun");
export const Quote = make("fa-solid fa-quote-left");
export const CheckCircle2 = make("fa-solid fa-circle-check");
