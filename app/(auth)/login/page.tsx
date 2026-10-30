"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import AuthForm, { Field } from "@/components/auth-form"
import Link from "next/link"
import { signIn } from "@/lib/auth-client"

//

export default function LoginPage() {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        setError(null)

        const formData = new FormData(event.currentTarget)
        const res = await signIn.email({
            email: formData.get("email") as string, 
            password: formData.get("password") as string, 
        })

        
        if (res.error) {
            setError(res.error.message || "A network error occured.")
        } 
        else {
            router.push("/")
        } 
    }


    return (
        <>
            <h2 className="font-serif text-5xl">
                Welcome back.
            </h2>

            <p className="mt-2 text-sm text-foreground/60">
                Log in to manage your property.
            </p>

            <AuthForm submitLabel="LOG IN" onSubmit={handleSubmit}>
                <Field 
                    label="EMAIL" 
                    name="email" 
                    type="email" 
                    autoComplete="email" 
                />

                <Field 
                    label="PASSWORD" 
                    name="password" 
                    type="password" 
                    autoComplete="current-password" 
                />
            </AuthForm>

            {error && (
                <p className="mt-4 text-red-500">
                    {error}
                </p>
            )}

            <p className="mt-4 text-sm text-foreground/60">
                <Link href="/register" className="text-foreground underline underline-offset-4">
                    Create an account
                </Link>
            </p>
        </>
    )
}
