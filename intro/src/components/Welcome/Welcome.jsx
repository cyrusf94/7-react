import React from "react";

function Welcome(props) {
    function removeName() {
        const updatedNames = props.allNames.filter(origNames => origNames !== props.name)
        props.updateNames(updatedNames)
    }

    return(
        <h1 onClick={removeName}>Welcome, {props.name}</h1>
    )
}

export default Welcome;