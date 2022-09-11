import css from "../styles/Header.module.css";
import { UilShoppingBag } from "@iconscout/react-unicons";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className={css.header}>
      {/* logo side */}
      <Logo />

      {/* menu side */}
      <ul className={css.menu}>
        <li>Home</li>
        <li>menu</li>
        <li>Contact</li>
      </ul>

      {/* right side */}
      <div className={css.rightSide}>
        <div className={css.cart}>
          <UilShoppingBag size={35} color="#2e2e2e" />
          <div className={css.badge}>
            1
          </div>
        </div>
      </div>
    </div>
  );
}
