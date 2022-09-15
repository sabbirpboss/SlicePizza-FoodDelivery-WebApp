import css from "../styles/Header.module.css";
import { UilShoppingBag, UilReceipt } from "@iconscout/react-unicons";
import Logo from "./Logo";
import { useStore } from "../store/store";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [order, setOrder] = useState("");

  useEffect(() => {
    setOrder(localStorage.getItem("order"));
  }, []);

  // state in terminal
  const state = useStore((state) => state);
  // console.log(state);

  const items = useStore((state) => state.cart.pizzas.length);

  return (
    <div className={css.header}>
      {/* logo side */}
      <Logo />

      {/* menu side */}
      <ul className={css.menu}>
        <li>
          <Link href="/">Home</Link>
          </li>
        <li>menu</li>
        <li>Contact</li>
      </ul>

      {/* right side */}
      <div className={css.rightSide}>
        <Link href="/cart">
          <div className={css.cart}>
            <UilShoppingBag size={35} color="#2e2e2e" />
            <div className={css.badge}>{items}</div>
          </div>
        </Link>

        {order && (
          <Link href={`/order/${order}`}>
            <div className={css.cart}>
              <UilReceipt size={35} color="#2e2e2e" />
              {order != "" && <div className={css.badge}>1
                </div>}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
