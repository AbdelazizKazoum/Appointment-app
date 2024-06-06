const Footer = () => {
  return (
    <footer className="py-4 mt-6 md:mt-10 border-t">
      <div className="flex items-center justify-center max-w-screen-xl w-full mx-auto px-6 sm:px-4">
        {/* <button className="col-start-1 col-end-2 flex items-center justify-start gap-2 scale-90">
          <img src="/assets/gr.png" className="h-10 w-auto" alt="gr img" />
          <div className="flex flex-col items-center mt-1 leading-none font-semibold text-slate-700">
            <span className="tracking-widest mb-[2px]">GENDARMERIE</span>
            <span className="tracking-[.7rem] pl-2.5">ROYALE</span>
          </div>
        </button> */}
        <div>
          <p className="text-gray-600 font-medium">
            Gendarmerie Royale | Copyright © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
