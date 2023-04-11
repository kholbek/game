import Slider from "./atom/Slider"
import clsx from "clsx"
import { useAppActions, useAppState } from "../context/AppContext"
import IconSpeedometerSharp from "./icons/IconSpeed"

function SpeedComponent() {
    const { speed } = useAppState()
    const { setSpeed } = useAppActions()

    function handleSpeedChange(value: number) {
        if(value < 25) {
            setSpeed(1)
        }
        else if(value < 50) {
            setSpeed(2)
        }
        else if(value < 75) {
            setSpeed(3)
        }
        else if(value < 100) {
            setSpeed(4)
        }
        else if(value === 100) {
            setSpeed(5)
        }
    }

    return (
        <div className="bg-transparent">
            <div className='text-white flex items-center gap-2 font-medium mb-2'>
                <div className="text-md"><IconSpeedometerSharp /></div>
                <div>Speed</div>
            </div>
            <div className="flex flex-col bg-[#252A38] border border-[#383E4B] rounded-md px-3 pt-4 pb-2">
                <Slider onChange={handleSpeedChange}/>
                <div className="flex mt-2 text-white text-[0.6rem] justify-between">
                    <div className={clsx({ 'text-[#D54F87]': speed >= 1 })}>1x</div>
                    <div className={clsx({ 'text-[#D54F87]': speed >= 2 })}>2x</div>
                    <div className={clsx({ 'text-[#D54F87]': speed >= 3 })}>3x</div>
                    <div className={clsx({ 'text-[#D54F87]': speed >= 4 })}>4x</div>
                    <div className={clsx({ 'text-[#D54F87]': speed === 5 })}>5x</div>
                </div>
            </div>
        </div>
    )
}

export default SpeedComponent