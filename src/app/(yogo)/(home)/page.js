import { Button } from '@nextui-org/react';
import Image from 'next/image';
import LazyLoad from './components/slider';
import './styles/page.css';

export default function Home() {
  return (
    <div className="homeStyle">
      <LazyLoad />
      <Image
        src="/images/pages/home/1-1.png"
        alt="1-1"
        width={390}
        height={844}
        className="image_1"
      />
      <Image
        src="/images/pages/home/1-2.png"
        alt="1-2"
        width={390}
        height={844}
      />
      <Image
        src="/images/pages/home/1-3.png"
        alt="1-3"
        width={390}
        height={844}
      />
      <Image
        src="/images/pages/home/1-4.png"
        alt="1-4"
        width={390}
        height={844}
      />
      <Image
        src="/images/pages/home/1-5.png"
        alt="1-5"
        width={390}
        height={844}
      />
    </div>
  );
}
