import React from "react";

export const CardTag = (props: { tag: string; }) => {
  return <p className="uppercase tracking-[.5rem] text-xs pb-4 xl:pb-6 text-gray-700">{props.tag}</p>;
};
