import React, {useState} from 'react';
import{useEffect} from "react";



const Home = () => {

    const [counter,setCounter] = useState(0)
    const [users,setUsers] = useState([])
    useEffect(()=>{
        console.log("useEffect сработаль")
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>res.json())
            .then(data=>setUsers(data))
    },[])
    console.log(counter)
    return (
        <>
            <h1>{counter}</h1>
            <button
                onClick={()=>{
                setCounter(counter + 1)
            }}
            >click</button>
            <div className="container">
                {
                        users.map(el=>(
                        <h3>{el.name}</h3>

                    ))

                }
            </div>

        </>
    );
};

export default Home;