import React, { useState } from 'react'
import style from "./BgColorChanger.module.css"
const BgColorChanger = () => {

    const [color, setColor] = useState("black")
    return (
        <>
            <div className={style.main} style={{ backgroundColor: `${color}` }}>
                <h1>Bgaround color changer app</h1>
                <div className={style.buttons}>

                    <button style={{ backgroundColor: 'red', color: 'black' }} onClick={() => {
                        setColor("red")
                    }} >
                        RED
                    </button>
                    <button style={{ backgroundColor: 'orange', color: 'black' }} onClick={() => {
                        setColor("orange")
                    }} >
                        Ornage
                    </button>
                    <button style={{ backgroundColor: 'green', color: 'black' }} onClick={() => {
                        setColor("green")
                    }} >
                        GREEN
                    </button>
                    <button style={{ backgroundColor: 'grey', color: 'black' }} onClick={() => {
                        setColor("grey")
                    }} >
                        GREY
                    </button>
                    
                </div>


            </div>
        </>
    )
}

export default BgColorChanger