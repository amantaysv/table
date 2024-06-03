import { NAMES } from '../names'

interface AutosuggestProps {
  value: string
  onClick: (value: string) => void
  focused: boolean
  setFocusId: (value: null) => void
}

export const Autosuggest = ({ value, onClick, focused, setFocusId }: AutosuggestProps) => {
  const filteredNames = NAMES.filter((name) => name !== value).filter((name) =>
    name.includes(value)
  )

  const chooseHandle = (name: string) => {
    onClick(name)
    setFocusId(null)
  }

  if (!value) return null
  if (!focused) return null
  if (!filteredNames.length) return null

  return (
    <div className='absolute bg-white z-50 w-full border border-red-400 max-h-32 overflow-y-scroll'>
      {filteredNames.map((name) => (
        <p
          key={name}
          className='capitalize cursor-pointer hover:underline'
          onClick={() => chooseHandle(name)}
        >
          {name}
        </p>
      ))}
    </div>
  )
}
