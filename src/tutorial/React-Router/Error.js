import React from 'react';
import { Link } from "react-router-dom";

function Error() {
    return (
        <div>
            <h1>Error</h1>
            <Link to="/" className="btn">
                Go Back to Home Page
            </Link>
        </div>
    )
}

export default Error
