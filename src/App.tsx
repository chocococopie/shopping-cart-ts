import ProductList from "./components/ProductList";

const App = () => {

  const addToCart = (product) => {};

  return (
    <div>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default App;
