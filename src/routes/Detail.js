import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const { id } = useParams(); // id 찾기

    const getMovies = useCallback(async () => {
    const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies([json.data.movie]);  //movies를 배열로 초기화 (map은 배열만 가능) 
    setLoading(false);
    }, [id]); // id를 의존성으로 추가

    useEffect(() => {
        getMovies([]);
    }, [getMovies]);

    return (
        <div>
            {loading ? <h1>Loading...</h1> : <div>{movies.map((movie) => (
                <MovieDetail
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    coverImg={movie.medium_cover_image}
                    rating={movie.rating}
                    genres={movie.genres}
                    descriptionFull={movie.description_full}
                    likeCount={movie.like_count}
                />
                ))}
            </div>}
        </div>

    );
}

export default Detail;