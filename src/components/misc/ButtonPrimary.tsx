const ButtonPrimary = ({ children, addClass, ...props }: any) => {
  return (
    <button
      {...props}
      className={
        'py-3 lg:py-4 px-12 lg:px-12 tracking-wide uppercase text-white-500 font-semibold rounded-lg bg-primary-500 hover:bg-primary-500/95 active:scale-95 transition-all duration-300 outline-none' +
        addClass
      }
    >
      {children}
    </button>
  )
}

export default ButtonPrimary
