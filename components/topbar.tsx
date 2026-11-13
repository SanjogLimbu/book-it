"use client"

import Link from "next/link"
import { signOut } from "@/lib/auth-client"
import { useState } from "react"
import Prompt from "./prompt"

//

export default function TopBar({ signedIn }: { signedIn: boolean }) {
    const [prompt, setPrompt] = useState("")

    return (
        <>
            <header className="flex h-20 w-full items-center justify-between bg-background px-4 sm:px-8 text-black">
                <Link href="/" className="text-center">
                    <h1 className="font-serif text-2xl sm:text-4xl">
                        THE COSMOS
                    </h1>

                    <span className="text-black/20 font-serif text-xs sm:text-base">
                        HOTELS FOR YOU
                    </span>
                </Link>

                <div className="flex gap-2 sm:gap-5 text-center">
                    {!signedIn ? (
                        <>
                            <Link href="/register" className="button">
                                REGISTER
                            </Link>

                            <Link href="/login" className="button">
                                LOGIN
                            </Link>
                        </>
                    ): (
                        <>
                            <Link href="/dashboard" className="button">
                                DASHBOARD
                            </Link>

                            <button className="button" onClick={() => {
                                setPrompt("Are you sure you want to log out?")
                            }}>
                                LOGOUT
                            </button>
                        </>
                    )}
                </div>
            </header>


            {prompt && (
                <Prompt 
                    promptMessage={prompt}
                    onYes={() => {
                        setPrompt("")
                        signOut()
                    }}
                    onNo={() => {
                        setPrompt("")
                    }}
                />
            )}
        </>
    )
}
