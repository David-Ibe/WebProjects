'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface CounterProps {
  label: string
  min?: number
  max?: number
  defaultValue?: number
  onChange?: (value: number) => void
}

export function Counter({ label, min = 0, max = 10, defaultValue = 0, onChange }: CounterProps) {
  const [value, setValue] = useState(defaultValue)

  const increment = () => {
    if (value < max) {
      const newValue = value + 1
      setValue(newValue)
      onChange?.(newValue)
    }
  }

  const decrement = () => {
    if (value > min) {
      const newValue = value - 1
      setValue(newValue)
      onChange?.(newValue)
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium">{label}</span>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={decrement}
          disabled={value <= min}
          className="h-8 w-8"
        >
          -
        </Button>
        <span className="w-8 text-center">{value}</span>
        <Button
          variant="outline"
          size="sm"
          onClick={increment}
          disabled={value >= max}
          className="h-8 w-8"
        >
          +
        </Button>
      </div>
    </div>
  )
}

