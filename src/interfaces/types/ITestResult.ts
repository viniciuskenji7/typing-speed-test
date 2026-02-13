export interface ITestResult {
    wpm: number;
    accuracy: number;
    time: number;
    difficulty: 'easy' | 'medium' | 'hard';
    timestamp: number;
}

export interface ITestResultsContext {
    lastResult: ITestResult | null;
    resultsHistory: ITestResult[];
    saveResult: (result: ITestResult) => void;
    clearResults: () => void;
}
