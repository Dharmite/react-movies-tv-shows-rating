import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchTvShowDetails } from './fetchTvShowDetails';
import AssetDetails from '../../components/AssetDetails';
import { Box, Typography } from '@mui/material';
import type { TvShowDetails } from '../../Models/Media';
import { AssetDetailsTypography } from '../../components/AssetDetailsTypography';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function TvShowDetails() {
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading } = useQuery<TvShowDetails>({
    queryKey: ['tvShowDetails'],
    queryFn: () => fetchTvShowDetails(id),
  });

  if (!id) return <div>Not found</div>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { poster_path, name, adult, overview, vote_count, vote_average, popularity, original_language, genres, origin_country, first_air_date, created_by, languages, last_episode_to_air, networks, number_of_episodes, number_of_seasons, seasons } = data!;
  return (
    <AssetDetails id={id} poster={poster_path} title={name}>
      <Typography variant="h4">{name}</Typography>
      <AssetDetailsTypography title="Rating" value={vote_average.toString()} />
      <AssetDetailsTypography title="Vote Count" value={vote_count.toString()} />
      <AssetDetailsTypography title="Popularity" value={popularity.toString()} />
      <AssetDetailsTypography title="Original Language" value={original_language} />
      <AssetDetailsTypography title="Adult" value={adult ? "Yes" : "No"} />
      <AssetDetailsTypography title="Genres" value={genres.map(genre => genre.name).join(', ')} />
      <AssetDetailsTypography title="Origin Country" value={origin_country.join(', ')} />
      <AssetDetailsTypography title="First Air Date" value={first_air_date} />
      <AssetDetailsTypography title="Created By" value={created_by.map(creator => creator.name).join(', ')} />
      <AssetDetailsTypography title="Languages" value={languages.join(', ')} />
      <AssetDetailsTypography title="Last Episode to Air" value={last_episode_to_air ? last_episode_to_air.name : 'N/A'} />
      <AssetDetailsTypography title="Networks" value={networks.map(network => network.name).join(', ')} />
      <AssetDetailsTypography title="Number of Episodes" value={number_of_episodes.toString()} />
      <AssetDetailsTypography title="Number of Seasons" value={number_of_seasons.toString()} />
      <Box sx={{maxHeight: '120px', overflow: 'scroll'}}>
      {seasons.length > 0 && seasons.map(season => (
        <Accordion key={season.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Season {season.season_number + 1}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AssetDetailsTypography title="Air Date" value={season.air_date} />
            <AssetDetailsTypography title="Episode Count" value={season.episode_count.toString()} />
          </AccordionDetails>
        </Accordion>
      ))}
      </Box>

      <AssetDetailsTypography title="Description" value={overview} />
    </AssetDetails>
  )
}
