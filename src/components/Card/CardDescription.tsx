import React from "react";

export const CardDescription = (props: { description: string; }) => (
  <p className="text-sm tracking-wider leading-6 text-gray-500 pb-8 xl:pb-9">
    {props.description}
  </p>
);
