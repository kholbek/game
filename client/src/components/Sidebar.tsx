import Input from './atom/Input'
import Button from './atom/Button'
import CurrentRound from './CurrentRound'
import Speed from './Speed'
import { useAppActions, useAppState } from '../context/AppContext'
import { useRef, useState } from 'react'

function Authorized() {
    const { gameState } = useAppState()
    const { startGame } = useAppActions()
    const pointRef = useRef<HTMLInputElement>()
    const multiplierRef = useRef<HTMLInputElement>()

    function handleStart() {
        startGame({
            point: parseInt(pointRef.current?.value!),
            multiplier: parseFloat(multiplierRef.current?.value!)
        })
    }

    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <Input inputRef={pointRef} min={50} title='Points' incrementBy={25}/>
                <Input inputRef={multiplierRef} min={1.00} title='Multiplier' float incrementBy={0.25}/>
            </div>
            <Button disabled={gameState === 'STARTED'} onClick={handleStart}>{gameState === 'STARTED' ? 'Started' : 'Start'}</Button>
            <CurrentRound />
            <Speed />
        </>
    )
}

function Unauthorized() {
    const [name, setName] = useState('')
    const { fetchUser } = useAppActions()

    return (
        <div className='w-full h-full bg-[#222633] relative rounded-md flex items-center border-[#343949] border'>
            <div className='px-6 w-full'>
            <div className='absolute top-16 right-0 left-0 text-center text-2xl text-[#b9bfcd]'>Welcome</div>
                <div className='text-xs text-center mb-3 text-[#5b5f6d]'>Please insert your name</div>
                <div className='w-full'>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='w-full h-full px-3 py-3 text-[#FFF] caret-[#5b5f6d] bg-[#15191F] border-[#5b5f6d] border outline-none rounded-md' />
                    <Button onClick={() => fetchUser(name)} disabled={name.length < 3} className='w-full mt-2'>Accept</Button>
                </div>
            </div>
        </div>
    )
}

function SidebarComponent() {
    const { user } = useAppState()
    return (
        <div className="bg-transparent gap-4 flex flex-col">
            {
                user ? <Authorized /> : <Unauthorized />
            }
        </div>
    )
}

export default SidebarComponent