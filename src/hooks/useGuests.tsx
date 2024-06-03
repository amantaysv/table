import { useEffect, useState } from 'react'
import { makeArray } from '../helpers/makeArray'
import { makeObj } from '../helpers/makeObj'

export type Guests = {
  [key: string]: string
}

export const useGuests = (id: number) => {
  const defaultGuestsFromLS = localStorage.getItem('table')
  const guestsIds = makeArray(12)

  const getDefaultGuests = (): Guests => {
    if (defaultGuestsFromLS) return JSON.parse(defaultGuestsFromLS)?.[id]

    return makeObj<string>(guestsIds, '')
  }

  const [guests, setGuests] = useState(getDefaultGuests())

  useEffect(() => {
    const guestsFromLS =
      defaultGuestsFromLS || JSON.stringify(makeObj(guestsIds, getDefaultGuests()))

    localStorage.setItem('table', JSON.stringify({ ...JSON.parse(guestsFromLS), [id]: guests }))
  }, [JSON.stringify(guests)])

  return { guests, setGuests }
}
