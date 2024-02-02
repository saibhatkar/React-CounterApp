import { useState } from 'react'
import CounterApp from './components/CounterApp/CounterApp'
import BgColorChanger from './components/BgColorChanger/BgColorChanger'
import UseEffect from './components/useEffect/UseEffect'
import TestEffect from './components/useEffect/TestEffect'
import SimpleTodoList from './components/TodoList/SimpleTodoList'

function App() {
  const [file, setFile] = useState()

  // const handelClick = () => {
  //   setFile(<CounterApp />
  //   )
  //   console.log("button pressed", file)
  // }
  return (

    <>
      {/* <div className="choice">
        <button onClick={handelClick}>

        </button>
      </div> */}
      {/* < BgColorChanger /> */}
          {/* <CounterApp /> */}
          {/* <UseEffect /> */}
          {/* <TestEffect /> */}
          <SimpleTodoList />
    </>
  )
}

export default App
