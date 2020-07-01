import React , {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count , setCount] =  useState(0)
    const [count , setCount] =  useState('')


    useEffect(() => {
        document.title = 'you clicked {count}  times'
    } , [count]
     )
    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() =>setCount(count +1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne
