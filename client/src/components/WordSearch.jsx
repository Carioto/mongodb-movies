import { useState } from "react";

function WordSearch({childToParent}) {
    const [words, setWords] = useState('')
    
    const handleChange = (event) => {
       setWords(event.target.value);
       childToParent(event.target);
    }
    
    return(
        <>
        <label htmlFor='words'>Search for words in movie titles: </label>
        <input 
        value={words}
        placeholder=""
        name="words"
        onChange={handleChange}
        className="searchInput"
        />

        </>
    )

}
export default WordSearch;