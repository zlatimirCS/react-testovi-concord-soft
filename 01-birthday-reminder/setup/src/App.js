import React from "react";
import List from "./List";
import data from "./data";
import "./App.css";

const App = () => {
    return (
        <section className="container">
            <List people={data} />
        </section>
    )
}

export default App;