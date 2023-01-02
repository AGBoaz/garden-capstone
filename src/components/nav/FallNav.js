import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const FallNav = () => {
    const navigate = useNavigate()

    return (
        <>
         <section className="dontMove">
            <ul className="navbar fallBar">

                <li className="navbar__item fallItem active">
                    <Link className="navbar__link" to="/seasons/WinterList">Winter</Link>
                </li>
                <li className="navbar__item fallItem active">
                    <Link className="navbar__link" to="/seasons/SpringList">Spring</Link>
                </li>


                <li className="navbar__item fallItem navbar__logout">
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