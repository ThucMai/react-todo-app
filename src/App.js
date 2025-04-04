import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import { SettingProvider } from "./context/SettingContext";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <SettingProvider>
        <Navbar />
        <AppRoutes />
        <ToastContainer autoClose={1500}/>
      </SettingProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;