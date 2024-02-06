import React, {useContext} from "react"
import {multiStepContext} from "../StepContext"

export default function ThirdStep(props) {

    const { userData, setUserData} = useContext(multiStepContext)

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setUserData({ ...userData, avatar: file.name });
        }
      };

    return (
        <div className="container">
            <label htmlFor="avatar">Profile Photo</label>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" placeholder="Choose photo"
            onChange={handleFileChange}
            />
        </div>
    )
}
