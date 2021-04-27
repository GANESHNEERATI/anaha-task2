import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [value, Setvalue] = useState();

  const [data, setData] = useState([]);

  const fetchProduct = async () => {
    const data = await axios.get(
      `https://fakestoreapi.com/products/category/${value}`
    );
    console.log(data);
    setData(data.data);
  };
  return (
    <div className="App">
      <h1>Search for product</h1>
      <div className="search_conainer">
        <label>Enter product category:</label>
        <input
          type="text"
          placeholder="enter product category"
          onChange={(e) => Setvalue(e.target.value)}
        />
        <button onClick={fetchProduct}> Search</button>

        {data &&
          data.map((d) => (
            <div className="data">
              <span>Title</span> <p>{d.title}</p>
              <span>Description</span>
              <p>{d.description}</p>
              <span>Price</span>
              <p>{d.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
