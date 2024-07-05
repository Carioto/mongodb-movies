import './Styles/MovieList.css'

export default function MovieList({props}) {
   console.log("🚀 ~ MovieList ~ props:", props)
   
    if(props){
        const movieList = props.movieswithparams.map((movie) =>             <tr className='listrow' key={movie._id} value={movie.title}>
            <td><a href="#">{movie.title}</a></td>
            <td>{movie.year}</td>
            <td>{movie.cast.join(",")}</td>
            <td>{movie.plot}</td>
        </tr>   
        );
        return (
            <>
            <table className='movielist'>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Cast</th>
                    <th>Plot</th>
                  </tr>
                </thead>
                <tbody>
                {movieList}
                </tbody>
                
            </table>
            </>
        )


    }
}