import React from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, Select } from 'antd';
//import styles from "./PersonalDetails.module.css";
//import {store} from "../App.js"

const { Option } = Select;

const PersonalDetails = () => {
  //const [cone, setCone] = React.useContext(store);

  const onFinish = (values) => {
    // cone.address = values.address
    // cone.alternate_phone_number = values.alternate_phone_number
    // cone.base_location = values.base_location
    // cone.cg_email = values.cg_email
    // cone.first_name = values.first_name
    // cone.gender = values.gender
    // cone.phone_number = values.phone_number
    // cone.last_name = values.last_name

    // setCone({...cone})
  };

  //console.log("cone",cone)

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div >
      <h2>Personal Details</h2>
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
        {/* first name  */}
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[
            {
              required: true,
              message: 'Please input your firstname!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* last name  */}
        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[
            {
              required: true,
              message: 'Please input your lastname!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* gender  */}
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select
            placeholder="Select a option"
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>

        {/* base location  */}
        <Form.Item
          label="Base Location"
          name="base_location"
          rules={[
            {
              required: true,
              message: 'Please input your base location!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* CG mail  */}
        <Form.Item
          label="CG mail"
          name="cg_email"
          rules={[
            {
              required: true,
              message: 'Please input your base cg email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* address  */}
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: 'Please input your address!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* phone_number  */}
        <Form.Item
          label="Phone Number"
          name="phone_number"
          type='number'
          rules={[
            {
              required: true,
              message: 'Please input your phone_number!',
              type:'number'
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* alternate_phone_number  */}
        <Form.Item
          label="Alternate Phone Number"
          name="alternate_phone_number"
          rules={[
            {
              required: true,
              message: 'Please input your alternate_phone_number!',
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

export default PersonalDetails;