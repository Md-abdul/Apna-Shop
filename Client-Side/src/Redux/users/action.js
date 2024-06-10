import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionType";

export const signIn = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post(
      "https://apna-shop-g83q.onrender.com/user/login",
      userData
    );
    const token = response.data.token;
    dispatch({ type: LOGIN_SUCCESS, payload: token });
    localStorage.setItem("token", token);
    return true; // Return true indicating successful login
  } catch (error) {
    console.error("Sign In Error:", error);
    dispatch({ type: LOGIN_ERROR });
    return false; // Return false indicating login failure
  }
};

export const register = (formData) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  axios
    .post("https://apna-shop-g83q.onrender.com/user/signup", formData)
    .then((res) => {
      const token = res.data.token;
      dispatch({ type: SIGNUP_SUCCESS, payload: token });
      // localStorage.setItem('token', token);
    })
    .catch(() => {
      dispatch({ type: SIGNUP_ERROR });
    });
};

export const LogoutUsers = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
};
