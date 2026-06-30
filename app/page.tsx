'use client';

import { useState } from 'react';

const LOGO_PREVIEWS = [
  {
    bg: 'from-blue-600 to-cyan-400',
    letter: 'A',
    label: 'Apex',
  },
  {
    bg: 'from-emerald-500 to-teal-300',
    letter: 'N',
    label: 'Nova',
  },
  {
    bg: 'from-orange-500 to-amber-300',
    letter: 'Z',
    label: 'Zenn',
  },
  {
    bg: 'from-rose-500 to-pink-300',
    letter: 'S',
    label: 'Spark',
  },
];

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'AI-Powered',
    desc: 'State-of-the-art models trained on millions of professional logos.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Seconds, Not Days',
    desc: 'Skip the design agency back-and-forth. Get results instantly.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    title: 'Export Ready',
    desc: 'Download in SVG, PNG, and more — print or web, you are covered.',
  },
];

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <span className="font-semibold text-white text-sm tracking-tight">LogoAI</span>
        </div>
        <button className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 font-medium">
          Sign in
        </button>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-16 pb-24 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-neutral-300 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Now in public beta
        </div>

        {/* Heading */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          AI Logo Generator
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-neutral-400 max-w-md mx-auto mb-10 leading-relaxed">
          Create logos with AI in seconds
        </p>

        {/* CTA */}
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all duration-300"
          style={{
            background: hovered
              ? 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)'
              : 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
            boxShadow: hovered
              ? '0 0 40px rgba(59,130,246,0.5), 0 4px 24px rgba(59,130,246,0.3)'
              : '0 0 24px rgba(59,130,246,0.25), 0 4px 12px rgba(0,0,0,0.3)',
            transform: hovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
          }}
        >
          Start Generating
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(3px)' : 'translateX(0)' }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        {/* Social proof */}
        <p className="mt-6 text-xs text-neutral-500">
          Trusted by <span className="text-neutral-300 font-medium">12,000+</span> founders and designers
        </p>

        {/* Logo preview cards */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto w-full">
          {LOGO_PREVIEWS.map((item) => (
            <div
              key={item.label}
              className="group flex flex-col items-center gap-3 bg-white/5 border border-white/8 rounded-2xl p-5 backdrop-blur-sm hover:border-white/20 hover:bg-white/8 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.bg} flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-105 transition-transform duration-300`}
              >
                {item.letter}
              </div>
              <span className="text-xs text-neutral-500 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/8 py-20 px-6">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-10">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-blue-400">
                {f.icon}
              </div>
              <h3 className="font-semibold text-white text-sm">{f.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8 py-6 px-6 text-center text-xs text-neutral-600">
        &copy; {new Date().getFullYear()} LogoAI. All rights reserved.
      </footer>
    </main>
  );
}
