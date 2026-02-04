import { ReactNode } from "react"

export interface PropsLayout {
    children: ReactNode
}

export default function Layout({children}: PropsLayout) {
    return (
        <>
            {children}
        </>
    )
}