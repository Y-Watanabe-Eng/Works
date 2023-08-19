import '../style.css'
import {Link} from "react-router-dom";


export const Bottom = () => {
  return (
    <div className='bottom'>
        <nav>

            <div className='bottom-nav grid-cols-3'>
                <div><Link className='text-sm text-white hover:text-green-800' to="/Works/">PORTFOLIO</Link></div>
                <div><Link className='text-sm text-white hover:text-green-800' to="/Works/Skill">SKILL</Link></div>
                <div><Link className='text-sm text-white hover:text-green-800' to="/Works/Profile">PROFILE</Link></div>
            </div>

        </nav>
    </div>
  )
}
