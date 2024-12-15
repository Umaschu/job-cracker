"use client";

import { useState } from "react";
import { BackgroundAnimation } from "./_components/BackgroundAnimation";
import FadeContent from "./_components/FadeContent";
import styles from "./_components/headers/common.module.css";

export default function Home() {
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleClick = () => {
    setIsFadingOut(true);
  };

  return (
    <>
      <BackgroundAnimation />
      <FadeContent index={0} isFadingOut={isFadingOut} delay={3}>
        <h1 className={styles.logo}>schuterview</h1>
        <h1 className={styles.headeer}>모 의 개 발 자 인 터 뷰</h1>
      </FadeContent>
      <FadeContent index={1} isFadingOut={isFadingOut} delay={3}>
        <button className={styles.submit} onClick={handleClick}>
          시작하기
        </button>
      </FadeContent>
    </>
  );
}
