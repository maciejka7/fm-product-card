import { useState } from 'react'
import { MainPage, ComponentsPage } from './pages'

const { pathname } = window.location
const COMPONENTS_PATHNAME = '/components'

function App() {
  


  return (
    <div className='text-darkCyan h-screen w-full'>
      <MainPage />
    </div>
  )
}

export default App
