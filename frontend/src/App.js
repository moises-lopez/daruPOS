import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./css/home.css";

import Compra from "./pages/Compra";
import Productos from "./pages/Productos";
import Ventas from "./pages/Ventas";
import AgregarProducto from "./pages/AgregarProducto";
import TabsBar from "./components/tabsbar";

function App() {
  let [currentTab, setCurrentTab] = useState("/Compra");

  return (
    <React.Fragment>
      <TabsBar />
      <div className="tab_container flex-center">
        <div className="center_item">
          <Switch>
            <Route path="/Compra" component={Compra} />
            <Route path="/Prodcutos" component={Productos} />
            <Route path="/Ventas" component={Ventas} />
            <Route path="/AgregarProducto" component={AgregarProducto} />
            <Redirect from="/" to={currentTab} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
