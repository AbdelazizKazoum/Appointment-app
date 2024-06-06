import React from 'react'
import Step1 from '../../components/stepper/Step2'
import Nav from '@/components/stepper/Nav'
import Index from '@/components/stepper/Index'

const Page = () => {
  return (
    <div className="relative h-full  overflow-hidden ">
      {/* <div
        className="  z-10 bg-cover bg-center bg-opacity-0 bg-no-repeat absolute w-full h-full"
        style={{ backgroundImage: "url('/assets/images/background.jpg')" }}
      ></div> */}
      <div className=" relative z-20 mb-[90px] mt-20 flex flex-col items-center p-3 md:p-5 lg:p-10 ">
        <h2 className="text-center text-gray-600 m-5 font-bold text-2xl">
          Prendre un rendez-vous
        </h2>
        <div className="mb-16 md:m-5  border-gray-500 border rounded-md  border p-5 sm:p-10 w-full max-w-screen-xl flex flex-col justify-center items-center gap-3 ">
          <Index />
        </div>
      </div>
    </div>
  )
}

export default Page
