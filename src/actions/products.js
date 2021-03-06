import {
  FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_SUCCESS,
  FETCHING_PRODUCTS_FAILURE
} from "../constants";
import Api from "../library/api";

export function fetchProducts() {
  return dispatch => {
    dispatch(getProducts());
    return Api.get("/api/?results=15")
      .then(res => {
        dispatch(getProductsSuccess(res.data.results));
      })
      .catch(err => {
        dispatch(getProductsFailure(err.response));
        throw err.response;
      });
  };
}

function getProducts() {
  return {
    type: FETCHING_PRODUCTS
  };
}

function getProductsSuccess(data) {
  return {
    type: FETCHING_PRODUCTS_SUCCESS,
    data
  };
}

function getProductsFailure() {
  return {
    type: FETCHING_PRODUCTS_FAILURE
  };
}
