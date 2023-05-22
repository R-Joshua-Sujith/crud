import React from "react";
import "../styles/Home.css";
import Nav from "../components/Nav";
import { useContext } from "react";
import { data } from "../App";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Home = () => {
  const { users } = useContext(data);
  const navigate = useNavigate();
  let studentsCount = 0;
  let teachersCount = 0;

  for (let i = 0; i < users.length; i++) {
    if (users[i].role === "Student") {
      studentsCount++;
    } else if (users[i].role === "Teacher") {
      teachersCount++;
    }
  }
  return (
    <div>
      <Nav />
      <div className="Users">
        <div>
          <p>Total Users {studentsCount + teachersCount}</p>
          <img src="user.png" />
        </div>
        <div>
          <p>No of Students {studentsCount}</p>
          <img
            className="home-image"
            onClick={() => navigate("/students")}
            src="student.png"
          />
        </div>
        <div>
          <p>No of Teachers {teachersCount}</p>
          <img
            className="home-image"
            onClick={() => navigate("/teachers")}
            src="teacher.png"
          />
        </div>
      </div>
      <Link className="add-user" to="/add-user">
        +
      </Link>
    </div>
  );
};

export default Home;
