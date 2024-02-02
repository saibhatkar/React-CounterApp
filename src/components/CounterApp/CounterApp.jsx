import React, { useState } from 'react'
import style from  './CounterApp.module.css'
const CounterApp = () => {

  const [count, setCount] = useState(0)

  const handelClickIncrement = () => {
    setCount((count) => count + 2)
    // setCount(count + 1)

    console.log("incremert", count)
  }

  const handelClickReset = () => {
    setCount(0);
  }

  const handelClickDecrement = () => {
    setCount((count) => count - 2)
  }

  return (
    <>
      <div className={style.main}>
        <div className={style.counterAppCard}>

          <div className={style.values}>
            <p>{count}</p>
          </div>

          <div className={style.controller}>
            <button onClick={handelClickIncrement}>INCREMENT</button>
            <button onClick={handelClickReset}>RESET</button>
            <button onClick={handelClickDecrement}>DECREMENT</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default CounterApp