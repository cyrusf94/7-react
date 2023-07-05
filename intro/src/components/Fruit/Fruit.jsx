import React, {useState} from 'react'

function Fruit(props) {
    return (
        <>
        <form>
            <input onChange={e => props.name(e.target.value)} type="text" placeholder='Enter name' />
            <input onChange={e => props.fruit(e.target.value)} type="text" placeholder='Enter favorite fruit' />
        </form>
        </>
    )
}

export default Fruit