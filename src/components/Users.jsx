import { useContext } from "react";
import Nav from "./Nav";
import { data } from "../App";

const Users = () => {
  const { students } = useContext(data);
  return (
    <div>
      <Nav />
      {students.map((student) => {
        return (
          <div>
            <input value={student.id}></input>
            <input value={student.name}></input>
            <input value={student.class}></input>
            <input value={student.email}></input>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
