import '../style.css'
import HTML from "/icon/html-5.svg";
import CSS from "/icon/css-3.svg"
import Python from "/icon/python.svg";
import JavaScript from "/icon/javascript.svg";
import Bootstrap from "/icon/bootstrap.svg";
import Tailwind from "/icon/tailwindcss-icon.svg";
import Django from "/icon/django-icon.svg";
import React from "/icon/react.svg";
import Pandas from "/icon/Pandas.png"
import Excel from "/icon/excel.svg";
import VSCode from "/icon/visual-studio-code.svg";
import Github from "/icon/github-mark-white.svg";
import PostgreSQL from "/icon/postgresql.svg";
import Ubuntu from "/icon/ubuntu.svg";
import { motion } from "framer-motion";

export const Skill = () => {

    return(
        <motion.div className='skill'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        >
            <h2 className='text-2xl sm:text-4xl font-CLEAT'>SKILL</h2>
            <h2 className='text-xl sm:text-2xl pt-6'>TECHNICAL SKILL</h2>
            <div className='py-8'>
                <p className='text-xl'>Language</p>
                <div className="icon-flame grid grid-cols-4">
                    <div className='text-center'>
                        <motion.img className='icon' 
                            variants={{
                            offscreen: { // 画面外の場合のスタイル
                            y: 100,
                            opacity: 0,
                            },
                            onscreen: { // 画面内の場合のスタイル
                            y: 0,
                            opacity: 1,
                            transition: {
                            duration: 0.5,
                            },
                            },
                            }}
                            initial="offscreen" // 初期表示はoffscreen
                            whileInView="onscreen" // 画面内に入ったらonscreen
                            viewport={{ once: false, amount: 0 }}
                            src={HTML} alt="HTML" />
                    </div>
                    <div className='text-center'>
                        <img className='icon' src={CSS} alt="CSS" />
                    </div>
                    <div className='text-center'>
                        <img className='icon pt-2 sm:pt-4' src={Python} alt="Python" />
                    </div>
                    <div className='text-center'>
                        <img className='icon pt-2 sm:pt-4' src={JavaScript} alt="JavaScript" />
                    </div>
                    <div className='text-center pt-2 text-sm'>約3年</div>
                    <div className='text-center pt-2 text-sm'>約3年</div>
                    <div className='text-center pt-2 text-sm'>約6ヶ月</div>
                    <div className='text-center pt-2 text-sm'>約1ヶ月</div>
                </div>
            </div>
            <div className='py-10'>
                <p className='text-xl'>Flamework</p>
                <div className="icon-flame grid grid-cols-4">
                    <div className='text-center'>
                        <img className='icon' src={Django} alt="Django" />
                    </div>
                    <div className='text-center'>
                        <img className='icon pt-1' src={Bootstrap} alt="Bootstrap" />
                    </div>
                    <div className='text-center'>
                        <img className='icon pt-1' src={Tailwind} alt="Tailwind" />
                    </div>
                    <div className='text-center'>

                    </div>
                    <div className='text-center pt-2 text-sm'>約6ヶ月</div>
                    <div className='text-center pt-2 text-sm'>約3ヶ月</div>
                    <div className='text-center pt-2 text-sm'>約1ヶ月</div>
                    <div className='text-center pt-2 text-sm'></div>
                </div>
            </div>
            <div className='py-10'>
                <p className='text-xl'>Library</p>
                <div className="icon-flame grid grid-cols-4">
                    <div className='text-center'>
                        <img className='icon' src={React} alt="React" />
                    </div>
                    <div className='text-center'>
                        <img className='icon-h pt-1' src={Pandas} alt="Pandas" />
                    </div>
                    <div className='text-center'>

                    </div>
                    <div className='text-center'>

                    </div>
                    <div className='text-center pt-2 text-sm'>約1ヶ月</div>
                    <div className='text-center pt-2 text-sm'>約1ヶ月</div>
                    <div className='text-center pt-2 text-sm'></div>
                    <div className='text-center pt-2 text-sm'></div>
                </div>
            </div>
            <div className='py-10'>
                <p className='text-xl'>Other</p>
                <div className="icon-flame grid grid-cols-4">
                    <div className='text-center'>
                        <img className='icon' src={Excel} alt="Excel" />
                    </div>
                    <div className='text-center'>
                        <img className='icon' src={VSCode} alt="VSCode" />
                    </div>
                    <div className='text-center'>
                        <img className='icon' src={Github} alt="Github" />
                    </div>
                    <div>
                        <img className='icon' src={PostgreSQL} alt="PostgreSQL" />
                    </div>
                    <div className='text-center pt-2 text-sm'>約5年</div>
                    <div className='text-center pt-2 text-sm'>約6ヶ月</div>
                    <div className='text-center pt-2 text-sm'>約6ヶ月</div>
                    <div className='text-center pt-2 text-sm'>約2ヶ月</div>
                </div>
                <div className="icon-flame grid grid-cols-4">
                    <div className='text-center'>
                        <img className='icon' src={Ubuntu} alt="Ubuntu" />
                    </div>
                    <div className='text-center'>
                    
                    </div>
                    <div className='text-center'>
                    
                    </div>
                    <div>
                    
                    </div>
                    <div className='text-center pt-2 text-sm'>約2ヶ月</div>
                    <div className='text-center pt-2 text-sm'></div>
                    <div className='text-center pt-2 text-sm'></div>
                    <div className='text-center pt-2 text-sm'></div>
                </div>
            </div>
            <h2 className='text-xl sm:text-2xl pt-6'>MANAGEMENT SKILL</h2>
            <div className='pt-3'>
                <p className='text-base'>・グループリーダー業務<br/>
                    ＞＞期間:約1年半<br/>
                    報告書の作成、クライアントへの業務報告。
                </p>
            </div>
            <br/>
            <div>
                <p className='text-base'>・新任者受け入れ関連<br/>
                    ＞＞期間:合計約3ヶ月<br/>
                    新任者面談、および研修とこれに関する資料の加筆・修正、スケジュール管理、<br/>
                    OJTの実施等。2名の育成に携わる。
                </p>
            </div>
            <br/>
            <div>
                <p className='text-base'>・業務管理<br/>
                    ＞＞期間:約1年半<br/>
                    グループ内での業務分担、スケジュールの管理を行う。
                </p>
            </div>
        </motion.div>
    )
}
