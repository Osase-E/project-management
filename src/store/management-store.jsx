import { createContext } from "react";

export const ManagementContext = createContext({
  onCreate: () => {},
  onDelete: () => {},
  projects: [],
});

function projectDispatchHandler(state, action) {
  if (action.type === "CREATE_PROJECT") {
  }

  if (action.type === "DEL_PROJECT") {
  }

  if (action.type === "CREATE_TASK") {
  }

  if (action.type === "DEL_TASK") {
  }
}

export function ProjectProvider({ children }) {
  return (
    <ProjectContext.Provider value={{ projects: [] }}>
      {...children}
    </ProjectContext.Provider>
  );
}
