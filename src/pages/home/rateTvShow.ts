export const rateMovie = async (id: number, rating: number) => {
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${import.meta.env.MOVIE_API_KEY}`
        },
        body: `{"value":${rating}}`
      };
      
      const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/rating?guest_session_id=${localStorage.getItem('guest_session_id')}&api_key=${import.meta.env.MOVIE_API_KEY}`, options)

      return res.json()
  };