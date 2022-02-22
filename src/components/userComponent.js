
import UserContext from "../context/UserContext";
import { useContext } from "react";

function UserComponent() {
  const {name, age, company} = useContext(UserContext);
  return (
    <div className="App">
      <p>Username: {name} </p>
      <p>Age: {age}</p>
      <p>Company: {company}</p>
    </div>
  );
}

export default UserComponent;
