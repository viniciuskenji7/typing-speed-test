'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { ITestResult, ITestResultsContext } from '../types/ITestResult';

const TestResultsContext = createContext<ITestResultsContext | undefined>(undefined);

export const TestResultsProvider = ({ children }: { children: ReactNode }) => {
    const [lastResult, setLastResult] = useState<ITestResult | null>(null);
    const [resultsHistory, setResultsHistory] = useState<ITestResult[]>([]);

    const saveResult = (result: ITestResult) => {
        setLastResult(result);
        setResultsHistory(prev => [result, ...prev]); // Adiciona no início do array
    };

    const clearResults = () => {
        setLastResult(null);
        setResultsHistory([]);
    };

    const value: ITestResultsContext = {
        lastResult,
        resultsHistory,
        saveResult,
        clearResults
    };

    return (
        <TestResultsContext.Provider value={value}>
            {children}
        </TestResultsContext.Provider>
    );
};

export const useTestResults = (): ITestResultsContext => {
    const context = useContext(TestResultsContext);
    if (!context) {
        throw new Error('useTestResults precisa ser usado dentro de TestResultsProvider');
    }
    return context;
};
