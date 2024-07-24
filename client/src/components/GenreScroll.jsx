import { GET_ALL_GENRES } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useState } from 'react';


function GenreScroll({childToParent, genre}) {
  const [listGenre, setListGenre] = useState(genre)
 const { loading, error, data } = useQuery(GET_ALL_GENRES);
  
 let genrelist=[]; 

 if(!loading) {
   for(let x=0 ; x<data.genrelist.length ; x++) {
         genrelist.push(data.genrelist[x]._id)
}
}
  return( 
    <>
    <select className="form-select paramselect" name='genre' 
    onChange={() => childToParent(event.target)} aria-label="Default select example">
    <option className="text-center" value={'nil'}>Genre</option>
     {genrelist.map((genre) => {
       return <option className="text-center" key={genre} value={genre}>{genre}</option>
     })}
    </select>
    </>

    )
}

export default GenreScroll;