import '../style.css'
import Github from "/icon/github-icon.svg";

export const More = () => {
  return (
    <div className='more'>
        <h2 className='text-2xl sm:text-4xl'>More...</h2>
        <div className='more-body'>
        <a href=""><img className='mx-8 my-8' src={Github} alt="Github" /></a>
        </div>
        <div>
            <div className="grid sm:grid-cols-2 py-10 detail-body">
                    <div>
                        <h3></h3>
                    </div>
            </div>
        </div>
    </div>
  )
}