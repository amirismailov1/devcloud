import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './style.scss'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import WorkProcess from "./pages/WorkProcess/WorkProcess";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
    return (
        <div>
<Header/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/workProcess' element={<WorkProcess/>}/>
<Route path='/portfolio' element={<Portfolio/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contacts' element={<Contacts/>}/>
<Route path='*' element={<NotFound/>}/>
</Routes>
<Footer/>
        </div>
    );
};

export default App;