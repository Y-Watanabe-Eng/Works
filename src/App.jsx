import './style.css';
import { Loading } from "./components/Loading";
import { Header } from "./components/Header";
import { Dev } from "./components/Dev";
import { Skill } from "./components/Skill";
import { Profile } from "./components/Profile";
import { MiniMemo } from "./components/MiniMemo";
import { Tobaccost } from "./components/Tobaccost";
import { Footer } from "./components/Footer";
import { Bottom } from "./components/Bottom";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const App = () => {

  const location = useLocation();

  return (

      <div className="container">

        <Loading />

        <Header />

        <AnimatePresence>

        <Routes location={location} key={location.pathname}>

          <Route path='/Works/' element={<Dev />} />
          <Route path='/Works/Skill' element={<Skill />} />
          <Route path='/Works/Profile' element={<Profile />} />
          <Route path='/Works/MiniMemo' element={<MiniMemo />} />
          <Route path='/Works/Tobaccost' element={<Tobaccost />} />

        </Routes>

        </AnimatePresence>

        <Footer />

        <Bottom />



      </div>

  )

}
