import { FormFieldProps } from '@/types/formTypes'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { cn } from '@/lib/utils'

const FormField = ({
  register,
  name,
  placeholder,
  type,
  error,
  valueAsNumber,
  data,
  method,
  setValue,
  ...props
}: FormFieldProps) => {
  if (type === 'select') {
    return (
      <div>
        <Label className="ml-3 flex mb-3" htmlFor="email">
          {placeholder}
        </Label>
        <Select
          {...register(name, { valueAsNumber })}
          onValueChange={value => {
            method(value)
            setValue(name, value)
          }}
        >
          <SelectTrigger
            className={cn(
              'border outline-none  ring-0',
              error && 'border-red-400',
            )}
          >
            <SelectValue className=" " placeholder="Selectionner..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className=" text-gray-600 font-normal">
                {name}
              </SelectLabel>
              {data &&
                data.map((item, id) => (
                  <SelectItem key={id} value={item}>
                    {item}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {error && (
          <span className="text-[12px] text-red-600   ">{error.message}</span>
        )}
      </div>
    )
  }

  return (
    <div>
      <Label className="ml-1 flex mb-3" htmlFor="email">
        {placeholder}
      </Label>
      <Input
        className={`${error && 'border-red-500'}`}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        // onChange={e => {
        //   setValue(name, e.target.value)
        // }}
      />
      {error && (
        <span className="ml-1 text-[12px] text-red-600   ">
          {error.message}
        </span>
      )}
    </div>
  )
}

export default FormField
