import React from 'react'
//import styles from "./Adduser.module.css"
import 'antd/dist/antd.min.css';
import { Button, message, Steps } from 'antd';
import PersonalDetails from '../components/PersonalDetails';
import EmployeeDetails1 from '../components/EmployeeDetails1';
import EmployeeDetails2 from '../components/EmployeeDetails2';
import Skills from '../components/Skills';
//import {store} from "../App.js"

const { Step } = Steps;
const steps = [
  {
    title: 'Personal Details',
    content: <PersonalDetails/>,

  },
  {
    title: 'Employer Details - 1',
    content: <EmployeeDetails1/>,
    
  },
  {
    title: 'Employer Details - 2',
    content: <EmployeeDetails2/>,
  },
  {
    title: 'Skills',
    content: <Skills/>,
  },
];


const inStyles={
    stepsContent:{
        width: "800px",
        margin: "0 auto",
    }
}


const Adduser = () => {
    
    const [current, setCurrent] = React.useState(0);
    //const [cone, setCone]= React.useContext(store);

    
    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const handlePost=()=>{
        //console.log(cone)
    }
  

    return (
        <div>
            <Steps current={current}>
                {steps.map((item) => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div style={inStyles.stepsContent} className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" 
                        onClick={() => 
                            {
                                message.success('update complete!');
                                handlePost();
                            }
                        }
                    >
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button
                        style={{
                        margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Adduser;