import '../style.css'
import {Link} from "react-router-dom";

export const Header = () => {

    return(
        <header className='border-b-2 border-green-800 slide'>
            <nav>
                
                <div>
                    <h1 className='text-4xl sm:text-5xl font-CLEAT hover:text-green-800'><Link to="/Works/">Y.W Works</Link></h1>
                </div>
                <ul className='nav-links'>
                    <li><Link className='text-lg hover:text-green-800' to="/Works/">PORTFOLIO</Link></li>
                    <li><Link className='text-lg hover:text-green-800' to="/Works/Skill">SKILL</Link></li>
                    <li><Link className='text-lg hover:text-green-800' to="/Works/Profile">PROFILE</Link></li>
                </ul>

            </nav>
        </header>
    )
}

