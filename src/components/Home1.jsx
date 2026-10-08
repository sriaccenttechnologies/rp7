import { useState } from "react"

const Home1 = () => {
    
    const [count,setCount]=useState(10);

    return (
    <>
    <h1>{count}</h1>
    <button onClick={ ()=>setCount(20) }>button-1</button>
    <button onClick={ ()=>setCount(30) }>button-2</button>
    <button onClick={ ()=>setCount(40) }>button-3</button>
    </>
  )
}
export default Home1

