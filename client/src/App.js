/* eslint-disable react/jsx-filename-extension */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ExerciseList from "./components/ExercisesList";
import EditExercise from "./components/EditExercises";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
};

export default App;
