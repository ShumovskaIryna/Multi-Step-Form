import FirstStep from "./FirstStep"
import SecondStep from "./SecondStep"
import ThirdStep from "./ThirdStep"
import React, {useState} from "react"

export default function Form(props) {

    function stepShow (step) {
      switch(step)  {
        case 1: return <><FirstStep/><button>Next</button></>
        case 2: return <><SecondStep/><button>Back</button><button>Next</button></>
        case 3: return <> <ThirdStep/><button>Back</button><button>Submit</button></>
      }
    }

    return (
        <>
        <div className="steps">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        {stepShow(2)}
        </>
    )
}
