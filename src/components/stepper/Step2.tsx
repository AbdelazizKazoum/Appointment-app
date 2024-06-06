import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { Calendar } from '../ui/calendar'
import { cn } from '@/lib/utils'
import { StepperButtons } from '@/types/stepperTypes'
import { serviceType } from '@/types/rdvTypes'
import api from '@/lib/api'

const Step2 = ({ handleBack, handleNext }: StepperButtons) => {
  const [horaire, setHoraire] = useState<string[]>([])
  const [services, setServices] = useState<serviceType[]>([])

  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [selectedService, setSelectedService] = useState('Financial Planning')
  const [selectedTime, setSelectedTime] = useState('09:00')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    ;(async () => {
      const { data: horaire } = await api.get('/rdv/horaire')
      setHoraire(horaire)

      const { data } = await api.get('/rdv/services')
      setServices(data)

      setLoaded(true)
    })()
  }, [])

  function onSubmitData() {
    console.log(' Selected dervice : ', selectedService)
    console.log(' Selected time : ', selectedTime)
    console.log(' Selected date : ', date)

    handleNext()
  }

  return (
    <div>
      {loaded ? (
        <div className=" w-full flex flex-col items-center ">
          {/* <div className="relative mx-auto mt-20 mb-20 max-w-screen-lg overflow-hidden rounded-t-xl bg-emerald-400/60 py-32 text-center shadow-xl shadow-gray-300">
          <h1 className="mt-2 px-8 text-3xl font-bold text-white md:text-5xl">
            Book an appointment
          </h1>
          <p className="mt-6 text-lg text-white">
            Get an appointment with our experienced accountants
          </p>
          <img
            className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=htmlFormat&fit=crop&w=1170&q=80"
            alt=""
          />
        </div> */}

          <div className=" w-full  mt-8 sm:mt-16">
            <div className=" p-3 ">
              <p className=" text-xl font-bold text-black-500 ">
                Select a service
              </p>
              <div className="mt-4 grid  gap-x-4 gap-y-3 sm:grid-cols-2 grid-cols-1 w-full">
                {services.map((item, id) => (
                  <div
                    key={id}
                    onClick={() => setSelectedService(item.name)}
                    className="relative"
                  >
                    <span
                      className={cn(
                        'absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-400 bg-white ',
                        item.name == selectedService && 'border-orange-100',
                      )}
                    ></span>

                    <label
                      className={cn(
                        'flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:text-white',
                        item.name == selectedService &&
                          'bg-primary-500 text-white-300',
                      )}
                      htmlFor="radio_2"
                    >
                      <span className="mt-2 font-medium">{item.name}</span>
                      <span className="text-xs uppercase">{item.time}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 ">
              <div className="">
                <p className="mt-8 text-xl font-bold text-black-500">
                  Select a date
                </p>
                <div className="flex-1 max-w-[560px]">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
              </div>

              <div className="flex-1">
                <p className="mt-8 text-xl font-bold text-black-500">
                  Select a time
                </p>

                <div className="mt-4 grid grid-cols-2  sm:grid-cols-3 gap-2 lg:max-w-xl">
                  {horaire.map((item, id) => (
                    <button
                      onClick={() => setSelectedTime(item)}
                      key={id}
                      className={cn(
                        'rounded-lg bg-primary-100 px-4 py-2 font-medium text-emerald-900 active:scale-95  ',
                        selectedTime === item &&
                          'bg-primary-500 px-4 py-2 font-medium text-white-300',
                      )}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-16  flex flex-row justify-between">
              <Button
                className=" w-[170px] h-[45px]"
                onClick={() => handleBack()}
              >
                Back
              </Button>
              <Button
                className="w-[170px] h-[45px]"
                onClick={() => onSubmitData()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div>loading ........</div>
      )}
    </div>
  )
}

export default Step2
