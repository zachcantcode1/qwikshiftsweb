"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface SignupModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function SignupModal({ open, onOpenChange }: SignupModalProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus("idle");
        setErrorMessage("");

        try {
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Something went wrong");
            }

            setStatus("success");
            // Reset form
            setName("");
            setEmail("");
            setPassword("");
        } catch (err) {
            setStatus("error");
            setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    const handleClose = (open: boolean) => {
        if (!open) {
            // Reset state when closing
            setStatus("idle");
            setErrorMessage("");
        }
        onOpenChange(open);
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md bg-zinc-900 border-white/10 text-white">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white">Create your account</DialogTitle>
                    <DialogDescription className="text-zinc-400">
                        Get started with QwikShifts Cloud. We&apos;ll reach out to set up your account.
                    </DialogDescription>
                </DialogHeader>

                {status === "success" ? (
                    <div className="py-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Request Submitted!</h3>
                        <p className="text-zinc-400">
                            Thanks for signing up! We&apos;ll be in touch shortly to get you started.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        {status === "error" && (
                            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                {errorMessage}
                            </div>
                        )}

                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-zinc-300">Full Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-zinc-800 border-white/10 text-white placeholder:text-zinc-500 focus:border-white/20 focus:ring-white/20"
                                required
                                disabled={isLoading}
                                autoComplete="name"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-zinc-300">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-zinc-800 border-white/10 text-white placeholder:text-zinc-500 focus:border-white/20 focus:ring-white/20"
                                required
                                disabled={isLoading}
                                autoComplete="email"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-zinc-300">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-zinc-800 border-white/10 text-white placeholder:text-zinc-500 focus:border-white/20 focus:ring-white/20"
                                required
                                disabled={isLoading}
                                autoComplete="new-password"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-white text-zinc-950 hover:bg-zinc-200 font-semibold py-3 rounded-full transition-all disabled:opacity-50"
                            disabled={isLoading}
                        >
                            {isLoading ? "Submitting..." : "Create Account"}
                        </Button>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}
