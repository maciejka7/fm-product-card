import React from "react";

export const CardTitle = (props: { title: string; }) => (
  <h2 className="font-bold text-[2rem] leading-8 pb-7 xl:pb-8"> {props.title}</h2>
);
