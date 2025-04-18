import "./App.css";

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>product.name</span>
  );

  return (
    <div>
      {name} - {product.price}
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
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow key={product.name} product={product}></ProductRow>);
    lastCategory = product.category;
  });

  return (
    <>
      <heading>
        <span>Name</span>
        <span>Price</span>
      </heading>
      {rows}
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
