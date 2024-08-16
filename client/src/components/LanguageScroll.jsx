import { useState } from 'react';
import { GET_ALL_LANGUAGES } from '../utils/queries';
import { useQuery } from '@apollo/client';


function LanguageScroll({childToParent, language}) {
  const [listLang, setListLang] = useState(language)
  const { loading, error, data } = useQuery(GET_ALL_LANGUAGES);


  let languagelist = [];

  if(!loading) {
    for(let x=0 ; x<data.languagelist.length ; x++) {
          languagelist.push(data.languagelist[x]._id)
 }
}  
      return( 
        <>
        <select className="form-select paramselect searchSelect" name='language' 

        onChange={() => childToParent(event.target)} aria-label="Default select example">
        <option className="text-center" value={'nil'}>Language</option>
         {languagelist.map((language) => {
           return <option className="text-center" key={language} value={language}>{language}</option>
         })}
        </select>
        </>
    
        )
    }
    
    export default LanguageScroll;