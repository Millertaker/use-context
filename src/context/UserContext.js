import { createContext } from "react";

const UserContext = createContext({
  name: null,
  age: null
})

export default UserContext