import React, {useState} from 'react'
import { Route, Switch, Redirect } from "react-router-dom";

import './css/home.css'

import Compra from './pages/Compra'
import Productos from './pages/Productos'
import Ventas from './pages/Ventas'

function App() {

  let [currentTab, setCurrentTab] = useState('/Compra')

  return (
    <React.Fragment>
      <ul className='tabs'>
        <li className='active' rel='tab1'>Compra</li>
        <li rel='tab2'>Productos</li>
        <li rel='tab3'>Ventas</li>
      </ul>
      <div className='tab_container flex-center'>
        <div className='center_item'>
          <Switch>
            <Route path='/Compra' component={Compra} />
            <Route path='/Prodcutos' component={Productos} />
            <Route path='/Ventas' component={Ventas} />
            <Redirect from='/' to={currentTab} />
          </Switch>
          </div>
      </div>
    </React.Fragment>
  );
}

export default App;
