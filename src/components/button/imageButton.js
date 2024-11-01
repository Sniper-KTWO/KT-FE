import Image from "next/image";
import styles from "./imageButton.module.css";

export default function ImageButton({ src, alt, onClick }) {
  return (
    <div className={styles.iconContainer} onClick={onClick}>
      <Image
        src="/images/send-icon.png"
        alt="메시지 전송 버튼 아이콘"
        width={32}
        height={33}
        className={styles.sendIcon}
      />
    </div>
  );
}
