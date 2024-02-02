import React, { useState } from 'react'
import styles from './SimpleTodoList.module.css'
const SimpleTodoList = () => {

    const [activity, setActivity] = useState("")
    const [listData, setListData] = useState([])
    const addActivity = () => {
        // setListData([...listData,activity])
        setListData((listData) => {
            const updatedList = [...listData, activity]
            console.log("updatedList", updatedList)
            setActivity("")
            return updatedList
        })
    }
    const removeActivity = (i)=>{
        const updatedListData = listData.filter((elem,id)=>{
            return i!=id;
        })
        setListData(updatedListData)
        console.log("000",updatedListData)

    }
    return (
        <>
            <div className={styles.main}>
                <div className={styles.card}>
                    <div className={styles.header}>
                        <input className={styles.inputBox}
                         type="text"
                            placeholder='Add Activity'
                            value={activity}
                            onChange={(e) => { setActivity(e.target.value) }} />
                        <button
                            className={styles.addBtn}
                            onClick={addActivity}

                        >Add</button>
                    </div>
                    <div className={styles.note}>
                        <h1>List of your data (:</h1>
                    </div>
                    {
                        listData != [] && listData.map((data, i) => {
                            return (
                                <>
                                    <div className={styles.container} key={i}>
                                        <div className={styles.data}>
                                            {data}
                                        </div>
                                        <div className={styles.removeBtn}>
                                            <button className={styles.rmbtn} onClick={()=>{
                                                removeActivity(i)
                                            }}>remove</button>
                                        </div>

                                    </div>
                                </>
                            );
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default SimpleTodoList