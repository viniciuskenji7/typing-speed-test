'use client';
import { useTestResults } from "../../contexts/TestResultsContext"



export const ListResult = () => {

    const { lastResult } = useTestResults();

    return (
        <div className="flex items-center gap-10">
            <div className="flex flex-col p-5 w-50 border rounded-md text-2xl border-neutral-600  items-start gap-2">
                <h3 className="text-neutral-500">WPM:</h3>
                <h3 className="text-white">{lastResult?.wpm}</h3>
            </div>
            <div className="flex flex-col p-5 w-50 border rounded-md text-2xl border-neutral-600  items-start gap-2">
                <h3 className="text-neutral-500">Accuracy:</h3>
                <h3 className="text-red-500">{lastResult?.accuracy}</h3>
            </div>
            <div className="flex flex-col p-5 w-50 border rounded-md text-2xl border-neutral-600  items-start gap-2">
                <h3 className="text-neutral-500">Characters:</h3>
                <h3 className="text-green-500">{lastResult?.charactersRights}<strong className="text-red-500">/{lastResult?.charactersWrong}</strong></h3>
            </div>
        </div>
    )
}