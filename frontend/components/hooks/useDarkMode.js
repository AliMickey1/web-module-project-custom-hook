import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    return[darkMode, setDarkMode]
}