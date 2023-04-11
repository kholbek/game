import clsx from "clsx"
import { useAppState } from "../context/AppContext"
import { useBoard } from "../hooks/useBoard"
import Card from "./atom/Card"
import IconClock from "./icons/IconClock"
import IconMedal from "./icons/IconMedal"
import IconUser from "./icons/IconUser"

function BoardComponent() {
    const { user, gameState } = useAppState()
    const { valueRef, ballRef, pathRef } = useBoard()

    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    const time = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`

    return (
        <div className="bg-transparent grid grid-rows-board gap-4">
            <div className="bg-transparent gap-4 grid grid-cols-3">
                <Card className="h-11 grid grid-cols-3 items-center">
                    <div className="text-2xl text-white pl-2">
                        <IconMedal />
                    </div>
                    <div className="text-white text-center">{user?.rate}</div>
                    <div className=""></div>
                </Card>
                <Card className="h-11 grid grid-cols-3 items-center">
                    <div className="text-2xl text-white pl-2">
                        <IconUser />
                    </div>
                    <div className="text-white text-center">{user?.name}</div>
                    <div className=""></div>
                </Card>
                <Card className="h-11 grid grid-cols-3 items-center">
                    <div className="text-2xl text-white pl-2">
                        <IconClock />
                    </div>
                    <div className="text-white text-center">{user ? time : ''}</div>
                    <div className=""></div>
                </Card>
            </div>
            <div className="border-[#343949] border bg-[#222633] rounded-md">
                <div className="flex flex-col relative justify-end h-full w-full pb-14 px-8">
                    <div className={clsx("text-white font-bold text-6xl text-center mt-16", gameState === 'FINISHED' && '!text-[#E66371]')}><span ref={valueRef}>0.00</span>x</div>
                    <div className="relative h-[222px]">
                        <svg className="z-1 absolute" width="520" height="224" viewBox="0 0 520 224" fill="none">
                            <path ref={pathRef} className="path" d="M6.8575 222C26.8575 222 -77.4177 222 124.963 222C327.343 222 448.877 149.454 518 1" stroke="#D56E6D" strokeWidth="3"/>
                        </svg>
                        <div ref={ballRef} className="ball"></div>
                    </div>
                    <div className="h-[2px] bg-[#626874] w-full"/>
                    <div className="flex justify-between px-2 mt-2">
                        {
                            Array.from({ length: 11 }, (_, i) => <div className="text-[#626874] text-center" key={i}>{i}</div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardComponent