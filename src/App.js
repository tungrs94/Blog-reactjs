import React from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import Anhbia from "./component/Anhbia";
import './App.css'
import Footer from "./component/Footer";


function App() {

    return (
        <div>
            <Header/>
            <Anhbia/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;