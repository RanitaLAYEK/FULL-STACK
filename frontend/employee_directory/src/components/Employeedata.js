import React, { useContext, useEffect, useState } from "react";
import "./search.css";
import Search from "../components/Search";
import { store } from "../App";

const Employee = ({find,setFind}) => {
  // const [users, setUsers] = useState([]);
  // const [search,setSearch]=useState(0);
  const [users,setUsers] = useContext(store);
  const [timer,setTimer]=useState(0);


  const getUsers = async () => {
    const response = fetch("http://localhost:5000/api");
    console.log(response);
    //const data=
    setUsers(await (await response).json());
    setTimer(timer+1);
  };

  //  const getUsersById=async ()=>{
  //     const response1=fetch('http://localhost:5000/api/employee/${employeeID}');
  //     console.log(response1);
  //     //const data=
  //   setSearch(await (await response1).json());
  //   }

  useEffect(() => {
    getUsers();
    //getUsersById();
  }, [timer]);

  console.log(find);

  return (
    <div>
      <h2>ALL EMPLOYEE DATA</h2>
      <Search find={find} setFind={setFind}/>
      {/* <AppContext>
        </AppContext> */}
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {find[0].employeeID!=""?
          find.map((curUser) => {
            const {
              name,
              // SrNo,
              reportingManager,
              technicalLead,
              // resourceStatus,
              // gender,
              employeeID,
              //     globalID,
              //     skill,
              //     technology,
              //     bU,
              //     resourceType,
              //     grade,
              //     pyramid,
              //     baseLocation,
              //     anchorLocation,
              //     sSOID,
              //     CGemail,
              //     aXAEmail,
              //     CGstartDate,
              //     aXAStartDate,
              //     aXAbillingDate,
              //     aXAContractRenewal,
              //     planViewSetup,
              // currentSquad,
              // address,
              // phoneNumber,
              // alternatePhoneNumber,
              // userID,
              // project_code,
              // remoteDesktop,
              // onboardingTickets,
              // offboardingTickets,
              // releaseDate,
              // resigned,
              // comment }
            } = curUser;
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="ml-3 w-100">
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="employeeId">Name</span>{" "}
                          <span className="number1">{name}</span>{" "}
                        </div>
                        <div className="d-flex flex-column">
                          <span className="employeeId">Employee ID</span>{" "}
                          <span className="number1">{employeeID}</span>{" "}
                        </div>
                        <div className="d-flex flex-column">
                          <span className="reportingManager">
                            Reporting Manager
                          </span>{" "}
                          <span className="number2">{reportingManager}</span>{" "}
                        </div>
                        <div className="d-flex flex-column">
                          <span className="technicalLead">Technical Lead</span>{" "}
                          <span className="number3">{technicalLead}</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }) :
          users.map((curUser) => {
            const {
              name,
              // SrNo,
              reportingManager,
              technicalLead,
              // resourceStatus,
              // gender,
              employeeID,
              //     globalID,
              //     skill,
              //     technology,
              //     bU,
              //     resourceType,
              //     grade,
              //     pyramid,
              //     baseLocation,
              //     anchorLocation,
              //     sSOID,
              //     CGemail,
              //     aXAEmail,
              //     CGstartDate,
              //     aXAStartDate,
              //     aXAbillingDate,
              //     aXAContractRenewal,
              //     planViewSetup,
              // currentSquad,
              // address,
              // phoneNumber,
              // alternatePhoneNumber,
              // userID,
              // project_code,
              // remoteDesktop,
              // onboardingTickets,
              // offboardingTickets,
              // releaseDate,
              // resigned,
              // comment }
            } = curUser;
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="ml-3 w-100">
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="employeeId">Name</span>{" "}
                          <span className="number1">{name}</span>{" "}
                        </div>
                        <div className="d-flex flex-column">
                          <span className="employeeId">Employee ID</span>{" "}
                          <span className="number1">{employeeID}</span>{" "}
                        </div>
                        <div className="d-flex flex-column">
                          <span className="reportingManager">
                            Reporting Manager
                          </span>{" "}
                          <span className="number2">{reportingManager}</span>{" "}
                        </div>
                        <div className="d-flex flex-column">
                          <span className="technicalLead">Technical Lead</span>{" "}
                          <span className="number3">{technicalLead}</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
          }
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="col-10 col-md-4 mt-5">
            <div className="card p-2">
               <div className="d-flex align-items-center">
                  <div className="ml-3 w-100">
                          <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                              <div className="d-flex flex-column">
                                <h3 className="mb-0 mt-0 text-left">Ranita</h3><span className="number2">Webdevoloper</span>
                                <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                    <div className="d-flex flex-column">
                                        <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                          <div className="d-flex flex-column">
                                          <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                        </div>
                                      </div>
                        </div>


              <div className="col-10 col-md-4 mt-5">
            <div className="card p-2">
               <div className="d-flex align-items-center">
                  <div className="ml-3 w-100">
                          <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                              <div className="d-flex flex-column">
                                <h3 className="mb-0 mt-0 text-left">Ranita</h3>
                                <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                    <div className="d-flex flex-column">
                                        <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                          <div className="d-flex flex-column">
                                          <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-10 col-md-4 mt-5">
            <div className="card p-2">
               <div className="d-flex align-items-center">
                  <div className="ml-3 w-100">
                          <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                              <div className="d-flex flex-column">
                                <h3 className="mb-0 mt-0 text-left">Ranita</h3>
                                <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                    <div className="d-flex flex-column">
                                        <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                          <div className="d-flex flex-column">
                                          <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                        </div>
                                      </div>
                                    </div> */
}

//  const useGlobalContext = () => {
// return useContext(AppContext);
// };

export default Employee;
//,AppContext,useGlobalContext
