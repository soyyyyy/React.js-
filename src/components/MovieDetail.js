import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

function MovieDetails({ title, coverImg, rating, genres, descriptionFull, likeCount }){
    return(
        <div>
            <img src={coverImg} alt="title"/>
            <h1>{title}</h1>
            <h3>Rate: {rating}</h3>
            <ul>
                <p>genres</p>
                {genres.map((g) => ( 
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <p>{descriptionFull}</p>
            <hr />
            <p>Like: {likeCount}</p>
            
        </div>
    );
};

MovieDetails.propTypes = {
    //id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieDetails;