import { Button } from "@nextui-org/react";
import Image from "next/image";
import LazyLoad from "@/components/slider/slider";
import "./styles/page.css";
import img1 from "../../../../public/images/pages/home/1-1.png";
import img2 from "../../../../public/images/pages/home/1-2.png";
import img3 from "../../../../public/images/pages/home/1-3.png";
import img4 from "../../../../public/images/pages/home/1-4.png";
import img5 from "../../../../public/images/pages/home/1-5.png";

const images = [img1, img2, img3, img4, img5];

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
    </div>
  );
}
