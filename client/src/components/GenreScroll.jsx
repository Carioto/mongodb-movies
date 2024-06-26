import { GET_ALL_GENRES } from '../utils/queries';
import { useQuery } from '@apollo/client';


function GenreScroll({childToParent}) {
 const { loading, error, data } = useQuery(GET_ALL_GENRES);
  
 let genrelist=[]; 

 if(!loading) {
   for(let x=0 ; x<data.genrelist.length ; x++) {
         genrelist.push(data.genrelist[x]._id)
}
}
  return( 
    <>
    <select className="form-select" name='genre' 
    onChange={() => childToParent(event.target)} aria-label="Default select example">
    <option >Pick Genre</option>
     {genrelist.map((genre) => {
       return <option key={genre} value={genre}>{genre}</option>
     })}
    </select>
    </>

    )
}

export default GenreScroll;