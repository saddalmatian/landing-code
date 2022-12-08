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

  const ShowImgaeThumbnai = DetailProduct[0]?.SubImages?.map((img, i) => {
    return (
      <div key={i} className="px-2 py-2">
        <img className="item-img" src={img} alt="" />
      </div>
    );
  });

  const showDetail = DetailProduct?.map((e, i) => {
    return (
      <div className="d-flex" key={i}>
        <div className="contaier-image">
          <div className="main-img">
            <img className="img-product" src={e.MainImages} alt="" />
          </div>
          <div>
            <div className="image-thumbnail">{ShowImgaeThumbnai}</div>
          </div>
        </div>
        <div className="container-information">
          <div key={i} className="px-2">
            <h2>{e.ItemName}</h2>
            <div className="underline"></div>
            <p>{e.Description}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Navbar />
      <div className="container-detail">
        <div className="row">
          <div className="detail-header">DETAIL</div>
          <div>{showDetail}</div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
