import '../style.css'
import {Link} from "react-router-dom";

export const Header = () => {

    return(
        <header className='border-b-2 border-green-800'>
            <nav>
                
                <div>
                    <h1 className='text-4xl sm:text-5xl font-CLEAT hover:text-green-800'><Link to="/WorksTest/">Y.W Works</Link></h1>
                </div>
                <ul className='nav-links'>
                    <li><Link className='text-lg hover:text-green-800' to="/WorksTest/">PORTFOLIO</Link></li>
                    <li><Link className='text-lg hover:text-green-800' to="/WorksTest/Skill">SKILL</Link></li>
                    <li><Link className='text-lg hover:text-green-800' to="/WorksTest/Profile">PROFILE</Link></li>
                </ul>

            </nav>


        </header>
    )
}

