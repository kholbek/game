import clsx from 'clsx'
import Button from './atom/Button'
import IconGooglechat from './icons/IconChat'
import { useAppState } from '../context/AppContext'

function ChatComponent() {
    const { chats } = useAppState()
    return (
        <div className="col-span-1 h-[170px] bg-transparent overflow-hidden grid grid-rows-board">
            <div className='text-white flex items-center gap-2 font-medium mb-2'>
                <div className='text-sm'><IconGooglechat /></div>
                <div>Chat</div>
            </div>
            <div className="border rounded-md overflow-auto border-[#444548] grid grid-rows-chat">
                <div className='bg-[#181C24] px-2 gap-1 flex-col-reverse flex overflow-auto pb-2'>
                    {
                        chats.map(({ message, sender }, index) => (
                            <div key={index} className='flex gap-1 items-center'>
                                <div className={clsx('text-xs', index%2===0 ? 'text-[#D54F87]' : 'text-[#EA7457]')}>{sender}:</div>
                                <div className='bg-[#595D6B] text-[0.5rem] text-white px-1 rounded-sm'>{message}</div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex bg-[#2E313B] py-2 px-2 gap-2">
                    <div className='w-full'>
                        <input type="text" className='w-full h-full px-4 text-[#afb3c0] caret-[#5b5f6d] bg-[#15191F] outline-none rounded-md' />
                    </div>
                    <Button className='text-sm px-8'>Start</Button>
                </div>
            </div>
        </div>
    )
}

export default ChatComponent