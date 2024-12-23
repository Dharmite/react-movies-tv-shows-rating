import { Box, Button } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { login } from './login'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
    const navigate = useNavigate()

    const { mutate } = useMutation({
        mutationKey: ['login'],
        mutationFn: login,
        onSuccess: (data) => {
            setGuestSessionId(data)
            setIsLoggedIn('true')
            navigate('/')
        }
    })

    const [guest_session_id, setGuestSessionId] = useLocalStorage('guest_session_id', '')
    const setIsLoggedIn = useLocalStorage('isLoggedIn', '')[1]   

    const handleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if(guest_session_id) {
            setIsLoggedIn('true')
            navigate('/')
            return
        } else {
            setIsLoggedIn('true')
            mutate()
        }
    }


    return (
        <Box p={1}>
            <h1 style={{marginBottom: '16px'}}>Auth</h1>
            <h2 style={{marginBottom: '16px'}}>Welcome! Login by registering as Guest below</h2>
            <form>
                <Button type="submit" variant="contained" color="primary" onClick={handleLogin}>
                    Login
                </Button>
            </form>
        </Box>
    )
}
