import { AuthContextProvider } from "@/context/authContext";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ToastContainer />
      <Component {...pageProps} />
  </AuthContextProvider>
  );
}
