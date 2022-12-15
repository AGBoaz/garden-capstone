import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
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

    return <article className="plants">
        {
            plants.map(plant => {
                return <section className="plant" key={`plant--${plant.id}`}>
                    <button className="btn" onClick={()=> navigate(`/seasons/FallList/${plant.id}`)}>
                        <img className="plantPic" style={{width:"15rem", height:"13rem"}} alt="plant" src={plant.image} />
                    </button>
                </section>
            })
        }
    </article>
}