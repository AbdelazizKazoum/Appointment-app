'use client'

import React, { useRef } from 'react'
import Form from '../form/Form'
import { Button } from '../ui/button'
import { StepperButtons } from '@/types/stepperTypes'

const Step1 = ({ handleBack, handleNext }: StepperButtons) => {
  const submitRef = useRef<HTMLButtonElement>()

  return (
    <div className="mt-8 sm:mt-16 flex flex-col justify-center">
      <Form ref={submitRef} handleNext={handleNext} />
      <div className="mt-8 sm:mt-16  flex flex-row justify-center">
        <Button
          className="w-[170px] h-[45px]"
          onClick={() => {
            submitRef.current?.click()
          }}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default Step1
