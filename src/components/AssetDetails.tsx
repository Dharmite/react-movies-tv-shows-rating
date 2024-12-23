import { Box, Card, CardMedia } from "@mui/material";
import { Grid2 } from "@mui/material";

function MediaCardPoster({ image, title }: { image: string; title: string })  {
 return (
  <Box>
    <Card>
      <CardMedia
        component="img"
        height={700}
        image={`https://image.tmdb.org/t/p/w400${image}`}
        alt={title}
      />
    </Card>
    </Box>
  );
}

export default function AssetDetails({ id, poster, title, children }: { id: string, poster: string, title: string, children: React.ReactNode }) { 
    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            padding: '1rem',
            marginTop: '1rem',
          }}>
          <Grid2 container width={'70%'} p={2} border={'1px solid black'} borderRadius={'20px'} >
            <Grid2 size={4} mr={2}>
              <MediaCardPoster image={poster} title={title} key={id} />
            </Grid2>
            <Grid2 size={7}>
                {children}
            </Grid2>
          </Grid2>
          </Box>
    )
}