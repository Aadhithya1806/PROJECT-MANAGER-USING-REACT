import React from "react";
import Button from "./Button";
import image from "../assets/logo.png";
const NoProjectSelected = ({ onStartAddProject, ...props }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img className="w-16 h-16 object-contain mx-auto" src={image} alt="" />
      <h2 className="text-xl font-bold text-stone-600 mt-4">
        No Project Selected{" "}
      </h2>
      <p className="text-stone-500 mb-4">
        Select a project or get started with a new one{" "}
      </p>
      <p>
        <button
          onClick={onStartAddProject}
          className="rounded bg-stone-700 text-stone-200 px-4 py-2  hover:bg-stone-900  hover:text-stone-200 "
        >
          {" "}
          Create New Project
        </button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
