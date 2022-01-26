import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";
import "./styles.css";


function Listing() {

    const [pageNumber, setPageNumber] = useState(0);
    // trata-se de boa prática empregar useState com um valor inicial

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            });
    }, [pageNumber]);
    // o segundo argumento do useEffect é uma lista de objetos a ser observada pelo Hook. sempre que houver alteração em qualquer um dos objetos elencados, o comportamento previsto será executado. caso a lista esteja vazia, o comportamento será executado apenas quando o componente for carregado

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Pagination page={page} onChange={handlePageChange} />
            <div className="container">
                <div className="row">

                    {page.content.map(movie => {
                        return (
                            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCard movie={movie} />
                            </div>
                        )
                    })}
                    {/* em uma renderização dinâmica de coleção, cada elemento renderizado DEVE possuir um atributo key */}
                    {/* "col-sm-6": significa que o card ocupará 6 das 12 colunas do grid system do react bootstrap a partir do breakpoint small (sm) */}
                    {/* "mb-3": margin-botton 3 */}

                </div>
            </div>
        </>
    );
}

export default Listing;