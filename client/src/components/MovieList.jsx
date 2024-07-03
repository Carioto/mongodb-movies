import './Styles/MovieList.css'

export default function MovieList({props}) {
   console.log("🚀 ~ MovieList ~ props:", props)
   
    if(props){
        const movieList = props.movieswithparams.map((movie) =>             <tr className='listrow' key={movie._id} value={movie.title}>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.cast}</td>             
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