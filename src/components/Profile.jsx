import '../style.css'
import yw from "/img/works-c.jpg";

export const Profile = () => {

    return(
        <div className='profile'>
            <h2 className='text-2xl sm:text-4xl font-CLEAT'>PROFILE</h2>
            <div className="grid md:grid-cols-2">
                <div className='flex items-center'>
                    <img className='rounded-lg' src={yw} alt="yw" />
                </div>
            <div>
                <p className='text-base'>初めてITというものに触れたのは20歳頃に組んでいたバンドのHPを<br/>
                作るところからだったと思います。</p><br/>
                <p className='text-base'> 業務ではVBAを活用しながら、独学でPython、JavaScript(React.js)を学習中。<br/>
                基本的にはWEBアプリを主軸に、業務効率化系のアプリ作成や、<br/>
                環境構築～WEBアプリの公開までをスムーズにできるよう、<br/>
                各種ライブラリ、HTML/CSS、VSCode、DB、Linux、AWS周りも<br/>
                適宜触れています。</p><br/>
                <p className='text-base'>音楽と買い物、あとYoutubeが娯楽です。</p>
            </div>
            </div>
        </div>
    )
}