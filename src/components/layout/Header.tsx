'use client'

import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ButtonOutline from '../misc/ButtonOutline'
import Link from 'next/link'

interface HeaderProps {
  locale: string
}

const Header = (props: HeaderProps) => {
  const { locale } = props

  const router = useRouter()

  const [scrollActive, setScrollActive] = useState(false)
  const [activeLanguage, setSelectedLanguage] = useState(locale)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20)
    })
  }, [])

  const handleLanguageClick = () => {
    const language = activeLanguage === 'fr' ? 'ar' : 'fr'
    setSelectedLanguage(language)
    router.push(`/${language}`)
  }

  return (
    <Fragment>
      <header
        className={
          'fixed top-0 w-full z-30 bg-white-500 transition-all ' +
          (scrollActive ? ' shadow-md pt-0' : 'pt-2 md:pt-3')
        }
      >
        <nav className="max-w-screen-xl mx-auto grid grid-flow-col px-2 md:px-4 xl:px-0 py-3 sm:py-4">
          <Link href="/">
            <button className="scale-90 md:scale-100 col-start-1 col-end-2 flex items-center justify-start gap-2">
              <img src="/assets/gr.png" className="h-10 w-auto" alt="gr img" />
              <div className="flex flex-col items-center mt-1 leading-none font-semibold text-slate-700">
                <span className="tracking-widest mb-[2px]">GENDARMERIE</span>
                <span className="tracking-[.7rem] pl-2.5">ROYALE</span>
              </div>
            </button>
          </Link>
          <div className="scale-90 md:scale-100 col-start-10 col-end-12 font-medium flex justify-end items-center">
            <ButtonOutline onClick={handleLanguageClick}>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 stroke-current"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path
                      strokeLinecap="round"
                      d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      d="M2.5 9L21.5 9M2.5 15L21.5 15"
                    ></path>
                  </g>
                </svg>
                <span>{activeLanguage === 'fr' ? 'ARABIC' : 'FRANCAIS'}</span>
              </div>
            </ButtonOutline>
          </div>
        </nav>
      </header>
    </Fragment>
  )
}

export default Header
