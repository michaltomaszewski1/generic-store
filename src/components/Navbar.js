import React from "react";
import "../css/Navbar.css"
import {Link} from "react-router-dom";
import CartIcon from "./CartIcon";

const Navbar = ({cart}) => {
    return(
        <nav>
            <div/>
            <Link to='/'>
                <h3>Generic Store</h3>
            </Link>
            <CartIcon cart={cart}/>
        </nav>
    )
}

export default Navbar;