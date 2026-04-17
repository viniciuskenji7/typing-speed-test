'use client';
import { useMemo, useState } from "react";
import { Infobar } from "../../components/infobar"
import { SpeedTest } from "../../components/speedTest"
import { Button } from "../../components/button";
import { LayoutBlur } from "../../layouts/LayoutBlur";
import Image from "next/image";
import searchText from "@/src/utils/searchText";
import { DifficultyConfig, DifficultyLevel, Mode} from "../../types/IPropsInfobar";

export const HomePage = () => {
    const [segundos, setSegundos] = useState(0);
    const [startTime, setStartTime] = useState(false);
    const [content, setContent] = useState('');
    
    // Logica dos levels
    const levels = searchText;
    
    const easy = levels().easy.map((level) => (
        level.id,
        level.text
    ));
    const medium = levels().medium.map((level) => (
        level.id,
        level.text
    ));
    const hard = levels().hard.map((level) => (
        level.id,
        level.text
    ));
    
    const texts: DifficultyConfig = {
        easy,
        medium,
        hard
    };

    const [mode, setMode] = useState<Mode>('Timed');

    const [difficulty, setDifficulty] = useState<DifficultyLevel>('easy');
    const [text, setText] = useState<string>(easy[0]);

    const handleDifficulty = (level: DifficultyLevel) => {
        if (startTime) return;
        const list = texts[level];
        const random = Math.floor(Math.random() * list.length);
        setText(list[random]);
        setDifficulty(level);
    }

    // Comparação
    const comparison = useMemo((): { char: string; status: 'pending' | 'correct' | 'incorrect' | 'finish' }[] => {
        return text.split('').map((char: string, index: number) => {

            const typedChar: string = content[index];
            
            if (typedChar == null) {
                return { char, status: 'pending' };
            }
            
            if (typedChar === char) {
                return { char, status: 'correct' };
            }

            if (content.length - 1 === text.length - 1) {
                return { char, status: 'finish' }
            }

            return { char, status: 'incorrect' };
        });
    }, [content, text]);

    // Calculo Acuracia
    const accuracy = useMemo(() => {
        const typedLength = content.length;
        if (typedLength === 0) return 0;

        const correctChars = comparison.filter(
            c => c.status === 'correct'
        ).length;

        return Math.round((correctChars / typedLength) * 100);
    }, [comparison, content.length]);

    // Calculo WPM
    const wordsPerMinute = useMemo(() => {
        if (segundos === 0) return 0;

        const correctChars = comparison.filter(
            c => c.status === 'correct'
        ).length;

        return Math.round((correctChars / 5) / (segundos / 60));
    }, [comparison, segundos]);

    // Startando tempo com clique
    const handleClickTime = () => {
        if (startTime) return;  
        const intervalo = setInterval(() => {
            setSegundos(s => s + 1);
        }, 1000);
        setStartTime(true);
        return () => clearInterval(intervalo);

        // Ideias para inclusão de logica com outros modos

        // if (mode === 'Timed') {    
        //     const intervalo = setInterval(() => {
        //         setSegundos(s => s - 1);
        //     }, 1000);
        //     setStartTime(true);
        //     return () => clearInterval(intervalo);
        // }
        // if (mode === 'Passage') {
        //     const intervalo = setInterval(() => {
        //         setSegundos(s => s + 1);
        //     }, 1000);
        //     setStartTime(true);
        //     return () => clearInterval(intervalo);
        // }
    }

    const handleMode = (mode: Mode) => {
        if (startTime) return;
        setMode(mode);

        // Ideias para tratativa de tempo com outros modos
        // if (mode === 'Timed') {
        //     setSegundos(60);
        // }
        // if (mode === 'Passage') {
        //     setSegundos(0);
        // }
    }

    
    return (
        <main>
            <Infobar
                time={segundos}
                wpm={wordsPerMinute}
                accuracy={accuracy}
                difficulty={difficulty}
                changeDifficulty={handleDifficulty}
                mode={mode}
                changeMode={handleMode}
            />
            <div className={!startTime ? 'flex flex-col absolute top-120 left-200 gap-3 items-center justify-center' : 'hidden'}>
                <Button
                    event={handleClickTime}
                    colors="primary"
                    text="light"
                    className="z-50"
                >
                    Start Typing Test
                </Button>
                <p className="text-white">
                    Or click the text and start typing
                </p>
            </div>
            <LayoutBlur
                startTime={startTime}
                onClick={handleClickTime}
            >
                <SpeedTest
                    startTime={startTime}
                    comparison={comparison}
                    content={content}
                    setContent={setContent}
                    text={text}
                />
                <Button
                    colors="neutral"
                    text="light"
                >
                    Restart Test
                    <Image
                        src={'/undo.svg'}
                        alt="Undo Icon"
                        height={20}
                        width={20}
                    />
                </Button>
            </LayoutBlur>
        </main>
    )
}