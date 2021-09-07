import Movie from "./Movie";

const Movies = ({ movies }) => {
    return (
        <div className="movies">
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    rating={movie.rating}
                    genres={movie.genres}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                />
            ))}
        </div>
    );
};

export default Movies;
