import { Table } from './components/Table'

function App() {
  const tables = new Array(6).fill(null)
  return (
    <div className='flex flex-col p-2 gap-2 min-h-screen'>
      <div className='hidden sm:block mx-auto border border-black py-2 px-20 min-w-[25%] text-center'>
        Экран
      </div>

      <div className='flex-1 flex-col-reverse sm:flex-row flex justify-between items-start'>
        <div className='flex flex-wrap'>
          {tables.map((_, index) => (
            <div className='p-1 w-full sm:w-1/2' key={index + 7}>
              <Table id={index + 7} />
            </div>
          ))}
        </div>

        <div className='flex flex-wrap'>
          {tables.map((_, index) => (
            <div className='p-1 w-full sm:w-1/2' key={index + 1}>
              <Table id={index + 1} />
            </div>
          ))}
        </div>
      </div>

      <div className='hidden sm:block flex justify-center gap-x-36 items-end'>
        <div className='border border-black py-14 px-2 text-center'>вход</div>
        <div className='border border-black py-2 px-20 min-w-[20%] text-center'>
          стол молодоженов
        </div>
        <div className='border border-black py-14 px-2 text-center'>вход</div>
      </div>
    </div>
  )
}

export default App
