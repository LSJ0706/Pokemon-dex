import Router from "./shared/Router";
import GlobalStyles from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      {/*GlobalStyle, Router, Toastify 적용*/}
      <GlobalStyles />
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
