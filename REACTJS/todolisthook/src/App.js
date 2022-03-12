import Header from "./components/Header";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="todoapp">
      <Header />
      <Main />
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
