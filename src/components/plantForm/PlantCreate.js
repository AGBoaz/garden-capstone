import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getSelected } from "../Seeds"


export const PlantCreate = () => {
    let seed = getSelected()

    const navigate = useNavigate()
    const localGardenUser = localStorage.getItem("garden_user")
    const gardenUserObj = JSON.parse(localGardenUser)

    //getting seasons from api - 24
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

    //setting up a default plant - 35
    const [plant, setPlant] = useState({
        name: seed.type,
        description: seed.description,
        type: seed.type,
        seasonId: 1,
        watered: 0,
        userId: 0,
        image: 0
    })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API
        const plantToSendToApi = {
            name: plant.name,
            description: plant.description,
            type: seed.type,
            seasonId: plant.seasonId,
            watered: 0,
            userId: gardenUserObj.id,
            image: 0
        }
        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/plants`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plantToSendToApi)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/seasons/SummerList")
            })
    }

    return (
        <>
            <form className="plantForm">
                <h2 className="plantForm__title">Customise your plant</h2>


                {/*NAME*/}
                <fieldset>
                    <div className="form-group">
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder={seed.name}
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
                            placeholder={seed.description}
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
                        {seasons.map(season => {
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
                    className="btn btn-primary">
                    Done!
                </button>
            </form>
        </>
    )
}