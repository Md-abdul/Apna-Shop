import axios from "axios";
import {
  // ADD_TO_CART_FAILURE,
  ADD_TO_CART_SUCCESS,
  DELETE_TO_CART_SUCCESS,
  GET_TO_CART_SUCCESS,
  PRODUCT_DELETE,
  PRODUCT_ERROR,
  PRODUCT_POST,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_UPDATE,
} from "./actionType";
//https://apna-shop-g83q.onrender.com
export const getData = (obj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`https://apna-shop-g83q.onrender.com/product/productget`, obj)
    .then((res) => {
      dispatch({ type: PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const PostProductData = (newData) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post(`https://apna-shop-g83q.onrender.com/product/productget`, newData)
    .then((res) => {
      dispatch({ type: PRODUCT_POST, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const UpdataProductData = (_id, updatedata) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .put(`https://apna-shop-g83q.onrender.com/product/productupdate/${_id}`, updatedata)
    .then(() => {
      dispatch({ type: PRODUCT_UPDATE });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const DeleteProductData = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .delete(`https://apna-shop-g83q.onrender.com/product/productdelete/${id}`)
    .then(() => {
      dispatch({ type: PRODUCT_DELETE });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_ERROR });
    });
};

// =========================== FOR CART PAGE WORD==================

export const addToCart = (productData) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post(`https://apna-shop-g83q.onrender.com/cart/cartpost`, productData)
    .then((res) => {
      dispatch({ type: ADD_TO_CART_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_ERROR });
    });
};

export const getToCart = () => {
  return (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST });
    axios
      .get(`https://apna-shop-g83q.onrender.com/cart/cartget`)
      .then((res) => {
        dispatch({ type: GET_TO_CART_SUCCESS, payload: res.data });
      })
      .catch(() => {
        dispatch({ type: PRODUCT_ERROR });
      });
  };
};

export const deleteProducts = (_id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .delete(`https://apna-shop-g83q.onrender.com/cart/cartdelete/${_id}`)
    .then(() => {
      dispatch({ type: DELETE_TO_CART_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_ERROR });
    });
};

//http://localhost:2000/cart/cartpost
//http://localhost:2000/cart/cartdelete/
