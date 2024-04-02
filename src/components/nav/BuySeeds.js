import { Link, useLocation } from "react-router-dom"
import "./NavBar.css"

export const BuySeeds= () => {

    return (
        <>
        <section className="lowbar" >
            <footer className="addPlant">
                <div className="addPlantContainer">
                <Link className="addPlantLink" to="/Seeds">Buy Seeds</Link>
                </div>
            </footer>
        </section>
        </>
    )
}