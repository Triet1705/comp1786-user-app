import { mockProjects } from "../data/mockProjects";

export async function fetchProjects() {
  // Temporary local data source for Sprint 0. Replace with API call in Sprint 1.
  return Promise.resolve(mockProjects);
}

export function searchProjects(projects, keyword) {
  const term = keyword.trim().toLowerCase();
  if (!term) {
    return projects;
  }

  return projects.filter((project) => {
    return (
      project.projectName.toLowerCase().includes(term) ||
      project.projectDescription.toLowerCase().includes(term) ||
      project.projectCode.toLowerCase().includes(term)
    );
  });
}
