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
            <h5>Movie Details</h5>
            {!loading ? (
                <div className='detailCont'>
                 <div className='oneoftwo'>
                  <h4 className='movtitle'>{data.moviewithid.title && data.moviewithid.title}</h4>
                   <p className='star'>
                     Cast: {data.moviewithid.cast && data.moviewithid.cast.join(",")}</p>
                   <p>Director: {data.moviewithid.directors && data.moviewithid.directors[0]}</p>
                   <p>Year: {data.moviewithid.year && data.moviewithid.year}</p>
                   <p>Genres:  {data.moviewithid.genres && data.moviewithid.genres.join(",")}</p>
                   <p>Languages:  {data.moviewithid.languages && data.moviewithid.languages.join(",")}</p>
                   <p>Country:  {data.moviewithid.countries && data.moviewithid.countries.join(",")}</p>
                   <p>Rated:  {data.moviewithid.rated && data.moviewithid.rated}</p>
                   <p>Plot: {data.moviewithid.fullplot && data.moviewithid.fullplot}</p>
                   <p>IMDB Rating: {data.moviewithid.rated && data.moviewithid.rated}</p>
                   <p>Rotten Tomatoes: {data.moviewithid.rated && data.moviewithid.rated}</p>
                 </div>
                 <div className='twooftwo'>
                    <MoviePoster props={data.moviewithid} />
                 </div>
                 
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>        

        
        </>
    )
}