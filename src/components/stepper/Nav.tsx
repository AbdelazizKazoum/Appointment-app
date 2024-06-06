import React from 'react'

const Nav = ({ active }: { active: number }) => {
  function renderSteps(step: number, label: string) {
    if (step === active) {
      return (
        <li className="flex md:w-full items-center text-primary dark:text-primary-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex  text-primary-500 items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <svg
              className="w-3.5 h-3.5 sm:w-8 sm:h-8 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            {label} <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
      )
    } else {
      return (
        <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex text-black-500 items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span className="me-2 bg-gray-300   w-3.5 h-3.5 sm:w-8 sm:h-8 rounded-full flex justify-center items-center ">
              {step}
            </span>
            {label} <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
      )
    }
  }

  return (
    <ol className=" flex items-center w-full md:max-w-4xl text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base ">
      {renderSteps(1, 'Personal')}
      {renderSteps(2, 'Account')}
      {renderSteps(3, 'Confirmation')}
    </ol>
  )
}

export default Nav
