import './Home.css';
import { QUERY_RECENT_MOVIES } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
let randMovIndex = 0

export default function Home(){
    const [movInd, setMovInd] = useState(randMovIndex);
      
    const { loading, error, data } = 
    useQuery(QUERY_RECENT_MOVIES)
    console.log("🚀 ~ Home ~ data:",data)
    
    if (!loading){
        const indexLength = data.movies.length
        randMovIndex = Math.floor(Math.random() * indexLength)
    }
    
    useEffect(() => {
        setMovInd(randMovIndex);
    },[data])

    function handleRandClick() {
        console.log('hi');
    }

    return (
        <>
        <div className='homeDiv'>
            <h3>RANDOM Releases</h3>
            {/* <h3>Recent Releases</h3> */}
            {!loading ? (
                <div className='randMovCont'>
                 <div className='oneofthree'>
                  <h4>{data.movies[movInd].title}</h4>
                   <p className='star'>
                     Star: {data.movies[movInd].cast[0]}</p>
                   <p>
                     Director: {data.movies[movInd].directors[0]}</p>
                   <p>Year: {data.movies[movInd].year}</p>
                   <p className='plot' >Plot: {data.movies[movInd].plot}</p>
                 </div>
                 <div className='twoofthree'>
                    <img className='moviePoster' src={data.movies[movInd].poster} alt='Movie Poster'/>
                 </div>
                 <div className='threeofthree'>
                    <button className='nextrand' onClick={handleRandClick}>Next Random</button>
                    </div>
                </div>

            ) : (
                <div>Loading...</div>
            )}






        </div>
 
        
        
        </>
    )
}