import styles from "./animation.module.css";

export function BackgroundAnimation() {
  return (
    <>
      <div className={styles.background} />
      <div className={styles.waterdrop} />
      <div className={styles["background-fill"]} />
    </>
  );
}
