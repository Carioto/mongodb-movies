import './Random.css';
import { QUERY_ALL_MOVIES, QUERY_RANDOM_MOVIE, QUERY_FOCUSED_RANDOM_MOVIE } from '../utils/queries';
import { useQuery,useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import YearScroll from '../components/YearScroll'

export default function Random(){
    const { movieData, setMovieData } = useState("");
    const { loading, error, data } = useQuery(QUERY_RANDOM_MOVIE);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;


    // useEffect(() => {
    //         getData({variables:zipper})
    //         console.log("🚀 ~ useEffect ~ getData:", getData)
            
    //     },[zipper])
        
        function HandleRandClick(year) {
            console.log(parseInt(year.target.value));
            console.log(year.target.value)
    }

    




    return (
        <>
        <div className='randDiv'>
            <h3>RANDOM Releases</h3>
            {!loading ? (
                <div className='randMovCont'>
                 <div className='oneofthree'>
                  <h4 className='movtitle'>{data.randmovie.title}</h4>
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
                    <h4>Narrow the Search -- not complete</h4>
                    <YearScroll onChange={HandleRandClick}/>
            
                    <button className='nextrand' onClick={HandleRandClick}>Next Random</button>
                    </div>
                </div>

            ) : (
                <div>Loading...</div>
            )}






        </div> 
 
        
        
        </>
    )
}