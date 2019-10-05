import React from "react";
import Header from "./component/header.js";
import Footer from "./component/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./style/style.css";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
                <Footer />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
