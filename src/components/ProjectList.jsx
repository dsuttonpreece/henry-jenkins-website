import { asText } from "@prismicio/helpers";
import { useStore } from "@nanostores/preact";
import { $selectedProjectIdx } from "./projects";
import styles from "./projects.module.scss";

// TODO refactor so that all dom is in astro and only interaction logic is in this component
export function ProjectList({ projects }) {
  const selectedProjectIdx = useStore($selectedProjectIdx);
  return (
    <section class={styles.projects}>
      <h2>Projects</h2>
      <ul class={styles.projectList}>
        {projects?.map(({ data: project }, idx) => (
          <li>
            <button
              class={[
                styles.project,
                selectedProjectIdx === idx && styles.selected,
              ].join(" ")}
              onClick={() => {
                $selectedProjectIdx.set(idx);
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
