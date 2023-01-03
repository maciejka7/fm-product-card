import { useState } from 'react'
import Components from './pages/Components'
import MainPage from './pages/MainPage'

const { pathname } = window.location
const COMPONENTS_PATHNAME = '/components'

function App() {
  


  return (
    <div className='text-darkCyan'>
      {pathname === COMPONENTS_PATHNAME ? <Components /> : <MainPage />} 

      <div className='absolute bottom-5 right-5'>
            <a className='bg-darkCyan w-5 h-5 block' href={pathname === COMPONENTS_PATHNAME ? '/' : COMPONENTS_PATHNAME  }></a> 
      </div>
    </div>
  )
}

export default App
