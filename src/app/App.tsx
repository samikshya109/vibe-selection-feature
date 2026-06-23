import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X, Target, Moon, Zap, MessageCircle, Briefcase,
  Sparkles, Play, Pause, SkipForward, Check, ArrowLeft,
  ChevronRight, Shield, Lock, ToggleLeft, ToggleRight,
  Heart, Sun, Waves, Music2, type LucideProps
} from "lucide-react";

type IconComponent = React.FC<LucideProps>;

// Figma assets — Frame72 (booking screen) — local files
import svgPaths from "../imports/Frame72/svg-bc1jz0dccl";
import imgDriversCarIcon from "../imports/Frame72/4445bd047b8f6085750cd56c5f2c86c327f1746a.png";
import imgPicture from "../imports/Frame72/fe5475bc41d9c2086cb49e7fcb80cdc6f97a0352.png";
import imgGroup431 from "../imports/Frame72/22400b303504728883d26b4b1ff4023fab438d9a.png";
import imgBannerBigReserve from "../imports/Frame72/4e650b79161aa5e1684e266610e0a0bae4ffb923.png";
import imgAiGeneratedMusic from "../imports/Frame72/2192da4909e0efe2353fa85e1a097c00303950d7.png";
// Shared vibe tile photo — Frame73 local file
import imgVibeBg from "../imports/Frame73/67bd699864bf96fbd0ef905f4c4fe15dd84233fb.png";

// ─── Vibe Config (faithful to Figma gradients, borders, button gradients) ─────

const VIBES = [
  {
    id: "deep-focus",
    name: "Deep Focus",
    description: "Minimal, zero distraction",
    IconComponent: Target,
    // color bar gradient (tile top)
    barGradient: "linear-gradient(159.859deg, rgb(13,13,26) 0%, rgb(28,28,46) 60%, rgb(45,45,68) 100%)",
    // photo crop per vibe (one image, different pan/zoom)
    imgStyle: { height: "497.09%", left: "-0.24%", top: "-90.23%", width: "303.89%" },
    // selected tile border
    selectedBorder: "#367ba0",
    // "Set vibe" button gradient
    ctaGradient: "linear-gradient(170.718deg, rgb(13,13,26) 0%, rgb(28,28,46) 60%, rgb(45,45,68) 100%)",
    // map overlay tint in active mode
    mapTint: "rgba(13,13,26,0.53)",
    // vibe badge pill in active sheet
    pillBg: "#1C1C2E",
    pillText: "#8888AA",
    pillBorder: "rgba(108,99,255,0.27)",
    // "Driver knows" notification
    knowsText: "#8888AA",
    // "Change Vibe" button
    changeBg: "linear-gradient(170.718deg, rgb(13,13,26) 0%, rgb(28,28,46) 60%, rgb(45,45,68) 100%)",
  },
  {
    id: "wind-down",
    name: "Wind Down",
    description: "Slow, soft & easy",
    IconComponent: Moon,
    barGradient: "linear-gradient(159.859deg, rgb(26,107,95) 0%, rgb(42,157,143) 55%, rgb(82,182,154) 100%)",
    imgStyle: { height: "497.09%", left: "-101.78%", top: "-102.81%", width: "303.89%" },
    selectedBorder: "#43cfcf",
    ctaGradient: "linear-gradient(171.136deg, rgb(33,95,86) 19%, rgb(28,173,156) 104%, rgb(82,182,154) 152%)",
    mapTint: "rgba(26,107,95,0.53)",
    pillBg: "#0F3D38",
    pillText: "#52B69A",
    pillBorder: "rgba(42,157,143,0.27)",
    knowsText: "#52B69A",
    changeBg: "linear-gradient(171.136deg, rgb(33,95,86) 19%, rgb(28,173,156) 104%, rgb(82,182,154) 152%)",
  },
  {
    id: "hype",
    name: "Hype",
    description: "Turn it all the way up",
    IconComponent: Zap,
    barGradient: "linear-gradient(160.149deg, rgb(217,119,6) 0%, rgb(245,158,11) 45%, rgb(249,115,22) 100%)",
    imgStyle: { height: "489.04%", left: "-203.6%", top: "-72.33%", width: "303.89%" },
    selectedBorder: "#f97316",
    ctaGradient: "linear-gradient(176.943deg, rgb(208,87,0) 4%, rgb(202,127,2) 130%)",
    mapTint: "rgba(78,44,0,0.53)",
    pillBg: "#402600",
    pillText: "#fbbf24",
    pillBorder: "rgba(245,158,11,0.27)",
    knowsText: "#d97706",
    changeBg: "linear-gradient(176.486deg, rgb(208,87,0) 4%, rgb(202,127,2) 130%)",
  },
  {
    id: "chat",
    name: "Chat",
    description: "Warm & talkative",
    IconComponent: MessageCircle,
    barGradient: "linear-gradient(159.426deg, rgb(220,38,38) 0%, rgb(248,113,113) 50%, rgb(251,146,60) 100%)",
    imgStyle: { height: "497.09%", left: "0.37%", top: "-327.79%", width: "304.76%" },
    selectedBorder: "#a72d35",
    ctaGradient: "linear-gradient(171.058deg, rgb(220,38,38) 2%, rgb(214,70,70) 51%, rgb(233,114,16) 100%)",
    mapTint: "rgba(220,38,38,0.35)",
    pillBg: "#2C0A0A",
    pillText: "#FCA5A5",
    pillBorder: "rgba(248,113,113,0.27)",
    knowsText: "#F87171",
    changeBg: "linear-gradient(171.058deg, rgb(220,38,38) 2%, rgb(214,70,70) 51%, rgb(233,114,16) 100%)",
  },
  {
    id: "work",
    name: "Work",
    description: "Professional & on-task",
    IconComponent: Briefcase,
    barGradient: "linear-gradient(159.426deg, rgb(15,32,64) 0%, rgb(30,58,95) 50%, rgb(37,99,235) 100%)",
    imgStyle: { height: "502.02%", left: "-106.9%", top: "-322.2%", width: "306.9%" },
    selectedBorder: "#1d80c3",
    ctaGradient: "linear-gradient(170.718deg, rgb(15,32,64) 0%, rgb(30,58,95) 50%, rgb(37,99,235) 100%)",
    mapTint: "rgba(15,32,64,0.53)",
    pillBg: "#0A1929",
    pillText: "#60A5FA",
    pillBorder: "rgba(59,130,246,0.27)",
    knowsText: "#3B82F6",
    changeBg: "linear-gradient(170.718deg, rgb(15,32,64) 0%, rgb(30,58,95) 50%, rgb(37,99,235) 100%)",
  },
  {
    id: "surprise",
    name: "Surprise Me",
    description: "Let the ride decide",
    IconComponent: Sparkles,
    barGradient: "linear-gradient(159.859deg, rgb(15,32,64) 0%, rgb(30,58,95) 50%, rgb(37,99,235) 100%)",
    imgStyle: { height: "537.71%", left: "-222.17%", top: "-373.91%", width: "328.72%" },
    selectedBorder: "#b043a3",
    ctaGradient: "linear-gradient(169.438deg, rgb(91,35,187) 11%, rgb(210,62,135) 69%, rgb(232,121,45) 100%)",
    mapTint: "rgba(91,35,187,0.35)",
    pillBg: "#1A0D2E",
    pillText: "#C4B5FD",
    pillBorder: "rgba(168,85,247,0.27)",
    knowsText: "#A855F7",
    changeBg: "linear-gradient(169.438deg, rgb(91,35,187) 11%, rgb(210,62,135) 69%, rgb(232,121,45) 100%)",
  },
] as const;

type Vibe = (typeof VIBES)[number];

// ─── Music Services ────────────────────────────────────────────────────────────

