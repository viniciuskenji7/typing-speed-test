'use client';
import { useEffect, useRef } from "react"
import { ISpeedTest } from "../../types/ISpeedTest";

export const SpeedTest = ({ startTime, comparison, content, setContent, text }: ISpeedTest) => {

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.disabled = !startTime;
            if (startTime) {
                textareaRef.current.focus();
            }
        }
    }, [startTime, textareaRef]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Backspace' || e.key === 'Delete') {
            e.preventDefault();
        }
    };


    const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
        event.preventDefault();
    }



    return (
        <section className="flex justify-center items-center w-full flex-wrap text-neutral-400 text-5xl border-b-2 border-b-neutral-700 p-10">
            <div className="relative w-full flex items-center">
                <textarea
                    className="outline-0 border-0 resize-none w-full h-full leading-14 text-transparent"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onPaste={handlePaste}
                    minLength={100}
                    ref={textareaRef}
                    maxLength={text.length}
                    spellCheck='false'
                    autoFocus
                    rows={10}
                    cols={40}
                    name="input-wpm"
                    id="input-wpm"
                />
                <span id="text-test" className="absolute top-0 w-full text-5xl leading-14 whitespace-pre-wrap break-word">
                    {comparison.map((item, index) => (
                        <span
                            key={index}
                            className={
                                `
                                    transition-colors
                                    ${
                                    item.status === 'correct'
                                    ? 'text-green-500'
                                    : item.status === 'incorrect'
                                        ? 'text-red-500 underline'
                                        : 'text-neutral-400'
                                }
                                    `
                            }
                        >
                            {item.char}
                        </span>
                    ))}
                </span>
            </div>
        </section>
    )
}
