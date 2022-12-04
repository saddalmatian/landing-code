import { useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import "./Detailproduct.css";

function DetailProduct() {
  const product = useSelector((state) => state.products.products);
  console.log(product);
  const id = window.location;
  const DetailProduct = product?.filter((e) => {
    return e.Alias === id.href.slice(22);
  });

  const showDetail = DetailProduct?.map((e, i) => {
    console.log(e);
    return (
      <div className="row" key={i}>
        <div className="col-6 contaier-image">
          <img className="img-product" src={e.MainImages} alt="" />
          {e.SubImages.map((img, i) => {
            console.log(img);
            return (
              <div>
                <img src={img} alt="" />
              </div>
            );
          })}
        </div>
        <div className="col-6 container-information">
          <div key={i}>
            <h2>Information</h2>
            <div className="underline"></div>
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
