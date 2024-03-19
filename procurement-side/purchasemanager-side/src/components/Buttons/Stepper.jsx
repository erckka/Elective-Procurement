import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti'
import './stepper.css'

const Stepper = (props) => {
  const steps = ['Customer Info', 'Item Info']
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && 'active'} ${
              (i + 1 < currentStep || props.complete) && 'complete'
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || props.complete ? (
                <TiTick size={24} />
              ) : (
                i + 1
              )}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Stepper
