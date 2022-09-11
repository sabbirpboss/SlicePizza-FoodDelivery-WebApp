import Image from "next/image";
import css from "../styles/Hero.module.css";
import cherry from "./../assets/Cherry.png";
import HeroImage from "./../assets/HeroImage.png";
import InputButton from "./InputButton";
import { UilPhone } from "@iconscout/react-unicons";
import pizza1 from "./../assets/p1.jpg";

export default function Hero() {
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.leftSide}>
        <div className={css.cherryDiv}>
          <span>More Than Faster</span>
          <Image src={cherry} alt="" width={40} height={25} />
        </div>

        {/* hero text */}
        <div className={css.heroText}>
          <span>
            Be The <span style={{ color: "var(--themeRed)" }}>Fastest</span>
          </span>
          <span>
            In{" "}
            <span style={{ color: "var(--themeRedOpacity)" }}>Delivering</span>
          </span>
          <span>
            Your <span style={{ color: "var(--themeRed)" }}>Pizza</span>
          </span>
        </div>

        <div className={css.miniText}>
          Our pizza is made with the finest ingredients and baked to perfection
          in our state-of-the-art ovens to give you the best pizza experience
          ever.
        </div>

        <InputButton />
      </div>

      {/* right side */}
      <div className={css.rightSide}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>

        {/* fot 4 dots */}
        <span className={css.dot1}></span>
        <span className={css.dot2}></span>
        <span className={css.dot3}></span>
        <span className={css.dot4}></span>

        <div className={css.contactUs}>
          <span>Contact Us</span>
          <div>
            <UilPhone color="White" />
          </div>
        </div>

        <div className={css.pizza}>
          <div>
            <Image src={pizza1} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <div className={css.details}>
            <span>Italian Pizza</span>
            <span>
              <span style={{ color: "var(--themeRed)" }}>$</span> 7.49
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
