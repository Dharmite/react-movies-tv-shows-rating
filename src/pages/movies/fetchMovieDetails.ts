
export const fetchMovieDetails = async (id: string | undefined) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDg3ZjFmZDhmNjM3MzQyYzk2ZmQyNmY1NzAzMDUyNSIsIm5iZiI6MTczMzc2NDI1OS43MDMsInN1YiI6IjY3NTcyNGEzY2YxODAxOTY4ZjAyZmEzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jc97chTwiOvUKpKlCkP07XCv8l7hmjc7n5yxq24bvO8",
        },
      }
    );

  
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    
    return data;
  };