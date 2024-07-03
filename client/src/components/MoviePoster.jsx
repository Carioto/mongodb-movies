
export default function MoviePoster(props){

    if(props.props.randmovie.poster){
        return(
            <>
             <img className='moviePoster' src={props.props.randmovie.poster} alt='Movie Poster'/>

            </>
        )
    } else {
        return "No poster available"
    }
}