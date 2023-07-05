import React, {useState} from 'react'

function DisplayFruit(props) {
    return (
        <>
        <h1>{props.name}'s favorite fruit is {props.favFruit} </h1>
        </>
    )
}

export default DisplayFruit