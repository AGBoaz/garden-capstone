import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./seasons.css"

export const SummerList = () => {
    const [plants, setPlants] = useState([])

    const navigate = useNavigate()

    const localGardenUser = localStorage.getItem("garden_user")
    const gardenUser = JSON.parse(localGardenUser)

    useEffect(
        () => {
            // fetch the plants with the matching userId and seasonId
            fetch (`http://localhost:8088/plants?userId=${gardenUser.id}&&seasonId=1`)
                .then(res => res.json())
                .then((plantsArray) => {
                    setPlants(plantsArray)
                })
        },[]
    )


    return(
    <body className="wholeThing summerItem">
     <article className="plants">
        {
            plants.map(plant => {
                return <section className="plant" key={`plant--${plant.id}`}>
                    <Link to={`/seasons/SummerList/${plant.id}`}>
                        <img style={{width:"24rem", height:"18rem"}} alt="plant" src={plant.image} />
                    </Link>
                </section>
            })
        }
    </article>
    </body>
    )
}

