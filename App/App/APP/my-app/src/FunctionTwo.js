import React,{useState} from "react";
const FunctionTwo = () =>{
    const [isLoggedIn , setLoggedIn] = useState(false)

    return (
        <div>
            <h1>Welcome to our website</h1>
            {isLoggedIn ? <p>You are logged in!</p>:<p>You are logged out!</p>}
            <button onClick={()=> setLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Log out":"Log in"}
            </button>
        </div>
    )
}

export default FunctionTwo;