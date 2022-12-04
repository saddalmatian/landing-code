import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
} from "./ProductRedux";
import {
  getReportsStart,
  getReportsSuccess,
  getReportsFailure,
} from "./ReportRedux";

import { loginStart, loginSucees, loginFailure } from "./UserRedux";

import { publicRequest } from "../requestmethod";
import {
  getReportsDetailFailure,
  getReportsDetailStart,
  getReportsDetailSuccess,
} from "./DetailReport";

export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());
  try {
    const GetProduct = async () => {
      publicRequest
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
      publicRequest
        .post(`/log-in?username=${user.username}&password=${user.password}`)
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

export const PostReport = async (dispatch, FormReport) => {
  console.log();
  dispatch(loginStart());
  try {
    const Report = async () => {
      publicRequest
        .post(
          `/report/?ori_image_s3_key=${FormReport.ori_image_s3_key}&s3key_detected_img=${FormReport.s3key_detected_img}&message=${FormReport.message}&item_reported=${FormReport.item_reported}`
        )
        .then((res) => {
          if (res.data === true) {
            dispatch(loginSucees(res.data));
          } else {
            dispatch(loginFailure());
          }
        })
        .catch((err) => false);
    };
    Report();
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const GetReport = async (dispatch) => {
  dispatch(getReportsStart());
  try {
    const GetRP = async () => {
      await publicRequest
        .post(`/get-reports`)
        .then((res) => {
          dispatch(getReportsSuccess(res.data));
        })
        .catch((err) => false);
    };
    GetRP();
  } catch (error) {
    dispatch(getReportsFailure());
  }
};

export const GetDetailReport = async (dispatch, sk) => {
  dispatch(getReportsDetailStart());
  try {
    const GetRP = async () => {
      await publicRequest
        .get(`/get_report/?sk=${sk}`)
        .then((res) => {
          dispatch(getReportsDetailSuccess(res.data));
        })
        .catch((err) => false);
    };
    GetRP();
  } catch (error) {
    dispatch(getReportsDetailFailure());
  }
};
