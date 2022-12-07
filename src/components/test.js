const test = () => {
    useEffect(() => {
        fetch("http://127.0.0.1:3000/artists")
          .then((r) => r.json())
          .then((artists) => {
            console.log(artists)
            setArtists(artists)
          });
      }, []);

      

    return ( 
        <>
            {artists.map((artist) => (
                <div id={artist.id}>
                    <p>{artist.email}</p>

                </div>
            ))}
        </>
     );
}
 
export default test;