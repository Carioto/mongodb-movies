
export default function MoviePoster(props){

    if(props.props.poster){
        return(
            <>
             <img className='moviePoster' src={props.props.poster} alt='Movie Poster'/>

            </>
        )
    } else {
        return <p className="nopeP">No poster available</p>
    }
}