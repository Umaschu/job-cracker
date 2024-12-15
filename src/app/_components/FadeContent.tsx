import { CSSProperties, ReactNode } from "react";
import clsx from "clsx";
import styles from "./fade.module.css";

interface FadeContentProps {
  index: number;
  isFadingOut: boolean;
  delay?: number;
  children: ReactNode;
}

export function FadeContent({ index, isFadingOut, delay = 0, children }: FadeContentProps) {
  const fadeClass = isFadingOut ? styles.out : styles.in;

  const delayStyle: CSSProperties = {
    animationDelay: `${index * 0.5 + (isFadingOut ? 0 : delay)}s`,
  };

  return (
    <div className={clsx(styles.content, fadeClass)} style={delayStyle}>
      {children}
    </div>
  );
}

export default FadeContent;
