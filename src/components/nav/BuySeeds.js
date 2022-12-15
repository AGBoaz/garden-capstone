import { Link } from "react-router-dom"
import "./NavBar.css"

export const BuySeeds= () => {

    return (
        <>
            <footer className="addPlant">
                <Link className="addPlant__link" to="/Seeds">Buy Seeds</Link>
            </footer>

        </>
    )
}