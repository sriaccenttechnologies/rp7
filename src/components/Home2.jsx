import { useState } from "react"

const Home2 = () => {
    
    function sample()
    {
        return 100;
    }

    const [var1,setVar1]=useState(10);
    const [var2,setVar2]=useState("Arun");
    const [var3,setVar3]=useState([10,20,30]);
    const [var4,setVar4]=useState({regno:1001,name:"Ragu",age:20});
    const [var5,setVar5]=useState(sample);

    console.log(var4)

    return (
    <>
    <h1>Var1={var1}</h1>
    <h1>Var2={var2}</h1>
    <h1>Var3={var3}</h1>
    <h1>Var4={var4.regno}-{var4.name}-{var4.age}</h1>
    <h1>Var5={var5}</h1>
    <button onClick={ ()=>setVar1(20) }>button-1</button>
    <button onClick={ ()=>setVar2("Bala") }>button-2</button>
    <button onClick={ ()=>setVar3([100,200,300]) }>button-3</button>
    <button onClick={ ()=>setVar4({regno:1002,name:"lokesh",age:40}) }>button-4</button>
    <button onClick={ ()=>setVar5(500) }>button-5</button>
    </>
  )
}
export default Home2

