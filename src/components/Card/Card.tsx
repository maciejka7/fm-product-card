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
    <section className="rounded-[9px] border shadow max-w-[345px] xl:max-w-[600px]">
      <CardImg {...props.imageProps} />
      <div className="p-7">
        <CardTag tag={props.tag} />
        <CardTitle title={props.title} />
        <CardDescription description={props.description} />
        <Price
          currentPrice={props.currentPrice}
          oldPrice={props.oldPrice}
          className="pb-8"
        />
        <Button text={props.buttonText} />
      </div>
    </section>
  );
};


