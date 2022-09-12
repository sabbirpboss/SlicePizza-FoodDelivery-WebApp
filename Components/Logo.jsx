import Image from "next/image";
import logo from "./../assets/Logo.png";
import css from "../styles/Logo.module.css";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className={css.logo}>
        <Image src={logo} alt="" width={50} height={50} />
        <span>
          SLICE<span>PIZZA</span>
        </span>
      </div>
    </Link>
  );
}
