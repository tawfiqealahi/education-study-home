import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Membership from "./components/Membership/Membership";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import AllCourses from "./components/AllCourses/AllCourses";

function App() {

  return (
    <div className="App">
     
     {/* <Banner></Banner>
     <AllTeams></AllTeams> */}
    
    <Router>
      <Switch>
        <Route exact path="/">
     <Home></Home>
        </Route>
        <Route exact path="/home">
     <Home></Home>
        </Route>
        <Route exact path="/membership">
     <Membership></Membership>
        </Route>
        <Route exact path="/all-course">
        <AllCourses></AllCourses>
        </Route>
        <Route exact path="/about-us">
     <About></About>
        </Route>
        <Route exact path="/contact-us">
     <Contact></Contact>
        </Route>
        <Route  path="*">
      <Error></Error>
        </Route>
        
        <Route path="/details/:teamId">
        <Details></Details>
        </Route>
      </Switch>
    </Router>
   
    
    </div>
  );
}

export default App;
