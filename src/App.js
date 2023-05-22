import React, { createContext, useEffect, useState } from "react";
import Users from "./components/Users";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Students from "./pages/Students";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teachers from "./pages/Teachers";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import ViewUser from "./pages/ViewUser";
import Menu from "./pages/Menu";

const data = createContext();

function App() {
  const users = [{
    id: "S101",
    name: "Joshua",
    class: "MCA",
    email: "j@gmail.com",
    role: "Student"
  },
  {
    id: "S102",
    name: "Sujith",
    class: "MBA",
    email: "s@gmail.com",
    role: "Student"
  },
  {
    id: "S103",
    name: "Kumar",
    class: "MSC",
    email: "k@gmail.com",
    role: "Student"
  },
  {
    id: "T101",
    name: "Bhuvana",
    class: "MSC",
    email: "b@gmail.com",
    role: "Teacher"
  },
  {
    id: "T102",
    name: "Abhishek",
    class: "MCA",
    email: "a@gmail.com",
    role: "Teacher"
  },
  {
    id: "T103",
    name: "Veena",
    class: "MBA",
    email: "v@gmail.com",
    role: "Teacher",
  }]


  return (
    <BrowserRouter>
      <data.Provider value={{ users }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/add-user" element={<CreateUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/view-user/:id" element={<ViewUser />} />
          <Route path="/menu" element ={<Menu/>}/>
        </Routes>
      </data.Provider>
    </BrowserRouter>



  );
}

export default App;
export { data };