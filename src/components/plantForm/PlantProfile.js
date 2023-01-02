import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import "./plantInfo.css"

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
    <section className="basic_profile">

        <div className="plantImgContainer">
            <img className="img"  alt="plant" src={plant.image} />
        </div>

        <div className="plantText">
            <h1 className="profileNameDes"> {plant.name} </h1>
            <h2 className="profileNameDes"> {plant.description} </h2>

            <div className="btnsContainer">
                <button className ="btns" onClick={()=> navigate(`${location.pathname}/edit`)}>Edit</button>
                <button className="btns" onClick={()=> navigate(`${location.pathname.replace(plantId, "")}`)}>Nevermind</button>
            </div>
        </div>

    </section>
    </>

}