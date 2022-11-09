// import products from "../../Resources/product.json";
import { useEffect } from "react";
import { getProducts } from "../../redux/apicall";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./Detailproduct.css";
import carot from "./carot.png";
function DetailProduct() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products);
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);
  const id = window.location;
  console.log(id.href.slice(22, 23));
  const DetailProduct = product.filter(
    (e) => e.ID - 1 == id.href.slice(22, 23)
  );
  const showDetail = DetailProduct?.map((e, i) => {
    return (
      <div className="row" key={i}>
        <div className="col-6 contaier-image">
          <img className="img-product" src={e.MainImages} alt="" />
        </div>
        <div className="col-6 container-information">
          <div key={i}>
            <h1>Information</h1>
            <h2>{e.ItemName}</h2>
            <h5>{e.Description}</h5>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container container-detail">
      <div className="row">
        <div className="detail-header">DETAIL</div>
        <div>{showDetail}</div>
      </div>
    </div>
  );
}

export default DetailProduct;
