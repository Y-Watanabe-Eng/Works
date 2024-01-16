import '../style.css'
import MiniMemo from "/img/MiniMemo.png";
import kempichan_antenna from "/img/kempichan_antenna.png"
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
        to="/Works/MiniMemo"
        >DETAIL</Link>
      </div>

      <div className='appLR'>
        <img src={kempichan_antenna} alt="kempichan_antenna" />
      </div>
      <div className='appLR'>
        <span>※配信者ご本人様の許可取得済み※</span>
      </div>
      <div className='appLR'>
        <a
        className='w-20 m-3 text-base bg-black hover:bg-gray-800 text-white py-2 border border-green-800 rounded shadow'
        href="https://kempichan-antenna.vercel.app/"
        >LINK</a>
        <Link  
        className='w-20 m-3 text-base bg-black hover:bg-gray-800 text-white py-2 border border-green-800 rounded shadow'
        to="/Works/Kempichan"
        >DETAIL</Link>
      </div>

    </div>
  )
}