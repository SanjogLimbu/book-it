import AuthForm, { Field } from "@/components/auth-form"
import Link from "next/link"

//

export default function RegisterPage() {
    return (
        <>
            <h2 className="font-serif text-5xl">
                Create an account.
            </h2>

            <p className="mt-2 text-sm text-foreground/60">
                Save your favourite stays and book faster.
            </p>

            <AuthForm submitLabel="REGISTER">
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

            <p className="mt-8 text-sm text-foreground/60">
                Already have an account?{" "}

                <Link href="/login" className="text-foreground underline underline-offset-4">
                    Log in
                </Link>
            </p>
        </>
    )
}
