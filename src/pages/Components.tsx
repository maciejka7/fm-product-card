import React from 'react'
import Button from '../components/Button'

type Props = {}

const Components = (props: Props) => {
  return (
    <main className='flex flex-col gap-8 p-8'>
        <h1 className='text-2xl'>Components</h1>
        <section>
            <h3 className='mb-2 text-xl'>Button Component</h3>
            <Button handleAction={() => console.log('button action')} text='Add to cart'/>
        </section>
    </main>
  )
}

export default Components