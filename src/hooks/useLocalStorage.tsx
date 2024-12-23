import { useEffect, useState } from "react"

export function useLocalStorage(key: string, initialValue: string): [string, React.Dispatch<React.SetStateAction<string>>] {
    const [value, setValue] = useState(localStorage.getItem(key) || initialValue)

    useEffect(() => {
        localStorage.setItem(key, value)
    }, [value, key])

    return [value, setValue]
}
