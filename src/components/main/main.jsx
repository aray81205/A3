import Register from "./Register/Register";
import Progress from "./Progress/Progress";
import Cart from "./Cart/Cart";
import styles from "./Main.module.scss";
const Main = ({ icons }) => {
  return (
    <>
      <main className={styles.siteMain}>
        <div className={styles.mainContainer}>
          <Register icons={icons} />
          <Cart icons={icons} />
          <Progress icons={icons} />
        </div>
      </main>
    </>
  );
};
export default Main;
