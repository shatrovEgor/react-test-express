import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css'
import { connect } from "react-redux";
import { privateRoutes, publicRoutes } from './routes'

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const App = ({auth = false}) => {

  return (
    auth
    ?
    <div className="container">
      <BrowserRouter>
        <Routes>
        {privateRoutes.map(route => 
            <Route 
              path={route.path} 
              element={route.element}
              key={route.id}
            />
          )}
        </Routes>
      </BrowserRouter>
    </div>
    :
    <div className="container">
      <BrowserRouter>
        <Routes>
        {publicRoutes.map(route => 
            <Route 
              path={route.path} 
              element={route.element}
              key={route.id}
            />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default connect(mapStateToProps)(App);
