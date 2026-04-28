import { useEffect, useState } from "react";

function Users(){
    const [data,setdata]= useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(setdata)
    })
    return<>
    <ol>{data.map((user)=><li key={user.id}>Name: {user.name}
    <br/>
    Email: {user.email}
    <br />
    Phone: {user.phone}
    </li>)}</ol>
    </>
}
export default Users;
