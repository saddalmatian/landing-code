import "./Category.css";
import { useNavigate } from "react-router-dom";
function Category(props) {
  const arrayTest = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
  ];
  let navigate = useNavigate();
  const ChangeRouteDetail = (_id) => {
    let path = `/category-detail-${_id}`;
    navigate(path);
  };

  const ShowCategory = arrayTest.map((e, i) => {
    return (
      <div
        key={i}
        onClick={() => ChangeRouteDetail(i)}
        className="board-category-item"
      >
        {e}
      </div>
    );
  });

  return (
    <div className="wrapper-category">
      <div className="item-1"></div>
      <div className="item-2"></div>
      <div className="item-3"></div>
      <div className="board-category">
        <div className="board-category-header">CATEGORIES</div>
        {ShowCategory}
      </div>
    </div>
  );
}

export default Category;
