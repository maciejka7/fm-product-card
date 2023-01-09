import { useState } from 'react'
import { MainPage, ComponentsPage } from './pages'

const { pathname } = window.location
const COMPONENTS_PATHNAME = '/components'

function App() {
  


  return (
    <div className='text-darkCyan h-screen w-full'>
      {pathname === COMPONENTS_PATHNAME ? <ComponentsPage /> : <MainPage />} 

      <div className='absolute bottom-5 right-5'>
            <a className='bg-primary w-5 h-5 block' href={pathname === COMPONENTS_PATHNAME ? '/' : COMPONENTS_PATHNAME  }></a> 
      </div>
    </div>
  )
}

export default App
