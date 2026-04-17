import { IButton } from "../../types/IButton"



export const Button = ({
    children,
    className,
    event,
    colors,
    text,
}: IButton) => {
    const bgColors = {
        primary: 'bg-blue-600',
        neutral: 'bg-neutral-800',
        white: 'bg-neutral-50',
    };

    const textColors = {
        light: 'text-white',
        dark: 'text-black',
    };

    return (
        <button type="button" onClick={event} className={`${bgColors[colors]} ${textColors[text]} p-4 rounded-md text-xl flex items-center gap-2 cursor-pointer ${className}`}>
            {children}
        </button>
    )
}