'use client';
import styles from './styles/page.module.css';
import { Input, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import SendButton from '../../../components/send';

export default function chatBot() {
  return (
    <div className={styles.page}>
      <div className={styles.inputContainer}>
        <Input
          className={styles.inputField}
          clearable
          contentRightStyling={false}
          placeholder="요금제에 관해 궁금한 점을 물어보세요!"
          contentRight={<SendButton />}
        />
        {/* <Button isIconOnly variant="light" size="sm">
          <Icon icon="bi:send-fill" width={30} height={30} />
        </Button> */}
      </div>
    </div>
  );
}
