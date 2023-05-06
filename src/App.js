import Home from "./Home/Home";
import Header from "./components/Header";
import StoreProduct from "./Products/StoreProduct";
import Productid from "./Products/Productid";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/:store_id" element={<StoreProduct />} />
        <Route path="/product/:product_id" element={<Productid />} />
      </Routes>
    </div>
  );
}

export default App;
