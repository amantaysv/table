import { useEffect, useState } from 'react'

export const useTableNumber = (id: number) => {
  const tableNumberFromLs = localStorage.getItem(`tableNumber${id}`)
  const [number, setNumber] = useState(tableNumberFromLs || id)

  useEffect(() => {
    localStorage.setItem(`tableNumber${id}`, number.toString())
  }, [number])

  return { number, setNumber }
}
