import { useEffect, useState } from "react"

export const SummerList = () => {
    const [plants, setPlants] = useState([])

    const localGardenUser = localStorage.getItem("garden_user")
    const gardenUser = JSON.parse(localGardenUser)

    useEffect(
        () => {
            fetch (`http://localhost:8088/plants?userId=${gardenUser.id}&&seasonId=1`)
                .then(res => res.json())
                .then((plantsArray) => {
                    setPlants(plantsArray)
                })
        },[]
    )

    return <article className="plants">
        {
            plants.map(plant => {
                return <section>
                    <div>Name: {plant.name}</div>
                </section>
            })
        }
    </article>
}