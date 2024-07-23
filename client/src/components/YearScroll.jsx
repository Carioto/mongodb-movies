
function YearScroll({childToParent}) {

    // const currdate = new Date();
    // const curryear = currdate.getFullYear();
    let yeararr = [];
    // x<curryear+1  ⬇️ goes here
    for (let x=1923; x<2017;x++){
        yeararr.push(x)    
    }

    const clickHandler = (event) => {
      childToParent(event.target);
      event.preventDefault();
    }


    return( 
    <>
    <select className="form-select paramselect" name='year' onChange={() => clickHandler(event)} aria-label="Default select example">
    <option className="text-center" value={0}>Year</option>
     {yeararr.map((year) => {
       return <option className="text-center" key={year} value={year}>{year}</option>
     })}
    </select>  
    </>

    )
}

export default YearScroll;