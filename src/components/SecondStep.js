import React, {useContext} from "react"
import {multiStepContext} from "../StepContext"

export default function SecondStep(props) {

  const { userData, setUserData } = useContext(multiStepContext)
    
    return (
        <div className="container">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="Enter email"
            value={userData['email']}
            onChange={(e)=>setUserData({...userData, "email": e.target.value})}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password"
            value={userData['password']}
            onChange={(e)=>setUserData({...userData, "password": e.target.value})}/>
        </div>
    )
}
