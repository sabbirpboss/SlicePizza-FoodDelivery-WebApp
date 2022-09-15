import Image from "next/image";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { client, urlFor } from "../../lib/client";
import css from "../../styles/Pizza.module.css";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";
import { useState } from "react";
import { useStore } from "../../store/store";
import toast, { Toaster } from "react-hot-toast";

export default function Pizza({ pizza }) {
  // console.log(pizza);
  const src = urlFor(pizza.image).url();

  //   size of the pizza- small, medium, large
  const [size, setSize] = useState(1);

  // increase and decrease the size of the pizza order by clicking on the arrows
  const [quantity, setQuantity] = useState(1);

  //   increase the quantity of the pizza order by clicking on the arrows
  const handleQuantity = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
        setQuantity(quantity - 1);
    } else {
        setQuantity(1);
      }
  };

  // add to cart function
  const addPizza = useStore((state) => state.addPizza);
  const addToCart = () => {
    addPizza({...pizza, price: pizza.price[size], quantity: quantity, size: size});
    toast.success('Pizza added to cart');
  }

  return (
    <div>
      <Header />
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            src={src}
            alt=""
            layout="fill"
            unoptimized
            priority
            objectFit="cover"
          />
        </div>

        {/* right side */}
        <div className={css.rightSide}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>

          <span>
            <span style={{ color: "var(--themeRed)" }}>$</span>{" "}
            {pizza.price[size]}
          </span>
          <div className={css.size}>
            <span>Size</span>
            <div className={css.sizeVariants}>
              <div
                onClick={() => setSize(0)}
                className={size === 0 ? css.selected : ""}
              >
                Small
              </div>
              <div
                onClick={() => setSize(1)}
                className={size === 1 ? css.selected : ""}
              >
                Medium
              </div>
              <div
                onClick={() => setSize(2)}
                className={size === 2 ? css.selected : ""}
              >
                Large
              </div>
            </div>
          </div>

          {/* quantity counter */}
          <div className={css.quantity}>
            <span>Quantity</span>

            <div className={css.counter}>
              <div
                onClick={() => handleQuantity("decrease")}>
              <Image
                src={LeftArrow}
                width={20}
                height={20}
                alt=""
                objectFit="contain"
              />
              </div>

              <span>{quantity}</span>

              <div
                onClick={() => handleQuantity("increase")}>
              <Image
                src={RightArrow}
                width={20}
                height={20}
                alt=""
                objectFit="contain"
              />
              </div>
            </div>
          </div>

          {/* button */}
          <div className={`btn ${css.btn}`} onClick={addToCart}>Add to cart</div>
        </div>
        <Toaster />
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type == "pizza" && slug.current == "${slug}"][0]`
  );

  return {
    props: {
      pizza,
    },
  };
}
