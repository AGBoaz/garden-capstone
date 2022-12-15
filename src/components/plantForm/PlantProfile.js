import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

export const PlantProfile = () => {

    const [plant, setPlant] = useState({
        name: "",
        description: "",
        type: "",
        seasonId: 0,
        watered: 0,
        userId: 0,
        image: 0
    })
    const { plantId } = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    //fetch the selected plant 
    useEffect(() => {
        fetch(`http://localhost:8088/plants/${plantId}`)
            .then (response => response.json())
            .then((data) => {
                setPlant(data)
            })
    },[plantId])

    return <>
    {/* display plant image  */}
    <img style={{width:"20rem", height:"18rem"}} alt="plant" src={plant.image} />

    {/* display plant name  */}
    <div> {plant.name} </div>

    {/* display plant description  */}
    <div> {plant.description} </div>

    {/* edit button */}
    <button onClick={()=> navigate(`${location.pathname}/edit`)}>Edit</button>
    <button onClick={()=> navigate(`${location.pathname.replace(plantId, "")}`)}>Nevermind</button>


    </>

}