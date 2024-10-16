import Image from "next/image";

export default function layout({ children }) {
  return (
    <div>
      <Image src="/images/kt_logo.png" alt="kt_logo" width={30} height={25} />
      <Image
        src="/images/shop_logo.png"
        alt="shop_logo"
        width={60}
        height={25}
      />

      {children}
    </div>
  );
}
