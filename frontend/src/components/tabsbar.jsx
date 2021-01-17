import React from "react";

const TabsBar = () => {
  return (
    <ul className="tabs">
      <li className="active" rel="tab1">
        Compra
      </li>
      <li rel="tab2">Productos</li>
      <li rel="tab3">Ventas</li>
      <li rel="tab4">AgregarProducto</li>
    </ul>
  );
};

export default TabsBar;
