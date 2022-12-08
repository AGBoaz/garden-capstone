import { useEffect, useState } from "react"

export const Seeds = () => {
    const [seeds, setSeeds] = useState([])

    useEffect(
        () => {
            fetch (`http://localhost:8088/seeds`)
                .then(res => res.json())
                .then((seedsArray) => {
                    setSeeds(seedsArray)
                    console.log(seedsArray)
                })
        },[]
    )

    return <article className="seeds">
        {
            seeds.map(seed => {
                return <section >
                    <div>Name: {seed.name}</div>
                </section>
            })
        }
    </article>
}