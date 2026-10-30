import Form from "next/form"

//

const input = "bg-transparent font-serif text-lg outline-none placeholder:text-foreground/40"

//

function SearchField({ 
    label, 
    children 
}: { 
    label: string, 
    children: React.ReactNode 
}) {
    return (
        <label className="flex flex-col gap-1 border-b border-foreground/20 px-5 py-3 sm:border-b-0 sm:border-r">
            <span className="text-[11px] tracking-[0.2em] text-foreground/50">
                {label}
            </span>

            {children}
        </label>
    )
}

//

export default function SearchBar() {
    return (
        <Form
            action="/hotels"
            prefetch={false}
            className="relative z-10 mx-4 -mt-12 grid border border-foreground bg-background sm:mx-auto sm:w-[calc(100%-4rem)] sm:max-w-5xl sm:grid-cols-[2fr_1fr_1fr_1fr_auto]"
        >
            <SearchField label="WHERE">
                <input name="destination" type="text" placeholder="Hotels in London" required className={input} />
            </SearchField>

            <SearchField label="CHECK IN">
                <input name="checkIn" type="date" className={input} />
            </SearchField>

            <SearchField label="CHECK OUT">
                <input name="checkOut" type="date" className={input} />
            </SearchField>

            <SearchField label="GUESTS">
                <select name="guests" defaultValue="2" className={input}>
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                            {n} {n === 1 ? "guest" : "guests"}
                        </option>
                    ))}
                </select>
            </SearchField>

            <button
                type="submit"
                className="cursor-pointer bg-foreground px-8 py-4 text-sm tracking-[0.2em] text-background transition-opacity hover:opacity-85"
            >
                SEARCH
            </button>
        </Form>
    )
}
