'use client'

import { Fragment, useMemo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import getScrollAnimation from '@/utils/getScrollAnimation'
import ScrollAnimationWrapper from '@/components/layout/ScrollAnimationWrapper'
import ButtonPrimary from '@/components/misc/ButtonPrimary'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const Feature = () => {
  const t = useTranslations('Home')

  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <Fragment>
      <div
        className="max-w-screen-xl mt-8 mb-6 sm:mt-14 md:mt-20 sm:mb-14 md:mb-32 px-6 sm:px-8 lg:px-16 mx-auto"
        id="feature"
      >
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 y-8 my-12">
          <ScrollAnimationWrapper className="flex w-full justify-end">
            <motion.div
              className="h-full w-full p-4"
              variants={scrollAnimation}
            >
              <Image
                src="/assets/Illustration2.png"
                alt="VPN Illustrasi"
                layout="responsive"
                quality={100}
                height={414}
                width={508}
              />
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.div
              className="flex flex-col items-center justify-center ml-auto w-full lg:w-9/12 mt-20"
              variants={scrollAnimation}
            >
              <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                We Provide Many Features You Can Use
              </h3>
              <p className="my-2 text-black-500">
                You can explore the features that we provide with fun and have
                their own functions each feature.
              </p>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <ScrollAnimationWrapper className="flex flex-col justify-center shadow rounded-xl border mx-4 sm:mx-0">
          <motion.div variants={scrollAnimation}>
            <div className="rounded-xl py-6 sm:py-10 px-6 sm:px-10 lg:px-14 w-full flex flex-col sm:flex-row justify-between items-center bg-white-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  Subscribe Now for <br /> Get Special Features!
                </h5>
                <p>Let's subscribe with us and find the fun.</p>
              </div>
              <Link href="/fr/rdv">
                <ButtonPrimary>{t('mainButton')}</ButtonPrimary>
              </Link>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </Fragment>
  )
}

export default Feature
