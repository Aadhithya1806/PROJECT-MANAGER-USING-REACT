import React from "react";
import { useState, useRef } from "react";
import Modal from "./Modal";

const NewTask = ({ onAddTask }) => {
  const modal = useRef();
  const [enteredTask, setEnteredTask] = useState("");
  // const [isEnteredTaskEmpty, setIsEnteredTask] = useState(false);
  const handleChange = (event) => {
    setEnteredTask(() => {
      return event.target.value;
    });
  };
  const onHandleAddTask = () => {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    console.log("first");
    onAddTask(enteredTask);
    setEnteredTask("");
  };
  let modalContent = (
    <Modal ref={modal} btnContent="Okay">
      <h2 className=" text-xl font-bold text-stone-600 mt-4">Invalid Task</h2>
      <p className="text-stone-500 mb-4">
        Kindly add a valid task and proceed.
      </p>
    </Modal>
  );
  return (
    <>
      {modalContent}

      <div className="flex items-center gap-4">
        <input
          onChange={handleChange}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          value={enteredTask}
        />
        <button
          onClick={onHandleAddTask}
          className="rounded bg-stone-700 text-stone-200 px-4 py-2  hover:bg-stone-900  hover:text-stone-200 "
        >
          Add task
        </button>
      </div>
    </>
  );
};

export default NewTask;
