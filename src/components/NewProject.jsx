import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel, ...props }) => {
  const modal = useRef();
  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();
  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDesc = desc.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredDesc.trim() === "" ||
      enteredTitle.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      desc: enteredDesc,
      dueDate: enteredDueDate,
    });
    console.log("Heyyy");
  };

  return (
    <>
      <Modal ref={modal} btnContent="Okay">
        <h2 className=" text-xl font-bold text-stone-600 mt-4">
          Invalid Input
        </h2>
        <p className="text-stone-500 mb-4">
          Kindly check the values entered and submit it again.
        </p>
      </Modal>
      <div className="w-[36rem] mt-16 rounded shadow-md">
        <div>
          <Input ref={title} label="title"></Input>
          <Input ref={desc} label="Description" isTextArea={true}></Input>
          <Input type="date" ref={dueDate} label="Due-date"></Input>
        </div>
        <menu className="flex items-center justify-end gap-4 my-4 px-4">
          <li>
            {/* I Should change the button hovering effect */}
            <button
              onClick={onCancel}
              className="px-6 py-2 text-stone-900 rounded hover:bg-stone-800 hover:text-stone-200"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-stone-700 px-6 py-2 text-stone-200 rounded hover:bg-stone-900"
            >
              Save
            </button>
          </li>
        </menu>
      </div>
    </>
  );
};

export default NewProject;
