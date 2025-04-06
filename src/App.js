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

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    // category to the row
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }

    lastCategory = product.category;

    // product to the row
  });

  return (
    <>
      <heading>
        <span>Name</span>
        <span>Price</span>
      </heading>
      {rows}
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
      <input type="text" placeholder="Search..." />
      <br />
      <label>
        <input type="checkbox" />
        Only show products on stock
      </label>
    </div>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
      Filterable Product Table
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  return (
    <div className="app">
      <h1>thinking in react playground</h1>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
