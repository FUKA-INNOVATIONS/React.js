import React from "react";
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
import NotFound from "./components/NotFound";


function App() {

    let activeClassName = "underline";

    let activeStyle = {
        textDecoration: "underline",
        color: 'red'
    }

    return (
        <div className="App">
            <NavLink
                to={'/'}
                style={({isActive}) => isActive ? activeStyle : undefined} end>
                Home navLink
            </NavLink>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/portfolio/'} element={<Portfolio/>}/>
                <Route path={'/portfolio/:id'} element={<Portfolio/>}/>
                <Route path={'/*'} element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
