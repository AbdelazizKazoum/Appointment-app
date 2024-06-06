'use client'
import React, { forwardRef, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import FormField from './FormField'
import { FormData } from '@/types/formTypes'
import useCallApi from '@/hooks/useCallApi'
import axios, { getBrigads, getComp, getRegions } from '@/lib/api'
import { trace } from 'console'
import { Button } from '../ui/button'

//--
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  cin: z.string().min(1, 'Cin is required'),
  nom: z.string().min(1, 'Nom is required'),
  prenom: z.string().min(1, 'Prenom is required'),
  regions: z.string().min(1, 'Regions is required'),
  brigads: z.string().min(1, 'Brigads is required'),
  compagnies: z.string().min(1, 'Compagnies is required'),
})

type schemaType = z.infer<typeof schema>

const Form = forwardRef<{ handleNext: () => void }, HTMLButtonElement>(
  ({ handleNext }, ref) => {
    const {
      register,
      setValue,
      handleSubmit,
      formState: { errors, isValid },
      setError,
    } = useForm<FormData>({ resolver: zodResolver(schema) })

    // const regs = useCallApi(getRegions());
    // const comps = useCallApi(getComp("smartphones"));
    const [regions, setRegs] = useState([])
    const [compagnies, setComps] = useState([])
    const [brigads, setBrigads] = useState([])
    const [loading, setLoading] = useState(false)

    //----

    const [getByReg, setGetByReg] = useState(null)
    const [getByCom, setGetByCom] = useState(null)

    useEffect(() => {
      ;(async () => {
        const data = await getRegions()
        setRegs(data)
      })()
      setLoading(true)
    }, [])

    useEffect(() => {
      if (getByReg) {
        setLoading(false)
        ;(async () => {
          const data = await getComp(getByReg)
          setComps(data.map(item => item.nom))
        })()

        setLoading(true)
      }

      return () => {}
    }, [getByReg])

    useEffect(() => {
      if (getByCom) {
        ;(async () => {
          const data = await getBrigads(getByCom)
          setBrigads(data.map(item => item.nom))
        })()
      }
    }, [getByCom])

    const onSubmit = async (data: FormData) => {
      if (isValid) {
        console.log('SUCCESS', data)
        handleNext()
      }
    }

    console.log(errors)

    return (
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        {loading === true ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="col-span-1 md:col-span-2 grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2   gap-5">
              <FormField
                type="select"
                placeholder="Region"
                name="regions"
                register={register}
                error={errors.regions}
                data={regions}
                method={setGetByReg}
                setValue={setValue}
              />
              <FormField
                type="select"
                placeholder="Compagnie"
                name="compagnies"
                register={register}
                error={errors.compagnies}
                data={compagnies}
                method={setGetByCom}
                setValue={setValue}
              />
              <FormField
                type="select"
                placeholder="Brigad"
                name="brigads"
                register={register}
                data={brigads}
                error={errors.brigads}
                method={() => {}}
                setValue={setValue}
              />
            </div>

            <FormField
              type="text"
              placeholder="Cin"
              name="cin"
              register={register}
              data={[]}
              error={errors.cin}
              method={() => {}}
              setValue={setValue}
            />
            <FormField
              type="text"
              placeholder="Nom"
              name="nom"
              register={register}
              error={errors.nom}
              setValue={setValue}
            />
            <FormField
              type="text"
              placeholder="Prénom"
              name="prenom"
              register={register}
              error={errors.prenom}
              setValue={setValue}
            />
          </div>
        ) : (
          'loading...'
        )}
        <button className="hidden" ref={ref} type="submit">
          Submit
        </button>
      </form>
    )
  },
)

export default Form
