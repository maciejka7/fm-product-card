import React from 'react'

type Props = {
    oldPrice: number,
    currentPrice: number,

}

export const Price = (props: Props & Pick<React.HTMLAttributes<HTMLParagraphElement>, "className">) => {
  return (
    <p className={`flex items-center gap-4 ${props.className}`}>
        <span className='text-3xl font-bold text-primary block font-fraunces'>
            ${props.currentPrice}
        </span>
        <span className='block line-through text-gray-500'>
            ${props.oldPrice}
        </span>
    </p>
  )
}
