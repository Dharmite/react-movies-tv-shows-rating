import { MediaMoviesType, MediaResponse, MediaTvType, MediaType } from "../../Models/Media";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Box, Button, Card, CardContent, CardMedia, Grid2, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { rateMovie, rateTvShow } from "./rateContent";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMovies, fetchTvShows } from "./fetchMedia";

interface MediaContentProps {
    mediaType: MediaType;
    rated: boolean;
}

const MediaCard = ({ image, title, overview, mediaType, id, rated, myRating }: { image: string; title: string, overview: string, mediaType: MediaType, id: string, rated: boolean, myRating: number | undefined }) => {
    const [rating, setRating] = useState<number>(0);

    const onSuccess = () => {
        toast.success('Rating submitted successfully!');
    }

    const onError = () => {
        <form>
        <Box
            style={{
                display: 'flex',
                alignItems: 'center', // Align items vertically
                gap: '8px', // Add spacing between the input and button
                marginTop: '16px', // Add some space at the top
            }}
        >
            <TextField
                type="number"
                slotProps={{ htmlInput: { min: 0, max: 10 } }}
                name="rating"
                label="Rating"
                variant="outlined"
                onChange={(e) => setRating(parseInt(e.target.value))}
                sx={{
                    height: '56px', // Ensure height matches the button
                    width: '25%', // Keep width manageable
                    '& .MuiInputBase-root': {
                        height: '56px', // Adjust input height explicitly
                    },
                }}
            />
            <Button
                type="button"
                variant="contained"
                onClick={handleRating}
                sx={{
                    height: '56px', // Match TextField height
                    padding: '0 16px', // Adjust padding for consistency
                }}
            >
                Rate
            </Button>
        </Box>
    </form>
        toast.error('Failed to submit rating');
    }

    const { mutate: rateMovieMutation } = useMutation({
        mutationKey: ['rateMovie'],
        mutationFn: () => rateMovie(id, rating),
        onSuccess,
        onError,
    })

    const { mutate: rateTvShowMutation } = useMutation({
        mutationKey: ['rateTvShow'],
        mutationFn: () => rateTvShow(id, rating),
        onSuccess,
        onError,
    })


    const mutate = mediaType === MediaType.MOVIES ? rateMovieMutation : rateTvShowMutation

    const handleRating = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        mutate()
    }

    return (
        <Card>
            <Link to={`/${mediaType.toLowerCase()}/${id}`}>
                <CardMedia
                    component="img"
                    height="400"
                    image={`https://image.tmdb.org/t/p/w400${image}`}
                    alt={title}
                />
            </Link>

            <CardContent>
                <Typography variant="h4" component="div">
                    {title}
                </Typography>
                <Typography variant="h6" component="div">
                    {overview.length > 0 && (
                        overview.length > 100 ? overview.substring(0, 100) + "..." : overview
                    )}
                </Typography>
                {!rated ? <form>
                    <Box
                        style={{
                            display: 'flex',
                            alignItems: 'center', // Align items vertically
                            gap: '8px', // Add spacing between the input and button
                            marginTop: '16px', // Add some space at the top
                        }}
                    >
                        <TextField
                            type="number"
                            slotProps={{ htmlInput: { min: 0, max: 10 } }}
                            name="rating"
                            label="Rating"
                            variant="outlined"
                            onChange={(e) => setRating(parseInt(e.target.value))}
                            sx={{
                                height: '56px', // Ensure height matches the button
                                width: '25%', // Keep width manageable
                                '& .MuiInputBase-root': {
                                    height: '56px', // Adjust input height explicitly
                                },
                            }}
                        />
                        <Button
                            type="button"
                            variant="contained"
                            onClick={handleRating}
                            sx={{
                                height: '56px', // Match TextField height
                                padding: '0 16px', // Adjust padding for consistency
                            }}
                        >
                            Rate
                        </Button>
                    </Box>
                </form> :
                    <Box>
                        <Typography variant="h6" style={{ textDecoration: 'underline' }}>
                            My rating is: {myRating}
                        </Typography></Box>}



            </CardContent>
        </Card>)
};

export default function MediaContent({ mediaType, rated }: MediaContentProps) {
    const fetchMedia = mediaType === MediaType.MOVIES ? fetchMovies : fetchTvShows;
    const { data, error, isLoading } = useQuery<MediaResponse<MediaMoviesType | MediaTvType>>({
        queryKey: [mediaType],
        queryFn: () => fetchMedia(rated),
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const isMovies = mediaType === MediaType.MOVIES;

    return (
        <Grid2 container spacing={2}>
            {data?.results.map((media) => (
                <Grid2 key={media.id} size={4}>
                    <MediaCard
                        image={media.poster_path}
                        title={isMovies ? (media as MediaMoviesType).title : (media as MediaTvType).original_name}
                        overview={media.overview}
                        mediaType={mediaType}
                        id={media.id.toString()}
                        rated={rated}
                        myRating={media.rating}
                    />
                </Grid2>
            ))}
        </Grid2>
    );
}
