import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { router } from "./router/router";
import "./assets/css/styles.scss";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <>
        {router}
        <App />
      </>
    </Router>
  </Provider>,
  document.getElementById("root")
);
