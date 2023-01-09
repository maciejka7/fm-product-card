import React from "react";
import { Price } from "../Price";
import { Button } from "../Button";
import { CardTitle } from "./CardTitle";
import { CardImg, CardImgProps } from "./CardImg";
import { CardTag } from "./CardTag";
import { CardDescription } from "./CardDescription";

type CardProps = {
  title: string;
  tag: string;
  imageProps: CardImgProps;
  description: string;
  oldPrice: number;
  currentPrice: number;
  buttonText: string;
  buttonActionHandler?: () => void;
};

export const Card = (props: CardProps) => {
  return (
    <section role='main' className="rounded-[9px] border shadow-sm max-w-[345px] xl:max-w-[600px] flex flex-col xl:flex-row bg-white">
      <CardImg {...props.imageProps} />
      <div className="p-7 xl:px-8 xl:py-9">
        <CardTag tag={props.tag} />
        <CardTitle title={props.title} />
        <CardDescription description={props.description} />
        <Price
          currentPrice={props.currentPrice}
          oldPrice={props.oldPrice}
          className="pb-7 xl:pb-8"
        />
        <Button text={props.buttonText} />
      </div>
    </section>
  );
};


