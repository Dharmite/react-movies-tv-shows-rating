const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDg3ZjFmZDhmNjM3MzQyYzk2ZmQyNmY1NzAzMDUyNSIsIm5iZiI6MTczMzc2NDI1OS43MDMsInN1YiI6IjY3NTcyNGEzY2YxODAxOTY4ZjAyZmEzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jc97chTwiOvUKpKlCkP07XCv8l7hmjc7n5yxq24bvO8";

const fetchUrl = (type: 'movies' | 'tv', rated: boolean) => {
  const baseUrl = `https://api.themoviedb.org/3`;
  const accountUrl = `${baseUrl}/account/21679135/rated/${type}?language=en-US&page=1&sort_by=created_at.asc`;
  const popularUrl = `${baseUrl}/${type === 'movies' ? 'movie' : 'tv'}/popular?language=en-US&page=1`;

  return rated ? accountUrl : popularUrl;
};

const fetchMedia = async (type: 'movies' | 'tv', rated: boolean) => {
  const res = await fetch(fetchUrl(type, rated), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status} ${res.statusText}`);
  }

  return res.json();
};

export const fetchMovies = (rated: boolean) => fetchMedia('movies', rated);
export const fetchTvShows = (rated: boolean) => fetchMedia('tv', rated);
