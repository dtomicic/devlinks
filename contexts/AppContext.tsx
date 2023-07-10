import { createContext } from 'react'

interface AppContextProps {
    user: string;
    setUser: (username: string) => void;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)