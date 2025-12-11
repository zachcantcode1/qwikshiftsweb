"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Users, Shield, Zap, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SignupModal } from "@/components/signup-modal";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:5173";

export default function Home() {
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-white/20 selection:text-white">

      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-zinc-950 font-bold">Q</div>
            QwikShifts
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="https://github.com/zachcantcode1/qwikshifts" className="hover:text-white transition-colors">Open Source</Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSignupOpen(true)}
              className="px-4 py-2 text-sm font-semibold text-zinc-950 bg-white rounded-full hover:bg-zinc-200 transition-colors"
            >
              Start for free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Subtle Gradient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8 hover:bg-white/10 transition-colors cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            v1.0 is now live
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
            Scheduling for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"> modern teams.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            QwikShifts is the open-source platform for managing employee schedules, time off, and payroll.
            No complex spreadsheets. Just clean, fast software.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setSignupOpen(true)}
              className="px-8 py-4 text-base font-semibold text-zinc-950 bg-white rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="https://github.com/zachcantcode1/qwikshifts"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image / Dashboard Preview */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              <CarouselItem>
                <div className="rounded-xl border border-white/10 bg-zinc-900/50 p-2 shadow-2xl">
                  <div className="rounded-lg overflow-hidden border border-white/5">
                    <Image
                      src="/screenshots/dashboard-1.png"
                      alt="Dashboard Schedule View"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="rounded-xl border border-white/10 bg-zinc-900/50 p-2 shadow-2xl">
                  <div className="rounded-lg overflow-hidden border border-white/5">
                    <Image
                      src="/screenshots/dashboard-2.png"
                      alt="Dashboard Employee View"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="rounded-xl border border-white/10 bg-zinc-900/50 p-2 shadow-2xl">
                  <div className="rounded-lg overflow-hidden border border-white/5">
                    <Image
                      src="/screenshots/dashboard-3.png"
                      alt="Dashboard Analytics View"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-zinc-900/80 border-white/10 text-white hover:bg-zinc-800 hover:text-white" />
            <CarouselNext className="right-4 bg-zinc-900/80 border-white/10 text-white hover:bg-zinc-800 hover:text-white" />
          </Carousel>
        </div>
      </section>

      {/* Features Grid ("Bento Scale") */}
      <section id="features" className="px-6 py-24 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need.</h2>
            <p className="text-zinc-400 text-lg max-w-xl">Powerful features for the enterprise, accessible to everyone.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group md:col-span-2 p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Scheduling</h3>
              <p className="text-zinc-400">Drag-and-drop shifts with automatic conflict detection. We handle the constraints so you don&apos;t have to.</p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Staff Portal</h3>
              <p className="text-zinc-400">Employees can view shifts and request time off from any device.</p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-zinc-400">Role-based access control, audit logs, and secure authentication built-in.</p>
            </div>

            {/* Card 4 */}
            <div className="group md:col-span-2 p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Sync</h3>
              <p className="text-zinc-400">Changes deploy instantly. Powered by Supabase Realtime for instant updates across all connected devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-24 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Self-host for free, or let us handle the infrastructure for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Self-Hosted Tier */}
            <div className="p-8 rounded-3xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-colors">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Self-Hosted</h3>
                <p className="text-zinc-400 text-sm">Run on your own infrastructure</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-zinc-400 ml-2">forever</span>
              </div>
              <ul className="space-y-3 mb-8 text-zinc-300">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Full source code access
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Unlimited employees
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Unlimited locations
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Community support
                </li>
              </ul>
              <Link
                href="https://github.com/zachcantcode1/qwikshifts"
                className="block w-full py-3 text-center font-semibold rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
              >
                View on GitHub
              </Link>
            </div>

            {/* Cloud Hosted Tier */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-blue-600/20 to-zinc-950 border border-blue-500/30 hover:border-blue-500/50 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full">Popular</span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Cloud Hosted</h3>
                <p className="text-zinc-400 text-sm">We handle everything for you</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold">$10</span>
                <span className="text-zinc-400 ml-2">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-zinc-300">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Everything in Self-Hosted
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Managed infrastructure
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Automatic updates
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Priority support
                </li>
              </ul>
              <button
                onClick={() => setSignupOpen(true)}
                className="block w-full py-3 text-center font-semibold rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center text-xs font-bold">Q</div>
            <span className="text-zinc-500 text-sm">© 2025 QwikShifts Inc.</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          </div>
        </div>
      </footer>

      {/* Signup Modal */}
      <SignupModal open={signupOpen} onOpenChange={setSignupOpen} />
    </div>
  );
}
