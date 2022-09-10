import Image from "next/image";
import css from "../styles/Footer.module.css";
import { UilFacebook, UilGithub, UilInstagram } from "@iconscout/react-unicons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVED</span>
      <div className={css.social}>
        <UilFacebook size={45} />
        <UilGithub size={45} />
        <UilInstagram size={45} />
      </div>

      {/* logo side */}
      <Logo />
    </div>
  );
}
