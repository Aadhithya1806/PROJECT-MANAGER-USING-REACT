import React from "react";

const Button = ({ children }) => {
  return (
    <button className="rounded bg-stone-700 text-stone-400 px-4 py-2 hover:bg-stone-200 hover:text-stone-900 ">
      {" "}
      {children}
    </button>
  );
};

export default Button;
