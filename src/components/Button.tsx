import React from 'react'
import cartIcon from '../../public/icon-cart.svg'

type Props = {
    text: string,
    handleAction: () => void,
}

export const Button = (props: Props) => {
  return (
    <button
        className='rounded-[7px] text-white bg-primary hover:bg-primaryDark font-bold p-3 text-center w-full flex justify-center items-center gap-2 transition-all max-w-[300px]'
        onClick={props.handleAction}
    >
        <img src={cartIcon} alt="cart icon" /> {props.text}
    </button>
  )
}
