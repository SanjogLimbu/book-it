export default function Prompt(
    { 
        promptMessage, 
        onYes,
        onNo
    }: { 
        promptMessage: string,
        onYes: () => void,
        onNo: () => void 
    }) {
    return (
        <>
            <div className="w-full h-full fixed bg-black/80 flex items-center justify-center z-100">
                <div className="w-110 h-50 bg-background rounded-sm flex flex-col items-center justify-center border border-gray-500 text-wrap text-center p-5">
                    <span className="text-2xl">
                        {promptMessage}
                    </span>

                    <div className="flex gap-5 mt-5">
                        <button className="button" onClick={onYes}>
                            YES
                        </button>

                        <button className="button" onClick={onNo}>
                            NO
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
