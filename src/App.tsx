import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Phone,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Calculator,
  Layers,
  ArrowRight,
  Wrench,
  Building2,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function App() {
  // Calculator State
  const [serviceType, setServiceType] = useState<"leak" | "felt" | "new">(
    "leak",
  );
  const [propertyType, setPropertyType] = useState<
    "residential" | "commercial"
  >("residential");
  const [roofSize, setRoofSize] = useState<number>(200);

  // Naira Calculation Logic
  const calculateEstimate = () => {
    let baseRate =
      serviceType === "leak" ? 3000 : serviceType === "felt" ? 9000 : 13500;
    let multiplier = propertyType === "commercial" ? 1.35 : 1.0;
    const total = baseRate * roofSize * multiplier;

    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(total);
  };

  return (
    <div className="min-h-screen bg-popover text-foreground font-sans relative overflow-x-hidden selection:bg-secondary selection:text-popover">
      {/* Background Ambience: Cinematic Unsplash Hotlink (Cinematic dark modern architecture) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1920&q=70&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxury Architecture Background"
          className="w-full h-full object-cover object-center filter brightness-[0.2] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-popover/90 via-popover/70 to-popover/40" />
      </div>

      {/* Modern Prestigious Header */}
      <header className="relative z-50 max-w-7xl mx-auto px-6 h-24 flex items-center justify-between border-b border-emerald-900/50">
        <div className="flex items-center gap-3">
          {/* Re-engineered Geometric Brand Crest (Brass & Emerald) */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-900 shadow-inner">
            <div className="absolute inset-0 bg-secondary/10 rounded-lg animate-pulse" />
            <Layers className="w-5 h-5 text-secondary relative z-10" />
          </div>
          <div>
            <span className="font-extrabold text-2xl tracking-tight text-white font-mono">
              ROOFiT<span className="text-secondary">.ng</span>
            </span>
            <span className="block text-[9px] uppercase tracking-widest text-emerald-400 font-sans font-semibold -mt-1">
              Engineering & Diagnostics
            </span>
          </div>
        </div>

        <a href="tel:+2348000000000">
          <Button
            variant="outline"
            className="border-emerald-800 bg-emerald-950/40 backdrop-blur-md hover:bg-emerald-800 text-slate-100 gap-2 h-11 px-5 shadow-sm rounded-xl"
          >
            <Phone className="w-4 h-4 text-secondary" />
            <span className="font-semibold text-sm">Emergency Dispatch</span>
          </Button>
        </a>
      </header>

      {/* Hero Section: Structured Split (Option B) */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
        {/* LEFT COLUMN: Prestige Copy & Social Proof */}
        <div className="lg:col-span-7 space-y-8 text-left relative z-20 pt-4 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-900 text-xs font-medium text-emerald-100 shadow-inner"
          >
            <ShieldCheck className="w-4 h-4 text-secondary" />
            <span className="tracking-wide">
              Permanent Structural Fixes • Certified Zero-Leak Trajectory
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 text-4xl sm:text-6xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
          >
            Durable Roofing. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-emerald-200">
              Rapid Response.
            </span>{" "}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary/80 via-secondary to-secondary/80">
              Unmatched Trust.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 text-base sm:text-lg text-emerald-100 max-w-xl font-normal leading-relaxed"
          >
            Nigeria's authority in leak-free felt overhauls and diagnostic
            emergency repairs. We combine advanced drone diagnostics with
            polished engineering precision.
          </motion.p>

          {/* Primary CTA and Rapid Response Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <a href="tel:+2348000000000" className="flex-1 sm:flex-none">
              <Button
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-popover font-bold h-14 px-8 text-base rounded-xl shadow-xl shadow-secondary/10 transition-all active:scale-[0.98]"
              >
                <span>Log Severe Structural Leak</span>
                <ArrowRight className="w-5 h-5 ml-2 stroke-[2.5]" />
              </Button>
            </a>

            <div className="flex items-center justify-center sm:justify-start gap-3 px-4 py-2.5 border border-emerald-900 rounded-xl bg-popover/50 backdrop-blur-sm">
              <Clock className="w-5 h-5 text-secondary shrink-0" />
              <div className="text-left text-xs text-emerald-200 font-medium leading-tight">
                <span className="block text-white font-bold">
                  Nigeria-Wide Dispatches
                </span>
                Avg. response 90mins for critical emergencies
              </div>
            </div>
          </motion.div>

          {/* Prestige Social Proof (Attacking the Review Gap with Premium Colors) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10 border-t border-emerald-900 pt-8 max-w-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 text-secondary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-white font-bold text-sm ml-2">
                  5.0 Engineering Grade Rating
                </span>
              </div>
              <span className="text-xs font-mono text-secondary/80 bg-secondary/10 px-2 py-0.5 rounded border border-secondary/20 tracking-wide font-medium">
                Certified INTEGRITY
              </span>
            </div>

            {/* Premium Frosted Review Preview */}
            <div className="bg-emerald-950/40 backdrop-blur-md border border-emerald-800/80 rounded-xl p-4 text-xs text-emerald-100 space-y-3 relative hover:border-secondary/40 hover:bg-emerald-950/60 transition-all">
              <div className="absolute top-3 right-3 text-[10px] text-emerald-500 font-mono">
                Verified - Aug 2024
              </div>
              <p className="leading-relaxed italic text-emerald-100 font-normal line-clamp-2">
                "Fixed roof with integrity and durability in Nigeria... from
                August 2024 till now I had never seen any leakages or breakage
                from my roof not even wet decking. You guys deserve a thumbs up
                👍"
              </p>
              <div className="flex items-center justify-between text-emerald-300 font-medium pt-1 border-t border-emerald-800/50">
                <span className="text-white font-semibold tracking-wide">
                  - Abdulrahman Shuaib
                </span>
                <span className="text-secondary/80">
                  ⭐⭐⭐⭐⭐ Outstanding Workmanship
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Cinematic Image Stack + Frosted Diagnostic Card */}
        <div className="lg:col-span-5 relative z-30 flex justify-center mt-8 lg:mt-0">
          {/* Visual Anchor Stack using Premium Unsplash Hotlink (Architectural Scale) */}
          <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-2xl overflow-hidden border border-emerald-800 shadow-2xl shadow-black/70 lg:translate-x-4 group">
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1000&q=80&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Crisp modern contemporary roof structure"
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.7] group-hover:scale-105 transition-transform duration-1000"
            />

            {/* Cinematic emerald/ivory gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-popover via-popover/10 to-emerald-950/20" />

            <div className="absolute top-6 right-6 bg-popover/80 backdrop-blur-md border border-emerald-800 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-wider text-white uppercase font-bold">
                Drone Diagnostics Portal Active
              </span>
            </div>

            {/* Depth Accent Image - Premium Texture Hotlink */}
            <div className="absolute top-1/2 right-0 transform translate-x-6 -translate-y-12 w-40 h-40 rounded-xl overflow-hidden border-2 border-popover shadow-2xl hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1517089152318-42ec560349c1?auto=format&fit=crop&w=400&q=80"
                alt="Engineering structural texture"
                className="w-full h-full object-cover filter brightness-[0.8]"
              />
              <div className="absolute inset-0 bg-secondary/15 mix-blend-color" />
            </div>
          </div>

          {/* The High-Resolution Interactive Tool: Premium Frosted Glassmorphism Estimator */}
          {/* Deep blur overlay letting the dynamic architectural backdrop bleed through */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-10 -left-4 sm:-left-12 w-[calc(100%+1rem)] sm:w-[420px] bg-emerald-950/60 backdrop-blur-xl border border-emerald-700/60 rounded-2xl p-6 shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-40"
          >
            <div className="flex items-center justify-between pb-4 border-b border-emerald-800/80">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-secondary" />
                <span className="font-bold text-xs uppercase tracking-wider text-white font-mono">
                  Nigerian Estimate Engine
                </span>
              </div>
              <span className="text-[10px] text-emerald-200 bg-popover/60 px-2 py-0.5 rounded border border-emerald-800">
                Diagnostic Algorithm v4.1
              </span>
            </div>

            {/* Diagnostic Form */}
            <div className="space-y-4 pt-4">
              {/* Service Selection */}
              <div>
                <label className="block text-[11px] font-semibold tracking-wide text-emerald-200 uppercase mb-2">
                  Service Required
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "leak", label: "Leak Fix", icon: Wrench },
                    { id: "felt", label: "Felt Overhaul", icon: Layers },
                    { id: "new", label: "Full Install", icon: CheckCircle2 },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isActive = serviceType === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setServiceType(item.id as any)}
                        className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs transition-all ${
                          isActive
                            ? "bg-secondary/10 border-secondary text-secondary font-bold shadow-inner"
                            : "bg-popover/40 border-emerald-800/80 text-emerald-300 hover:border-emerald-700"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 mb-1.5" />
                        <span className="text-[10px] leading-tight">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Property Scope & Size Slider */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-wide text-emerald-200 uppercase mb-2">
                    Scope
                  </label>
                  <div className="flex bg-popover/80 p-1 rounded-lg border border-emerald-900">
                    <button
                      type="button"
                      onClick={() => setPropertyType("residential")}
                      className={`flex-1 py-1 text-[10px] rounded font-medium transition-colors flex items-center justify-center gap-1 ${
                        propertyType === "residential"
                          ? "bg-emerald-800 text-white font-bold"
                          : "text-emerald-500"
                      }`}
                    >
                      <Home className="w-3 h-3" />
                      <span>Home</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPropertyType("commercial")}
                      className={`flex-1 py-1 text-[10px] rounded font-medium transition-colors flex items-center justify-center gap-1 ${
                        propertyType === "commercial"
                          ? "bg-emerald-800 text-white font-bold"
                          : "text-slate-200"
                      }`}
                    >
                      <Building2 className="w-3 h-3" />
                      <span>Commercial</span>
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-[11px] font-semibold tracking-wide text-emerald-200 uppercase">
                      Est. Size
                    </label>
                    <span className="text-xs font-mono font-bold text-secondary">
                      {roofSize} sqm
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="50"
                    value={roofSize}
                    onChange={(e) => setRoofSize(Number(e.target.value))}
                    className="w-full h-1.5 bg-popover rounded-lg appearance-none cursor-pointer accent-secondary"
                  />
                  <div className="flex justify-between text-[8px] text-emerald-500 mt-1.5 font-mono">
                    <span>50m²</span>
                    <span>1000m²</span>
                  </div>
                </div>
              </div>

              {/* Projected Commitment Display */}
              <div className="pt-2 border-t border-emerald-800/80 flex items-center justify-between bg-popover/40 p-3 rounded-xl border border-emerald-800/50 mt-1">
                <div>
                  <span className="block text-[10px] text-emerald-300 uppercase font-mono tracking-wider">
                    Projected Commitment
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={serviceType + propertyType + roofSize}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-lg sm:text-xl font-extrabold text-white font-mono block tracking-tight pt-0.5"
                    >
                      {calculateEstimate()}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <Button
                  size="sm"
                  className="bg-slate-100 hover:bg-slate-200 text-popover font-bold text-xs px-4 h-10 rounded-lg shadow-md transition-all"
                >
                  Request Full Diagnostic
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Subtle Corporate Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-8 border-t border-emerald-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-emerald-600 font-medium">
        <p>
          © 2026 ROOFiT.ng. Engineering standards verified for structural felt &
          diagnostic integrity.
        </p>
        <div className="flex gap-6 text-emerald-500">
          <span>Abuja Dispatches</span>
          <span>•</span>
          <span>Lagos Engineering</span>
          <span>•</span>
          <span>Port Harcourt Logistics</span>
        </div>
      </footer>
    </div>
  );
}
