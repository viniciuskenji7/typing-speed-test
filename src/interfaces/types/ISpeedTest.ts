export interface ITextLevel {
    easy: string;
    medium: string;
    hard: string;
}

export interface ISpeedTest {
    startTime: boolean;
    comparison: {
        char: string;
        status: 'correct' | 'incorrect' | 'pending' | 'finish';
    }[];
    content: string;
    text: string;
    setContent: (value: string) => void;
    levels?: keyof ITextLevel;
}
