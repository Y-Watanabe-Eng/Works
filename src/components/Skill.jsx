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
import { Tooltip } from "./Tooltip";


// ツールチップの内容を定義する
const tooltipContent = {
    html: "HTML\n・社内イントラ管理\n・Webアプリ作成\n・個人サイト作成\n・本ポートフォリオ作成",
    css: "CSS\n・社内イントラ管理\n・Webアプリ作成\n・個人サイト作成\n・本ポートフォリオ作成",
    python: "Python\n・Webアプリ作成\n・Webスクレイピング\n・データ分析\n・作業自動化",
    javascript: "JavaScript\n・Webアプリ作成\n・本ポートフォリオ作成",
    django: "Django\n・Webアプリ作成",
    bootstrap: "Bootstrap\n・Webアプリ作成",
    tailwind: "Tailwind\n・Webアプリ作成\n・本ポートフォリオ作成",
    react: "React.js\n・Webアプリ作成\n・本ポートフォリオ作成",
    pandas: "Pandas\n・データ分析",
    excel: "Excel\n◆VBA\n・入電件数の集計\n・検索機能の実装\n・ソート⇒コピーの自動化\n・Wordファイルの生成\n◆各種関数",
    vscode: "VSCode\n・コーディングに使用",
    github: "GitHub\n・ポートフォリオの公開\n・ソース管理",
    postgresql: "PostgreSQL\n・ユーザ管理DB\n・メモ帳管理DB",
    ubuntu: "Ubuntu\n・Webアプリの公開\n・crontabによる定期実行",
  };

