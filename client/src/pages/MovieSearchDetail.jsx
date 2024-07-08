import { useParams } from 'react-router-dom';
import {QUERY_A_MOVIE_WITH_ID} from '../utils/queries'
import { useQuery } from '@apollo/client';
import MoviePoster from '../components/MoviePoster';
import '../components/Styles/MovieSearchDetail.css';


export default function MovieSearchDetail(){
    const { movieId } = useParams();
    
    const { loading, error, data } = useQuery ( QUERY_A_MOVIE_WITH_ID, {variables:{id:movieId}});
    
    console.log("🚀 ~ MovieSearchDetail ~ movieId:", movieId)
    console.log("🚀 ~ MovieSearchDetail ~ data:", data)




    return (
        <>
        <div className='detailDiv'>
            {!loading ? (
                <div className='detailCont'>
                 <div className='twooftwo'>
                    <MoviePoster props={data.moviewithid} />
                 </div>
                 <div className='oneoftwo'>
                  <h4 className='movtitle'>{data.moviewithid.title && data.moviewithid.title}</h4>
                   <p className='star'>
                   <span className='detailLabel'>Cast:</span> {data.moviewithid.cast && data.moviewithid.cast.join(", ")}</p>
                   <p><span className='detailLabel'>Director:</span> {data.moviewithid.directors && data.moviewithid.directors[0]}</p>
                   <p><span className='detailLabel'>Year:</span> {data.moviewithid.year && data.moviewithid.year}</p>
                   <p><span className='detailLabel'>Genres:</span>  {data.moviewithid.genres && data.moviewithid.genres.join(", ")}</p>
                   <p><span className='detailLabel'>Languages:</span>  {data.moviewithid.languages && data.moviewithid.languages.join(", ")}</p>
                   <p><span className='detailLabel'>Country:</span>  {data.moviewithid.countries && data.moviewithid.countries.join(", ")}</p>
                   <p><span className='detailLabel'>Rated:</span>  {data.moviewithid.rated && data.moviewithid.rated}</p>
                   <p><span className='detailLabel'>Runtime:</span>  {data.moviewithid.runtime && data.moviewithid.runtime} minutes</p>
                   <p><span className='detailLabel'>IMDB</span><br/> <span className='detailLabel'>Rating:</span> {data.moviewithid.imdb[0].rating && data.moviewithid.imdb[0].rating} <span className='detailLabel'>Votes: </span>{data.moviewithid.imdb[0].votes && data.moviewithid.imdb[0].votes}</p>
                   {/* <p><span className='detailLabel'>Rotten Tomatoes:</span> {data.moviewithid.rated && data.moviewithid.rated}</p> */}
                   <p><span className='detailLabel'>Plot:</span><br/> {data.moviewithid.fullplot && data.moviewithid.fullplot}</p>
                 </div>
                 
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>        

        
        </>
    )
}