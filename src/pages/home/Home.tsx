import { Box, Button, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { MediaType } from '../../Models/Media'
import MediaContent from './MediaContent'

const StyledButton = styled(Button, { shouldForwardProp: (prop) => prop !== "isSelected" })(({ isSelected }: { isSelected: boolean }) => ({
    margin: '8px',
    backgroundColor: isSelected ? 'lightblue' : 'default',
    color: isSelected ? 'white' : 'default'
}))

export default function Home() {
    const guest_session_id = useLocalStorage('guest_session_id', '')[0]

    const navigate = useNavigate()

    useEffect(() => {
        if (!guest_session_id) {
            navigate('/auth')
        }
    }, [guest_session_id, navigate])

    const [mediaType, setMediaType] = useState<MediaType>(MediaType.MOVIES)

    const isMediaTypeMoviesSelected = mediaType === MediaType.MOVIES
    const isMediaTypeTvsSelected = mediaType === MediaType.TV

    return (
        <Box>
            <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <StyledButton isSelected={isMediaTypeMoviesSelected} onClick={() => setMediaType(MediaType.MOVIES)}>Movies</StyledButton>
                <StyledButton isSelected={isMediaTypeTvsSelected} onClick={() => setMediaType(MediaType.TV)}>TV Shows</StyledButton>
            </Box>
            <Box p={1}>
                <MediaContent mediaType={mediaType} rated={false}/>
            </Box>
        </Box>
    )
}
