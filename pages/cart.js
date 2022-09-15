import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { urlFor } from "../lib/client";
import { useStore } from "../store/store";
import css from "../styles/Cart.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import OrderModal from "../Components/OrderModal";

export default function Cart() {
  const cartData = useStore((state) => state.cart);

  const [paymentMethod, setPaymentMethod] = useState(null);

  const [order, setOrder] = useState(
    typeof window !== "undefined" && localStorage.getItem("order")
  );

  // stripe
  const router = useRouter();

  // cart total
  const total = () =>
    cartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0);

  // pay on delivery payment integration with stripe
  const handleOnDelivery = () => {
    setPaymentMethod(0);
    typeof window !== "undefined" && localStorage.setItem("total", total());
  };

  const handleCheckout = async () => {
    typeof window !== "undefined" && localStorage.setItem("total", total());
    setPaymentMethod(1);
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData.pizzas),
    });

    if (response.status === 500) return;
    const data = await response.json();
    toast.loading("Redirecting to payment page...");
    router.push(data.url);
  };

  return (
    <div>
      <Header />
      <div className={css.container}>
        {/* details */}
        <div className={css.details}>
          <table className={css.table}>
            <thead className={css.thead}>
              <tr>
                <th>Serial</th>
                <th>Pizza</th>
                <th>Name</th>
                <th>Size</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={css.tbody}>
              {cartData.pizzas.length > 0 &&
                cartData.pizzas.map((pizza, index) => {
                  const src = urlFor(pizza.image).url();
                  return (
                    <tr key={index}>
                      <td>{index + 1}.</td>
                      <td className={css.imageTd}>
                        <Image
                          loader={() => src}
                          src={src}
                          alt=""
                          objectFit="cover"
                          width={85}
                          height={85}
                          unoptimized
                        />
                      </td>
                      <td>{pizza.name}</td>
                      <td>
                        {pizza.size === 0
                          ? "Small"
                          : pizza.size === 1
                          ? "Medium"
                          : "Large"}
                      </td>
                      <td>{pizza.price}</td>
                      <td>{pizza.quantity}</td>
                      <td>{pizza.price * pizza.quantity}</td>
                      <td>
                        <button
                          className={`btn ${css.remove}`}
                          onClick={() => {
                            useStore.setState({
                              cart: {
                                pizzas: cartData.pizzas.filter(
                                  (p) => p !== pizza,
                                  toast.error("Removed The Pizza 😞")
                                ),
                              },
                            });
                          }}
                        >
                          x
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        {/* summary */}
        <div className={css.cart}>
          <span>Cart</span>
          <div className={css.cartDetails}>
            <div>
              <span>Items</span>
              <span>{cartData.pizzas.length}</span>
            </div>

            <div>
              <span>Total</span>
              <span>
                <span style={{ color: "var(--themeRed)", fontWeight: "bold" }}>
                  $
                </span>{" "}
                {total()}
              </span>
            </div>
          </div>

          {!order && cartData.pizzas.length > 0 ? (
            <div className={css.buttons}>
              <button className="btn" onClick={handleOnDelivery}>
                Pay On Delivery
              </button>
              <button className="btn" onClick={handleCheckout}>
                Pay Now
              </button>
            </div>
          ) : (
            <span className={css.hidePayBtnWhenShowed}>
              Please, Give us some Time to Complete your Previous Order.
              <br />
              <span>Then you can order again ☺</span>
            </span>
          )}
        </div>

        <Toaster />

        {/* mantine modal */}
        <OrderModal
          opened={paymentMethod === 0}
          setOpened={setPaymentMethod}
          paymentMethod={paymentMethod}
        />
      </div>
      <Footer />
    </div>
  );
}
