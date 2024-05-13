
import { useState, useEffect } from "react";
import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import { Footer } from "./Routes/Footer";
import { Navbar } from "./Routes/Navbar";
import { Dashboard } from "./Admin/Dashboard"; // Import Dashboard component for admin
// import { MainAdmin } from "./Admin/MainAdmin";

function App() {
  // Assuming you have some state to determine if the user is logged in as an admin
  const [isAdmin, setIsAdmin] = useState(false);

  // Example useEffect to simulate checking user's role when the component mounts
  useEffect(() => {
    // Simulate checking user's role from localStorage or API call
    const userRole = localStorage.getItem("userRole");
    if (userRole === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  console.log("isAdmin:", isAdmin); // Debugging: Check the value of isAdmin

  return (
    <>
      {/* Conditionally render Navbar based on isAdmin state */}
      {isAdmin ? <Dashboard /> : <Navbar />}
      {/* {isAdmin ? <MainAdmin/> : <Navbar/>} */}
      <AllRoutes />
      {isAdmin ? <Dashboard/>: <Footer/>}
      {/* <Footer /> */}
    </>
  );
}

export default App;
