import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import "./plantInfo.css"

export const PlantEdit = () => {

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
    let location = useLocation()

    //fetch the selected plant. store it in the variable "plant"
    useEffect(() => {
        fetch(`http://localhost:8088/plants/${plantId}`)
            .then (response => response.json())
            .then((data) => {
                setPlant(data)
            })
    },[plantId])

    //fetch the seasons used in the form
    const [seasons, setSeasons] = useState([])
    useEffect(
        () => {
            fetch(`http://localhost:8088/seasons`)
                .then(res => res.json())
                .then((seasonsArray) => {
                    setSeasons(seasonsArray)
                })
        }, []
    )


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        var locationStr = location.pathname
        var edit = "/edit"
        let path = locationStr.replace(edit, '')
        

        return fetch(`http://localhost:8088/plants/${plant.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plant)
        })
        .then(response => response.json())
        .then(() => {
            navigate(`${(path)}`)
        })

    }

    const handleDeleteButtonClick = (event) => {
        event.preventDefault()

        var locationStr = location.pathname
        var edit = `/${plant.id}/edit`
        let path = locationStr.replace(edit, '')

        return fetch(`http://localhost:8088/plants/${plant.id}`, {
            method: "DELETE",
        })
        .then(() => {
            navigate(`${(path)}`)
        })
    }


    return <>
        <section className="basic_edit">

            <form className="plantText">
                <h2 className="plantForm__title">Edit your plant</h2>


                {/*NAME*/}
                <fieldset>
                    <div className="form-group">
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder={plant.name}
                            value={plant.name}
                            onChange={
                                (event) => {
                                    const copy = { ...plant }
                                    copy.name = event.target.value
                                    setPlant(copy)
                                }
                            } />
                    </div>
                </fieldset>

                {/*DESCRIPTION*/}
                <fieldset>
                    <div className="form-group">
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder={plant.description}
                            value={plant.description}
                            onChange={
                                (event) => {
                                    const copy = { ...plant }
                                    copy.description = event.target.value
                                    setPlant(copy)
                                }
                            } />
                    </div>
                </fieldset>

                {/*SEASON ID*/}
                <fieldset>
                    <div className="form-group">
                        {seasons.map (season => {
                            return <>
                                <div>
                                    <input type="radio" name="seasonId" value={season.id}
                                        onChange={
                                            (event) => {
                                                const copy = { ...plant }
                                                copy.seasonId = event.target.value
                                                setPlant(copy)
                                            }
                                        }
                                    /> {season.name}
                                </div>
                            </>
                        })}
                    </div>
                </fieldset>


                <button
                    onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                    className="btns">
                    Done!
                </button>

                <button
                    onClick={(clickEvent) => handleDeleteButtonClick(clickEvent)}
                    className="btns">
                    Delete
                </button>
            </form>
        </section>
        </>
}