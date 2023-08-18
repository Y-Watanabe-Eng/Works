import '../style.css'
import MiniMemo from "/img/MiniMemo.png";
import {Link} from "react-router-dom";

export const AppL = () => {

  return (
    <div>
      <div className='appLR'>
        <img src={MiniMemo} alt="MiniMemo" />
      </div>
      <div className='appLR'>
        <a
        className='w-20 m-3 text-base bg-black hover:bg-gray-800 text-white py-2 border border-green-800 rounded shadow'
        href="https://yw-app.net/"
        >LINK</a>
        <Link  
        className='w-20 m-3 text-base bg-black hover:bg-gray-800 text-white py-2 border border-green-800 rounded shadow'
        to="/WorksTest/MiniMemo"
        >DETAIL</Link>
      </div>
    </div>
  )
}