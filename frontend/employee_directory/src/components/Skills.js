import React from 'react'
import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd';
import styles from "./PersonalDetails.module.css"
//import {store} from "../App.js"


const Skills = () => {
    //const [cone, setCone] = React.useContext(store);

    const onFinish = (values) => {
      // cone.resource_type = values.resource_type
      // cone.skill = values.skill
      // cone.technology = values.technology
      // cone.bu = values.bu
      // cone.grade = values.grade
      // cone.pyramid = values.pyramid
      // cone.anchor_location = values.anchor_location
      // cone.comments = values.comments
  
      // setCone({...cone})
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <div>
        <h2>Skills</h2>
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
          {/* resource_type  */}
          <Form.Item
            label="resource_type"
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
  
          {/* skill  */}
          <Form.Item
            label="skill"
            name="skill"
            rules={[
              {
                required: true,
                message: 'Please input your skill!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* technology  */}
          <Form.Item
            label="technology"
            name="technology"
            rules={[
              {
                required: true,
                message: 'Please input your technology!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* bu  */}
          <Form.Item
            label="bu"
            name="bu"
            rules={[
              {
                required: true,
                message: 'Please input your bu!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* grade  */}
          <Form.Item
            label="grade"
            name="grade"
            rules={[
              {
                required: true,
                message: 'Please input your base grade',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* pyramid  */}
          <Form.Item
            label="pyramid"
            name="pyramid"
            rules={[
              {
                required: true,
                message: 'Please input your pyramid!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* anchor_location  */}
          <Form.Item
            label="anchor_location"
            name="anchor_location"
            rules={[
              {
                required: true,
                message: 'Please input your anchor_location!',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          {/* comments  */}
          <Form.Item
            label="comments"
            name="comments"
            rules={[
              {
                required: true,
                message: 'Please input your comments!',
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

export default Skills