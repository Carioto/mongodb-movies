import YearScroll from '../components/YearScroll'
import GenreScroll from '../components/GenreScroll';
import LanguageScroll from '../components/LanguageScroll';
import { useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { QUERY_MOVIES_WITH_PARAMS } from '../utils/queries';
import MovieList from '../components/MovieList';
import '../components/Styles/Search.css'
import '../components/Button/style.css'

function Search(){
  const [ langSearch, setLangSearch ] = useState('nil');
  const [ genres, setGenreSearch ] = useState('nil');
  const [ yearSearch, setYearSearch ] = useState(0);

  const [getMovie, { loading, error, data, refetch, called}] = useLazyQuery(QUERY_MOVIES_WITH_PARAMS, {
          variables:{
            year:yearSearch,
            language:langSearch,
            genre:genres
          },
  });
    
  if (loading) return 'Loading...';
  if (error) return <p className='errmess'> Error! ${error.message} </p>;
 
  
  const childToParent = (getData) => {
    if(getData.name === 'language'){
      setLangSearch(getData.value)
    }
    if(getData.name === 'genre'){
      setGenreSearch(getData.value)
    }
    if(getData.name === 'year'){
      setYearSearch(parseInt(getData.value));
      
    }}


    const getalist = () => {
       if(yearSearch === "Year"){
        setYearSearch(0);
       }
       refetch()

    }
    return(
      <>
     <div className='quests'style={{
       display: (!called) ? "block" : "none",
    }}>
      <div>
        <h2>Create a List</h2>
        <p>Select your options to create a list of movies</p>
        <p>Leave blank to search ALL years, genres, and/or Languages</p>
      </div>
      <div className='optionscont'>
        <YearScroll childToParent={childToParent} year={yearSearch} />
        <GenreScroll childToParent={childToParent} language={langSearch} />
        <LanguageScroll childToParent={childToParent} genre={genres} />
        <p className='button-container-1 searchButt'>
        <span className="mas">Search</span>
        <button name='searchParams' className='paramsBut '
          onClick={getalist}
          >Search</button>
        </p> 

      </div> 
      </div>
      <div>
         
         {(called && !data.movieswithparams.length)
         ?(<p className='nomess'> Sorry, no movies match your criteria. <button onClick={() => window.location.reload()}>Start Over</button></p>

         )
         :(<MovieList props={data} />)}
      </div>


      </>

    )
}
export default Search;