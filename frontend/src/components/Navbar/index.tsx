import { ReactComponent as GithubIcon } from 'assets/img/github.svg'; //Note que Nélio a importou como componente e não a armazenando em uma variável
import './styles.css';

function Navbar() {

    return (
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/pedroisb">
                    <div className='dsmovie-contact-container'>
                        <GithubIcon />
                        <p className='ds-movie-contact-link'>/pedroisb</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;