import React, { useState } from 'react'
import  style from './useEffect.module.css'
import { useEffect } from 'react'
const UseEffect = () => {
    const [count,setCount]=useState(0)
    
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        },1000)
        console.log(count)
    },[count])
    // const [seconds, setSeconds] = useState(0);
    
    // useEffect(() => {
    //   // Function to be executed after the component mounts
    //   const timer = setTimeout(() => {
    //     // Update the state variable after 1000 milliseconds (1 second)
    //     setSeconds(seconds + 1);
    //   }, 1000);
    
    //   // Function to be executed when the component unmounts
    //   return () => clearTimeout(timer);
    // }, [seconds]); // Dependency array ensures that useEffect runs when 'seconds' changes

    return (
    <>

        <div className={style.main}>
            <div className={style.card}>
            Timer App
                <div className={style.display}>
                    {count}
                </div>
            </div>
        </div>
{/* 
    <div>
      <h1>Timer Example</h1>
      <p>Seconds: {seconds}</p>
    </div> */}
        </>
    )
}

export default UseEffect

