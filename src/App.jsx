import { Outlet } from "react-router";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#1f1f1f", // dark gray background
            color: "#fff", // white text
            fontSize: "18px",
            padding: "16px 24px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
          },
          success: {
            iconTheme: {
              primary: "#4ade80", // green for success
              secondary: "#1f1f1f",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444", // red for error
              secondary: "#1f1f1f",
            },
          },
        }}
      />

      <Navbar></Navbar>
      <div className="mx-5 md:mx-24 lg:mx-28 min-h-[calc(100vh-100px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
