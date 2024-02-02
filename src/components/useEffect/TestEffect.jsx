import React, { useEffect, useState } from 'react'
import style from './TestEffect.module.css'

const TestEffect = () => {
    const [count,setCount] = useState(0)
    const [counts,setCounts] = useState(count)

    const handelclick = ()=>{
        setCount(count+1)
    }
    const handelclicks = ()=>{
        // setCount(count+1)
        setCounts(counts+2)
    }

    useEffect(()=>{
        console.log('hello')
    },[count])

    return (
        <div className={style.main}>
            <div className={style.card}>
            <div className={style.display}>
                {count}{counts}
                
            </div>
                <div className={style.buttons} >
                    <h1>UseEffect</h1>
                    <button onClick={handelclick} >Click</button>
                    <button onClick={handelclicks} >Clicks</button>
                    
                </div>
            </div>

        </div>

    )
}

export default TestEffect