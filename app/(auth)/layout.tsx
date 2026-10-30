import TopBar from "@/components/topbar"

//

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <TopBar />

            <main className="flex flex-1 items-center justify-center px-4 py-16">
                <div className="w-full max-w-sm">
                    {children}
                </div>
            </main>
        </>
    )
}
