import '../style.css'
import {Link} from "react-router-dom";


export const Bottom = () => {
  return (
    <div className='bottom'>
        <nav>

            <ul className='bottom-nav'>
                <li><Link className='text-sm text-white hover:text-green-800' to="/WorksTest/">PORTFOLIO</Link></li>
                <li><Link className='text-sm text-white hover:text-green-800' to="/WorksTest/Skill">SKILL</Link></li>
                <li><Link className='text-sm text-white hover:text-green-800' to="/WorksTest/Profile">　PROFILE</Link></li>
            </ul>

        </nav>
    </div>
  )
}
