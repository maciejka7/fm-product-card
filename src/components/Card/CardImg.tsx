import React from "react";
import { useMediaQuery } from "@mantine/hooks";

export type CardImgProps = {
  imgSrc: { mobile: string; desktop: string };
  alt?: string;
};
export const CardImg = (props: CardImgProps) => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  return (
    <img
      className="rounded-t-[9px] xl:rounded-l-[9px] xl:rounded-r-none object-center xl:max-w-[300px]"
      src={isDesktop ? props.imgSrc.desktop : props.imgSrc.mobile}
      alt={props.alt ? props.alt : "product image"}
      loading="lazy" />
  );
};
