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

  const [getMovie, { loading, error, data, refetch, networkStatus }] = useLazyQuery(QUERY_MOVIES_WITH_PARAMS, {
          variables:{genres:genres},
  });
  
  console.log("🚀 ~ Search ~ data:", data)
  console.log("🚀 ~ Search ~ genres:", genres)
  console.log("🚀 ~ Search ~ networkStatus:", networkStatus)
  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  const childToParent = (getData) => {
    if(getData.name === 'language'){
      setLangSearch(getData.value)
      console.log("🚀 ~ Search ~ setLangSearch:", getData.value)
    }
    if(getData.name === 'genre'){
      setGenreSearch(getData.value)
      console.log("🚀 ~ Search ~ setGenreSearch:", getData.value)
    }
    if(getData.name === 'year'){
      setYearSearch(getData.value);
      console.log("🚀 ~ Search ~ setYearSearch:", getData.value)
      
    }}

    return(
      <>
      <div>
        <h1>Create a List</h1>
        <p>Select your options to create a list of movies</p>
      </div>
      <div>
        <YearScroll childToParent={childToParent}/>
        <GenreScroll childToParent={childToParent} />
        <LanguageScroll childToParent={childToParent} />

        <div className='button-container-1'>
        <span className="mas">Search</span>
        <button name='searchParams' className='paramsBut '
          onClick={
       () => getMovie({variables: { genres:genres}})
          }>Search</button>
          
          
          </div> 

      </div>
      <div>
         <MovieList props={data} />
      </div>


      </>

    )
}
export default Search;