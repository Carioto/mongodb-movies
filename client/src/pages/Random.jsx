import './Random.css';
import { QUERY_RANDOM_MOVIE } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import YearScroll from '../components/YearScroll'
import MoviePoster from '../components/MoviePoster';

const getRandYear = Math.floor(Math.random()*(Math.floor(2015) - Math.ceil(1933)) + Math.ceil(1933));

export default function Random(){
    const [ year, setYear ] = useState(getRandYear);
    const { loading, error, data, refetch } = useQuery(QUERY_RANDOM_MOVIE, {
        variables:{ year:year },
    });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
            
    const childToParent = (getData) => {
            setYear(parseInt(getData.value));
            console.log("🚀 ~ Search ~ setYearSearch:", parseInt(getData.value))
            console.log("🚀 ~ Search ~",year)
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
                   {/* <p>released: {data.randmovie.released}</p> */}
                   <p className='plot' >Plot: {data.randmovie.plot}</p>
                 </div>
                 <div className='twoofthree'>
                    <MoviePoster props={data} />
                 </div>
                 <div className='threeofthree'>
                    <h4>Narrow the Search</h4>
                    <YearScroll childToParent={childToParent}/>
            
                    <button className='nextrand' onClick={() => refetch()}>Next Random</button>
                    </div>
                </div>

            ) : (
                <div>Loading...</div>
            )}






        </div> 
 
        
        
        </>
    )
}