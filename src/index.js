import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  AMOUNT: 3
};

ReactDOM.render(<App placesAmount={Settings.AMOUNT} />, document.querySelector(`#root`));
