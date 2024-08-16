import { useState } from "react";

function YearScroll({childToParent, year}) {
    const [ listYear, setListYear ] = useState(year)
    // const currdate = new Date();
    // const curryear = currdate.getFullYear();
    let yeararr = [];
    // x<curryear+1  ⬇️ goes here
    for (let x=1923; x<2017;x++){
        yeararr.push(x)    
    }

    const clickHandler = (event) => {
      event.preventDefault();
      setListYear(event.target.value);
      childToParent(event.target);
    }


    return( 
    <>
    <select className="form-select paramselect searchSelect" name='year' onChange={() => clickHandler(event)} aria-label="Default select example">
    <option className="text-center" value={0}>{listYear || "Year"}</option>
     {yeararr.map((year) => {
       return <option className="text-center" key={year} value={year}>{year}</option>
     })}
    </select>  
    </>

    )
}

export default YearScroll;