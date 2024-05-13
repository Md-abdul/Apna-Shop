// // import PropTypes from "prop-types";
// // import { useSelector } from "react-redux";
// // import { Navigate, useLocation } from "react-router-dom";

// // export const PrivateRoutes = ({ children }) => {
// //   const auth = useSelector((store) => store.UsersReducer.isAuth);
// //   const location = useLocation();

// //   return auth ? children : <Navigate state={{ from: location }} to="/login" />;
// // };

// // PrivateRoutes.propTypes = {
// //   children: PropTypes.node.isRequired,
// // };

// import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { useSelector } from "react-redux";
// import { Navigate, useLocation } from "react-router-dom";

// export const PrivateRoutes = ({ children }) => {
//   const auth = useSelector((store) => store.UsersReducer.isAuth);
//   const location = useLocation();
//   const [redirectPath, setRedirectPath] = useState(null);

//   useEffect(() => {
//     // Store the attempted private route when user is not authenticated
//     if (!auth) {
//       setRedirectPath(location.pathname);
//     }
//   }, [auth, location]);

//   return auth ? (
//     children
//   ) : (
//     <Navigate state={{ from: redirectPath }} to="/login" />
//   );
// };

// PrivateRoutes.propTypes = {
//   children: PropTypes.node.isRequired,
// };



import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast

export const PrivateRoutes = ({ children }) => {
  const auth = useSelector((store) => store.UsersReducer.isAuth);
  const location = useLocation();
  const [redirectPath, setRedirectPath] = useState(null);

  useEffect(() => {
    // Store the attempted private route when user is not authenticated
    if (!auth) {
      setRedirectPath("/login");
      // Display toast message prompting user to log in
      toast.error("Please log in to access this page");
      // alert('Please log in to access this page')
    }
  }, [auth, location]);

  return auth ? (
    children
  ) : (
    <Navigate state={{ from: redirectPath }} to="/login" />
  );
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
