import "./reset.css";
import "./base.scss";
import icons from "./assets/icons/icons.svg";
import { CartProvider } from "./components/Context/CartContext";
import { Header, Main, Footer } from "./components/index";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header icons={icons} />
        <Main icons={icons} />
        <Footer icons={icons} />
      </div>
    </CartProvider>
  );
}

export default App;
