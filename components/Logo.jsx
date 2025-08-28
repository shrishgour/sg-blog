import logo from "@/public/nav-icon.png";
import Image from "next/image";

function Logo() {
  return (
    <Image
      src={logo}
      height="36"
      width="36"
      quality={100}
      alt="Shrish portfolio logo"
      className="bg-primary rounded-lg"
    />
  );
}

export default Logo;
