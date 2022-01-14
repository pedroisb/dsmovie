import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";
import "./styles.css";


function Listing() {


    const [pageNumber, setPageNumber] = useState(0);

    // trata-se de boa pratática empregar useState com um valor inicial


    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=2`)
        .then(response => {
            const data = response.data as MoviePage;
            console.log(data);
            setPageNumber(data.number);
        });
    }, []);

    // o segundo argumento do useEffect é uma lista de objetos a ser observada pelo Hook. sempre que houver alteração em qualquer um dos objetos elencados, o comportamento previsto será executado. caso a lista esteja vazia, o comportamento será executado apenas quando o componente for carregado
    

    return (
        <>
        <p>{pageNumber}</p>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        {/* "col-sm-6": significa que o card ocupará 6 das 12 colunas do grid system do react bootstrap a partir do breakpoint small (sm) */}
                        {/* "mb-3": margin-botton 3 */}
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;