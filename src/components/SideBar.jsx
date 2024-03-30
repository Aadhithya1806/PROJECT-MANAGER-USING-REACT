import React from "react";

const SideBar = ({
  onStartAddProject,
  projectList,
  onSelectProject,
  selectedProjectId,
}) => {
  console.log(projectList);

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold  uppercase  md:text-xl text-stone-200">
        Your projects
      </h1>
      <div>
        <button
          onClick={onStartAddProject}
          className="rounded bg-stone-700 text-stone-100 px-4 py-2 hover:bg-stone-200 hover:text-stone-900 "
        >
          {" "}
          + Add Projects
        </button>
      </div>
      <ul className="mt-8">
        {projectList.map((project) => {
          let classes =
            "text-left px-2 py-1 my-1 rounded-sm w-full  hover:text-stone-100 hover:bg-stone-700";
          if (project.id === selectedProjectId) {
            classes += " text-stone-100 bg-stone-700";
          } else {
            classes += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={classes}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
