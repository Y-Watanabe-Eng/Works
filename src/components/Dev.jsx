import '../style.css'
import {AppL} from './AppL'
import {AppR} from './AppR'
import Github from "/icon/github-icon.svg";
import { motion } from "framer-motion";

export const Dev = () => {

    return(
        <motion.div className='dev'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        >
            <h2 className='text-2xl sm:text-4xl font-CLEAT'>PORTFOLIO</h2>
            <div className="grid sm:grid-cols-2">
                <AppL />
                <AppR />
            </div>
            <div className='appLR'>
                <a 
                className='w-24 text-xl bg-gray-800 hover:bg-green-800 text-green-800 hover:text-black font-semiboid py-3 border border-4 border-green-800 hover:border-gray-800 rounded shadow'
                href="https://github.com/Y-Watanabe-Eng/src/"
                target='_blanc'
                ><img src={Github} alt="Github" />More...</a>
            </div>
        </motion.div>

    )
}