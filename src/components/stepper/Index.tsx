'use client'

import React, { useState } from 'react'
import Step2 from './Step2'
import Nav from '@/components/stepper/Nav'
import Step1 from './Step1'
import Step3 from './Step3'
import { Button } from '../ui/button'

const Index = () => {
  const [activeStep, setActiveStep] = useState<number>(1)

  // methods

  // handle nextButton
  function handleNext() {
    setActiveStep(prev => prev + 1)
  }
  function handleBack() {
    setActiveStep(prev => prev - 1)
  }

  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return <Step1 handleNext={handleNext} handleBack={handleBack} />
        break
      case 2:
        return <Step2 handleNext={handleNext} handleBack={handleBack} />
      case 3:
        return <Step3 handleNext={handleNext} handleBack={handleBack} />
      default:
        return <Step1 handleNext={handleNext} handleBack={handleBack} />
        break
    }
  }

  return (
    <>
      <Nav active={activeStep} />
      <div className=" w-full max-w-screen-xl ">
        {renderStepContent(activeStep)}
      </div>
    </>
  )
}

export default Index
