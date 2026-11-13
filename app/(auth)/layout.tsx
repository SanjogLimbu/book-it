import TopBar from "@/components/topbar"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

//

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return (
        <>
            <TopBar signedIn={Boolean(session?.user)} />

            <main className="flex flex-1 items-center justify-center px-4 py-16">
                <div className="w-full max-w-sm">
                    {children}
                </div>
            </main>
        </>
    )
}
