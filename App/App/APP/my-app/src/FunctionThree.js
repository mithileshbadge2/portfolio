import React,{useState} from "react";
const FunctionThree = () =>{
    const [isLoggedIn,setLoggedIn] = useState(true)
    const renderMessage = () =>{
        if(isLoggedIn){
            return <p>You are logged in</p>
        }
        else {
            return <p>You are logged out</p>
        }
    };

    return (
        <div>
            <h1>Welcome to our website</h1>
            {renderMessage()}
            <button onClick={()=> setLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Log out": "Log In"}
            </button>
        </div>
    )
}
export default FunctionThree;