const MUSIC_SERVICES = [
  {
    id: "spotify",
    name: "Spotify",
    tagline: "50M+ songs",
    color: "#1DB954",
    bg: "#121212",
    textColor: "#fff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="14" fill="#1DB954" />
        <path d="M20.5 18.5c-.3 0-.5-.1-.7-.2-2.9-1.7-6.6-2.1-10.9-1.1-.4.1-.8-.1-.9-.5-.1-.4.1-.8.5-.9 4.7-1.1 8.7-.6 11.9 1.3.4.2.5.6.3 1-.2.3-.5.4-.2.4zm1.4-3.3c-.4 0-.6-.1-.8-.3-3.3-2-8.3-2.6-12.2-1.4-.5.2-1-.1-1.2-.6-.2-.5.1-1 .6-1.2 4.5-1.4 10-.7 13.8 1.6.4.3.6.8.3 1.3-.2.4-.3.6-.5.6zm.1-3.4c-.4 0-.6-.1-.9-.3-3.8-2.2-10-2.7-13.6-1.5-.6.2-1.2-.2-1.4-.8-.2-.6.2-1.2.8-1.4 4.2-1.3 11.2-.7 15.5 1.7.5.3.7.9.4 1.4-.2.5-.5.9-.8.9z" fill="white" />
      </svg>
    ),
  },
  {
    id: "apple",
    name: "Apple Music",
    tagline: "100M+ songs",
    color: "#FA2D48",
    bg: "#1C1C1E",
    textColor: "#fff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="14" fill="#FA2D48" />
        <path d="M18.5 8.5h-6c-.8 0-1.5.7-1.5 1.5v8c0 .8.7 1.5 1.5 1.5h6c.8 0 1.5-.7 1.5-1.5v-8c0-.8-.7-1.5-1.5-1.5zm-3 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm2.5-5h-5v-2h5v2z" fill="white" />
      </svg>
    ),
  },
  {
    id: "youtube",
    name: "YouTube Music",
    tagline: "All genres",
    color: "#FF0000",
    bg: "#0F0F0F",
    textColor: "#fff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="14" fill="#FF0000" />
        <path d="M20.5 14c0 3.6-2.9 6.5-6.5 6.5S7.5 17.6 7.5 14 10.4 7.5 14 7.5s6.5 2.9 6.5 6.5zm-8.5 3.2l4.5-3.2-4.5-3.2v6.4z" fill="white" />
      </svg>
    ),
  },
  {
    id: "amazon",
    name: "Amazon Music",
    tagline: "100M+ songs",
    color: "#00A8E1",
    bg: "#131921",
    textColor: "#fff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="14" fill="#131921" />
        <path d="M8 16.5c3.2 1.8 8.4 1.5 11.5-.3.4-.2.8.1.5.5C18 18.6 14 20 9.8 19c-.5-.1-.3-.8.2-.5zm9.5 1.3c-.3.4-1.3.2-1.8-.1-.4-.2-.3-.6.1-.5.5.1 1.3.3 1.5-.2.3-.5-.2-1.7-1.5-1.3-.8.2-1.4.7-1.7 1.3 0 .1-.1.1-.2 0-.2-.8.4-2.1 1.7-2.4 1.5-.4 2.6.7 1.9 1.2zM14 7.5c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5S7.5 17.6 7.5 14 10.4 7.5 14 7.5z" fill="#00A8E1" />
        <path d="M11 13l3 1.5 3-1.5v1L14 15.5 11 14v-1z" fill="#00A8E1" />
      </svg>
    ),
  },
] as const;

type MusicService = (typeof MUSIC_SERVICES)[number];
type MusicStep = "closed" | "picker" | "privacy" | "playlists" | "success";

// ─── Map Background ────────────────────────────────────────────────────────────

