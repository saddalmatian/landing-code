import "./Category.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getProducts } from "../../redux/apicall";
import { useDispatch } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
function Category(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);
  const product = useSelector((state) => state.products.products);
  let navigate = useNavigate();
  const ChangeRouteDetail = (_id) => {
    let path = `/${_id}`;
    navigate(path);
  };

  const ShowCategory = product.map((e, i) => {
    return (
      <div
        key={i}
        onClick={() => ChangeRouteDetail(e.Alias)}
        className="board-category-item"
      >
        <img className="image-catergory" src={e.MainImages} alt="" />
        <div className="text-caterogy">{e.ItemName}</div>
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <div className="wrapper-category">
        <div className="item-1"></div>
        <div className="item-2"></div>
        <div className="item-3"></div>
        <div className="board-category">
          <div className="board-category-header">CATEGORIES</div>
          {ShowCategory}
        </div>
      </div>
    </div>
  );
}

export default Category;
