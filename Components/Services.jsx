import Image from "next/image";
import css from "../styles/Services.module.css";
import s1 from "./../assets/s1.png";
import s2 from "./../assets/s2.png";
import s3 from "./../assets/s3.png";

export default function Services() {
  return (
    <>
      <div className={css.heading}>
        <span>WHAT WE SERVE</span>
        <span>Your Favourite Food</span>
        <span>Delivery Partner</span>
      </div>

      {/* features / services */}
      <div className={css.services}>
        <div className={css.feature}>
          <div className={css.imageWrapper}>
            <Image src={s1} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <span>Easy to order</span>
          <span>
            Food delivery app is the easiest way to order food from your
            favorite local restaurants.
          </span>
        </div>

        <div className={css.feature}>
          <div className={css.imageWrapper}>
            <Image src={s2} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <span>Easy to order</span>
          <span>
            {" "}
            Order food online from your favorite restaurants and get it
            delivered at your doorstep.
          </span>
        </div>
        <div className={css.feature}>
          <div className={css.imageWrapper}>
            <Image src={s3} alt="" objectFit="cover" layout="intrinsic" />
          </div>

          <span>Easy to order</span>
          <span>
            We have partnered with the best restaurants in your city to bring
            you the best food at your doorstep.
          </span>
        </div>
      </div>
    </>
  );
}
