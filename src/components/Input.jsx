import React, { forwardRef } from "react";
const classes =
  "w-full p-1 border-b-2 rounded-sm border-stone-300  text-stone-600 focus:outline-none focus:border-stone-600 ";
const Input = forwardRef(({ label, isTextArea, ...props }, ref) => {
  return (
    <p className="p-4 flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-900 ">
        {label}
      </label>
      {isTextArea ? (
        <textarea ref={ref} className={classes} {...props}></textarea>
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
