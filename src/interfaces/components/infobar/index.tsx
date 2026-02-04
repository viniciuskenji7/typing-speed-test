import { PropsInfobar } from "../../types/IPropsInfobar"
import { InfobarDifficulty } from "./infobarDifficulty"
import { InfobarTime } from "./infobarTime"



export const Infobar = ({time, wpm, accuracy, difficulty, changeDifficulty}: PropsInfobar) => {
    return (
        <header className="mt-20 w-full p-3 flex justify-between items-center border-b-2 border-b-neutral-700">
            <InfobarTime time={time} wpm={wpm} accuracy={accuracy} />
            <InfobarDifficulty difficulty={difficulty} changeDifficulty={changeDifficulty}/>
        </header>
    )
}