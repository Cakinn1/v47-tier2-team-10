import React, { useContext, useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import MenuModal from "../modals/MenuModal.jsx";
import TaskModal from "../modals/TaskModal.jsx";
import { filteredDataContext } from "../../../context/FilteredDataContext.jsx";

export default function TaskList({
  days,
  taskDescription,
  taskName,
  column,
  editTaskData,
  setEditTaskData,
  taskData,
  editTaskInput,
  setEditTaskInput,
  setEditTaskNameInput,
  editTaskNameInput,
  editTaskColumnInput,
  setEditTaskColumnInput,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  useEffect(() => {
    if (isTaskModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isTaskModalOpen]);

  return (
    <div
      onClick={() => {
        setIsTaskModalOpen(!isTaskModalOpen);
      }}
      className={`rounded-lg duration-300  p-4 mr-6 mb-6 flex dark:bg-black flex-col   cursor-pointer  relative w-[320px]  max-w-[320px] min-h-[96px] bg-gray-400`}
    >
      <h1 className="text-sm  break-words ">{taskName}</h1>{" "}
      <div className="flex flex-1 duration-300  mt-auto justify-end items-end">
        <BsThreeDots
          onClick={(e) => {
            setIsMenuOpen(!isMenuOpen);
            e.stopPropagation();
          }}
          className="hover:scale-110 hover:text-gray-600 duration-300 cursor-pointer active:scale-75 "
        />
      </div>
      {isMenuOpen && <MenuModal taskName={taskName} />}
      {isTaskModalOpen && (
        <TaskModal
          column={column}
          setEditTaskNameInput={setEditTaskNameInput}
          editTaskNameInput={editTaskNameInput}
          editTaskColumnInput={editTaskColumnInput}
          setEditTaskColumnInput={setEditTaskColumnInput}
          editTaskInput={editTaskInput}
          setEditTaskInput={setEditTaskInput}
          setIsTaskModalOpen={setIsTaskModalOpen}
          editTaskData={editTaskData}
          setEditTaskData={setEditTaskData}
          days={days}
          taskName={taskName}
          taskDescription={taskDescription}
        />
      )}
    </div>
  );
}
