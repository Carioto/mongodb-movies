import './Random.css';
import { QUERY_ALL_MOVIES, QUERY_RANDOM_MOVIE } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
let randMovIndex = 0

export default function Random(){
    const [movInd, setMovInd] = useState(randMovIndex);
  
    const { loading, error, data } = useQuery(QUERY_RANDOM_MOVIE)
    console.log("🚀 ~ Random ~ data:", data)


    
  
    // useEffect(() => {
    //     setMovInd(randMovIndex);
    // },[data])

    function handleRandClick() {
        console.log('hi');
    }

    return (
        <>
        <div className='randDiv'>
            <h3>RANDOM Releases</h3>
            {!loading ? (
                <div className='randMovCont'>
                 <div className='oneofthree'>
                  <h4>{data.randmovie.title}</h4>
                   <p className='star'>
                     Star: {data.randmovie.cast[0]}</p>
                   <p>
                     Director: {data.randmovie.directors[0]}</p>
                   <p>Year: {data.randmovie.year}</p>
                   <p>released: {data.randmovie.released}</p>
                   <p className='plot' >Plot: {data.randmovie.plot}</p>
                 </div>
                 <div className='twoofthree'>
                    <img className='moviePoster' src={data.randmovie.poster} alt='Movie Poster'/>
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