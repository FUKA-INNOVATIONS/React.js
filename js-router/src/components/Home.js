import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    const id = 34
    console.log('home rendered')
    return (
        <>
            <h1>Home</h1>
            <p><Link to={`portfolio/${id}`}>Portfolio with id</Link></p>
        </>
    )
}

export default React.memo(Home)