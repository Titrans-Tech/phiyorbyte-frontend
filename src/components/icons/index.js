import Image from "next/image";

export const Logo = ({ size = 200 }) => {
  return <Image src="/assets/logo.png" alt="logo-img" width={size} height={100} />;
};
