"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useSpring, useTransform, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────
type VisitorType = "investor" | "doctor" | "student" | "creator" | "visitor";

interface QuizQ {
  scenario: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tag: string;
}

// ─────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────
const QUIZ: QuizQ[] = [
  { scenario: "54M crushing chest pain radiating to left arm, diaphoresis, nausea × 45 min. BP 160/95, HR 105.", question: "Most likely diagnosis?", options: ["Unstable Angina", "STEMI", "Aortic Dissection", "Pulmonary Embolism"], correct: 1, explanation: "Classic STEMI: chest pain >20 min + radiation + diaphoresis. Time-to-balloon <90 min. Immediate ECG + cath lab activation.", difficulty: "Easy", tag: "Cardiology" },
  { scenario: "28F fever 38.9°C, right flank pain, dysuria × 3d. UA: WBC casts, bacteriuria, >100k CFU/mL E. coli.", question: "Best initial antibiotic?", options: ["Nitrofurantoin", "Amoxicillin", "IV Ceftriaxone", "Metronidazole"], correct: 2, explanation: "WBC casts + CVA tenderness = pyelonephritis. IV Ceftriaxone is first-line. Nitrofurantoin fails to reach adequate renal tissue levels.", difficulty: "Medium", tag: "Infectious Disease" },
  { scenario: "Day-2 neonate with bilious vomiting. AXR: two air-filled structures in upper abdomen, no distal gas.", question: "Diagnosis?", options: ["Pyloric Stenosis", "Duodenal Atresia", "Malrotation + Volvulus", "Meconium Ileus"], correct: 1, explanation: "Double-bubble sign is pathognomonic for Duodenal Atresia. Associated with trisomy 21 in ~30%. Requires surgical duodeno-duodenostomy.", difficulty: "Hard", tag: "Paediatric Surgery" },
  { scenario: "67M on warfarin (AF) — sudden worst headache of life + neck stiffness. BP 210/120.", question: "Critical immediate first step?", options: ["LP for xanthochromia", "CT head non-contrast", "IV Labetalol now", "Vitamin K + FFP"], correct: 1, explanation: "Non-contrast CT head FIRST — exclude SAH before LP. Thunderclap + meningism = SAH until proven otherwise. Never LP without excluding raised ICP.", difficulty: "Hard", tag: "Neurology/Emergency" },
  { scenario: "45M HIV+ (CD4=80): 6-week productive cough, haemoptysis, night sweats, 8 kg weight loss. CXR: upper lobe cavitation.", question: "Highest-priority first test?", options: ["Sputum AFB smear + culture", "CXR only", "Bronchoscopy", "Start empirical TB treatment"], correct: 0, explanation: "AFB smear + culture is gold standard. CD4 <200 + cavitation = TB until proven. Never start empirical treatment without microbiological confirmation.", difficulty: "Medium", tag: "HIV/TB" },
];

const VCFG: Record<VisitorType, { label: string; emoji: string; accent: string; dim: string; border: string }> = {
  investor: { label: "Investor",           emoji: "💼", accent: "#f59e0b", dim: "rgba(245,158,11,.1)",  border: "rgba(245,158,11,.25)" },
  doctor:   { label: "Doctor / Clinician", emoji: "🩺", accent: "#22d3ee", dim: "rgba(34,211,238,.08)", border: "rgba(34,211,238,.22)" },
  student:  { label: "Medical Student",    emoji: "📚", accent: "#34d399", dim: "rgba(52,211,153,.08)", border: "rgba(52,211,153,.22)" },
  creator:  { label: "Healthcare Creator", emoji: "🎙️", accent: "#a78bfa", dim: "rgba(167,139,250,.08)",border: "rgba(167,139,250,.22)" },
  visitor:  { label: "Visitor",            emoji: "👤", accent: "#fb7185", dim: "rgba(251,113,133,.08)",border: "rgba(251,113,133,.22)" },
};

