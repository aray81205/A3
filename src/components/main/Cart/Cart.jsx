import styles from "../../../style/Cart.module.scss";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../../assets/icons/minus.svg";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";

function ProductInfoItem({ id, name, img, price }) {
  const { cartData, getSum, setCartData } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const item = cartData.find((item) => item.id === id);
    setQuantity(item?.quantity || 0);
  }, [cartData, id]);

  function handleMinusClick() {
    if (quantity > 0) {
      const updatedQuantity = quantity - 1;
      const updatedPrice = -price;
      setQuantity(updatedQuantity);
      const updatedCartData = cartData.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });
      setCartData(updatedCartData);
      getSum(updatedPrice);
    }
  }

  function handlePlusClick() {
    const updatedQuantity = quantity + 1;
    const updatedPrice = price;
    setQuantity(updatedQuantity);
    const updatedCartData = cartData.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });
    setCartData(updatedCartData);
    getSum(updatedPrice);
  }
  return (
    <div
      className={`${styles.productContainer} col col-12`}
      key={id}
      data-count={quantity}
      data-price={price}
    >
      <img className={styles.imgContainer} src={img} alt={name} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <MinusIcon
              className={`${styles.productAction} minus`}
              onClick={handleMinusClick}
            />
            <span className={styles.productCount}>{quantity}</span>
            <PlusIcon
              className={`${styles.productAction} plus`}
              onClick={handlePlusClick}
            />
          </div>
        </div>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
}

export default function CartContainer() {
  const { cartData, totalPrice, getSum } = useContext(CartContext);

  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>

      <section className={`${styles.productList} col col-12`}>
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
