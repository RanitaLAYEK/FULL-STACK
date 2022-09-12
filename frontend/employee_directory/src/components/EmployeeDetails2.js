import React from 'react'
import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd';
//import styles from "./PersonalDetails.module.css"
//import {store} from "../App.js"


const EmployeeDetails2 = () => {
    //const [cone, setCone] = React.useContext(store);

    const onFinish = (values) => {
      // cone.cg_start_date = values.cg_start_date
      // cone.axa_start_date = values.axa_start_date
      // cone.axa_billing_date = values.axa_billing_date
      // cone.user_id = values.user_id
      // cone.project_code = values.project_code
      // cone.remote_desktop = values.remote_desktop
      // cone.onboarding_ticket = values.onboarding_ticket
      // cone.offboarding_ticket = values.offboarding_ticket
      // cone.release_date = values.release_date
      // cone.resigned = values.resigned
      // cone.plan_view_setup = values.plan_view_setup
  
      // setCone({...cone})
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <div>
        <h2>Employer Details - 2</h2>
        <Form
          name="basic"
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* cg_start_date  */}
          <Form.Item
            label="cg_start_date"
            name="cg_start_date"
            rules={[
              {
                required: true,
                message: 'Please input your cg_start_date!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* axa_start_date  */}
          <Form.Item
            label="axa_start_date"
            name="axa_start_date"
            rules={[
              {
                required: true,
                message: 'Please input your axa_start_date!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* axa_billing_date  */}
          <Form.Item
            label="axa_billing_date"
            name="axa_billing_date"
            rules={[
              {
                required: true,
                message: 'Please input your axa_billing_date!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* user_id  */}
          <Form.Item
            label="user_id"
            name="user_id"
            rules={[
              {
                required: true,
                message: 'Please input your user_id!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* project_code  */}
          <Form.Item
            label="project_code"
            name="project_code"
            rules={[
              {
                required: true,
                message: 'Please input your base project_code',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* remote_desktop  */}
          <Form.Item
            label="remote_desktop"
            name="remote_desktop"
            rules={[
              {
                required: true,
                message: 'Please input your remote_desktop!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* onboarding_ticket  */}
          <Form.Item
            label="onboarding_ticket"
            name="onboarding_ticket"
            rules={[
              {
                required: true,
                message: 'Please input your onboarding_ticket!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* offboarding_ticket  */}
          <Form.Item
            label="offboarding_ticket"
            name="offboarding_ticket"
            rules={[
              {
                required: true,
                message: 'Please input your offboarding_ticket!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* release_date  */}
          <Form.Item
            label="release_date"
            name="release_date"
            rules={[
              {
                required: true,
                message: 'Please input your release_date!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* resigned  */}
          <Form.Item
            label="resigned"
            name="resigned"
            rules={[
              {
                required: true,
                message: 'Please input your resigned!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* plan_view_setup  */}
          <Form.Item
            label="plan_view_setup"
            name="plan_view_setup"
            rules={[
              {
                required: true,
                message: 'Please input your plan_view_setup!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 0,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
}

export default EmployeeDetails2