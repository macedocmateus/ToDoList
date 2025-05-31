import { cva, type VariantProps } from 'class-variance-authority'
import type React from 'react'
import CheckIcon from '../assets/Check-Regular.svg?react'
import Icon from './icon'

export const inputCheckboxWrapperVariants = cva(
  `
    inline-flex items-center justify-center relative
    group
    `
)

export const inputCheckboxVariants = cva(
  `
    appearance-none peer items-center justify-center border-2 border-solid transition overflow-hidden border-green-base hover:border-green-dark
     hover:bg-green-dark/20 checked:border-green-base checked:bg-green-base
      group-hover:checked:border-green-dark group-hover:checked:bg-green-dark cursor-pointer
     
    `,
  {
    variants: {
      size: {
        md: 'w-5 h-5 rounded-sm',
      },
      disabled: {
        true: 'pointer-events-none',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  }
)

export const inputCheckboxIconVariants = cva(
  `
    absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block
     fill-white
    `,
  {
    variants: {
      size: {
        md: 'w-3 h-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

interface InputCheckboxProps
  extends VariantProps<typeof inputCheckboxVariants>,
    Omit<React.ComponentProps<'input'>, 'size' | 'disabled'> {}

export default function InputCheckbox({
  size,
  disabled,
  className,
  ...props
}: InputCheckboxProps) {
  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        {...props}
        className={inputCheckboxVariants({ size, disabled })}
      />
      <Icon className={inputCheckboxIconVariants({ size })} svg={CheckIcon} />
    </label>
  )
}
