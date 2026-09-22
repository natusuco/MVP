import React, { useEffect, useState } from 'react';
import { useWallet } from '@/contexts/WalletContext';
import {
  Wallet,
  Bot,
  ShieldCheck,
  Target,
  PenLine,
  ScanSearch,
  KeyRound,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    n: '01',
    icon: Target,
    title: 'You set the intent',
    body: 'Choose the outcome: maximize yield, earn on stablecoins, or preserve capital. You define the constraints. The agent does not invent a mandate.',
  },
  {
    n: '02',
    icon: ScanSearch,
    title: 'The agent reads the market',
    body: 'Your Zeinyra agent continuously scans DeFi protocols for yield, liquidity, incentives, and risk — then proposes a reallocation.',
  },
  {
    n: '03',
    icon: PenLine,
    title: 'You sign every move',
    body: 'Execution is wallet-signed and settled on-chain. Zeinyra never holds your keys. Assets stay in your smart account.',
  },
];

const pillars = [
  {
    icon: Bot,
    title: 'A personal AI agent',
    body: 'Each wallet gets its own agent. It watches markets, evaluates strategies, and learns from on-chain history — under the permissions you set.',
  },
  {
    icon: Target,
    title: 'Intent, not manual trades',
    body: 'You state the goal once. The agent turns that intent into concrete actions across lending, liquidity, and yield protocols.',
  },
  {
    icon: ShieldCheck,
    title: 'Non-custodial by design',
    body: 'No private-key storage. No pooled custody. Every transaction needs your signature, and settlement stays visible on Base.',
  },
  {
    icon: KeyRound,
    title: 'Built for Base',
    body: 'Account abstraction (ERC-4337) lets the agent prepare gas-aware transactions while your ZeinyraAccount remains yours.',
  },
];

const problems = [
  'DeFi is spread across protocols, so managing a portfolio means living in a dozen interfaces.',
  'Yield decays if nobody is watching. Manual rebalancing is slow and easy to miss.',
  'Risk — liquidity, volatility, protocol exposure — is hard to see in one place, in real time.',
];

const LandingPage: React.FC = () => {
  const { openConnectModal } = useWallet();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#070A18] text-white overflow-x-hidden">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#070A18]/80 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
          <a href="#idea" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #00D4FF 0%, #00FFA3 100%)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#070A18" />
                <path d="M2 17L12 22L22 17" stroke="#070A18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="#070A18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-[15px] font-semibold tracking-tight">Zeinyra</span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-white/55">
            <a href="#idea" className="hover:text-white transition-colors">The idea</a>
            <a href="#how" className="hover:text-white transition-colors">How it works</a>
            <a href="#control" className="hover:text-white transition-colors">What you keep</a>
          </nav>

          <button
            type="button"
            onClick={openConnectModal}
            className="ml-auto md:ml-0 inline-flex items-center gap-2 h-9 px-3.5 sm:px-4 rounded-full text-sm font-semibold text-[#071018] transition-transform hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #00D4FF 0%, #5CFFC4 100%)' }}
          >
            <Wallet size={15} />
            Connect Wallet
          </button>
        </div>
      </header>

      <main>
        <section id="idea" className="relative scroll-mt-20 pt-28 sm:pt-32 pb-16 px-5 sm:px-8">
          <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[480px] rounded-full opacity-70"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(0,212,255,0.16) 0%, rgba(0,255,163,0.06) 38%, transparent 70%)',
            }}
          />

          <div className="relative max-w-6xl mx-auto">
            <p className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#7EE8FF] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3]" />
              Non-custodial DeFi autopilot · Base
            </p>

            <h1 className="max-w-4xl text-[2.15rem] sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] tracking-tight">
              An AI agent that optimizes your DeFi portfolio.
              <span className="block text-white/45 mt-1">You keep the keys.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed">
              Zeinyra deploys a personal agent for your wallet. You set the goal — higher yield,
              stablecoin income, or capital preservation. The agent scans protocols, weighs risk,
              and prepares the trades. You sign each one. Assets never leave your control.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-3xl">
              {[
                ['The product', 'Autonomous portfolio optimization'],
                ['How you steer it', 'Intents, not click-by-click trades'],
                ['Who holds the funds', 'You. Always. On your smart account'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-2xl px-4 py-3.5"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <p className="text-[11px] uppercase tracking-[0.14em] text-white/35 mb-1">{k}</p>
                  <p className="text-sm text-white/85 leading-snug">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-8 pb-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-4">
            <div
              className="lg:col-span-2 rounded-3xl p-6 sm:p-8"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <p className="text-xs uppercase tracking-[0.16em] text-white/35 mb-3">The problem</p>
              <h2 className="text-2xl font-semibold tracking-tight mb-5">
                DeFi is open. Managing it is still a full-time job.
              </h2>
              <ul className="space-y-4">
                {problems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/25 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="lg:col-span-3 rounded-3xl p-6 sm:p-8 relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(160deg, rgba(0,212,255,0.12) 0%, rgba(7,10,24,0.2) 42%, rgba(0,255,163,0.08) 100%)',
                border: '1px solid rgba(0,212,255,0.18)',
              }}
            >
              <p className="text-xs uppercase tracking-[0.16em] text-[#7EE8FF] mb-3">The idea</p>
              <h2 className="text-2xl sm:text-[1.7rem] font-semibold tracking-tight leading-snug mb-4">
                Put an agent between you and the protocols — without giving it your money.
              </h2>
              <p className="text-sm sm:text-[15px] text-white/65 leading-relaxed max-w-xl">
                Zeinyra is the decision layer. It turns a high-level goal into a monitored,
                risk-aware strategy, then asks your wallet to authorize execution. The protocol
                stores no keys. Settlement is on-chain and yours to verify.
              </p>
              <button
                type="button"
                onClick={openConnectModal}
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#7EE8FF] hover:text-white transition-colors"
              >
                Connect a wallet to deploy your agent
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>

        <section id="how" className="scroll-mt-24 px-5 sm:px-8 pb-20">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs uppercase tracking-[0.16em] text-white/35 mb-3">How it works</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 max-w-xl">
              Three steps. The agent works. You stay in charge.
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.n}
                    className="rounded-3xl p-6"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: 'rgba(0,212,255,0.1)', color: '#7EE8FF' }}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="font-mono text-xs text-white/30">{step.n}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{step.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="control" className="scroll-mt-24 px-5 sm:px-8 pb-24">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs uppercase tracking-[0.16em] text-white/35 mb-3">What you keep</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 max-w-2xl">
              Automation with the constraints of self-custody.
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-3xl p-6 flex gap-4"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(0,255,163,0.08)', color: '#7DFFC8' }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1.5">{item.title}</h3>
                      <p className="text-sm text-white/55 leading-relaxed">{item.body}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
