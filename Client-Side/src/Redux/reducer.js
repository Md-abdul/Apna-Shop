import {
  ADD_TO_CART_FAILURE,
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

const initalState = {
  Product: [],
  cartItems: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        Product: payload,
        // Product: payload,
      };
    }
    case PRODUCT_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case PRODUCT_DELETE: {
      return {
        ...state,
        isLoading: false,
        payload: [...state.Product],
      }
    }
    case PRODUCT_POST:{
      return {
        ...state, isLoading:false, isError:false, Product: [...state.Product, payload] 
      }
    }
    case PRODUCT_UPDATE: {
      return {
        ...state, isLoading:false
      }
    }
    case ADD_TO_CART_SUCCESS: {
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
        isLoading: false,
      };
    }
    case ADD_TO_CART_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_TO_CART_SUCCESS: {
      return {
        ...state,
        cartItems: payload,
        isLoading: false,
      };
    }
    case DELETE_TO_CART_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        payload: [...state.cartItems],
      };
    }
    default: {
      return state;
    }
  }
};
