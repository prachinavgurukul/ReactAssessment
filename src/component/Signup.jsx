import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
export default function Signup(){
    const[username,setUserName]=useState("")
    const[boolean,setBoolean]=useState(false)
    const[errormsg,setErrorMsg]=useState("")
    const navigate=useNavigate()
    function checkValidity(event){
        if(event.target.value===""){
            setBoolean(false)
            setErrorMsg("username is empty")
        }
        else if(username.length<=5 || username.length>=15){
            setBoolean(false)
            setErrorMsg("username is too long or too short")
        }
        else{
            setBoolean(true)
            setErrorMsg("")
        }

    }
    return(
        <div>
            <input type="text" placeholder="username" onChange={(event)=>{
                setUserName(event.target.value)
                checkValidity(event)

                

            }}></input>
            <div>{errormsg}</div>
            <button onClick={()=>{
                {boolean? navigate("/Dashboard"):<Signup/>}
            }}>Submit</button>
            
        </div>
        
    )
}