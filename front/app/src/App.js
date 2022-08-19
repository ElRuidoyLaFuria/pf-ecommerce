// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import Details from "./pages/Details/Details";
import Form from "./pages/Form/Form";
import LogIn from "./pages/LogIn";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/product/:id" exact element={<Details />} />
        <Route path="/product/create" exact element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
