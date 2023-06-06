import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./rectangle-component.module.css";
const RectangleComponent: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return <div className={styles.logInChild} onClick={onRectangleClick} />;
};

export default RectangleComponent;
