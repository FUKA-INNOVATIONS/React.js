import React from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

const Portfolio = () => {
    const params = useParams()
    console.log('params: ', params)
    return (
        <>
            <h1>Portfolio: {params.id}</h1>
            <Link to={'/'} replace>Home</Link>
        </>
    )
}

export default React.memo(Portfolio)