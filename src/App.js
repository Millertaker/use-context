import UserComponent from "./components/userComponent"
import UserContext from "./context/UserContext"
import './App.css';

function App() {  
  var user = {
    name: 'Millertaker',
    age: 38,
    company: 'vm'
  }

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <h1>Use Context example</h1>

        <UserComponent />
      </div>  
    </UserContext.Provider>
  );
}

export default App;
