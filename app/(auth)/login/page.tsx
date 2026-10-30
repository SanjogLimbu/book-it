import AuthForm, { Field } from "@/components/auth-form"
import Link from "next/link"

//

export default function LoginPage() {
    return (
        <>
            <h2 className="font-serif text-5xl">
                Welcome back.
            </h2>

            <p className="mt-2 text-sm text-foreground/60">
                Log in to manage your stays.
            </p>

            <AuthForm submitLabel="LOG IN">
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

            <p className="mt-8 text-sm text-foreground/60">
                New to The Cosmos?{" "}
                
                <Link href="/register" className="text-foreground underline underline-offset-4">
                    Create an account
                </Link>
            </p>
        </>
    )
}
