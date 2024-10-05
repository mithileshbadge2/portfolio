import React,{useState} from "react";

const FunctionOne = () =>{
    const[isLoggedIn,setLoggedIn ] = useState(true)

    return(
        <div>
            <h1>Welcome to our website!</h1>
            {isLoggedIn && <p>You are logged in !</p>}
            <button onClick={()=>setLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Logout':'Login'}
            </button>
        </div>
    )
}

export default FunctionOne;