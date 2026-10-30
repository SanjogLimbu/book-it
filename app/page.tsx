import SearchBar from "@/components/search-bar"
import TopBar from "@/components/topbar"
import { featuredHotels } from "@/lib/hotels"
import hero from "@/public/images/hero.jpg"
import Image from "next/image"

//

export default function Home() {
    return (
        <>
            <TopBar />

            <section>
                <div className="relative mx-4 h-[70vh] min-h-120 overflow-hidden sm:mx-8">
                    <Image
                        src={hero}
                        alt="Wooden boathouse on a still alpine lake below misty mountains"
                        className="object-cover"
                        placeholder="blur"
                        sizes="100vw"
                        preload
                        fill
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 px-6 pb-20 text-background sm:px-12 sm:pb-24">
                        <h2 className="max-w-2xl font-serif text-5xl leading-none sm:text-7xl">
                            Rooms worth the journey.
                        </h2>
                    </div>
                </div>

                <SearchBar />
            </section>

            <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-8">
                <div className="mb-10 flex items-end justify-between gap-4 border-b border-foreground pb-4">
                    <h2 className="font-serif text-4xl">Featured stays</h2>
                    <span className="hidden text-[11px] tracking-[0.2em] text-foreground/50 sm:inline">HAND-PICKED THIS SEASON</span>
                </div>

                <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                    {featuredHotels.map((hotel) => (
                        <article key={hotel.name}>
                            <div className="relative aspect-4/5 overflow-hidden">
                                <Image
                                    src={hotel.image}
                                    alt={hotel.alt}
                                    className="object-cover"
                                    placeholder="blur"
                                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                    fill
                                />
                            </div>

                            <p className="mt-4 text-[11px] tracking-[0.2em] text-foreground/50">{hotel.city.toUpperCase()}</p>
                            <h3 className="font-serif text-2xl">{hotel.name}</h3>
                            <p className="mt-1 text-sm text-foreground/70">from £{hotel.price} / night</p>
                        </article>
                    ))}
                </div>
            </section>

            <footer className="mt-auto flex flex-col justify-between gap-2 border-t border-foreground/20 px-4 py-10 text-sm text-foreground/60 sm:flex-row sm:items-center sm:px-8">
                <span className="font-serif text-xl text-foreground">THE COSMOS</span>
                <span>© The Cosmos. Hotels for you.</span>
            </footer>
        </>
    )
}
