import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as GiIcons from "react-icons/gi";
import "./PrivateScreen.css";
import Home from '../pages/Home';
import Tasks from '../pages/Tasks';


const PrivateScreen = ({history}) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {

    if(!localStorage.getItem("authToken")){
      history.push("./login")
    }

    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("https://tasksubmissionapp.herokuapp.com/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, [history]);

  console.log(privateData);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };
  
  return error ? (
    <>
    <span className="error-message">{error}</span>
    </>
  ) : (
    <>
    <div className="header">
      <div><span className='brandname'>TASKER</span><GiIcons.GiRunningNinja className='logo'/></div>
      <div><button className="logout-btn" onClick={logoutHandler}>Logout</button></div>
    </div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/tasks' component={Tasks}/>
        </Switch>
      </Router>
    </>
  );
};


export default PrivateScreen;

