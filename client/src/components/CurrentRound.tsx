import clsx from 'clsx'
import { useAppState } from '../context/AppContext'
import IconPeopleLine from './icons/IconPeople'

function CurrentRoundComponent() {
    const { users, user, gameState } = useAppState()

    return (
        <div className="bg-transparent">
                <div className='text-white flex items-center gap-2 font-medium mb-2'>
                    <div className='text-lg'><IconPeopleLine /></div>
                    <div>Current Round</div>
                </div>
                <div className='flex flex-col border border-[#767984] rounded-md overflow-auto'>
                    <table>
                        <thead>
                            <tr className='text-[0.6rem] text-[#767984]'>
                                <th className='w-[50px] text-left pl-2 py-1'>Name</th>
                                <th className='w-[40px] text-right'>Point</th>
                                <th className='w-[40px] text-center'>Multiplier</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={clsx('text-xs text-white font-medium bg-[#495060]', gameState === 'FINISHED' ? `${user?.point === 0 ? '!text-[#E66371]' : '!text-[#71A997]'}` : 'text-white')}>
                                <td className='text-left py-2 pl-2'>You</td>
                                <td className='text-right'>{user?.point}</td>
                                <td className='text-center'>{user?.multiplier}</td>
                            </tr>
                            {
                                users.map((user, index) => (
                                    <tr key={index} className={
                                        clsx(
                                            'text-xs font-medium',
                                            gameState === 'FINISHED' ? `${user.point === 0 ? 'text-[#E66371]' : 'text-[#71A997]'}` : 'text-white',
                                            index%2 === 0 ? 'bg-[#282D38]' : 'bg-[#1C222B]'
                                        )
                                    }>
                                        <td className='text-left py-2 pl-2'>{user.name}</td>
                                        <td className='text-right'>{['STARTED', 'FINISHED'].includes(gameState) ? user.point : '-'}</td>
                                        <td className='text-center'>{['STARTED', 'FINISHED'].includes(gameState) ? user.multiplier : '-'}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default CurrentRoundComponent