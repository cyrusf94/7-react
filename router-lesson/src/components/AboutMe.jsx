import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function AboutMe() {
    // A hook that allows us to destructure params coming from the endpoint
    const { name } = useParams()
    // A hook that allows us to dynamically change the nav of our UI
    let navigate = useNavigate()
    return (
        <>
        <div>Hello, my name is { name }</div>
        <button onClick={() => navigate("/")}>Go Home</button>
        </>
    )
}

export default AboutMe