export const Skill = () => {

    return(
        <motion.div className='skill'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        >
            <h2 className='text-2xl sm:text-4xl font-CLEAT'>SKILL</h2>
            <h2 className='text-xl sm:text-2xl pt-6'>資格</h2>
            <div className='py-8'>
                <p className='text-base pb-4'>・Python3エンジニア認定基礎試験</p>
                <p className='text-base pb-4'>・全商 情報処理検定 2級<br/>　ビジネス部門</p>
                <p className='text-base pb-4'>・全商 日本語ワープロ検定 準2級</p>
                <p className='text-base'>・全商 文書デザイン検定 2級</p>
            </div>
            <h2 className='text-xl sm:text-2xl pt-6'>開発スキル</h2>
            <div className='py-8'>
                <p className='text-xl pl-4'>言語</p>
                <div className="icon-flame grid grid-cols-4">
                    <Tooltip content={tooltipContent.html}>
                    <div className='text-center pt-3'>
                        <motion.img className='icon' src={HTML} alt="HTML"
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                            y: 60,
                            opacity: 0,
                            },
                            onscreen: { // 画面内の場合のスタイル
                            y: 0,
                            opacity: 1,
                            transition: {
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration: 1.4,
                            delay: 0.2,
                            },
                            },
                        }}
                            initial="offscreen" // 初期表示はoffscreen
                            whileInView="onscreen" // 画面内に入ったらonscreen
                            viewport={{ once: false, amount: 0 }}
                        />
                    </div>
                    </Tooltip>
                    <Tooltip content={tooltipContent.css}>
                    <div className='text-center pt-3'>
                        <motion.img className='icon' src={CSS} alt="CSS"
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                            y: 60,
                            opacity: 0,
                            },
                            onscreen: { // 画面内の場合のスタイル
                            y: 0,
                            opacity: 1,
                            transition: {
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration: 1.4,
                            delay: 0.4,
                            },
                            },
                        }}
                        initial="offscreen" // 初期表示はoffscreen
                        whileInView="onscreen" // 画面内に入ったらonscreen
                        viewport={{ once: false, amount: 0 }}
                        />
                    </div>
                    </Tooltip>
                    <Tooltip content={tooltipContent.python}>
                    <div className='text-center pt-3'>
                        <motion.img className='icon pt-2 sm:pt-4' src={Python} alt="Python" 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                            y: 60,
                            opacity: 0,
                            },
                            onscreen: { // 画面内の場合のスタイル
                            y: 0,
                            opacity: 1,
                            transition: {
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration: 1.4,
                            delay: 0.6,
                            },
                            },
                        }}
                        initial="offscreen" // 初期表示はoffscreen
                        whileInView="onscreen" // 画面内に入ったらonscreen
                        viewport={{ once: false, amount: 0 }}
                        />
                    </div>
                    </Tooltip>
                    <Tooltip content={tooltipContent.javascript}>
                    <div className='text-center pt-3'>
                        <motion.img className='icon pt-2 sm:pt-4' src={JavaScript} alt="JavaScript" 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                            y: 60,
                            opacity: 0,
                            },
                            onscreen: { // 画面内の場合のスタイル
                            y: 0,
                            opacity: 1,
                            transition: {
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration: 1.4,
                            delay: 0.8,
                            },
                            },
                        }}
                        initial="offscreen" // 初期表示はoffscreen
                        whileInView="onscreen" // 画面内に入ったらonscreen
                        viewport={{ once: false, amount: 0 }}
                        />
                    </div>
                    </Tooltip>
                    <div className='text-center pt-2 text-sm'>約3年</div>
                    <div className='text-center pt-2 text-sm'>約3年</div>
                    <div className='text-center pt-2 text-sm'>約6ヶ月</div>
                    <div className='text-center pt-2 text-sm'>約1ヶ月</div>
                </div>
            </div>
            <div className='py-10'>
                <p className='text-xl pl-4'>フレームワーク</p>
                <div className="icon-flame grid grid-cols-4">
                <Tooltip content={tooltipContent.django}>
                    <div className='text-center pt-3'>
                        <motion.img className='icon' src={Django} alt="Django" 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                            y: 60,
                            opacity: 0,
                            },
                            onscreen: { // 画面内の場合のスタイル
                            y: 0,
                            opacity: 1,
                            transition: {
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration: 1.4,
                            delay: 0.2,
                            },
                            },
                        }}
                        initial="offscreen" // 初期表示はoffscreen
                        whileInView="onscreen" // 画面内に入ったらonscreen
                        viewport={{ once: false, amount: 0 }}
                        />
                    </div>
                    </Tooltip>
                    <Tooltip content={tooltipContent.bootstrap}>
                    <div className='text-center pt-3'>
                        <motion.img className='icon pt-1' src={Bootstrap} alt="Bootstrap" 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                            y: 60,
                            opacity: 0,
                            },
                            onscreen: { // 画面内の場合のスタイル
                            y: 0,
                            opacity: 1,
                            transition: {
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration: 1.4,
                            delay: 0.4,
                            },
                            },
                        }}
                        initial="offscreen" // 初期表示はoffscreen
                        whileInView="onscreen" // 画面内に入ったらonscreen
                        viewport={{ once: false, amount: 0 }}
                        />
                    </div>
                    </Tooltip>
                    <Tooltip content={tooltipContent.tailwind}>
                    <div className='text-center pt-4'>
                        <motion.img className='icon pt-1' src={Tailwind} alt="Tailwind" 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                            y: 60,
                            opacity: 0,
                            },
                            onscreen: { // 画面内の場合のスタイル
                            y: 0,
                            opacity: 1,
                            transition: {
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration: 1.4,
                            delay: 0.6,
                            },
                            },
                        }}
                        initial="offscreen" // 初期表示はoffscreen
                        whileInView="onscreen" // 画面内に入ったらonscreen
                        viewport={{ once: false, amount: 0 }}
                        />
                    </div>
                    </Tooltip>
                    <div className='text-center pt-3'>

                    </div>
                    <div className='text-center pt-2 text-sm'>約6ヶ月</div>
                    <div className='text-center pt-2 text-sm'>約3ヶ月</div>
                    <div className='text-center pt-2 text-sm'>約1ヶ月</div>
                    <div className='text-center pt-2 text-sm'></div>
                </div>
            </div>
            <div className='py-10'>
                <p className='text-xl pl-4'>ライブラリ</p>
                <div className="icon-flame grid grid-cols-4">
                <Tooltip content={tooltipContent.react}>
                    <div className='text-center pt-3'>
                        <motion.img className='icon' src={React} alt="React" 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                            y: 60,
                            opacity: 0,
                            },
                            onscreen: { // 画面内の場合のスタイル
                            y: 0,
                            opacity: 1,
                            transition: {
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration: 1.4,
                            delay: 0.2,
                            },
                            },
                        }}
                        initial="offscreen" // 初期表示はoffscreen
                        whileInView="onscreen" // 画面内に入ったらonscreen
                        viewport={{ once: false, amount: 0 }}
                        />
                    </div>
                    </Tooltip>
                    <Tooltip content={tooltipContent.pandas}>
                    <div className='text-center pt-3'>
                        <motion.img className='icon-h pt-1' src={Pandas} alt="Pandas" 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                            y: 60,
                            opacity: 0,
                            },
                            onscreen: { // 画面内の場合のスタイル
                            y: 0,
                            opacity: 1,
                            transition: {
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration: 1.4,
                            delay: 0.4,
                            },
                            },
                        }}
                        initial="offscreen" // 初期表示はoffscreen
                        whileInView="onscreen" // 画面内に入ったらonscreen
                        viewport={{ once: false, amount: 0 }}
                        />
                    </div>
                    </Tooltip>
                    <div className='text-center pt-3'>

                    </div>
                    <div className='text-center pt-3'>

                    </div>
                    <div className='text-center pt-2 text-sm'>約1ヶ月</div>
                    <div className='text-center pt-2 text-sm'>約1ヶ月</div>
                    <div className='text-center pt-2 text-sm'></div>
                    <div className='text-center pt-2 text-sm'></div>
                </div>
            </div>
            <div className='py-10'>
                <p className='text-xl pl-4'>その他</p>
                <div className="icon-flame grid grid-cols-4">
                <Tooltip content={tooltipContent.excel}>
                    <div className='text-center pt-3'>
                        <motion.img className='icon' src={Excel} alt="Excel"
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                            y: 60,
                            opacity: 0,
                            },
                            onscreen: { // 画面内の場合のスタイル
                            y: 0,
                            opacity: 1,
                            transition: {
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration: 1.4,
                            delay: 0.2,
                            },
                            },
                        }}
                        initial="offscreen" // 初期表示はoffscreen
                        whileInView="onscreen" // 画面内に入ったらonscreen
                        viewport={{ once: false, amount: 0 }}
                        />
                    </div>
                    </Tooltip>
                    <Tooltip content={tooltipContent.vscode}>
                    <div className='text-center pt-3'>
                        <motion.img className='icon' src={VSCode} alt="VSCode" 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                            y: 60,
                            opacity: 0,
                            },
                            onscreen: { // 画面内の場合のスタイル
                            y: 0,
                            opacity: 1,
                            transition: {
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration: 1.4,
                            delay: 0.4,
                            },
                            },
                        }}
                        initial="offscreen" // 初期表示はoffscreen
                        whileInView="onscreen" // 画面内に入ったらonscreen
                        viewport={{ once: false, amount: 0 }}
                        />
                    </div>
                    </Tooltip>
                    <Tooltip content={tooltipContent.github}>
                    <div className='text-center pt-3'>
                        <motion.img className='icon' src={Github} alt="Github" 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                            y: 60,
                            opacity: 0,
                            },
                            onscreen: { // 画面内の場合のスタイル
                            y: 0,
                            opacity: 1,
                            transition: {
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration: 1.4,
                            delay: 0.6,
                            },
                            },
                        }}
                        initial="offscreen" // 初期表示はoffscreen
                        whileInView="onscreen" // 画面内に入ったらonscreen
                        viewport={{ once: false, amount: 0 }}
                        />
                    </div>
                    </Tooltip>
                    <Tooltip content={tooltipContent.postgresql}>
                    <div className='text-center pt-3'>
                        <motion.img className='icon' src={PostgreSQL} alt="PostgreSQL" 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                            y: 60,
                            opacity: 0,
                            },
                            onscreen: { // 画面内の場合のスタイル
                            y: 0,
                            opacity: 1,
                            transition: {
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration: 1.4,
                            delay: 0.8,
                            },
                            },
                        }}
                        initial="offscreen" // 初期表示はoffscreen
                        whileInView="onscreen" // 画面内に入ったらonscreen
                        viewport={{ once: false, amount: 0 }}
                        />
                    </div>
                    </Tooltip>
                    <div className='text-center pt-2 text-sm'>約5年</div>
                    <div className='text-center pt-2 text-sm'>約6ヶ月</div>
                    <div className='text-center pt-2 text-sm'>約6ヶ月</div>
                    <div className='text-center pt-2 text-sm'>約2ヶ月</div>
                </div>
                <div className="icon-flame grid grid-cols-4">
                <Tooltip content={tooltipContent.ubuntu}>
                    <div className='text-center pt-3'>
                        <motion.img className='icon' src={Ubuntu} alt="Ubuntu" 
                        variants={{
                            offscreen: { // 画面外の場合のスタイル
                            y: 60,
                            opacity: 0,
                            },
                            onscreen: { // 画面内の場合のスタイル
                            y: 0,
                            opacity: 1,
                            transition: {
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            duration: 1.4,
                            delay: 0.2,
                            },
                            },
                        }}
                        initial="offscreen" // 初期表示はoffscreen
                        whileInView="onscreen" // 画面内に入ったらonscreen
                        viewport={{ once: false, amount: 0 }}
                        />
                    </div>
                    </Tooltip>
                    <div className='text-center pt-3'>
                    
                    </div>
                    <div className='text-center pt-3'>
                    
                    </div>
                    <div>
                    
                    </div>
                    <div className='text-center pt-2 text-sm'>約2ヶ月</div>
                    <div className='text-center pt-2 text-sm'></div>
                    <div className='text-center pt-2 text-sm'></div>
                    <div className='text-center pt-2 text-sm'></div>
                </div>
            </div>
            <h2 className='text-xl sm:text-2xl pt-6'>マネジメントスキル</h2>
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
