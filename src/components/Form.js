import FirstStep from "./FirstStep"
import SecondStep from "./SecondStep"
import ThirdStep from "./ThirdStep"
import React, {useContext} from "react"
import {multiStepContext} from "../StepContext"

export default function Form(props) {

  const {currentStep, setStep, submitData} = useContext(multiStepContext)
  
    function stepShow (step) {
      switch(step)  {
        case 1: return <><FirstStep/><button onClick={()=> setStep(2)}>Next</button></>
        case 2: return <><SecondStep/><button onClick={()=> setStep(1)}>Back</button><button onClick={()=> setStep(3)}>Next</button></>
        case 3: return <> <ThirdStep/><button onClick={()=> setStep(2)}>Back</button><button onClick={submitData}>Submit</button></>
      }
    }

    return (
        <>
        <div className="steps">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        {stepShow(currentStep)}
        </>
    )
}
