type ChatType = {
    sender: string
    message: string
}

type UserType = {
    name?: string
    point: number | string
    multiplier: number | string
}

type AppLoadResponseType = {
    name: string
    balance: number
    users: UserType[]
    chats: ChatType[]
}