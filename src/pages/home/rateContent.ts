export const rateMovie = async (id: string, rating: number) => {
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDg3ZjFmZDhmNjM3MzQyYzk2ZmQyNmY1NzAzMDUyNSIsIm5iZiI6MTczMzc2NDI1OS43MDMsInN1YiI6IjY3NTcyNGEzY2YxODAxOTY4ZjAyZmEzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jc97chTwiOvUKpKlCkP07XCv8l7hmjc7n5yxq24bvO8'
        },
        body: `{"value":${rating}}`
      };
      
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/rating`, options)

    if (!res.ok) {
        throw new Error(`Failed to rate movie with ID: ${id}`);
    }

    return await res.json();
};

export const rateTvShow = async (id: string, rating: number) => {
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDg3ZjFmZDhmNjM3MzQyYzk2ZmQyNmY1NzAzMDUyNSIsIm5iZiI6MTczMzc2NDI1OS43MDMsInN1YiI6IjY3NTcyNGEzY2YxODAxOTY4ZjAyZmEzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jc97chTwiOvUKpKlCkP07XCv8l7hmjc7n5yxq24bvO8'
        },
        body: `{"value":${rating}}`
      };
      
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/rating`, options)

    if (!res.ok) {
        throw new Error(`Failed to rate tv show with ID: ${id}`);
    }

    return await res.json();
};