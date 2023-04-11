import { useState } from "react";
import { appLoad, updateBalance } from "../service/api";

export function useInitial() {
    const [gameState, setGameState] = useState<GameStateType>('DEFAULT')
    const [user, setUser] = useState<UserType>()
    const [users, setUsers] = useState<UserType[]>([])
    const [chats, setChats] = useState<ChatType[]>([])

    function fetchUser(name: string){
        appLoad(name).then(data => {
            setUser({
                name: data.name,
                rate: data.balance,
                point: '-',
                multiplier: '-',
                isYou: true,
            })
            setUsers(data.users)
            setChats(data.chats)
        })
    }

    function startGame({ point, multiplier }: StartGameProps) {
        setUser(value => ({
            ...value,
            point: point.toFixed(0),
            multiplier: multiplier.toFixed(2),
            rate: (value?.rate || 0) - point
        }))
        setUsers(value => value.map(user => ({
            ...user,
            point: (Math.random() * 900 + 10).toFixed(0),
            multiplier:  (Math.random() * 10).toFixed(2)
        })))
        setGameState('STARTED')
    }

    function finishGame(multiplier: number) {
        setUsers(value => value.map(user => {
            const multiplied = (parseInt(`${user.point}`) * parseFloat(`${user.multiplier}`)).toFixed(2)
            return {
                ...user,
                point: multiplier > parseFloat(`${user.multiplier}`) ? multiplied : 0,
                score: multiplier > parseFloat(`${user.multiplier}`) ? parseFloat(multiplied) : 0
            }
        }))
        setUser(user => {
            if(user) {
                const score = parseFloat((parseInt(`${user.point}`) * parseFloat(`${user.multiplier}`)).toFixed(2))
                const rate = multiplier > parseFloat(`${user.multiplier}`) ? (user.rate || 0) + score : user.rate
                updateBalance(`${user.name}`, `${rate}`)
                return {
                    ...user,
                    rate,
                    point: multiplier > parseFloat(`${user.multiplier}`) ? score : 0,
                    score: multiplier > parseFloat(`${user.multiplier}`) ? score : 0,
                }
            }
        })
        setGameState('FINISHED')
    }

    return {
        user,
        users,
        fetchUser,
        chats,
        finishGame,
        gameState,
        startGame
    }
}