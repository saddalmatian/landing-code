import axios from "axios";
import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
} from "./ProductRedux";

export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());
  try {
    const res = axios
      .get("http://13.55.133.32:8000/categories/")
      .then((res) => {
        dispatch(getProductsSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
    // const res = axios.get("http://13.55.133.32:8000/")
    // .then()
    console.log(res);
  } catch (error) {
    dispatch(getProductsFailure());
  }
};
