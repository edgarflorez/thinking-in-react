import logo from "./logo.svg";
import "./App.css";

function ProductRow({ name, price, inStock }) {
  return (
    <div>
      <span>{name}</span> - <span>{price}</span> - <span>{inStock}</span>
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return <h2>{category}</h2>;
}

function ProductTable() {
  return (
    <>
      <heading>
        <span>Name</span>
        <span>Price</span>
      </heading>
      <ProductCategoryRow category="Fruits" />
      <ProductRow name="Apple" price="$1" inStock="true" />
      <ProductRow name="Dragonfruit" price="$1" inStock="true" />
      <ProductRow name="Passionfruit" price="$2" inStock="false" />
      <ProductCategoryRow category="Vegetables" />
      <ProductRow name="Spinach" price="$2" inStock="true" />
      <ProductRow name="Pumpkin" price="$4" inStock="false" />
      <ProductRow name="Peas" price="$1" inStock="true" />
    </>
  );
}

function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Search" />
      <br />
      <label>
        <input type="checkbox" />
        Only show products on stock
      </label>
    </div>
  );
}

function FilterableProductTable() {
  return (
    <div>
      Filterable Product Table
      <SearchBar />
      <ProductTable />
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>thinking in react playground</h1>
      <FilterableProductTable />
    </div>
  );
}

export default App;
