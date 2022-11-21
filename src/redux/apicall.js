import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
} from "./ProductRedux";

import { loginStart, loginSucees, loginFailure } from "./UserRedux";

import { publicRequest } from "../requestmethod";

export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());
  try {
    const GetProduct = async () => {
      const res = publicRequest
        .get("/categories")
        .then((res) => {
          dispatch(getProductsSuccess(res.data));
        })
        .catch((err) => false);
    };
    GetProduct();
  } catch (error) {
    dispatch(getProductsFailure());
  }
};

export const loginredux = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const Login = async () => {
      const login = publicRequest
        .post("/login", user)
        .then((res) => {
          if (res.data === true) {
            dispatch(loginSucees(res.data));
          } else {
            dispatch(loginFailure());
          }
        })
        .catch((err) => false);
    };
    Login();
  } catch (error) {
    dispatch(loginFailure());
  }
};
