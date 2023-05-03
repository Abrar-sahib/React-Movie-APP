import React from "react";

const MovieCard = ({ movie }) => {
    
    console.log(movie.imdbId);
    return (
        <div key={movie.imdbId} className="movie">
            <div className="year">
                <p>{movie.Year}</p>
            </div>
                    
            <div className="poster">
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>

            <div className="details">
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>

        </div>
    )
    
}
export default MovieCard;