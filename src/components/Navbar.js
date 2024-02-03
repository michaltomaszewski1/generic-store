import React from "react";
import "../css/Navbar.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <Link to='/'>
                <h3>Generic Store</h3>
            </Link>
            <p>cart</p>
        </nav>
    )
}

export default Navbar;