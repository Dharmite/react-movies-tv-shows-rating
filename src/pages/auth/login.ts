export const login = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${import.meta.env.VITE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
        },
      }
    );
  
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    
    const { guest_session_id } = await res.json();

    return guest_session_id
  };