import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import LazyLoad from "@/components/slider/slider";
import "./styles/page.css";
import img1 from "../../../../public/images/pages/home/1-1.png";
import img2 from "../../../../public/images/pages/home/1-2.png";
import img3 from "../../../../public/images/pages/home/1-3.png";
import img4 from "../../../../public/images/pages/home/1-4.png";
import img5 from "../../../../public/images/pages/home/1-5.png";

const images = [img1, img2];
const images2 = [img4, img5];

export default function Home() {
  return (
    <div className="homeStyle">
      <LazyLoad />

      {images.map((image, idx) => (
        <Image
          key={idx}
          src={image}
          alt={`1-${idx + 1}`}
          width={390}
          height={844}
          style={idx === 0 ? { marginTop: "28px" } : {}}
        />
      ))}

      <div className="clickableAreaContainer">
        <Image src={img3} width={390} height={844} />
        <a
          href="https://shop.kt.com/unify/yogo.do"
          className="clickableArea1"
        ></a>

        <a
          href="https://shop.kt.com/unify/yogoEvent.do"
          className="clickableArea2"
        ></a>

        <a
          href="https://shop.kt.com/direct/directUsim.do"
          className="clickableArea3"
        ></a>

        <a
          href="https://shop.kt.com/display/olhsPlan.do?plnDispNo=2388"
          className="clickableArea4"
        ></a>

        <a
          href="https://shop.kt.com/direct/directChangeRate.do"
          className="clickableArea5"
        ></a>
      </div>

      {images2.map((image, idx) => (
        <Image
          key={idx}
          src={image}
          alt={`1-${idx + 1}`}
          width={390}
          height={844}
          style={idx === 0 ? { marginTop: "28px" } : {}}
        />
      ))}
    </div>
  );
}
