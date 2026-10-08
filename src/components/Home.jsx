import { useState } from "react"

const Home = () => {
    

    const [count,setCount]=useState(10);

    function change()
    {
        setCount(20)
    }

    function  setcout()
    {
        
    }
    return (
    <>
    <h1>{count}</h1>
    <button onClick={ change }>button-1</button>
    </>
  )
}
export default Home

