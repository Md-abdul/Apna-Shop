// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./Redux/store.js";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//       <ToastContainer />
//     </Provider>
//   </BrowserRouter>
// );



import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
// import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    {/* <ToastContainer/> */}
  </BrowserRouter>
);
