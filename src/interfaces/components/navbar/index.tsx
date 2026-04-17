'use client';
import Image from "next/image"
import { useTestResults } from "../../contexts/TestResultsContext";




export const Navbar = () => {

    const { lastResult } = useTestResults();

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
                <h2 className="text-white">{lastResult?.wpm || 0}</h2>
            </div>
        </nav>
    )
}