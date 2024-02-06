import React, {useContext} from "react"
import {multiStepContext} from "../StepContext"

export default function FirstStep(props) {

  const { userData, setUserData } = useContext(multiStepContext)
    
    return (
        <div className="container">
            <label htmlFor="username">User Name</label>
            <input type="name" id="username" placeholder="Enter your name" 
            value={userData['username']}
            onChange={(e)=>setUserData({...userData, "username": e.target.value})}/>
            <label htmlFor="tel">Mobile Phone</label>
            <input type="tel" id="tel" placeholder="+380 -- --- -- --" 
            value = {userData['tel']}
            onChange={(e)=>setUserData({...userData, "tel": e.target.value})}/>
        </div>
    )
}
