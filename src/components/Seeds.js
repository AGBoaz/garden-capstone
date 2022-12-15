import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

let selected = ""
export const getSelected = () => {return selected}

export const Seeds = () => {
    const [seeds, setSeeds] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch (`http://localhost:8088/seeds`)
                .then(res => res.json())
                .then((seedsArray) => {
                    setSeeds(seedsArray)

                })
        },[]
    )

    let findSeedObj = (number) => {
        for (let seed of seeds){
            if (number === seed.id){
                return seed
            }
        }
    }

    document.addEventListener(
        "change",
        (event) => {
            // .name and .value come from the HTML input tag from the function below
            if (event.target.name === "seed") {
                 selected = findSeedObj(parseInt(event.target.value))
            }
        }
    )

    return<>
     <article className="seeds">
        {
            seeds.map(seed => {
                return <>
                    <div>
                        <input type="radio" name="seed" value={seed.id} /> {seed.name}
                    </div>
                </>
            })
        }
    </article>
    <button onClick={()=> navigate("/plantForm/PlantCreate")}>Buy Seeds</button>
    </>
}

