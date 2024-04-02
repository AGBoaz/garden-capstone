// This file holds the top navigation bar for the "winter" page. The user can navigate to the "summer" or "fall" pages 
// from the "winter" page. The user may also click "logout".

import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const WinterNav = () => {
    const navigate = useNavigate()

    return (
        <>
            <ul className="navbar winterBar">

                <li className="navbar__item winterItem active">
                    <Link className="navbar__link" to="/seasons/SummerList">Summer</Link>
                </li>
                <li className="navbar__item winterItem active">
                    <Link className="navbar__link" to="/seasons/FallList">Fall</Link>
                </li>

                <li className="navbar__item winterItem navbar__logout">
                    <Link className="navbar__link" to="" onClick={() => {
                        localStorage.removeItem("garden_user")
                        navigate("/", { replace: true })
                    }}>Logout</Link>
                </li>
            </ul>
        </>
    )
}