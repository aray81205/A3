import styles from "./Cart.module.scss";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../../assets/icons/minus.svg";
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
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];
function ProductInfoItem({ id, name, img, price, quantity }) {
  return (
    <div
      className={`${styles.productContainer} col col-12`}
      data-count={quantity}
      data-price={price}
    >
      <img className={styles.imgContainer} src={img} alt={name} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <span className={styles.productCount}>
              <MinusIcon className={`${styles.productAction} minus`} />
              <span className={styles.productCount}>{quantity}</span>
              <PlusIcon className={`${styles.productAction} plus`} />
            </span>
          </div>
        </div>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
}

const CartContainer = () => {
  let count = 0;
  cartData.forEach((data) => {
    count += data.price * data.quantity;
  });
  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>

      <section
        className={`${styles.productList} col col-12`}
        data-total-price="0"
      >
        {cartData.map((data) => (
          <ProductInfoItem key={data.id} {...data} />
        ))}
      </section>

      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>{count}</div>
      </section>
    </section>
  );
};

export default CartContainer;
