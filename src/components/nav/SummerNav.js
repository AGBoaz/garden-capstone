import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"


export const SummerNav = () => {
    const navigate = useNavigate()

    return (
        <>
            <ul className="navbar summerBar">

                <li className="navbar__item summerItem active">
                    <Link className="navbar__link" to="/seasons/SpringList">Spring</Link>
                </li>
                <li className="navbar__item summerItem active">
                    <Link className="navbar__link" to="/seasons/WinterList">Winter</Link>
                </li>

                <li className="navbar__item summerItem navbar__logout">
                    <Link className="navbar__link" to="" onClick={() => {
                        localStorage.removeItem("garden_user")
                        navigate("/", { replace: true })
                    }}>Logout</Link>
                </li>
            </ul>
        </>
    )
}