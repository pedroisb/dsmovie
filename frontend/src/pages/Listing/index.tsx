import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
import "./styles.css";


function Listing() {

    // FORMA ERRADA
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
    .then(response => {
        console.log(response.data);
    });

    return (
        <>
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