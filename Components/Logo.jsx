import Image from "next/image";
import logo from "./../assets/Logo.png";
import css from "../styles/Logo.module.css";

export default function Logo() {
  return (
    <div className={css.logo}>
      <Image src={logo} alt="" width={50} height={50} />
      <span>
        Slice<span>Pizza</span>
      </span>
    </div>
  );
}
