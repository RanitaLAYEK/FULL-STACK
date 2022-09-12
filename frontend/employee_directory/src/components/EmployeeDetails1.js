import {React,useContext} from 'react'
import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd';
//import styles from "./PersonalDetails.module.css"
//import {store} from "../App.js"


const EmployeeDetails1 = () => {
    //const [cone, setCone] = React.useContext(store);

    const onFinish = (values) => {
      // cone.reporting_manager = values.reporting_manager
      // cone.technical_lead = values.technical_lead
      // cone.resource_status = values.resource_status
      // cone.employee_id = values.employee_id
      // cone.global_id = values.global_id
      // cone.resource_type = values.resource_type
      // cone.sso_id = values.sso_id
      // cone.cg_email = values.cg_email
      // cone.axa_email = values.axa_email
      // cone.axa_contract_renewal = values.axa_contract_renewal
      // cone.current_squad = values.current_squad
  
      // setCone({...cone})
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <div>
        <h2>Employer Details - 1</h2>
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
          {/* reporting_manager  */}
          <Form.Item
            label="reporting manager"
            name="reporting_manager"
            rules={[
              {
                required: true,
                message: 'Please input your reporting_manager!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* technical_lead  */}
          <Form.Item
            label="technical lead"
            name="technical_lead"
            rules={[
              {
                required: true,
                message: 'Please input your technical_lead!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* resource_status  */}
          <Form.Item
            label="resource status"
            name="resource_status"
            rules={[
              {
                required: true,
                message: 'Please input your resource_status!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* employee_id  */}
          <Form.Item
            label="employee id"
            name="employee_id"
            rules={[
              {
                required: true,
                message: 'Please input your employee_id!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* global_id  */}
          <Form.Item
            label="global id"
            name="global_id"
            rules={[
              {
                required: true,
                message: 'Please input your base global_id',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* resource_type  */}
          <Form.Item
            label="resource type"
            name="resource_type"
            rules={[
              {
                required: true,
                message: 'Please input your resource_type!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* sso_id  */}
          <Form.Item
            label="sso id"
            name="sso_id"
            rules={[
              {
                required: true,
                message: 'Please input your sso_id!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* cg_email  */}
          <Form.Item
            label="cg email"
            name="cg_email"
            rules={[
              {
                required: true,
                message: 'Please input your cg_email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* axa_email  */}
          <Form.Item
            label="axa email"
            name="axa_email"
            rules={[
              {
                required: true,
                message: 'Please input your axa_email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* axa_contract_renewal  */}
          <Form.Item
            label="axa_contract_renewal"
            name="axa_contract_renewal"
            rules={[
              {
                required: true,
                message: 'Please input your axa_contract_renewal!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* current_squad  */}
          <Form.Item
            label="current_squad"
            name="current_squad"
            rules={[
              {
                required: true,
                message: 'Please input your current_squad!',
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

export default EmployeeDetails1;