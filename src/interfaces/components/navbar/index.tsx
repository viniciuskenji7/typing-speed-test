import Image from "next/image"




export const Navbar = () => {


    return (
        <nav className="flex justify-between items-center">
            <Image
                src={'/logo.svg'}
                alt="Keyboard Icon"
                width={266}
                height={39}
            />
            <div className="flex gap-2">
                <span>
                    <Image
                        src={'/trophy.svg'}
                        alt="Keyboard Icon"
                        width={20}
                        height={20}
                    />
                </span>
                <h2 className="text-neutral-400">Personal Best:</h2>
                <h2 className="text-white">92 WPM</h2>
            </div>
        </nav>
    )
}