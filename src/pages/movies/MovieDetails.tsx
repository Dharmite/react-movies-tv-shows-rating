import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "./fetchMovieDetails";
import type { MovieDetails } from "../../Models/Media";
import AssetDetails from "../../components/AssetDetails";
import { AssetDetailsTypography } from "../../components/AssetDetailsTypography";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading } = useQuery<MovieDetails>({
    queryKey: ['movieDetails'],
    queryFn: () => fetchMovieDetails(id),
  });

  if (!id) return <div>Not found</div>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { poster_path, title, adult, overview, release_date, vote_count, vote_average, popularity, original_language, budget, imdb_id, genres, origin_country, revenue, runtime } = data!;

  return (
    <AssetDetails id={id} poster={poster_path} title={title}>
      <Typography variant="h4">{title}</Typography>
      <AssetDetailsTypography title="Release Date" value={release_date}/>
      <AssetDetailsTypography title="Rating" value={vote_average.toString()}/>
      <AssetDetailsTypography title="Vote Count" value={vote_count.toString()}/>
      <AssetDetailsTypography title="Popularity" value={popularity.toString()}/>
      <AssetDetailsTypography title="Original Language" value={original_language}/>
      <AssetDetailsTypography title="Adult" value={adult ? "Yes" : "No"}/>
      <AssetDetailsTypography title="Budget" value={`$${budget.toLocaleString()}`}/>
      <AssetDetailsTypography title="Revenue" value={`$${revenue.toLocaleString()}`}/>
      <AssetDetailsTypography title="Runtime" value={`${runtime} minutes`}/>
      <AssetDetailsTypography title="Genres" value={genres.map(genre => genre.name).join(', ')}/>
      <AssetDetailsTypography title="Origin Country" value={origin_country.join(', ')}/>
      <AssetDetailsTypography title="IMDB ID" value={imdb_id}/>
      <AssetDetailsTypography title="Description" value={overview}/>
    </AssetDetails>
  )
}
