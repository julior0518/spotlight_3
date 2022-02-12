import { Link } from 'react-router-dom';
import '../style/nav.css'



function Nav() {
return (
    <div className="Nav">
        <Link to="/" className="li">
            Movies
        </Link>
        
    </div>
);
}

export default Nav;