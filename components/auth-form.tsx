"use client"

import type { ComponentProps, ReactNode } from "react"

// Front end only for now: block submission until auth is wired up.
export default function AuthForm({ submitLabel, children }: { submitLabel: string, children: ReactNode }) {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="mt-10 flex flex-col gap-6">
            {children}

            <button
                type="submit"
                className="mt-2 h-12 cursor-pointer bg-foreground text-sm tracking-[0.2em] text-background transition-opacity hover:opacity-85"
            >
                {submitLabel}
            </button>
        </form>
    )
}

export function Field({ label, ...props }: { label: string } & ComponentProps<"input">) {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-[11px] tracking-[0.2em] text-foreground/50">{label}</span>
            <input
                required
                className="border-b border-foreground/30 bg-transparent pb-2 font-serif text-lg outline-none transition-colors focus:border-foreground"
                {...props}
            />
        </label>
    )
}
