import { useEffect, useState } from "preact/hooks";
import { asText } from "@prismicio/helpers";
import { $selectedProject } from "./projects";
import styles from "./projects.module.scss";

export function ProjectList({ projects }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    const nextProject = projects?.[selectedIdx]?.data;
    if (!nextProject) return;
    $selectedProject.set(nextProject);
  }, [projects, selectedIdx]);

  return (
    <section class={styles.projects}>
      <h2>Projects</h2>
      <ul class={styles.projectList}>
        {projects?.map(({ data: project }, idx) => (
          <li>
            <button
              class={[
                styles.project,
                selectedIdx === idx && styles.selected,
              ].join(" ")}
              onClick={() => {
                setSelectedIdx(idx);
              }}
            >
              <h3 class={styles.title}>{asText(project.name)}</h3>
              <span class={styles.roles}>{asText(project.roles)}</span>
              <span class={styles.date}>{project.date}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
