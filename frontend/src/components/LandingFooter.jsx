export const LandingFooter = () => {
    return <div className="pl-[40px] pr-[40px] pt-6">
        <div className=" bg-neutral-950 rounded-lg cursor-pointer p-4">
            <div className=" pl-10">
                <div className="flex justify-between text-2xl font-montserrat font-bold">
                    <div className="flex mt-2">
                        <div className="text-white">
                            Crypto
                        </div>
                        <div className="text-yellow-500">
                            lyze
                            <span className="text-white text-x">.</span>
                        </div>
                    </div>
                    <div className="text-white text-sm mt-2">
                        Made with <span className="text-red-600"> &hearts; </span> by <a href="https://www.linkedin.com/in/anshul-kardam-057841302/" className="text-yellow-500 underline" target="_blank" rel="noopener noreferrer">
                            Anshul Kardam
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}