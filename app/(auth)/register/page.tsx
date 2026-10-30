"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import AuthForm, { Field } from "@/components/auth-form"
import Link from "next/link"
import { signUp } from "@/lib/auth-client"

//

export default function RegisterPage() {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        setError(null)

        const formData = new FormData(event.currentTarget)
        const res = await signUp.email({
            name: formData.get("email") as string, 
            email: formData.get("email") as string, 
            password: formData.get("password") as string, 
        })


        if (res.error) {
            setError(res.error.message || "Network error occured.")
        }
        else {
            router.push("/register")
        }
    }


    return (
        <>
            <h2 className="font-serif text-5xl">
                Create an account.
            </h2>

            <p className="mt-2 text-sm text-foreground/60">
                List your property instantly.
            </p>

            <AuthForm submitLabel="REGISTER" onSubmit={handleSubmit}>
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
                    autoComplete="new-password" 
                    minLength={8} 
                />

                <Field 
                    label="CONFIRM PASSWORD" 
                    name="confirmPassword" 
                    type="password" 
                    autoComplete="new-password" 
                    minLength={8} 
                />
            </AuthForm>

            {error && (
                <p className="mt-4 text-red-500">
                    {error}
                </p>
            )}

            <p className="mt-4 text-sm text-foreground/60">
                <Link href="/login" className="text-foreground underline underline-offset-4">
                    Log in
                </Link>
            </p>
        </>
    )
}
