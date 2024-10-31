import { Spinner } from "@nextui-org/react";
import styles from "./styles/loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <Spinner
        label="데이터를 불러오는 중입니다..."
        color="default"
        labelColor="foreground"
      />
    </div>
  );
}
