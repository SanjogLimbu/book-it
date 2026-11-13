"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import TopBar from "@/components/topbar"
import { Field } from "@/components/auth-form"
import { useSession } from "@/lib/auth-client"

//

const amenities = ["Wi-Fi", "Pool", "Breakfast", "Parking", "Kitchen", "Air conditioning", "Spa", "Pet friendly"]
const label = "text-[11px] tracking-[0.2em] text-foreground/50"

//

function Section({
    number,
    title,
    children
}: {
    number: string,
    title: string,
    children: React.ReactNode
}) {
    return (
        <section className="grid gap-6 border-b border-foreground/20 py-10 md:grid-cols-[180px_1fr]">
            <div>
                <span className="font-serif text-xl text-foreground/40">
                    {number}
                </span>

                <h3 className="font-serif text-3xl">
                    {title}
                </h3>
            </div>

            <div className="flex flex-col gap-6">
                {children}
            </div>
        </section>
    )
}

//

export default function Dashboard() {
    const { data: session } = useSession()
    const [preview, setPreview] = useState({ name: "", city: "", price: "" })
    const [photos, setPhotos] = useState<string[]>([])

    function updatePreview(form: HTMLFormElement) {
        const data = new FormData(form)
        
        setPreview({
            name: data.get("name") as string,
            city: data.get("city") as string,
            price: data.get("price") as string,
        })
    }


    function addPhotos(input: HTMLInputElement) {
        const urls = Array.from(input.files ?? [], (file) => URL.createObjectURL(file))
        setPhotos((current) => [...current, ...urls])
        input.value = ""
    }


    function removePhoto(url: string) {
        URL.revokeObjectURL(url)
        setPhotos((current) => current.filter((photo) => photo !== url))
    }


    async function submit(event: React.SubmitEvent<HTMLElement>) {
        event.preventDefault()

        try {
            const response = await fetch(
                "/api/properties",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
        } 
        catch {

        }
    }


    return (
        <>
            <TopBar signedIn={Boolean(session?.user)} />

            <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-8">
                <div className="border-b border-foreground pb-6">
                    <p className={label}>
                        DASHBOARD
                    </p>

                    <h2 className="mt-2 font-serif text-5xl sm:text-6xl">
                        List a new property.
                    </h2>
                </div>

                <div className="grid gap-16 lg:grid-cols-[1fr_300px]">
                    <form 
                        onChange={(e) => updatePreview(e.currentTarget)} 
                        onSubmit={(e) => submit(e)}
                    >
                        <Section number="01" title="The basics">
                            <Field label="PROPERTY NAME" name="name" placeholder="Halden House" />

                            <label className="flex flex-col gap-2">
                                <span className={label}>
                                    DESCRIPTION
                                </span>

                                <textarea
                                    name="description"
                                    rows={4}
                                    required
                                    placeholder="What makes a stay here worth the journey?"
                                    className="resize-none border-b border-foreground/30 bg-transparent pb-2 font-serif text-lg outline-none transition-colors placeholder:text-foreground/30 focus:border-foreground"
                                />
                            </label>
                        </Section>

                        <Section number="02" title="Location">
                            <Field label="STREET ADDRESS" name="address" autoComplete="street-address" />

                            <div className="grid gap-6 *:min-w-0 sm:grid-cols-2">
                                <Field label="CITY" name="city" autoComplete="address-level2" />
                                <Field label="COUNTRY" name="country" autoComplete="country-name" />
                            </div>
                        </Section>

                        <Section number="03" title="Rooms & rates">
                            <div className="grid grid-cols-2 gap-6 *:min-w-0 sm:grid-cols-4">
                                <Field label="PRICE / NIGHT (£)" name="price" type="number" min={1} />
                                <Field label="GUESTS" name="guests" type="number" min={1} defaultValue={2} />
                                <Field label="BEDROOMS" name="bedrooms" type="number" min={0} defaultValue={1} />
                                <Field label="BATHROOMS" name="bathrooms" type="number" min={0} defaultValue={1} />
                            </div>
                        </Section>

                        <Section number="04" title="Amenities">
                            <div className="flex flex-wrap gap-2">
                                {amenities.map((amenity) => (
                                    <label
                                        key={amenity}
                                        className="cursor-pointer border border-foreground/30 px-4 py-2 text-xs tracking-[0.2em] transition-colors hover:border-foreground has-checked:border-foreground has-checked:bg-foreground has-checked:text-background has-focus-visible:outline-2 has-focus-visible:outline-offset-2"
                                    >
                                        <input type="checkbox" name="amenities" value={amenity} className="sr-only" />
                                        {amenity.toUpperCase()}
                                    </label>
                                ))}
                            </div>
                        </Section>

                        <Section number="05" title="Photos">
                            <label className="flex h-40 cursor-pointer flex-col items-center justify-center gap-1 border border-dashed border-foreground/40 text-center transition-colors hover:border-foreground has-focus-visible:outline-2 has-focus-visible:outline-offset-2">
                                <span className="font-serif text-2xl">
                                    Add photos
                                </span>

                                <span className={label}>
                                    THE FIRST ONE IS YOUR COVER
                                </span>

                                <input type="file" accept="image/*" multiple className="sr-only" onChange={(e) => addPhotos(e.currentTarget)} />
                            </label>

                            {photos.length > 0 && (
                                <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                                    {photos.map((url, i) => (
                                        <li key={url} className="relative aspect-square overflow-hidden">
                                            <Image src={url} alt={`Property photo ${i + 1}`} className="object-cover" sizes="200px" fill />

                                            {i === 0 && (
                                                <span className="absolute left-2 top-2 bg-background px-2 py-1 text-[10px] tracking-[0.2em]">
                                                    COVER
                                                </span>
                                            )}

                                            <button
                                                type="button"
                                                aria-label={`Remove photo ${i + 1}`}
                                                onClick={() => removePhoto(url)}
                                                className="absolute right-2 top-2 flex size-7 cursor-pointer items-center justify-center bg-background transition-colors hover:bg-foreground hover:text-background"
                                            >
                                                ×
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </Section>

                        <div className="flex flex-col-reverse gap-3 pt-10 sm:flex-row sm:justify-end">
                            <Link href="/" className="button">
                                CANCEL
                            </Link>

                            <button
                                type="submit"
                                className="h-11 cursor-pointer bg-foreground px-8 text-sm tracking-[0.2em] text-background transition-opacity hover:opacity-85"
                            >
                                PUBLISH LISTING
                            </button>
                        </div>
                    </form>

                    <aside className="hidden pt-10 lg:sticky lg:top-0 lg:block lg:self-start">
                        <p className={`${label} mb-4`}>
                            PREVIEW
                        </p>

                        <article>
                            <div className="relative aspect-4/5 overflow-hidden bg-foreground/5">
                                {photos[0] ? (
                                    <Image src={photos[0]} alt="Cover photo" className="object-cover" sizes="300px" fill />
                                ) : (
                                    <div className="flex h-full items-center justify-center font-serif text-xl text-foreground/30">
                                        No photo yet
                                    </div>
                                )}
                            </div>

                            <p className="mt-4 text-[11px] tracking-[0.2em] text-foreground/50">
                                In: {(preview.city || "City").toUpperCase()}
                            </p>

                            <h3 className="font-serif text-2xl">
                                {preview.name || "Property name"}
                            </h3>

                            <p className="mt-1 text-sm text-foreground/70">
                                from £{preview.price || "—"} / night
                            </p>
                        </article>

                        <p className="mt-6 border-t border-foreground/20 pt-4 text-sm text-foreground/50">
                            This is how your property will appear to guests on the home page.
                        </p>
                    </aside>
                </div>
            </main>
        </>
    )
}
