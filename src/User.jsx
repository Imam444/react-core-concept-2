import { useEffect, useState } from "react"

export default function USer(){
    const[user, setUser]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setUser(data))
    }, [])
    return(
        <div>
            <h3>USers:{user.length}</h3>
        </div>
    )
}