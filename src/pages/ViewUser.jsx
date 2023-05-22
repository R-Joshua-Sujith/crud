import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../App";
import { useContext } from "react";
import "../styles/ViewUser.css";
import Nav from "../components/Nav";
const ViewUser = () => {
  const { users } = useContext(data);
  const { id } = useParams();
  const userProfile = users.filter((user) => {
    return user.id === id;
  });
  return (
    <div>
      <Nav />
      <div className="profile">
        <h1>{userProfile[0].role}</h1>
        <img src="/user.png" />
        <div className="text">ID :{userProfile[0].id}</div>
        <div className="text">Name: {userProfile[0].name}</div>
        <div className="text">Class: {userProfile[0].class}</div>
        <div className="text">Email: {userProfile[0].email}</div>
      </div>
    </div>
  );
};

export default ViewUser;
