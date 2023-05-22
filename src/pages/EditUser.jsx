import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { data } from "../App";
import Nav from "../components/Nav";
import { useContext } from "react";
import "../styles/EditUser.css";
const EditUser = () => {
  const { users } = useContext(data);
  const { id } = useParams();
  const userProfile = users.filter((user) => {
    return user.id === id;
  });

  const options = [
    {
      value: "Student",
    },
    {
      value: "Teacher",
    },
  ];
  const [iD, setId] = useState(userProfile[0].id);
  const [name, setName] = useState(userProfile[0].name);
  const [section, setSection] = useState(userProfile[0].class);
  const [email, setEmail] = useState(userProfile[0].email);
  const [userCategory, setUserCategory] = useState(userProfile[0].role);

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

  return (
    <div>
      <Nav />
      <h1 className="headingg">Edit User</h1>
      <div className="addForm">
        <div className="subForm">
          <input
            type="text"
            placeholder="Enter ID"
            value={iD}
            onChange={idHandler}
          />
          <input
            type="text"
            placeholder="Enter User Name"
            value={name}
            onChange={nameHandler}
          />
          <input
            type="text"
            placeholder="Enter Class"
            value={section}
            onChange={sectionHandler}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={emailHandler}
          />
          <select
            name="users"
            id="users"
            value={userCategory}
            onChange={userCategoryHandler}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
          <div
            className="buttonn"
            onClick={() => {
              if (iD == "" || name == "" || email == "" || section == "") {
                alert("Please Fill all the fields");
              } else {
                const index = users.findIndex(
                  (student) => student.id === userProfile[0].id
                );

                const obj = {
                  id: iD,
                  name: name,
                  class: section,
                  email: email,
                  role: userCategory,
                };
                if (userCategory == userProfile[0].role) {
                  users[index] = obj;
                } else {
                  users.splice(index, 1);
                  users.push(obj);
                }
                alert("Data saved successfully");
              }
            }}
          >
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
