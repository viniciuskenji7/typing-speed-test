'use client';
import { PropsInfobarTime } from "@/src/interfaces/types/IPropsInfobar";
import { useMemo } from "react"

export const InfobarTime = ({ time, wpm, accuracy }: PropsInfobarTime) => {

    const formattedTime = useMemo(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, [time]);

    return (
        <div className="flex text-2xl gap-3">
            <span className="text-neutral-400 flex items-center gap-2">
                WPM:
                <strong className="text-white">
                    {wpm ?? 0}
                </strong>
            </span>
            <span className="text-neutral-700">|</span>
            <span className="text-neutral-400 flex items-center gap-2">
                Accuracy:
                <strong className="text-red-500">
                    {accuracy?.toFixed(2) ?? 0}%
                </strong>
            </span>
            <span className="text-neutral-700">|</span>
            <span className="text-neutral-400 flex items-center gap-2">
                Time:
                <strong className="text-yellow-400">
                    {formattedTime}
                </strong>
            </span>
        </div>
    )
}