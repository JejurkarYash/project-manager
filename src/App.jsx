import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import Home from "./components/Home";
import ProjectView from "./components/ProjectView";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const [Tasks, setTasks] = useState([]);

  // function for handling the add task
  function handleAddTask(updatedObject) {
    setProjectState((prevState) => {
      const updatedProjects = projectState.projects.map((project) => {
        if (project.Id === prevState.selectedProjectId) {
          return {
            ...project,
            tasks: [...project.tasks, updatedObject],
          };
        }
        return project;
      });

      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }

  // function for handling the clear task
  function handleClearTask(id) {
    
    setProjectState((prevState) => {
      const updatedProjects = projectState.projects.map((project) => {
        if (project.Id === prevState.selectedProjectId) {
          return {
            ...project,
            tasks: project.tasks.filter((item) => item.id !== id),
          };
        }
        return project;
      });

      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
    console.log("clear task");
  }

  function handleSelectProject(id) {
    console.log(id);
    console.log("click");
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });

    console.log(projectState);
  }

  useEffect(() => {
    console.log(projectState);
  }, [projectState]);

  // function for handling the add project button
  function handleAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  // function for handling cancel button
  function handleCancel() {
    // setNewProject(false);
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  // function for handling the save
  function handleOnSave(updatedObject) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, updatedObject],
      };
    });
  }

  const SelectedProjecetId = projectState.projects.find(
    (project) => project.Id === projectState.selectedProjectId
  );

  let content = (
    <ProjectView
      project={SelectedProjecetId}
      onDelete={handleDelete}
      onAdd={handleAddTask}
      onClear={handleClearTask}
      projectState={projectState}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = <NewProject onCancel={handleCancel} onSave={handleOnSave} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <Home onClick={handleAddProject} />;
  }

  //  function for handling the delete button
  function handleDelete() {
    // this is will delete the element from original array
    // let index = projectState.projects.findIndex(
    //   (item) => item.Id === SelectedProjecetId.Id
    // );
    // projectState.projects.splice(index, 1);

    // Another Approch

    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.Id !== prevState.selectedProjectId
        ),
      };
    });
  }

  return (
    <main className=" h-screen flex ">
      <Sidebar
        onClick={handleAddProject}
        listItem={projectState.projects}
        OnSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />

      {content}

      <div>{/* <ProjectView /> */}</div>
    </main>
  );
}

export default App;
