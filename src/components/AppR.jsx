import '../style.css'
import Tobaccost from '/img/Tobaccost.png'
import { Link } from 'react-router-dom'

export const AppR = () => {

  return (
    <div>
      <div className='appLR'>
        <img src={Tobaccost} alt="tobaccost" />
      </div>
      <div className='appLR'>
        <a 
        className='w-20 m-3 text-base bg-black hover:bg-gray-800 text-white font-semiboid py-2 border border-green-800 rounded shadow'
        href='https://tobaccost.vercel.app/'
        >LINK</a>
        <Link 
        className='w-20 m-3 text-base bg-black hover:bg-gray-800 text-white font-semiboid py-2 border border-green-800 rounded shadow'
        to='/WorksTest/Tobaccost'
        >DETAIL</Link>
      </div>
    </div>
  )
}