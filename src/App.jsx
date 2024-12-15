import "./App.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllRoutes from "./routes/AllRoutes";
import { HelmetProvider } from "react-helmet-async";
import PopupForm from "./components/PopupForm";
import WaitingLoader from "./components/WaitingLoader";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContextProvider";

function App() {
  return (
    <>
      <div id="prepeve">
        <ToastContainer />
        <HelmetProvider>
          <AllRoutes />
        </HelmetProvider>
        <PopupForm />
        <WaitingLoader />
      </div>
    </>
  );
}

export default App;
