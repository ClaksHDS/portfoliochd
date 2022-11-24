import { projects } from "../utils/data";

// return all our projects
export function getProjects() {
  return projects;
}

export function getProject(id) {
  return projects.find((project) => project.id === id);
}
