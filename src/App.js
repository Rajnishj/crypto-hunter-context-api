import { makeStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CoinPage from "./pages/CoinPage";
import HomePage from "./pages/HomePage";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "#ffffff",
      minHeight: "100vh",
    },
  }));
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
