import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { data } from "../App";
import "../styles/CreateUser.css";
import Nav from "../components/Nav";
const CreateUser = () => {
  const { users } = useContext(data);

  const options = [
    {
      value: "Student",
    },
    {
      value: "Teacher",
    },
  ];

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [section, setSection] = useState("");
  const [email, setEmail] = useState("");
  const [userCategory, setUserCategory] = useState(options[0].value);

  const idHandler = (event) => {
    setId(event.target.value);
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const sectionHandler = (event) => {
    setSection(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const userCategoryHandler = (event) => {
    setUserCategory(event.target.value);
  };

  const submitHandler = () => {
    if (id == "" || name == "" || email == "" || section == "") {
      alert("Please Fill all the fields");
    } else {
      const obj = {
        id: id,
        name: name,
        class: section,
        email: email,
        role: userCategory,
      };

      users.push(obj);

      alert(`user "${name}" added successfully`);
      setId("");
      setName("");
      setEmail("");
      setSection("");
    }
  };

  return (
    <div>
      <Nav />
      <h1 className="headingg">Create User</h1>
      <div className="addForm">
        <div className="subForm">
          <input
            className="inputField"
            type="text"
            placeholder="Enter ID"
            value={id}
            onChange={idHandler}
          />
          <input
            className="inputField"
            type="text"
            placeholder="Enter User Name"
            value={name}
            onChange={nameHandler}
          />
          <input
            className="inputField"
            type="text"
            placeholder="Enter Class"
            onChange={sectionHandler}
            value={section}
          />
          <input
            className="inputField"
            type="email"
            placeholder="Enter Email"
            onChange={emailHandler}
            value={email}
          />
          <select
            name="users"
            id="users"
            onChange={userCategoryHandler}
            value={userCategory}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
          <div className="button" onClick={submitHandler}>
            Add User
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
