import React, { useState, useEffect } from 'react'
import chooseAlgorithm from '../sortAlgorithm/chooseAlgorithm';

function Block({ h }) {
    return (
        <div>
            <div className='block' style={{ height: 3 * h + "px" }}>
                {h}
            </div>
        </div>
    )
}


export default function Body() {
    const [input, setInput] = useState();
    const [arr, setArr] = useState([]);
    const splitString = (x) => {
        let y = x.split(" ")
            .map(item => (item.trim()))  // remove any spaces
            .filter(item => item !== '')  // exclude any empty values caused by extra comma at end
        return y;
    }
    useEffect(() => {
        if (input !== undefined) {
            const y = splitString(input);
            setArr(y)
        }
    }, [input])
    return (
        <>
            <div className='arrayInput'>
                <input type='text' id="inputString" placeholder='Enter the array' onChange={(e) => setInput(e.target.value)} />
                <button onClick={chooseAlgorithm}>Sort</button>
            </div>
            <div id="array">
                {
                    arr.map(h => (<Block h={h} />))
                }
            </div>
        </>

    )
}
