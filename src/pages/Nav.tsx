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
                <Link to="/players">Players</Link> | 
                <Link to="/results">Results</Link> | 
                <Link to="/resultsByDate">Results By Date</Link> | 
                <Link to="/pools">Pools</Link> | 
                <Link to="/playerStats">Player Stats</Link> | 
                <Link to="/login">Login</Link> | 
            </nav>
            <hr />
            <br />
        </>
    )
}

export default Nav;
