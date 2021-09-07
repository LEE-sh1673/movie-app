import React from "react";

import "./Detail.css";

const Detail = ({ location, history }) => {
    const locationState = location.state;

    if (locationState === undefined) {
        history.push("/");
    }

    const { title, year, summary, poster, rating, genres } = location.state;
    console.log(title);

    return (
        <div className="container">
            <div className="movieInfo">
                {locationState ? (
                    <>
                        <img src={poster} alt={title} title={title} />
                        <div className="movie__data">
                            <h1 className="movie__title">{title}</h1>
                            <div className="movide__meta-data">
                                <p className="movie__year">{year}</p>
                                <p className="movie__rating">⭐ {rating}</p>
                            </div>
                            <ul className="movie__genres">
                                {genres.map((genre, idx) => (
                                    <li key={idx} className="movie__genre">
                                        {genre}
                                    </li>
                                ))}
                            </ul>
                            <p className="movie__summary">{summary}</p>
                        </div>
                    </>
                ) : (
                    <span>{"No data"}</span>
                )}
            </div>
        </div>
    );
};

export default Detail;
