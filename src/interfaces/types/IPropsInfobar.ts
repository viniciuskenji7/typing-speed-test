import { MouseEventHandler } from "react";





export interface PropsDifficulty {
    difficulty: DifficultyLevel;
    changeDifficulty: (level: DifficultyLevel) => void;
    mode: Mode;
    changeMode: (mode: Mode) => void;
}

export interface DifficultyConfig {
    easy: string[];
    medium: string[];
    hard: string[];
}

export type Mode = 'Timed' | 'Passage';
export type DifficultyLevel = 'easy' | 'medium' | 'hard';


export interface PropsInfobarTime {
    time: number;
    wpm?: number;
    accuracy?: number;
}

export interface PropsInfobar 
    extends PropsDifficulty, PropsInfobarTime {}