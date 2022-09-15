import Image from "next/image";
import css from "../styles/Footer.module.css";
import { UilFacebook, UilGithub, UilLinkedin } from "@iconscout/react-unicons";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={css.footer}>
      <span>
        &copy; 
        {/* newyear function */}
        {new Date().getFullYear()}
        &nbsp; ALL RIGHT RESERVED
        </span>
      <div className={css.social}>
        <Link href="https://www.facebook.com/" passHref>
          <a target="_blank">
            <UilFacebook size={45} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/mmsabbir/" passHref>
          <a target="_blank">
            <UilLinkedin size={45} />
          </a>
        </Link>
        <Link href="https://github.com/sabbirpboss" passHref>
          <a target="_blank">
            <UilGithub size={45} />
          </a>
        </Link>
      </div>

      {/* logo side */}
      <Logo />
    </div>
  );
}
