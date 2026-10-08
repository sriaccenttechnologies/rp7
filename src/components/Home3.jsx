const Home3 = () => {
    
    function  createState(initialvalue)    
    {
        let value=initialvalue

        function getValue(){
            return value
        }

        function setValue(newvalue){
            value=newvalue
        }
        return [getValue,setValue]
    }

    const [count,setCount]=createState(0)

    
    
    console.log(count())
    setCount(100)
    console.log(count())

    return (
    <>
   <h1>welcome</h1>
    </>
  )
}
export default Home3

