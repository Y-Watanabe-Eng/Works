import {Link} from "react-router-dom";
import { slide as Menu } from "react-burger-menu";


export const props = () => {
  return (
    <Menu {...props}>

        <Link 
        to="/" 
        className="menu-item"
        >DEVELOPMENT</Link>

        <Link 
        to="/Skill" 
        className="menu-item"
        >SKILL</Link>

        <Link 
        to="/Profile" 
        className="menu-item"
        >PROFILE</Link>

    </Menu>
  );
};