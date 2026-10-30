import Link from "next/link"

//

export default function TopBar() {
    return (
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
                <Link href="/register" className="button">
                    REGISTER
                </Link>

                <Link href="/login" className="button">
                    LOGIN
                </Link>
            </div>
        </header>
    )
}
