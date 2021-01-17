import React, { useState } from "react";
import axios from "axios";

import Nota from "../components/nota";
import List from "../components/list";

import "../css/compra.css";

const Compra = () => {
  let [keyword, setKeyword] = useState("");
  let [items, setItems] = useState([
    {
      id: "001",
      nombre: "Manga AOT",
      precio: 23,
      cantidad: 3,
      categoria: "Anime",
    },
    {
      id: "002",
      nombre: "Manzana",
      precio: 40,
      cantidad: 12,
      categoria: "Comida",
    },
    {
      id: "003",
      nombre: "Pixel 5",
      precio: 8000,
      cantidad: 2000,
      categoria: "Telefono",
    },
  ]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      console.log("entered");
      let { data } = await axios.get(
        `http://localhost:5000/api/products/${e.target.value}`
      );
      data = data[0];
      let newItems = [...items];
      newItems.push({
        id: data._id,
        nombre: data.name,
        precio: data.unitPrice,
        categoria: data.category,
        cantidad: 1,
      });
      setItems(newItems);
    }
  };

  return (
    <React.Fragment>
      <input
        id="cityname"
        type="text"
        value={keyword}
        className="form-control"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <List items={items} />
      <Nota />

      <input
        type="button"
        id="btnExport"
        className="btn btn-default btn-lg pull-right"
        value=" Export Table data into Excel "
      />
    </React.Fragment>
  );
};

export default Compra;
