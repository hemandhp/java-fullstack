import  UserContext  from './components/UserContext';
import Profile from './components/Profile';


function App() {
  const userData = {
    name: "Hemand",
    age: 22,
    course: "ReactJS-Development",
  };



  return (
    <div>
      <UserContext.Provider 
      value={userData}>
        <h1>React Context API Example</h1>
        <Profile />
      </UserContext.Provider>
      

    </div>
  );
}
export default App;
