import React, { Fragment, useContext } from 'react';
import { Route, HashRouter } from "react-router-dom"
import MainPage from './components/main-page/MainPage';
import {Context} from './container/Context';
const App = () => {

  const context=useContext(Context)
  return (
    <Fragment>
      <HashRouter>
        <Route path="/" exact component={MainPage}/>

      </HashRouter>
    </Fragment>
  );
}

export default App;