import React from 'react'
import { Button } from '../ui/button'
import { StepperButtons } from '@/types/stepperTypes'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'

const Step3 = ({ handleBack, handleNext }: StepperButtons) => {
  return (
    <div>
      <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 my-10 rounded-xl shadow">
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-1">
            Vérification du téléphone mobile
          </h1>
          <p className="text-[15px] text-slate-500">
            Entrez le code de vérification à 4 chiffres qui a été envoyé à votre
            numéro de téléphone.
          </p>
        </header>
        <form id="otp-form">
          <div className="flex items-center justify-center gap-3">
            <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="max-w-[260px] mx-auto mt-4 flex gap-1 ">
            <Button
              className=" w-[170px] h-[45px] bg-primary-500"
              onClick={() => handleBack()}
            >
              Retour
            </Button>
            <Button className="w-[170px] h-[45px] bg-primary-500">
              Vérifier
            </Button>
          </div>
        </form>
        <div className="text-sm text-slate-500 mt-4">
          Vous n’avez pas reçu de code ?
          <a
            className="font-medium text-primary-500 hover:text-primary-600"
            href="#0"
          >
            Renvoyer
          </a>
        </div>
      </div>
    </div>
  )
}

export default Step3
