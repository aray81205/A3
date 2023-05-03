import Image1 from "assets/images/product-1.jpg";
import Image2 from "assets/images/product-2.jpg";
import styles from "./Cart.module.scss";

const CartContainer = () => {
  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>

      <section
        className={`${styles.productList} col col-12`}
        data-total-price="0"
      >
        <div
          className={`${styles.productContainer} col col-12`}
          data-count="0"
          data-price="3999"
        >
          <img className={styles.imgContainer} src={Image1} alt="..." />
          <div className={styles.productInfo}>
            <div className={styles.productName}>破壞補丁修身牛仔褲</div>
            <div className={styles.productControlContainer}>
              <div className={styles.productControl}>
                <span className={styles.productCount}>0</span>
              </div>
            </div>
            <div className={styles.price}>$3,999</div>
          </div>
        </div>
        <div
          className={`${styles.productContainer} col col-12`}
          data-count="0"
          data-price="1299"
        >
          <img className={styles.imgContainer} src={Image2} alt="..." />
          <div className={styles.productInfo}>
            <div className={styles.productName}>刷色直筒牛仔褲</div>
            <div className={styles.productControlContainer}>
              <div className={styles.productControl}>
                <span className={styles.productCount}>0</span>
              </div>
            </div>
            <div className={styles.price}>$1,299</div>
          </div>
        </div>
      </section>

      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>$0</div>
      </section>
    </section>
  );
};

export default CartContainer;
