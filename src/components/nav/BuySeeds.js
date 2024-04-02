// This file holds the footer navigation bar that is displayed on the "seasons" pages. When the "addPlant__link" is clicked,
// the user will be directed to a new page where they can buy new seeds for their garden.

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