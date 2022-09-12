import React, { useState,createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "../src/components/About";
import Adduser from "./components/Adduser";
import Employeedata from "./components/Employeedata";

export const store =createContext();
function App() {
  const [users, setUsers] = useState([]);
  const [find,setFind]=useState([
    {
      name: "",
      reportingManager: "",
      technicalLead : "",
      employeeID: ""
    }
  ]);
const [cone, setCone] = useState({
    name: "",
    SrNo: "",
    reportingManager: "",
    technicalLead : "",
    resourceStatus: "",
    gender : "",
    employeeID: "",
    globalID : "",
    skill : "",
    technology : "",
    bU : "",
    resourceType :"",
    grade :"",
    pyramid: "",
    baseLocation : "",
    anchorLocation: "",
    sSOID : "",
    CGemail : "",
    aXAEmail:"",
    CGstartDate:"",
    aXAStartDate :"",
    aXAbillingDate:"",
    aXAContractRenewal:"",
    planViewSetup :"",
    currentSquad :"",
    address :"",
    phoneNumber:"",
    alternatePhoneNumber:"",
    userID :"",
    project_code :"",
    remoteDesktop :"",
    onboardingTickets :"",
    offboardingTickets :"",
    releaseDate :"",
    resigned :"",
    comment :"",
  });
  return (
    <>
      {/* <store.Provider value={[cone, setCone]} /> */}

      <store.Provider value={[users, setUsers]}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/employee"
            element={<Employeedata find={find} setFind={setFind}/>}
            //users={cone} setUsers={setCone}
          />
          <Route path="/adduser" element={<Adduser />} />
          {/* <Route path="/adduser" element={<h1>Hello</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </store.Provider>
    </>
  );
}

export default App;
