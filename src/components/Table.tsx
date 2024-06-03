import { useState } from 'react'
import { makeArray } from '../helpers/makeArray'
import { useGuests } from '../hooks/useGuests'
import { useTableNumber } from '../useTableNumber'
import { Autosuggest } from './Autosuggest'

interface TableProps {
  id: number
}

export const Table = ({ id }: TableProps) => {
  const [focusId, setFocusId] = useState<number | null>(null)

  const { number, setNumber } = useTableNumber(id)
  const { guests, setGuests } = useGuests(id)

  const guestsIds = makeArray(12)

  return (
    <div className='p-2 w-full border-solid border-black border'>
      <label className='relative flex justify-center'>
        Стол№
        {number}
        <input
          className='w-full absolute bg-transparent opacity-0'
          type='text'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <div className='flex flex-col'>
        {guestsIds.map((id) => (
          <div className='relative' key={id}>
            <label>
              {id}){' '}
              <input
                className='capitalize w-[calc(100%-20px)] absolute ml-1 bg-transparent focus:outline-none focus:border-b focus:border-black'
                type='text'
                value={guests?.[id]}
                onChange={(e) => setGuests({ ...guests, [id]: e.target.value })}
                onFocus={() => setFocusId(id)}
              />
            </label>
            <Autosuggest
              value={guests?.[id]}
              onClick={(value) => setGuests({ ...guests, [id]: value })}
              focused={focusId === id}
              setFocusId={setFocusId}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
