import React from "react";
import Header from "./component/header.js";
import Footer from "./component/Footer";
import Todobody from "./component/todobody";
import "./style/style.css";

function App() {
    return (
        <React.Fragment>
            <Header />
            <Footer />
            <Todobody />
        </React.Fragment>
    );
}

export default App;
