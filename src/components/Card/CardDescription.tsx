import React from "react";

export const CardDescription = (props: { description: string; }) => (
  <p className="text-sm tracking-widest leading-6 text-gray-500 pb-8">
    {props.description}
  </p>
);
