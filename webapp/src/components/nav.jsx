import '../styles/components/_nav.scss';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile">Meu perfil</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/games">Jogos</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
