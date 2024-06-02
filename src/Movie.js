import PropTypes from 'prop-types'
import './css/styleMovie.css'
import { Link } from 'react-router-dom'

export default function Movie({year,title,summary,img,genres}){
    return(
    <Link to={{pathname:"/movie_details",
        state:{
            year,
            title,
            summary,
            img,
            genres
        }
    }}>    <div className="movie">
        <img src={img} alt={title}/>
        <div className='movie_column'>
        <h3 className='movie_title'>{title}</h3>
        <h5 className='movie_year'>{year}</h5>
        <ul className='movie_genres'>
            {genres.map((genre,index)=>{
                return(<li key={index} className='genres_genre'>{genre}</li>)
            })}
        </ul>
        <p className="movie_summary">{summary.slice(0,150)}</p>
        
        </div>
    </div>
    </Link>
    )
}  
Movie.propTypes={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}