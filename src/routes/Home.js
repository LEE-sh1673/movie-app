import axios from "axios";
import { useState, useEffect } from "react";

import Movies from "../components/Movies";
import Loading from "../components/Loading";
import "./Home.css";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const movies = await fetchMovies();
            setMovies(movies);
            setIsLoading(false);
        };
        getMovies();
    }, []);

    const fetchMovies = async () => {
        const movies = await axios
            .get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating", {
                headers: { "Content-Type": "Application/json" },
            })
            .then((res) => res.data.data.movies)
            .catch((err) => console.error(err));
        return movies;
    };

    return (
        <section className="container">
            {isLoading ? <Loading /> : <Movies movies={movies} />}
        </section>
    );
};

export default Home;