function MapBackground({ tint }: { tint?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 393 260" preserveAspectRatio="xMidYMid slice">
        <rect width="393" height="260" fill="#e8e4dc" />
        <rect x="200" y="15" width="100" height="55" fill="#c8ddb8" rx="3" />
        <rect x="10" y="75" width="65" height="45" fill="#c8ddb8" rx="3" />
        <rect x="295" y="90" width="90" height="75" fill="#c8ddb8" rx="3" />
        <rect x="245" y="110" width="148" height="150" fill="#b8d4e8" />
        <rect x="0" y="65" width="393" height="11" fill="#fff" />
        <rect x="0" y="135" width="393" height="13" fill="#fff" />
        <rect x="0" y="200" width="393" height="9" fill="#fff" />
        <rect x="75" y="0" width="11" height="260" fill="#fff" />
        <rect x="195" y="0" width="13" height="260" fill="#fff" />
        <rect x="305" y="0" width="9" height="260" fill="#fff" />
        <rect x="0" y="100" width="393" height="5" fill="#f5f2ee" />
        <rect x="0" y="168" width="393" height="5" fill="#f5f2ee" />
        <rect x="135" y="0" width="5" height="260" fill="#f5f2ee" />
        <rect x="255" y="0" width="5" height="260" fill="#f5f2ee" />
        <rect x="86" y="72" width="43" height="24" fill="#d4cfc6" rx="2" />
        <rect x="136" y="72" width="53" height="24" fill="#ccc7be" rx="2" />
        <rect x="208" y="72" width="35" height="24" fill="#d4cfc6" rx="2" />
        <rect x="86" y="144" width="43" height="50" fill="#ccc7be" rx="2" />
        <rect x="136" y="144" width="53" height="50" fill="#d4cfc6" rx="2" />
      </svg>
      {/* 5 min chip + nav */}
      {!tint && (
        <>
          <div className="absolute top-14 left-3 bg-white rounded-full p-2 shadow">
            <ArrowLeft size={16} />
          </div>
          <div className="absolute top-[57px] left-14 bg-black text-white rounded-lg px-2 py-1 flex flex-col items-center" style={{ fontSize: 10, lineHeight: 1.2 }}>
            <span style={{ fontSize: 11, fontWeight: 700 }}>5</span>
            <span style={{ fontSize: 8 }}>MIN</span>
          </div>
          <div className="absolute top-[57px] left-[88px] bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow" style={{ fontSize: 12 }}>
            <span style={{ fontWeight: 600 }}>Navy Pier</span>
            <ChevronRight size={12} />
          </div>
          {/* Car pin */}
          <div className="absolute" style={{ top: 108, left: 138 }}>
            <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center shadow-lg">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
              </svg>
            </div>
            <div className="w-0 h-0 mx-auto" style={{ borderLeft: "3px solid transparent", borderRight: "3px solid transparent", borderTop: "5px solid black" }} />
          </div>
        </>
      )}
      {/* Active vibe: back arrow + tint overlay */}
      {tint && (
        <>
          <motion.div
            className="absolute inset-0"
            style={{ background: tint }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute top-14 left-4 bg-white rounded-full p-2.5 shadow-md">
            <ArrowLeft size={16} strokeWidth={2.5} />
          </div>
        </>
      )}
    </div>
  );
}

// ─── Booking Sheet (Frame72) ───────────────────────────────────────────────────

function BookingSheet({ onVibeClick, onMusicClick, hasMusicConnected }: { onVibeClick: () => void; onMusicClick: () => void; hasMusicConnected?: boolean }) {
  return (
    <div className="bg-white overflow-hidden" style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, boxShadow: "0 0 7.7px 0 rgba(46,46,46,0.25)" }}>
      {/* Handle */}
      <div className="flex flex-col items-center pt-2 pb-1">
        <div className="w-14 h-1 bg-[#f3f3f3] rounded-full" />
        <p style={{ fontFamily: "'Uber Move', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: "28px", marginTop: 7 }}>
          Pickup in 4 min
        </p>
      </div>
      {/* Ride details card */}
      <div className="mx-4 border-2 border-[#e8e8e8] rounded-lg p-4 flex items-start justify-between">
        <div>
          <p style={{ fontFamily: "'Uber Move Text', sans-serif", fontWeight: 500, fontSize: 14, lineHeight: "20px" }}>Ride details</p>
          <p style={{ fontFamily: "'Uber Move', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: "28px", maxWidth: 232 }}>
            Meet at your pickup spot on Volta do Duche
          </p>
        </div>
        <div className="bg-[#f3f3f3] rounded-lg size-12 flex items-center justify-center gap-1 shrink-0">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-1 h-1 bg-black rounded-full" />
          ))}
        </div>
      </div>
      {/* Driver */}
      <div className="border-t border-b border-[#f3f3f3] mx-0 px-4 py-3 flex items-start justify-between">
        <div className="relative w-28 h-16">
          <div className="absolute left-5 top-0 w-24 h-16 overflow-hidden">
            <img src={imgDriversCarIcon} alt="Car" className="absolute" style={{ width: "138%", left: "-21%", top: "-30%" }} />
          </div>
          <div className="absolute left-0 top-1 flex flex-col items-center">
            <div className="size-11 rounded-full overflow-hidden">
              <img src={imgPicture} alt="Driver" className="size-full object-cover" />
            </div>
            <div className="bg-white shadow rounded-full px-1.5 py-0.5 flex items-center gap-px -mt-2">
              <span style={{ fontSize: 12 }}>5.0</span>
              <svg width="10" height="10" viewBox="0 0 10.4616 9.94959">
                <path d={svgPaths.p1faf8280} fill="black" />
              </svg>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p style={{ fontFamily: "'Uber Move', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: "28px" }}>99AA999</p>
          <p style={{ fontFamily: "'Uber Move Text', sans-serif", fontSize: 14, lineHeight: "20px" }}>White Tesla Model 3</p>
        </div>
      </div>
      {/* Driver name */}
      <p className="text-center py-1" style={{ fontSize: 14 }}>
        <span style={{ color: "#427791", fontWeight: 500 }}>Rufat</span>
        <span>・112,520 trips</span>
      </p>
      {/* Message / Call / Spotlight */}
      <div className="mx-4 mt-1 flex items-center gap-3">
        <div className="bg-[#e8e8e8] flex-1 rounded-full px-3 py-2">
          <span style={{ fontSize: 14 }}>Message Rufat</span>
        </div>
        <button className="bg-[#f3f3f3] rounded-full p-2.5">
          <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
            <path d={svgPaths.p13f30e00} fill="black" />
          </svg>
        </button>
        <button className="bg-[#f3f3f3] rounded-full p-2.5">
          <svg width="24" height="24" viewBox="0 0 21.5 21.5" fill="none">
            <circle cx="11" cy="10.5" fill="black" r="5" />
            {["M11 0V3.5", "M11 18V21.5", "M18 10.5H21.5", "M0 10.5H3.5", "M3 2.5L5.47487 4.97487", "M19.4751 2.5L17.0002 4.97487", "M3 18.4749L5.47487 16", "M19.4751 18.4749L17.0002 16"].map((d, i) => (
              <path key={i} d={d} stroke="black" strokeWidth="2.5" />
            ))}
          </svg>
        </button>
      </div>
      {/* CTA row */}
      <div className="mx-4 mt-4 flex gap-2">
        <motion.button
          className="flex-1 bg-black rounded-lg py-4 flex items-center justify-center"
          whileTap={{ scale: 0.97 }}
          onClick={onVibeClick}
        >
          <span style={{
            backgroundImage: "linear-gradient(106.665deg, rgb(255,174,231) 20%, rgb(142,251,255) 84%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 700, fontSize: 18, fontFamily: "Inter, sans-serif",
          }}>
            Vibe and Ride
          </span>
        </motion.button>
        <motion.button
          className="rounded-xl size-14 flex items-center justify-center shrink-0 relative"
          style={{ background: hasMusicConnected ? "#000" : "#e8e8e8" }}
          whileTap={{ scale: 0.92 }}
          onClick={onMusicClick}
        >
          <img src={imgAiGeneratedMusic} alt="Music" className="w-7 h-7 object-contain" style={{ filter: hasMusicConnected ? "brightness(0) invert(1)" : "none" }} />
          {hasMusicConnected && (
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
              style={{ background: "#fff", border: "2px solid #000" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
            >
              <Check size={8} color="#000" strokeWidth={3} />
            </motion.div>
          )}
        </motion.button>
      </div>
      {/* Promo carousel */}
      <div className="flex gap-2 px-4 pt-4 pb-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        <div className="relative shrink-0 w-80 rounded-xl overflow-hidden" style={{ height: 136 }}>
          <img src={imgGroup431} alt="Reserve a ride" className="absolute inset-0 w-full h-full object-cover" style={{ width: "116%", left: "-16%" }} />
          <div className="absolute inset-0 bg-black/10 rounded-xl" />
          <div className="absolute left-4 top-3">
            <p style={{ color: "#fff", fontFamily: "'Uber Move', sans-serif", fontWeight: 500, fontSize: 20, lineHeight: "28px", maxWidth: 161 }}>Ride on your schedule</p>
            <div className="flex items-center gap-0.5 mt-3">
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>Reserve a ride</span>
              <svg width="14" height="12" viewBox="0 0 13.5 12" fill="none"><path d={svgPaths.p11764d00} fill="white" /></svg>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-80 rounded-xl overflow-hidden" style={{ height: 136 }}>
          <img src={imgBannerBigReserve} alt="Uber Black" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute left-4 top-3">
            <p style={{ color: "#fff", fontFamily: "'Uber Move', sans-serif", fontWeight: 500, fontSize: 20, lineHeight: "28px", maxWidth: 161 }}>Enjoy a luxury car</p>
            <div className="flex items-center gap-0.5 mt-3">
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>Try Uber Black</span>
              <svg width="14" height="12" viewBox="0 0 13.5 12" fill="none"><path d={svgPaths.p11764d00} fill="white" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Vibe Tile (Frame73-79 faithful reproduction) ─────────────────────────────

function VibeTileCard({
  vibe,
  selected,
  onSelect,
}: {
  vibe: Vibe;
  selected: boolean;
  onSelect: () => void;
}) {
  const Icon = vibe.IconComponent;
  return (
    <motion.button
      className="relative bg-white overflow-hidden text-left w-full"
      style={{
        borderRadius: 16,
        boxShadow: selected
          ? `0 0 0 2px ${vibe.selectedBorder}, 0 2px 12px rgba(0,0,0,0.08)`
          : "0 2px 12px rgba(0,0,0,0.08)",
      }}
      onClick={onSelect}
      whileTap={{ scale: 0.97 }}
      animate={selected ? { scale: 1.02 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Full-bleed photo bar — Figma design uses one image panned per vibe */}
      <div className="h-16 w-full relative overflow-hidden" style={{ background: vibe.barGradient }}>
        <img
          src={imgVibeBg}
          alt=""
          className="absolute max-w-none pointer-events-none"
          style={{
            height: vibe.imgStyle.height,
            left: vibe.imgStyle.left,
            top: vibe.imgStyle.top,
            width: vibe.imgStyle.width,
          }}
        />
        {/* Selected check mark — top-left (as in Frame74/75/77/78/79) */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="absolute top-[7.5px] left-[7px] bg-[rgba(255,255,255,0.9)] rounded-full flex items-center justify-center"
              style={{ width: 20.6, height: 20.6 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
            >
              <Check size={10} strokeWidth={3} style={{ color: "#2C1A00" }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Tile info */}
      <div className="px-3 py-2.5">
        <div className="flex items-center gap-1.5 mb-0.5">
          <Icon size={13} color="#111" strokeWidth={2.2} />
          <span style={{ fontWeight: 700, fontSize: 13, color: "#111", fontFamily: "Inter, sans-serif", letterSpacing: -0.076 }}>
            {vibe.name}
          </span>
        </div>
        <p style={{ fontSize: 11, color: "#888", fontFamily: "Inter, sans-serif", fontWeight: 500, letterSpacing: 0.064, lineHeight: "15px" }}>
          {vibe.description}
        </p>
      </div>
    </motion.button>
  );
}

// ─── Vibe Selector Sheet (Frame73-79) ─────────────────────────────────────────

function VibeSelectorSheet({
  pending,
  onSelect,
  onSetVibe,
  onClose,
}: {
  pending: Vibe | null;
  onSelect: (v: Vibe) => void;
  onSetVibe: () => void;
  onClose: () => void;
}) {
  return (
    <div className="bg-white" style={{ maxHeight: "88vh", overflowY: "auto", scrollbarWidth: "none" }}>
      {/* Header — sticky */}
      <div
        className="bg-white sticky top-0 z-10"
        style={{ borderBottom: "1px solid #f0f0f0" }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-2 pb-3">
          <div className="w-14 h-1 bg-[#f3f3f3] rounded-full" />
        </div>
        {/* Title row */}
        <div className="flex items-start justify-between px-4 pb-3">
          <div>
            <p style={{ fontWeight: 800, fontSize: 22, fontFamily: "Inter, sans-serif", lineHeight: "33px", color: "#111" }}>
              Choose your vibe
            </p>
            <p style={{ fontSize: 13, color: "#888", fontFamily: "Inter, sans-serif", letterSpacing: -0.076 }}>
              Sets the mood for your entire ride
            </p>
          </div>
          <motion.button
            className="bg-[#f3f3f3] rounded-full flex items-center justify-center"
            style={{ width: 36, height: 36 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
          >
            <X size={16} color="#111" />
          </motion.button>
        </div>
      </div>

      {/* 2-col vibe grid */}
      <div className="grid grid-cols-2 gap-3 px-4 py-4" style={{ minHeight: 409.5 }}>
        {VIBES.map((v) => (
          <VibeTileCard
            key={v.id}
            vibe={v}
            selected={pending?.id === v.id}
            onSelect={() => onSelect(v)}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="px-4 pt-2 pb-6">
        <AnimatePresence mode="wait">
          {pending ? (
            <motion.button
              key={pending.id}
              className="w-full overflow-hidden relative flex items-center justify-center"
              style={{ height: 59, borderRadius: 14, backgroundImage: pending.ctaGradient }}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              whileTap={{ scale: 0.97 }}
              onClick={onSetVibe}
            >
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0"
                style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)" }}
                animate={{ x: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut", repeatDelay: 0.6 }}
              />
              <span style={{ color: "#fff", fontWeight: 600, fontSize: 18, fontFamily: "Inter, sans-serif", position: "relative" }}>
                Set vibe → {pending.name}
              </span>
            </motion.button>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex items-center justify-center bg-[#f3f3f3] rounded-2xl"
              style={{ height: 59 }}
            >
              <span style={{ color: "#aaa", fontWeight: 600, fontSize: 16, fontFamily: "Inter, sans-serif" }}>
                Pick a vibe to continue
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Active Vibe Sheet (Frame80 — white sheet, vibe-colored map) ───────────────

function VibeActiveSheet({
  vibe,
  isPlaying,
  onPlayPause,
  onChangeVibe,
  onMusicClick,
  hasMusicConnected,
}: {
  vibe: Vibe;
  isPlaying: boolean;
  onPlayPause: () => void;
  onChangeVibe: () => void;
  onMusicClick: () => void;
  hasMusicConnected?: boolean;
}) {
  return (
    <div className="bg-white overflow-hidden" style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, boxShadow: "0 0 7.7px 0 rgba(46,46,46,0.25)" }}>
      {/* Header: handle + vibe pill (left) + "Pickup in 4 min" (right) */}
      <div className="relative h-14">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-1 bg-[#f3f3f3] rounded-full" />
        {/* Vibe badge */}
        <motion.div
          className="absolute flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{ background: vibe.pillBg, border: `1px solid ${vibe.pillBorder}`, bottom: 8, left: 18 }}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, type: "spring" }}
        >
          <vibe.IconComponent size={13} color={vibe.pillText} strokeWidth={2} />
          <span style={{ color: vibe.pillText, fontSize: 13, fontWeight: 600, fontFamily: "Inter, sans-serif" }}>{vibe.name}</span>
        </motion.div>
        {/* Pickup */}
        <p
          className="absolute"
          style={{ fontFamily: "'Uber Move', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: "28px", bottom: 6, right: 16, color: "#000" }}
        >
          Pickup in 4 min
        </p>
      </div>

      {/* Ride details card */}
      <div className="mx-4 border-2 border-[#e8e8e8] rounded-lg p-4 flex items-start justify-between">
        <div>
          <p style={{ fontFamily: "'Uber Move Text', sans-serif", fontWeight: 500, fontSize: 14, lineHeight: "20px" }}>Ride details</p>
          <p style={{ fontFamily: "'Uber Move', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: "28px", maxWidth: 232 }}>
            Meet at your pickup spot on Volta do Duche
          </p>
        </div>
        <div className="bg-[#f3f3f3] rounded-lg size-12 flex items-center justify-center gap-1 shrink-0">
          {[0, 1, 2].map((i) => <div key={i} className="w-1 h-1 bg-black rounded-full" />)}
        </div>
      </div>

      {/* Driver */}
      <div className="border-t border-b border-[#f3f3f3] mx-0 px-4 py-3 flex items-start justify-between mt-3">
        <div className="relative w-28 h-16">
          <div className="absolute left-5 top-0 w-24 h-16 overflow-hidden">
            <img src={imgDriversCarIcon} alt="Car" className="absolute" style={{ width: "138%", left: "-21%", top: "-30%" }} />
          </div>
          <div className="absolute left-0 top-1 flex flex-col items-center">
            <div className="size-11 rounded-full overflow-hidden">
              <img src={imgPicture} alt="Driver" className="size-full object-cover" />
            </div>
            <div className="bg-white shadow rounded-full px-1.5 py-0.5 flex items-center gap-px -mt-2">
              <span style={{ fontSize: 12 }}>5.0</span>
              <svg width="10" height="10" viewBox="0 0 10.4616 9.94959"><path d={svgPaths.p1faf8280} fill="black" /></svg>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p style={{ fontFamily: "'Uber Move', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: "28px" }}>99AA999</p>
          <p style={{ fontFamily: "'Uber Move Text', sans-serif", fontSize: 14 }}>White Tesla Model 3</p>
        </div>
      </div>
      <p className="text-center py-2" style={{ fontSize: 14 }}>
        <span style={{ color: "#427791", fontWeight: 500 }}>Rufat</span><span>・112,520 trips</span>
      </p>

      {/* Message row */}
      <div className="mx-4 flex items-center gap-3">
        <div className="bg-[#e8e8e8] flex-1 rounded-full px-3 py-2">
          <span style={{ fontSize: 14 }}>Message Rufat</span>
        </div>
        <button className="bg-[#f3f3f3] rounded-full p-2.5">
          <svg width="24" height="24" viewBox="0 0 18 18" fill="none"><path d={svgPaths.p13f30e00} fill="black" /></svg>
        </button>
        <button className="bg-[#f3f3f3] rounded-full p-2.5">
          <svg width="24" height="24" viewBox="0 0 21.5 21.5" fill="none">
            <circle cx="11" cy="10.5" fill="black" r="5" />
            {["M11 0V3.5", "M11 18V21.5", "M18 10.5H21.5", "M0 10.5H3.5", "M3 2.5L5.47487 4.97487", "M19.4751 2.5L17.0002 4.97487", "M3 18.4749L5.47487 16", "M19.4751 18.4749L17.0002 16"].map((d, i) => (
              <path key={i} d={d} stroke="black" strokeWidth="2.5" />
            ))}
          </svg>
        </button>
      </div>

      {/* Change Vibe + Music icon (Frame80 layout) */}
      <div className="mx-4 mt-4 flex gap-2">
        <motion.button
          className="overflow-hidden relative flex items-center justify-center"
          style={{ flex: 1, height: 56, borderRadius: 10, backgroundImage: vibe.changeBg }}
          whileTap={{ scale: 0.97 }}
          onClick={onChangeVibe}
        >
          <motion.div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)" }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut", repeatDelay: 1 }}
          />
          <span style={{ color: "#fff", fontWeight: 600, fontSize: 18, fontFamily: "Inter, sans-serif", position: "relative" }}>
            Change Vibe
          </span>
        </motion.button>
        <motion.button
          className="rounded-xl flex items-center justify-center shrink-0 relative"
          style={{ width: 56, height: 56, background: hasMusicConnected ? "#000" : "#e8e8e8" }}
          whileTap={{ scale: 0.92 }}
          onClick={onMusicClick}
        >
          <img src={imgAiGeneratedMusic} alt="Music" className="w-7 h-7 object-contain" style={{ filter: hasMusicConnected ? "brightness(0) invert(1)" : "none" }} />
          {hasMusicConnected && (
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
              style={{ background: "#fff", border: "2px solid #000" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
            >
              <Check size={8} color="#000" strokeWidth={3} />
            </motion.div>
          )}
        </motion.button>
      </div>

      {/* Promo carousel */}
      <div className="flex gap-2 px-4 pt-4 pb-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        <div className="relative shrink-0 w-80 rounded-xl overflow-hidden" style={{ height: 136 }}>
          <img src={imgGroup431} alt="Reserve" className="absolute inset-0 w-full h-full object-cover" style={{ width: "116%", left: "-16%" }} />
          <div className="absolute inset-0 bg-black/10 rounded-xl" />
          <div className="absolute left-4 top-3">
            <p style={{ color: "#fff", fontWeight: 500, fontSize: 20, maxWidth: 161, lineHeight: "28px" }}>Ride on your schedule</p>
            <div className="flex items-center gap-0.5 mt-3">
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>Reserve a ride</span>
              <svg width="14" height="12" viewBox="0 0 13.5 12" fill="none"><path d={svgPaths.p11764d00} fill="white" /></svg>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-80 rounded-xl overflow-hidden" style={{ height: 136 }}>
          <img src={imgBannerBigReserve} alt="Uber Black" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute left-4 top-3">
            <p style={{ color: "#fff", fontWeight: 500, fontSize: 20, maxWidth: 161, lineHeight: "28px" }}>Enjoy a luxury car</p>
            <div className="flex items-center gap-0.5 mt-3">
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>Try Uber Black</span>
              <svg width="14" height="12" viewBox="0 0 13.5 12" fill="none"><path d={svgPaths.p11764d00} fill="white" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Music Service Picker ──────────────────────────────────────────────────────

function MusicServicePicker({
  onPick,
  onClose,
}: {
  onPick: (s: MusicService) => void;
  onClose: () => void;
}) {
  return (
    <div className="bg-white" style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
      {/* Handle */}
      <div className="flex flex-col items-center pt-2.5 pb-4">
        <div className="w-14 h-1 bg-[#f3f3f3] rounded-full" />
      </div>
      {/* Header */}
      <div className="flex items-start justify-between px-4 pb-4">
        <div>
          <p style={{ fontWeight: 800, fontSize: 22, fontFamily: "Inter, sans-serif", lineHeight: "30px", color: "#111" }}>
            Connect music
          </p>
          <p style={{ fontSize: 13, color: "#888", fontFamily: "Inter, sans-serif", marginTop: 3, maxWidth: 260, lineHeight: "19px" }}>
            Let your driver play exactly what you love during the ride
          </p>
        </div>
        <motion.button
          className="bg-[#f3f3f3] rounded-full flex items-center justify-center shrink-0"
          style={{ width: 36, height: 36 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
        >
          <X size={16} color="#111" />
        </motion.button>
      </div>

      {/* Service grid */}
      <div className="px-4 pb-6 flex flex-col gap-3">
        {MUSIC_SERVICES.map((svc) => (
          <motion.button
            key={svc.id}
            className="w-full flex items-center gap-4 p-4 rounded-2xl text-left relative overflow-hidden"
            style={{ background: "#f8f8f8", border: "1.5px solid #f0f0f0" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onPick(svc)}
          >
            <div className="shrink-0">{svc.icon}</div>
            <div className="flex-1">
              <p style={{ fontWeight: 700, fontSize: 15, fontFamily: "Inter, sans-serif", color: "#111" }}>{svc.name}</p>
              <p style={{ fontSize: 12, color: "#888", fontFamily: "Inter, sans-serif", marginTop: 1 }}>{svc.tagline}</p>
            </div>
            <div className="flex items-center gap-1" style={{ color: svc.color }}>
              <span style={{ fontSize: 12, fontWeight: 600, fontFamily: "Inter, sans-serif" }}>Connect</span>
              <ChevronRight size={14} />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Privacy Layer ────────────────────────────────────────────────────��────────

function PrivacyLayer({
  service,
  onAllow,
  onDeny,
  onClose,
}: {
  service: MusicService;
  onAllow: () => void;
  onDeny: () => void;
  onClose: () => void;
}) {
  const [perms, setPerms] = useState({ playlists: true, playback: true, history: false });

  return (
    <div className="bg-white" style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
      <div className="flex flex-col items-center pt-2.5 pb-2">
        <div className="w-14 h-1 bg-[#f3f3f3] rounded-full" />
      </div>

      {/* Service header */}
      <div className="flex flex-col items-center pt-4 pb-5 px-4">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-3" style={{ background: service.bg }}>
          <div style={{ transform: "scale(1.6)" }}>{service.icon}</div>
        </div>
        <p style={{ fontWeight: 800, fontSize: 20, fontFamily: "Inter, sans-serif", color: "#111", textAlign: "center", lineHeight: "27px" }}>
          Allow Uber to access<br />{service.name}?
        </p>
        <p style={{ fontSize: 13, color: "#888", fontFamily: "Inter, sans-serif", marginTop: 6, textAlign: "center", lineHeight: "19px" }}>
          Uber will share your preferences with the driver so they can play music you love
        </p>
      </div>

      {/* Privacy info box */}
      <div className="mx-4 rounded-2xl p-4 mb-4" style={{ background: "#f8f8f8", border: "1px solid #f0f0f0" }}>
        <div className="flex items-center gap-2 mb-3">
          <Shield size={14} color="#555" />
          <p style={{ fontWeight: 700, fontSize: 13, fontFamily: "Inter, sans-serif", color: "#333" }}>
            Choose what Uber can access
          </p>
        </div>

        {/* Permission toggles */}
        {[
          { key: "playlists" as const, label: "View your playlists", desc: "Used to let you pick a playlist for the ride" },
          { key: "playback" as const, label: "Control playback", desc: "Play, pause, and skip for in-car music" },
          { key: "history" as const, label: "Listening history", desc: "Help suggest vibes based on your taste" },
        ].map((perm) => (
          <div key={perm.key} className="flex items-center justify-between py-2.5" style={{ borderTop: "1px solid #ececec" }}>
            <div className="flex-1 pr-3">
              <p style={{ fontWeight: 600, fontSize: 13, fontFamily: "Inter, sans-serif", color: "#111" }}>{perm.label}</p>
              <p style={{ fontSize: 11, color: "#888", fontFamily: "Inter, sans-serif", marginTop: 1, lineHeight: "15px" }}>{perm.desc}</p>
            </div>
            <motion.button
              onClick={() => setPerms((p) => ({ ...p, [perm.key]: !p[perm.key] }))}
              whileTap={{ scale: 0.9 }}
            >
              {perms[perm.key] ? (
                <ToggleRight size={26} color={service.color} />
              ) : (
                <ToggleLeft size={26} color="#ccc" />
              )}
            </motion.button>
          </div>
        ))}
      </div>

      {/* Privacy note */}
      <div className="flex items-center gap-2 mx-4 mb-5">
        <Lock size={12} color="#aaa" />
        <p style={{ fontSize: 11, color: "#aaa", fontFamily: "Inter, sans-serif", lineHeight: "15px" }}>
          Uber never stores your login credentials. You can revoke access anytime in Settings.
        </p>
      </div>

      {/* Buttons */}
      <div className="px-4 pb-6 flex flex-col gap-3">
        <motion.button
          className="w-full flex items-center justify-center rounded-2xl"
          style={{ height: 56, background: service.color }}
          whileTap={{ scale: 0.97 }}
          onClick={onAllow}
        >
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 16, fontFamily: "Inter, sans-serif" }}>
            Allow Access to {service.name}
          </span>
        </motion.button>
        <motion.button
          className="w-full flex items-center justify-center"
          whileTap={{ scale: 0.98 }}
          onClick={onDeny}
        >
          <span style={{ color: "#888", fontWeight: 500, fontSize: 14, fontFamily: "Inter, sans-serif" }}>Not now</span>
        </motion.button>
      </div>
    </div>
  );
}

// ─── Playlist Picker ───────────────────────────────────────────────────────────

const PLAYLISTS: { name: string; count: string; Icon: IconComponent }[] = [
  { name: "Liked Songs",          count: "1,204 songs", Icon: Heart },
  { name: "Morning Drive",        count: "42 songs",    Icon: Sun },
  { name: "Late Night Cruising",  count: "68 songs",    Icon: Moon },
  { name: "Energy Boost",         count: "55 songs",    Icon: Zap },
  { name: "Chill Vibes",          count: "89 songs",    Icon: Waves },
  { name: "Focus Mode",           count: "73 songs",    Icon: Target },
];

function PlaylistPicker({
  service,
  onClose,
  onQueue,
}: {
  service: MusicService;
  onClose: () => void;
  onQueue: (playlist: typeof PLAYLISTS[number]) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div style={{ background: service.bg, borderTopLeftRadius: 24, borderTopRightRadius: 24, maxHeight: "78vh", overflowY: "auto", scrollbarWidth: "none" }}>
      {/* Handle */}
      <div className="flex flex-col items-center pt-2.5 pb-4">
        <div className="w-14 h-1 rounded-full" style={{ background: "#333" }} />
      </div>
      {/* Header */}
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: service.color }}>
            <Play size={16} color="#fff" fill="#fff" />
          </div>
          <div>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: 18, fontFamily: "Inter, sans-serif" }}>
              {service.name}
            </p>
            <p style={{ color: "#aaa", fontSize: 12, fontFamily: "Inter, sans-serif", marginTop: 1 }}>
              Connected · Choose a playlist
            </p>
          </div>
        </div>
        <motion.button
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: "#333" }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
        >
          <X size={15} color="#fff" />
        </motion.button>
      </div>

      {/* Connected indicator */}
      <div className="flex items-center gap-2 mx-4 mb-4">
        <div className="w-2 h-2 rounded-full" style={{ background: service.color }} />
        <p style={{ color: service.color, fontSize: 13, fontWeight: 600, fontFamily: "Inter, sans-serif" }}>
          Connected as @rufat_{service.id}
        </p>
      </div>

      {/* Playlists */}
      <div className="flex flex-col gap-2 px-4 pb-2">
        {PLAYLISTS.map((pl, i) => (
          <motion.button
            key={i}
            className="flex items-center gap-3 p-3 rounded-xl text-left"
            style={{
              background: selected === i ? `${service.color}22` : "#1a1a1a",
              border: selected === i ? `1px solid ${service.color}66` : "1px solid #2a2a2a",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelected(i)}
          >
            <div
              className="flex items-center justify-center rounded-xl shrink-0"
              style={{ width: 40, height: 40, background: selected === i ? `${service.color}30` : "#222" }}
            >
              <pl.Icon size={18} color={selected === i ? service.color : "#888"} strokeWidth={1.8} />
            </div>
            <div className="flex-1">
              <p style={{ color: "#fff", fontWeight: 600, fontSize: 14, fontFamily: "Inter, sans-serif" }}>{pl.name}</p>
              <p style={{ color: "#888", fontSize: 12, fontFamily: "Inter, sans-serif" }}>{pl.count}</p>
            </div>
            <AnimatePresence>
              {selected === i && (
                <motion.div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: service.color }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Check size={12} color="#fff" strokeWidth={3} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>

      {/* Queue CTA */}
      <div className="px-4 pb-6 pt-3">
        <AnimatePresence>
          {selected !== null && (
            <motion.button
              className="w-full rounded-2xl flex items-center justify-center gap-2"
              style={{ height: 56, background: service.color }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => selected !== null && onQueue(PLAYLISTS[selected])}
            >
              <SkipForward size={18} color="#fff" />
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 16, fontFamily: "Inter, sans-serif" }}>
                Queue {selected !== null ? PLAYLISTS[selected].name : ""}
              </span>
            </motion.button>
          )}
        </AnimatePresence>
        {selected === null && (
          <p style={{ color: "#555", fontSize: 13, textAlign: "center", fontFamily: "Inter, sans-serif" }}>
            Tap a playlist to queue it for your ride
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Music Success Screen ──────────────────────────────────────���───────────────

function MusicSuccessScreen({
  service,
  playlist,
  onClose,
}: {
  service: MusicService;
  playlist: typeof PLAYLISTS[number];
  onClose: () => void;
}) {
  // Fake track list for the "uploaded" songs
  const tracks = [
    { title: "Late Night Feels", artist: "The Midnight", duration: "3:42" },
    { title: "Golden Hour", artist: "JVKE", duration: "2:58" },
    { title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
    { title: "Stay", artist: "Kid Laroi & Justin Bieber", duration: "2:21" },
    { title: "Heat Waves", artist: "Glass Animals", duration: "3:59" },
  ];

  return (
    <div
      style={{
        background: service.bg,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        maxHeight: "82vh",
        overflowY: "auto",
        scrollbarWidth: "none",
      }}
    >
      {/* Handle */}
      <div className="flex justify-center pt-2.5 pb-1">
        <div className="w-14 h-1 rounded-full" style={{ background: "#333" }} />
      </div>

      {/* Success hero */}
      <div className="flex flex-col items-center px-6 pt-5 pb-4">
        {/* Animated cloud + check */}
        <div className="relative mb-4" style={{ width: 88, height: 88 }}>
          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: `2px solid ${service.color}` }}
            animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: `2px solid ${service.color}44` }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}
          />
          {/* Circle bg */}
          <div
            className="absolute inset-0 rounded-full flex items-center justify-center"
            style={{ background: `${service.color}22`, border: `1.5px solid ${service.color}44` }}
          >
            {/* Cloud upload icon — drawn inline */}
            <motion.svg
              width="40" height="40" viewBox="0 0 40 40" fill="none"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
            >
              {/* Cloud body */}
              <motion.path
                d="M28 26H12a6 6 0 1 1 .93-11.93A8 8 0 1 1 28 22v4z"
                stroke={service.color}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              {/* Arrow up */}
              <motion.path
                d="M20 34V24M16 28l4-4 4 4"
                stroke={service.color}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              />
            </motion.svg>
          </div>

          {/* Check badge */}
          <motion.div
            className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: service.color, border: "2px solid #121212" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.9 }}
          >
            <Check size={13} color="#fff" strokeWidth={3} />
          </motion.div>
        </div>

        {/* Title */}
        <motion.p
          style={{ color: "#fff", fontWeight: 800, fontSize: 20, fontFamily: "Inter, sans-serif", textAlign: "center", lineHeight: "27px" }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Songs synced to your ride
        </motion.p>
        <motion.p
          style={{ color: "#888", fontSize: 13, fontFamily: "Inter, sans-serif", textAlign: "center", marginTop: 4, lineHeight: "18px" }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          {playlist.name} · {playlist.count} has been queued for your driver
        </motion.p>
      </div>

      {/* Service + playlist info pill */}
      <motion.div
        className="mx-4 mb-4 flex items-center gap-3 rounded-2xl p-3"
        style={{ background: "#1a1a1a", border: `1px solid ${service.color}33` }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: service.color }}>
          <Play size={16} color="#fff" fill="#fff" />
        </div>
        <div className="flex-1 min-w-0">
          <p style={{ color: "#fff", fontWeight: 600, fontSize: 14, fontFamily: "Inter, sans-serif" }}>{playlist.name}</p>
          <p style={{ color: "#888", fontSize: 12, fontFamily: "Inter, sans-serif", marginTop: 1 }}>
            via {service.name} · Now playing in car
          </p>
        </div>
        {/* Equaliser bars — playing indicator */}
        <div className="flex items-end gap-0.5 shrink-0" style={{ height: 20 }}>
          {[0.6, 1, 0.75, 0.9, 0.5].map((h, i) => (
            <motion.div
              key={i}
              className="w-1 rounded-full"
              style={{ background: service.color }}
              animate={{ scaleY: [h, 1, h * 0.6, 1, h] }}
              transition={{ repeat: Infinity, duration: 0.8 + i * 0.15, ease: "easeInOut", delay: i * 0.1 }}
              initial={{ scaleY: h }}
              custom={h}
            />
          ))}
        </div>
      </motion.div>

      {/* Track list — "added to cloud" */}
      <div className="px-4 mb-3">
        <motion.p
          style={{ color: "#666", fontSize: 11, fontFamily: "Inter, sans-serif", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Synced tracks
        </motion.p>
        <div className="flex flex-col gap-0">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 py-2.5"
              style={{ borderBottom: i < tracks.length - 1 ? "1px solid #1e1e1e" : "none" }}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85 + i * 0.07, type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Track number / cloud check */}
              <motion.div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ background: `${service.color}20` }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9 + i * 0.07, type: "spring" }}
              >
                <Check size={12} color={service.color} strokeWidth={2.5} />
              </motion.div>
              <div className="flex-1 min-w-0">
                <p style={{ color: "#fff", fontWeight: 500, fontSize: 13, fontFamily: "Inter, sans-serif" }} className="truncate">
                  {track.title}
                </p>
                <p style={{ color: "#666", fontSize: 11, fontFamily: "Inter, sans-serif" }}>{track.artist}</p>
              </div>
              <p style={{ color: "#555", fontSize: 12, fontFamily: "Inter, sans-serif", shrink: 0 }}>{track.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Done button */}
      <motion.div
        className="px-4 pb-6 pt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.button
          className="w-full rounded-2xl flex items-center justify-center"
          style={{ height: 56, background: service.color }}
          whileTap={{ scale: 0.97 }}
          onClick={onClose}
        >
          <Music2 size={18} color="#fff" strokeWidth={2} style={{ marginRight: 8 }} />
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 16, fontFamily: "Inter, sans-serif" }}>
            Done · Enjoy the ride
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}

// ─── Vibe Interstitial ─────────────────────────────────────────────────────────

function VibeInterstitial({ vibe, onStartRiding }: { vibe: Vibe; onStartRiding: () => void }) {
  return (
    <motion.div
      className="absolute inset-0 z-[100] flex flex-col"
      style={{ backgroundImage: vibe.ctaGradient }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* Radial glow behind icon */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 55% 40% at 50% 42%, rgba(255,255,255,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Top status area */}
      <div className="flex items-center justify-center pt-16 pb-2">
        <motion.div
          className="flex items-center gap-2 rounded-full px-4 py-2"
          style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(8px)" }}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white" style={{ boxShadow: "0 0 6px rgba(255,255,255,0.9)" }} />
          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 13, fontWeight: 600, fontFamily: "Inter, sans-serif", letterSpacing: "0.02em" }}>
            Vibe set
          </span>
        </motion.div>
      </div>

      {/* Centre — icon + text */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Icon with pulsing rings */}
        <div className="relative mb-8" style={{ width: 120, height: 120 }}>
          {/* Outermost pulse */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: "1.5px solid rgba(255,255,255,0.2)" }}
            animate={{ scale: [1, 1.55], opacity: [0.6, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut" }}
          />
          {/* Mid pulse */}
          <motion.div
            className="absolute rounded-full"
            style={{ inset: 12, border: "1.5px solid rgba(255,255,255,0.25)" }}
            animate={{ scale: [1, 1.45], opacity: [0.7, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut", delay: 0.4 }}
          />
          {/* Icon circle */}
          <motion.div
            className="absolute inset-0 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.16)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)" }}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 20 }}
          >
            <vibe.IconComponent size={52} color="#fff" strokeWidth={1.4} />
          </motion.div>
        </div>

        {/* Vibe name */}
        <motion.p
          style={{ color: "#fff", fontWeight: 800, fontSize: 36, fontFamily: "Inter, sans-serif", lineHeight: 1.1, textAlign: "center", letterSpacing: "-0.02em" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, type: "spring", stiffness: 280, damping: 22 }}
        >
          {vibe.name}
        </motion.p>

        {/* Description */}
        <motion.p
          style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, fontFamily: "Inter, sans-serif", fontWeight: 400, marginTop: 10, textAlign: "center", lineHeight: 1.5 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
        >
          {vibe.description}
        </motion.p>

        {/* Divider */}
        <motion.div
          className="mt-8 mb-6"
          style={{ width: 40, height: 1.5, background: "rgba(255,255,255,0.25)", borderRadius: 2 }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        />

        {/* Pickup chip */}
        <motion.div
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl"
          style={{ background: "rgba(0,0,0,0.18)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)" }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.46 }}
        >
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
            Driver is 4 min away
          </span>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="px-6 pb-14">
        <motion.button
          className="w-full flex items-center justify-center gap-3 rounded-2xl relative overflow-hidden"
          style={{ height: 60, background: "rgba(255,255,255,0.18)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, type: "spring", stiffness: 260, damping: 22 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStartRiding}
        >
          {/* Shimmer */}
          <motion.div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", repeatDelay: 0.8 }}
          />
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 18, fontFamily: "Inter, sans-serif", position: "relative" }}>
            Start riding
          </span>
          <ChevronRight size={20} color="#fff" strokeWidth={2.5} style={{ position: "relative" }} />
        </motion.button>

        <motion.p
          className="text-center mt-3"
          style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontFamily: "Inter, sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Tap anywhere to continue
        </motion.p>
      </div>

      {/* Tap-anywhere dismissal */}
      <div className="absolute inset-0" onClick={onStartRiding} style={{ zIndex: -1 }} />
    </motion.div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [vibeSheetOpen, setVibeSheetOpen] = useState(false);
  const [pendingVibe, setPendingVibe] = useState<Vibe | null>(null);
  const [activeVibe, setActiveVibe] = useState<Vibe | null>(null);
  const [flashVibe, setFlashVibe] = useState<Vibe | null>(null);

  // Music flow
  const [musicStep, setMusicStep] = useState<MusicStep>("closed");
  const [selectedService, setSelectedService] = useState<MusicService | null>(null);
  const [queuedPlaylist, setQueuedPlaylist] = useState<typeof PLAYLISTS[number] | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleSetVibe() {
    if (!pendingVibe) return;
    setVibeSheetOpen(false);
    // Small delay so the sheet exit animation completes before interstitial enters
    setTimeout(() => setFlashVibe(pendingVibe), 180);
  }

  function handleStartRiding() {
    if (!flashVibe) return;
    setActiveVibe(flashVibe);
    setPendingVibe(null);
    setIsPlaying(true);
    setFlashVibe(null);
  }

  function handleChangeVibe() {
    setActiveVibe(null);
    setPendingVibe(null);
    setIsPlaying(false);
    setTimeout(() => setVibeSheetOpen(true), 200);
  }

  function handlePickService(svc: MusicService) {
    setSelectedService(svc);
    setMusicStep("privacy");
  }

  function handleAllowPrivacy() { setMusicStep("playlists"); }
  function handleDenyPrivacy() { setMusicStep("closed"); }
  function handleQueuePlaylist(pl: typeof PLAYLISTS[number]) {
    setQueuedPlaylist(pl);
    setMusicStep("success");
  }
  function handleCloseMusic() { setMusicStep("closed"); }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0f0f14 0%, #1a1a24 100%)" }}>
      {/* Phone frame */}
      <div
        className="relative overflow-hidden flex flex-col"
        style={{
          width: 393, height: 852,
          borderRadius: 52,
          background: "#fff",
          boxShadow: "0 0 0 11px #1a1a1a, 0 0 0 12px #333, 0 50px 100px rgba(0,0,0,0.9)",
        }}
      >
        {/* Status bar */}
        <div
          className="flex items-center justify-between px-8 pt-4 pb-1 relative z-30 shrink-0"
          style={{ color: activeVibe ? "#fff" : "#111", transition: "color 0.5s ease" }}
        >
          <span style={{ fontWeight: 700, fontSize: 15 }}>10:52</span>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black" style={{ width: 120, height: 34, borderRadius: 20 }} />
          <div className="flex items-center gap-1">
            <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
              <rect x="0" y="6" width="3" height="6" rx="1" opacity="0.4" />
              <rect x="4.5" y="4" width="3" height="8" rx="1" opacity="0.6" />
              <rect x="9" y="1.5" width="3" height="10.5" rx="1" opacity="0.8" />
              <rect x="13.5" y="0" width="3" height="12" rx="1" />
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
              <path d="M8 2C5.2 2 2.7 3.1 0.9 4.9L0 4C2.1 1.5 5 0 8 0s5.9 1.5 8 4l-.9.9C13.3 3.1 10.8 2 8 2z" opacity="0.4" />
              <path d="M8 5c-1.8 0-3.4.7-4.6 1.9L2.5 6C4 4.5 5.9 3.5 8 3.5s4 1 5.5 2.5l-.9.9C11.4 5.7 9.8 5 8 5z" opacity="0.7" />
              <path d="M8 8c-.8 0-1.5.3-2 .8L5.1 8C5.9 7.1 6.9 6.5 8 6.5s2.1.6 2.9 1.5l-.9.8C9.5 8.3 8.8 8 8 8z" />
              <circle cx="8" cy="11" r="1.2" />
            </svg>
            <div style={{ width: 22, height: 12, border: "1.5px solid currentColor", borderRadius: 3, padding: 1.5, display: "flex" }}>
              <div style={{ height: "100%", width: "75%", background: "currentColor", borderRadius: 1 }} />
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="relative shrink-0" style={{ height: 260 }}>
          <MapBackground tint={activeVibe?.mapTint} />

          {/* "Driver knows your vibe" — Frame80 Container2 */}
          <AnimatePresence>
            {activeVibe && (
              <motion.div
                className="absolute flex items-center gap-2 rounded-2xl px-3 py-2"
                style={{
                  bottom: 16, left: 17, right: 17,
                  background: "rgba(34,20,0,0.93)",
                  border: `1px solid ${activeVibe.pillBorder}`,
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                <activeVibe.IconComponent size={13} color={activeVibe.knowsText} strokeWidth={2} />
                <span style={{ color: activeVibe.knowsText, fontSize: 13, fontFamily: "Inter, sans-serif", letterSpacing: -0.076 }}>
                  Driver knows your vibe
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sheet area */}
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!activeVibe ? (
              <motion.div key="booking" className="absolute inset-0 overflow-y-auto" style={{ scrollbarWidth: "none" }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <BookingSheet onVibeClick={() => setVibeSheetOpen(true)} onMusicClick={() => setMusicStep("picker")} hasMusicConnected={!!queuedPlaylist} />
              </motion.div>
            ) : (
              <motion.div key={`vibe-${activeVibe.id}`} className="absolute inset-0 overflow-y-auto" style={{ scrollbarWidth: "none" }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                <VibeActiveSheet
                  vibe={activeVibe}
                  isPlaying={isPlaying}
                  onPlayPause={() => setIsPlaying((p) => !p)}
                  onChangeVibe={handleChangeVibe}
                  onMusicClick={() => setMusicStep("picker")}
                  hasMusicConnected={!!queuedPlaylist}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full z-20"
          style={{ background: activeVibe ? `${activeVibe.pillText}66` : "#00000033" }} />

        {/* ── VIBE SELECTOR SHEET ── */}
        <AnimatePresence>
          {vibeSheetOpen && (
            <>
              <motion.div className="absolute inset-0 z-50"
                style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(2px)" }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => { setVibeSheetOpen(false); setPendingVibe(null); }} />
              <motion.div className="absolute bottom-0 left-0 right-0 z-50 overflow-hidden"
                style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
                initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 32, stiffness: 320 }}>
                <VibeSelectorSheet
                  pending={pendingVibe}
                  onSelect={setPendingVibe}
                  onSetVibe={handleSetVibe}
                  onClose={() => { setVibeSheetOpen(false); setPendingVibe(null); }}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* ── MUSIC FLOW SHEETS ── */}
        <AnimatePresence>
          {musicStep !== "closed" && (
            <>
              <motion.div className="absolute inset-0 z-[60]"
                style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(3px)" }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={handleCloseMusic} />
              <motion.div className="absolute bottom-0 left-0 right-0 z-[60] overflow-hidden"
                initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 32, stiffness: 320 }}>

                <AnimatePresence mode="wait">
                  {musicStep === "picker" && (
                    <motion.div key="picker" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <MusicServicePicker onPick={handlePickService} onClose={handleCloseMusic} />
                    </motion.div>
                  )}
                  {musicStep === "privacy" && selectedService && (
                    <motion.div key="privacy" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <PrivacyLayer
                        service={selectedService}
                        onAllow={handleAllowPrivacy}
                        onDeny={handleDenyPrivacy}
                        onClose={handleCloseMusic}
                      />
                    </motion.div>
                  )}
                  {musicStep === "playlists" && selectedService && (
                    <motion.div key="playlists" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <PlaylistPicker service={selectedService} onClose={handleCloseMusic} onQueue={handleQueuePlaylist} />
                    </motion.div>
                  )}
                  {musicStep === "success" && selectedService && queuedPlaylist && (
                    <motion.div key="success" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ type: "spring", damping: 28, stiffness: 260 }}>
                      <MusicSuccessScreen service={selectedService} playlist={queuedPlaylist} onClose={handleCloseMusic} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* ── VIBE INTERSTITIAL ── */}
        <AnimatePresence>
          {flashVibe && (
            <VibeInterstitial
              vibe={flashVibe}
              onStartRiding={handleStartRiding}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
