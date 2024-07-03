
function YearScroll({childToParent}) {

    const currdate = new Date();
    const curryear = currdate.getFullYear();
    let yeararr = [];
    for (let x=1903; x<curryear+1;x++){
        yeararr.push(x)    
    }

    const clickHandler = (event) => {
      console.log("🚀 ~ clickHandler ~ event:", event.target.value)
      childToParent(event.target);
      event.preventDefault();
    }


    return( 
    <>
    <select className="form-select paramselect" name='year' onChange={() => clickHandler(event)} aria-label="Default select example">
    <option className="text-center" value={0}>Year</option>
     {yeararr.map((year) => {
       return <option key={year} value={year}>{year}</option>
     })}
    </select>  
    </>

    )
}

export default YearScroll;