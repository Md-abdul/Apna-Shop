
import { useState, useEffect } from "react";
import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import { Footer } from "./Routes/Footer";
import { Navbar } from "./Routes/Navbar";
import { Dashboard } from "./Admin/Dashboard";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  console.log("isAdmin:", isAdmin);

  return (
    <>
      {isAdmin ? <Dashboard /> : <Navbar />}
      <AllRoutes />
      {isAdmin ? <Dashboard/>: <Footer/>}
    </>
  );
}

export default App;
