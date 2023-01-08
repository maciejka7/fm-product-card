import React from "react";
import { useMediaQuery } from '@mantine/hooks'
import { Price } from "./Price";
import { Button } from "./Button";

type Props = {
  title: string;
  tag: string;
  imgSrc: string;
  description: string;
  oldPrice: number;
  currentPrice: number;
  buttonText: string;
  buttonActionHandler?: () => void;
};

export const Card = (props: Props) => {

    const isDesktop = useMediaQuery('(min-width: 1280px)')


  return (
    <section className="rounded-[9px] border shadow max-w-[345px] xl:max-w-[600px]">
      <CardImg imgSrc={props.imgSrc}/>
      <div className="p-7">
        <CardTag tag={props.tag} />
        <CardTitle title={props.title} />
        <CardDescription description={props.description} />
        <Price currentPrice={props.currentPrice} oldPrice={props.oldPrice} className='pb-8'/>
        <Button text={props.buttonText}/>
      </div>
    </section>
  );
};

const CardTitle = (props: { title: string }) => (
  <h2 className="font-bold text-[2rem] leading-8 pb-7"> {props.title}</h2>
);

const CardImg = (props: { imgSrc: string; alt?: string }) => (
  <img 
    className="rounded-t-[9px]"
    src={props.imgSrc} 
    alt={props.alt ? props.alt : "product image"} />
);

const CardTag = (props: {tag: string}) => {
  return (
    <p className="uppercase tracking-[.5rem] text-xs pb-4">{props.tag}</p>
  )
}

const CardDescription = (props: { description: string}) => (
    <p className="text-sm tracking-widest leading-6 text-gray-500 pb-8">
        {props.description}
    </p>
)