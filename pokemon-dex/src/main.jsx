import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/config/configStore.js";
createRoot(document.getElementById("root")).render(
  //RTK Provider 적용
  <Provider store={store}>
    <App />
  </Provider>
);
