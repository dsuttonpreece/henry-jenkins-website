import { useState } from "preact/hooks";
import { createPortal } from "preact/compat";
import { asText } from "@prismicio/helpers";

import { Viewer } from "./Viewer";

import styles from "./projects.module.scss";

export function Projects({ projects }) {
  const isSSR = import.meta.env.SSR;

  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <article class={styles.projects}>
      <h2>Projects</h2>
      <ul class={styles.projectList}>
        {projects?.map(({ data: project }, index) => (
          <li>
            <button
              class={styles.project}
              onClick={() => {
                setSelectedProject(index);
              }}
            >
              <h3 class={styles.title}>{asText(project.name)}</h3>
              {project.date}
            </button>
          </li>
        ))}
      </ul>
      {!isSSR &&
        createPortal(
          <Viewer {...projects[selectedProject].data} />,
          document.getElementById("viewer-root")
        )}
    </article>
  );
}
