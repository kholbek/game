import { createContext, useContext, useState } from "react";
import { useInitial } from "../hooks/useInitial";

const AppStateContext = createContext<AppState | null>(null);
const AppActionsContext = createContext<AppActionsState | null>(null);

export const useAppState = () => {
    const state = useContext(AppStateContext);
    if (!state) {
        throw new Error('useAppState must be used within a AppProvider');
    }
    return state;
}

export const useAppActions = () => {
    const state = useContext(AppActionsContext);
    if (!state) {
        throw new Error('useAppActions must be used within a AppProvider');
    }
    return state;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [speed, setSpeed] = useState<number>(1);

    const {
        user,
        users,
        chats,
        gameState,
        ...actions
    } = useInitial()

    return (
        <AppStateContext.Provider value={{ users, user, chats, gameState, speed }}>
            <AppActionsContext.Provider value={{ setSpeed, ...actions }}>
                {children}
            </AppActionsContext.Provider>
        </AppStateContext.Provider>
    );
}