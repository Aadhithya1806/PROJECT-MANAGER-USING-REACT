// import "./App.css";
import { useState } from "react";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProject
  );

  const onAddTask = (text) => {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        taskId: taskId,
        projectId: prevState.selectedProject,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };
  const onDeleteTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id != id),
      };
    });
  };

  const handleCancellingAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  };
  const handleDelete = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== selectedProject.id
        ),
      };
    });
  };

  const handleSelectProject = (projectId) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: projectId,
      };
    });
  };

  const handleProjectState = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  };
  const onAddProjects = (projectData) => {
    const enteredDatas = {
      ...projectData,
      id: Math.random(),
    };
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, enteredDatas],
      };
    });
  };
  console.log(projectState);
  let content = (
    <SelectedProject
      onAddTask={onAddTask}
      onDeleteTask={onDeleteTask}
      onDelete={handleDelete}
      project={selectedProject}
      tasks={projectState.tasks}
    ></SelectedProject>
  );
  if (projectState.selectedProject === undefined) {
    // Doubt!!! If I put == its not working and if i put === its working figure it out!
    content = (
      <NoProjectSelected
        onStartAddProject={handleProjectState}
      ></NoProjectSelected>
    );
  } else if (projectState.selectedProject === null) {
    content = (
      <NewProject
        onCancel={handleCancellingAddProject}
        onAdd={onAddProjects}
      ></NewProject>
    );
  }
  // console.log(typeof projectState.selectedProject);
  // console.log(typeofcontent);
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        selectedProjectId={projectState.selectedProject}
        onSelectProject={handleSelectProject}
        projectList={projectState.projects}
        onStartAddProject={handleProjectState}
      ></SideBar>
      {content}
    </main>
  );
}

export default App;
