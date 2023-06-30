import React, { useState } from "react"
import "./count.css"

function Count() {

    // Syntax:
    // [ variable, setVariableFx ] = useState(initialValue)
    const [ count, setCount ] = useState(0)
    // count --> initial variable
    // setCount --> fx that updates count
    // useState --> holds the initial count value

    /* 
        Pass anonymous callback in set to only trigger once 
        () => {
            triggers only once
            return 0
        }

    */
    function incCount() {
        // will dec twice
        setCount(prevCount => prevCount + 1)
    }

    function decCount() {
        // will not decrement twice
        setCount(count - 1)
    }
    return(
        <div className="count">
        <button onClick={decCount}>-</button>
        <span>{count}</span>
        <button onClick={incCount}>+</button>
        </div>
    )
}

export default Count;

/* 
    ! Challenge
  * build Count component
  * set count variable
  * within Count component, create incCount and decCount functions
  * their purpose is to change the value of the count variable
  * render + and - buttons and span with the value of count
  * import and mount to App component
*/

