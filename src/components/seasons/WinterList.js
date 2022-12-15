import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
//import daisy from "/pictures/plants/whiteFlower.png"

export const WinterList = () => {
    const [plants, setPlants] = useState([])
    const navigate = useNavigate()

    const localGardenUser = localStorage.getItem("garden_user")
    const gardenUser = JSON.parse(localGardenUser)

    useEffect(
        () => {
            fetch (`http://localhost:8088/plants?userId=${gardenUser.id}&&seasonId=2`)
                .then(res => res.json())
                .then((plantsArray) => {
                    setPlants(plantsArray)
                })
        },[]
    )

    return <article className="plants">
        {
            plants.map(plant => {
                return <section key={`plant--${plant.id}`}>
                    <button onClick={()=> navigate(`/seasons/WinterList/${plant.id}`)}>
                        <img style={{width:"15rem", height:"13rem"}} alt="plant" src={plant.image} />
                    </button>
                </section>
            })
        }
    </article>

}