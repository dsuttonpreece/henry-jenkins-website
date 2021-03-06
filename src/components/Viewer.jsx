import { asImageSrc, asText } from "@prismicio/helpers";

import styles from "./viewer.module.scss";

export function Viewer({ name, link, artwork }) {
  return (
    <section className={styles.viewer}>
      <h2>{asText(name)}</h2>
      <figure>
        <img
          src={asImageSrc(artwork)}
          alt={`Cover artwork for: ${asText(name)}`}
        />
      </figure>
      {link?.url && (
        <a class={styles.link} href={link.url} target={link.target}>
          Listen on Bandcamp
          <span class={styles.icon}>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <use href="#icon-external-link"></use>
            </svg>
          </span>
        </a>
      )}
    </section>
  );
}
