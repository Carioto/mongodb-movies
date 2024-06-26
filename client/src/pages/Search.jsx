import YearScroll from '../components/YearScroll'
import GenreScroll from '../components/GenreScroll';
import LanguageScroll from '../components/LanguageScroll';
import { useState } from 'react';

function Search(){
  const [ langSearch, setLangSearch ] = useState('nil');
  const [ genreSearch, setGenreSearch ] = useState('nil');
  const [ yearSearch, setYearSearch ] = useState(0);
  
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

    function getFreshList(){
      console.log(langSearch,genreSearch,yearSearch)
    }



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

        <button name='searchParams'
          onClick={() => getFreshList(langSearch, genreSearch, yearSearch)}
        >Search</button>




      </div>
      </>
    )
}
export default Search;