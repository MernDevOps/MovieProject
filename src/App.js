import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import  Home  from "../src/components/pages/Home";
import  About   from "../src/components/pages/pages/About";
import  ContactUs from "../src/components/pages/pages/ContactUs";
import  Faq   from "../src/components/pages/pages/Faq";
import  Policies   from "../src/components/pages/pages/Policies";
import  Signin   from "../src/components/pages/pages/loginpages/Signin";
import  Signup   from "../src/components/pages/pages/loginpages/Signup";
import  ManageProfile from "../src/components/pages/pages/loginpages/ManageProfile";
import  Settings from "../src/components/pages/pages/loginpages/Settings";
import Footer from "./components/Footer"



function App() {
  return (
    <>
    <Router>    
      <Header />   
      
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path="/About" component={About}><About /> </Route>
      <Route path="/ContactUs" component={ContactUs}><ContactUs /> </Route>
      <Route path="/Faq" component={Faq}><Faq /> </Route>
      <Route path="/Policies" component={Policies}><Policies /> </Route>
      <Route path="/Signin" component={Signin}><Signin /> </Route>
      <Route path="/Signup" component={Signup}><Signup /> </Route>
      <Route path="/ManageProfile" component={ManageProfile}><ManageProfile /> </Route>
      <Route path="/Settings" component={Settings}><Settings /> </Route>
         
      </Switch>
      <Footer /> 
    </Router>
    
    </>
  );
}

export default App;
