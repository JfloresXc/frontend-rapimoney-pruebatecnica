import React from 'react';
import { useLocation } from 'wouter';

export default function Button({ text, icon = '', link = '', handleClick }) {
  const setLocation = useLocation()[1];

  return (
    <button
      className="
  bg-primary-700 
  text-white text-center
  rounded-md
  hover:bg-primary-600
    px-6 py-2
    flex items-center justify-center gap-x-3
  "
      onClick={
        link
          ? () => {
              setLocation(link);
            }
          : handleClick
      }
    >
      {text}
      {icon}
    </button>
  );
}
