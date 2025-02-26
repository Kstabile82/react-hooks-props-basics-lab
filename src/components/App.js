import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
function App() {
  

  return (
    <div>
      <NavBar />
      <Home username={user.name} city={user.city} color={user.color}/>
      <About bio={user.bio} links={user.links}/>
    </div>
  );
}

export default App;

//pass down data from the user object as props to the Home component so that it renders correctly. 

//App should also pass down a prop of bio to the About component.

//pass down the github and linkedin links to the About component, so that About can pass those props down to the Links component you will create.