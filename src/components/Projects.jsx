import { useEffect, useState } from "preact/hooks";
import { createPortal } from "preact/compat";
import { asText } from "@prismicio/helpers";

import { Viewer } from "./Viewer";

import styles from "./projects.module.scss";

export function Projects({ projects }) {
  const isSSR = import.meta.env.SSR;

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  return (
    <section class={styles.projects}>
      <h2>Projects</h2>
      <ul class={styles.projectList}>
        {projects?.map(({ data: project }, index) => (
          <li>
            <button
              class={[
                styles.project,
                selectedProjectIndex === index && styles.selected,
              ].join(" ")}
              onClick={() => {
                setSelectedProjectIndex(index);
              }}
            >
              <h3 class={styles.title}>{asText(project.name)}</h3>
              <span class={styles.roles}>{asText(project.roles)}</span>
              <span class={styles.date}>{project.date}</span>
            </button>
          </li>
        ))}
      </ul>
      {!isSSR &&
        createPortal(
          <Viewer {...projects[selectedProjectIndex].data} />,
          document.getElementById("viewer")
        )}
    </section>
  );
}
