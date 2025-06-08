import { useStore } from "@nanostores/preact";
import { $selectedProjectIdx } from "./projects";
import "./viewer.module.scss";

export function Viewer({ children, idx }) {
  const selectedProjectIdx = useStore($selectedProjectIdx);
  return (
    <section data-selected={selectedProjectIdx === idx}>{children}</section>
  );
}
