import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Seasons.css"
export const FallList = () => {
    const [plants, setPlants] = useState([])
    const navigate = useNavigate()


    const localGardenUser = localStorage.getItem("garden_user")
    const gardenUser = JSON.parse(localGardenUser)

    useEffect(
        () => {
            fetch (`http://localhost:8088/plants?userId=${gardenUser.id}&&seasonId=3`)
                .then(res => res.json())
                .then((plantsArray) => {
                    setPlants(plantsArray)
                })
        },[]
    )

    return(
        <body className="wholeThing fallItem">
        <article className="plants">
            {
                plants.map(plant => {
                    return <section className="plant" key={`plant--${plant.id}`}>
                        <Link to={`/seasons/FallList/${plant.id}`}>
                            <img style={{width:"24rem", height:"18rem"}} alt="plant" src={plant.image} />
                        </Link>
                    </section>
                })
            }
        </article>
        </body>
        )
}