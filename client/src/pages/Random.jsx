import '../components/Styles/Random.css';
import { QUERY_RANDOM_MOVIE } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import YearScroll from '../components/YearScroll'
import MoviePoster from '../components/MoviePoster';
import '../components/Button/style.css'

const getRandYear = Math.floor(Math.random()*(Math.floor(2015) - Math.ceil(1933)) + Math.ceil(1933));

export default function Random(){
    const [ year, setYear ] = useState(getRandYear);
    const { loading, error, data, refetch } = useQuery(QUERY_RANDOM_MOVIE, {
        variables:{ year:year },
    });
    const childToParent = (getData) => {
        setYear(parseInt(getData.value));
        }
        
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    if (!data.randmovie) { childToParent(year + 1)}
            

    return (
        <>
        <div className='randDiv'>
            <h3>RANDOM Releases</h3>
            {!loading ? (
                <div className='randMovCont'>
                 <div className='oneofthree'>
                  <h4 className='movtitle'>{data.randmovie.title && data.randmovie.title}</h4>
                   <p className='star'>
                     Cast: {data.randmovie.cast && data.randmovie.cast.join(",")}</p>
                   <p>Director: {data.randmovie.directors && data.randmovie.directors[0]}</p>
                   <p>Year: {data.randmovie.year && data.randmovie.year}</p>
                   <p>Genres:  {data.randmovie.genres && data.randmovie.genres.join(",")}</p>
                   <p>Languages:  {data.randmovie.languages && data.randmovie.languages.join(",")}</p>
                   <p>Country:  {data.randmovie.countries && data.randmovie.countries.join(",")}</p>
                   <p className='plot' >Plot: {data.randmovie.plot && data.randmovie.plot}</p>
                 </div>
                 <div className='twoofthree'>
                    <MoviePoster props={data.randmovie} />
                 </div>
                 <div className='threeofthree'>
                    <h4>Select Year</h4>
                    <YearScroll childToParent={childToParent}/>
                    <span className='yearTitle'>Current Year:
                    <p className='theYear'>{year}</p>
                    </span>
                  <div className='button-container-2'>
                     <span className="mas">Search</span>
                     <button name='searchParams' className='paramsBut '
                     onClick={() => refetch()}>Search</button>
                  </div> 
                 </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>        
        </>
    )
}