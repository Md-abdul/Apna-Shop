// // actions.js
// import axios from "axios";
// import {
//   LOGIN_ERROR,
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGOUT,
//   SIGNUP_ERROR,
//   SIGNUP_REQUEST,
//   SIGNUP_SUCCESS,
// } from "./actionType";

// export const signIn = (userData) => (dispatch) => {
//   dispatch({ type: LOGIN_REQUEST });
//   axios
//     .post(
//       "http://localhost:2000/user/login",
//       userData
//     )
//     .then((res) => {
//       dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
//       localStorage.setItem('token', token)
//       // console.log(res)
//     })
//     .catch(() => {
//       // console.log(err.response.data)
//       dispatch({ type: LOGIN_ERROR });
//     });
// };

// export const register = (formData) => (dispatch) => {
//   dispatch({ type: SIGNUP_REQUEST });
//   axios
//     .post(
//       "http://localhost:2000/user/signup",
//       formData
//     )
//     .then((res) => {
//       dispatch({ type: SIGNUP_SUCCESS, payload: res.data.token });
//     })
//     .catch(() => {
//       dispatch({ type: SIGNUP_ERROR });
//     });
// };


// export const logout = () => (dispatch) => {
//   localStorage.removeItem('token');
//   dispatch({type:LOGOUT})
// }



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


// export const signIn = (userData) => (dispatch) => {
//   dispatch({ type: LOGIN_REQUEST });
//   axios
//     .post(
//       "http://localhost:2000/user/login",
//       userData
//     )
//     .then((res) => {
//       const token = res.data.token; 
//       dispatch({ type: LOGIN_SUCCESS, payload: token }); 
//       localStorage.setItem('token', token); 
//     })
//     .catch((err) => {
//       console.error("Sign In Error:", err);
//       dispatch({ type: LOGIN_ERROR }); 
//     });
// };

// export const signIn = (userData) => (dispatch) => {
//   dispatch({ type: LOGIN_REQUEST });
//   axios
//     .post(
//       "http://localhost:2000/user/login",
//       userData
//     )
//     .then((res) => {
//       const token = res.data.token; 
//       dispatch({ type: LOGIN_SUCCESS, payload: token }); 
//       localStorage.setItem('token', token); 
//     })
//     .catch((err) => {
//       console.error("Sign In Error:", err);
//       if (err.response) {
//         console.log("Error Status:", err.response.status);
//         console.log("Error Data:", err.response.data);
//       }
//       dispatch({ type: LOGIN_ERROR }); 
//     });
// };

export const signIn = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post(
      "http://localhost:2000/user/login",
      userData
    );
    const token = response.data.token;
    dispatch({ type: LOGIN_SUCCESS, payload: token });
    localStorage.setItem('token', token);
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
    .post(
      "http://localhost:2000/user/signup",
      formData
    )
    .then((res) => {
      const token = res.data.token;
      dispatch({ type: SIGNUP_SUCCESS, payload: token });
      localStorage.setItem('token', token);
    })
    .catch(() => {
      dispatch({ type: SIGNUP_ERROR });
    });
};

export const LogoutUsers = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({type:LOGOUT});
};
