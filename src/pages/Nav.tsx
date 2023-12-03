import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo2.png'

function Nav() {
    return (
        <>
            <nav className="nav">
                <img src={logo} width="50px"></img>
                <Link to="/">Routes </Link> |
                <Link to="/venues">Venues</Link> |
                <Link to="/teams">Teams</Link> |
                <Link to="/players">Players</Link>
            </nav>
            <hr></hr>
            <br />
        </>
    )
}

export default Nav;
