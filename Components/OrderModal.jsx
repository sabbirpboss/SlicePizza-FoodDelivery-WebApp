import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { createOrder } from "../lib/orderHandler";
import { useStore } from "../store/store";
import css from "../styles/OrderModal.module.css";
import { useRouter } from "next/router";

export default function OrderModal({ opened, setOpened, paymentMethod }) {
  const theme = useMantineTheme();
  const [formData, setFormData] = useState({});

  // router
  const router = useRouter();

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // reset cart
  const resetCart = useStore((state) => state.resetCart);

  const total = typeof window !== "undefined" && localStorage.getItem("total");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const id = await createOrder({ ...formData, total, paymentMethod });
    toast.success("Order Placed By");
    resetCart();
    {
      typeof window !== "undefined" && localStorage.setItem("order", id);
    }

    router.push(`/order/${id}`);
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
      onClose={() => setOpened("")}
    >
      {/* Modal content */}
      <form onSubmit={handleSubmit} className={css.formContainer}>
        <input
          onChange={handleInput}
          type="text"
          name="name"
          required
          placeholder="Name"
        />
        <input
          onChange={handleInput}
          type="text"
          name="phone"
          required
          placeholder="Phone Number"
        />
        <textarea
          onChange={handleInput}
          name="address"
          id=""
          rows="3"
          placeholder="Your Address"
        ></textarea>

        <span>
          You will pay total <span>$ {total}</span> on delivery.
        </span>

        <button type="submit" className="btn">
          Place Order
        </button>
      </form>
      <Toaster />
    </Modal>
  );
}
