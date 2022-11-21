import { useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import "./Detailproduct.css";

function DetailProduct() {
  const product = useSelector((state) => state.products.products);

  const id = window.location;
  const DetailProduct = product?.filter((e) => {
    return e.Alias === id.href.slice(22);
  });

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
    <div>
      <Navbar />
      <div className="container container-detail">
        <div className="row">
          <div className="detail-header">DETAIL</div>
          <div>{showDetail}</div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
