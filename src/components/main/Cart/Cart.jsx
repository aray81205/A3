import styles from "./Cart.module.scss";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../../assets/icons/minus.svg";
import { useState } from "react";
const cartData = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪乾乾",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];
function ProductInfoItem({ id, name, img, price, getSum }) {
  const [count, setCount] = useState(0);
  function handleMinusClick() {
    setCount(count - 1);
  }

  function handlePlusClick() {
    setCount(count + 1);
  }

  return (
    <div
      className={`${styles.productContainer} col col-12`}
      key={id}
      data-count={count}
      data-price={price}
    >
      <img className={styles.imgContainer} src={img} alt={name} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <MinusIcon
              className={`${styles.productAction} minus`}
              onClick={() => {
                if (count <= 0) {
                  return;
                } else {
                  handleMinusClick();
                  getSum(-price);
                }
              }}
            />
            <span className={styles.productCount}>{count}</span>
            <PlusIcon
              className={`${styles.productAction} plus`}
              onClick={() => {
                handlePlusClick();
                getSum(+price);
              }}
            />
          </div>
        </div>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
}

export default function CartContainer() {
  const [totalPrice, setTotalPrice] = useState(0);

  function getSum(price) {
    setTotalPrice(totalPrice + price);
  }

  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>

      <section
        className={`${styles.productList} col col-12`}
        data-total-price={totalPrice}
      >
        {cartData.map((data) => (
          <ProductInfoItem key={data.id} {...data} getSum={getSum} />
        ))}
      </section>

      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>${totalPrice}</div>
      </section>
    </section>
  );
}
