import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Home/Home";
import InstructionPage from "../Pages/Instruction/Instruction";
import CategoryPage from "../Pages/Category/Category";
import DetailProduct from "../Pages/DetailProduct/Detailproduct";
import Login from "../Pages/Login/Login";
import ListReport from "../Pages/ListReport/ListReport";
import DetailReport from "../Pages/DetailReport/DetailReport";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} exact={true} />
            <Route
              path="/instruction"
              element={<InstructionPage />}
              exact={true}
            />
            <Route path="/admin" element={<Login />} exact={true} />
            <Route path="/listreport" element={<ListReport />} exact={true} />
            <Route
              path="/detailreport"
              element={<DetailReport />}
              exact={true}
            />

            <Route path="/category" element={<CategoryPage />} exact={true} />
            <Route path="/:_id" element={<DetailProduct />} exact={true} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
