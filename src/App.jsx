import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import InstructionPage from "./Pages/Instruction/Instruction";
import CategoryPage from "./Pages/Category/Category";
import DetailProduct from "./Pages/DetailProduct/Detailproduct";
import Login from "./Pages/Login/Login";
import ListReport from "./Pages/ListReport/ListReport";
import DetailReport from "./Pages/DetailReport/DetailReport";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.isadmin);
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
          <Route
            path="/admin"
            element={user === true ? <ListReport /> : <Login />}
            exact={true}
          />
          <Route path="/listreport" element={<ListReport />} exact={true} />

          <Route path="/category" element={<CategoryPage />} exact={true} />
          <Route path="/:_id" element={<DetailProduct />} exact={true} />
          <Route path="/item/:_id" element={<DetailReport />} exact={true} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
