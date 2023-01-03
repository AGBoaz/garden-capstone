import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const SpringNav = () => {
    const navigate = useNavigate()

    return (
        <>
         <section className="dontMove">
            <ul className="navbar springBar">

                <li className="navbar__item springItem active">
                    <Link className="navbar__link" to="/seasons/FallList">Fall</Link>
                </li>
                <li>
                    <h1>Spring</h1>
                </li>
                <li className="navbar__item springItem active">
                    <Link className="navbar__link" to="/seasons/SummerList">Summer</Link>
                </li>

                <li className="navbar__item springItem navbar__logout">
                    <Link className="navbar__link" to="" onClick={() => {
                        localStorage.removeItem("garden_user")
                        navigate("/", { replace: true })
                    }}>Logout</Link>
                </li>
            </ul>
        </section>
        </>
    )
}