import React from 'react'

export default function test() {
    let [counter, setcounter] = React.useState(1)

    function increment(event) {
        event.preventDefault();

        let temp = counter + 1;
        setcounter(temp);
    }

    return (
        <div>
            {counter}
            
            <br></br>
            <button type="button" onClick={(event) => {increment(event)} }>Increment</button>

            <br/>
            <p>{new Date().getUTCFullYear()}</p>
        </div>
    )
}
