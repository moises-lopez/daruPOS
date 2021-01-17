import React, { useState } from "react";
import axios from "axios";
const AgregarProducto = () => {
  let [product, setProduct] = useState({});

  const handleChange = (e) => {
    const auxProduct = { ...product };
    auxProduct[e.currentTarget.name] = e.currentTarget.value;
    setProduct(auxProduct);
  };

  const addProduct = () => {
    axios.post("http://localhost:5000/api/products/save", product);
  };

  return (
    <React.Fragment>
      <input
        id="id"
        type="text"
        value={product.id}
        className="form-control"
        name="_id"
        onChange={handleChange}
      />
      <input
        id="name"
        type="text"
        value={product.name}
        className="form-control"
        name="name"
        onChange={handleChange}
      />
      <input
        id="unitPrice"
        type="text"
        value={product.unitPrice}
        className="form-control"
        name="unitPrice"
        onChange={handleChange}
      />
      <input
        id="category"
        type="text"
        value={product.category}
        className="form-control"
        name="category"
        onChange={handleChange}
      />
      <input
        id="quantity"
        type="text"
        value={product.quantity}
        className="form-control"
        name="quantity"
        onChange={handleChange}
      />
      <button onClick={addProduct}>Send</button>
    </React.Fragment>
  );
};

export default AgregarProducto;
