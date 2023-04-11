import clsx from "clsx"
import { useMemo } from "react"
import { useAppState } from "../context/AppContext"
import IconRankingStar from "./icons/IconRanking"

function RankingComponent() {
    const { users, user, gameState } = useAppState()
    const ranks = useMemo<UserType[]>(() => {
        if(gameState === 'FINISHED') {
            if(users.length) {
                return [...users, user!].sort((a, b) => (a.score || 0) > (b.score || 0) ? -1 : 1)
            }
            return Array.from({ length: 5 }, () => ({ name: '-', score: -1, multiplier: '-', point: '-' }))
        }
        return Array.from({ length: 5 }, () => ({ name: '-', score: -1, multiplier: '-', point: '-' }))
    }, [user, users, gameState])
    return (
        <div className="col-span-1 h-[170px] bg-transparent overflow-hidden">
            <div className='text-white flex items-center gap-2 font-medium mb-2'>
                <div className="text-lg"><IconRankingStar /></div>
                <div>Ranking</div>
            </div>
            <div className="flex flex-col border border-[#575960] rounded-md overflow-auto">
                <table>
                    <thead className="text-[0.6rem] text-left text-[#767984]">
                        <tr>
                            <th className="pl-8">No.</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ranks.map((rank, index) => (
                                <tr key={index} className={clsx('text-xs w-full text-left text-white font-medium', index%2 === 0 ? 'bg-[#282D38]' : 'bg-[#1C222B]', rank.isYou && 'bg-[#495060]')}>
                                    <td className="pl-8 py-1">{index + 1}</td>
                                    <td>{rank.isYou ? 'You' : rank.name}</td>
                                    <td>{rank.score === -1 ? '-' : rank.score}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RankingComponent