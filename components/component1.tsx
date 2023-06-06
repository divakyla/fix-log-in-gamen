import type { NextPage } from "next";
import styles from "./component1.module.css";
const Component1: NextPage = () => {
  return (
    <div className={styles.div}>
      <p className={styles.p}>ログイン</p>
    </div>
  );
};

export default Component1;