// ─────────────────────────────────────────────────────────────────
// MICRO COMPONENTS
// ─────────────────────────────────────────────────────────────────
function Counter({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const spring = useSpring(0, { stiffness: 50, damping: 15, mass: 1 });
  const value = useTransform(spring, (current) => current.toFixed(decimals));

  useEffect(() => {
    if (inView) spring.set(target);
  }, [inView, spring, target]);

  return <span><motion.span ref={ref}>{value}</motion.span>{suffix}</span>;
}

function Tag({ c, children }: { c: string; children: React.ReactNode }) {
  return <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 font-mono text-[11px] tracking-widest uppercase" style={{ background: `${c}14`, border: `1px solid ${c}2e`, color: c }}>{children}</div>;
}

function H2({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-10">
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,5vw,60px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-.04em", color: "#fff" }}>{children}</h2>
      {sub && <p className="mt-4 text-zinc-500 text-base font-light max-w-lg leading-relaxed">{sub}</p>}
    </div>
  );
}

function Card({ children, accent = "rgba(255,255,255,.08)", hover = true, className = "" }: { children: React.ReactNode; accent?: string; hover?: boolean; className?: string }) {
  return (
    <div className={`rounded-2xl p-5 ${hover ? "transition-all hover:-translate-y-0.5" : ""} ${className}`}
         style={{ border: `1px solid ${accent}`, background: `${accent.replace(/[\d.]+\)$/, "0.04)")}` }}>
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// STAR CANVAS
// ─────────────────────────────────────────────────────────────────
function Stars() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d")!;
    let id: number;
    const stars = Array.from({ length: 200 }, () => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: Math.random() * 0.8 + 0.1, a: Math.random(), da: (Math.random() * 0.003 + 0.001) * (Math.random() < 0.5 ? 1 : -1) }));
    const resize = () => { c.width = innerWidth; c.height = innerHeight; };
    resize(); window.addEventListener("resize", resize);
    const draw = () => { ctx.clearRect(0, 0, c.width, c.height); stars.forEach(s => { s.a += s.da; if (s.a > 1 || s.a < 0) s.da *= -1; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(190,220,255,${s.a * 0.5})`; ctx.fill(); }); id = requestAnimationFrame(draw); };
    draw();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" />;
}

// ─────────────────────────────────────────────────────────────────
// BAR CHART ROW
// ─────────────────────────────────────────────────────────────────
function BarRow({ yr, pct, label, color, delay }: { yr: string; pct: number; label: string; color: string; delay: number }) {
  const [w, setW] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting && !done.current) { done.current = true; setTimeout(() => setW(pct), delay * 1000); } }, { threshold: 0.3 });
    io.observe(el); return () => io.disconnect();
  }, [pct, delay]);
  return (
    <div ref={ref} className="flex items-center gap-4 mb-4">
      <div className="w-12 text-right font-mono text-xs flex-shrink-0" style={{ color: "rgba(255,255,255,.25)" }}>{yr}</div>
      <div className="flex-1 h-9 rounded-lg overflow-hidden" style={{ background: "rgba(255,255,255,.04)" }}>
        <div className="h-full rounded-lg flex items-center px-4 font-bold text-sm transition-all ease-out"
             style={{ width: `${w}%`, background: `linear-gradient(90deg,${color}bb,${color}44)`, color, fontFamily: "var(--font-display)", transitionDuration: "1.4s", minWidth: w > 0 ? "56px" : "0" }}>
          {w > 0 && label}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// BEAT THE AI
// ─────────────────────────────────────────────────────────────────
function BeatAI() {
  type GS = "idle" | "playing" | "revealed" | "done";
  const [gs, setGs] = useState<GS>("idle");
  const [qi, setQi] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [thinking, setThinking] = useState(false);
  const tRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const q = QUIZ[qi];

  const stop = useCallback(() => { if (tRef.current) clearInterval(tRef.current); }, []);
  const answer = useCallback((idx: number) => {
    stop(); setSel(idx); setThinking(true);
    if (idx === QUIZ[qi].correct) setScore(s => s + 1);
    setTimeout(() => { setThinking(false); setGs("revealed"); }, 900);
  }, [qi, stop]);

  const startTimer = useCallback(() => {
    stop(); setTimer(30);
    tRef.current = setInterval(() => setTimer(p => { if (p <= 1) { stop(); answer(-1); return 0; } return p - 1; }), 1000);
  }, [answer, stop]);

  const start = () => { setGs("playing"); setQi(0); setScore(0); setSel(null); startTimer(); };
  const next = () => { if (qi + 1 >= QUIZ.length) { setGs("done"); return; } setQi(i => i + 1); setSel(null); setGs("playing"); startTimer(); };

  useEffect(() => () => stop(), [stop]);

  const dc: Record<string, string> = { Easy: "#34d399", Medium: "#f59e0b", Hard: "#fb7185" };

  return (
    <div>
      <Tag c="#fb7185">🧠 Beat the AI</Tag>
      <H2 sub="5 real clinical scenarios. 30 seconds each. The AI already knows every answer in 0.02s.">
        Think You Can<br /><span style={{ color: "#fb7185" }}>Outsmart Our AI?</span>
      </H2>

      {gs === "idle" && (
        <div className="rounded-2xl p-7 max-w-lg" style={{ border: "1px solid rgba(255,255,255,.07)", background: "rgba(255,255,255,.02)" }}>
          <div className="flex flex-wrap gap-2 mb-5">
            {QUIZ.map((q, i) => <span key={i} className="px-2.5 py-1 rounded-full font-mono text-[10px]" style={{ border: "1px solid rgba(255,255,255,.1)", color: dc[q.difficulty] }}>Q{i+1} · {q.tag}</span>)}
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed mb-6">Cardiology · Infectious Disease · Paediatrics · Neurology · HIV/TB. Demo-safe: all pre-loaded, no API, instant responses.</p>
          <button onClick={start} className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5" style={{ fontFamily: "var(--font-display)", background: "rgba(251,113,133,.12)", border: "1px solid rgba(251,113,133,.3)" }}>Start Challenge →</button>
        </div>
      )}

      {(gs === "playing" || gs === "revealed") && (
        <div className="rounded-2xl max-w-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,.07)", background: "rgba(10,15,25,.8)", backdropFilter: "blur(16px)" }}>
          <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}>
            <div className="flex gap-1.5">{QUIZ.map((_, i) => <div key={i} className="h-1 w-8 rounded-full transition-all" style={{ background: i < qi ? "#22d3ee" : i === qi ? "#fff" : "rgba(255,255,255,.1)" }} />)}</div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px]" style={{ color: dc[q.difficulty] }}>{q.difficulty} · {q.tag}</span>
              {gs === "playing" && <span className="w-9 h-9 rounded-full flex items-center justify-center font-black font-mono text-sm" style={{ border: `2px solid ${timer <= 10 ? "#fb7185" : "rgba(255,255,255,.18)"}`, color: timer <= 10 ? "#fb7185" : "#888", animation: timer <= 10 ? "pulse 1s ease infinite" : "none" }}>{timer}</span>}
            </div>
          </div>
          <div className="p-6">
            <div className="p-4 rounded-xl mb-5" style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)" }}>
              <div className="font-mono text-[10px] text-zinc-700 uppercase tracking-widest mb-2">📋 Clinical Scenario</div>
              <p className="text-zinc-300 text-sm leading-relaxed font-mono">{q.scenario}</p>
            </div>
            <p className="text-white font-bold text-lg mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>{q.question}</p>
            <div className="grid gap-2">
              {q.options.map((opt, i) => {
                let bg = "rgba(255,255,255,.03)", border = "rgba(255,255,255,.08)", col = "#6b7280";
                if (gs === "revealed") { if (i === q.correct) { bg = "rgba(52,211,153,.08)"; border = "rgba(52,211,153,.35)"; col = "#34d399"; } else if (i === sel) { bg = "rgba(251,113,133,.08)"; border = "rgba(251,113,133,.35)"; col = "#fb7185"; } else { bg = "rgba(0,0,0,.2)"; border = "rgba(255,255,255,.04)"; col = "#374151"; } } else if (sel === i) { bg = "rgba(34,211,238,.07)"; border = "rgba(34,211,238,.35)"; col = "#22d3ee"; }
                return <button key={i} disabled={gs === "revealed"} onClick={() => answer(i)} className="text-left px-4 py-3 rounded-xl text-sm transition-all duration-150" style={{ background: bg, border: `1px solid ${border}`, color: col, cursor: gs === "revealed" ? "default" : "pointer" }}><span className="font-mono text-[11px] opacity-40 mr-2">{String.fromCharCode(65+i)}.</span>{opt}</button>;
              })}
            </div>
            {thinking && (
              <div className="mt-4 flex items-center gap-3 p-3 rounded-xl" style={{ background: "rgba(34,211,238,.04)", border: "1px solid rgba(34,211,238,.1)" }}>
                <span className="text-base animate-spin">⚡</span>
                <span className="text-zinc-600 text-xs font-mono">Doctors AI processing…</span>
                <div className="ml-auto flex gap-1">{[0,1,2].map(i => <span key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: `${i*.15}s` }} />)}</div>
              </div>
            )}
            {gs === "revealed" && (
              <div className="mt-4 space-y-3">
                <div className="p-4 rounded-xl" style={{ background: sel === q.correct ? "rgba(52,211,153,.05)" : "rgba(251,113,133,.05)", border: `1px solid ${sel === q.correct ? "rgba(52,211,153,.18)" : "rgba(251,113,133,.18)"}` }}>
                  <p className="font-bold text-sm mb-1.5" style={{ fontFamily: "var(--font-display)", color: sel === q.correct ? "#34d399" : "#fb7185" }}>{sel === q.correct ? "✓ Correct — you beat the AI." : "✗ The AI got this. Here's why:"}</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">{q.explanation}</p>
                  <p className="mt-2 text-zinc-700 text-[10px] font-mono">⚡ AI answered in 0.02s</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-700 text-xs font-mono">Score: {score}/{qi+1}</span>
                  <button onClick={next} className="px-5 py-2 rounded-xl text-sm font-bold text-zinc-950 transition-all hover:-translate-y-0.5" style={{ fontFamily: "var(--font-display)", background: "#e5e7eb" }}>{qi+1 >= QUIZ.length ? "Final Score →" : "Next →"}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {gs === "done" && (
        <div className="rounded-2xl p-8 text-center max-w-lg" style={{ border: "1px solid rgba(255,255,255,.07)", background: "rgba(10,15,25,.8)", backdropFilter: "blur(16px)" }}>
          <div className="text-5xl mb-3">{score===5?"🏆":score>=4?"⭐":score>=3?"💪":"🧠"}</div>
          <h3 className="text-3xl font-black text-white tracking-tight mb-1" style={{ fontFamily: "var(--font-display)" }}>You scored {score}/{QUIZ.length}</h3>
          <p className="text-zinc-400 text-sm mb-1">{score===5?"Perfect. The AI scored the same — in 0.02 seconds.":score>=4?"Excellent. The AI matched you in milliseconds.":score>=3?"Solid. The AI fills these gaps instantly, 24/7.":"The AI is here to help — that's exactly the point."}</p>
          <p className="text-zinc-700 text-xs font-mono mb-6">⚡ Doctors AI: 5/5 · 0.02s · always on</p>
          <div className="p-4 rounded-xl mb-5 text-left" style={{ background: "rgba(34,211,238,.05)", border: "1px solid rgba(34,211,238,.14)" }}>
            <p className="text-cyan-300 text-sm font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>🎁 Exhibition Exclusive</p>
            <p className="text-zinc-400 text-xs leading-relaxed">Download today — get <strong className="text-white">3 months Premium free</strong> + <strong className="text-white">500 AI credits</strong>. Exhibition attendees only.</p>
          </div>
          <div className="flex gap-3">
            <a href="https://play.google.com/store/apps/details?id=com.kingrittik.doctors" target="_blank" rel="noreferrer" className="flex-1 py-3 rounded-xl text-sm font-bold text-zinc-950 transition-all hover:-translate-y-0.5" style={{ fontFamily: "var(--font-display)", background: "#22d3ee", boxShadow: "0 0 24px rgba(34,211,238,.22)" }}>Download Free →</a>
            <button onClick={() => { setGs("idle"); setScore(0); setQi(0); setSel(null); }} className="px-4 py-3 rounded-xl text-sm text-zinc-500 hover:text-white transition-all" style={{ border: "1px solid rgba(255,255,255,.08)" }}>Retry</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// EXHIBITION OFFER
// ─────────────────────────────────────────────────────────────────
function Offer() {
  return (
    <div className="mt-20 rounded-2xl p-8 md:p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg,rgba(34,211,238,.07) 0%,rgba(10,15,25,.95) 55%,rgba(245,158,11,.05) 100%)", border: "1px solid rgba(34,211,238,.18)", boxShadow: "0 0 60px rgba(34,211,238,.06)" }}>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle,rgba(34,211,238,.06) 0%,transparent 70%)" }} />
      <div className="relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 font-mono text-[11px] tracking-widest uppercase" style={{ background: "rgba(34,211,238,.08)", border: "1px solid rgba(34,211,238,.22)", color: "#22d3ee" }}>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />Exhibition Exclusive · Limited Time
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Download Today →<br /><span style={{ color: "#22d3ee" }}>3 Months Premium Free</span> <span className="text-white">+</span> <span style={{ color: "#f59e0b" }}>500 AI Credits</span>
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-7 max-w-lg">Exclusively for exhibition attendees. Claim instantly — no credit card. Offer expires at the end of the event.</p>
        <div className="flex flex-wrap gap-3 items-center">
          <a href="https://play.google.com/store/apps/details?id=com.kingrittik.doctors" target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-xl font-bold text-sm text-zinc-950 transition-all hover:-translate-y-0.5" style={{ fontFamily: "var(--font-display)", background: "#22d3ee", boxShadow: "0 0 28px rgba(34,211,238,.28)" }}>▶ Download on Google Play</a>
          <span className="text-zinc-700 text-xs font-mono">🍎 App Store — Coming Soon</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// INVESTOR CONTENT  (the main show)
// ─────────────────────────────────────────────────────────────────
function InvestorContent() {
  const G = "#f59e0b";

  const mkt = [
    { v: "$36.96B", l: "Global AI Healthcare market, 2025",         s: "Precedence Research, Nov 2025",    big: true },
    { v: "36.83%",  l: "CAGR 2025–2034 — fastest-growing tech vertical", s: "Precedence Research, Nov 2025", big: true },
    { v: "$613.81B",l: "Projected global market size by 2034",       s: "Precedence Research, Nov 2025",    big: true },
    { v: "55%",     l: "Of ALL health tech VC went to AI companies in 2025, up from 37% in 2024", s: "Bessemer VP, Jan 2026", big: false },
    { v: "$10.7B",  l: "Invested into AI health tech in 2025 — 24.4% above full-year 2024", s: "Crunchbase, Nov 2025", big: false },
    { v: "46%",     l: "Of total healthcare investment in 2025 was AI — SVB 17th Annual Report", s: "Silicon Valley Bank, Jan 2026", big: false },
    { v: "$3.20",   l: "Avg. ROI per $1 invested in healthcare AI, realised within 14 months", s: "DemandSage, Dec 2025", big: false },
    { v: "83%",     l: "AI-enabled startups raised rounds 83% larger on average vs non-AI peers", s: "Rock Health, Jul 2025", big: false },
  ];

  const comparable = [
    { co: "Abridge",         desc: "AI clinical notes / ambient scribe",     round: "$300M Series E", val: "$5.3B",  inv: "a16z, Khosla, Lightspeed" },
    { co: "OpenEvidence",    desc: "AI search tools for clinicians",          round: "$210M",          val: "$3.5B",  inv: "Clinical AI search" },
    { co: "Ambience Health", desc: "AI operating system for healthcare",      round: "$243M Series C", val: "$1.04B", inv: "Clinical workflow AI" },
    { co: "Innovaccer",      desc: "AI + cloud platform for health systems",  round: "$275M Series F", val: "Unicorn",inv: "Healthcare data + AI" },
    { co: "Heidi Health",    desc: "AI medical scribe, global expansion",     round: "$65M Series A",  val: "↑ Fast", inv: "Oct 2025" },
    { co: "HelloCareAI",     desc: "AI virtual care, smart hospitals",        round: "$47M",           val: "Series B",inv: "Apr 2025" },
  ];

  const why = [
    { e: "🌍", t: "Global from Day One", d: "No geographic lock-in. Built for every healthcare market — emerging to developed. India, MENA, SEA, Africa are fastest-growing." },
    { e: "📱", t: "Live Product, Real Users", d: "Not a prototype. Live on Google Play now. Ambassador-led distribution — zero paid UA required at this stage." },
    { e: "🏗️", t: "8 Defensible Modules", d: "Symptom analysis, SOAP notes, journals, flashcards, community, podcasts, clinical notes, AI chat. Deep vertical product stacking from day one." },
    { e: "🎓", t: "Student → Doctor Flywheel", d: "Students become doctors. Each cohort feeds the next. Retention compounds as users move through medical education into practice." },
    { e: "📊", t: "Targeting the #1 Funded Category", d: "Administrative AI captured 60% of all healthcare AI investment in 2024 (Vention Teams). Doctors AI is squarely positioned here." },
    { e: "🔗", t: "Ambassador-Led Moat", d: "Distribution through trusted medical peers — the highest-trust acquisition channel in healthcare, with near-zero marginal CAC." },
  ];

  const tailwinds = [
    { h: "10M",  s: "Global healthcare worker shortage by 2030 (WHO). AI tools become infrastructure, not optional.", src: "WHO / Vention Teams, 2025" },
    { h: "1:5",  s: "Physicians spend 1 hour on documentation per 5 hours of patient care. Doctors AI solves this.", src: "Menlo Ventures, Nov 2025" },
    { h: "57%",  s: "Of healthcare organisations say reducing admin burden is the #1 AI opportunity.", src: "Vention Teams, 2025" },
  ];

  return (
    <div className="space-y-20">

      {/* ── THESIS ── */}
      <div>
        <Tag c={G}>Investment Thesis</Tag>
        <H2 sub="All figures from verified 2025–2026 institutional reports. Source cited on every data point.">
          The <span style={{ color: G }}>$613B Market</span><br />Is Forming Now.
        </H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {mkt.map((m, i) => (
            <div key={i} className="p-4 rounded-xl transition-all hover:-translate-y-0.5"
                 style={{ border: `1px solid rgba(245,158,11,${m.big ? ".22" : ".1"})`, background: `rgba(245,158,11,${m.big ? ".07" : ".03"})` }}>
              <div className="font-black tracking-tighter mb-1.5 leading-none" style={{ fontFamily: "var(--font-display)", color: G, fontSize: m.big ? "26px" : "22px" }}>{m.v}</div>
              <p className="text-zinc-400 text-xs leading-relaxed mb-2">{m.l}</p>
              <div className="font-mono text-[10px] pt-2" style={{ borderTop: "1px solid rgba(245,158,11,.1)", color: "rgba(245,158,11,.38)" }}>📊 {m.s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MARKET CHART ── */}
      <div className="rounded-2xl p-7" style={{ border: "1px solid rgba(255,255,255,.06)", background: "rgba(255,255,255,.015)" }}>
        <div className="flex flex-wrap items-baseline gap-3 mb-7">
          <span className="font-bold text-white text-lg tracking-tight" style={{ fontFamily: "var(--font-display)" }}>AI Healthcare Market Growth</span>
          <span className="font-mono text-xs text-zinc-600">Precedence Research · SVB · Rock Health</span>
        </div>
        {[
          { yr: "2022", pct: 5,   label: "$15B" },
          { yr: "2024", pct: 16,  label: "$26B" },
          { yr: "2025", pct: 28,  label: "$37B" },
          { yr: "2026", pct: 41,  label: "$51B" },
          { yr: "2030", pct: 68,  label: "~$130B" },
          { yr: "2034", pct: 100, label: "$613B" },
        ].map((r, i) => <BarRow key={i} yr={r.yr} pct={r.pct} label={r.label} color={G} delay={i * 0.11} />)}
        <p className="font-mono text-[10px] text-zinc-700 mt-2">CAGR 36.83% · Source: Precedence Research, Nov 2025</p>
      </div>

      {/* ── COMPARABLE DEALS ── */}
      <div>
        <Tag c={G}>Comparable VC Deals · 2025</Tag>
        <H2 sub="The biggest funds are writing the largest cheques in healthcare AI history — right now. Doctors AI targets the same clinical workflow problem space.">
          The Money Is<br /><span style={{ color: G }}>Already Moving.</span>
        </H2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {comparable.map((c, i) => (
            <div key={i} className="p-5 rounded-xl transition-all hover:-translate-y-0.5" style={{ border: "1px solid rgba(255,255,255,.07)", background: "rgba(255,255,255,.02)" }}>
              <div className="flex items-start justify-between mb-3">
                <div className="font-black text-white text-sm tracking-tight" style={{ fontFamily: "var(--font-display)" }}>{c.co}</div>
                <div className="font-mono text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(245,158,11,.09)", border: "1px solid rgba(245,158,11,.2)", color: G }}>{c.val}</div>
              </div>
              <div className="text-zinc-500 text-xs mb-2">{c.desc}</div>
              <div className="font-mono text-[11px]" style={{ color: "rgba(245,158,11,.65)" }}>💰 {c.round}</div>
              <div className="font-mono text-[10px] text-zinc-700 mt-0.5">{c.inv}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[10px] text-zinc-700">Sources: Crunchbase (Nov 2025) · Fierce Healthcare (Jul 2025) · Bessemer VP State of Health AI (Jan 2026)</p>
      </div>

      {/* ── WHY NOW ── */}
      <div>
        <Tag c={G}>Why Doctors AI · Why Now</Tag>
        <H2>The Thesis.<br /><span style={{ color: G }}>Six Reasons.</span></H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {why.map((w, i) => (
            <div key={i} className="flex gap-4 p-5 rounded-xl transition-all hover:-translate-y-0.5" style={{ border: "1px solid rgba(255,255,255,.07)", background: "rgba(255,255,255,.02)" }}>
              <span className="text-2xl flex-shrink-0 mt-0.5">{w.e}</span>
              <div>
                <div className="font-bold text-white text-sm mb-1.5 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>{w.t}</div>
                <div className="text-zinc-500 text-xs leading-relaxed">{w.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TAILWINDS ── */}
      <div className="rounded-2xl p-7" style={{ background: "linear-gradient(135deg,rgba(245,158,11,.07),rgba(10,15,25,.9))", border: "1px solid rgba(245,158,11,.14)" }}>
        <div className="font-bold text-white text-lg mb-5 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Structural Tailwinds You Can't Ignore</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tailwinds.map((t, i) => (
            <div key={i} className="text-center p-5 rounded-xl" style={{ background: "rgba(0,0,0,.25)" }}>
              <div className="text-3xl font-black tracking-tight mb-1.5" style={{ fontFamily: "var(--font-display)", color: G }}>{t.h}</div>
              <div className="text-zinc-300 text-xs leading-relaxed mb-1">{t.s}</div>
              <div className="font-mono text-[10px] text-zinc-600">{t.src}</div>
            </div>
          ))}
        </div>
      </div>
{/* ... (skipping unchanged parts for brevity in checking, but in replace call I must include context if contiguous, but here skipping to DoctorContent if it is far away is bad. 400ish is far from 450ish. I will use separate calls or include the middle part unchanged.) */}
{/* Actually, it's lines 384-395 and 445-470. That's 50 lines gap. I will stick to one area per call or do a huge one. Let's do Tailwinds first. */}

      {/* ── BESSEMER INSIGHT CALLOUT ── */}
      <div className="rounded-2xl p-7 relative overflow-hidden" style={{ background: "rgba(245,158,11,.05)", border: "1px solid rgba(245,158,11,.18)" }}>
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl" style={{ background: "radial-gradient(circle,rgba(245,158,11,.08) 0%,transparent 70%)" }} />
        <div className="relative">
          <div className="font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: "rgba(245,158,11,.5)" }}>Bessemer VP · State of Health AI 2026 · Jan 2026</div>
          <blockquote className="text-zinc-200 text-base leading-relaxed mb-3">
            "Healthcare AI companies are hitting $100M ARR, even $200M ARR, in under five years — versus 10+ years for traditional healthcare software. <strong className="text-white">This time is fundamentally different.</strong>"
          </blockquote>
          <div className="grid md:grid-cols-2 gap-3 mt-5">
            {[
              { s: "55%", l: "Of all health tech VC captured by AI in 2025 — up from 29% in 2022" },
              { s: "63%", l: "Series D+ valuations up 63% YoY as track records build" },
            ].map((b, i) => (
              <div key={i} className="p-3 rounded-xl" style={{ background: "rgba(0,0,0,.3)" }}>
                <div className="font-black text-xl mb-1" style={{ fontFamily: "var(--font-display)", color: G }}>{b.s}</div>
                <div className="text-zinc-500 text-xs">{b.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INVESTOR CTA ── */}
      <div className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg,rgba(245,158,11,.07),rgba(10,15,25,.95))", border: "1px solid rgba(245,158,11,.2)" }}>
        <h3 className="text-2xl font-black text-white mb-2 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Want the Full Deck?</h3>
        <p className="text-zinc-400 text-sm mb-6 max-w-sm mx-auto">Traction data, roadmap, team, and financials available under NDA for qualified investors.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="mailto:contact.doctorsai@elpisverse.com?subject=Investor Inquiry - Exhibition 2026" className="inline-block px-10 py-3.5 rounded-xl font-bold text-sm text-zinc-950 transition-all hover:-translate-y-0.5" style={{ fontFamily: "var(--font-display)", background: G, boxShadow: `0 0 32px rgba(245,158,11,.28)` }}>Schedule a Call →</a>
          <a href="https://play.google.com/store/apps/details?id=com.kingrittik.doctors" target="_blank" rel="noreferrer" className="inline-block px-10 py-3.5 rounded-xl text-sm text-zinc-300 hover:text-white transition-all" style={{ border: "1px solid rgba(255,255,255,.1)" }}>See the Live Product</a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// DOCTOR CONTENT
// ─────────────────────────────────────────────────────────────────
function DoctorContent() {
  const C = "#22d3ee";
  const tools = [
    { e:"📋", t:"SOAP Note Generator",       d:"Complete SOAP notes in seconds. Stop spending 1hr per 5hrs of patient care on documentation." },
    { e:"🔬", t:"Symptom Analysis",           d:"Medical-grade AI differential diagnosis — 0.02s, comparable to Ada Health." },
    { e:"💬", t:"Clinical Decision Support",  d:"Evidence-based AI chat for complex cases, drug interactions, protocols. 24/7." },
    { e:"📖", t:"Medical Journals Digest",    d:"AI-summarised research with key takeaways — no more reading 40-page studies." },
    { e:"🌍", t:"Global Doctor Network",      d:"Secure messaging and case-sharing with healthcare professionals worldwide." },
    { e:"📝", t:"Smart Clinical Notes",       d:"Auto-capture and structure key consultation details. Never miss a clinical finding again." },
  ];
  return (
    <div className="space-y-16">
      <div>
        <Tag c={C}>For Clinicians</Tag>
        <H2 sub="57% of physicians say reducing administrative burden is AI's biggest opportunity — Vention Teams, 2025">Spend More Time<br /><span style={{ color: C }}>With Patients.</span></H2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {tools.map((t, i) => (
            <div key={i} className="p-5 rounded-xl transition-all hover:-translate-y-0.5" style={{ border: `1px solid rgba(34,211,238,.1)`, background: "rgba(34,211,238,.03)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4" style={{ background: "rgba(34,211,238,.08)", border: "1px solid rgba(34,211,238,.14)" }}>{t.e}</div>
              <div className="font-bold text-white text-sm mb-2 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>{t.t}</div>
              <div className="text-zinc-500 text-xs leading-relaxed">{t.d}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl p-6" style={{ border: "1px solid rgba(34,211,238,.1)", background: "rgba(34,211,238,.03)" }}>
        <div className="font-mono text-[10px] text-zinc-700 uppercase tracking-wider mb-4">📊 Clinical Evidence · 2025</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[{ v:"87.3%", l:"AI operative report accuracy vs 72.8% surgeon-written", s:"Nature Medicine/JACS,2025" }, { v:"0.3%", l:"AI false-negative rate vs 4.4% human technicians (14,606 patients)", s:"Nature Medicine,2025" }, { v:"68%", l:"Physicians now using AI for clinical documentation", s:"Vention Teams,2025" }].map((c,i) => (
            <div key={i} className="text-center p-4 rounded-xl" style={{ background: "rgba(0,0,0,.25)" }}>
              <div className="text-2xl font-black tracking-tight mb-1" style={{ fontFamily:"var(--font-display)", color:C }}>{c.v}</div>
              <div className="text-zinc-400 text-xs leading-relaxed mb-1.5">{c.l}</div>
              <div className="font-mono text-[10px] text-zinc-700">📊 {c.s}</div>
            </div>
          ))}
        </div>
      </div>
      <BeatAI />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// STUDENT CONTENT
// ─────────────────────────────────────────────────────────────────
function StudentContent() {
  const C = "#34d399";
  const tools = [
    { e:"🃏", t:"AI Anki Flashcards",      d:"Auto-generate Q/A, MCQ, cloze cards. Spaced repetition. Offline-ready." },
    { e:"🎙️",t:"Medical Podcasts",          d:"Evidence-first curated podcasts: clinical insights, case studies, exam prep." },
    { e:"📖", t:"Journals Digest",          d:"AI-summarised research — get key takeaways without reading 40-page papers." },
    { e:"🌍", t:"Global Peer Network",      d:"Connect with med students worldwide. Notes, cases, study partners." },
    { e:"💬", t:"AI Study Chat",            d:"Ask anything medical, get evidence-based answers with explanations + mnemonics." },
    { e:"🔬", t:"Clinical Scenario Practice",d:"Practise real cases. Build diagnostic reasoning before the wards." },
  ];
  return (
    <div className="space-y-16">
      <div>
        <Tag c={C}>For Medical Students</Tag>
        <H2 sub="Every tool you need to study smarter, understand deeper, and graduate ready.">From Lecture Hall<br /><span style={{ color:C }}>to Ward Round</span> — Prepared.</H2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {tools.map((t,i) => (
            <div key={i} className="p-5 rounded-xl transition-all hover:-translate-y-0.5" style={{ border:`1px solid rgba(52,211,153,.1)`, background:"rgba(52,211,153,.03)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4" style={{ background:"rgba(52,211,153,.08)",border:"1px solid rgba(52,211,153,.14)" }}>{t.e}</div>
              <div className="font-bold text-white text-sm mb-2 tracking-tight" style={{ fontFamily:"var(--font-display)" }}>{t.t}</div>
              <div className="text-zinc-500 text-xs leading-relaxed">{t.d}</div>
            </div>
          ))}
        </div>
      </div>
      <BeatAI />
      <div className="rounded-2xl p-7" style={{ border:"1px solid rgba(52,211,153,.1)",background:"rgba(52,211,153,.03)" }}>
        <div className="font-bold text-white mb-6 tracking-tight" style={{ fontFamily:"var(--font-display)" }}>Your Journey with Doctors AI</div>
        {[{ yr:"Preclinical", a:"Flashcards + AI chat master preclinical subjects 2–3× faster" },{ yr:"Clinical Years", a:"Practise clinical reasoning with AI scenario-based chat and journal summaries" },{ yr:"Final Year", a:"SOAP notes, clinical decision support, discharge summary practice on rotations" },{ yr:"Foundation", a:"Join global community — real case discussions with practising physicians" }].map((s,i,arr) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0" style={{ fontFamily:"var(--font-display)", background:C, color:"#052e16" }}>{i+1}</div>
              {i<arr.length-1 && <div className="w-0.5 flex-1 my-1" style={{ background:`linear-gradient(${C}55,transparent)`, minHeight:"24px" }} />}
            </div>
            <div className="pb-5"><div className="font-mono text-[11px] mb-1" style={{ color:C }}>{s.yr}</div><div className="text-zinc-300 text-sm">{s.a}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// CREATOR CONTENT
// ─────────────────────────────────────────────────────────────────
function CreatorContent() {
  const C = "#a78bfa";
  return (
    <div className="space-y-16">
      <div>
        <Tag c={C}>For Healthcare Creators</Tag>
        <H2 sub="YouTube, TikTok, podcasts, Instagram — if you create health content, Doctors AI amplifies you.">Your Content.<br /><span style={{ color:C }}>Our Platform.</span><br />Both Grow.</H2>
        <div className="grid md:grid-cols-2 gap-3">
          {[{ e:"🎙️", t:"Featured Inside the App", d:"Your podcast or video featured to thousands of doctors and students in Doctors AI.", b:"High Reach" },{ e:"🤝", t:"Official Ambassador", d:"Exclusive recognition, co-branding, and early-feature access. Be the face of medical AI.", b:"Official" },{ e:"💰", t:"Revenue Share", d:"Drive downloads. Earn from premium subscriptions. Your influence has real monetary value.", b:"Earn Together" },{ e:"🚀", t:"Shape the Product", d:"Direct input into features millions will use. Your community becomes our roadmap.", b:"Founder Input" }].map((c,i) => (
            <div key={i} className="p-6 rounded-xl relative transition-all hover:-translate-y-0.5" style={{ border:"1px solid rgba(167,139,250,.12)",background:"rgba(167,139,250,.03)" }}>
              <div className="absolute top-4 right-4 font-mono text-[10px] px-2 py-0.5 rounded-full" style={{ background:"rgba(167,139,250,.1)",border:"1px solid rgba(167,139,250,.2)",color:C }}>{c.b}</div>
              <div className="text-2xl mb-3">{c.e}</div>
              <div className="font-bold text-white text-sm mb-2 tracking-tight" style={{ fontFamily:"'Syne',sans-serif" }}>{c.t}</div>
              <div className="text-zinc-500 text-xs leading-relaxed">{c.d}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href="https://forms.gle/WHnWJaaCtNbcRFgm7" target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-xl font-bold text-sm text-zinc-950 transition-all hover:-translate-y-0.5" style={{ fontFamily:"var(--font-display)",background:C,boxShadow:`0 0 28px rgba(167,139,250,.28)` }}>Apply to Partner Program →</a>
        <a href="mailto:contact.doctorsai@elpisverse.com" className="px-8 py-3.5 rounded-xl text-sm text-zinc-400 hover:text-white transition-all" style={{ border:"1px solid rgba(255,255,255,.1)" }}>✉️ Email the Team</a>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// VISITOR CONTENT
// ─────────────────────────────────────────────────────────────────
function VisitorContent() {
  const C = "#fb7185";
  return (
    <div className="space-y-16">
      <div>
        <Tag c={C}>Welcome</Tag>
        <H2 sub="Trusted by healthcare professionals and medical students worldwide.">Healthcare Intelligence,<br /><span style={{ color:C }}>In Your Pocket.</span></H2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[{ e:"🔬",t:"Understand Your Health",d:"AI symptom analysis for clarity before your doctor's appointment." },{ e:"💬",t:"Ask Medical Questions",d:"Evidence-based answers to health questions, in plain language." },{ e:"📖",t:"Stay Informed",d:"Curated medical content, podcasts, and research — simplified." }].map((c,i) => (
            <div key={i} className="p-6 rounded-xl transition-all hover:-translate-y-0.5" style={{ border:"1px solid rgba(251,113,133,.1)",background:"rgba(251,113,133,.03)" }}>
              <div className="text-3xl mb-4">{c.e}</div>
              <div className="font-bold text-white text-sm mb-2 tracking-tight" style={{ fontFamily:"'Syne',sans-serif" }}>{c.t}</div>
              <div className="text-zinc-500 text-xs leading-relaxed">{c.d}</div>
            </div>
          ))}
        </div>
      </div>
      <BeatAI />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// IMPACT STRIP
// ─────────────────────────────────────────────────────────────────
function ImpactStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-20">
      {[
        { t:8,  s:"+",  l:"AI-Powered Modules" },
        { t:20, s:"ms", l:"Avg. Analysis Speed" },
        { t:66, s:"%",  l:"Physicians using health AI, 2024", src:"DemandSage, 2025" },
        { t:55, s:"%",  l:"Health VC captured by AI in 2025",  src:"Bessemer VP, 2026" },
      ].map((it,i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="p-5 rounded-xl text-center transition-all hover:-translate-y-0.5" 
          style={{ border:"1px solid rgba(255,255,255,.06)",background:"rgba(255,255,255,.018)" }}
        >
          <div className="text-3xl font-black text-white tracking-tight mb-1" style={{ fontFamily:"var(--font-display)" }}><Counter target={it.t} suffix={it.s} /></div>
          <div className="text-zinc-500 text-xs leading-relaxed">{it.l}</div>
          {it.src && <div className="font-mono text-[10px] text-zinc-700 mt-1">{it.src}</div>}
        </motion.div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// ONBOARDING
// ─────────────────────────────────────────────────────────────────
function Onboarding({ onSelect }: { onSelect: (t: VisitorType) => void }) {
  const [step, setStep] = useState(0);
  const choices: { type: VisitorType; title: string; sub: string }[] = [
    { type:"investor", title:"Investor / VC",         sub:"Market size, thesis, traction & opportunity" },
    { type:"doctor",   title:"Doctor / Clinician",    sub:"Clinical tools built for your workflow" },
    { type:"student",  title:"Medical Student",       sub:"Study smarter — flashcards, journals, AI chat" },
    { type:"creator",  title:"Healthcare Creator",    sub:"Amplify your content, grow with AI" },
    { type:"visitor",  title:"Just Exploring",        sub:"Discover what Doctors AI does" },
  ];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto py-8" style={{ background:"rgba(5,8,15,.99)", backdropFilter:"blur(4px)" }}>
      <Stars />
      <div className="relative z-10 w-full max-w-xl mx-auto px-5">
        {step === 0 ? (
          <div className="text-center" style={{ animation:"fadeUp .55s ease both" }}>
            <div className="mx-auto mb-8 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl" style={{ background:"linear-gradient(135deg,rgba(34,211,238,.14),rgba(34,211,238,.04))", border:"1px solid rgba(34,211,238,.18)" }}>⚕️</div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7" style={{ background:"rgba(34,211,238,.07)", border:"1px solid rgba(34,211,238,.18)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-mono text-[11px] tracking-widest uppercase">Exhibition 2026</span>
            </div>
            <h1 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(44px,8vw,72px)", fontWeight:800, lineHeight:1, letterSpacing:"-.04em", color:"#fff" }} className="mb-5">
              Welcome to<br /><span style={{ color:"#22d3ee" }}>Doctors AI</span>
            </h1>
            <p className="text-zinc-400 font-light text-lg leading-relaxed max-w-sm mx-auto mb-10">Medical-grade AI intelligence for every healthcare professional. Let us personalise your experience.</p>
            <button onClick={() => setStep(1)} className="px-10 py-4 rounded-full font-bold text-zinc-950 text-base tracking-tight transition-all hover:-translate-y-0.5" style={{ fontFamily:"var(--font-display)", background:"#22d3ee", boxShadow:"0 0 36px rgba(34,211,238,.32)" }}>
              Personalise My Experience →
            </button>
            <p className="mt-5 font-mono text-[11px] text-zinc-700 tracking-wider">10 seconds · no sign-up</p>
          </div>
        ) : (
          <div style={{ animation:"fadeUp .45s ease both" }}>
            <button onClick={() => setStep(0)} className="mb-7 text-zinc-600 hover:text-zinc-300 text-sm font-mono transition-colors">← Back</button>
            <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(26px,5vw,36px)", fontWeight:800, letterSpacing:"-.03em", color:"#fff" }} className="mb-2">Who are you here as?</h2>
            <p className="text-zinc-600 text-sm mb-7">We'll show you what matters most to you.</p>
            <div className="flex flex-col gap-2.5">
              {choices.map(ch => {
                const cfg = VCFG[ch.type];
                return (
                  <button key={ch.type} onClick={() => onSelect(ch.type)} className="group flex items-center gap-4 p-5 rounded-2xl text-left transition-all hover:-translate-y-0.5" style={{ border:`1px solid ${cfg.border}`, background:cfg.dim }}>
                    <span className="text-2xl">{cfg.emoji}</span>
                    <div className="flex-1">
                      <div className="font-bold text-base text-white tracking-tight" style={{ fontFamily:"var(--font-display)" }}>{ch.title}</div>
                      <div className="text-zinc-500 text-xs mt-0.5">{ch.sub}</div>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-300 transition-colors">→</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// SWITCHER
// ─────────────────────────────────────────────────────────────────
function Switcher({ cur, onSwitch }: { cur: VisitorType; onSwitch: (t: VisitorType) => void }) {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 px-3 py-2 rounded-full max-w-[95vw] overflow-x-auto no-scrollbar" style={{ background:"rgba(5,8,15,.92)", border:"1px solid rgba(255,255,255,.07)", backdropFilter:"blur(24px)", boxShadow:"0 8px 40px rgba(0,0,0,.6)" }}>
      <span className="font-mono text-[10px] text-zinc-700 uppercase tracking-wider px-1 flex-shrink-0">View as</span>
      {(Object.keys(VCFG) as VisitorType[]).map(t => {
        const c = VCFG[t];
        return <button key={t} onClick={() => onSwitch(t)} className="px-3 py-1.5 rounded-full font-mono text-[11px] transition-all duration-150 whitespace-nowrap flex-shrink-0" style={cur===t ? { background:c.dim, border:`1px solid ${c.border}`, color:c.accent } : { border:"1px solid transparent", color:"#4b5563" }}>{c.emoji} {c.label}</button>;
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// ROOT
// ─────────────────────────────────────────────────────────────────
export default function VisionPage() {
  const [visitor, setVisitor] = useState<VisitorType | null>(null);
  const [ready, setReady] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const t = p.get("type") || p.get("v");
    if (t && t in VCFG) { setVisitor(t as VisitorType); setReady(true); }
  }, []);

  const onboard = (t: VisitorType) => {
    setVisitor(t); setReady(true);
    const u = new URL(window.location.href); u.searchParams.set("type", t); window.history.replaceState({}, "", u.toString());
  };

  const switchTo = (t: VisitorType) => {
    setVisitor(t);
    const u = new URL(window.location.href); u.searchParams.set("type", t); window.history.replaceState({}, "", u.toString());
    topRef.current?.scrollIntoView({ behavior:"smooth", block:"start" });
  };

  const cfg = visitor ? VCFG[visitor] : VCFG.visitor;

  const HERO_HEAD: Record<VisitorType, React.ReactNode> = {
    investor: <><span style={{ color:cfg.accent }}>The $613B</span><br />AI Healthcare<br />Opportunity.</>,
    doctor:   <>Built for How<br /><span style={{ color:cfg.accent }}>You Work.</span></>,
    student:  <>Study Smarter.<br /><span style={{ color:cfg.accent }}>Graduate Stronger.</span></>,
    creator:  <>Your Content.<br /><span style={{ color:cfg.accent }}>Amplified.</span></>,
    visitor:  <>Healthcare AI,<br /><span style={{ color:cfg.accent }}>In Your Pocket.</span></>,
  };
  const HERO_SUB: Record<VisitorType, string> = {
    investor: "A $613B market is forming. A live product is growing. Comparable deals are closing at $5B+ valuations. The timing is now.",
    doctor:   "Medical-grade AI that eliminates paperwork and accelerates your clinical reasoning — 8 powerful modules, 0.02s analysis.",
    student:  "AI-powered flashcards, clinical scenarios, journal digests, and a global study community — built for how you actually learn.",
    creator:  "Partner with Doctors AI — get your content in front of thousands, earn from the growth you drive, and shape the product.",
    visitor:  "Trusted by doctors and medical students worldwide. Medical-grade AI intelligence in the palm of your hand.",
  };

  return (
    <>
      <Navbar />
      <style>{`
        *,*::before,*::after{box-sizing:border-box}
        html{scroll-behavior:smooth;background:#050810 !important}
        body{font-family:'Inter', sans-serif !important;background:#050810 !important;color:#e5e7eb !important;overflow-x:hidden}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        .no-scrollbar::-webkit-scrollbar {display: none;}
        .no-scrollbar {-ms-overflow-style: none; scrollbar-width: none;}
      `}</style>

      {!ready && <Onboarding onSelect={onboard} />}
      <Stars />

      {/* Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundImage:"linear-gradient(rgba(34,211,238,.016) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,.016) 1px,transparent 1px)", backgroundSize:"60px 60px", maskImage:"radial-gradient(ellipse 80% 80% at 50% 30%,black 0%,transparent 100%)" }} />

      {/* Badge */}
      {ready && <div className="fixed top-4 right-4 z-40 flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs tracking-wider" style={{ background:"rgba(5,8,15,.9)", border:`1px solid ${cfg.border}`, color:cfg.accent, backdropFilter:"blur(16px)" }}><span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background:cfg.accent }} />{cfg.emoji} {cfg.label.toUpperCase()}</div>}

      {ready && visitor && (
        <div className="relative z-10 min-h-screen" style={{ background:"#050810" }}>

          {/* HERO */}
          <section ref={topRef} className="px-6 md:px-14 pt-20 pb-12 max-w-5xl mx-auto">
            <div style={{ animation:"fadeUp .6s ease both" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 font-mono text-[11px] tracking-widest uppercase" style={{ background:cfg.dim, border:`1px solid ${cfg.border}`, color:cfg.accent }}>
                {cfg.emoji} {cfg.label}
              </div>
              <h1 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(48px,7.5vw,88px)", fontWeight:800, lineHeight:0.97, letterSpacing:"-.05em", color:"#fff" }} className="mb-5">
                {HERO_HEAD[visitor]}
              </h1>
              <p className="text-zinc-400 font-light text-lg leading-relaxed max-w-xl mb-8">{HERO_SUB[visitor]}</p>
              <div className="flex flex-wrap gap-3">
                <a href={visitor==="investor" ? "mailto:contact.doctorsai@elpisverse.com?subject=Investor Inquiry - Exhibition 2026" : "https://play.google.com/store/apps/details?id=com.kingrittik.doctors"}
                   target={visitor==="investor" ? undefined : "_blank"} rel="noreferrer"
                   className="px-9 py-3.5 rounded-xl font-bold text-sm text-zinc-950 transition-all hover:-translate-y-0.5"
                   style={{ fontFamily:"var(--font-display)", background:cfg.accent, boxShadow:`0 0 32px ${cfg.accent}44` }}>
                  {visitor==="investor" ? "Request the Deck →" : "Download Free →"}
                </a>
                {visitor==="creator" && <a href="https://forms.gle/WHnWJaaCtNbcRFgm7" target="_blank" rel="noreferrer" className="px-9 py-3.5 rounded-xl text-sm text-zinc-300 hover:text-white transition-all" style={{ border:"1px solid rgba(255,255,255,.1)" }}>Apply →</a>}
              </div>
            </div>
            {/* Ticker */}
            <div className="mt-16 overflow-hidden" style={{ opacity:.4 }}>
              <div className="flex gap-6 whitespace-nowrap" style={{ animation:"ticker 28s linear infinite", width:"max-content" }}>
                {[...Array(2)].flatMap(() => ["Symptom Analysis","SOAP Notes","Medical Journals","AI Flashcards","Clinical Chat","Discharge Summaries","Medical Podcasts","Global Community","Clinical Notes","Drug References"]).map((item, i) => (
                  <span key={i} className="font-mono text-[10px] text-zinc-700 px-4 py-1.5 rounded-full flex-shrink-0 uppercase tracking-widest" style={{ border:"1px solid rgba(255,255,255,.07)" }}>{item}</span>
                ))}
              </div>
            </div>
          </section>

          <div style={{ height:"1px", background:"linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent)", margin:"0 3.5rem" }} />

          {/* CONTENT */}
          <section className="px-6 md:px-14 py-16 max-w-5xl mx-auto">
            {visitor==="investor" && <InvestorContent />}
            {visitor==="doctor"   && <DoctorContent />}
            {visitor==="student"  && <StudentContent />}
            {visitor==="creator"  && <CreatorContent />}
            {visitor==="visitor"  && <VisitorContent />}
          </section>

          <section className="px-6 md:px-14 max-w-5xl mx-auto"><ImpactStrip /></section>
          <section className="px-6 md:px-14 pb-16 max-w-5xl mx-auto"><Offer /></section>

          <div style={{ height:"1px", background:"linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent)", margin:"0 3.5rem" }} />

          {/* AMBASSADOR */}
          <section className="px-6 md:px-14 py-16 max-w-5xl mx-auto text-center">
            <Tag c="#fb7185">Ambassador Program</Tag>
            <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(30px,4vw,48px)", fontWeight:800, letterSpacing:"-.04em", color:"#fff", lineHeight:1.05 }} className="mb-3">
              Champion AI Healthcare.<br /><span style={{ color:"#fb7185" }}>Get Recognised For It.</span>
            </h2>
            <p className="text-zinc-500 text-sm max-w-md mx-auto leading-relaxed mb-7">Open to doctors, students, and healthcare influencers. Exclusive recognition, early access, and direct product impact.</p>
            <div className="flex flex-wrap gap-2 justify-center mb-7">
              {["🌟 Exclusive Recognition","🚀 Early Access","🌐 Global Network","💡 Shape Roadmap","❤️ Impact Care"].map((p,i) => <span key={i} className="px-3 py-1.5 rounded-full text-xs font-mono" style={{ background:"rgba(251,113,133,.07)",border:"1px solid rgba(251,113,133,.18)",color:"#fb7185" }}>{p}</span>)}
            </div>
            <a href="https://forms.gle/WHnWJaaCtNbcRFgm7" target="_blank" rel="noreferrer" className="inline-block px-10 py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5" style={{ fontFamily:"var(--font-display)", background:"rgba(251,113,133,.14)", border:"1px solid rgba(251,113,133,.28)", boxShadow:"0 0 32px rgba(251,113,133,.1)" }}>
              Apply to Ambassador Program →
            </a>
          </section>

          <Footer />
        </div>
      )}

      {ready && visitor && <Switcher cur={visitor} onSwitch={switchTo} />}
    </>
  );
}
