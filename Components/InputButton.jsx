import css from "../styles/InputButton.module.css";

export default function InputButton() {
  return (
    <div className={css.inputBtnDiv}>
      <input
        type="text"
        name="deliveryAddress"
        placeholder="Delivery Address || Food"
      />
      <button className={css.inputBtn}>Place Order 🛒</button>
      <button className={css.inputBtn}>Search Testy 😋</button>
    </div>
  );
}
