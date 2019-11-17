/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = props => {
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={`/edit/${props.exercise._id}`}>edit</Link>
        <br />
        <a href="#" onClick={() => props.deleteExercise(props.exercise._id)}>
          delete
        </a>
      </td>
    </tr>
  );
};

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.state = { exercises: [] };

    this.deleteExercise = this.deleteExercise.bind(this);
    this.exerciseList = this.exerciseList.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/exercises/")
      .then(res => {
        this.setState({
          exercises: res.data
        });
      })
      .catch(err => console.log(err));
  }

  deleteExercise(id) {
    const { exercises } = this.state;
    axios
      .delete(`http://localhost:4000/exercises/${id}`)
      .then(res => console.log(res.data));
    this.setState({
      exercises: exercises.filter(el => el.id !== id)
    });
  }

  exerciseList() {
    const { exercises } = this.state;
    return exercises.map(currentExercise => (
      <Exercise
        key={currentExercise._id}
        exercise={currentExercise}
        deleteExercise={this.deleteExercise}
      />
    ));
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
