import { useRouteError } from "react-router-dom";
import styles from "./Error404.module.css";

export const Error404 = () => {
  const error = useRouteError();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Error {error.status}</h2>
      <p className={styles.description}>{error.data}</p>
    </div>
  );
};
