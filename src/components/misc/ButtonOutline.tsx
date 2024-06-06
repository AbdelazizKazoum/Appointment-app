import React from 'react'

const ButtonOutline = ({ children, addClass, ...props }: any) => {
  return (
    <button
      {...props}
      className={`font-medium tracking-wide text-sm py-2 px-3 sm:px-5 border border-primary-500 text-primary-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-primary-500 hover:text-white-500 active:scale-95 transition-all duration-300 ${addClass}`}
    >
      {children}
    </button>
  )
}

export default ButtonOutline
