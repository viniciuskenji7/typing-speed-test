'use client';
import { PropsDifficulty } from "@/src/interfaces/types/IPropsInfobar";

export const InfobarDifficulty = ({ difficulty, changeDifficulty, mode, changeMode }: PropsDifficulty) => {

    return (
        <div className="flex gap-3">
            <div className="flex items-center gap-2">
                <span className="text-neutral-400">Difficulty: </span>
                <button
                    onClick={() => changeDifficulty('easy')}
                    className={`button ${difficulty === 'easy' ? 'active' : ''}`}
                >
                    Easy
                </button>
                <button
                    onClick={() => changeDifficulty('medium')}
                    className={`button ${difficulty === 'medium' ? 'active' : ''}`}
                >
                    Medium
                </button>
                <button
                    onClick={() => changeDifficulty('hard')}
                    className={`button ${difficulty === 'hard' ? 'active' : ''}`}
                >
                    Hard
                </button>
            </div>
            <span className="text-neutral-700">|</span>
            <div className="flex items-center gap-2">
                <span className="text-neutral-400">Mode: </span>
                <button
                    className={`button ${mode === 'Timed' ? 'active' : ''}`}
                    onClick={() => changeMode('Timed')}
                >
                    Timed
                </button>
                <button
                    className={`button ${mode === 'Passage' ? 'active' : ''}`}
                    onClick={() => changeMode('Passage')}
                >
                    Passage
                </button>
            </div>
        </div>
    )
}