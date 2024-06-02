import React from "react";
import { Link } from "react-router-dom";
import './css/styleNavigate.css'

export default function Navigation() {
    return (
        <div className="container">
            <Link className="link" to="/">Main page</Link>
            <Link className="link" to={{
                pathname:"/about",
                state:{
                    obj:true
                }
            }}>About</Link>
        </div>
    );
}
