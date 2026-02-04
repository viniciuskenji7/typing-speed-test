import { ReactNode } from "react"

interface LayoutProps {
    children: ReactNode;
    startTime: boolean;
    onClick: () => void
}

export const LayoutBlur = ({children, startTime, onClick}: LayoutProps) => {
    return (
        <div onClick={onClick} className={`${startTime ? 'blur-none' : 'blur-md'} h-full w-full flex flex-col items-center gap-5 cursor-default`}>
            {children}
        </div>
    )
}