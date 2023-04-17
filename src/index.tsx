// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { store } from "./redux/store";
// import { Provider } from "react-redux";
// import { RouterProvider } from "react-router-dom";
// import Router from "./router/router";
// import "./assets/css/styles.scss";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

// root.render(
//   <Provider store={store}>
//     <RouterProvider {...Router}>
//       <App />
//     </RouterProvider>
//   </Provider>
// );
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
