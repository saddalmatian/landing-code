import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Home/Home";
import InstructionPage from "../Pages/Instruction/Instruction";
import CategoryPage from "../Pages/Category/Category";
import DetailProduct from "../Pages/DetailProduct/Detailproduct";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} exact={true} />
            <Route
              path="/instruction"
              element={<InstructionPage />}
              exact={true}
            />
            <Route path="/category" element={<CategoryPage />} exact={true} />
            <Route
              path="/category-detail-:_id"
              element={<DetailProduct />}
              exact={true}
            />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
