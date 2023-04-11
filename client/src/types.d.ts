type UserType = {
    name?: string
    point: number | string
    multiplier: number | string
    score?: number
    rate?: number
    isYou?: boolean
}

type GameStateType = 'DEFAULT' | 'STARTED' | 'FINISHED'

type ChatType = {
    sender: string
    message: string
}

type AppState = {
    user: UserType | undefined;
    users: UserType[];
    chats: ChatType[];
    gameState: GameStateType;
    speed: number
}

type AppActionsState = {
    setSpeed: (value: number) => void;
    fetchUser: (value: string) => void;
    startGame: (value: StartGameProps) => void;
    finishGame: (value: number) => void;
}

type InputProps = {
    title?: string
    defaultValue?: number
    incrementBy?: number
    min?: number
    max?: number
    float?: boolean
    inputRef?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    onChange?: (value: number) => void
}

type SliderProps = {
    min?: number
    max?: number
    onChange?: (value: number) => void
}

type StartGameProps = {
    point: number
    multiplier: number
}

type AppLoadResponseType = {
    name: string
    balance: number
    users: UserType[]
    chats: ChatType[]
}