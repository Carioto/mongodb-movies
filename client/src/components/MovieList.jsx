import './Styles/MovieList.css'
import { Link } from 'react-router-dom'
 
export default function MovieList({props}) {
  
    if(props){
        const movieList = props.movieswithparams.map((movie) =>             <tr className='listrow' key={movie._id} value={movie.title}>
            <td><Link to={`/MovieSearchDetail/${movie._id}`}>{movie.title}</Link></td>
            <td className='yearData'>{movie.year}</td>
            <td>{movie.cast.join(", ")}</td>
            <td>{movie.plot || "Not Available"}</td>
        </tr>   
        );
        return (
            <>
            <h4>Your search results</h4>
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
            <div className='nomess'> 
               Start over here:
             <p className='button-container-1'>
               <span className="mas">New Search</span>
               <button name='newSearch' className='pamsBut '
               onClick={() => window.location.reload()}
               >New Search</button>
            </p>  
            </div>
            </>
        )


    }
}
