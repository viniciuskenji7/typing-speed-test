'use client';
import Image from "next/image"
import { ListResult } from "../../components/listResult"
import { Button } from "../../components/button"
import { useRouter } from "next/navigation"



export const ResultsPage = () => {

    const router = useRouter();

    return (
        <div className="w-full flex flex-col justify-center items-center mt-30">
            <div className="flex flex-col items-center gap-10">
                <span className="bg-green-800 p-6 rounded-full ring-20 ring-green-950">
                    <Image
                        src={'/icon-completed.svg'}
                        alt="Teste Complete"
                        width={70}
                        height={70}
                    />
                </span>
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-white text-5xl font-bold">Test Complete!</h1>
                    <p className="text-neutral-500 text-2xl">Solid run. Keep pushing to beat your high score</p>
                </div>
                <ListResult />
                <Button
                    colors="neutral"
                    text="light"
                    event={() => router.push('/')}
                >
                    Go Again
                    <Image 
                        src={'/icon-restart.svg'}
                        alt="Icon Restart"
                        width={20}
                        height={20}
                    />
                </Button>
            </div>
        </div>
    )
}