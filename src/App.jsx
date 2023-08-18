import './style.css'
import {Header} from "./components/Header";
import {Dev} from "./components/Dev";
import {Skill} from "./components/Skill";
import {Profile} from "./components/Profile";
import {MiniMemo} from "./components/MiniMemo";
import {Tobaccost} from "./components/Tobaccost";
import {Footer} from "./components/Footer";
import {Bottom} from "./components/Bottom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export const App = () => {

  return (
    <Router>
      <div className="container">

        <Header />

        <Routes>
          <Route path='/Works/' element={<Dev />} />
          <Route path='/Works/Skill' element={<Skill />} />
          <Route path='/Works/Profile' element={<Profile />} />
          <Route path='/Works/MiniMemo' element={<MiniMemo />} />
          <Route path='/Works/Tobaccost' element={<Tobaccost />} />
        </Routes>

        <Footer />

        <Bottom />
      </div>
    </Router>
  )

}
