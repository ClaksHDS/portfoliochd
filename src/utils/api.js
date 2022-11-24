import { projects } from "../utils/data";

// return all our projects
export function getProjects() {
  return projects;
}

export function getProject(projectId) {
  return projects.find(({ id }) => id === projectId);
}
