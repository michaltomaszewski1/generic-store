import React from "react";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to generic store!</h1>
            <Link to= '/store'>
                <button>start buying</button>
            </Link>
        </div>
    )
}

export default HomePage;